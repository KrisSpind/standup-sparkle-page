import { renderToStaticMarkup } from "react-dom/server";
import { afterEach, describe, expect, it, vi } from "vitest";

const renderWithPhone = async (phone: string | undefined) => {
  vi.resetModules();
  vi.doMock("@/lib/legal", async (importOriginal) => {
    const original = await importOriginal<typeof import("@/lib/legal")>();
    return { ...original, legalEntity: { ...original.legalEntity, phone } };
  });
  const { default: Impressum } = await import("./Impressum");
  return renderToStaticMarkup(<Impressum />);
};

describe("imprint", () => {
  afterEach(() => {
    vi.doUnmock("@/lib/legal");
  });

  it("shows the phone number when one is set", async () => {
    expect(await renderWithPhone("+49 8031 000000")).toContain("Telefon: +49 8031 000000");
  });

  it("omits the phone line when none is set", async () => {
    const html = await renderWithPhone(undefined);

    expect(html).not.toContain("Telefon");
    expect(html).toContain("E-Mail:");
  });
});
