"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CheckoutSuccessPage() {
  const { clear } = useCart();

  useEffect(() => {
    clear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container-px flex flex-col items-center py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
        Bestellung erhalten
      </p>
      <h1 className="mt-3 font-display text-3xl text-cream sm:text-4xl">
        Danke für Ihre Bestellung!
      </h1>
      <p className="mt-4 max-w-md text-creamMuted">
        Wir haben Ihre Zahlung erhalten und bereiten den Versand vor. Eine
        Bestätigung erhalten Sie in Kürze per E-Mail.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-gold px-6 py-3 font-medium text-bg transition hover:opacity-90"
      >
        Zur Startseite
      </Link>
    </div>
  );
}
