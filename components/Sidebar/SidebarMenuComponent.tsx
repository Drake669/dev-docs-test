"use client";
import { usePathname } from "next/navigation";
import React from "react";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "../ui/sidebar";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { SidebarLinks } from "@/lib/resource-types";
import SidebarSkeleton from "./SidebarSkeleton";

const SidebarMenuComponent = ({
  sidebarLinks,
}: {
  sidebarLinks: SidebarLinks | null;
}) => {
  const pathName = usePathname();

  const isActive = (url: string, items: any[]) => {
    if (items.length > 0) return false;
    return pathName.startsWith(url);
  };
  return (
    <SidebarMenu>
      {sidebarLinks ? (
        sidebarLinks.navMain.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              asChild
              className="font-semibold h-auto p-1.5"
              isActive={isActive(item.url, item.items)}
            >
              <Link href={item.url} className="font-medium active">
                {item.title}
                {item.isNew && (
                  <Badge variant={"default"} className="rounded-full">
                    New
                  </Badge>
                )}
              </Link>
            </SidebarMenuButton>
            {item.items?.length ? (
              <SidebarMenuSub>
                {item.items.map((item) => (
                  <SidebarMenuSubItem key={item.title}>
                    <SidebarMenuSubButton
                      asChild
                      isActive={isActive(item.url, item.items)}
                      className="h-auto p-1.5"
                    >
                      <Link
                        href={item.url}
                        className="flex items-center gap-x-2"
                      >
                        {item.title}
                        {item.isNew && (
                          <Badge variant={"default"} className="rounded-full">
                            New
                          </Badge>
                        )}
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            ) : null}
          </SidebarMenuItem>
        ))
      ) : (
        <SidebarSkeleton />
      )}
    </SidebarMenu>
  );
};

export default SidebarMenuComponent;
