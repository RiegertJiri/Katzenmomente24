export const metadata = { title: "Widerrufsrecht — Katzenmomente24" };

export default function WiderrufPage() {
  return (
    <div className="container-px max-w-2xl py-16">
      <h1 className="font-display text-3xl text-cream">Widerrufsbelehrung</h1>

      <div className="mt-8 flex flex-col gap-6 text-creamMuted">
        <div>
          <h2 className="font-display text-xl text-cream">Widerrufsrecht</h2>
          <p className="mt-2">
            Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von
            Gründen diesen Vertrag zu widerrufen.
          </p>
          <p className="mt-2">
            Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie
            oder ein von Ihnen benannter Dritter, der nicht der Beförderer
            ist, die letzte Ware in Besitz genommen haben bzw. hat.
          </p>
          <p className="mt-2">Um Ihr Widerrufsrecht auszuüben, müssen Sie uns</p>
          <p className="mt-2 text-cream">
            Jiri Riegert
            <br />
            Kolonnenstr. 8
            <br />
            10827 Berlin
            <br />
            Telefon: +49 163 1409787
            <br />
            E-Mail: riegertjiri@gmail.com
          </p>
          <p className="mt-2">
            mittels einer eindeutigen Erklärung (z. B. ein mit der Post
            versandter Brief oder E-Mail) über Ihren Entschluss, diesen
            Vertrag zu widerrufen, informieren. Sie können dafür das unten
            stehende Muster-Widerrufsformular verwenden, das jedoch nicht
            vorgeschrieben ist.
          </p>
          <p className="mt-2">
            Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die
            Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der
            Widerrufsfrist absenden.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-cream">
            Folgen des Widerrufs
          </h2>
          <p className="mt-2">
            Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle
            Zahlungen, die wir von Ihnen erhalten haben, einschließlich der
            Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich
            daraus ergeben, dass Sie eine andere Art der Lieferung als die
            von uns angebotene, günstigste Standardlieferung gewählt haben),
            unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag
            zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses
            Vertrags bei uns eingegangen ist. Für diese Rückzahlung
            verwenden wir dasselbe Zahlungsmittel, das Sie bei der
            ursprünglichen Transaktion eingesetzt haben, es sei denn, mit
            Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem
            Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.
          </p>
          <p className="mt-2">
            Wir können die Rückzahlung verweigern, bis wir die Waren wieder
            zurückerhalten haben oder bis Sie den Nachweis erbracht haben,
            dass Sie die Waren zurückgesandt haben, je nachdem, welches der
            frühere Zeitpunkt ist.
          </p>
          <p className="mt-2">
            Sie haben die Waren unverzüglich und in jedem Fall spätestens
            binnen vierzehn Tagen ab dem Tag, an dem Sie uns über den
            Widerruf dieses Vertrags unterrichten, an uns zurückzusenden
            oder zu übergeben. Die Frist ist gewahrt, wenn Sie die Waren vor
            Ablauf der Frist von vierzehn Tagen absenden.
          </p>
          <p className="mt-2">
            Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.
          </p>
          <p className="mt-2">
            Sie müssen für einen etwaigen Wertverlust der Waren nur
            aufkommen, wenn dieser Wertverlust auf einen zum Prüfen der
            Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht
            notwendigen Umgang mit ihnen zurückzuführen ist.
          </p>
        </div>

        <div className="rounded-2xl border border-line bg-bgAlt p-6">
          <h2 className="font-display text-xl text-cream">
            Muster-Widerrufsformular
          </h2>
          <p className="mt-2 text-sm">
            (Wenn Sie den Vertrag widerrufen wollen, füllen Sie bitte dieses
            Formular aus und senden Sie es zurück.)
          </p>
          <p className="mt-4 text-sm text-cream">
            An: Jiri Riegert, Kolonnenstr. 8, 10827 Berlin, E-Mail:
            riegertjiri@gmail.com
          </p>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            <li>
              — Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*)
              abgeschlossenen Vertrag über den Kauf der folgenden Waren
              (*)/die Erbringung der folgenden Dienstleistung (*)
            </li>
            <li>— Bestellt am (*)/erhalten am (*)</li>
            <li>— Name des/der Verbraucher(s)</li>
            <li>— Anschrift des/der Verbraucher(s)</li>
            <li>
              — Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf
              Papier)
            </li>
            <li>— Datum</li>
          </ul>
          <p className="mt-4 text-xs text-creamMuted">
            (*) Unzutreffendes streichen.
          </p>
        </div>
      </div>
    </div>
  );
}
