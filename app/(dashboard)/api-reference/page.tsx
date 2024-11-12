import { getSideBarLinkItems } from "@/lib/resource-server-only.util";
import { redirect } from "next/navigation";
import React from "react";

const ApiReferencePage = () => {
  const referenceSideBarLinks = getSideBarLinkItems("api-reference");

  return redirect(referenceSideBarLinks.navMain[0].url);
};

export default ApiReferencePage;
