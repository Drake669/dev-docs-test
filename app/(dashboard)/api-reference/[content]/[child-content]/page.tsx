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

  return <ReferenceComponet data={data} onThisPage={onThisPage} />;
};

export default DocsPage;
