import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2024-06-20",
});

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
// This is where new-order emails are sent. Update to your own inbox.
const SHOP_OWNER_EMAIL = "riegertjiri@gmail.com";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json(
      { error: "Webhook nicht konfiguriert" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook-Signatur ungültig:", err);
    return NextResponse.json({ error: "Ungültige Signatur" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    // Reload the session with the details we need for fulfillment.
    const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
      expand: ["line_items", "customer_details"],
    });

    const customerName = fullSession.customer_details?.name ?? "—";
    const customerEmail = fullSession.customer_details?.email ?? "—";
    const customerPhone = fullSession.customer_details?.phone ?? "—";
    const shipping = fullSession.shipping_details ?? fullSession.customer_details;
    const address = shipping?.address;
    const amount = fullSession.amount_total
      ? (fullSession.amount_total / 100).toLocaleString("de-DE", {
          style: "currency",
          currency: "EUR",
        })
      : "—";

    const items =
      fullSession.line_items?.data
        .map((item) => `${item.description} × ${item.quantity}`)
        .join("\n") ?? "—";

    const addressText = address
      ? `${address.line1 ?? ""} ${address.line2 ?? ""}\n${address.postal_code ?? ""} ${address.city ?? ""}\n${address.country ?? ""}`
      : "Keine Lieferadresse angegeben";

    // Send a notification email — swap this block for your fulfillment
    // system's API (e.g. forwarding to your warehouse) if needed.
    if (process.env.RESEND_API_KEY) {
      try {
        await resend?.emails.send({
          from: "Katzenmomente24 <onboarding@resend.dev>",
          to: SHOP_OWNER_EMAIL,
          subject: `Neue Bestellung — ${amount}`,
          text: `Neue Bestellung eingegangen!

Name: ${customerName}
E-Mail: ${customerEmail}
Telefon: ${customerPhone}

Lieferadresse:
${addressText}

Artikel:
${items}

Betrag: ${amount}
Stripe Session: ${fullSession.id}`,
        });
      } catch (err) {
        console.error("E-Mail-Versand fehlgeschlagen:", err);
      }
    } else {
      // Fallback while RESEND_API_KEY isn't set yet — visible in Vercel logs.
      console.log("Neue Bestellung:", {
        customerName,
        customerEmail,
        customerPhone,
        addressText,
        items,
        amount,
      });
    }
  }
  
}
