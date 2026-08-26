export const metadata = { title: "Impressum — Katzenmomente24" };

export default function ImpressumPage() {
  return (
    <div className="container-px max-w-2xl py-16">
      <h1 className="font-display text-3xl text-cream">Impressum</h1>
      <div className="mt-8 flex flex-col gap-6 text-creamMuted">
        <p>Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)</p>
        <p>
          Jiri Riegert
          <br />
          Kolonnenstr. 8
          <br />
          10827 Berlin
          <br />
          Deutschland
        </p>
        <div>
          <p className="text-cream">Kontakt</p>
          <p>Telefon: +49 163 1409787</p>
          <p>E-Mail: riegertjiri@gmail.com</p>
        </div>
        <div>
          <p className="text-cream">Umsatzsteuer</p>
          <p>
            Gemäß § 19 UStG (Kleinunternehmerregelung) wird auf Rechnungen
            keine Umsatzsteuer ausgewiesen.
          </p>
        </div>
        <div>
          <p className="text-cream">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </p>
          <p>
            Jiri Riegert, Kolonnenstr. 8, 10827 Berlin
          </p>
        </div>
        <div>
          <p className="text-cream">Streitschlichtung</p>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              className="underline hover:text-cream"
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noreferrer"
            >
              ec.europa.eu/consumers/odr
            </a>
            . Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind
            nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
            einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </div>
  );
}
