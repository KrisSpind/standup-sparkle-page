import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App.tsx";

export interface PrerenderPage {
  path: string;
  file: string;
  title?: string;
  noindex?: boolean;
}

export const pages: PrerenderPage[] = [
  { path: "/", file: "index.html" },
  { path: "/impressum", file: "impressum.html", title: "Impressum | Regina Huber", noindex: true },
  { path: "/datenschutz", file: "datenschutz.html", title: "Datenschutzerklärung | Regina Huber", noindex: true },
];

export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );
}
