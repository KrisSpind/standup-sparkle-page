import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import ContactSection from "./ContactSection";

const fillAndSubmit = () => {
  fireEvent.change(screen.getByPlaceholderText("Vorname"), { target: { value: "Max" } });
  fireEvent.change(screen.getByPlaceholderText("Nachname"), { target: { value: "Muster" } });
  fireEvent.change(screen.getByPlaceholderText("E-Mail"), { target: { value: "max@example.com" } });
  fireEvent.change(screen.getByPlaceholderText("Was beschäftigt dich gerade?"), { target: { value: "Hallo" } });
  fireEvent.click(screen.getByRole("button", { name: "Nachricht senden" }));
};

describe("ContactSection", () => {
  beforeEach(() => {
    // jsdom lacks IntersectionObserver, which viewport-triggered animations require
    vi.stubGlobal(
      "IntersectionObserver",
      class {
        observe() {}
        unobserve() {}
        disconnect() {}
      },
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("confirms delivery and clears the form", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ success: true }), { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);
    render(<ContactSection />);

    fillAndSubmit();

    expect(await screen.findByText(/Danke für deine Nachricht/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Vorname")).toHaveValue("");
    const body = fetchMock.mock.calls[0][1].body as FormData;
    expect(body.get("name")).toBe("Max Muster");
    expect(body.has("botcheck")).toBe(false);
  });

  it("shows the email address as fallback when sending fails", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new TypeError("Failed to fetch")));
    render(<ContactSection />);

    fillAndSubmit();

    expect(await screen.findByText(/hat leider nicht geklappt/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "regenbogen.rh@gmail.com" })).toHaveAttribute(
      "href",
      "mailto:regenbogen.rh@gmail.com",
    );
    expect(screen.getByPlaceholderText("Vorname")).toHaveValue("Max");
  });
});
