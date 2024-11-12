"use client";

import React, { useEffect } from "react";
import markdownit from "markdown-it";
import hljs from "highlight.js";
import { slugify } from "@/lib/resource.util";
import { cn } from "@/lib/utils";
// import "highlight.js/styles/default.css";

declare global {
  interface Window {
    copyCode: (button: HTMLButtonElement) => void;
  }
}

const md = markdownit({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str: string, lang: string) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
            `<pre><code class="hljs code-container"><div class="flex items-center justify-end gap-x-2 text-xs my-2" style="flex-direction: row; column-gap: 1rem;"><button onclick="copyCode(this)" title="Copy code"><span class="material-symbols-outlined">
  content_copy
  </span></button><span class="lang-span">${lang}</span></div>` +
          `<span class="code-block">${
            hljs.highlight(str, { language: lang, ignoreIllegals: true }).value
          }</span>` +
          `</code></pre>`
        );
      } catch (__) {}
    }

    return (
      `<pre><code class="hljs code-container"><div class="flex items-center justify-end gap-x-2 text-xs my-2" style="flex-direction: row; column-gap: 1rem;"><button onclick="copyCode(this)" title="Copy code"><span class="material-symbols-outlined">
  content_copy
  </span></button><span class="lang-span">plain text</span></div>` +
      `<span class="code-block">${md.utils.escapeHtml(str)}</span>` +
      `</code></pre>`
    );
  },
});

md.renderer.rules.heading_open = (tokens: any, idx: number) => {
  const token = tokens[idx];
  const level = token.tag.slice(1);
  const content = tokens[idx + 1].content;
  const slug = slugify(content);

  return `<h${level} id="${slug}">`;
};

md.renderer.rules.heading_close = (tokens: any, idx: number) => {
  const level = tokens[idx].tag.slice(1);
  return `</h${level}>`;
};

interface CustomMarkdownRendererProps {
  children: string;
  folder: "doc" | "api-reference";
}

const CustomMarkdownRenderer: React.FC<CustomMarkdownRendererProps> = ({
  children,
  folder,
}) => {
  const htmlContent = md.render(children);

  useEffect(() => {
    window.copyCode = copyCode;
  }, []);

  return (
    <div
      className={cn(
        "list-decimal mb-10 w-full",
        folder === "doc" ? "markdown-body" : "markdown-body-api-reference"
      )}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default CustomMarkdownRenderer;

function copyCode(button: HTMLButtonElement) {
  // Find the closest code block (inside the <span class="code-block">)
  const codeBlock = button
    .closest(".code-container")
    ?.querySelector(".code-block")?.textContent;
  const buttonSpan = button.querySelector("span");

  if (codeBlock && buttonSpan) {
    navigator.clipboard
      .writeText(codeBlock)
      .then(() => {
        // Update the button text to show that it has been copied
        buttonSpan.textContent = "check";
        // Reset the button text after 2 seconds
        setTimeout(() => {
          buttonSpan.textContent = "content_copy";
        }, 2000);
      })
      .catch((err) => console.error("Error copying code: ", err));
  }
}
