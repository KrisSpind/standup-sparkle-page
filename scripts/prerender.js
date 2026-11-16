// Injects server-rendered markup into the client build so crawlers get full HTML without executing JS.
import { readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const siteUrl = "https://huberundso.de";
const distDir = path.resolve("dist");
const ssrDir = path.resolve("dist-ssr");
const placeholder = '<div id="root"></div>';
const openMarker = "[[OFFEN:";

const { render, pages } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);

const template = await readFile(path.join(distDir, "index.html"), "utf8");

if (!template.includes(placeholder)) {
  throw new Error(`Placeholder ${placeholder} not found in dist/index.html`);
}

const escapeHtml = (value) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");

// Replacer functions prevent "$" sequences in the markup from being interpreted as patterns
const withPageMeta = (html, page) => {
  if (page.path === "/") return html;

  const url = `${siteUrl}${page.path}`;
  let result = html
    .replace(/<link rel="canonical" href="[^"]*" \/>/, () => `<link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, () => `<meta property="og:url" content="${url}" />`);

  if (page.title) {
    result = result.replace(/<title>[^<]*<\/title>/, () => `<title>${escapeHtml(page.title)}</title>`);
  }
  if (page.noindex) {
    result = result.replace("</head>", () => '    <meta name="robots" content="noindex, follow" />\n  </head>');
  }
  return result;
};

const unresolved = [];

for (const page of pages) {
  const markup = render(page.path);
  if (markup.includes(openMarker)) {
    unresolved.push(page.path);
  }

  const html = withPageMeta(template, page).replace(placeholder, () => `<div id="root">${markup}</div>`);
  await writeFile(path.join(distDir, page.file), html);
  console.log(`Prerendered dist/${page.file}`);
}

await rm(ssrDir, { recursive: true, force: true });

if (unresolved.length > 0) {
  throw new Error(`Missing required content (${openMarker} …]]) on: ${unresolved.join(", ")}`);
}
