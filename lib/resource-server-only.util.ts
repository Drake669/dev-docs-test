import fs from "fs";
import path from "path";
import type { Metadata, ResolvingMetadata } from "next";
import { SidebarLinks } from "./resource-types";

export function readMDXFile(fileName: string, pagePath: string) {
  const absoluteFilePath = path.join(
    process.cwd(),
    pagePath,
    `./${fileName}.md`
  );

  const rawContent = fs.readFileSync(absoluteFilePath, "utf-8");

  const lines = rawContent.split("\n");

  let metaTags = { title: "", description: "" };
  const contentWithoutMeta: string[] = [];

  for (const line of lines) {
    if (line.startsWith("#meta-data")) {
      const metaLine = line.replace("#meta-data", "").trim();
      const metaParts = metaLine.split(",").map((part) => part.trim());
      metaParts.forEach((part) => {
        const [key, value] = part.split(":").map((p) => p.trim());
        if (key === "title") metaTags.title = value;
        if (key === "description") metaTags.description = value;
      });
    } else {
      contentWithoutMeta.push(line);
    }
  }

  const filteredContent = contentWithoutMeta.join("\n");

  return {
    content: filteredContent,
    metaTags,
  };
}

// export const getSideBarLinkItems = (
//   folderName: "docs" | "api-reference"
// ): SidebarLinks => {
//   const resourcesPath = path.join(process.cwd(), "resources");
//   const folderPath = path.join(resourcesPath, folderName);

//   const traverseFolder: any = (folderPath: string, baseUrl: string): any[] => {
//     const filesAndDirs = fs.readdirSync(folderPath);
//     const sidebarLinks: any[] = [];

//     filesAndDirs.forEach((item) => {
//       const fullPath = path.join(folderPath, item);
//       const isDirectory = fs.lstatSync(fullPath).isDirectory();
//       const stats = fs.statSync(fullPath);
//       const ext = path.extname(item);

//       if (isDirectory) {
//         const isNew = item.startsWith("new-");
//         const formattedTitle = formatTitle(item.replace(/^new-/, ""));

//         // Handle subfolder, recursively get the child items
//         const childItems = traverseFolder(fullPath, `${baseUrl}/${item}`);
//         if (childItems.length) {
//           // Parent with child items
//           sidebarLinks.push({
//             title: formattedTitle,
//             url: childItems[0].url, // Parent's URL is the first child's URL
//             isNew,
//             items: childItems,
//             createdAt: stats.birthtime as Date,
//           });
//         }
//       } else if (ext === ".md" || ext === ".mdx") {
//         const isNew = item.startsWith("new-");
//         const title = formatTitle(item.replace(/^new-/, ""));
//         sidebarLinks.push({
//           title,
//           url: `${baseUrl}/${path.basename(item, ext)}`,
//           isNew,
//           items: [],
//           createdAt: stats.birthtime as Date,
//         });
//       }
//     });

//     // Sort by creation time (oldest to newest)
//     sidebarLinks.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1));

//     return sidebarLinks;
//   };

//   const formatTitle = (fileName: string) =>
//     fileName
//       .replace(/-/g, " ") // Replace hyphens with spaces
//       .replace(/\.[^/.]+$/, "") // Remove file extension
//       .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word

//   const navMain = traverseFolder(folderPath, `/${folderName}`);

//   // Remove createdAt field after sorting for final output
//   const cleanedNavMain = navMain.map(({ createdAt, ...rest }: any) => rest);

//   return { navMain: cleanedNavMain };
// };

export const getSideBarLinkItems = (
  folderName: "docs" | "api-reference"
): SidebarLinks => {
  const resourcesPath = path.join(process.cwd(), "resources");
  const folderPath = path.join(resourcesPath, folderName);

  const traverseFolder: any = (folderPath: string, baseUrl: string): any[] => {
    const filesAndDirs = fs.readdirSync(folderPath);
    const sidebarLinks: any[] = [];

    filesAndDirs.forEach((item) => {
      const fullPath = path.join(folderPath, item);
      const isDirectory = fs.lstatSync(fullPath).isDirectory();
      const stats = fs.statSync(fullPath);
      const ext = path.extname(item);

      // Extract position, isNew flag, and formatted title
      const [positionString, ...titleParts] = item.split("-");
      const position = parseInt(positionString, 10);
      const isNew = titleParts[0] === "new";
      const rawTitle = isNew
        ? titleParts.slice(1).join("-")
        : titleParts.join("-");
      const formattedTitle = formatTitle(rawTitle);

      if (isDirectory) {
        // Recursively get child items for subfolders
        const childItems = traverseFolder(fullPath, `${baseUrl}/${item}`);
        if (childItems.length) {
          sidebarLinks.push({
            position,
            title: formattedTitle,
            url: childItems[0].url, // Parent's URL is the first child's URL
            isNew,
            items: childItems,
            createdAt: stats.birthtime as Date,
          });
        }
      } else if (ext === ".md" || ext === ".mdx") {
        sidebarLinks.push({
          position,
          title: formattedTitle,
          url: `${baseUrl}/${path.basename(item, ext)}`,
          isNew,
          items: [],
          createdAt: stats.birthtime as Date,
        });
      }
    });

    // Sort by position (smallest to largest)
    sidebarLinks.sort((a, b) => a.position - b.position);

    return sidebarLinks;
  };

  const formatTitle = (fileName: string) =>
    fileName
      .replace(/-/g, " ") // Replace hyphens with spaces
      .replace(/\.[^/.]+$/, "") // Remove file extension
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word

  const navMain = traverseFolder(folderPath, `/${folderName}`);

  // Remove createdAt and position fields after sorting for final output
  const cleanedNavMain = navMain.map(
    ({ createdAt, position, ...rest }: any) => rest
  );

  return { navMain: cleanedNavMain };
};

export const getNextAndPrevious = (
  navMain: {
    title: string;
    url: string;
    items: {
      title: string;
      url: string;
    }[];
  }[],
  current: string
) => {
  const flatRoutes: { title: string; url: string }[] = [];

  if (navMain.length < 2) return null;

  navMain.forEach((item) => {
    if (item.items.length === 0) {
      flatRoutes.push({ title: item.title, url: item.url });
    }

    item.items.forEach((child, index) => {
      flatRoutes.push({ title: child.title, url: child.url });
    });
  });

  const index = flatRoutes.findIndex((route) => route.url === current);
  if (index === -1) {
    return null;
  }

  const next = flatRoutes[(index + 1) % flatRoutes.length];
  const previous =
    flatRoutes[(index - 1 + flatRoutes.length) % flatRoutes.length];

  return { next, previous };
};

type MetadataProps = {
  content: string;
  pagePath: string;
};

export async function generatePageMetadata(
  { content, pagePath }: MetadataProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const data = readMDXFile(content, pagePath);
  const { title, description } = data.metaTags;
  const previousTitle = (await parent).title;
  const updatedTitle = pagePath.includes("docs")
    ? `${title ? `${title} | ` : ""} ${previousTitle?.absolute}`
    : `${title ? `${title} | ` : ""} Built API Reference Documentation`;
  return {
    title: updatedTitle,
    description,
  };
}
