import LegalLayout from "@/components/LegalLayout";
import { legalEntity, OPEN_MARKER } from "@/lib/legal";

const Datenschutz = () => (
  <LegalLayout title="Datenschutzerklärung">
    <h2>1. Verantwortliche</h2>
    <p>
      {legalEntity.name}
      <br />
      {legalEntity.business}
      <br />
      {legalEntity.street}
      <br />
      {legalEntity.postalCodeAndCity}
      <br />
      E-Mail: <a href={`mailto:${legalEntity.email}`}>{legalEntity.email}</a>
    </p>

    <h2>2. Überblick</h2>
    <p>
      Diese Website setzt keine Cookies, verwendet keine Analyse- oder Tracking-Dienste und bindet keine Inhalte
      Dritter wie Karten, Videos oder Social-Media-Plugins ein. Schriftarten werden vom eigenen Webserver geladen; es
      findet dabei keine Verbindung zu Google oder anderen Anbietern statt. Die Verbindung ist per TLS (HTTPS)
      verschlüsselt.
    </p>

    <h2>3. Hosting</h2>
    <p>
      Diese Website wird über GitHub Pages bereitgestellt. Anbieter ist die GitHub B.V., Prins Bernhardplein 200,
      1097 JB Amsterdam, Niederlande, bzw. die GitHub, Inc., 88 Colin P. Kelly Jr. St., San Francisco, CA 94107, USA.
    </p>
    <p>
      Beim Aufruf der Website werden technisch notwendige Daten verarbeitet, insbesondere die IP-Adresse, Datum und
      Uhrzeit des Zugriffs, die aufgerufene Seite sowie Angaben zum verwendeten Browser. GitHub speichert die
      IP-Adressen von Besucher:innen nach eigenen Angaben zu Sicherheitszwecken. Rechtsgrundlage ist Art. 6 Abs. 1
      lit. f DSGVO; das berechtigte Interesse liegt in einer sicheren und zuverlässigen Bereitstellung der Website.
    </p>
    <p>
      Dabei können Daten in die USA übermittelt werden. GitHub ist nach dem EU-US Data Privacy Framework zertifiziert;
      die Übermittlung stützt sich auf den Angemessenheitsbeschluss der EU-Kommission (Art. 45 DSGVO). Weitere
      Informationen:{" "}
      <a href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement">
        Datenschutzerklärung von GitHub
      </a>
      .
    </p>

    <h2>4. Kontaktformular</h2>
    <p>
      Wenn du das Kontaktformular nutzt, werden Vorname, Nachname, E-Mail-Adresse und deine Nachricht an den Dienst
      Web3Forms übermittelt und von dort per E-Mail an mich weitergeleitet. Web3Forms wird von Web3Creative, Kerala,
      Indien, betrieben; die Server stehen in den USA. Nach Angaben des Anbieters werden Formularinhalte nicht
      gespeichert, Server-Protokolle werden nach zwei Monaten gelöscht.
    </p>
    <p>
      Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit deine Anfrage auf ein Coaching abzielt, im Übrigen Art. 6
      Abs. 1 lit. f DSGVO (Beantwortung von Anfragen).
    </p>
    <p>{OPEN_MARKER} Rechtsgrundlage der Übermittlung nach Indien/USA klären oder Formular-Dienst wechseln]]</p>

    <h2>5. Kontakt per E-Mail</h2>
    <p>
      Wenn du mir schreibst, verarbeite ich deine Angaben, um deine Anfrage zu beantworten. E-Mails empfange und
      speichere ich über Gmail; Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
      Rechtsgrundlage ist Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO.
    </p>

    <h2>6. Speicherdauer</h2>
    <p>
      Ich lösche deine Anfrage, sobald sie abschließend bearbeitet ist, es sei denn, gesetzliche
      Aufbewahrungspflichten stehen dem entgegen – etwa wenn aus der Anfrage ein Auftrag entsteht.
    </p>

    <h2>7. Deine Rechte</h2>
    <p>Du hast das Recht auf</p>
    <ul>
      <li>Auskunft über deine gespeicherten Daten (Art. 15 DSGVO),</li>
      <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO),</li>
      <li>Löschung (Art. 17 DSGVO) und Einschränkung der Verarbeitung (Art. 18 DSGVO),</li>
      <li>Datenübertragbarkeit (Art. 20 DSGVO),</li>
      <li>Widerspruch gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (Art. 21 DSGVO).</li>
    </ul>
    <p>
      Wende dich dafür einfach per E-Mail an mich. Außerdem kannst du dich bei einer Datenschutz-Aufsichtsbehörde
      beschweren, zum Beispiel beim Bayerischen Landesamt für Datenschutzaufsicht, Promenade 18, 91522 Ansbach.
    </p>

    <p className="text-muted-foreground text-sm mt-12">Stand: November 2026</p>
  </LegalLayout>
);

export default Datenschutz;
