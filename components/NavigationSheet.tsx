import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import SectionLinks from "./SectionLinks";

export function NavigationSheet({ onThisPage }: { onThisPage: string[] }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"outline"} title="On this page">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="mb-5">
          <SheetTitle>On This Page</SheetTitle>
          <SheetDescription>
            Navigate to different sections within this page
          </SheetDescription>
        </SheetHeader>
        <div className=" flex flex-col gap-y-4">
          {onThisPage?.length
            ? onThisPage.map(
                (title) => title && <SectionLinks title={title} key={title} />
              )
            : null}
        </div>
      </SheetContent>
    </Sheet>
  );
}
