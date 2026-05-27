import { notFound, redirect } from "next/navigation";
import { createServerClient } from "@/lib/supabase/server";
import { getTheme } from "@/lib/themes";
import { getLanguage } from "@/lib/languages";
import { getFinalChallenge } from "@/lib/final-challenges";
import type { ThemeId, LanguageId } from "@/types";
import FinalQuestConsole from "@/components/editor/FinalQuestConsole";

interface Props {
  params: { theme: string; language: string };
}

export async function generateMetadata({ params }: Props) {
  const theme = getTheme(params.theme as ThemeId);
  const lang = getLanguage(params.language as LanguageId);
  if (!theme || !lang) return {};
  return {
    title: `Final Quest — ${theme.name} × ${lang.name} — QuestCode`,
    description: `The timed final challenge for ${theme.name} ${lang.name}. Prove your skills.`,
  };
}

export default async function FinalQuestPage({ params }: Props) {
  const supabase = createServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const theme = getTheme(params.theme as ThemeId);
  const lang = getLanguage(params.language as LanguageId);

  if (!theme || !lang) notFound();

  const finalChallenge = getFinalChallenge(
    params.theme as ThemeId,
    params.language as LanguageId,
  );

  if (!finalChallenge) notFound();

  const { data: subscription } = await supabase
    .from("subscriptions")
    .select("plan_id")
    .eq("user_id", user.id)
    .eq("status", "active")
    .single();

  const isSubscribed = !!subscription;

  // Require subscription to access Final Quest
  if (!isSubscribed) redirect("/pricing");

  return (
    <FinalQuestConsole
      theme={theme}
      language={lang}
      challenge={finalChallenge}
    />
  );
}
