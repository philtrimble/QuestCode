/**
 * DELETE /api/account/delete
 *
 * Permanently deletes the authenticated user's account:
 * 1. Cancels their Stripe subscription (if monthly/active)
 * 2. Deletes all rows from the `progress` table
 * 3. Deletes the subscription row
 * 4. Deletes the Supabase auth user (service role required)
 *
 * Uses the service-role client for steps that bypass RLS.
 */

import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe/client";
import { createServerClient } from "@/lib/supabase/server";
import { createClient } from "@supabase/supabase-js";

// Service-role client — bypasses RLS, used only server-side
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function DELETE() {
  const supabase = createServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Look up subscription details
  const { data: sub } = await supabase
    .from("subscriptions")
    .select("stripe_subscription_id, is_lifetime")
    .eq("user_id", user.id)
    .eq("status", "active")
    .single();

  // Cancel Stripe subscription for non-lifetime active subscribers
  if (sub?.stripe_subscription_id && !sub.is_lifetime) {
    try {
      await stripe.subscriptions.cancel(sub.stripe_subscription_id);
    } catch (err) {
      // Log but don't block deletion — the user's request takes priority
      console.error("Stripe subscription cancel error during account delete:", err);
    }
  }

  // Delete all user data from Supabase
  await supabaseAdmin.from("progress").delete().eq("user_id", user.id);
  await supabaseAdmin.from("subscriptions").delete().eq("user_id", user.id);

  // Delete the auth user — must be last (invalidates the session)
  const { error: deleteError } = await supabaseAdmin.auth.admin.deleteUser(user.id);
  if (deleteError) {
    console.error("Supabase deleteUser error:", deleteError);
    return NextResponse.json(
      { error: "Failed to delete account — please contact support" },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
