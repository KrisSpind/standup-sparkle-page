// Injects server-rendered markup into the client build so crawlers get full HTML without executing JS.
import { readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const distDir = path.resolve("dist");
const ssrDir = path.resolve("dist-ssr");
const placeholder = '<div id="root"></div>';

const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);

const indexPath = path.join(distDir, "index.html");
const template = await readFile(indexPath, "utf8");

if (!template.includes(placeholder)) {
  throw new Error(`Placeholder ${placeholder} not found in ${indexPath}`);
}

// Replacer function prevents "$" sequences in the markup from being interpreted as patterns
const html = template.replace(placeholder, () => `<div id="root">${render("/")}</div>`);

await writeFile(indexPath, html);
await rm(ssrDir, { recursive: true, force: true });

console.log(`Prerendered ${path.relative(process.cwd(), indexPath)}`);
