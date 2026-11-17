export const CONTACT_EMAIL = "regina@huberundso.de";

export interface ContactMessage {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export function buildContactMailto({ firstName, lastName, email, message }: ContactMessage): string {
  const name = `${firstName} ${lastName}`.trim();
  const subject = `Kontaktanfrage von ${name}`;
  const body = `${message}\n\n--\n${name}\n${email}`;

  // encodeURIComponent instead of URLSearchParams: mail clients render "+" literally instead of as space
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
