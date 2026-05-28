import { redirect } from "next/navigation";
import { createServerClient } from "@/lib/supabase/server";
import DashboardClient from "@/components/dashboard/DashboardClient";
import type { UserSubscription, PlanId, ThemeId, LanguageId } from "@/types";

export const metadata = { title: "Dashboard — QuestCode" };

export default async function DashboardPage() {
  const supabase = createServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Fetch user's subscription (raw snake_case from DB)
  const { data: raw } = await supabase
    .from("subscriptions")
    .select("*")
    .eq("user_id", user.id)
    .eq("status", "active")
    .single();

  // Map snake_case DB row → camelCase UserSubscription
  const subscription: UserSubscription | null = raw
    ? {
        id: raw.id,
        userId: raw.user_id,
        planId: raw.plan_id as PlanId,
        stripeSubscriptionId: raw.stripe_subscription_id ?? undefined,
        stripeCustomerId: raw.stripe_customer_id,
        status: raw.status,
        currentPeriodEnd: raw.current_period_end ?? undefined,
        isLifetime: raw.is_lifetime,
        selectedThemeId: raw.selected_theme_id as ThemeId | undefined,
        selectedLanguageId: raw.selected_language_id as LanguageId | undefined,
        createdAt: raw.created_at,
      }
    : null;

  // Fetch progress summary
  const { data: progress } = await supabase
    .from("progress")
    .select("challenge_id, theme_id, language_id, completed, completed_at")
    .eq("user_id", user.id);

  return (
    <DashboardClient
      user={{ id: user.id, email: user.email ?? "", displayName: user.user_metadata?.full_name }}
      subscription={subscription}
      progress={progress ?? []}
    />
  );
}
