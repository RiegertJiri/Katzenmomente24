import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Reads the secret key from the server environment — never expose this key
// in client-side code.
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2024-06-20",
});

export async function POST(req: NextRequest) {
  try {
    const { items } = (await req.json()) as {
      items: { stripePriceId: string; qty: number }[];
    };

    if (!items?.length) {
      return NextResponse.json({ error: "Warenkorb ist leer" }, { status: 400 });
    }

    const origin = req.headers.get("origin") ?? process.env.SITE_URL;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      // "card" covers Girocard/Kreditkarte via Stripe; enable the PayPal
      // payment method in your Stripe Dashboard settings first.
      payment_method_types: ["card", "paypal"],
      line_items: items.map((i) => ({
        price: i.stripePriceId,
        quantity: i.qty,
      })),
      shipping_address_collection: {
        allowed_countries: ["DE", "AT", "CH"],
      },
      phone_number_collection: {
        enabled: true,
      },
      // 14-Tage-Widerrufsrecht: Stripe selbst übernimmt keine Rückabwicklung,
      // die Rückerstattung muss über das Stripe Dashboard/API ausgelöst werden.
      success_url: `${origin}/checkout/erfolg?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/abbruch`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Checkout konnte nicht erstellt werden" },
      { status: 500 }
    );
  }
}
