/**
 * Creates a test user with an all-access-lifetime subscription.
 *
 * Usage:
 *   npx tsx scripts/create-test-user.ts
 *
 * Requires NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local
 */

import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
import { resolve } from "path";

// Load .env.local from the project root
config({ path: resolve(__dirname, "../.env.local") });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}

const TEST_EMAIL = "test@questcode.dev";
const TEST_PASSWORD = "QuestCode2024!";

// Admin client uses the service role key — bypasses RLS
const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});

async function upsertSubscription(userId: string) {
  // Delete any existing test subscription first, then insert fresh
  await admin.from("subscriptions").delete().eq("user_id", userId);
  const { error } = await admin.from("subscriptions").insert({
    user_id: userId,
    plan_id: "all-access-lifetime",
    stripe_customer_id: "test_cus_internal",
    stripe_subscription_id: null,
    status: "active",
    is_lifetime: true,
    current_period_end: null,
  });
  if (error) throw error;
}

async function run() {
  // Try to create the user
  const { data, error } = await admin.auth.admin.createUser({
    email: TEST_EMAIL,
    password: TEST_PASSWORD,
    email_confirm: true,
    user_metadata: { full_name: "Test User" },
  });

  let userId: string;

  if (error) {
    if (error.message.toLowerCase().includes("already registered") || error.message.toLowerCase().includes("already been registered")) {
      console.log("User already exists — looking up existing record...");
      const { data: list } = await admin.auth.admin.listUsers();
      const existing = list?.users.find((u) => u.email === TEST_EMAIL);
      if (!existing) throw new Error("Could not locate existing user");
      userId = existing.id;
      // Update password in case it drifted
      await admin.auth.admin.updateUserById(userId, { password: TEST_PASSWORD });
      console.log(`Found existing user: ${userId}`);
    } else {
      throw error;
    }
  } else {
    userId = data.user.id;
    console.log(`Created new user: ${userId}`);
  }

  await upsertSubscription(userId);

  console.log("\n✓ Test user ready");
  console.log("─────────────────────────────");
  console.log(`  Email:    ${TEST_EMAIL}`);
  console.log(`  Password: ${TEST_PASSWORD}`);
  console.log(`  Plan:     all-access-lifetime (all themes + all languages)`);
  console.log("─────────────────────────────\n");
}

run().catch((err) => {
  console.error("Error:", err.message ?? err);
  process.exit(1);
});
