import ReferenceComponet from "@/components/APIReference/ReferenceComponent";
import DocsComponent from "@/components/Docs/DocsComponent";
import {
  generatePageMetadata,
  getNextAndPrevious,
  getSideBarLinkItems,
  readMDXFile,
} from "@/lib/resource-server-only.util";
import { getHeadings } from "@/lib/resource.util";
import { ResolvingMetadata } from "next";

const pagePath = "resources/api-reference";

export async function generateMetadata(
  {
    params,
  }: {
    params: { content: string };
  },
  parent: ResolvingMetadata
) {
  return await generatePageMetadata(
    { content: params.content, pagePath },
    parent
  );
}

const DocsPage = ({ params }: { params: { content: string } }) => {
  const data = readMDXFile(params.content, pagePath);

  const referenceSideBarLinks = getSideBarLinkItems("api-reference");
  const nextAndPreviousLinks = getNextAndPrevious(
    referenceSideBarLinks.navMain,
    `/api-reference/${params.content}`
  );
  const onThisPage = getHeadings(data.content);

  return (
    <ReferenceComponet
      data={data}
      nextAndPreviousLinks={nextAndPreviousLinks}
      onThisPage={onThisPage}
    />
  );
};

export default DocsPage;
