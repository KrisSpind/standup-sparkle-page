import { CONTACT_EMAIL } from "@/lib/contact";

// Marks data that must be supplied before going live; the build fails while any marker is left
export const OPEN_MARKER = "[[OFFEN:";
const open = (hint: string) => `${OPEN_MARKER} ${hint}]]`;

export const legalEntity = {
  name: "Regina Huber",
  business: "StandUp Coaching",
  street: open("Straße und Hausnummer"),
  postalCodeAndCity: open("PLZ und Ort"),
  // Optional; the line is omitted on the imprint while unset
  phone: undefined as string | undefined,
  email: CONTACT_EMAIL,
  emailProvider: "united-domains GmbH, Gautinger Straße 10, 82319 Starnberg, Deutschland",
};
