"use client";

import {
  ComponentProps,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { SidebarLinks } from "@/lib/resource-types";

const SidebarMenuComponent = dynamic(() => import("./SidebarMenuComponent"));

interface AppSidebarProps extends ComponentProps<typeof Sidebar> {
  sidebarItems: SidebarLinks;
}

export function AppSidebar({ ...props }: AppSidebarProps) {
  const { sidebarItems, ...rest } = props;
  const pathName = usePathname();
  const [sidebarLinks, setSidebarLinks] = useState<SidebarLinks | null>(
    sidebarItems
  );

  const resolveSidebarLinkItems = useMemo(() => {
    if (pathName.startsWith("/docs")) return "docs";
    if (pathName.startsWith("/api-reference")) return "api-reference";
    return "docs";
  }, [pathName]);

  const fetchSidebarLinks = async (folder: string) => {
    const response = await fetch(`/api/sidebar/${folder}`);
    const data = await response.json();
    setSidebarLinks(data);
  };

  useEffect(() => {
    fetchSidebarLinks(resolveSidebarLinkItems);
  }, [resolveSidebarLinkItems]);

  return (
    <Sidebar {...rest} className="z-20">
      <SidebarHeader className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <Image
                  src={"/img/logo.png"}
                  alt="built logo"
                  width={200}
                  height={200}
                  className="size-full"
                />
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Documentation</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <hr className="w-full" />
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenuComponent sidebarLinks={sidebarLinks} />
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
