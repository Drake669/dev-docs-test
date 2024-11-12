import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import MainNavigation from "@/components/NavigationMenu";
import { AppSidebar } from "@/components/Sidebar/app-sidebar";
import { getSideBarLinkItems } from "@/lib/resource-server-only.util";

const DocsLayout = async ({ children }: { children: React.ReactNode }) => {
  const sidebarItems = getSideBarLinkItems("docs");

  return (
    <SidebarProvider>
      <AppSidebar sidebarItems={sidebarItems} />
      <main className="h-full w-full">
        <div className="h-[80px] w-full sticky top-0  z-20">
          <MainNavigation />
        </div>
        <div className="h-full">{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default DocsLayout;
