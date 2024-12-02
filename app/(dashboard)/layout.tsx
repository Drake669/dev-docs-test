import React from "react";
import { cookies } from "next/headers"; // To access cookies on the server
import { SidebarProvider } from "@/components/ui/sidebar";
import MainNavigation from "@/components/NavigationMenu";
import { AppSidebar } from "@/components/Sidebar/app-sidebar";
import { getSideBarLinkItems } from "@/lib/resource-server-only.util";

const DocsLayout = async ({ children }: { children: React.ReactNode }) => {
  const sidebarItems = getSideBarLinkItems("docs");

  // Retrieve the sidebar:state cookie
  const sidebarState = cookies().get("sidebar:state")?.value === "true";

  // Adjust padding based on the sidebar state
  const layoutClass = sidebarState ? "md:pl-0" : "md:pl-64";

  return (
    <SidebarProvider className="h-full">
      <div className={`h-[80px] fixed inset-y-0 z-50 w-full ${layoutClass}`}>
        <MainNavigation />
      </div>
      <div
        className={`hidden md:flex w-60 fixed flex-col inset-y-0 h-full z-50 ${
          sidebarState ? "hidden" : ""
        }`}
      >
        <AppSidebar sidebarItems={sidebarItems} />
      </div>
      <main className={`pt-[80px] w-full h-full ${layoutClass}`}>
        {children}
      </main>
    </SidebarProvider>
  );
};

export default DocsLayout;
