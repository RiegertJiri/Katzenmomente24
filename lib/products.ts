export type IncludedItem = {
  slug: string;
  step: string;
  stepTitle: string;
  name: string;
  tagline: string;
  description: string;
  bullets: string[];
  material: string;
  dimensions: string;
  safety: string[];
  image: string;
};

// Diese drei Teile werden NICHT einzeln verkauft — sie sind ausschließlich
// im 3in1-Set enthalten. Dieses Array liefert nur die Beschreibungstexte
// für die "Enthalten im Set"-Sektion und die GPSR-Sicherheitsangaben.
export const includedItems: IncludedItem[] = [
  {
    slug: "selbstreinigende-katzenbuerste",
    step: "01",
    stepTitle: "Bürsten",
    name: "Selbstreinigende Katzenbürste",
    tagline: "Ideal zur Fellpflege.",
    description:
      "Die Bürste entfernt loses Fell sanft beim Streicheln und lässt sich per Knopfdruck in Sekunden leeren. Kein Fusselball mehr in der Hand.",
    bullets: [
      "Sanfte Edelstahlborsten, hautfreundlich",
      "Selbstreinigung per Knopfdruck",
      "Ergonomischer Griff für lange Streicheleinheiten",
    ],
    material: "ABS-Kunststoff (Griff), Edelstahl (Borsten)",
    dimensions: "15 × 6 × 4 cm, 120 g",
    safety: [
      "Nicht für Kinder unter 3 Jahren geeignet — Kleinteile könnten verschluckt werden.",
      "Nur für den äußerlichen Gebrauch am Fell bestimmt.",
    ],
    image: "/products/brush.jpg",
  },
  {
    slug: "tierhaarentferner",
    step: "02",
    stepTitle: "Entfernen",
    name: "Doppelseitige Fusselbürste",
    tagline: "Tierhaarentferner für Polster, Decken & Kleidung.",
    description:
      "Einfach über die Oberfläche ziehen: Der doppelseitige Tierhaarentferner mit weicher Flor-Fläche befreit Polster, Decken und Kleidung zuverlässig von Tierhaaren, ganz ohne Strom oder Batterien.",
    bullets: [
      "Doppelseitige Flor-Fläche für gründliches Auffangen",
      "Für Polster, Decken, Autositze und Kleidung",
      "Wiederverwendbar, ohne Batterien",
    ],
    material: "Kunststoffgriff, Mikrofaser-Flor-Bezug",
    dimensions: "ca. 30 × 8 cm",
    safety: [
      "Nicht für den Verzehr geeignet.",
      "Nicht für Kinder unter 3 Jahren geeignet.",
    ],
    image: "/products/roller.jpg",
  },
  {
    slug: "waschmaschinenkugeln",
    step: "03",
    stepTitle: "Waschen",
    name: "Fusselbälle",
    tagline: "Tierhaarentferner für die Waschmaschine.",
    description:
      "Einfach mit in die Waschtrommel geben: Die Fusselbälle sammeln Tierhaare während des Waschgangs und verhindern, dass sie sich in der Wäsche verfangen.",
    bullets: [
      "8er-Set: 4 blaue und 4 orange Kugeln",
      "Für viele Waschgänge einsetzbar",
      "Reduziert Fusseln in der Waschmaschine",
    ],
    material: "Schaumstoff (Sponge)",
    dimensions: "Ø ca. 6 cm pro Kugel, 8er-Set (4 blau, 4 orange)",
    safety: [
      "ACHTUNG: Erstickungsgefahr durch Verschlucken kleiner Teile.",
      "Nicht für Kinder unter 3 Jahren geeignet. Von Kindern fernhalten.",
    ],
    image: "/products/balls.jpg",
  },
];

// Das einzige käufliche Produkt im Shop.
export const bundle = {
  slug: "3in1-set",
  name: "3in1 Katzen Pflege-Set",
  tagline: "Bürste, Fusselbürste und Fusselbälle zusammen im Set.",
  priceCents: 2690,
  compareAtCents: 2990,
  description:
    "Die komplette Katzenmomente24-Routine in einem Set: von der Katze direkt in die Bürste, von der Couch mit der Fusselbürste, aus der Wäsche mit den Fusselbällen. Nur als komplettes 3in1-Set erhältlich.",
  image: "/products/set.jpg",
  // Set this once you create the corresponding Price in the Stripe Dashboard.
  stripePriceId: "price_REPLACE_SET",
};

export function getItemBySlug(slug: string) {
  return includedItems.find((p) => p.slug === slug);
}

export function formatPrice(cents: number) {
  return (cents / 100).toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
  });
}
