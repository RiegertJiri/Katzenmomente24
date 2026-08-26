# Katzenmomente24 — webová aplikace (Next.js)

E-shop pro selbstreinigende Katzenbürste, Tierhaarentferner a
Waschmaschinenkugeln, včetně 3er-Setu. Postaveno na Next.js 14 (App
Router), TypeScript, Tailwind CSS a Stripe Checkout (karta + PayPal).

## 1. Lokální spuštění

```bash
npm install
cp .env.example .env.local
# doplňte STRIPE_SECRET_KEY do .env.local
npm run dev
```

Web poběží na http://localhost:3000.

## 2. Nastavení Stripe (nutné před prvním prodejem)

1. Založte si účet na [stripe.com](https://stripe.com) (nebo použijte
   existující) a v Dashboardu si vygenerujte **Secret key**
   (`sk_test_...` pro testování, `sk_live_...` pro ostrý provoz).
2. V Stripe Dashboardu → **Products** vytvořte produkt "3in1 Katzen
   Pflege-Set" za 26,90 € (compare-at 29,90 €).
3. Zkopírujte **Price ID** (vypadá jako `price_1Nxxxxxxxxxxxxx`) a vložte
   ho do `lib/products.ts` místo `price_REPLACE_SET`.
4. V Stripe Dashboardu → **Settings → Payment methods** zapněte metodu
   **PayPal** (vyžaduje propojení PayPal účtu se Stripe).
5. Do `.env.local` (lokálně) nebo do proměnných prostředí na hostingu
   (v produkci) vložte `STRIPE_SECRET_KEY`.

## 3. Webhook — abyste se dozvěděli o nové objednávce

Aplikace obsahuje `/api/webhook`, který se spustí po každé úspěšné
platbě a pošle vám e-mail s údaji objednávky (jméno, e-mail, telefon,
doručovací adresa, objednané položky, částka).

1. Ve Stripe Dashboardu → **Developers → Webhooks → Add endpoint**
   zadejte URL `https://vase-domena.de/api/webhook`.
2. Jako event vyberte **`checkout.session.completed`**.
3. Zkopírujte **Signing secret** (`whsec_...`) a vložte ho jako
   `STRIPE_WEBHOOK_SECRET` do proměnných prostředí.
4. Založte si zdarma účet na [resend.com](https://resend.com), vygenerujte
   API klíč a vložte ho jako `RESEND_API_KEY`. V `app/api/webhook/route.ts`
   upravte `SHOP_OWNER_EMAIL` na e-mail, kam mají objednávky chodit.
5. Bez Resend klíče se údaje objednávky alespoň zapíšou do serverového
   logu (ve Vercelu pod **Logs**) — funkční, jen bez e-mailu.

**I bez tohoto kroku** vidíte každou objednávku (jméno, adresu, částku,
stav platby) přímo ve Stripe Dashboardu pod **Payments** — webhook jen
přidává automatické upozornění navíc.

## 3. Nasazení (doporučeno: Vercel)

1. Nahrajte kód do GitHub repozitáře.
2. Na [vercel.com](https://vercel.com) → **New Project** → vyberte repo.
3. Do **Environment Variables** přidejte `STRIPE_SECRET_KEY` (a volitelně
   `SITE_URL` s vaší finální doménou).
4. Deploy. Vercel vám dá doménu typu `nazev.vercel.app`, kterou pak můžete
   napojit na vlastní `.de` doménu.

## 4. Co ještě doplnit před spuštěním

- **`app/datenschutz/page.tsx`** — doplňte jméno a sídlo hostingového
  poskytovatele (sekce 4).
- **`app/agb/page.tsx`** — ověřte dodací lhůtu (aktuálně 2–4 Werktage) podle
  skutečné dohody s vaším skladem/fulfillmentem.
- **Product images** — `public/products/*.svg` jsou jen jednoduché
  placeholdery. Nahraďte reálnými fotkami produktů (doporučeně `.webp`,
  čtvercový poměr stran).
- **GPSR štítky na obalu** — texty na webu (`lib/products.ts` →
  `safety`) musí odpovídat tomu, co je fyzicky na obalu/výrobku.
- Před ostrým provozem přepněte Stripe klíč z `sk_test_...` na
  `sk_live_...`.

## 5. Struktura projektu

```
app/                    – stránky (App Router)
  produkty/              – výpis a detail produktů
  checkout/erfolg|abbruch – návratové stránky po platbě
  impressum, agb, widerruf, datenschutz – právní stránky
  api/checkout/          – vytváření Stripe Checkout Session
components/             – znovupoužitelné UI komponenty
lib/products.ts         – katalog produktů (zdroj pravdy pro ceny a texty)
lib/cart-context.tsx    – stav košíku (localStorage)
```

## 6. Případné další kroky (mimo rozsah této verze)

- **Sklad/fulfillment integrace** — napojení na systém vašeho
  fulfillment partnera (např. přes jejich API nebo export objednávek).
  Nejjednodušší rozšíření: v `app/api/webhook/route.ts` přidat další
  `fetch()` volání na API vašeho fulfillment partnera vedle e-mailu.
- **Cookie banner** — pokud přidáte TikTok/Meta pixel pro remarketing,
  je potřeba opt-in cookie souhlas před jejich načtením.
