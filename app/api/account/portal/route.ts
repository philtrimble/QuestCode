/**
 * POST /api/account/portal
 *
 * Creates a Stripe Billing Portal session for the authenticated user and
 * returns the one-time URL. The portal lets users update payment methods,
 * view invoices, and cancel monthly subscriptions.
 *
 * Requires the portal to be configured in the Stripe Dashboard:
 * https://dashboard.stripe.com/test/settings/billing/portal
 */

import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe/client";
import { createServerClient } from "@/lib/supabase/server";

export async function POST() {
  const supabase = createServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data: sub } = await supabase
    .from("subscriptions")
    .select("stripe_customer_id")
    .eq("user_id", user.id)
    .eq("status", "active")
    .single();

  if (!sub?.stripe_customer_id) {
    return NextResponse.json(
      { error: "No active subscription found" },
      { status: 404 }
    );
  }

  try {
    const session = await stripe.billingPortal.sessions.create({
      customer: sub.stripe_customer_id,
      return_url: `${process.env.NEXT_PUBLIC_APP_URL}/account`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe portal error:", err);
    return NextResponse.json(
      { error: "Could not open billing portal" },
      { status: 502 }
    );
  }
}
