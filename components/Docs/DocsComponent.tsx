import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionLinks from "../SectionLinks";
import CustomMarkdownRenderer from "../MarkdownRenderer/CustomMarkdownRenderer";

interface DocsComponentProps {
  data: {
    content: string;
    metaTags: {
      title: string;
      description: string;
    };
  };
  nextAndPreviousLinks: {
    next: { url: string; title: string };
    previous: { url: string; title: string };
  } | null;
  onThisPage: string[];
}

const DocsComponent = ({
  data,
  nextAndPreviousLinks,
  onThisPage,
}: DocsComponentProps) => {
  return (
    <article className="w-full flex flex-col items-start justify-start gap-[60px] md:gap-16 h-full mt-8 px-8">
      <section className="flex flex-col md:flex-row md:gap-5 w-full h-full">
        <div className="w-full md:w-[70%] flex flex-col gap-y-10  break-words">
          <CustomMarkdownRenderer folder="doc">
            {data.content}
          </CustomMarkdownRenderer>
          {nextAndPreviousLinks && (
            <div className="flex items-center gap-x-2 w-full  justify-between pb-16">
              <Link
                href={`${nextAndPreviousLinks.previous.url}`}
                className="group flex items-center gap-x-2 rounded w-full"
              >
                <Button
                  variant={"outline"}
                  className="w-full relative h-full p-5 border border-accent"
                >
                  <ChevronLeft className="w-6 h-6 font-light absolute left-4" />
                  <div className="capitalize group-hover:underline">
                    {nextAndPreviousLinks.previous.title}
                  </div>
                </Button>
              </Link>
              <Link
                href={`${nextAndPreviousLinks.next.url}`}
                className="group flex items-center gap-x-2 rounded w-full"
              >
                <Button
                  variant={"outline"}
                  className="w-full relative h-full p-5 border border-accent"
                >
                  <div className="capitalize group-hover:underline">
                    {nextAndPreviousLinks.next.title}
                  </div>
                  <ChevronRight className="w-6 h-6 font-light absolute right-4" />
                </Button>
              </Link>
            </div>
          )}
        </div>

        <div className="fixed top-36 right-4 hidden lg:flex flex-col gap-y-4">
          <h3 className="accent-a1 capitalize pl-1">On this page</h3>
          <ol className="flex flex-col items-start justify-start gap-1 list-inside list-decimal">
            {onThisPage?.length
              ? onThisPage.map(
                  (title) => title && <SectionLinks title={title} key={title} />
                )
              : null}
          </ol>
        </div>
      </section>
    </article>
  );
};

export default DocsComponent;
