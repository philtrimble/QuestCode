import { notFound, redirect } from "next/navigation";
import { createServerClient } from "@/lib/supabase/server";
import { getTheme } from "@/lib/themes";
import { getLanguage } from "@/lib/languages";
import { getChallenges } from "@/lib/challenges";
import type { ThemeId, LanguageId } from "@/types";
import LearningConsole from "@/components/editor/LearningConsole";

interface Props {
  params: { theme: string; language: string };
}

export async function generateMetadata({ params }: Props) {
  const theme = getTheme(params.theme as ThemeId);
  const lang = getLanguage(params.language as LanguageId);
  if (!theme || !lang) return {};
  return {
    title: `${theme.name} × ${lang.name} — QuestCode`,
    description: `Learn ${lang.name} through the world of ${theme.name}`,
  };
}

export default async function LearnPage({ params }: Props) {
  const supabase = createServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const theme = getTheme(params.theme as ThemeId);
  const lang = getLanguage(params.language as LanguageId);

  if (!theme || !lang) notFound();

  const challenges = getChallenges(params.theme as ThemeId, params.language as LanguageId);
  if (challenges.length === 0) notFound();

  const [{ data: progressData }, { data: subscription }] = await Promise.all([
    supabase
      .from("progress")
      .select("*")
      .eq("user_id", user.id)
      .eq("theme_id", params.theme)
      .eq("language_id", params.language),
    supabase
      .from("subscriptions")
      .select("plan_id, selected_theme_id, selected_language_id")
      .eq("user_id", user.id)
      .eq("status", "active")
      .single(),
  ]);

  const isSubscribed = !!subscription;

  return (
    <LearningConsole
      theme={theme}
      language={lang}
      challenges={challenges}
      userId={user.id}
      initialProgress={progressData ?? []}
      isSubscribed={isSubscribed}
    />
  );
}
