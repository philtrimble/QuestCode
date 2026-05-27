import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
);

export async function POST(req: NextRequest) {
  const { email, password, displayName, code } = await req.json();

  if (!email || !password || !code) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  // Validate code against BETA_CODES env var (comma-separated list)
  const validCodes = (process.env.BETA_CODES ?? "")
    .split(",")
    .map((c) => c.trim().toUpperCase())
    .filter(Boolean);

  if (validCodes.length === 0) {
    return NextResponse.json({ error: "No access codes are configured." }, { status: 500 });
  }

  if (!validCodes.includes(code.trim().toUpperCase())) {
    return NextResponse.json({ error: "Invalid access code." }, { status: 400 });
  }

  // Create user via admin API — email pre-confirmed, no confirmation email sent
  const { data, error: createError } = await supabaseAdmin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { full_name: displayName ?? "" },
  });

  if (createError) {
    const msg = createError.message.toLowerCase();
    if (msg.includes("already registered") || msg.includes("already been registered")) {
      return NextResponse.json({ error: "An account with that email already exists." }, { status: 409 });
    }
    return NextResponse.json({ error: createError.message }, { status: 400 });
  }

  const userId = data.user.id;

  // Grant all-access-lifetime subscription
  await supabaseAdmin.from("subscriptions").delete().eq("user_id", userId);
  const { error: subError } = await supabaseAdmin.from("subscriptions").insert({
    user_id: userId,
    plan_id: "all-access-lifetime",
    stripe_customer_id: `beta_${userId.slice(0, 8)}`,
    stripe_subscription_id: null,
    status: "active",
    is_lifetime: true,
    current_period_end: null,
  });

  if (subError) {
    console.error("Beta code: subscription insert failed:", subError);
    // User was created — don't block them, they can still access challenge 1
  }

  return NextResponse.json({ success: true });
}
