import { describe, expect, it, vi } from "vitest";
import { sendContactMessage, WEB3FORMS_ACCESS_KEY } from "./contact";

const input = {
  firstName: "Max",
  lastName: "Muster",
  email: "max@example.com",
  message: "Hallo",
  botcheck: false,
};

const jsonResponse = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

describe("sendContactMessage", () => {
  it("posts the message with sender name in the subject", async () => {
    const fetchMock = vi.fn().mockResolvedValue(jsonResponse(200, { success: true }));

    await sendContactMessage(input, fetchMock);

    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("https://api.web3forms.com/submit");
    expect(init.method).toBe("POST");
    expect(init.headers).not.toHaveProperty("Content-Type");
    expect(Object.fromEntries(init.body as FormData)).toEqual({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "Kontaktanfrage von Max Muster",
      from_name: "huberundso.de",
      name: "Max Muster",
      email: "max@example.com",
      message: "Hallo",
    });
  });

  it("flags the submission as spam when the honeypot was ticked", async () => {
    const fetchMock = vi.fn().mockResolvedValue(jsonResponse(200, { success: true }));

    await sendContactMessage({ ...input, botcheck: true }, fetchMock);

    expect((fetchMock.mock.calls[0][1].body as FormData).get("botcheck")).toBe("on");
  });

  it("rejects on HTTP errors", async () => {
    const fetchMock = vi.fn().mockResolvedValue(jsonResponse(400, { success: false }));

    await expect(sendContactMessage(input, fetchMock)).rejects.toThrow("status 400");
  });

  it("rejects when the service reports no success", async () => {
    const fetchMock = vi.fn().mockResolvedValue(jsonResponse(200, { success: false }));

    await expect(sendContactMessage(input, fetchMock)).rejects.toThrow();
  });

  it("rejects on non-JSON responses", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response("<html>", { status: 502 }));

    await expect(sendContactMessage(input, fetchMock)).rejects.toThrow("status 502");
  });

  it("propagates network errors", async () => {
    const fetchMock = vi.fn().mockRejectedValue(new TypeError("Failed to fetch"));

    await expect(sendContactMessage(input, fetchMock)).rejects.toThrow("Failed to fetch");
  });
});
