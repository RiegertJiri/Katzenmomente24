import { includedItems, bundle, formatPrice } from "@/lib/products";
import AddBundleButton from "@/components/AddBundleButton";
import FurSlider from "@/components/FurSlider";

export default function HomePage() {
  return (
    <div>
      {/* Hero — das ganze Set, das einzige Produkt */}
      <section className="container-px pb-[22px] pt-14 md:pt-20">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[3fr_2fr] md:items-center">
          <div className="mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-line bg-bgAlt md:max-w-none">
            <img
              src={bundle.image}
              alt={bundle.name}
              className="aspect-[9/16] w-full object-cover"
            />
          </div>
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-gold">
              Für Katzen- &amp; Hundehaushalte
            </p>
            <h1 className="font-display text-4xl leading-[1.05] text-cream sm:text-5xl">
              {bundle.name}
            </h1>
            <p className="mt-4 text-creamMuted">{bundle.tagline}</p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-mono text-3xl text-cream">
                {formatPrice(bundle.priceCents)}
              </span>
              <span className="font-mono text-base text-creamMuted line-through">
                {formatPrice(bundle.compareAtCents)}
              </span>
            </div>

            <AddBundleButton />

            <p className="mt-6 max-w-md text-creamMuted">{bundle.description}</p>

            <p className="mt-4 text-xs text-creamMuted">
              Nur als komplettes Set erhältlich — nicht einzeln verkäuflich.
            </p>
          </div>
        </div>
      </section>

      {/* Enthalten im Set — nur informativ, kein Einzelkauf */}
      <section id="enthalten" className="container-px py-16">
        <div className="mx-auto mb-10 max-w-3xl">
          <h2 className="font-display text-2xl text-cream sm:text-3xl">
            Enthalten im 3in1-Set
          </h2>
          <p className="mt-2 max-w-lg text-creamMuted">
            Diese drei Teile sind ausschließlich zusammen im Set erhältlich.
          </p>
        </div>
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
          {includedItems.map((item) => (
            <div key={item.slug}>
              <div className="mb-3 flex items-baseline gap-2">
                <span className="font-mono text-sm text-gold">
                  {item.step}
                </span>
                <span className="font-display text-lg text-cream">
                  {item.stepTitle}
                </span>
              </div>
              <div className="overflow-hidden rounded-3xl border border-line bg-bgAlt">
                <img
                  src={item.image}
                  alt={item.name}
                  className="aspect-square w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="font-display text-base text-cream">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-creamMuted">
                    {item.tagline}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Signature Element — Vorher/Nachher */}
      <section className="border-t border-line py-20">
        <div className="container-px grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-gold">
              Der Unterschied
            </p>
            <h2 className="font-display text-2xl text-cream sm:text-3xl">
              Ziehen Sie den Regler
            </h2>
            <p className="mt-3 max-w-sm text-creamMuted">
              So verändert sich die Fellmenge auf der Couch, sobald das Set
              regelmäßig zum Einsatz kommt.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <FurSlider />
          </div>
        </div>
      </section>
    </div>
  );
}
