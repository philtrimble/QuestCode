"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { THEME_LIST } from "@/lib/themes";
import { LANGUAGE_LIST } from "@/lib/languages";
import { ALL_CHALLENGES } from "@/lib/challenges";
import { Code2, LogOut, ChevronRight, Trophy, Zap } from "lucide-react";
import type { UserSubscription, UserProfile } from "@/types";

interface ProgressEntry {
  challenge_id: string;
  theme_id: string;
  language_id: string;
  completed: boolean;
}

interface Props {
  user: Pick<UserProfile, "id" | "email" | "displayName">;
  subscription: UserSubscription | null;
  progress: ProgressEntry[];
}

export default function DashboardClient({ user, subscription, progress }: Props) {
  const router = useRouter();
  const supabase = createClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  const completedCount = progress.filter((p) => p.completed).length;

  const isFullyUnlocked = (themeId: string, languageId: string) => {
    if (!subscription) return false;
    if (subscription.planId === "all-access-lifetime" || subscription.planId === "all-access-monthly") return true;
    const themeOk = subscription.planId.includes("unlimited-themes") || subscription.selectedThemeId === themeId;
    const langOk = subscription.planId.includes("unlimited-languages") || subscription.selectedLanguageId === languageId;
    return themeOk && langOk;
  };

  const getChallengeProgress = (themeId: string, languageId: string) => {
    const key = `${themeId}-${languageId}`;
    const total = ALL_CHALLENGES[key]?.length ?? 0;
    const completed = progress.filter(
      (p) => p.theme_id === themeId && p.language_id === languageId && p.completed
    ).length;
    return { completed, total };
  };

  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-glow/8 rounded-full blur-[100px]" />
      </div>

      {/* Top nav */}
      <nav className="border-b border-brand-border bg-brand-surface/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-glow rounded-lg flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-white">QuestCode</span>
          </Link>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-white">{user.displayName ?? user.email}</p>
              {subscription ? (
                <p className="text-xs text-brand-neon flex items-center gap-1 justify-end">
                  <Zap className="w-3 h-3" />
                  {subscription.planId.replace(/-/g, " ")}
                </p>
              ) : (
                <Link href="/pricing" className="text-xs text-brand-accent hover:underline">
                  Upgrade ✨
                </Link>
              )}
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white text-sm transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Sign out</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Welcome banner */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white mb-1">
            {user.displayName ? `Welcome back, ${user.displayName.split(" ")[0]}` : "Welcome back"} 👋
          </h1>
          <p className="text-slate-400">
            {completedCount > 0
              ? `You've completed ${completedCount} challenge${completedCount !== 1 ? "s" : ""}. Keep going!`
              : "Pick a theme and language below to start your first challenge."}
          </p>
        </div>

        {/* No subscription banner */}
        {!subscription && (
          <div className="glass-card border-brand-glow/40 neon-border p-5 mb-10 flex items-center justify-between">
            <div>
              <p className="text-white font-semibold">You're on the free tier</p>
              <p className="text-slate-400 text-sm">Unlock all challenges with a subscription</p>
            </div>
            <Link href="/pricing" className="btn-primary text-sm py-2 px-5 flex-shrink-0">
              See plans
            </Link>
          </div>
        )}

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Challenges done", value: completedCount, icon: "✅" },
            { label: "Themes unlocked", value: subscription ? (subscription.planId.includes("unlimited-themes") ? "All" : "1") : "0", icon: "🎬" },
            { label: "Languages unlocked", value: subscription ? (subscription.planId.includes("unlimited-languages") ? "All" : "1") : "0", icon: "💻" },
            { label: "Current streak", value: "—", icon: "🔥" },
          ].map((stat) => (
            <div key={stat.label} className="glass-card p-4 text-center">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Theme × Language grid */}
        <h2 className="text-xl font-bold text-white mb-5">Choose your path</h2>
        <div className="space-y-8">
          {THEME_LIST.map((theme) => (
            <div key={theme.id}>
              {/* Theme header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{theme.emoji}</span>
                <div>
                  <h3 className={`font-bold text-lg ${theme.colorClass}`}>{theme.name}</h3>
                  <p className="text-slate-500 text-xs">{theme.setting}</p>
                </div>
              </div>

              {/* Language cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {LANGUAGE_LIST.map((lang) => {
                  const fullyUnlocked = isFullyUnlocked(theme.id, lang.id);
                  const { completed, total } = getChallengeProgress(theme.id, lang.id);
                  const progress_pct = total > 0 ? Math.round((completed / total) * 100) : 0;
                  const hasContent = total > 0;

                  if (!hasContent) {
                    return (
                      <div key={lang.id} className="glass-card p-4 opacity-40 cursor-not-allowed border-brand-border">
                        <span className="text-xl grayscale">{lang.icon}</span>
                        <p className="text-slate-400 text-sm font-semibold mt-2">{lang.name}</p>
                        <p className="text-slate-600 text-xs">Coming soon</p>
                      </div>
                    );
                  }

                  return (
                    <div key={lang.id} className="relative">
                      <Link
                        href={`/learn/${theme.id}/${lang.id}`}
                        className="glass-card p-4 block hover:scale-[1.03] transition-all duration-200 border-brand-border hover:border-brand-muted group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xl">{lang.icon}</span>
                          {fullyUnlocked && completed === total ? (
                            <Trophy className="w-4 h-4 text-brand-amber" />
                          ) : !fullyUnlocked ? (
                            <span className="text-xs text-brand-neon font-semibold">1 free</span>
                          ) : null}
                        </div>
                        <p className="text-white text-sm font-semibold">{lang.name}</p>
                        {fullyUnlocked ? (
                          <>
                            <p className="text-slate-500 text-xs mb-2">{completed}/{total} done</p>
                            <div className="w-full bg-brand-surface rounded-full h-1">
                              <div
                                className="h-1 rounded-full bg-brand-glow transition-all"
                                style={{ width: `${progress_pct}%` }}
                              />
                            </div>
                          </>
                        ) : (
                          <p className="text-slate-500 text-xs">Try challenge 1</p>
                        )}
                        <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-white mt-2 transition-colors" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
