import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, MenuIcon } from "lucide-react";
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
  nextAndPreviousLinks: {
    next: { url: string; title: string };
    previous: { url: string; title: string };
  } | null;
  onThisPage: string[];
}

const ReferenceComponet = ({
  data,
  nextAndPreviousLinks,
  onThisPage,
}: ReferenceComponetProps) => {
  return (
    <>
      <div className="flex justify-end p-3 sticky top-[80px]">
        <NavigationSheet onThisPage={onThisPage} />
      </div>
      <article className="w-full flex flex-col items-start justify-start h-full mt-8 px-8">
        <section>
          <div className="w-full flex flex-col gap-y-10 overflow-auto no-scrollbar h-full">
            <CustomMarkdownRenderer folder="api-reference">
              {data.content}
            </CustomMarkdownRenderer>{" "}
            {nextAndPreviousLinks && (
              <div className="flex items-center gap-x-2 w-full mb-20 justify-between">
                <Link
                  href={`${nextAndPreviousLinks.previous.url}`}
                  className="group flex items-center gap-x-2 rounded w-full"
                >
                  <Button
                    variant={"outline"}
                    className="w-full relative h-full p-5"
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
                    className="w-full relative h-full p-5"
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
        </section>
      </article>
    </>
  );
};

export default ReferenceComponet;
