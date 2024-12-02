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
} from "@/components/ui/sidebar";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { SidebarLinks } from "@/lib/resource-types";
import { cn } from "@/lib/utils";

const SidebarMenuComponent = dynamic(() => import("./SidebarMenuComponent"));
const SidebarLogo = dynamic(() => import("./SidebarLogo"), { ssr: false });

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
                <SidebarLogo />
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Documentation</span>
                  <span>v1.0.0</span>
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
    </Sidebar>
  );
}
