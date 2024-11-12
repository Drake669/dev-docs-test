"use client";

import { NotebookPen, PackageIcon, SearchIcon } from "lucide-react";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export function SearchBar() {
  const [open, setOpen] = useState(false);
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

  const resources = Array.from({ length: 5 }, (_, index) => ({
    id: `resource-${index + 1}`,
    title: `Resource Title ${index + 1}`,
  }));

  return (
    <>
      <Button
        variant={"ghost"}
        className="flex items-center justify-between w-full hover:bg-white border"
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
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup
            heading={resources.length === 0 ? "No Resource" : "All Ressoures"}
          >
            {resources.map((resource) => (
              <Link key={resource.id} href={`/${resource.id}`}>
                <CommandItem>
                  <PackageIcon className="mr-2 h-4 w-4" />
                  <span>{resource.title}</span>
                </CommandItem>
              </Link>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
