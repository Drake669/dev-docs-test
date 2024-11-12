import { getSideBarLinkItems } from "@/lib/resource-server-only.util";
import { redirect } from "next/navigation";

const DocsPage = () => {
  const docSideBarLinks = getSideBarLinkItems("docs");

  return redirect(docSideBarLinks.navMain[0].url);
};

export default DocsPage;
