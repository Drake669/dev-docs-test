import React from "react";
import CustomMarkdownRenderer from "../MarkdownRenderer/CustomMarkdownRenderer";
import { NavigationSheet } from "../NavigationSheet";

interface ReferenceComponetProps {
  data: {
    content: string;
    metaTags: {
      title: string;
      description: string;
    };
  };
  onThisPage: string[];
}

const ReferenceComponet = ({ data, onThisPage }: ReferenceComponetProps) => {
  return (
    <>
      <div className="fixed top-24 right-4">
        <NavigationSheet onThisPage={onThisPage} />
      </div>
      <article className="w-full flex flex-col items-start justify-start h-full mt-8 px-8">
        <CustomMarkdownRenderer folder="api-reference">
          {data.content}
        </CustomMarkdownRenderer>
      </article>
    </>
  );
};

export default ReferenceComponet;
