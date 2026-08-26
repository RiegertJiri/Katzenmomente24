import Link from "next/link";

export default function CheckoutCancelPage() {
  return (
    <div className="container-px flex flex-col items-center py-24 text-center">
      <h1 className="font-display text-3xl text-cream sm:text-4xl">
        Zahlung abgebrochen
      </h1>
      <p className="mt-4 max-w-md text-creamMuted">
        Es wurde nichts berechnet. Ihr Warenkorb ist noch gespeichert, falls
        Sie es erneut versuchen möchten.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full border border-line px-6 py-3 text-cream transition hover:border-gold"
      >
        Zurück zur Startseite
      </Link>
    </div>
  );
}
