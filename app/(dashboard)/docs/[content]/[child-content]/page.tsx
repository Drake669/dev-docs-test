import DocsComponent from "@/components/Docs/DocsComponent";
import {
  generatePageMetadata,
  getNextAndPrevious,
  getSideBarLinkItems,
  readMDXFile,
} from "@/lib/resource-server-only.util";
import { getHeadings } from "@/lib/resource.util";
import { ResolvingMetadata } from "next";

const pagePath = "resources/docs";

export async function generateMetadata(
  {
    params,
  }: {
    params: { content: string; "child-content": string };
  },
  parent: ResolvingMetadata
) {
  return await generatePageMetadata(
    {
      content: params["child-content"],
      pagePath: `${pagePath}/${params.content}`,
    },
    parent
  );
}

const DocsPage = ({
  params,
}: {
  params: { content: string; "child-content": string };
}) => {
  const data = readMDXFile(
    params["child-content"],
    `${pagePath}/${params.content}`
  );
  const onThisPage = getHeadings(data.content);

  const docSideBarLinks = getSideBarLinkItems("docs");
  const nextAndPreviousLinks = getNextAndPrevious(
    docSideBarLinks.navMain,
    `/docs/${params.content}/${params["child-content"]}`
  );
  return (
    <DocsComponent
      data={data}
      onThisPage={onThisPage}
      nextAndPreviousLinks={nextAndPreviousLinks}
    />
  );
};

export default DocsPage;