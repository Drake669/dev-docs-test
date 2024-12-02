"use client";

import { SearchBar } from "./Searchbar";
import { Button } from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "./ThemeSwitcher";
import AlgoliaProvider from "./Algolia/provider";

const Navbar = () => {
  //const [isLight, setIsLight] = useState(true);
  const pathName = usePathname();

  const { resolvedTheme, setTheme } = useTheme();

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
    <div
      className={cn(
        "shadow-sm flex items-center pl-8 p-4 h-full bg-opacity-30 backdrop-blur-lg backdrop-filter border-b"
      )}
    >
      <SidebarTrigger className="flex md:hidden" />
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
        <AlgoliaProvider>
          <SearchBar />
        </AlgoliaProvider>
        <ThemeSwitcher />
        <Link href={"https://app.built.africa/"}>
          <Button
            variant={"outline"}
            className="bg-accent text-accent-foreground"
          >
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
