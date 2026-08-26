export const metadata = { title: "AGB — Katzenmomente24" };

export default function AGBPage() {
  return (
    <div className="container-px max-w-2xl py-16">
      <h1 className="font-display text-3xl text-cream">
        Allgemeine Geschäftsbedingungen
      </h1>

      <div className="mt-8 flex flex-col gap-8 text-creamMuted [&_h2]:font-display [&_h2]:text-xl [&_h2]:text-cream [&_p]:mt-2">
        <section>
          <h2>§ 1 Geltungsbereich</h2>
          <p>
            Diese AGB gelten für alle Bestellungen, die Verbraucher und
            Unternehmer über unseren Online-Shop bei Jiri Riegert,
            Kolonnenstr. 8, 10827 Berlin (&bdquo;Verkäufer&ldquo;) tätigen.
            Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu
            Zwecken abschließt, die überwiegend weder ihrer gewerblichen
            noch ihrer selbständigen beruflichen Tätigkeit zugerechnet
            werden können.
          </p>
        </section>

        <section>
          <h2>§ 2 Vertragspartner, Vertragsschluss</h2>
          <p>Der Kaufvertrag kommt zustande mit Jiri Riegert.</p>
          <p>
            Die Darstellung der Produkte im Online-Shop stellt kein
            rechtlich bindendes Angebot dar, sondern eine unverbindliche
            Aufforderung zur Bestellung.
          </p>
          <p>
            Durch Anklicken des Buttons &bdquo;Zur Kasse&ldquo; bzw.
            &bdquo;Bestellen&ldquo; geben Sie eine verbindliche Bestellung
            der im Warenkorb enthaltenen Waren ab. Die Bestätigung des
            Zugangs Ihrer Bestellung erfolgt unmittelbar nach dem Absenden
            per E-Mail und stellt noch keine Vertragsannahme dar. Der
            Vertrag kommt erst mit unserer Annahme zustande (z. B. durch
            Versandbestätigung).
          </p>
        </section>

        <section>
          <h2>§ 3 Preise und Versandkosten</h2>
          <p>
            Alle angegebenen Preise sind Endpreise in Euro. Gemäß § 19 UStG
            (Kleinunternehmerregelung) wird keine Umsatzsteuer berechnet und
            nicht gesondert ausgewiesen.
          </p>
          <p>
            Zusätzlich zu den Preisen fallen Versandkosten an, die vor
            Abschluss der Bestellung deutlich ausgewiesen werden.
          </p>
        </section>

        <section>
          <h2>§ 4 Zahlung</h2>
          <p>
            Die Zahlung erfolgt wahlweise über Kreditkarte/Debitkarte,
            PayPal oder weitere über Stripe angebotene Zahlungsarten. Die
            Zahlungsabwicklung erfolgt über den Zahlungsdienstleister Stripe
            Payments Europe, Ltd. bzw. PayPal (Europe) S.à r.l. et Cie,
            S.C.A. Mit Abschluss der Bestellung willigen Sie in die
            Übermittlung der hierfür erforderlichen Daten ein.
          </p>
        </section>

        <section>
          <h2>§ 5 Lieferung</h2>
          <p>
            Die Lieferung erfolgt aus unserem eigenen Lager in Deutschland
            an die vom Kunden angegebene Lieferadresse innerhalb
            Deutschlands, Österreichs und der Schweiz.
          </p>
          <p>
            Die Lieferzeit beträgt, sofern nicht anders angegeben, 2–4
            Werktage innerhalb Deutschlands.
          </p>
        </section>

        <section>
          <h2>§ 6 Eigentumsvorbehalt</h2>
          <p>
            Bis zur vollständigen Bezahlung bleibt die gelieferte Ware
            Eigentum des Verkäufers.
          </p>
        </section>

        <section>
          <h2>§ 7 Widerrufsrecht</h2>
          <p>
            Verbrauchern steht ein gesetzliches Widerrufsrecht zu. Es gilt
            die gesonderte{" "}
            <a href="/widerruf" className="underline hover:text-cream">
              Widerrufsbelehrung
            </a>
            .
          </p>
        </section>

        <section>
          <h2>§ 8 Gewährleistung</h2>
          <p>Es gilt das gesetzliche Mängelhaftungsrecht.</p>
          <p>
            Verbrauchern gegenüber beträgt die Verjährungsfrist für
            Mängelansprüche bei neu hergestellten Sachen zwei Jahre ab
            Ablieferung der Ware.
          </p>
        </section>

        <section>
          <h2>§ 9 Haftung</h2>
          <p>
            Der Verkäufer haftet unbeschränkt bei Vorsatz und grober
            Fahrlässigkeit sowie nach dem Produkthaftungsgesetz.
          </p>
          <p>
            Bei leichter Fahrlässigkeit haftet der Verkäufer nur bei
            Verletzung einer wesentlichen Vertragspflicht, begrenzt auf den
            vorhersehbaren, vertragstypischen Schaden.
          </p>
        </section>

        <section>
          <h2>§ 10 Streitbeilegung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-cream"
            >
              ec.europa.eu/consumers/odr
            </a>
            . Wir sind nicht verpflichtet und nicht bereit, an einem
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </section>

        <section>
          <h2>§ 11 Schlussbestimmungen</h2>
          <p>
            Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss
            des UN-Kaufrechts. Bei Verbrauchern gilt dies nur, soweit
            hierdurch der durch zwingende Bestimmungen des Rechts des
            Staates des gewöhnlichen Aufenthalts des Verbrauchers gewährte
            Schutz nicht entzogen wird.
          </p>
          <p>
            Sollte eine Bestimmung dieser AGB unwirksam sein, bleibt die
            Wirksamkeit der übrigen Bestimmungen unberührt.
          </p>
        </section>
      </div>
    </div>
  );
}
