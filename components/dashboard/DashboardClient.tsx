"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { THEME_LIST } from "@/lib/themes";
import { LANGUAGE_LIST } from "@/lib/languages";
import { ALL_CHALLENGES } from "@/lib/challenges";
import { Code2, LogOut, ChevronRight, Trophy, Zap, PlayCircle, Settings, HelpCircle } from "lucide-react";
import type { UserSubscription, UserProfile } from "@/types";
import TourOverlay, { type TourStep } from "@/components/tour/TourOverlay";

const TOUR_KEY = "qc:tour:dashboard";

const DASHBOARD_TOUR: TourStep[] = [
  {
    title: "Welcome to QuestCode! 👋",
    body: "You're about to learn to code through your favourite TV shows. Let's take a 30-second tour so you know where everything lives.",
  },
  {
    tourId: "dash-stats",
    side: "bottom",
    title: "Your progress at a glance",
    body: "These four cards track your challenges completed, themes and languages unlocked, and your daily streak. Come back every day to keep the flame alive 🔥",
  },
  {
    tourId: "dash-grid",
    side: "top",
    title: "Pick your learning path",
    body: "Each card is a Show × Language combo — Breaking Bad + Python, Stranger Things + SQL, and so on. The bar shows how far through the 10 challenges you are.",
  },
  {
    tourId: "dash-nav-user",
    side: "bottom",
    title: "Your account",
    body: "Your current plan lives here. Click Account to change your password, manage billing, or upgrade to unlock more shows and languages.",
  },
  {
    title: "Ready to start? 🚀",
    body: "Pick any Show × Language card below and your first challenge will load instantly. Good luck — say my name.",
  },
];

interface ProgressEntry {
  challenge_id: string;
  theme_id: string;
  language_id: string;
  completed: boolean;
  completed_at?: string | null;
}

function computeStreak(progress: ProgressEntry[]): number {
  const dates = progress
    .filter((p) => p.completed && p.completed_at)
    .map((p) => p.completed_at!.split("T")[0]);

  if (dates.length === 0) return 0;

  const unique = Array.from(new Set(dates)).sort().reverse(); // newest first

  const today = new Date().toISOString().split("T")[0];
  const yesterday = new Date(Date.now() - 86_400_000).toISOString().split("T")[0];

  // Streak is live only if there was activity today or yesterday
  if (unique[0] !== today && unique[0] !== yesterday) return 0;

  let streak = 1;
  for (let i = 1; i < unique.length; i++) {
    const prev = new Date(unique[i - 1]);
    const curr = new Date(unique[i]);
    const diff = Math.round((prev.getTime() - curr.getTime()) / 86_400_000);
    if (diff === 1) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}

interface Props {
  user: Pick<UserProfile, "id" | "email" | "displayName">;
  subscription: UserSubscription | null;
  progress: ProgressEntry[];
}

export default function DashboardClient({ user, subscription, progress }: Props) {
  const router = useRouter();
  const supabase = createClient();

  // ── Tour ──────────────────────────────────────────────────────────────────
  const [showTour, setShowTour] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem(TOUR_KEY)) {
      // Small delay so the page finishes painting before the overlay renders
      const t = setTimeout(() => setShowTour(true), 400);
      return () => clearTimeout(t);
    }
  }, []);

  const dismissTour = () => {
    if (typeof window !== "undefined") localStorage.setItem(TOUR_KEY, "1");
    setShowTour(false);
  };

  const replayTour = () => setShowTour(true);
  // ─────────────────────────────────────────────────────────────────────────

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  const completedCount = progress.filter((p) => p.completed).length;
  const streak = computeStreak(progress);

  // Most recently active theme/language combo — used for the "Continue" CTA
  const continuePath = (() => {
    const withDates = progress
      .filter((p) => p.completed && p.completed_at)
      .sort((a, b) => new Date(b.completed_at!).getTime() - new Date(a.completed_at!).getTime());
    if (!withDates[0]) return null;
    const { theme_id, language_id } = withDates[0];
    const theme = THEME_LIST.find((t) => t.id === theme_id);
    const lang = LANGUAGE_LIST.find((l) => l.id === language_id);
    if (!theme || !lang) return null;
    return { themeId: theme_id, languageId: language_id, themeName: theme.name, themeEmoji: theme.emoji, langName: lang.name };
  })();

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
      {/* Onboarding tour */}
      {showTour && <TourOverlay steps={DASHBOARD_TOUR} onDone={dismissTour} />}

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

          <div className="flex items-center gap-4" data-tour-id="dash-nav-user">
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
            <Link
              href="/account"
              className="flex items-center gap-1.5 text-slate-400 hover:text-white text-sm transition-colors"
              title="Account settings"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Account</span>
            </Link>
            <button
              onClick={replayTour}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white text-sm transition-colors"
              title="Replay tutorial"
            >
              <HelpCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Tutorial</span>
            </button>
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
        <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">
              {user.displayName ? `Welcome back, ${user.displayName.split(" ")[0]}` : "Welcome back"} 👋
            </h1>
            <p className="text-slate-400">
              {completedCount > 0
                ? `You've completed ${completedCount} challenge${completedCount !== 1 ? "s" : ""}. Keep going!`
                : "Pick a theme and language below to start your first challenge."}
            </p>
          </div>
          {continuePath && (
            <Link
              href={`/learn/${continuePath.themeId}/${continuePath.languageId}`}
              className="btn-primary flex items-center gap-2 self-start sm:self-auto flex-shrink-0"
            >
              <PlayCircle className="w-4 h-4" />
              Continue {continuePath.themeEmoji} {continuePath.themeName} × {continuePath.langName}
            </Link>
          )}
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
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10" data-tour-id="dash-stats">
          {[
            { label: "Challenges done", value: completedCount, icon: "✅" },
            { label: "Themes unlocked", value: subscription ? (subscription.planId.includes("unlimited-themes") ? "All" : "1") : "0", icon: "🎬" },
            { label: "Languages unlocked", value: subscription ? (subscription.planId.includes("unlimited-languages") ? "All" : "1") : "0", icon: "💻" },
            { label: "Current streak", value: streak > 0 ? `${streak} day${streak !== 1 ? "s" : ""}` : "—", icon: "🔥" },
          ].map((stat) => (
            <div key={stat.label} className="glass-card p-4 text-center">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Theme × Language grid */}
        <h2 className="text-xl font-bold text-white mb-5" data-tour-id="dash-grid">Choose your path</h2>
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
