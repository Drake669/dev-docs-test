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
    toggleOptionalParameters: (button: HTMLButtonElement) => void;
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
          `<pre><code class="hljs code-container"><div class="flex items-center justify-end gap-x-2 text-xs my-2" style="flex-direction: row; column-gap: 1rem;"><button onclick="copyCode(this)" title="Copy code"><span class="material-symbols-outlined">content_copy</span></button><span class="lang-span">${lang}</span></div>` +
          `<span class="code-block">${
            hljs.highlight(str, { language: lang, ignoreIllegals: true }).value
          }</span>` +
          `</code></pre>`
        );
      } catch (__) {}
    }

    return (
      `<pre><code class="hljs code-container"><div class="flex items-center justify-end gap-x-2 text-xs my-2" style="flex-direction: row; column-gap: 1rem;"><button onclick="copyCode(this)" title="Copy code"><span class="material-symbols-outlined">content_copy</span></button><span class="lang-span">plain text</span></div>` +
      `<span class="code-block">${md.utils.escapeHtml(str)}</span>` +
      `</code></pre>`
    );
  },
});

md.renderer.rules.html_block = (tokens: any, idx: number) => {
  let content = tokens[idx].content;

  // Insert icons for different card classes
  if (content.includes('class="info-card"')) {
    content = content.replace(
      '<span class="info-card">',
      `<span class="info-card"><span class="material-symbols-outlined">info</span>`
    );
  } else if (content.includes('class="warning-card"')) {
    content = content.replace(
      '<span class="warning-card">',
      `<span class="warning-card"><span class="material-symbols-outlined">warning</span>`
    );
  } else if (content.includes('class="success-card"')) {
    content = content.replace(
      '<span class="success-card">',
      `<span class="success-card"><span class="material-symbols-outlined">verified</span>`
    );
  }

  if (content.includes('class="optional-parameters"')) {
    content = `
    <button class="toggle-button" onclick="toggleOptionalParameters(this)">
      <span class="material-symbols-outlined">expand_circle_right</span>
      Show Optional Parameters
    </button>
      <div class="optional-parameters hide">
        
    `;
  }

  return content;
};

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
    window.toggleOptionalParameters = toggleOptionalParameters;
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
  const codeBlock = button
    .closest(".code-container")
    ?.querySelector(".code-block")?.textContent;
  const buttonSpan = button.querySelector("span");

  if (codeBlock && buttonSpan) {
    navigator.clipboard
      .writeText(codeBlock)
      .then(() => {
        buttonSpan.textContent = "check";
        setTimeout(() => {
          buttonSpan.textContent = "content_copy";
        }, 2000);
      })
      .catch((err) => console.error("Error copying code: ", err));
  }
}
function toggleOptionalParameters(button: HTMLButtonElement) {
  const optionalParamsDiv = button.nextElementSibling as HTMLElement;

  if (optionalParamsDiv) {
    // If content is hidden, show it
    if (optionalParamsDiv.classList.contains("hide")) {
      optionalParamsDiv.classList.remove("hide");
      optionalParamsDiv.classList.add("show");

      // Get the actual height of the content and set it
      const contentHeight = optionalParamsDiv.scrollHeight;
      optionalParamsDiv.style.height = "0"; // reset height before transition
      optionalParamsDiv.offsetHeight; // trigger reflow to apply height change
      optionalParamsDiv.style.height = `${contentHeight}px`; // animate to the full height

      button.childNodes[1].textContent = "expand_circle_down";
      button.childNodes[2].textContent = "Hide Optional Parameters";
    } else {
      optionalParamsDiv.style.height = `${optionalParamsDiv.scrollHeight}px`;
      optionalParamsDiv.offsetHeight;
      optionalParamsDiv.style.height = "0";
      button.childNodes[1].textContent = "expand_circle_right";
      button.childNodes[2].textContent = "Show Optional Parameters";
      setTimeout(() => {
        optionalParamsDiv.classList.remove("show");
        optionalParamsDiv.classList.add("hide");
      }, 1000);
    }
  }
}
