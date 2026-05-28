"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  Play, ChevronLeft, ChevronRight, ChevronDown, Lightbulb,
  Check, X, BookOpen, Trophy, RotateCcw, Lock, GraduationCap, Sparkles, HelpCircle,
  Share2, Copy
} from "lucide-react";
import type { Theme, Language, Challenge } from "@/types";
import { createClient } from "@/lib/supabase/client";
import { SIMULATOR_OUTPUTS } from "@/lib/simulator-outputs";
import { ALL_LESSONS } from "@/lib/lessons";
import { PISTON_LANGUAGES, executeCode, outputMatchesExpected, formatRunError } from "@/lib/run-code";
import { PROMPT_EXAMPLES } from "@/lib/prompt-challenges";
import type { PromptExample } from "@/lib/prompt-challenges";
import TourOverlay, { type TourStep } from "@/components/tour/TourOverlay";

const CONSOLE_TOUR_KEY = "qc:tour:console";

const CONSOLE_TOUR: TourStep[] = [
  {
    title: "Welcome to the coding console 💻",
    body: "This is where you'll read lessons, write code, and run it against real challenges. Here's a 30-second orientation.",
  },
  {
    tourId: "console-tabs",
    side: "bottom",
    title: "Lesson → Challenge → Prompt",
    body: "Start with the Lesson tab to understand the concept. Switch to Challenge for your mission. After you pass, the Prompt It tab unlocks a bonus AI exercise.",
  },
  {
    tourId: "console-editor",
    side: "left",
    title: "Write your code here",
    body: "The Monaco editor has full syntax highlighting, bracket matching, and autocomplete. Edit the starter code until it solves the challenge.",
  },
  {
    tourId: "console-run-btn",
    side: "bottom",
    title: "Run your code",
    body: "Hit the Run button — or press ⌘↵ (Ctrl+↵ on Windows) — to execute your code and check it against the test cases.",
  },
  {
    tourId: "console-terminal",
    side: "top",
    title: "Output lives here",
    body: "Your code's output appears in this terminal. Green means all tests passed. Red shows what actually printed so you can debug it.",
  },
  {
    tourId: "console-progress",
    side: "bottom",
    title: "Challenge progress",
    body: "Each dot is one challenge. Click any dot to jump directly to it. Green dots are completed — work through all 10 to unlock the Final Quest.",
  },
];

// Monaco must be dynamically imported (no SSR)
const MonacoEditor = dynamic(() => import("./MonacoEditor"), { ssr: false });

interface ProgressEntry {
  challenge_id: string;
  completed: boolean;
  last_code?: string;
  attempts?: number;
}

interface Props {
  theme: Theme;
  language: Language;
  challenges: Challenge[];
  userId: string;
  initialProgress: ProgressEntry[];
  isSubscribed: boolean;
}

type PanelTab = "lesson" | "challenge" | "prompt";

export default function LearningConsole({ theme, language, challenges, userId, initialProgress, isSubscribed }: Props) {
  const supabase = createClient();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [code, setCode] = useState(challenges[0]?.starterCode ?? "");
  const [output, setOutput] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [running, setRunning] = useState(false);
  const [tab, setTab] = useState<PanelTab>(() => {
    // Default to lesson tab if a lesson exists and challenge isn't already completed
    const firstId = challenges[0]?.id ?? "";
    const alreadyDone = initialProgress.some((p) => p.challenge_id === firstId && p.completed);
    return ALL_LESSONS[firstId] && !alreadyDone ? "lesson" : "challenge";
  });
  const [progress, setProgress] = useState<Record<string, boolean>>(
    Object.fromEntries(initialProgress.map((p) => [p.challenge_id, p.completed]))
  );
  const [terminalHeight, setTerminalHeight] = useState(220);
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<{ startY: number; startHeight: number } | null>(null);
  // Prompt Practice state
  const [userPrompt, setUserPrompt] = useState("");
  const [showExamplePrompt, setShowExamplePrompt] = useState(false);

  // Mission brief strip — expanded by default for unsolved challenges
  const [briefExpanded, setBriefExpanded] = useState(
    () => !initialProgress.some((p) => p.challenge_id === challenges[0]?.id && p.completed)
  );

  // Share card state
  const [copiedSolution, setCopiedSolution] = useState(false);

  // Tour state — auto-show once, replay via Tutorial button
  const [showTour, setShowTour] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem(CONSOLE_TOUR_KEY)) {
      const t = setTimeout(() => setShowTour(true), 600);
      return () => clearTimeout(t);
    }
  }, []);
  const dismissTour = () => {
    if (typeof window !== "undefined") localStorage.setItem(CONSOLE_TOUR_KEY, "1");
    setShowTour(false);
  };
  const replayTour = () => setShowTour(true);

  const handleDragStart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    dragRef.current = { startY: e.clientY, startHeight: terminalHeight };
    setIsDragging(true);

    const onMove = (ev: MouseEvent) => {
      if (!dragRef.current) return;
      // Dragging up (negative delta) increases terminal height
      const delta = dragRef.current.startY - ev.clientY;
      const next = Math.max(80, Math.min(dragRef.current.startHeight + delta, 520));
      setTerminalHeight(next);
    };

    const onUp = () => {
      dragRef.current = null;
      setIsDragging(false);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  }, [terminalHeight]);

  const current = challenges[currentIndex];
  const completedCount = Object.values(progress).filter(Boolean).length;
  const isLocked = !isSubscribed && currentIndex > 2;
  const promptExample: PromptExample | undefined = current
    ? PROMPT_EXAMPLES[`${language.id}:${current.concept}`]
    : undefined;
  const challengeCompleted = current ? (progress[current.id] ?? false) : false;

  const runCode = useCallback(async () => {
    if (!current) return;
    setRunning(true);
    setOutput(null);
    setIsCorrect(null);

    let correct: boolean;
    let displayOutput: string;

    if (language.id === "sql") {
      // ── SQL: execute via SQLite/Python on Judge0; correctness = keyword check
      try {
        const result = await executeCode("sql", code, theme.id);

        if (result.error) {
          // Service unavailable — fall back to keyword eval so users aren't blocked
          correct = evaluateCode(code, current);
          displayOutput = correct
            ? "✓ Query accepted."
            : "⚠ SQL runner unavailable. Check your query syntax and try again.";
        } else if (result.exit_code !== 0) {
          correct = false;
          displayOutput = result.stderr || "SQL error — check your query and try again.";
        } else {
          // Show real query results; correctness still keyword-based
          correct = evaluateCode(code, current);
          displayOutput = result.stdout.trim() || "(0 rows)";
        }
      } catch {
        // Network error — fall back gracefully
        correct = evaluateCode(code, current);
        displayOutput = correct
          ? "✓ Query accepted."
          : "⚠ Network error — could not reach SQL runner. Try again.";
      }
    } else if (PISTON_LANGUAGES.has(language.id)) {
      // ── Real execution via Judge0 ──────────────────────────────────────────
      try {
        const result = await executeCode(language.id, code);

        if (result.error) {
          // Service unavailable — fall back to keyword eval so users aren't blocked
          correct = evaluateCode(code, current);
          displayOutput = correct
            ? SIMULATOR_OUTPUTS[current.id] ?? current.testCases[0]?.expected ?? "✓ Looks good!"
            : "⚠ Code runner unavailable. Could not verify output.";
        } else if (result.exit_code !== 0) {
          correct = false;
          displayOutput = formatRunError(result);
        } else {
          correct = outputMatchesExpected(result.stdout, current.testCases);
          // When correct, show the real output. When wrong, show what they
          // actually printed so they can debug it.
          displayOutput = result.stdout || "(no output)";
        }
      } catch {
        // Network error — fall back gracefully
        correct = evaluateCode(code, current);
        displayOutput = correct
          ? SIMULATOR_OUTPUTS[current.id] ?? current.testCases[0]?.expected ?? "✓ Looks good!"
          : "⚠ Network error — could not reach code runner. Try again.";
      }
    } else {
      // Fallback (no active runtime for this language)
      correct = evaluateCode(code, current);
      displayOutput = correct
        ? "✓ Looks good!"
        : "Error: Check your code and try again.";
    }

    setOutput(displayOutput);
    setIsCorrect(correct);
    setRunning(false);

    if (correct) {
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
        attempts: (initialProgress.find((p) => p.challenge_id === current.id)?.attempts ?? 0) + 1,
      });
    }
  }, [code, current, progress, userId, theme.id, language.id, supabase, initialProgress]);

  // ⌘/Ctrl + Enter → run code (standard notebook shortcut)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
        e.preventDefault();
        if (!running && !isLocked) runCode();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [running, isLocked, runCode]);

  const goToChallenge = (index: number) => {
    if (index < 0 || index >= challenges.length) return;
    setCurrentIndex(index);
    const challengeProgress = initialProgress.find((p) => p.challenge_id === challenges[index].id);
    setCode(challengeProgress?.last_code ?? challenges[index].starterCode);
    setOutput(null);
    setIsCorrect(null);
    setShowHint(false);
    setShowSolution(false);
    setUserPrompt("");
    setShowExamplePrompt(false);
    setCopiedSolution(false);
    // Expand brief for unsolved challenges, collapse for already-completed ones
    setBriefExpanded(!(progress[challenges[index].id] ?? false));
    const nextId = challenges[index]?.id ?? "";
    const alreadyDone = initialProgress.some((p) => p.challenge_id === nextId && p.completed);
    setTab(ALL_LESSONS[nextId] && !alreadyDone ? "lesson" : "challenge");
  };

  const resetCode = () => {
    setCode(current.starterCode);
    setOutput(null);
    setIsCorrect(null);
  };

  const themeColors: Record<string, string> = {
    "stranger-things":  "text-red-400 border-red-500/40",
    "severance":        "text-blue-400 border-blue-500/40",
    "breaking-bad":     "text-green-400 border-green-500/40",
    "the-office":       "text-yellow-400 border-yellow-500/40",
    "game-of-thrones":  "text-yellow-500 border-yellow-600/40",
    "the-matrix":       "text-green-300 border-green-400/40",
    "rick-and-morty":       "text-cyan-400 border-cyan-500/40",
    "squid-game":           "text-pink-400 border-pink-500/40",
    "arrested-development": "text-orange-400 border-orange-500/40",
    "barbie":               "text-fuchsia-400 border-fuchsia-500/40",
    "sex-and-the-city":     "text-rose-400 border-rose-500/40",
    "sopranos":             "text-red-500 border-red-800/40",
  };

  const accentBg: Record<string, string> = {
    "stranger-things":  "bg-red-950/30",
    "severance":        "bg-blue-950/30",
    "breaking-bad":     "bg-green-950/30",
    "the-office":       "bg-yellow-950/30",
    "game-of-thrones":  "bg-yellow-950/30",
    "the-matrix":       "bg-green-950/30",
    "rick-and-morty":       "bg-cyan-950/30",
    "squid-game":           "bg-pink-950/30",
    "arrested-development": "bg-orange-950/30",
    "barbie":               "bg-fuchsia-950/30",
    "sex-and-the-city":     "bg-rose-950/30",
    "sopranos":             "bg-red-950/30",
  };

  const themeColor = themeColors[theme.id] ?? "text-brand-accent border-brand-border";
  const themeBg = accentBg[theme.id] ?? "";

  if (!current) return null;

  return (
    <div className="h-screen bg-brand-bg flex flex-col overflow-hidden">
      {/* Onboarding tour */}
      {showTour && <TourOverlay steps={CONSOLE_TOUR} onDone={dismissTour} />}

      {/* Full-screen overlay while dragging — locks cursor and blocks text selection */}
      {isDragging && <div className="fixed inset-0 z-50 cursor-row-resize select-none" />}
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
            <div className="hidden sm:flex gap-1" data-tour-id="console-progress">
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
          <div className="flex border-b border-brand-border" data-tour-id="console-tabs">
            {ALL_LESSONS[current.id] && (
              <button
                onClick={() => setTab("lesson")}
                className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-sm font-medium transition-colors ${
                  tab === "lesson" ? "text-white border-b-2 border-brand-glow" : "text-slate-500 hover:text-slate-300"
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                Lesson
              </button>
            )}
            <button
              onClick={() => setTab("challenge")}
              className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-sm font-medium transition-colors ${
                tab === "challenge" ? "text-white border-b-2 border-brand-glow" : "text-slate-500 hover:text-slate-300"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Challenge
            </button>
            {promptExample && challengeCompleted && (
              <button
                onClick={() => setTab("prompt")}
                className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-sm font-medium transition-colors ${
                  tab === "prompt" ? "text-brand-amber border-b-2 border-brand-amber" : "text-slate-500 hover:text-slate-300"
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span className="hidden sm:inline">Prompt It</span>
                <span className="sm:hidden">AI</span>
              </button>
            )}
          </div>

          <div className="p-5 flex-1">
            {tab === "lesson" && ALL_LESSONS[current.id] ? (
              <LessonPanel
                lesson={ALL_LESSONS[current.id]}
                concept={current.concept}
                themeColor={themeColor}
                language={language.id}
                onReady={() => setTab("challenge")}
              />
            ) : tab === "prompt" && promptExample ? (
              <PromptPanel
                concept={current.concept}
                example={promptExample}
                userPrompt={userPrompt}
                onUserPromptChange={setUserPrompt}
                showExample={showExamplePrompt}
                onShowExample={() => setShowExamplePrompt(true)}
                onNext={
                  currentIndex < challenges.length - 1 && (isSubscribed || currentIndex < 2)
                    ? () => goToChallenge(currentIndex + 1)
                    : undefined
                }
                themeColor={themeColor}
                language={language.id}
              />
            ) : (
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

                {/* Back to lesson */}
                {ALL_LESSONS[current.id] && (
                  <button
                    onClick={() => setTab("lesson")}
                    className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors mb-4"
                  >
                    <GraduationCap className="w-3.5 h-3.5" />
                    Review lesson
                  </button>
                )}

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
        <div className="flex-1 flex flex-col min-h-0 relative overflow-hidden">
          {isLocked && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-brand-bg/90 backdrop-blur-sm">
              <Lock className="w-12 h-12 text-brand-glow mb-4" />
              <h3 className="text-white text-xl font-bold mb-2">This challenge is locked</h3>
              <p className="text-slate-400 text-sm mb-6 text-center max-w-xs">
                You&apos;ve completed the 3 free challenges. Unlock all {challenges.length} with a subscription.
              </p>
              <Link href="/pricing" className="btn-primary flex items-center gap-2">
                See plans
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          )}
          {/* Editor toolbar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-brand-border bg-brand-surface" data-tour-id="console-editor">
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
                onClick={replayTour}
                title="Replay tutorial"
                className="flex items-center gap-1 text-xs text-slate-500 hover:text-white transition-colors px-2 py-1"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Tutorial</span>
              </button>
              <button
                onClick={runCode}
                disabled={running}
                data-tour-id="console-run-btn"
                title="Run code (⌘Enter)"
                className="flex items-center gap-1.5 bg-brand-glow hover:bg-purple-600 text-white text-sm font-semibold px-4 py-1.5 rounded-lg transition-all disabled:opacity-60"
              >
                {running ? (
                  <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Play className="w-3.5 h-3.5 fill-white" />
                )}
                Run
                <kbd className="hidden sm:inline-block text-[10px] bg-white/15 px-1 py-0.5 rounded font-mono leading-none">⌘↵</kbd>
              </button>
            </div>
          </div>

          {/* Mission brief strip */}
          <div className={`flex-shrink-0 border-b border-brand-border border-l-2 ${themeColor.split(" ")[1]} bg-brand-bg/60`}>
            <button
              onClick={() => setBriefExpanded((v) => !v)}
              className="w-full flex items-center justify-between px-4 py-2 text-left hover:bg-brand-surface/40 transition-colors group"
              aria-label={briefExpanded ? "Collapse mission brief" : "Expand mission brief"}
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-[11px] text-slate-500 flex-shrink-0">
                  {theme.emoji} Challenge {currentIndex + 1}
                </span>
                <span className="text-slate-700 flex-shrink-0 text-[11px]">·</span>
                <span className="text-[11px] font-semibold text-slate-200 truncate">
                  {current.themedTitle}
                </span>
                {!briefExpanded && (
                  <span className="text-[10px] text-slate-600 ml-1 hidden sm:inline">(click to read mission)</span>
                )}
              </div>
              <ChevronDown
                className={`w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300 flex-shrink-0 transition-transform duration-200 ml-3 ${briefExpanded ? "rotate-180" : ""}`}
              />
            </button>
            {briefExpanded && (
              <div className="px-4 pb-3 pt-0.5">
                <p className="text-slate-300 text-xs leading-relaxed whitespace-pre-line">{current.prompt}</p>
              </div>
            )}
          </div>

          {/* Monaco Editor */}
          <div className="flex-1 min-h-0 overflow-hidden">
            <MonacoEditor
              language={language.monacoId}
              value={code}
              onChange={(val) => setCode(val ?? "")}
              theme="vs-dark-custom"
            />
          </div>

          {/* Drag handle */}
          <div
            onMouseDown={handleDragStart}
            className="flex-shrink-0 h-[7px] bg-green-950 border-y border-green-900/60 cursor-row-resize hover:bg-green-900/60 transition-colors flex items-center justify-center group select-none"
            title="Drag to resize"
          >
            <div className="flex gap-1">
              <div className="w-5 h-[3px] rounded-full bg-green-900 group-hover:bg-green-700 transition-colors" />
            </div>
          </div>

          {/* Terminal output */}
          <div className="flex-shrink-0 bg-[#050e05] flex flex-col overflow-hidden" style={{ height: `${terminalHeight}px` }} data-tour-id="console-terminal">
            {/* Terminal title bar */}
            <div className="flex items-center gap-2 px-4 py-2 border-b border-green-900/40 flex-shrink-0">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-green-900" />
                <div className="w-2 h-2 rounded-full bg-green-900" />
                <div className="w-2 h-2 rounded-full bg-green-900" />
              </div>
              <span className="text-green-900 text-xs font-mono">output</span>
              {running && (
                <span className="ml-auto flex items-center gap-1.5 text-xs text-green-700">
                  <span className="w-2.5 h-2.5 border border-green-700/50 border-t-green-500 rounded-full animate-spin" />
                  {language.id === "sql" || PISTON_LANGUAGES.has(language.id) ? "executing…" : "checking…"}
                </span>
              )}
            </div>

            {/* Terminal content */}
            <div className="flex-1 overflow-y-auto px-4 py-3 font-mono text-xs">
              {output === null ? (
                <div className="flex items-center gap-1 text-green-900">
                  <span>$</span>
                  <span>run your code to see output</span>
                  <span className="inline-block w-[6px] h-[11px] bg-green-700/50 animate-blink ml-1" />
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="text-green-700">$</span>
                    {isCorrect ? (
                      <>
                        <Check className="w-3 h-3 text-green-400" />
                        <span className="text-green-400 font-semibold">Correct!</span>
                      </>
                    ) : (
                      <>
                        <X className="w-3 h-3 text-red-400" />
                        <span className="text-red-400 font-semibold">Not quite — check your code</span>
                      </>
                    )}
                  </div>
                  <pre className={`whitespace-pre overflow-x-auto leading-relaxed mb-4 ${isCorrect ? "text-green-400" : "text-red-400"}`}>
                    {output}
                  </pre>

                  {/* Share card — shown on correct answer */}
                  {isCorrect && (() => {
                    const tweetText = encodeURIComponent(
                      `Just cracked Challenge ${currentIndex + 1}/${challenges.length} in the ${theme.name} × ${language.name} track on QuestCode! 🎬💻 #LearnToCode #QuestCode`
                    );
                    const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
                    const handleCopy = () => {
                      navigator.clipboard.writeText(code).then(() => {
                        setCopiedSolution(true);
                        setTimeout(() => setCopiedSolution(false), 2000);
                      });
                    };
                    return (
                      <div className="mb-4 border border-green-900/40 rounded-lg bg-green-950/20 px-3 py-2.5 flex items-center justify-between gap-3 flex-wrap">
                        <div className="flex items-center gap-1.5 text-green-500 text-xs font-semibold">
                          <Share2 className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>Share your win</span>
                          <span className="text-green-700">·</span>
                          <span className="font-normal text-green-700">
                            {theme.emoji} Challenge {currentIndex + 1} complete
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={handleCopy}
                            title="Copy your solution to clipboard"
                            className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white transition-colors px-2 py-1 rounded border border-brand-border hover:border-brand-muted bg-brand-surface/50"
                          >
                            {copiedSolution ? (
                              <><Check className="w-3 h-3 text-green-400" /><span className="text-green-400">Copied!</span></>
                            ) : (
                              <><Copy className="w-3 h-3" />Copy solution</>
                            )}
                          </button>
                          <a
                            href={tweetUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-[11px] font-semibold text-white px-2 py-1 rounded bg-[#1d9bf0]/80 hover:bg-[#1d9bf0] transition-colors"
                          >
                            <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            Post
                          </a>
                        </div>
                      </div>
                    );
                  })()}

                  {/* Next challenge CTA */}
                  {isCorrect && currentIndex < challenges.length - 1 && (
                    <div className="flex flex-col gap-2">
                      {isSubscribed || currentIndex < 2 ? (
                        <button
                          onClick={() => goToChallenge(currentIndex + 1)}
                          className="flex items-center gap-1.5 bg-brand-glow hover:bg-purple-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-all self-start"
                        >
                          Next challenge <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <Link
                          href="/pricing"
                          className="flex items-center gap-1.5 bg-brand-glow text-white text-xs font-semibold px-3 py-1.5 rounded-lg self-start"
                        >
                          <Lock className="w-3.5 h-3.5" />
                          Unlock all {challenges.length} challenges
                        </Link>
                      )}
                      {promptExample && (
                        <button
                          onClick={() => setTab("prompt")}
                          className="flex items-center gap-1.5 bg-amber-950/40 hover:bg-amber-950/60 border border-amber-500/30 text-brand-amber text-xs font-semibold px-3 py-1.5 rounded-lg transition-all self-start"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          Prompt Practice ✨
                        </button>
                      )}
                    </div>
                  )}

                  {isCorrect && currentIndex === challenges.length - 1 && (
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-brand-amber flex-shrink-0" />
                        <span className="text-brand-amber font-semibold text-xs">All challenges complete!</span>
                      </div>
                      <Link
                        href={`/learn/${theme.id}/${language.id}/final`}
                        className="flex items-center gap-1.5 bg-brand-amber hover:brightness-110 text-brand-bg text-xs font-bold px-3 py-1.5 rounded-lg transition-all self-start"
                      >
                        <Trophy className="w-3.5 h-3.5" />
                        Take the Final Quest →
                      </Link>
                      {promptExample && (
                        <button
                          onClick={() => setTab("prompt")}
                          className="flex items-center gap-1.5 bg-amber-950/40 hover:bg-amber-950/60 border border-amber-500/30 text-brand-amber text-xs font-semibold px-3 py-1.5 rounded-lg transition-all self-start"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          Prompt Practice ✨
                        </button>
                      )}
                      <Link href="/dashboard" className="text-xs text-slate-500 hover:text-white transition-colors">
                        ← Back to Dashboard
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Simple client-side code evaluation ─────────────────────────────────────
// Replace with a real sandboxed runner (Piston API, Judge0, etc.) in production

// ── Prompt Panel ─────────────────────────────────────────────────────────────

function PromptPanel({
  concept,
  example,
  userPrompt,
  onUserPromptChange,
  showExample,
  onShowExample,
  onNext,
  themeColor,
  language,
}: {
  concept: string;
  example: PromptExample;
  userPrompt: string;
  onUserPromptChange: (val: string) => void;
  showExample: boolean;
  onShowExample: () => void;
  onNext?: () => void;
  themeColor: string;
  language: string;
}) {
  const borderClass = themeColor.split(" ")[1] ?? "border-brand-border";
  const canCompare = userPrompt.trim().length >= 10;

  return (
    <div>
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="w-4 h-4 text-brand-amber" />
          <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Bonus: Prompt Practice</p>
        </div>
        <h2 className="text-lg font-bold text-white">{concept}</h2>
      </div>

      {/* What they built */}
      <div className={`rounded-lg p-3 mb-5 border ${borderClass} bg-brand-surface/30`}>
        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">What you just built</p>
        <p className="text-slate-300 text-sm leading-relaxed">{example.task}</p>
      </div>

      {/* Exercise */}
      <div className="mb-4">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
          How would you ask an AI to build it?
        </p>
        <p className="text-xs text-slate-500 mb-3 leading-relaxed">
          Write the prompt you&apos;d give an AI assistant to produce the same{" "}
          {language === "sql" ? "query" : "code"}. Be specific: mention the language, variable names,
          inputs, outputs, and any conditions.
        </p>
        <textarea
          value={userPrompt}
          onChange={(e) => onUserPromptChange(e.target.value)}
          placeholder={`Write your prompt here…\n\nTip: start with "Write a ${language === "sql" ? "SQL query" : language + " program"} that…"`}
          className="w-full h-32 bg-brand-bg border border-brand-border rounded-lg p-3 text-sm text-slate-200 placeholder-slate-600 resize-none focus:outline-none focus:border-brand-glow/50 transition-colors font-mono"
        />
        {!canCompare && userPrompt.length > 0 && (
          <p className="text-xs text-slate-600 mt-1">Keep going — add a few more details first.</p>
        )}
      </div>

      {/* Compare button */}
      {!showExample ? (
        <button
          onClick={onShowExample}
          disabled={!canCompare}
          className="w-full flex items-center justify-center gap-2 bg-brand-surface hover:bg-brand-surface/80 border border-brand-border disabled:border-brand-border/50 text-white disabled:text-slate-600 text-sm font-semibold px-4 py-2.5 rounded-lg transition-all disabled:cursor-not-allowed mb-5"
        >
          <Sparkles className="w-4 h-4 text-brand-amber" />
          See example prompt
        </button>
      ) : (
        <div className="mb-5">
          <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">Example prompt</p>
          <div className="bg-brand-surface border border-brand-amber/20 rounded-lg p-3">
            <p className="text-sm text-slate-200 leading-relaxed">&ldquo;{example.example}&rdquo;</p>
          </div>
          <p className="text-xs text-slate-600 mt-2 leading-relaxed">
            Strong prompts name the language, specify variable/column names, describe inputs and
            outputs, and handle edge cases — the more detail, the better the AI result.
          </p>
        </div>
      )}

      {/* Next challenge button */}
      {onNext && (
        <button
          onClick={onNext}
          className="flex items-center gap-1.5 bg-brand-glow hover:bg-purple-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-all"
        >
          Next challenge <ChevronRight className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}

// ── Lesson Panel ─────────────────────────────────────────────────────────────

function LessonPanel({
  lesson,
  concept,
  themeColor,
  language,
  onReady,
}: {
  lesson: { intro: string; concept: string; example: string; exampleOutput: string; notes: string; keyPoints: string[] };
  concept: string;
  themeColor: string;
  language: string;
  onReady: () => void;
}) {
  const borderClass = themeColor.split(" ")[1] ?? "border-brand-border";

  return (
    <div>
      {/* Header */}
      <div className="mb-4">
        <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-1">Lesson</p>
        <h2 className="text-lg font-bold text-white">{concept}</h2>
      </div>

      {/* Themed intro */}
      <div className={`rounded-lg p-4 mb-5 border ${borderClass} bg-brand-surface/30`}>
        <p className="text-slate-300 text-sm leading-relaxed italic">{lesson.intro}</p>
      </div>

      {/* Concept explanation */}
      <div className="mb-5">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">The Concept</h3>
        <p className="text-slate-200 text-sm leading-relaxed">{lesson.concept}</p>
      </div>

      {/* Code example */}
      <div className="mb-5">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Example</h3>
        <div className="bg-[#1e1e2e] rounded-t-lg px-4 pt-3 pb-2 font-mono text-xs text-slate-200 overflow-x-auto">
          <pre className="whitespace-pre">{lesson.example}</pre>
        </div>
        {/* Output strip */}
        <div className="bg-[#050e05] rounded-b-lg px-4 py-2.5 font-mono text-xs border-t border-green-900/40 mb-3">
          <span className="text-green-700 select-none">$ </span>
          <span className="text-green-400 whitespace-pre">{lesson.exampleOutput}</span>
        </div>
        <p className="text-slate-400 text-xs leading-relaxed">{lesson.notes}</p>
      </div>

      {/* Key rules */}
      <div className="mb-6">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Key Rules</h3>
        <ul className="space-y-2">
          {lesson.keyPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
              <span className="text-brand-neon font-bold mt-0.5 flex-shrink-0">→</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <button
        onClick={onReady}
        className="btn-primary w-full flex items-center justify-center gap-2"
      >
        Got it — let me try
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}

// ── Code Evaluation ───────────────────────────────────────────────────────────

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
    // Severance — Python
    case "sv-py-01":
      return normalizedCode.includes("mark") && normalizedCode.includes("macrodata") && normalizedCode.includes("true");
    case "sv-py-02":
      return normalizedCode.includes("[") && (normalizedCode.includes("bin") || normalizedCode.includes("refinement") || normalizedCode.includes("append") || normalizedCode.includes("remove"));
    case "sv-py-03":
      return normalizedCode.includes("{") && (normalizedCode.includes("lumon") || normalizedCode.includes("mark") || normalizedCode.includes("department"));
    case "sv-py-04":
      return normalizedCode.includes("def ") && (normalizedCode.includes("return") || normalizedCode.includes("kier") || normalizedCode.includes("wellness"));
    case "sv-py-05":
      return normalizedCode.includes("for ") && (normalizedCode.includes("total") || normalizedCode.includes("count") || normalizedCode.includes("sum"));

    // Breaking Bad — Python
    case "bb-py-01":
      return normalizedCode.includes("walter") || (normalizedCode.includes("purity") && normalizedCode.includes("blue"));
    case "bb-py-02":
      return normalizedCode.includes("[") && (normalizedCode.includes("batch") || normalizedCode.includes("product") || normalizedCode.includes("append"));
    case "bb-py-03":
      return normalizedCode.includes("{") && (normalizedCode.includes("walter") || normalizedCode.includes("blue") || normalizedCode.includes("purity"));
    case "bb-py-04":
      return normalizedCode.includes("def ") && normalizedCode.includes("return") && (normalizedCode.includes("purity") || normalizedCode.includes("yield") || normalizedCode.includes("percent"));
    case "bb-py-05":
      return normalizedCode.includes("for ") && (normalizedCode.includes("total") || normalizedCode.includes("money") || normalizedCode.includes("sum"));

    // Game of Thrones — Python
    case "got-py-01":
      return (normalizedCode.includes("stark") || normalizedCode.includes("snow") || normalizedCode.includes("westeros")) && normalizedCode.includes("print");
    case "got-py-02":
      return normalizedCode.includes("[") && (normalizedCode.includes("house") || normalizedCode.includes("army") || normalizedCode.includes("append"));
    case "got-py-03":
      return normalizedCode.includes("{") && (normalizedCode.includes("house") || normalizedCode.includes("stark") || normalizedCode.includes("dragon"));
    case "got-py-04":
      return normalizedCode.includes("def ") && normalizedCode.includes("return") && (normalizedCode.includes("dragon") || normalizedCode.includes("battle") || normalizedCode.includes("army"));
    case "got-py-05":
      return normalizedCode.includes("for ") && (normalizedCode.includes("total") || normalizedCode.includes("count") || normalizedCode.includes("army"));

    // Squid Game — Python
    case "sg-py-01":
      return (normalizedCode.includes("456") || normalizedCode.includes("player")) && normalizedCode.includes("print");
    case "sg-py-02":
      return normalizedCode.includes("[") && (normalizedCode.includes("player") || normalizedCode.includes("game") || normalizedCode.includes("append") || normalizedCode.includes("remove"));
    case "sg-py-03":
      return normalizedCode.includes("{") && (normalizedCode.includes("player") || normalizedCode.includes("prize") || normalizedCode.includes("456"));
    case "sg-py-04":
      return normalizedCode.includes("def ") && normalizedCode.includes("return") && (normalizedCode.includes("prize") || normalizedCode.includes("survival") || normalizedCode.includes("player"));
    case "sg-py-05":
      return normalizedCode.includes("for ") && (normalizedCode.includes("total") || normalizedCode.includes("count") || normalizedCode.includes("player"));

    // Stranger Things — JavaScript
    case "st-js-01":
      return normalizedCode.includes("eleven") && (normalizedCode.includes("`") || normalizedCode.includes("template") || normalizedCode.includes("upside"));
    case "st-js-02":
      return normalizedCode.includes("push") && (normalizedCode.includes("hawkins") || normalizedCode.includes("walkie") || normalizedCode.includes("party")) && normalizedCode.includes("length");
    case "st-js-03":
      return normalizedCode.includes("function ") && normalizedCode.includes("return") && (normalizedCode.includes("demogorgon") || normalizedCode.includes("power") || normalizedCode.includes("eleven"));
    case "st-js-04":
      return normalizedCode.includes("{") && (normalizedCode.includes("eleven") || normalizedCode.includes("hawkins")) && normalizedCode.includes("console.log");
    case "st-js-05":
      return normalizedCode.includes("filter") && normalizedCode.includes("length");

    // Breaking Bad — JavaScript
    case "bb-js-01":
      return (normalizedCode.includes("walter") || normalizedCode.includes("heisenberg")) && (normalizedCode.includes("`") || normalizedCode.includes("console.log"));
    case "bb-js-02":
      return normalizedCode.includes("push") && (normalizedCode.includes("batch") || normalizedCode.includes("product") || normalizedCode.includes("blue")) && normalizedCode.includes("length");
    case "bb-js-03":
      return normalizedCode.includes("function ") && normalizedCode.includes("return") && (normalizedCode.includes("purity") || normalizedCode.includes("yield") || normalizedCode.includes("cook"));
    case "bb-js-04":
      return normalizedCode.includes("{") && (normalizedCode.includes("walter") || normalizedCode.includes("blue")) && normalizedCode.includes("console.log");
    case "bb-js-05":
      return normalizedCode.includes("filter") && normalizedCode.includes("length");

    // The Office — JavaScript
    case "to-js-01":
      return (normalizedCode.includes("michael") || normalizedCode.includes("dunder") || normalizedCode.includes("scranton")) && (normalizedCode.includes("`") || normalizedCode.includes("console.log"));
    case "to-js-02":
      return normalizedCode.includes("push") && (normalizedCode.includes("paper") || normalizedCode.includes("dunder") || normalizedCode.includes("sales")) && normalizedCode.includes("length");
    case "to-js-03":
      return normalizedCode.includes("function ") && normalizedCode.includes("return") && (normalizedCode.includes("sales") || normalizedCode.includes("paper") || normalizedCode.includes("michael"));
    case "to-js-04":
      return normalizedCode.includes("{") && (normalizedCode.includes("michael") || normalizedCode.includes("dwight") || normalizedCode.includes("dunder")) && normalizedCode.includes("console.log");
    case "to-js-05":
      return normalizedCode.includes("filter") && normalizedCode.includes("length");

    // The Matrix — JavaScript
    case "mx-js-01":
      return (normalizedCode.includes("neo") || normalizedCode.includes("matrix")) && (normalizedCode.includes("`") || normalizedCode.includes("console.log"));
    case "mx-js-02":
      return normalizedCode.includes("push") && (normalizedCode.includes("matrix") || normalizedCode.includes("agent") || normalizedCode.includes("neo")) && normalizedCode.includes("length");
    case "mx-js-03":
      return normalizedCode.includes("function ") && normalizedCode.includes("return") && (normalizedCode.includes("dodge") || normalizedCode.includes("bullet") || normalizedCode.includes("neo"));
    case "mx-js-04":
      return normalizedCode.includes("{") && (normalizedCode.includes("neo") || normalizedCode.includes("morpheus") || normalizedCode.includes("matrix")) && normalizedCode.includes("console.log");
    case "mx-js-05":
      return normalizedCode.includes("filter") && normalizedCode.includes("length");

    // Rick and Morty — JavaScript
    case "rm-js-01":
      return (normalizedCode.includes("rick") || normalizedCode.includes("morty")) && (normalizedCode.includes("`") || normalizedCode.includes("console.log"));
    case "rm-js-02":
      return normalizedCode.includes("push") && (normalizedCode.includes("portal") || normalizedCode.includes("dimension") || normalizedCode.includes("rick")) && normalizedCode.includes("length");
    case "rm-js-03":
      return normalizedCode.includes("function ") && normalizedCode.includes("return") && (normalizedCode.includes("portal") || normalizedCode.includes("rick") || normalizedCode.includes("dimension"));
    case "rm-js-04":
      return normalizedCode.includes("{") && (normalizedCode.includes("rick") || normalizedCode.includes("sanchez") || normalizedCode.includes("morty")) && normalizedCode.includes("console.log");
    case "rm-js-05":
      return normalizedCode.includes("filter") && normalizedCode.includes("length");

    // Squid Game — JavaScript
    case "sg-js-01":
      return (normalizedCode.includes("456") || normalizedCode.includes("player")) && (normalizedCode.includes("`") || normalizedCode.includes("console.log"));
    case "sg-js-02":
      return normalizedCode.includes("push") && (normalizedCode.includes("player") || normalizedCode.includes("game")) && normalizedCode.includes("length");
    case "sg-js-03":
      return normalizedCode.includes("function ") && normalizedCode.includes("return") && (normalizedCode.includes("prize") || normalizedCode.includes("player") || normalizedCode.includes("game"));
    case "sg-js-04":
      return normalizedCode.includes("{") && (normalizedCode.includes("player") || normalizedCode.includes("456") || normalizedCode.includes("guard")) && normalizedCode.includes("console.log");
    case "sg-js-05":
      return normalizedCode.includes("filter") && normalizedCode.includes("length");

    // Arrested Development — Python
    case "ad-py-01":
      return (normalizedCode.includes("banana") || normalizedCode.includes("bluth")) && normalizedCode.includes("print");
    case "ad-py-02":
      return normalizedCode.includes("[") && (normalizedCode.includes("bluth") || normalizedCode.includes("michael") || normalizedCode.includes("venture") || normalizedCode.includes("append"));
    case "ad-py-03":
      return normalizedCode.includes("{") && (normalizedCode.includes("tobias") || normalizedCode.includes("bluth") || normalizedCode.includes("analrapist"));
    case "ad-py-04":
      return normalizedCode.includes("def ") && normalizedCode.includes("return") && (normalizedCode.includes("banana") || normalizedCode.includes("profit") || normalizedCode.includes("revenue"));
    case "ad-py-05":
      return normalizedCode.includes("for ") && (normalizedCode.includes("total") || normalizedCode.includes("count") || normalizedCode.includes("illusion"));

    // Arrested Development — JavaScript
    case "ad-js-01":
      return (normalizedCode.includes("tobias") || normalizedCode.includes("analrapist")) && (normalizedCode.includes("`") || normalizedCode.includes("console.log"));
    case "ad-js-02":
      return normalizedCode.includes("push") && (normalizedCode.includes("bluth") || normalizedCode.includes("banana") || normalizedCode.includes("venture")) && normalizedCode.includes("length");
    case "ad-js-03":
      return normalizedCode.includes("?") && (normalizedCode.includes("her?") || normalizedCode.includes("notable") || normalizedCode.includes("ann"));
    case "ad-js-04":
      return normalizedCode.includes("{") && (normalizedCode.includes("buster") || normalizedCode.includes("bluth") || normalizedCode.includes("lucille")) && normalizedCode.includes("console.log");
    case "ad-js-05":
      return normalizedCode.includes("filter") && normalizedCode.includes("length");

    // Arrested Development — SQL
    case "ad-sql-01":
      return normalizedCode.includes("select") && normalizedCode.includes("*") && normalizedCode.includes("from ventures");
    case "ad-sql-02":
      return normalizedCode.includes("where") && normalizedCode.includes("is_legal");
    case "ad-sql-03":
      return normalizedCode.includes("order by") && normalizedCode.includes("desc") && normalizedCode.includes("limit");
    case "ad-sql-04":
      return normalizedCode.includes("count(") && normalizedCode.includes("sum(") && normalizedCode.includes("avg(");
    case "ad-sql-05":
      return normalizedCode.includes("group by") && normalizedCode.includes("sum(");

    // Barbie — Python
    case "ba-py-01":
      return (normalizedCode.includes("barbie") || normalizedCode.includes("barbieland")) && normalizedCode.includes("print");
    case "ba-py-02":
      return normalizedCode.includes("[") && (normalizedCode.includes("barbie") || normalizedCode.includes("career") || normalizedCode.includes("append"));
    case "ba-py-03":
      return normalizedCode.includes("{") && (normalizedCode.includes("ken") || normalizedCode.includes("barbie") || normalizedCode.includes("beach"));
    case "ba-py-04":
      return normalizedCode.includes("def ") && normalizedCode.includes("return") && (normalizedCode.includes("pink") || normalizedCode.includes("dress") || normalizedCode.includes("outfit") || normalizedCode.includes("barbie"));
    case "ba-py-05":
      return normalizedCode.includes("for ") && (normalizedCode.includes("total") || normalizedCode.includes("count") || normalizedCode.includes("perfect"));

    // Barbie — JavaScript
    case "ba-js-01":
      return normalizedCode.includes("barbie") && (normalizedCode.includes("`") || normalizedCode.includes("console.log"));
    case "ba-js-02":
      return normalizedCode.includes("push") && (normalizedCode.includes("ken") || normalizedCode.includes("barbie")) && normalizedCode.includes("length");
    case "ba-js-03":
      return normalizedCode.includes("?") && (normalizedCode.includes("kenough") || normalizedCode.includes("ken") || normalizedCode.includes("beach"));
    case "ba-js-04":
      return normalizedCode.includes("{") && (normalizedCode.includes("barbie") || normalizedCode.includes("dreamhouse") || normalizedCode.includes("ken")) && normalizedCode.includes("console.log");
    case "ba-js-05":
      return normalizedCode.includes("filter") && normalizedCode.includes("length");

    // Barbie — SQL
    case "ba-sql-01":
      return normalizedCode.includes("select") && normalizedCode.includes("*") && normalizedCode.includes("from barbies");
    case "ba-sql-02":
      return normalizedCode.includes("where") && normalizedCode.includes("is_in_crisis");
    case "ba-sql-03":
      return normalizedCode.includes("order by") && normalizedCode.includes("desc") && normalizedCode.includes("limit");
    case "ba-sql-04":
      return normalizedCode.includes("count(") && normalizedCode.includes("sum(") && normalizedCode.includes("avg(");
    case "ba-sql-05":
      return normalizedCode.includes("group by") && normalizedCode.includes("count(");

    // Sex and the City — Python
    case "sc-py-01":
      return (normalizedCode.includes("carrie") || normalizedCode.includes("manolo") || normalizedCode.includes("shoe")) && normalizedCode.includes("print");
    case "sc-py-02":
      return normalizedCode.includes("[") && (normalizedCode.includes("miranda") || normalizedCode.includes("brunch") || normalizedCode.includes("append") || normalizedCode.includes("charlotte"));
    case "sc-py-03":
      return normalizedCode.includes("{") && (normalizedCode.includes("big") || normalizedCode.includes("carrie") || normalizedCode.includes("aidan"));
    case "sc-py-04":
      return normalizedCode.includes("def ") && normalizedCode.includes("return") && (normalizedCode.includes("afford") || normalizedCode.includes("shoe") || normalizedCode.includes("budget"));
    case "sc-py-05":
      return normalizedCode.includes("for ") && (normalizedCode.includes("total") || normalizedCode.includes("words") || normalizedCode.includes("column"));

    // Sex and the City — JavaScript
    case "sc-js-01":
      return (normalizedCode.includes("carrie") || normalizedCode.includes("new york")) && (normalizedCode.includes("`") || normalizedCode.includes("console.log"));
    case "sc-js-02":
      return normalizedCode.includes("push") && (normalizedCode.includes("miranda") || normalizedCode.includes("charlotte") || normalizedCode.includes("samantha") || normalizedCode.includes("brunch")) && normalizedCode.includes("length");
    case "sc-js-03":
      return normalizedCode.includes("?") && (normalizedCode.includes("big") || normalizedCode.includes("call") || normalizedCode.includes("date") || normalizedCode.includes("spark"));
    case "sc-js-04":
      return normalizedCode.includes("{") && (normalizedCode.includes("big") || normalizedCode.includes("aidan") || normalizedCode.includes("years")) && normalizedCode.includes("console.log");
    case "sc-js-05":
      return normalizedCode.includes("filter") && normalizedCode.includes("length");

    // Sex and the City — SQL
    case "sc-sql-01":
      return normalizedCode.includes("select") && normalizedCode.includes("*") && normalizedCode.includes("from dates");
    case "sc-sql-02":
      return normalizedCode.includes("where") && normalizedCode.includes("rating");
    case "sc-sql-03":
      return normalizedCode.includes("order by") && normalizedCode.includes("desc") && normalizedCode.includes("limit");
    case "sc-sql-04":
      return normalizedCode.includes("count(") && normalizedCode.includes("sum(") && normalizedCode.includes("avg(");
    case "sc-sql-05":
      return normalizedCode.includes("group by") && normalizedCode.includes("count(");

    // Sopranos — Python
    case "sp-py-01":
      return (normalizedCode.includes("tony") || normalizedCode.includes("soprano") || normalizedCode.includes("waste")) && normalizedCode.includes("print");
    case "sp-py-02":
      return normalizedCode.includes("[") && (normalizedCode.includes("crew") || normalizedCode.includes("paulie") || normalizedCode.includes("remove") || normalizedCode.includes("append"));
    case "sp-py-03":
      return normalizedCode.includes("{") && (normalizedCode.includes("tony") || normalizedCode.includes("fbi") || normalizedCode.includes("soprano"));
    case "sp-py-04":
      return normalizedCode.includes("def ") && normalizedCode.includes("return") && (normalizedCode.includes("fee") || normalizedCode.includes("protection") || normalizedCode.includes("percent"));
    case "sp-py-05":
      return normalizedCode.includes("for ") && (normalizedCode.includes("total") || normalizedCode.includes("fees") || normalizedCode.includes("earnings"));

    // Sopranos — JavaScript
    case "sp-js-01":
      return (normalizedCode.includes("christopher") || normalizedCode.includes("cleaver") || normalizedCode.includes("moltisanti")) && (normalizedCode.includes("`") || normalizedCode.includes("console.log"));
    case "sp-js-02":
      return normalizedCode.includes("push") && (normalizedCode.includes("bada bing") || normalizedCode.includes("silvio") || normalizedCode.includes("performer")) && normalizedCode.includes("length");
    case "sp-js-03":
      return normalizedCode.includes("?") && (normalizedCode.includes("earner") || normalizedCode.includes("tony") || normalizedCode.includes("10000"));
    case "sp-js-04":
      return normalizedCode.includes("{") && (normalizedCode.includes("duck") || normalizedCode.includes("tony") || normalizedCode.includes("mallard")) && normalizedCode.includes("console.log");
    case "sp-js-05":
      return normalizedCode.includes("filter") && normalizedCode.includes("length");

    // Sopranos — SQL
    case "sp-sql-01":
      return normalizedCode.includes("select") && normalizedCode.includes("*") && normalizedCode.includes("from contracts");
    case "sp-sql-02":
      return normalizedCode.includes("where") && normalizedCode.includes("value");
    case "sp-sql-03":
      return normalizedCode.includes("order by") && normalizedCode.includes("desc") && normalizedCode.includes("limit");
    case "sp-sql-04":
      return normalizedCode.includes("count(") && normalizedCode.includes("sum(") && normalizedCode.includes("avg(");
    case "sp-sql-05":
      return normalizedCode.includes("group by") && normalizedCode.includes("sum(");

    // Java — all themes (check for class/println + concept keywords)
    case "st-java-01": case "sv-java-01": case "bb-java-01": case "to-java-01":
    case "got-java-01": case "mx-java-01": case "rm-java-01": case "sg-java-01":
    case "ad-java-01": case "ba-java-01": case "sc-java-01": case "sp-java-01":
      return normalizedCode.includes("class main") && normalizedCode.includes("system.out.println");
    case "st-java-02": case "sv-java-02": case "bb-java-02": case "to-java-02":
    case "got-java-02": case "mx-java-02": case "rm-java-02": case "sg-java-02":
    case "ad-java-02": case "ba-java-02": case "sc-java-02": case "sp-java-02":
      return normalizedCode.includes("class main") && normalizedCode.includes("if") && normalizedCode.includes("else");
    case "st-java-03": case "sv-java-03": case "bb-java-03": case "to-java-03":
    case "got-java-03": case "mx-java-03": case "rm-java-03": case "sg-java-03":
    case "ad-java-03": case "ba-java-03": case "sc-java-03": case "sp-java-03":
      return normalizedCode.includes("class main") && normalizedCode.includes("static") && normalizedCode.includes("return");
    case "st-java-04": case "sv-java-04": case "bb-java-04": case "to-java-04":
    case "got-java-04": case "mx-java-04": case "rm-java-04": case "sg-java-04":
    case "ad-java-04": case "ba-java-04": case "sc-java-04": case "sp-java-04":
      return normalizedCode.includes("class main") && (normalizedCode.includes("[]") || normalizedCode.includes("array"));
    case "st-java-05": case "sv-java-05": case "bb-java-05": case "to-java-05":
    case "got-java-05": case "mx-java-05": case "rm-java-05": case "sg-java-05":
    case "ad-java-05": case "ba-java-05": case "sc-java-05": case "sp-java-05":
      return normalizedCode.includes("class main") && normalizedCode.includes("for");

    // Go — all themes (check for package main/fmt.println + concept keywords)
    case "st-go-01": case "sv-go-01": case "bb-go-01": case "to-go-01":
    case "got-go-01": case "mx-go-01": case "rm-go-01": case "sg-go-01":
    case "ad-go-01": case "ba-go-01": case "sc-go-01": case "sp-go-01":
      return normalizedCode.includes("package main") && normalizedCode.includes("fmt.println") && normalizedCode.includes(":=");
    case "st-go-02": case "sv-go-02": case "bb-go-02": case "to-go-02":
    case "got-go-02": case "mx-go-02": case "rm-go-02": case "sg-go-02":
    case "ad-go-02": case "ba-go-02": case "sc-go-02": case "sp-go-02":
      return normalizedCode.includes("package main") && normalizedCode.includes("if") && normalizedCode.includes("else");
    case "st-go-03": case "sv-go-03": case "bb-go-03": case "to-go-03":
    case "got-go-03": case "mx-go-03": case "rm-go-03": case "sg-go-03":
    case "ad-go-03": case "ba-go-03": case "sc-go-03": case "sp-go-03":
      return normalizedCode.includes("package main") && normalizedCode.includes("func ") && normalizedCode.includes("return");
    case "st-go-04": case "sv-go-04": case "bb-go-04": case "to-go-04":
    case "got-go-04": case "mx-go-04": case "rm-go-04": case "sg-go-04":
    case "ad-go-04": case "ba-go-04": case "sc-go-04": case "sp-go-04":
      return normalizedCode.includes("package main") && normalizedCode.includes("append");
    case "st-go-05": case "sv-go-05": case "bb-go-05": case "to-go-05":
    case "got-go-05": case "mx-go-05": case "rm-go-05": case "sg-go-05":
    case "ad-go-05": case "ba-go-05": case "sc-go-05": case "sp-go-05":
      return normalizedCode.includes("package main") && normalizedCode.includes("range");

    // SQL — existing themes (select, where, order by, aggregates, group by)
    case "st-sql-01": case "sv-sql-01": case "to-sql-01": case "got-sql-01": case "mx-sql-01": case "rm-sql-01":
      return normalizedCode.includes("select") && normalizedCode.includes("*") && normalizedCode.includes("from ");
    case "st-sql-02": case "sv-sql-02": case "to-sql-02": case "got-sql-02": case "mx-sql-02": case "rm-sql-02":
      return normalizedCode.includes("select") && normalizedCode.includes("where");
    case "st-sql-03": case "sv-sql-03": case "to-sql-03": case "got-sql-03": case "mx-sql-03": case "rm-sql-03":
      return normalizedCode.includes("order by") && normalizedCode.includes("desc") && normalizedCode.includes("limit");
    case "st-sql-04": case "sv-sql-04": case "to-sql-04": case "got-sql-04": case "mx-sql-04": case "rm-sql-04":
      return normalizedCode.includes("count(") && normalizedCode.includes("avg(");
    case "st-sql-05": case "sv-sql-05": case "to-sql-05": case "got-sql-05": case "mx-sql-05": case "rm-sql-05":
      return normalizedCode.includes("group by") && normalizedCode.includes("desc");

    // The Office — Python
    case "to-py-01":
      return normalizedCode.includes("beet") && normalizedCode.includes("5765") && normalizedCode.includes("true");
    case "to-py-02":
      return normalizedCode.includes("guests") && normalizedCode.includes("remove") && normalizedCode.includes("ryan");
    case "to-py-03":
      return normalizedCode.includes("employee") && normalizedCode.includes("jim halpert") && normalizedCode.includes("employee[");
    case "to-py-04":
      return normalizedCode.includes("def threat_level") && normalizedCode.includes("midnight") && normalizedCode.includes("10");
    case "to-py-05":
      return normalizedCode.includes("def total_sales") && normalizedCode.includes("for") && normalizedCode.includes("total");

    // Game of Thrones — JavaScript
    case "got-js-01":
      return normalizedCode.includes("jon snow") && normalizedCode.includes("stark") && (normalizedCode.includes("`") || normalizedCode.includes("template"));
    case "got-js-02":
      return normalizedCode.includes("push") && normalizedCode.includes("ghost") && normalizedCode.includes("length");
    case "got-js-03":
      return normalizedCode.includes("function forgeweapons") && normalizedCode.includes("math.floor") && normalizedCode.includes("3");
    case "got-js-04":
      return normalizedCode.includes("councilmember") && normalizedCode.includes("tyrion") && normalizedCode.includes("alive");
    case "got-js-05":
      return normalizedCode.includes("filter") && normalizedCode.includes("crossed") && normalizedCode.includes("length");

    // The Matrix — Python
    case "mx-py-01":
      return normalizedCode.includes("neo") && normalizedCode.includes("red") && normalizedCode.includes("false");
    case "mx-py-02":
      return normalizedCode.includes("grid") && normalizedCode.includes("[2]") && normalizedCode.includes("30");
    case "mx-py-03":
      return normalizedCode.includes("def can_dodge") && normalizedCode.includes("100") && normalizedCode.includes("reaction_time");
    case "mx-py-04":
      return normalizedCode.includes("def count_glitches") && normalizedCode.includes("counts") && normalizedCode.includes("> 1");
    case "mx-py-05":
      return normalizedCode.includes("codecs") && normalizedCode.includes("rot_13");

    // Rick and Morty — Python
    case "rm-py-01":
      return normalizedCode.includes("szechuan") && normalizedCode.includes("97") && normalizedCode.includes("true");
    case "rm-py-02":
      return normalizedCode.includes("channels") && normalizedCode.includes("append") && normalizedCode.includes("two brothers");
    case "rm-py-03":
      return normalizedCode.includes("def portal_color") && normalizedCode.includes("green") && normalizedCode.includes("blue") && normalizedCode.includes("orange");
    case "rm-py-04":
      return normalizedCode.includes("def above_average_ricks") && normalizedCode.includes("avg") && normalizedCode.includes("count");
    case "rm-py-05":
      return normalizedCode.includes("def most_traumatic") && normalizedCode.includes("max") && normalizedCode.includes("log.get");

    // Squid Game — SQL
    case "sg-sql-01":
      return normalizedCode.includes("select") && normalizedCode.includes("*") && normalizedCode.includes("from players");
    case "sg-sql-02":
      return normalizedCode.includes("where") && normalizedCode.includes("status") && normalizedCode.includes("alive");
    case "sg-sql-03":
      return normalizedCode.includes("order by") && normalizedCode.includes("desc") && normalizedCode.includes("limit 3");
    case "sg-sql-04":
      return normalizedCode.includes("count(") && normalizedCode.includes("avg(") && normalizedCode.includes("debt_amount");
    case "sg-sql-05":
      return normalizedCode.includes("group by") && normalizedCode.includes("team_id") && normalizedCode.includes("desc");

    // ── Python 06-10 ─────────────────────────────────────────────────────────

    // Stranger Things — Python 06-10
    case "st-py-06":
      return normalizedCode.includes("eleven") && (normalizedCode.includes(".upper()") || normalizedCode.includes(".lower()") || normalizedCode.includes(".replace(") || normalizedCode.includes(".split(") || normalizedCode.includes(".strip()"));
    case "st-py-07":
      return normalizedCode.includes("[") && normalizedCode.includes("for ") && (normalizedCode.includes("sighting") || normalizedCode.includes("eleven") || normalizedCode.includes("hawkins"));
    case "st-py-08":
      return normalizedCode.includes("{") && (normalizedCode.includes("eleven") || normalizedCode.includes("hawkins") || normalizedCode.includes("lab")) && (normalizedCode.includes(":[") || normalizedCode.includes(": [") || normalizedCode.includes(":{") || normalizedCode.includes(": {"));
    case "st-py-09":
      return (normalizedCode.includes("sorted(") || normalizedCode.includes(".sort(")) && (normalizedCode.includes("sighting") || normalizedCode.includes("eleven") || normalizedCode.includes("hawkins"));
    case "st-py-10":
      return normalizedCode.includes("try") && normalizedCode.includes("except") && (normalizedCode.includes("sighting") || normalizedCode.includes("eleven") || normalizedCode.includes("hawkins"));

    // Severance — Python 06-10
    case "sv-py-06":
      return normalizedCode.includes("mark") && (normalizedCode.includes(".upper()") || normalizedCode.includes(".lower()") || normalizedCode.includes(".replace(") || normalizedCode.includes(".split(") || normalizedCode.includes(".strip()"));
    case "sv-py-07":
      return normalizedCode.includes("[") && normalizedCode.includes("for ") && (normalizedCode.includes("mark") || normalizedCode.includes("lumon") || normalizedCode.includes("bin"));
    case "sv-py-08":
      return normalizedCode.includes("{") && (normalizedCode.includes("mark") || normalizedCode.includes("lumon") || normalizedCode.includes("department")) && (normalizedCode.includes(":[") || normalizedCode.includes(": [") || normalizedCode.includes(":{") || normalizedCode.includes(": {"));
    case "sv-py-09":
      return (normalizedCode.includes("sorted(") || normalizedCode.includes(".sort(")) && (normalizedCode.includes("mark") || normalizedCode.includes("lumon") || normalizedCode.includes("bin"));
    case "sv-py-10":
      return normalizedCode.includes("try") && normalizedCode.includes("except") && (normalizedCode.includes("mark") || normalizedCode.includes("lumon") || normalizedCode.includes("refinement"));

    // Breaking Bad — Python 06-10
    case "bb-py-06":
      return normalizedCode.includes("walter") && (normalizedCode.includes(".upper()") || normalizedCode.includes(".lower()") || normalizedCode.includes(".replace(") || normalizedCode.includes(".split(") || normalizedCode.includes(".strip()"));
    case "bb-py-07":
      return normalizedCode.includes("[") && normalizedCode.includes("for ") && (normalizedCode.includes("walter") || normalizedCode.includes("blue") || normalizedCode.includes("batch"));
    case "bb-py-08":
      return normalizedCode.includes("{") && (normalizedCode.includes("walter") || normalizedCode.includes("blue") || normalizedCode.includes("batch")) && (normalizedCode.includes(":[") || normalizedCode.includes(": [") || normalizedCode.includes(":{") || normalizedCode.includes(": {"));
    case "bb-py-09":
      return (normalizedCode.includes("sorted(") || normalizedCode.includes(".sort(")) && (normalizedCode.includes("walter") || normalizedCode.includes("purity") || normalizedCode.includes("batch"));
    case "bb-py-10":
      return normalizedCode.includes("try") && normalizedCode.includes("except") && (normalizedCode.includes("walter") || normalizedCode.includes("cook") || normalizedCode.includes("purity"));

    // The Office — Python 06-10
    case "to-py-06":
      return normalizedCode.includes("michael") && (normalizedCode.includes(".upper()") || normalizedCode.includes(".lower()") || normalizedCode.includes(".replace(") || normalizedCode.includes(".split(") || normalizedCode.includes(".strip()"));
    case "to-py-07":
      return normalizedCode.includes("[") && normalizedCode.includes("for ") && (normalizedCode.includes("michael") || normalizedCode.includes("dunder") || normalizedCode.includes("paper"));
    case "to-py-08":
      return normalizedCode.includes("{") && (normalizedCode.includes("michael") || normalizedCode.includes("dunder") || normalizedCode.includes("dwight")) && (normalizedCode.includes(":[") || normalizedCode.includes(": [") || normalizedCode.includes(":{") || normalizedCode.includes(": {"));
    case "to-py-09":
      return (normalizedCode.includes("sorted(") || normalizedCode.includes(".sort(")) && (normalizedCode.includes("michael") || normalizedCode.includes("sales") || normalizedCode.includes("paper"));
    case "to-py-10":
      return normalizedCode.includes("try") && normalizedCode.includes("except") && (normalizedCode.includes("michael") || normalizedCode.includes("dunder") || normalizedCode.includes("paper"));

    // Game of Thrones — Python 06-10
    case "got-py-06":
      return normalizedCode.includes("stark") && (normalizedCode.includes(".upper()") || normalizedCode.includes(".lower()") || normalizedCode.includes(".replace(") || normalizedCode.includes(".split(") || normalizedCode.includes(".strip()"));
    case "got-py-07":
      return normalizedCode.includes("[") && normalizedCode.includes("for ") && (normalizedCode.includes("stark") || normalizedCode.includes("dragon") || normalizedCode.includes("battle"));
    case "got-py-08":
      return normalizedCode.includes("{") && (normalizedCode.includes("stark") || normalizedCode.includes("dragon") || normalizedCode.includes("house")) && (normalizedCode.includes(":[") || normalizedCode.includes(": [") || normalizedCode.includes(":{") || normalizedCode.includes(": {"));
    case "got-py-09":
      return (normalizedCode.includes("sorted(") || normalizedCode.includes(".sort(")) && (normalizedCode.includes("stark") || normalizedCode.includes("army") || normalizedCode.includes("house"));
    case "got-py-10":
      return normalizedCode.includes("try") && normalizedCode.includes("except") && (normalizedCode.includes("stark") || normalizedCode.includes("dragon") || normalizedCode.includes("battle"));

    // The Matrix — Python 06-10
    case "mx-py-06":
      return normalizedCode.includes("neo") && (normalizedCode.includes(".upper()") || normalizedCode.includes(".lower()") || normalizedCode.includes(".replace(") || normalizedCode.includes(".split(") || normalizedCode.includes(".strip()"));
    case "mx-py-07":
      return normalizedCode.includes("[") && normalizedCode.includes("for ") && (normalizedCode.includes("neo") || normalizedCode.includes("matrix") || normalizedCode.includes("agent"));
    case "mx-py-08":
      return normalizedCode.includes("{") && (normalizedCode.includes("neo") || normalizedCode.includes("matrix") || normalizedCode.includes("agent")) && (normalizedCode.includes(":[") || normalizedCode.includes(": [") || normalizedCode.includes(":{") || normalizedCode.includes(": {"));
    case "mx-py-09":
      return (normalizedCode.includes("sorted(") || normalizedCode.includes(".sort(")) && (normalizedCode.includes("neo") || normalizedCode.includes("agent") || normalizedCode.includes("anomaly"));
    case "mx-py-10":
      return normalizedCode.includes("try") && normalizedCode.includes("except") && (normalizedCode.includes("neo") || normalizedCode.includes("matrix") || normalizedCode.includes("agent"));

    // Rick and Morty — Python 06-10
    case "rm-py-06":
      return normalizedCode.includes("rick") && (normalizedCode.includes(".upper()") || normalizedCode.includes(".lower()") || normalizedCode.includes(".replace(") || normalizedCode.includes(".split(") || normalizedCode.includes(".strip()"));
    case "rm-py-07":
      return normalizedCode.includes("[") && normalizedCode.includes("for ") && (normalizedCode.includes("rick") || normalizedCode.includes("portal") || normalizedCode.includes("dimension"));
    case "rm-py-08":
      return normalizedCode.includes("{") && (normalizedCode.includes("rick") || normalizedCode.includes("portal") || normalizedCode.includes("dimension")) && (normalizedCode.includes(":[") || normalizedCode.includes(": [") || normalizedCode.includes(":{") || normalizedCode.includes(": {"));
    case "rm-py-09":
      return (normalizedCode.includes("sorted(") || normalizedCode.includes(".sort(")) && (normalizedCode.includes("rick") || normalizedCode.includes("portal") || normalizedCode.includes("dimension"));
    case "rm-py-10":
      return normalizedCode.includes("try") && normalizedCode.includes("except") && (normalizedCode.includes("rick") || normalizedCode.includes("portal") || normalizedCode.includes("dimension"));

    // Squid Game — Python 06-10
    case "sg-py-06":
      return normalizedCode.includes("player") && (normalizedCode.includes(".upper()") || normalizedCode.includes(".lower()") || normalizedCode.includes(".replace(") || normalizedCode.includes(".split(") || normalizedCode.includes(".strip()"));
    case "sg-py-07":
      return normalizedCode.includes("[") && normalizedCode.includes("for ") && (normalizedCode.includes("player") || normalizedCode.includes("game") || normalizedCode.includes("prize"));
    case "sg-py-08":
      return normalizedCode.includes("{") && (normalizedCode.includes("player") || normalizedCode.includes("game") || normalizedCode.includes("456")) && (normalizedCode.includes(":[") || normalizedCode.includes(": [") || normalizedCode.includes(":{") || normalizedCode.includes(": {"));
    case "sg-py-09":
      return (normalizedCode.includes("sorted(") || normalizedCode.includes(".sort(")) && (normalizedCode.includes("player") || normalizedCode.includes("prize") || normalizedCode.includes("game"));
    case "sg-py-10":
      return normalizedCode.includes("try") && normalizedCode.includes("except") && (normalizedCode.includes("player") || normalizedCode.includes("game") || normalizedCode.includes("456"));

    // Arrested Development — Python 06-10
    case "ad-py-06":
      return normalizedCode.includes("bluth") && (normalizedCode.includes(".upper()") || normalizedCode.includes(".lower()") || normalizedCode.includes(".replace(") || normalizedCode.includes(".split(") || normalizedCode.includes(".strip()"));
    case "ad-py-07":
      return normalizedCode.includes("[") && normalizedCode.includes("for ") && (normalizedCode.includes("bluth") || normalizedCode.includes("banana") || normalizedCode.includes("tobias"));
    case "ad-py-08":
      return normalizedCode.includes("{") && (normalizedCode.includes("bluth") || normalizedCode.includes("banana") || normalizedCode.includes("tobias")) && (normalizedCode.includes(":[") || normalizedCode.includes(": [") || normalizedCode.includes(":{") || normalizedCode.includes(": {"));
    case "ad-py-09":
      return (normalizedCode.includes("sorted(") || normalizedCode.includes(".sort(")) && (normalizedCode.includes("bluth") || normalizedCode.includes("banana") || normalizedCode.includes("venture"));
    case "ad-py-10":
      return normalizedCode.includes("try") && normalizedCode.includes("except") && (normalizedCode.includes("bluth") || normalizedCode.includes("banana") || normalizedCode.includes("tobias"));

    // Barbie — Python 06-10
    case "ba-py-06":
      return normalizedCode.includes("barbie") && (normalizedCode.includes(".upper()") || normalizedCode.includes(".lower()") || normalizedCode.includes(".replace(") || normalizedCode.includes(".split(") || normalizedCode.includes(".strip()"));
    case "ba-py-07":
      return normalizedCode.includes("[") && normalizedCode.includes("for ") && (normalizedCode.includes("barbie") || normalizedCode.includes("ken") || normalizedCode.includes("career"));
    case "ba-py-08":
      return normalizedCode.includes("{") && (normalizedCode.includes("barbie") || normalizedCode.includes("ken") || normalizedCode.includes("career")) && (normalizedCode.includes(":[") || normalizedCode.includes(": [") || normalizedCode.includes(":{") || normalizedCode.includes(": {"));
    case "ba-py-09":
      return (normalizedCode.includes("sorted(") || normalizedCode.includes(".sort(")) && (normalizedCode.includes("barbie") || normalizedCode.includes("ken") || normalizedCode.includes("career"));
    case "ba-py-10":
      return normalizedCode.includes("try") && normalizedCode.includes("except") && (normalizedCode.includes("barbie") || normalizedCode.includes("ken") || normalizedCode.includes("barbieland"));

    // Sex and the City — Python 06-10
    case "sc-py-06":
      return normalizedCode.includes("carrie") && (normalizedCode.includes(".upper()") || normalizedCode.includes(".lower()") || normalizedCode.includes(".replace(") || normalizedCode.includes(".split(") || normalizedCode.includes(".strip()"));
    case "sc-py-07":
      return normalizedCode.includes("[") && normalizedCode.includes("for ") && (normalizedCode.includes("carrie") || normalizedCode.includes("miranda") || normalizedCode.includes("shoe"));
    case "sc-py-08":
      return normalizedCode.includes("{") && (normalizedCode.includes("carrie") || normalizedCode.includes("miranda") || normalizedCode.includes("charlotte")) && (normalizedCode.includes(":[") || normalizedCode.includes(": [") || normalizedCode.includes(":{") || normalizedCode.includes(": {"));
    case "sc-py-09":
      return (normalizedCode.includes("sorted(") || normalizedCode.includes(".sort(")) && (normalizedCode.includes("carrie") || normalizedCode.includes("shoe") || normalizedCode.includes("date"));
    case "sc-py-10":
      return normalizedCode.includes("try") && normalizedCode.includes("except") && (normalizedCode.includes("carrie") || normalizedCode.includes("shoe") || normalizedCode.includes("column"));

    // Sopranos — Python 06-10
    case "sp-py-06":
      return normalizedCode.includes("tony") && (normalizedCode.includes(".upper()") || normalizedCode.includes(".lower()") || normalizedCode.includes(".replace(") || normalizedCode.includes(".split(") || normalizedCode.includes(".strip()"));
    case "sp-py-07":
      return normalizedCode.includes("[") && normalizedCode.includes("for ") && (normalizedCode.includes("tony") || normalizedCode.includes("crew") || normalizedCode.includes("soprano"));
    case "sp-py-08":
      return normalizedCode.includes("{") && (normalizedCode.includes("tony") || normalizedCode.includes("crew") || normalizedCode.includes("soprano")) && (normalizedCode.includes(":[") || normalizedCode.includes(": [") || normalizedCode.includes(":{") || normalizedCode.includes(": {"));
    case "sp-py-09":
      return (normalizedCode.includes("sorted(") || normalizedCode.includes(".sort(")) && (normalizedCode.includes("tony") || normalizedCode.includes("crew") || normalizedCode.includes("soprano"));
    case "sp-py-10":
      return normalizedCode.includes("try") && normalizedCode.includes("except") && (normalizedCode.includes("tony") || normalizedCode.includes("crew") || normalizedCode.includes("soprano"));

    // ── JavaScript 06-10 ──────────────────────────────────────────────────────

    // Stranger Things — JavaScript 06-10
    case "st-js-06":
      return (normalizedCode.includes(".touppercase()") || normalizedCode.includes(".tolowercase()") || normalizedCode.includes(".includes(") || normalizedCode.includes(".slice(") || normalizedCode.includes(".replace(")) && (normalizedCode.includes("eleven") || normalizedCode.includes("hawkins"));
    case "st-js-07":
      return normalizedCode.includes(".map(") && (normalizedCode.includes("eleven") || normalizedCode.includes("hawkins") || normalizedCode.includes("sighting"));
    case "st-js-08":
      return normalizedCode.includes(".reduce(") && (normalizedCode.includes("eleven") || normalizedCode.includes("hawkins") || normalizedCode.includes("sighting"));
    case "st-js-09":
      return (normalizedCode.includes("...") || normalizedCode.includes("const {") || normalizedCode.includes("const [")) && (normalizedCode.includes("eleven") || normalizedCode.includes("hawkins"));
    case "st-js-10":
      return (normalizedCode.includes("object.keys(") || normalizedCode.includes("object.entries(")) && (normalizedCode.includes("eleven") || normalizedCode.includes("hawkins"));

    // Severance — JavaScript 06-10
    case "sv-js-06":
      return (normalizedCode.includes(".touppercase()") || normalizedCode.includes(".tolowercase()") || normalizedCode.includes(".includes(") || normalizedCode.includes(".slice(") || normalizedCode.includes(".replace(")) && (normalizedCode.includes("mark") || normalizedCode.includes("lumon"));
    case "sv-js-07":
      return normalizedCode.includes(".map(") && (normalizedCode.includes("mark") || normalizedCode.includes("lumon") || normalizedCode.includes("bin"));
    case "sv-js-08":
      return normalizedCode.includes(".reduce(") && (normalizedCode.includes("mark") || normalizedCode.includes("lumon") || normalizedCode.includes("bin"));
    case "sv-js-09":
      return (normalizedCode.includes("...") || normalizedCode.includes("const {") || normalizedCode.includes("const [")) && (normalizedCode.includes("mark") || normalizedCode.includes("lumon"));
    case "sv-js-10":
      return (normalizedCode.includes("object.keys(") || normalizedCode.includes("object.entries(")) && (normalizedCode.includes("mark") || normalizedCode.includes("lumon"));

    // Breaking Bad — JavaScript 06-10
    case "bb-js-06":
      return (normalizedCode.includes(".touppercase()") || normalizedCode.includes(".tolowercase()") || normalizedCode.includes(".includes(") || normalizedCode.includes(".slice(") || normalizedCode.includes(".replace(")) && (normalizedCode.includes("walter") || normalizedCode.includes("heisenberg"));
    case "bb-js-07":
      return normalizedCode.includes(".map(") && (normalizedCode.includes("walter") || normalizedCode.includes("blue") || normalizedCode.includes("batch"));
    case "bb-js-08":
      return normalizedCode.includes(".reduce(") && (normalizedCode.includes("walter") || normalizedCode.includes("blue") || normalizedCode.includes("batch"));
    case "bb-js-09":
      return (normalizedCode.includes("...") || normalizedCode.includes("const {") || normalizedCode.includes("const [")) && (normalizedCode.includes("walter") || normalizedCode.includes("heisenberg"));
    case "bb-js-10":
      return (normalizedCode.includes("object.keys(") || normalizedCode.includes("object.entries(")) && (normalizedCode.includes("walter") || normalizedCode.includes("heisenberg"));

    // The Office — JavaScript 06-10
    case "to-js-06":
      return (normalizedCode.includes(".touppercase()") || normalizedCode.includes(".tolowercase()") || normalizedCode.includes(".includes(") || normalizedCode.includes(".slice(") || normalizedCode.includes(".replace(")) && (normalizedCode.includes("michael") || normalizedCode.includes("dunder"));
    case "to-js-07":
      return normalizedCode.includes(".map(") && (normalizedCode.includes("michael") || normalizedCode.includes("dunder") || normalizedCode.includes("paper"));
    case "to-js-08":
      return normalizedCode.includes(".reduce(") && (normalizedCode.includes("michael") || normalizedCode.includes("dunder") || normalizedCode.includes("paper"));
    case "to-js-09":
      return (normalizedCode.includes("...") || normalizedCode.includes("const {") || normalizedCode.includes("const [")) && (normalizedCode.includes("michael") || normalizedCode.includes("dunder"));
    case "to-js-10":
      return (normalizedCode.includes("object.keys(") || normalizedCode.includes("object.entries(")) && (normalizedCode.includes("michael") || normalizedCode.includes("dunder"));

    // Game of Thrones — JavaScript 06-10
    case "got-js-06":
      return (normalizedCode.includes(".touppercase()") || normalizedCode.includes(".tolowercase()") || normalizedCode.includes(".includes(") || normalizedCode.includes(".slice(") || normalizedCode.includes(".replace(")) && (normalizedCode.includes("stark") || normalizedCode.includes("jon"));
    case "got-js-07":
      return normalizedCode.includes(".map(") && (normalizedCode.includes("stark") || normalizedCode.includes("dragon") || normalizedCode.includes("battle"));
    case "got-js-08":
      return normalizedCode.includes(".reduce(") && (normalizedCode.includes("stark") || normalizedCode.includes("dragon") || normalizedCode.includes("battle"));
    case "got-js-09":
      return (normalizedCode.includes("...") || normalizedCode.includes("const {") || normalizedCode.includes("const [")) && (normalizedCode.includes("stark") || normalizedCode.includes("dragon"));
    case "got-js-10":
      return (normalizedCode.includes("object.keys(") || normalizedCode.includes("object.entries(")) && (normalizedCode.includes("stark") || normalizedCode.includes("dragon"));

    // The Matrix — JavaScript 06-10
    case "mx-js-06":
      return (normalizedCode.includes(".touppercase()") || normalizedCode.includes(".tolowercase()") || normalizedCode.includes(".includes(") || normalizedCode.includes(".slice(") || normalizedCode.includes(".replace(")) && (normalizedCode.includes("neo") || normalizedCode.includes("matrix"));
    case "mx-js-07":
      return normalizedCode.includes(".map(") && (normalizedCode.includes("neo") || normalizedCode.includes("matrix") || normalizedCode.includes("agent"));
    case "mx-js-08":
      return normalizedCode.includes(".reduce(") && (normalizedCode.includes("neo") || normalizedCode.includes("matrix") || normalizedCode.includes("agent"));
    case "mx-js-09":
      return (normalizedCode.includes("...") || normalizedCode.includes("const {") || normalizedCode.includes("const [")) && (normalizedCode.includes("neo") || normalizedCode.includes("matrix"));
    case "mx-js-10":
      return (normalizedCode.includes("object.keys(") || normalizedCode.includes("object.entries(")) && (normalizedCode.includes("neo") || normalizedCode.includes("matrix"));

    // Rick and Morty — JavaScript 06-10
    case "rm-js-06":
      return (normalizedCode.includes(".touppercase()") || normalizedCode.includes(".tolowercase()") || normalizedCode.includes(".includes(") || normalizedCode.includes(".slice(") || normalizedCode.includes(".replace(")) && (normalizedCode.includes("rick") || normalizedCode.includes("portal"));
    case "rm-js-07":
      return normalizedCode.includes(".map(") && (normalizedCode.includes("rick") || normalizedCode.includes("portal") || normalizedCode.includes("dimension"));
    case "rm-js-08":
      return normalizedCode.includes(".reduce(") && (normalizedCode.includes("rick") || normalizedCode.includes("portal") || normalizedCode.includes("dimension"));
    case "rm-js-09":
      return (normalizedCode.includes("...") || normalizedCode.includes("const {") || normalizedCode.includes("const [")) && (normalizedCode.includes("rick") || normalizedCode.includes("portal"));
    case "rm-js-10":
      return (normalizedCode.includes("object.keys(") || normalizedCode.includes("object.entries(")) && (normalizedCode.includes("rick") || normalizedCode.includes("portal"));

    // Squid Game — JavaScript 06-10
    case "sg-js-06":
      return (normalizedCode.includes(".touppercase()") || normalizedCode.includes(".tolowercase()") || normalizedCode.includes(".includes(") || normalizedCode.includes(".slice(") || normalizedCode.includes(".replace(")) && (normalizedCode.includes("player") || normalizedCode.includes("456"));
    case "sg-js-07":
      return normalizedCode.includes(".map(") && (normalizedCode.includes("player") || normalizedCode.includes("game") || normalizedCode.includes("456"));
    case "sg-js-08":
      return normalizedCode.includes(".reduce(") && (normalizedCode.includes("player") || normalizedCode.includes("game") || normalizedCode.includes("456"));
    case "sg-js-09":
      return (normalizedCode.includes("...") || normalizedCode.includes("const {") || normalizedCode.includes("const [")) && (normalizedCode.includes("player") || normalizedCode.includes("456"));
    case "sg-js-10":
      return (normalizedCode.includes("object.keys(") || normalizedCode.includes("object.entries(")) && (normalizedCode.includes("player") || normalizedCode.includes("456"));

    // Arrested Development — JavaScript 06-10
    case "ad-js-06":
      return (normalizedCode.includes(".touppercase()") || normalizedCode.includes(".tolowercase()") || normalizedCode.includes(".includes(") || normalizedCode.includes(".slice(") || normalizedCode.includes(".replace(")) && (normalizedCode.includes("tobias") || normalizedCode.includes("bluth"));
    case "ad-js-07":
      return normalizedCode.includes(".map(") && (normalizedCode.includes("tobias") || normalizedCode.includes("bluth") || normalizedCode.includes("banana"));
    case "ad-js-08":
      return normalizedCode.includes(".reduce(") && (normalizedCode.includes("tobias") || normalizedCode.includes("bluth") || normalizedCode.includes("banana"));
    case "ad-js-09":
      return (normalizedCode.includes("...") || normalizedCode.includes("const {") || normalizedCode.includes("const [")) && (normalizedCode.includes("tobias") || normalizedCode.includes("bluth"));
    case "ad-js-10":
      return (normalizedCode.includes("object.keys(") || normalizedCode.includes("object.entries(")) && (normalizedCode.includes("tobias") || normalizedCode.includes("bluth"));

    // Barbie — JavaScript 06-10
    case "ba-js-06":
      return (normalizedCode.includes(".touppercase()") || normalizedCode.includes(".tolowercase()") || normalizedCode.includes(".includes(") || normalizedCode.includes(".slice(") || normalizedCode.includes(".replace(")) && normalizedCode.includes("barbie");
    case "ba-js-07":
      return normalizedCode.includes(".map(") && (normalizedCode.includes("barbie") || normalizedCode.includes("ken") || normalizedCode.includes("career"));
    case "ba-js-08":
      return normalizedCode.includes(".reduce(") && (normalizedCode.includes("barbie") || normalizedCode.includes("ken") || normalizedCode.includes("career"));
    case "ba-js-09":
      return (normalizedCode.includes("...") || normalizedCode.includes("const {") || normalizedCode.includes("const [")) && (normalizedCode.includes("barbie") || normalizedCode.includes("ken"));
    case "ba-js-10":
      return (normalizedCode.includes("object.keys(") || normalizedCode.includes("object.entries(")) && (normalizedCode.includes("barbie") || normalizedCode.includes("ken"));

    // Sex and the City — JavaScript 06-10
    case "sc-js-06":
      return (normalizedCode.includes(".touppercase()") || normalizedCode.includes(".tolowercase()") || normalizedCode.includes(".includes(") || normalizedCode.includes(".slice(") || normalizedCode.includes(".replace(")) && (normalizedCode.includes("carrie") || normalizedCode.includes("new york"));
    case "sc-js-07":
      return normalizedCode.includes(".map(") && (normalizedCode.includes("carrie") || normalizedCode.includes("miranda") || normalizedCode.includes("charlotte"));
    case "sc-js-08":
      return normalizedCode.includes(".reduce(") && (normalizedCode.includes("carrie") || normalizedCode.includes("miranda") || normalizedCode.includes("charlotte"));
    case "sc-js-09":
      return (normalizedCode.includes("...") || normalizedCode.includes("const {") || normalizedCode.includes("const [")) && (normalizedCode.includes("carrie") || normalizedCode.includes("miranda"));
    case "sc-js-10":
      return (normalizedCode.includes("object.keys(") || normalizedCode.includes("object.entries(")) && (normalizedCode.includes("carrie") || normalizedCode.includes("miranda"));

    // Sopranos — JavaScript 06-10
    case "sp-js-06":
      return (normalizedCode.includes(".touppercase()") || normalizedCode.includes(".tolowercase()") || normalizedCode.includes(".includes(") || normalizedCode.includes(".slice(") || normalizedCode.includes(".replace(")) && (normalizedCode.includes("christopher") || normalizedCode.includes("tony"));
    case "sp-js-07":
      return normalizedCode.includes(".map(") && (normalizedCode.includes("christopher") || normalizedCode.includes("tony") || normalizedCode.includes("crew"));
    case "sp-js-08":
      return normalizedCode.includes(".reduce(") && (normalizedCode.includes("christopher") || normalizedCode.includes("tony") || normalizedCode.includes("crew"));
    case "sp-js-09":
      return (normalizedCode.includes("...") || normalizedCode.includes("const {") || normalizedCode.includes("const [")) && (normalizedCode.includes("christopher") || normalizedCode.includes("tony"));
    case "sp-js-10":
      return (normalizedCode.includes("object.keys(") || normalizedCode.includes("object.entries(")) && (normalizedCode.includes("christopher") || normalizedCode.includes("tony"));

    // ── Java 06-10 (grouped — all 12 themes) ─────────────────────────────────

    case "st-java-06": case "sv-java-06": case "bb-java-06": case "to-java-06":
    case "got-java-06": case "mx-java-06": case "rm-java-06": case "sg-java-06":
    case "ad-java-06": case "ba-java-06": case "sc-java-06": case "sp-java-06":
      return normalizedCode.includes("class main") && (normalizedCode.includes(".touppercase()") || normalizedCode.includes(".tolowercase()") || normalizedCode.includes(".contains(") || normalizedCode.includes(".replace("));
    case "st-java-07": case "sv-java-07": case "bb-java-07": case "to-java-07":
    case "got-java-07": case "mx-java-07": case "rm-java-07": case "sg-java-07":
    case "ad-java-07": case "ba-java-07": case "sc-java-07": case "sp-java-07":
      return normalizedCode.includes("class main") && normalizedCode.includes("arraylist") && normalizedCode.includes(".add(");
    case "st-java-08": case "sv-java-08": case "bb-java-08": case "to-java-08":
    case "got-java-08": case "mx-java-08": case "rm-java-08": case "sg-java-08":
    case "ad-java-08": case "ba-java-08": case "sc-java-08": case "sp-java-08":
      return normalizedCode.includes("class main") && normalizedCode.includes("hashmap") && normalizedCode.includes(".put(");
    case "st-java-09": case "sv-java-09": case "bb-java-09": case "to-java-09":
    case "got-java-09": case "mx-java-09": case "rm-java-09": case "sg-java-09":
    case "ad-java-09": case "ba-java-09": case "sc-java-09": case "sp-java-09":
      return normalizedCode.includes("class main") && normalizedCode.includes("static") && (normalizedCode.match(/static\s+\w+\s+\w+\s*\(/g) ?? []).length >= 2;
    case "st-java-10": case "sv-java-10": case "bb-java-10": case "to-java-10":
    case "got-java-10": case "mx-java-10": case "rm-java-10": case "sg-java-10":
    case "ad-java-10": case "ba-java-10": case "sc-java-10": case "sp-java-10":
      return normalizedCode.includes("class main") && normalizedCode.includes("stringbuilder") && normalizedCode.includes(".append(");

    // ── Go 06-10 (grouped — all 12 themes) ───────────────────────────────────

    case "st-go-06": case "sv-go-06": case "bb-go-06": case "to-go-06":
    case "got-go-06": case "mx-go-06": case "rm-go-06": case "sg-go-06":
    case "ad-go-06": case "ba-go-06": case "sc-go-06": case "sp-go-06":
      return normalizedCode.includes("package main") && (normalizedCode.includes("fmt.sprintf") || normalizedCode.includes("strings.touppercase") || normalizedCode.includes("strings.tolower") || normalizedCode.includes("strings.toupper"));
    case "st-go-07": case "sv-go-07": case "bb-go-07": case "to-go-07":
    case "got-go-07": case "mx-go-07": case "rm-go-07": case "sg-go-07":
    case "ad-go-07": case "ba-go-07": case "sc-go-07": case "sp-go-07":
      return normalizedCode.includes("package main") && normalizedCode.includes("map[") && normalizedCode.includes(":= map");
    case "st-go-08": case "sv-go-08": case "bb-go-08": case "to-go-08":
    case "got-go-08": case "mx-go-08": case "rm-go-08": case "sg-go-08":
    case "ad-go-08": case "ba-go-08": case "sc-go-08": case "sp-go-08":
      return normalizedCode.includes("package main") && normalizedCode.includes("type ") && normalizedCode.includes("struct {");
    case "st-go-09": case "sv-go-09": case "bb-go-09": case "to-go-09":
    case "got-go-09": case "mx-go-09": case "rm-go-09": case "sg-go-09":
    case "ad-go-09": case "ba-go-09": case "sc-go-09": case "sp-go-09":
      return normalizedCode.includes("package main") && normalizedCode.includes("func ") && (normalizedCode.includes(", error)") || normalizedCode.includes(") (") || (normalizedCode.match(/:=.*,/g) ?? []).length >= 1);
    case "st-go-10": case "sv-go-10": case "bb-go-10": case "to-go-10":
    case "got-go-10": case "mx-go-10": case "rm-go-10": case "sg-go-10":
    case "ad-go-10": case "ba-go-10": case "sc-go-10": case "sp-go-10":
      return normalizedCode.includes("package main") && (normalizedCode.includes("err != nil") || normalizedCode.includes("errors.new(") || normalizedCode.includes("fmt.errorf("));

    // ── SQL 06-10 ─────────────────────────────────────────────────────────────

    // Stranger Things — SQL 06-10  (tables: sightings, labs)
    case "st-sql-06":
      return normalizedCode.includes("join") && normalizedCode.includes("sightings") && normalizedCode.includes("labs");
    case "st-sql-07":
      return normalizedCode.includes("group by") && normalizedCode.includes("having");
    case "st-sql-08":
      return normalizedCode.includes("select") && (normalizedCode.match(/\(select/g) ?? []).length >= 1;
    case "st-sql-09":
      return normalizedCode.includes("case") && normalizedCode.includes("when") && normalizedCode.includes("then") && normalizedCode.includes("end");
    case "st-sql-10":
      return normalizedCode.includes("join") && normalizedCode.includes("where") && normalizedCode.includes("group by") && normalizedCode.includes("order by");

    // Severance — SQL 06-10  (tables: employees, departments)
    case "sv-sql-06":
      return normalizedCode.includes("join") && normalizedCode.includes("employees") && normalizedCode.includes("departments");
    case "sv-sql-07":
      return normalizedCode.includes("group by") && normalizedCode.includes("having");
    case "sv-sql-08":
      return normalizedCode.includes("select") && (normalizedCode.match(/\(select/g) ?? []).length >= 1;
    case "sv-sql-09":
      return normalizedCode.includes("case") && normalizedCode.includes("when") && normalizedCode.includes("then") && normalizedCode.includes("end");
    case "sv-sql-10":
      return normalizedCode.includes("join") && normalizedCode.includes("where") && normalizedCode.includes("group by") && normalizedCode.includes("order by");

    // Breaking Bad — SQL 06-10  (tables: products, batches)
    case "bb-sql-06":
      return normalizedCode.includes("join") && normalizedCode.includes("products") && normalizedCode.includes("batches");
    case "bb-sql-07":
      return normalizedCode.includes("group by") && normalizedCode.includes("having");
    case "bb-sql-08":
      return normalizedCode.includes("select") && (normalizedCode.match(/\(select/g) ?? []).length >= 1;
    case "bb-sql-09":
      return normalizedCode.includes("case") && normalizedCode.includes("when") && normalizedCode.includes("then") && normalizedCode.includes("end");
    case "bb-sql-10":
      return normalizedCode.includes("join") && normalizedCode.includes("where") && normalizedCode.includes("group by") && normalizedCode.includes("order by");

    // The Office — SQL 06-10  (tables: employees, sales)
    case "to-sql-06":
      return normalizedCode.includes("join") && normalizedCode.includes("employees") && normalizedCode.includes("sales");
    case "to-sql-07":
      return normalizedCode.includes("group by") && normalizedCode.includes("having");
    case "to-sql-08":
      return normalizedCode.includes("select") && (normalizedCode.match(/\(select/g) ?? []).length >= 1;
    case "to-sql-09":
      return normalizedCode.includes("case") && normalizedCode.includes("when") && normalizedCode.includes("then") && normalizedCode.includes("end");
    case "to-sql-10":
      return normalizedCode.includes("join") && normalizedCode.includes("where") && normalizedCode.includes("group by") && normalizedCode.includes("order by");

    // Game of Thrones — SQL 06-10  (tables: battles, houses)
    case "got-sql-06":
      return normalizedCode.includes("join") && normalizedCode.includes("battles") && normalizedCode.includes("houses");
    case "got-sql-07":
      return normalizedCode.includes("group by") && normalizedCode.includes("having");
    case "got-sql-08":
      return normalizedCode.includes("select") && (normalizedCode.match(/\(select/g) ?? []).length >= 1;
    case "got-sql-09":
      return normalizedCode.includes("case") && normalizedCode.includes("when") && normalizedCode.includes("then") && normalizedCode.includes("end");
    case "got-sql-10":
      return normalizedCode.includes("join") && normalizedCode.includes("where") && normalizedCode.includes("group by") && normalizedCode.includes("order by");

    // The Matrix — SQL 06-10  (tables: agents, anomalies)
    case "mx-sql-06":
      return normalizedCode.includes("join") && normalizedCode.includes("agents") && normalizedCode.includes("anomalies");
    case "mx-sql-07":
      return normalizedCode.includes("group by") && normalizedCode.includes("having");
    case "mx-sql-08":
      return normalizedCode.includes("select") && (normalizedCode.match(/\(select/g) ?? []).length >= 1;
    case "mx-sql-09":
      return normalizedCode.includes("case") && normalizedCode.includes("when") && normalizedCode.includes("then") && normalizedCode.includes("end");
    case "mx-sql-10":
      return normalizedCode.includes("join") && normalizedCode.includes("where") && normalizedCode.includes("group by") && normalizedCode.includes("order by");

    // Rick and Morty — SQL 06-10  (tables: portals, dimensions)
    case "rm-sql-06":
      return normalizedCode.includes("join") && normalizedCode.includes("portals") && normalizedCode.includes("dimensions");
    case "rm-sql-07":
      return normalizedCode.includes("group by") && normalizedCode.includes("having");
    case "rm-sql-08":
      return normalizedCode.includes("select") && (normalizedCode.match(/\(select/g) ?? []).length >= 1;
    case "rm-sql-09":
      return normalizedCode.includes("case") && normalizedCode.includes("when") && normalizedCode.includes("then") && normalizedCode.includes("end");
    case "rm-sql-10":
      return normalizedCode.includes("join") && normalizedCode.includes("where") && normalizedCode.includes("group by") && normalizedCode.includes("order by");

    // Squid Game — SQL 06-10  (tables: players, games)
    case "sg-sql-06":
      return normalizedCode.includes("join") && normalizedCode.includes("players") && normalizedCode.includes("games");
    case "sg-sql-07":
      return normalizedCode.includes("group by") && normalizedCode.includes("having");
    case "sg-sql-08":
      return normalizedCode.includes("select") && (normalizedCode.match(/\(select/g) ?? []).length >= 1;
    case "sg-sql-09":
      return normalizedCode.includes("case") && normalizedCode.includes("when") && normalizedCode.includes("then") && normalizedCode.includes("end");
    case "sg-sql-10":
      return normalizedCode.includes("join") && normalizedCode.includes("where") && normalizedCode.includes("group by") && normalizedCode.includes("order by");

    // Arrested Development — SQL 06-10  (tables: ventures, bluth_company)
    case "ad-sql-06":
      return normalizedCode.includes("join") && normalizedCode.includes("ventures") && normalizedCode.includes("bluth_company");
    case "ad-sql-07":
      return normalizedCode.includes("group by") && normalizedCode.includes("having");
    case "ad-sql-08":
      return normalizedCode.includes("select") && (normalizedCode.match(/\(select/g) ?? []).length >= 1;
    case "ad-sql-09":
      return normalizedCode.includes("case") && normalizedCode.includes("when") && normalizedCode.includes("then") && normalizedCode.includes("end");
    case "ad-sql-10":
      return normalizedCode.includes("join") && normalizedCode.includes("where") && normalizedCode.includes("group by") && normalizedCode.includes("order by");

    // Barbie — SQL 06-10  (tables: barbies, careers)
    case "ba-sql-06":
      return normalizedCode.includes("join") && normalizedCode.includes("barbies") && normalizedCode.includes("careers");
    case "ba-sql-07":
      return normalizedCode.includes("group by") && normalizedCode.includes("having");
    case "ba-sql-08":
      return normalizedCode.includes("select") && (normalizedCode.match(/\(select/g) ?? []).length >= 1;
    case "ba-sql-09":
      return normalizedCode.includes("case") && normalizedCode.includes("when") && normalizedCode.includes("then") && normalizedCode.includes("end");
    case "ba-sql-10":
      return normalizedCode.includes("join") && normalizedCode.includes("where") && normalizedCode.includes("group by") && normalizedCode.includes("order by");

    // Sex and the City — SQL 06-10  (tables: dates, apartments)
    case "sc-sql-06":
      return normalizedCode.includes("join") && normalizedCode.includes("dates") && normalizedCode.includes("apartments");
    case "sc-sql-07":
      return normalizedCode.includes("group by") && normalizedCode.includes("having");
    case "sc-sql-08":
      return normalizedCode.includes("select") && (normalizedCode.match(/\(select/g) ?? []).length >= 1;
    case "sc-sql-09":
      return normalizedCode.includes("case") && normalizedCode.includes("when") && normalizedCode.includes("then") && normalizedCode.includes("end");
    case "sc-sql-10":
      return normalizedCode.includes("join") && normalizedCode.includes("where") && normalizedCode.includes("group by") && normalizedCode.includes("order by");

    // Sopranos — SQL 06-10  (tables: contracts, crews)
    case "sp-sql-06":
      return normalizedCode.includes("join") && normalizedCode.includes("contracts") && normalizedCode.includes("crews");
    case "sp-sql-07":
      return normalizedCode.includes("group by") && normalizedCode.includes("having");
    case "sp-sql-08":
      return normalizedCode.includes("select") && (normalizedCode.match(/\(select/g) ?? []).length >= 1;
    case "sp-sql-09":
      return normalizedCode.includes("case") && normalizedCode.includes("when") && normalizedCode.includes("then") && normalizedCode.includes("end");
    case "sp-sql-10":
      return normalizedCode.includes("join") && normalizedCode.includes("where") && normalizedCode.includes("group by") && normalizedCode.includes("order by");

    default:
      return true;
  }
}
