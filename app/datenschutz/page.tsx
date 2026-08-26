export const metadata = { title: "Datenschutz — Katzenmomente24" };

export default function DatenschutzPage() {
  return (
    <div className="container-px max-w-2xl py-16">
      <h1 className="font-display text-3xl text-cream">
        Datenschutzerklärung
      </h1>

      <div className="mt-8 flex flex-col gap-8 text-creamMuted [&_h2]:font-display [&_h2]:text-xl [&_h2]:text-cream [&_p]:mt-2">
        <section>
          <h2>1. Verantwortlicher</h2>
          <p>
            Jiri Riegert, Kolonnenstr. 8, 10827 Berlin, Deutschland ·
            riegertjiri@gmail.com · +49 163 1409787
          </p>
        </section>

        <section>
          <h2>2. Bestelldaten</h2>
          <p>
            Wenn Sie bei uns bestellen, verarbeiten wir Ihre Name, Adresse,
            E-Mail-Adresse und Bestelldetails, um den Kaufvertrag zu
            erfüllen (Art. 6 Abs. 1 lit. b DSGVO). Diese Daten geben wir zur
            Zahlungsabwicklung an Stripe bzw. PayPal und zur Auslieferung an
            unseren Versanddienstleister weiter.
          </p>
        </section>

        <section>
          <h2>3. Zahlungsdienstleister</h2>
          <p>
            <strong className="text-cream">Stripe:</strong> Stripe Payments
            Europe, Ltd., 1 Grand Canal Street Lower, Dublin, Irland.
            Stripe verarbeitet Ihre Zahlungsdaten in eigener
            Verantwortlichkeit gemäß den Datenschutzhinweisen von Stripe.
          </p>
          <p>
            <strong className="text-cream">PayPal:</strong> PayPal (Europe)
            S.à r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449
            Luxemburg. Bei Auswahl von PayPal als Zahlungsart werden Ihre
            Daten an PayPal übermittelt.
          </p>
        </section>

        <section>
          <h2>4. Hosting</h2>
          <p>
            Diese Website wird bei einem externen Hosting-Anbieter
            betrieben. Personenbezogene Daten, die auf dieser Website
            erfasst werden, werden auf dessen Servern gespeichert. [Name und
            Sitz des Hosting-Anbieters hier ergänzen, sobald festgelegt.]
          </p>
        </section>

        <section>
          <h2>5. Warenkorb</h2>
          <p>
            Ihr Warenkorb wird lokal in Ihrem Browser gespeichert
            (Local Storage), damit er beim erneuten Besuch erhalten bleibt.
            Diese Daten verlassen Ihr Gerät nicht, bis Sie eine Bestellung
            abschließen.
          </p>
        </section>

        <section>
          <h2>6. Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung der Verarbeitung, Datenübertragbarkeit und
            Widerspruch bezüglich Ihrer personenbezogenen Daten. Wenden Sie
            sich hierfür an die oben genannte Kontaktadresse.
          </p>
          <p>
            Sie haben zudem das Recht, sich bei einer
            Datenschutz-Aufsichtsbehörde zu beschweren.
          </p>
        </section>

        <section>
          <h2>7. Cookies und Tracking</h2>
          <p>
            Diese Website setzt aktuell keine Analyse- oder
            Marketing-Cookies ein. Sollten Sie künftig Tracking-Pixel (z. B.
            TikTok Pixel, Meta Pixel) einbinden, muss diese Erklärung um
            eine Beschreibung der eingesetzten Dienste sowie ein
            Cookie-Consent-Banner mit Opt-in ergänzt werden, bevor die
            Dienste geladen werden.
          </p>
        </section>
      </div>
    </div>
  );
}
