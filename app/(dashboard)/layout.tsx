import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import MainNavigation from "@/components/NavigationMenu";
import { AppSidebar } from "@/components/Sidebar/app-sidebar";

const DocsLayout = async ({ children }: { children: React.ReactNode }) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/sidebar/docs`
  );
  const sidebarItems = await data.json();

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
