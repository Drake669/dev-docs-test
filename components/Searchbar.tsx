"use client";

import { HashIcon, PackageIcon, SearchIcon } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { debounce } from "lodash";
import { useInstantSearch, useSearchBox } from "react-instantsearch";
import { Input } from "./ui/input";
import markdownit from "markdown-it";

interface Resource {
  title: string;
  content_1: string;
  content_2: string;
  content_3: string;
  content_4: string;
  content_5: string;
  link: string;
  _highlightResult: any;
}

export function SearchBar() {
  const [open, setOpen] = useState(false);
  const { results } = useInstantSearch();
  const { refine } = useSearchBox();
  const md = markdownit({ html: true });

  const debouncedRefine = useMemo(
    () => debounce((value) => refine(value), 1000),
    [refine]
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    debouncedRefine(e.target.value);
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        variant={"ghost"}
        className="flex items-center justify-between w-full bg-accent text-accent-foreground"
        onClick={() => {
          setOpen(true);
        }}
      >
        <div className="text-slate-500 text-md flex items-center">
          <SearchIcon className="h-4 w-4 mr-2" />
          Search Docs...
        </div>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-75 mr-2">
          <span className="text-xs">⌘</span>J
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Input
          placeholder="Type a command or search..."
          onChange={(e) => {
            handleChange(e);
          }}
          className="border-none rounded-none h-[250px] mb-2 focus-visible:ring-0"
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup
            heading={
              results.hits.length === 0 ? "No Resource" : "All Ressoures"
            }
          >
            {results.hits.map((resource: Resource) => (
              <Link
                key={resource.link}
                href={`${resource.link}`}
                className="cursor-pointer"
                target="_blank"
              >
                <CommandItem className="flex flex-col items-start gap-y-2 cursor-pointer">
                  <div className="flex items-center gap-x-2">
                    <PackageIcon className="mr-2 h-4 w-4" />
                    <span>{resource.title}</span>
                  </div>
                  <div className="pl-9 flex items-center gap-x-2">
                    <HashIcon className="mr-2 h-4 w-4" />
                    <span
                      dangerouslySetInnerHTML={{
                        __html: md.render(
                          `${resource._highlightResult.content_1.value.slice(
                            0,
                            200
                          )}...`
                        ),
                      }}
                    ></span>
                  </div>
                </CommandItem>
              </Link>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
