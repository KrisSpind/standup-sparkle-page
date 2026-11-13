import { describe, expect, it } from "vitest";
import { buildContactMailto, CONTACT_EMAIL } from "./contact";

describe("buildContactMailto", () => {
  const input = {
    firstName: "Max",
    lastName: "Muster",
    email: "max@example.com",
    message: "Hallo & tschüss?\nZweite Zeile",
  };

  it("targets the contact address", () => {
    expect(buildContactMailto(input).startsWith(`mailto:${CONTACT_EMAIL}?`)).toBe(true);
  });

  it("puts sender name in subject and message plus sender details in body", () => {
    const params = new URL(buildContactMailto(input)).searchParams;

    expect(params.get("subject")).toBe("Kontaktanfrage von Max Muster");
    expect(params.get("body")).toBe("Hallo & tschüss?\nZweite Zeile\n\n--\nMax Muster\nmax@example.com");
  });

  it("encodes spaces as %20, not +", () => {
    const url = buildContactMailto(input);

    expect(url).toContain("Kontaktanfrage%20von");
    expect(url).not.toContain("+");
  });
});
