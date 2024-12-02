const { searchClient } = require("@algolia/client-search");

const client = searchClient("LSZTDIWNFC", "c4d40b4c5de0d6984f7c6c8f42f8d1eb");

// // Fetch and index objects in Algolia
// const processRecords = async () => {
//   const datasetRequest = await fetch(
//     "https://dashboard.algolia.com/sample_datasets/movie.json"
//   );
//   const movies = await datasetRequest.json();
// };

// processRecords()
//   .then(() => console.log("Successfully indexed objects!"))
//   .catch((err) => console.error(err));

const fs = require("fs");
const path = require("path");

// Path to the resources folder
const resourcesFolder = path.join(__dirname, "../resources");
// Output JSON file
const outputJsonFile = path.join(__dirname, "index.json");

/**
 * Recursively get all markdown files and their paths within a directory
 * @param {string} dir - The directory to traverse
 * @returns {Array} - Array of file paths
 */
const getAllMarkdownFiles = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllMarkdownFiles(filePath));
    } else if (path.extname(file) === ".md") {
      results.push(filePath);
    }
  });
  return results;
};

/**
 * Generate a JSON index for markdown files
 * @param {string} folderPath - The base folder to process
 */
const generateIndex = async (folderPath) => {
  const markdownFiles = getAllMarkdownFiles(folderPath);
  const index = markdownFiles.map((filePath) => {
    // Read the file content
    const content = fs.readFileSync(filePath, "utf8");

    // Generate the link by stripping the base folder and removing the extension
    const relativePath = filePath.replace(folderPath, "").replace(/\\/g, "/");
    const link = relativePath.replace(/\.md$/, "");
    const splitLinks = link.split("/");
    const title = `${formatName(
      splitLinks[splitLinks.length - 1]
    )} - ${formatName(splitLinks[splitLinks.length - 3])}`;
    const contentWithoutMeta = [];
    const lines = content.split("\n");
    for (const line of lines) {
      if (!line.startsWith("#meta-data")) {
        contentWithoutMeta.push(line);
      }
    }

    const filteredContent = contentWithoutMeta.join("\n");

    return {
      title,
      content_1: filteredContent.slice(0, 2000),
      content_2: filteredContent.slice(2001, 4000),
      content_3: filteredContent.slice(4001, 6000),
      content_4: filteredContent.slice(6001, 8000),
      content_5: filteredContent.slice(8001, 8500),
      link,
    };
  });

  await client.saveObjects({
    indexName: "docs_index",
    objects: index,
  });

  // Write the JSON to the output file
  //   fs.writeFileSync(outputJsonFile, JSON.stringify(index, null, 2));
  console.log(`Index successfully created at algolia`);
};

// Run the script
generateIndex(resourcesFolder);

function formatName(name) {
  // Remove the numeric prefix (e.g., "1-")
  const withoutPrefix = name.replace(/^\d+-/, "");
  // Split the string by hyphens, capitalize each word, and join with a space
  return withoutPrefix
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
