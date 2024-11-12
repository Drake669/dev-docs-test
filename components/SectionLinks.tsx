"use client";

import { convertToAnchorLink } from "@/lib/resource.util";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

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
      <li className={cn("accent-a2", isActive && "font-bold text-[#002451]")}>
        {title}
      </li>
    </a>
  );
};

export default SectionLinks;
