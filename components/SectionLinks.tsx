"use client";

import { convertToAnchorLink } from "@/lib/resource.util";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Link } from "lucide-react";

const SectionLinks = ({ title }: { title: string }) => {
  const [currentHash, setCurrentHash] = useState("");
  const isActive = currentHash === convertToAnchorLink(title);

  useEffect(() => {
    const handleHashChange = () => {
      const targetId = convertToAnchorLink(title).substring(1);
      const element = document.getElementById(targetId);

      if (element && window.location.hash === `#${targetId}`) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [currentHash, title]);

  return (
    <a href={convertToAnchorLink(title)} key={title}>
      <Button
        variant={"ghost"}
        className={cn(
          isActive && "bg-sidebar-accent text-sidebar-accent-foreground",
          "w-full flex items-center gap-x-1 font-light text-xs"
        )}
      >
        <Link className="w-2 h-2" />
        {title}
      </Button>
    </a>
  );
};

export default SectionLinks;
