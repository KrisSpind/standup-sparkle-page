import LegalLayout from "@/components/LegalLayout";
import { legalEntity } from "@/lib/legal";

const Address = () => (
  <p>
    {legalEntity.name}
    <br />
    {legalEntity.business}
    <br />
    {legalEntity.street}
    <br />
    {legalEntity.postalCodeAndCity}
  </p>
);

const Impressum = () => (
  <LegalLayout title="Impressum">
    <h2>Angaben gemäß § 5 DDG</h2>
    <Address />

    <h2>Kontakt</h2>
    <p>
      Telefon: {legalEntity.phone}
      <br />
      E-Mail: <a href={`mailto:${legalEntity.email}`}>{legalEntity.email}</a>
    </p>

    <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
    <Address />

    <h2>Verbraucherstreitbeilegung</h2>
    <p>
      Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
      Verbraucherschlichtungsstelle teilzunehmen.
    </p>
  </LegalLayout>
);

export default Impressum;
