"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  Play, ChevronLeft, ChevronRight, Lightbulb,
  Check, X, Code2, BookOpen, Trophy, RotateCcw, Lock
} from "lucide-react";
import type { Theme, Language, Challenge } from "@/types";
import { createClient } from "@/lib/supabase/client";

// Monaco must be dynamically imported (no SSR)
const MonacoEditor = dynamic(() => import("./MonacoEditor"), { ssr: false });

interface ProgressEntry {
  challenge_id: string;
  completed: boolean;
  last_code?: string;
}

interface Props {
  theme: Theme;
  language: Language;
  challenges: Challenge[];
  userId: string;
  initialProgress: ProgressEntry[];
  isSubscribed: boolean;
}

type PanelTab = "challenge" | "output";

export default function LearningConsole({ theme, language, challenges, userId, initialProgress, isSubscribed }: Props) {
  const supabase = createClient();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [code, setCode] = useState(challenges[0]?.starterCode ?? "");
  const [output, setOutput] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [running, setRunning] = useState(false);
  const [tab, setTab] = useState<PanelTab>("challenge");
  const [progress, setProgress] = useState<Record<string, boolean>>(
    Object.fromEntries(initialProgress.map((p) => [p.challenge_id, p.completed]))
  );

  const current = challenges[currentIndex];
  const completedCount = Object.values(progress).filter(Boolean).length;
  const isLocked = !isSubscribed && currentIndex > 0;

  // Simulate code execution in-browser
  // In production, replace with a real sandboxed execution service (e.g. Piston API)
  const runCode = useCallback(async () => {
    if (!current) return;
    setRunning(true);
    setTab("output");
    setOutput(null);
    setIsCorrect(null);

    await new Promise((r) => setTimeout(r, 600 + Math.random() * 400));

    // Simple keyword-based validation for demo
    // Production: send to /api/run endpoint which calls Piston/Judge0
    const correct = evaluateCode(code, current);
    const simulatedOutput = correct
      ? current.testCases[0]?.expected ?? "✓ Looks good!"
      : "Error: Output doesn't match. Check your code and try again.";

    setOutput(simulatedOutput);
    setIsCorrect(correct);
    setRunning(false);

    if (correct) {
      // Save progress to Supabase
      const newProgress = { ...progress, [current.id]: true };
      setProgress(newProgress);
      await supabase.from("progress").upsert({
        user_id: userId,
        challenge_id: current.id,
        theme_id: theme.id,
        language_id: language.id,
        completed: true,
        completed_at: new Date().toISOString(),
        last_code: code,
        attempts: (initialProgress.find((p) => p.challenge_id === current.id)?.challenge_id ? 1 : 0) + 1,
      });
    }
  }, [code, current, progress, userId, theme.id, language.id, supabase, initialProgress]);

  const goToChallenge = (index: number) => {
    if (index < 0 || index >= challenges.length) return;
    setCurrentIndex(index);
    const challengeProgress = initialProgress.find((p) => p.challenge_id === challenges[index].id);
    setCode(challengeProgress?.last_code ?? challenges[index].starterCode);
    setOutput(null);
    setIsCorrect(null);
    setShowHint(false);
    setShowSolution(false);
    setTab("challenge");
  };

  const resetCode = () => {
    setCode(current.starterCode);
    setOutput(null);
    setIsCorrect(null);
  };

  const themeColors: Record<string, string> = {
    "stranger-things": "text-red-400 border-red-500/40",
    "severance": "text-blue-400 border-blue-500/40",
    "breaking-bad": "text-green-400 border-green-500/40",
  };

  const accentBg: Record<string, string> = {
    "stranger-things": "bg-red-950/30",
    "severance": "bg-blue-950/30",
    "breaking-bad": "bg-green-950/30",
  };

  const themeColor = themeColors[theme.id] ?? "text-brand-accent border-brand-border";
  const themeBg = accentBg[theme.id] ?? "";

  if (!current) return null;

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      {/* Top bar */}
      <header className="border-b border-brand-border bg-brand-surface/90 backdrop-blur-md sticky top-0 z-40">
        <div className="flex items-center h-14 px-4 gap-4">
          <Link href="/dashboard" className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors text-sm">
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Dashboard</span>
          </Link>

          <div className="h-5 w-px bg-brand-border" />

          <div className="flex items-center gap-2">
            <span className="text-lg">{theme.emoji}</span>
            <span className={`text-sm font-semibold ${themeColor.split(" ")[0]}`}>{theme.name}</span>
            <span className="text-slate-600">×</span>
            <span className="text-sm">{language.icon}</span>
            <span className="text-sm font-semibold text-white">{language.name}</span>
          </div>

          <div className="ml-auto flex items-center gap-3">
            {/* Progress pills */}
            <div className="hidden sm:flex gap-1">
              {challenges.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => goToChallenge(i)}
                  title={c.themedTitle}
                  className={`w-6 h-6 rounded-full text-xs flex items-center justify-center transition-all ${
                    i === currentIndex
                      ? "bg-brand-glow text-white scale-110"
                      : progress[c.id]
                      ? "bg-green-600 text-white"
                      : "bg-brand-surface border border-brand-border text-slate-500 hover:border-brand-muted"
                  }`}
                >
                  {progress[c.id] && i !== currentIndex ? "✓" : i + 1}
                </button>
              ))}
            </div>
            <span className="text-xs text-slate-500">{completedCount}/{challenges.length} done</span>
          </div>
        </div>
      </header>

      {/* Main layout */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">

        {/* Left panel — challenge info */}
        <div className={`w-full lg:w-[400px] flex-shrink-0 border-b lg:border-b-0 lg:border-r border-brand-border flex flex-col overflow-y-auto ${themeBg}`}>
          {/* Tab bar */}
          <div className="flex border-b border-brand-border">
            <button
              onClick={() => setTab("challenge")}
              className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-sm font-medium transition-colors ${
                tab === "challenge" ? "text-white border-b-2 border-brand-glow" : "text-slate-500 hover:text-slate-300"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Challenge
            </button>
            <button
              onClick={() => setTab("output")}
              className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-sm font-medium transition-colors ${
                tab === "output" ? "text-white border-b-2 border-brand-glow" : "text-slate-500 hover:text-slate-300"
              }`}
            >
              <Code2 className="w-4 h-4" />
              Output
            </button>
          </div>

          <div className="p-5 flex-1">
            {tab === "challenge" ? (
              <div>
                {/* Challenge header */}
                <div className={`inline-flex items-center gap-1.5 border ${themeColor} rounded-full px-3 py-1 mb-4 text-xs font-semibold bg-brand-surface/50`}>
                  {theme.emoji} {theme.name} · Challenge {currentIndex + 1} of {challenges.length}
                </div>

                <h2 className="text-xl font-bold text-white mb-1">{current.themedTitle}</h2>
                <p className="text-xs text-slate-500 mb-4 uppercase tracking-wider font-medium">{current.concept}</p>

                {/* Narrative */}
                <div className={`rounded-lg p-4 mb-5 border ${themeColor.split(" ")[1]} bg-brand-surface/30`}>
                  <p className="text-slate-300 text-sm leading-relaxed italic">{current.narrative}</p>
                </div>

                {/* Mission */}
                <div className="mb-5">
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">Your mission</p>
                  <p className="text-slate-200 text-sm leading-relaxed whitespace-pre-line">{current.prompt}</p>
                </div>

                {/* Hint */}
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="flex items-center gap-1.5 text-xs text-brand-amber hover:text-amber-300 transition-colors mb-2"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  {showHint ? "Hide hint" : "Show hint"}
                </button>
                {showHint && (
                  <div className="bg-amber-950/20 border border-amber-500/20 rounded-lg p-3 mb-4 text-xs text-slate-300">
                    💡 {current.hint}
                  </div>
                )}

                {/* Solution */}
                <button
                  onClick={() => setShowSolution(!showSolution)}
                  className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showSolution ? "Hide solution" : "Stuck? Show solution"}
                </button>
                {showSolution && (
                  <div className="mt-2 bg-brand-surface border border-brand-border rounded-lg p-3">
                    <p className="text-xs text-slate-500 mb-2 font-mono">solution:</p>
                    <pre className="text-xs text-slate-300 font-mono overflow-x-auto whitespace-pre-wrap">{current.solution}</pre>
                  </div>
                )}
              </div>
            ) : (
              <div className="h-full">
                {/* Output panel */}
                {output === null ? (
                  <div className="flex flex-col items-center justify-center h-48 text-slate-600">
                    <Play className="w-8 h-8 mb-3 opacity-30" />
                    <p className="text-sm">Run your code to see output</p>
                  </div>
                ) : (
                  <div>
                    {/* Status banner */}
                    <div className={`flex items-center gap-2 px-4 py-3 rounded-lg mb-4 ${
                      isCorrect
                        ? "bg-green-950/40 border border-green-500/40"
                        : "bg-red-950/40 border border-red-500/40"
                    }`}>
                      {isCorrect ? (
                        <>
                          <Check className="w-4 h-4 text-green-400" />
                          <span className="text-green-400 font-semibold text-sm">Correct! Great work.</span>
                        </>
                      ) : (
                        <>
                          <X className="w-4 h-4 text-red-400" />
                          <span className="text-red-400 font-semibold text-sm">Not quite. Keep trying!</span>
                        </>
                      )}
                    </div>

                    {/* Output text */}
                    <div className="bg-[#0d0d14] rounded-lg p-4 font-mono text-sm">
                      <p className="text-xs text-slate-500 mb-2">Output:</p>
                      <pre className="text-slate-300 whitespace-pre-wrap">{output}</pre>
                    </div>

                    {/* Next challenge CTA */}
                    {isCorrect && currentIndex < challenges.length - 1 && (
                      isSubscribed ? (
                        <button
                          onClick={() => goToChallenge(currentIndex + 1)}
                          className="btn-primary w-full mt-4 flex items-center justify-center gap-2"
                        >
                          Next challenge
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      ) : (
                        <Link
                          href="/pricing"
                          className="btn-primary w-full mt-4 flex items-center justify-center gap-2"
                        >
                          <Lock className="w-4 h-4" />
                          Unlock all challenges
                        </Link>
                      )
                    )}

                    {isCorrect && currentIndex === challenges.length - 1 && (
                      <div className="mt-4 text-center">
                        <Trophy className="w-10 h-10 text-brand-amber mx-auto mb-2" />
                        <p className="text-white font-bold text-lg">All done!</p>
                        <p className="text-slate-400 text-sm mb-4">You've completed all challenges for this theme + language combo.</p>
                        <Link href="/dashboard" className="btn-primary inline-flex items-center gap-2">
                          Back to Dashboard
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Bottom nav */}
          <div className="border-t border-brand-border px-5 py-3 flex items-center justify-between">
            <button
              onClick={() => goToChallenge(currentIndex - 1)}
              disabled={currentIndex === 0}
              className="flex items-center gap-1 text-sm text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Prev
            </button>
            <span className="text-xs text-slate-600">{currentIndex + 1} / {challenges.length}</span>
            <button
              onClick={() => goToChallenge(currentIndex + 1)}
              disabled={currentIndex === challenges.length - 1}
              className="flex items-center gap-1 text-sm text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right panel — Monaco editor */}
        <div className="flex-1 flex flex-col min-h-[400px] relative">
          {isLocked && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-brand-bg/90 backdrop-blur-sm">
              <Lock className="w-12 h-12 text-brand-glow mb-4" />
              <h3 className="text-white text-xl font-bold mb-2">This challenge is locked</h3>
              <p className="text-slate-400 text-sm mb-6 text-center max-w-xs">
                You've completed the free challenge. Unlock all {challenges.length} challenges with a subscription.
              </p>
              <Link href="/pricing" className="btn-primary flex items-center gap-2">
                See plans
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          )}
          {/* Editor toolbar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-brand-border bg-brand-surface">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="text-xs text-slate-500 font-mono ml-1">
                challenge-{String(currentIndex + 1).padStart(2, "0")}.{language.id === "python" ? "py" : language.id === "javascript" ? "js" : language.id === "java" ? "java" : language.id === "sql" ? "sql" : "go"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={resetCode}
                title="Reset to starter code"
                className="flex items-center gap-1 text-xs text-slate-500 hover:text-white transition-colors px-2 py-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset
              </button>
              <button
                onClick={runCode}
                disabled={running}
                className="flex items-center gap-1.5 bg-brand-glow hover:bg-purple-600 text-white text-sm font-semibold px-4 py-1.5 rounded-lg transition-all disabled:opacity-60"
              >
                {running ? (
                  <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Play className="w-3.5 h-3.5 fill-white" />
                )}
                Run
              </button>
            </div>
          </div>

          {/* Monaco Editor */}
          <div className="flex-1" style={{ minHeight: "300px" }}>
            <MonacoEditor
              language={language.monacoId}
              value={code}
              onChange={(val) => setCode(val ?? "")}
              theme="vs-dark-custom"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Simple client-side code evaluation ─────────────────────────────────────
// Replace with a real sandboxed runner (Piston API, Judge0, etc.) in production

function evaluateCode(code: string, challenge: Challenge): boolean {
  const normalizedCode = code.toLowerCase().replace(/\s+/g, " ");

  switch (challenge.id) {
    case "st-py-01":
      return normalizedCode.includes("eleven") && normalizedCode.includes("11") && normalizedCode.includes("false");
    case "st-py-02":
      return normalizedCode.includes("def letter_position") && normalizedCode.includes("ord");
    case "st-py-03":
      return normalizedCode.includes("for") && normalizedCode.includes("enumerate") && normalizedCode.includes("party");
    case "st-py-04":
      return normalizedCode.includes("def danger_level") && normalizedCode.includes("70") && normalizedCode.includes("30");
    case "st-py-05":
      return normalizedCode.includes("def most_seen") && (normalizedCode.includes("max") || normalizedCode.includes("sightings"));
    case "sv-js-01":
      return normalizedCode.includes("mark") && normalizedCode.includes("s") && (normalizedCode.includes("template") || normalizedCode.includes("`") || normalizedCode.includes("+"));
    case "sv-js-02":
      return normalizedCode.includes("filter") && normalizedCode.includes("50");
    case "sv-js-03":
      return normalizedCode.includes("function iscompliant") && normalizedCode.includes("80");
    case "sv-js-04":
      return normalizedCode.includes("function waffleparty") && (normalizedCode.includes("?") || normalizedCode.includes("if"));
    case "sv-js-05":
      return normalizedCode.includes("function binsum") && normalizedCode.includes("%");
    case "bb-sql-01":
      return normalizedCode.includes("select") && normalizedCode.includes("from products");
    case "bb-sql-02":
      return normalizedCode.includes("where") && normalizedCode.includes("purity") && (normalizedCode.includes(">= 99") || normalizedCode.includes(">99") || normalizedCode.includes(">=99"));
    case "bb-sql-03":
      return normalizedCode.includes("order by") && normalizedCode.includes("desc") && normalizedCode.includes("limit 3");
    case "bb-sql-04":
      return normalizedCode.includes("count(") && normalizedCode.includes("sum(") && normalizedCode.includes("avg(");
    case "bb-sql-05":
      return normalizedCode.includes("group by") && normalizedCode.includes("sum(");
    default:
      return true;
  }
}
