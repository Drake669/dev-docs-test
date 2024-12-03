const fs = require("fs");
const path = require("path");
const axios = require("axios");

// Define the paths relative to the script folder
const scriptFolder = path.dirname(__filename);
const jsonFolderPath = path.join(scriptFolder, "../json-collection");
const outputFolderPath = path.join(scriptFolder, "../resources/api-reference");

if (!fs.existsSync(outputFolderPath)) {
  fs.mkdirSync(outputFolderPath);
  console.log(`Created output folder at: ${outputFolderPath}`);
}

const createMarkdown = (data, subfolderPath) => {
  data.forEach((topLevelItem) => {
    const topLevelName = topLevelItem.name;
    const topLevelMarkdown = [];

    // Add the h2 header
    topLevelMarkdown.push(
      `\n\n#meta-data title: ${formatName(topLevelName)}\n\n`
    );
    topLevelMarkdown.push(`\n\n## ${formatName(topLevelName)}\n\n`);

    let hasDirectContent = false;
    topLevelItem.item.forEach((apiItem) => {
      if (apiItem.name && apiItem.request) {
        hasDirectContent = true;
        const { name, request, response } = apiItem;

        const topLevelItemContent = request?.description
          ? `### ${name}\n\n`
          : `### ${name}\n\n`;
        topLevelMarkdown.push(`\n\n${topLevelItemContent}\n\n`);
        // Add the API name as a section title
        topLevelMarkdown.push(`<div class="api-content">`);
        topLevelMarkdown.push(
          `\n\n<div class="table-content no-scrollbar">\n\n`
        );
        // Add headers/auth content in its own div
        if (request?.auth || request?.header.length > 0) {
          topLevelMarkdown.push(`\n\n#### Headers\n\n`);
          topLevelMarkdown.push(`<table>\n  <tbody>\n`);

          // Auth headers
          if (request?.auth) {
            topLevelMarkdown.push(
              `
              <tr>
                <td style="text-align:left">Authorization
                  <div class="table-description">string</div>
                </td>
                <td style="text-align:left">Set value to <code>Bearer SECRET_KEY</code></td>
              </tr>
            `.trim()
            );
          }

          // Standard headers
          if (request?.header && request?.header.length > 0) {
            request.header.forEach((header) => {
              topLevelMarkdown.push(
                `
                <tr>
                  <td style="text-align:left">${header.key}
                    <div class="table-description">${
                      header.type === "text" ? "string" : header.type
                    }</div>
                  </td>
                  <td style="text-align:left"><code>${header.value}</code></td>
                </tr>
              `.trim()
              );
            });
          }

          topLevelMarkdown.push(`  </tbody>\n</table>\n\n`);
        }

        // Add body params in its own div
        if (request?.body && request?.body?.formdata?.length > 0) {
          const { mode, formdata, raw } = request.body;

          topLevelMarkdown.push(`\n\n#### Body params\n\n`);

          if (mode === "formdata" && formdata) {
            const topLevelItems = createParamsTable(formdata);
            topLevelMarkdown.push(...topLevelItems);
          }
        }

        // Add query params in its own div
        if (request?.url?.query && Array.isArray(request.url.query)) {
          const { query } = request.url;

          topLevelMarkdown.push(`\n\n#### Query Parameters\n\n`);

          const topLevelItems = createParamsTable(query, "query");
          topLevelMarkdown.push(...topLevelItems);
        }
        if (request?.url?.variable && Array.isArray(request.url.variable)) {
          const { variable } = request.url;

          topLevelMarkdown.push(`\n\n#### Path Parameters\n\n`);

          const topLevelItems = createParamsTable(variable, "path");
          topLevelMarkdown.push(...topLevelItems);
        }
        topLevelMarkdown.push(`\n\n</div>\n\n`);
        const req = constructRequest(request);
        const res = constructResponse(response);
        const axiosSnippet = `\`\`\`js\n${req.js.trim()}\n\`\`\`\n`.trim();
        const goLangSyntax = `\`\`\`go\n${req.go.trim()}\n\`\`\`\n`.trim();
        const phpSyntax = `\`\`\`php\n${req.php.trim()}\n\`\`\`\n`.trim();
        const responseSnippet = `\`\`\`json\n${JSON.stringify(
          res,
          null,
          2
        )}\n\`\`\`\`\n`.trim();

        topLevelMarkdown.push(
          `<div class="code-content">\n\n${axiosSnippet}\n\n${goLangSyntax}\n\n${phpSyntax}\n\n${responseSnippet}\n\n</div>\n\n`
        );
        topLevelMarkdown.push(`\n\n</div>\n\n`); // Close api-content div
      } else if (apiItem.item) {
        // Recursive call for nested items
        createMarkdown([apiItem], subfolderPath);
      }
    });

    // Write the Markdown file
    if (hasDirectContent) {
      const outputFileName = `${topLevelName}.md`;
      const filePath = path.join(subfolderPath, outputFileName);
      fs.writeFileSync(filePath, topLevelMarkdown.join(""));
      console.log(`Markdown file created: ${filePath}`);
    } else {
      console.log(`Skipping empty Markdown file for: ${topLevelName}`);
    }
  });
};

const convertJsonToMarkdown = async () => {
  console.log(
    "---------------------------------------------------------Converting json to markdown starting...--------------------------------------------------------"
  );
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://api.getpostman.com/collections/${process.env.POSTMAN_COLLECTION_ID}`,
    headers: {
      "X-API-Key": process.env.POSTMAN_API_KEY,
    },
  };

  const response = await axios.request(config);
  const jsonData = response.data;
  for (const topLevelItem of jsonData.collection.item) {
    console.log(`Started Processing ${topLevelItem.name}.`);
    const subfolderName = topLevelItem.name.replace(/[^a-zA-Z0-9_-]/g, "_");
    const subfolderPath = path.join(outputFolderPath, subfolderName);

    if (!fs.existsSync(subfolderPath)) {
      fs.mkdirSync(subfolderPath);
      console.log(`Created subfolder: ${subfolderPath}`);
    }

    createMarkdown(topLevelItem.item, subfolderPath);
  }
};

function constructRequest(request) {
  // console.log(JSON.stringify(request, null, 2));
  const { url, header, auth, body, method } = request;

  const parseValue = (value) => {
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  };

  const headers = header
    ? header.reduce((acc, { key, value }) => {
        acc[key] = parseValue(value);
        return acc;
      }, {})
    : {};

  if (auth?.type === "bearer" && auth?.bearer?.length > 0) {
    const token = auth.bearer[0]?.value;
    headers["Authorization"] = `Bearer ${token}`;
  }

  let data;
  if (body?.mode === "formdata" && body.formdata.length > 0) {
    data = body.formdata.reduce((acc, { key, value }) => {
      acc[key] = parseValue(value);
      return acc;
    }, {});
  }

  // Construct query params
  let params;
  if (url?.query) {
    params = url.query.reduce((acc, { key, value }) => {
      acc[key] = parseValue(value || "example");
      return acc;
    }, {});
  }

  // Axios code snippet
  return {
    js: `
  const axios = require('axios');
  
  axios({
    method: "${method}",
    url: "${url?.raw ? url.raw : url}",
    headers: ${JSON.stringify(headers, null, 2).trim()},
    ${params ? `params: ${JSON.stringify(params, null, 2)},`.trim() : ""}
    ${data ? `data: ${JSON.stringify(data, null, 2)},`.trim() : ""}
  })
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
`,
    go: `
package main

import (
    "bytes"
    "fmt"
    "io/ioutil"
    "net/http"
)

func main() {
    client := &http.Client{}
    ${
      data
        ? `
    var jsonStr = []byte(\`${JSON.stringify(data, null, 2)}\`)`
        : ""
    }
    req, err := http.NewRequest("${method}", "${url?.raw ? url.raw : url}", ${
      data ? `bytes.NewBuffer(jsonStr)` : `nil`
    })
    if err != nil {
        fmt.Println(err)
        return
    }
    ${
      Object.keys(headers).length
        ? `
    req.Header = map[string][]string{
        ${Object.entries(headers)
          .map(([key, value]) => `"${key}": {"${value}"}`)
          .join(",\n")}
    }
    `.trim()
        : ""
    }
    resp, err := client.Do(req)
    if err != nil {
        fmt.Println(err)
        return
    }
    defer resp.Body.Close()

    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        fmt.Println(err)
        return
    }
    fmt.Println(string(body))
}
`,
    php: `
<?php

require 'vendor/autoload.php';

use GuzzleHttp\Client;

$client = new Client();

try {
    $response = $client->request("${method}", "${url?.raw ? url.raw : url}", [
        ${
          Object.keys(headers).length
            ? `'headers' => [
            ${Object.entries(headers)
              .map(([key, value]) => `"${key}" => "${value}"`)
              .join(",\n            ")}
        ],`.trim()
            : ""
        }
        ${params ? `'query' => ${JSON.stringify(params, null, 2)},`.trim() : ""}
        ${data ? `'json' => ${JSON.stringify(data, null, 2)},`.trim() : ""}
    ]);

    echo $response->getBody();
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
?>
`,
  };
}

function constructResponse(responses) {
  if (!Array.isArray(responses) || responses.length === 0) {
    return `[]`;
  }

  const result = responses.map((response) => {
    const name = response.name || "Unnamed Response";
    let body;

    try {
      // Parse the body if it's a valid JSON string
      body = response.body ? JSON.parse(response.body) : null;
    } catch (err) {
      // Use raw body if parsing fails
      body = response.body || null;
    }

    return { name, body };
  });
  return result;
}

function formatName(name) {
  // Remove the numeric prefix (e.g., "1-")
  const withoutPrefix = name.replace(/^\d+-/, "");
  // Split the string by hyphens, capitalize each word, and join with a space
  return withoutPrefix
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function createParamsTable(params, paramType) {
  const optionalFields = [];
  const requiredFields = [];
  const topLevelItems = [];
  params.forEach((param) => {
    const cleanedDescription = param.description
      ? param.description.replace(/\(optional\)|\(required\)/gi, "").trim()
      : "No description available"; // Default if description is undefined

    const type = cleanedDescription.match(/\([a-zA-Z]+\)/);

    const row = `
        <tr>
          <td style="text-align:left">${param.key}
            <div class="table-description">${
              type ? type[0].replace(/[()]/g, "").trim() : "string"
            }</div>
          </td>
          <td style="text-align:left">${cleanedDescription
            .replace(/\([a-zA-Z]+\)/, "")
            .trim()}
            </td>
        </tr>
      `.trim();

    if (param.description) {
      if (
        param.description?.startsWith("(Required)") ||
        param.description?.startsWith("(required)")
      ) {
        requiredFields.push(row);
      } else {
        optionalFields.push(row);
      }
    }
  });
  if (requiredFields.length > 0) {
    topLevelItems.push(`<table>\n  <tbody>\n`);
    topLevelItems.push(requiredFields.join("").trim());
    topLevelItems.push(`</tbody>\n</table>\n\n`);
  }
  if (requiredFields.length === 0 && optionalFields.length > 0) {
    topLevelItems.push(`<table>\n  <tbody>\n`);
    topLevelItems.push(optionalFields.join("").trim());
    topLevelItems.push(`</tbody>\n</table>\n\n`.trim());
    topLevelItems.push(
      `<span class="info-card">All ${
        paramType ? `${paramType} parameters` : "fields"
      } are optional</span>\n`.trim()
    );
  }
  if (requiredFields.length > 0 && optionalFields.length > 0) {
    topLevelItems.push(`<div class="optional-parameters">\n\n`);
    topLevelItems.push(`<table>\n  <tbody>\n`);
    topLevelItems.push(optionalFields.join("").trim());
    topLevelItems.push(`</tbody>\n</table>\n\n`);
    topLevelItems.push(`</div>`);
  }
  return topLevelItems;
}

convertJsonToMarkdown();
