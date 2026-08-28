import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-px flex flex-col gap-6 py-12 text-sm text-creamMuted md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl text-cream">Katzenmomente24</p>
          <p className="mt-1 max-w-xs">
            Kleine Werkzeuge gegen große Fellmengen. Entwickelt für Katzen-
            und Hundehaushalte in ganz Deutschland.
          </p>
          <p className="mt-3">
            Jiri Riegert
            <br />
            Kolonnenstr. 8
            <br />
            10827 Berlin
          </p>
        </div>
        <nav className="grid grid-cols-2 grid-rows-2 grid-flow-col gap-x-10 gap-y-2 md:flex md:flex-row md:flex-wrap md:gap-x-6 md:gap-y-2">
          <Link href="/impressum" className="hover:text-cream">
            Impressum
          </Link>
          <Link href="/agb" className="hover:text-cream">
            AGB
          </Link>
          <Link href="/widerruf" className="hover:text-cream">
            Widerrufsrecht
          </Link>
          <Link href="/datenschutz" className="hover:text-cream">
            Datenschutz
          </Link>
        </nav>
      </div>
    </footer>
  );
}
