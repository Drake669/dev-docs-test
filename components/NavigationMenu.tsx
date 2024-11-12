"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { SearchBar } from "./Searchbar";
import { Button } from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isLight, setIsLight] = useState(true);
  const pathName = usePathname();

  const activeClass = clsx(
    "data-[state=inactive]:bg-transparent data-[state=active]:bg-transparent data-[state=inactive]:shadow-none data-[state=active]:shadow-none",
    "relative flex flex-nowrap items-center justify-start gap-2 px-0 accent-a1",
    "after:absolute  after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:bg-primary",
    "data-[state=active]:after:visible data-[state=inactive]:after:collapse",
    "data-[state=active]:text-primary data-[state=inactive]:text-dark-40"
  );

  const defaultTabValue = () => {
    if (pathName.startsWith("/docs")) return "docs";
    if (pathName.startsWith("/api-reference")) return "api-reference";
    return "docs";
  };

  return (
    <div className="border-b shadow-sm flex bg-white items-center pl-8 p-4 h-full">
      <SidebarTrigger />
      <div className="ml-auto flex gap-x-2">
        <Tabs defaultValue={defaultTabValue()}>
          <TabsList className="flex bg-transparent gap-x-4">
            <Link href={"/docs"}>
              <TabsTrigger value="docs" className={activeClass}>
                Docs
              </TabsTrigger>
            </Link>
            <Link href={"/api-reference"}>
              <TabsTrigger value="api-reference" className={activeClass}>
                API Reference
              </TabsTrigger>
            </Link>
          </TabsList>
        </Tabs>
        <SearchBar />
        <Button
          variant={"ghost"}
          className="border p-3"
          onClick={() => {
            setIsLight((prev) => !prev);
          }}
        >
          {isLight ? (
            <SunIcon className="w-6 h-6" />
          ) : (
            <MoonIcon className="w-6 h-6" />
          )}
        </Button>
        <Button variant={"outline"}>Sign Up</Button>
      </div>
    </div>
  );
};

export default Navbar;
