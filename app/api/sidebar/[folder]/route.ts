import { getSideBarLinkItems } from "@/lib/resource-server-only.util";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { folder: string } }
) {
  if (typeof params.folder !== "string") {
    return new NextResponse("Invalid folder name provided", { status: 400 });
  }

  const sidebarItems = getSideBarLinkItems(
    params.folder as "docs" | "api-reference"
  );
  return NextResponse.json(sidebarItems);
}
