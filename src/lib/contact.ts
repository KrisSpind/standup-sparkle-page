export const CONTACT_EMAIL = "regenbogen.rh@gmail.com";

// Public by design: a Web3Forms key can only deliver to the address it was registered for
export const WEB3FORMS_ACCESS_KEY = "d8215b98-0384-46c5-9f58-c773b3d31a0f";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export interface ContactMessage {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  botcheck: boolean;
}

export async function sendContactMessage(
  { firstName, lastName, email, message, botcheck }: ContactMessage,
  fetchImpl: typeof fetch = fetch,
): Promise<void> {
  const name = `${firstName} ${lastName}`.trim();

  const response = await fetchImpl(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `Kontaktanfrage von ${name}`,
      from_name: "huberundso.de",
      name,
      email,
      message,
      botcheck,
    }),
  });

  const result: { success?: boolean } | null = await response.json().catch(() => null);

  if (!response.ok || !result?.success) {
    throw new Error(`Contact form submission failed with status ${response.status}`);
  }
}
