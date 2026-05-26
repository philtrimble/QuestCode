import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe/client";
import { createServerClient } from "@/lib/supabase/server";
import { PLANS } from "@/lib/plans";
import type { PlanId } from "@/types";

export async function POST(req: NextRequest) {
  try {
    const supabase = createServerClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { planId, selectedThemeId, selectedLanguageId } = body as {
      planId: PlanId;
      selectedThemeId?: string;
      selectedLanguageId?: string;
    };

    const plan = PLANS[planId];
    if (!plan) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    const isLifetime = plan.id.includes("lifetime");

    const sessionParams: Parameters<typeof stripe.checkout.sessions.create>[0] = {
      mode: isLifetime ? "payment" : "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: plan.stripePriceId, quantity: 1 }],
      customer_email: user.email,
      metadata: {
        userId: user.id,
        planId,
        selectedThemeId: selectedThemeId ?? "",
        selectedLanguageId: selectedLanguageId ?? "",
        isLifetime: String(isLifetime),
      },
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing?canceled=true`,
    };

    const session = await stripe.checkout.sessions.create(sessionParams);

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Checkout error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
