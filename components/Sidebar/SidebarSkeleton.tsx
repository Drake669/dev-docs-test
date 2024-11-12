import React from "react";
import { Skeleton } from "../ui/skeleton";

const SidebarSkeleton = () => {
  const sidebarItems = Array.from({ length: 10 });
  return (
    <div className="flex flex-col items-center gap-y-4">
      {sidebarItems.map((_, index) => (
        <Skeleton
          className="rounded-lg h-8 w-full flex items-center gap-x-2"
          key={index}
        />
      ))}
    </div>
  );
};

export default SidebarSkeleton;
