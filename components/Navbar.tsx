"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function Navbar() {
  const { totalCount, open } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
      <div className="container-px flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl tracking-tight text-cream"
        >
          Katzenmomente24
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-creamMuted md:flex">
          <Link href="/#enthalten" className="transition hover:text-cream">
            Enthalten im Set
          </Link>
        </nav>

        <button
          onClick={open}
          className="group flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-cream transition hover:border-gold"
          aria-label="Warenkorb öffnen"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            className="stroke-cream transition group-hover:stroke-gold"
          >
            <path
              d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L21 8H6"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="9" cy="21" r="1.4" fill="currentColor" stroke="none" />
            <circle
              cx="17"
              cy="21"
              r="1.4"
              fill="currentColor"
              stroke="none"
            />
          </svg>
          Warenkorb
          {totalCount > 0 && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 font-mono text-xs text-bg">
              {totalCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
