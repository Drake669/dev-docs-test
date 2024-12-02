import ReferenceComponet from "@/components/APIReference/ReferenceComponent";
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

  const onThisPage = getHeadings(data.content);

  return <ReferenceComponet data={data} onThisPage={onThisPage} />;
};

export default DocsPage;
