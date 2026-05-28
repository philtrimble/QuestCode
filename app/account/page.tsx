import { redirect } from "next/navigation";
import { createServerClient } from "@/lib/supabase/server";
import AccountClient from "@/components/account/AccountClient";
import type { UserSubscription, PlanId, ThemeId, LanguageId } from "@/types";

export const metadata = { title: "Account — QuestCode" };

export default async function AccountPage() {
  const supabase = createServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: raw } = await supabase
    .from("subscriptions")
    .select("*")
    .eq("user_id", user.id)
    .eq("status", "active")
    .single();

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

  const { count: completedCount } = await supabase
    .from("progress")
    .select("*", { count: "exact", head: true })
    .eq("user_id", user.id)
    .eq("completed", true);

  return (
    <AccountClient
      user={{
        id: user.id,
        email: user.email ?? "",
        displayName: user.user_metadata?.full_name ?? "",
      }}
      subscription={subscription}
      completedChallenges={completedCount ?? 0}
    />
  );
}
