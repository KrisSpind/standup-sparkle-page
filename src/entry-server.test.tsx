import { act } from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import App from "./App";
import { pages, render } from "./entry-server";

// jsdom defines window, so libraries pick useLayoutEffect during server rendering; the real build runs in Node without window
const renderQuietly = (url: string) => {
  const spy = vi.spyOn(console, "error").mockImplementation((message, ...args) => {
    if (!String(message).includes("useLayoutEffect does nothing on the server")) {
      console.warn(message, ...args);
    }
  });
  try {
    return render(url);
  } finally {
    spy.mockRestore();
  }
};

describe("prerendering", () => {
  beforeAll(() => {
    (globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;
  });

  afterEach(() => {
    document.body.innerHTML = "";
    vi.restoreAllMocks();
  });

  it("renders the landing page content to static HTML", () => {
    const html = renderQuietly("/");

    expect(html).toContain("<h1");
    expect(html).toContain("Regina Huber");
    expect(html).toContain('id="kontakt"');
  });

  it("renders the legal pages with their headings", () => {
    expect(renderQuietly("/impressum")).toContain("Angaben gemäß § 5 DDG");
    expect(renderQuietly("/datenschutz")).toContain("Datenschutzerklärung");
  });

  it.each(pages.map((page) => page.path))("hydrates the prerendered HTML of %s without mismatches", async (path) => {
    window.history.pushState({}, "", path);
    const container = document.createElement("div");
    container.innerHTML = renderQuietly(path);
    document.body.appendChild(container);

    const errors: unknown[] = [];
    vi.spyOn(console, "error").mockImplementation((...args) => errors.push(args));

    await act(async () => {
      hydrateRoot(
        container,
        <BrowserRouter>
          <App />
        </BrowserRouter>,
        { onRecoverableError: (error) => errors.push(error) },
      );
    });

    expect(errors).toEqual([]);
  });
});
