import { redirect } from "next/navigation";
import { createServerClient } from "@/lib/supabase/server";
import DashboardClient from "@/components/dashboard/DashboardClient";

export const metadata = { title: "Dashboard — QuestCode" };

export default async function DashboardPage() {
  const supabase = createServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Fetch user's subscription
  const { data: subscription } = await supabase
    .from("subscriptions")
    .select("*")
    .eq("user_id", user.id)
    .eq("status", "active")
    .single();

  // Fetch progress summary
  const { data: progress } = await supabase
    .from("progress")
    .select("challenge_id, theme_id, language_id, completed")
    .eq("user_id", user.id);

  return (
    <DashboardClient
      user={{ id: user.id, email: user.email ?? "", displayName: user.user_metadata?.full_name }}
      subscription={subscription}
      progress={progress ?? []}
    />
  );
}
