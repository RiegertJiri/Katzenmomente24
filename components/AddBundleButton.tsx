"use client";

import { useCart } from "@/lib/cart-context";
import { bundle } from "@/lib/products";

export default function AddBundleButton() {
  const { addItem } = useCart();
  return (
    <button
      onClick={() =>
        addItem({
          slug: bundle.slug,
          name: bundle.name,
          priceCents: bundle.priceCents,
          stripePriceId: bundle.stripePriceId,
        })
      }
      className="mt-6 rounded-full bg-gold px-6 py-3 font-medium text-bg transition hover:opacity-90"
    >
      In den Warenkorb
    </button>
  );
}
