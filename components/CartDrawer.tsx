"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/products";

export default function CartDrawer() {
  const { items, isOpen, close, setQty, removeItem, totalCents } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({
            stripePriceId: i.stripePriceId,
            qty: i.qty,
          })),
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError("Checkout konnte nicht gestartet werden.");
      }
    } catch {
      setError("Verbindung zum Checkout fehlgeschlagen.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div
        onClick={close}
        className={`fixed inset-0 z-50 bg-bg/70 backdrop-blur-sm transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isOpen}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-line bg-bgAlt transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Warenkorb"
      >
        <div className="flex items-center justify-between border-b border-line p-6">
          <h2 className="font-display text-xl text-cream">Warenkorb</h2>
          <button
            onClick={close}
            aria-label="Warenkorb schließen"
            className="text-creamMuted transition hover:text-cream"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <p className="text-creamMuted">
              Noch nichts im Warenkorb. Sehen Sie sich unser 3er-Set an.
            </p>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map((item) => (
                <li key={item.slug} className="flex items-start gap-4">
                  <div className="flex-1">
                    <p className="text-cream">{item.name}</p>
                    <p className="font-mono text-sm text-creamMuted">
                      {formatPrice(item.priceCents)}
                    </p>
                    <div className="mt-2 flex items-center gap-3">
                      <button
                        onClick={() => setQty(item.slug, item.qty - 1)}
                        className="h-7 w-7 rounded-full border border-line text-cream hover:border-gold"
                        aria-label={`Menge von ${item.name} verringern`}
                      >
                        −
                      </button>
                      <span className="font-mono text-sm">{item.qty}</span>
                      <button
                        onClick={() => setQty(item.slug, item.qty + 1)}
                        className="h-7 w-7 rounded-full border border-line text-cream hover:border-gold"
                        aria-label={`Menge von ${item.name} erhöhen`}
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.slug)}
                        className="ml-auto text-xs text-creamMuted underline hover:text-coral"
                      >
                        entfernen
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-line p-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-creamMuted">Zwischensumme</span>
            <span className="font-mono text-lg text-cream">
              {formatPrice(totalCents)}
            </span>
          </div>
          {error && <p className="mb-3 text-sm text-coral">{error}</p>}
          <button
            onClick={handleCheckout}
            disabled={items.length === 0 || loading}
            className="w-full rounded-full bg-gold py-3 text-center font-medium text-bg transition hover:opacity-90 disabled:opacity-40"
          >
            {loading ? "Wird geladen…" : "Zur Kasse"}
          </button>
          <p className="mt-3 text-center text-xs text-creamMuted">
            Zahlung sicher über Stripe · Karte oder PayPal
          </p>
        </div>
      </aside>
    </>
  );
}
