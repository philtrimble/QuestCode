"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  Play, Lightbulb, Trophy, ChevronLeft, ChevronRight,
  Clock, Star, X, Check, RotateCcw, AlertCircle, Zap,
} from "lucide-react";
import type { Theme, Language, FinalChallenge, FinalQuestion } from "@/types";
import { PISTON_LANGUAGES, executeCode, outputMatchesExpected, formatRunError } from "@/lib/run-code";

const MonacoEditor = dynamic(() => import("./MonacoEditor"), { ssr: false });

// ── Constants ─────────────────────────────────────────────────────────────────
const TOTAL_SECONDS = 600;   // 10 minutes
const PTS_PER_Q    = 20;
const HINT_PENALTY = 5;

// ── Per-question runtime state ────────────────────────────────────────────────
interface QState {
  code:        string;
  hintUsed:    boolean;
  hintVisible: boolean;
  answered:    boolean;
  correct:     boolean;
  pts:         number;
}

// ── Client-side answer evaluator ─────────────────────────────────────────────
function evalAnswer(code: string, q: FinalQuestion): boolean {
  const norm = code.toLowerCase().replace(/\s+/g, " ");

  // All test-case expected lines must appear somewhere in the code
  const testCasesPass = q.testCases.every((tc) =>
    tc.expected.split("\n").every((line) => {
      const l = line.trim().toLowerCase();
      return l === "" || norm.includes(l);
    })
  );

  // At least half of the concept keywords must appear
  const kws = q.conceptKeywords.map((k) => k.toLowerCase());
  const kwPass =
    kws.length === 0 ||
    kws.filter((kw) => norm.includes(kw)).length >= Math.ceil(kws.length * 0.5);

  return testCasesPass && kwPass;
}

// ── Theme accent helpers ──────────────────────────────────────────────────────
const THEME_TEXT: Record<string, string> = {
  "stranger-things":      "text-red-400",
  "severance":            "text-blue-400",
  "breaking-bad":         "text-green-400",
  "the-office":           "text-yellow-400",
  "game-of-thrones":      "text-yellow-500",
  "the-matrix":           "text-green-300",
  "rick-and-morty":       "text-cyan-400",
  "squid-game":           "text-pink-400",
  "arrested-development": "text-orange-400",
  "barbie":               "text-fuchsia-400",
  "sex-and-the-city":     "text-rose-400",
  "sopranos":             "text-red-500",
};
const THEME_BORDER: Record<string, string> = {
  "stranger-things":      "border-red-500/40",
  "severance":            "border-blue-500/40",
  "breaking-bad":         "border-green-500/40",
  "the-office":           "border-yellow-500/40",
  "game-of-thrones":      "border-yellow-600/40",
  "the-matrix":           "border-green-400/40",
  "rick-and-morty":       "border-cyan-500/40",
  "squid-game":           "border-pink-500/40",
  "arrested-development": "border-orange-500/40",
  "barbie":               "border-fuchsia-500/40",
  "sex-and-the-city":     "border-rose-500/40",
  "sopranos":             "border-red-800/40",
};
const THEME_BG: Record<string, string> = {
  "stranger-things":      "bg-red-950/25",
  "severance":            "bg-blue-950/25",
  "breaking-bad":         "bg-green-950/25",
  "the-office":           "bg-yellow-950/25",
  "game-of-thrones":      "bg-yellow-950/25",
  "the-matrix":           "bg-green-950/25",
  "rick-and-morty":       "bg-cyan-950/25",
  "squid-game":           "bg-pink-950/25",
  "arrested-development": "bg-orange-950/25",
  "barbie":               "bg-fuchsia-950/25",
  "sex-and-the-city":     "bg-rose-950/25",
  "sopranos":             "bg-red-950/25",
};

// ── Grade helper ──────────────────────────────────────────────────────────────
function grade(pct: number): { letter: string; color: string } {
  if (pct >= 95) return { letter: "S+", color: "text-brand-amber" };
  if (pct >= 80) return { letter: "A",  color: "text-green-400"   };
  if (pct >= 60) return { letter: "B",  color: "text-blue-400"    };
  if (pct >= 40) return { letter: "C",  color: "text-yellow-400"  };
  return           { letter: "D",  color: "text-slate-500"   };
}

// ─────────────────────────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────────────────────────
interface Props {
  theme:     Theme;
  language:  Language;
  challenge: FinalChallenge;
}

export default function FinalQuestConsole({ theme, language, challenge }: Props) {
  const tc    = THEME_TEXT[theme.id]   ?? "text-brand-glow";
  const bc    = THEME_BORDER[theme.id] ?? "border-brand-border";
  const bgc   = THEME_BG[theme.id]    ?? "";
  const ext   = { python: "py", javascript: "js", java: "java", sql: "sql", go: "go" }[language.id] ?? "txt";

  const [qIdx,    setQIdx]    = useState(0);
  const [timeLeft, setTimeLeft] = useState(TOTAL_SECONDS);
  const [done,    setDone]    = useState(false);
  const [running, setRunning] = useState(false);
  const [output,  setOutput]  = useState<string | null>(null);
  const [correct, setCorrect] = useState<boolean | null>(null);
  const [warnHint, setWarnHint] = useState(false);

  const [qStates, setQStates] = useState<QState[]>(
    challenge.questions.map((q) => ({
      code: q.starterCode, hintUsed: false, hintVisible: false,
      answered: false, correct: false, pts: 0,
    }))
  );

  const cur    = challenge.questions[qIdx];
  const curSt  = qStates[qIdx];
  const total  = qStates.reduce((s, q) => s + q.pts, 0);
  const maxPts = PTS_PER_Q * challenge.questions.length;
  const nDone  = qStates.filter((q) => q.answered).length;

  // ── Timer ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (done) return;
    if (timeLeft <= 0) { setDone(true); return; }
    const id = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(id);
  }, [timeLeft, done]);

  // Auto-finish when all questions answered
  useEffect(() => {
    if (nDone === challenge.questions.length && nDone > 0) {
      const id = setTimeout(() => setDone(true), 1600);
      return () => clearTimeout(id);
    }
  }, [nDone, challenge.questions.length]);

  const fmt = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  // ── State helpers ──────────────────────────────────────────────────────────
  const patch = (i: number, u: Partial<QState>) =>
    setQStates((prev) => prev.map((q, idx) => (idx === i ? { ...q, ...u } : q)));

  const goTo = (i: number) => {
    if (i < 0 || i >= challenge.questions.length) return;
    setQIdx(i);
    setOutput(null);
    setCorrect(null);
    setWarnHint(false);
  };

  // ── Hint ──────────────────────────────────────────────────────────────────
  const handleHint = () => {
    if (curSt.hintUsed) {
      patch(qIdx, { hintVisible: !curSt.hintVisible });
    } else {
      setWarnHint(true);
    }
  };
  const confirmHint = () => {
    setWarnHint(false);
    patch(qIdx, { hintUsed: true, hintVisible: true });
  };

  // ── Run / submit ──────────────────────────────────────────────────────────
  const submit = useCallback(async () => {
    if (!cur || curSt.answered) return;
    setRunning(true);
    setOutput(null);
    setCorrect(null);

    let ok: boolean;
    let displayOutput: string;

    if (language.id === "sql") {
      // ── SQL: execute via SQLite/Python on Judge0; correctness = keyword check
      try {
        const result = await executeCode("sql", curSt.code, theme.id);

        if (result.error) {
          ok = evalAnswer(curSt.code, cur);
          displayOutput = ok
            ? "✓ Query accepted."
            : "⚠ SQL runner unavailable. Static check did not pass.";
        } else if (result.exit_code !== 0) {
          ok = false;
          displayOutput = result.stderr || "SQL error — check your query.";
        } else {
          ok = evalAnswer(curSt.code, cur);
          displayOutput = result.stdout.trim() || "(0 rows)";
        }
      } catch {
        ok = evalAnswer(curSt.code, cur);
        displayOutput = ok
          ? "✓ Query accepted."
          : "⚠ Network error — could not reach SQL runner.";
      }
    } else if (PISTON_LANGUAGES.has(language.id)) {
      // ── Real execution via Judge0 ──────────────────────────────────────────
      try {
        const result = await executeCode(language.id, curSt.code);

        if (result.error) {
          // Service unavailable — fall back to keyword eval so the user
          // isn't penalised for an infrastructure failure
          ok = evalAnswer(curSt.code, cur);
          displayOutput = ok
            ? cur.testCases[0]?.expected ?? "✓ Correct!"
            : "⚠ Code runner unavailable. Static check did not pass.";
        } else if (result.exit_code !== 0) {
          ok = false;
          displayOutput = formatRunError(result);
        } else {
          ok = outputMatchesExpected(result.stdout, cur.testCases);
          displayOutput = result.stdout || "(no output)";
        }
      } catch {
        // Network error — fall back so the timer doesn't strand the user
        ok = evalAnswer(curSt.code, cur);
        displayOutput = ok
          ? cur.testCases[0]?.expected ?? "✓ Correct!"
          : "⚠ Network error — could not reach code runner.";
      }
    } else {
      // Fallback
      ok = evalAnswer(curSt.code, cur);
      displayOutput = ok ? "✓ Correct!" : "Error: Check your code and try again.";
    }

    const pts = ok ? PTS_PER_Q - (curSt.hintUsed ? HINT_PENALTY : 0) : 0;
    patch(qIdx, { answered: true, correct: ok, pts });
    setOutput(displayOutput);
    setCorrect(ok);
    setRunning(false);
  }, [cur, curSt, qIdx, language.id, theme.id]);

  // ── Result screen ─────────────────────────────────────────────────────────
  if (done) return (
    <ResultScreen
      theme={theme} language={language}
      questions={challenge.questions} qStates={qStates}
      totalScore={total} maxPossible={maxPts}
      timeUsed={TOTAL_SECONDS - timeLeft}
      tc={tc}
    />
  );

  // ── Timer colours ─────────────────────────────────────────────────────────
  const timerCls = timeLeft < 30
    ? "bg-red-950/50 border-red-500/50 text-red-400 animate-pulse"
    : timeLeft < 60
    ? "bg-amber-950/30 border-amber-500/40 text-amber-400"
    : "bg-brand-card border-brand-border text-slate-300";

  return (
    <div className="h-screen bg-brand-bg flex flex-col overflow-hidden">

      {/* Hint penalty warning modal */}
      {warnHint && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-brand-surface border border-amber-500/30 rounded-xl p-6 max-w-sm mx-4 shadow-2xl">
            <div className="flex items-center gap-3 mb-3">
              <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <h3 className="text-white font-bold">Use a hint?</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Using a hint deducts{" "}
              <span className="text-amber-400 font-semibold">-{HINT_PENALTY} points</span>{" "}
              from this question&apos;s possible{" "}
              <span className="text-white font-semibold">{PTS_PER_Q} points</span>.
              You can only use one hint per question.
            </p>
            <div className="flex gap-3">
              <button onClick={() => setWarnHint(false)} className="flex-1 btn-secondary py-2 text-sm">
                Cancel
              </button>
              <button
                onClick={confirmHint}
                className="flex-1 bg-amber-700 hover:bg-amber-600 text-white font-semibold py-2 rounded-lg text-sm transition-colors"
              >
                Use hint (−{HINT_PENALTY} pts)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Header ────────────────────────────────────────────────────────── */}
      <header className="border-b border-brand-border bg-brand-surface/90 backdrop-blur-md z-40 flex-shrink-0">
        <div className="flex items-center h-14 px-4 gap-3">
          <Link
            href={`/learn/${theme.id}/${language.id}`}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors text-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back</span>
          </Link>
          <div className="h-5 w-px bg-brand-border" />

          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-brand-amber" />
            <span className="font-bold text-white text-sm hidden sm:inline">Final Quest</span>
            <span className="text-slate-600 hidden sm:inline">·</span>
            <span className={`text-sm font-medium ${tc}`}>{theme.emoji} <span className="hidden sm:inline">{theme.name}</span></span>
            <span className="text-slate-600">×</span>
            <span className="text-sm text-white">{language.icon} <span className="hidden sm:inline">{language.name}</span></span>
          </div>

          <div className="ml-auto flex items-center gap-3">
            {/* Score */}
            <div className="hidden sm:flex items-center gap-1.5 bg-brand-card border border-brand-border rounded-lg px-3 py-1.5">
              <Star className="w-3.5 h-3.5 text-brand-amber fill-brand-amber" />
              <span className="text-white font-bold text-sm tabular-nums">{total}</span>
              <span className="text-slate-500 text-sm">/ {maxPts}</span>
            </div>
            {/* Timer */}
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors ${timerCls}`}>
              <Clock className="w-3.5 h-3.5" />
              <span className="font-mono font-bold text-sm tabular-nums">{fmt(timeLeft)}</span>
            </div>
          </div>
        </div>

        {/* Question tabs */}
        <div className="flex border-t border-brand-border">
          {challenge.questions.map((q, i) => {
            const st = qStates[i];
            const active = i === qIdx;
            return (
              <button
                key={q.id}
                onClick={() => goTo(i)}
                className={`flex-1 py-2 text-xs font-semibold transition-all border-b-2 ${
                  active
                    ? "border-brand-glow text-white bg-brand-glow/8"
                    : st.answered
                    ? st.correct
                      ? "border-green-500/70 text-green-400 hover:bg-green-950/20"
                      : "border-red-500/40 text-red-400/80 hover:bg-red-950/20"
                    : "border-transparent text-slate-500 hover:text-slate-300"
                }`}
              >
                <span className="hidden sm:inline">Q{i + 1} — </span>
                {st.answered
                  ? st.correct
                    ? <span className="text-green-400">✓ +{st.pts}pt</span>
                    : <span className="text-red-400/70">✗ 0pt</span>
                  : active ? "●" : "○"}
              </button>
            );
          })}
        </div>
      </header>

      {/* ── Main ──────────────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">

        {/* Left panel */}
        <div className={`w-full lg:w-[400px] flex-shrink-0 border-b lg:border-b-0 lg:border-r border-brand-border flex flex-col overflow-y-auto ${bgc}`}>
          <div className="p-5 flex-1">

            {/* Question badge */}
            <div className={`inline-flex items-center gap-1.5 border ${bc} rounded-full px-3 py-1 mb-4 text-xs font-semibold bg-brand-surface/50 ${tc}`}>
              Question {qIdx + 1} of {challenge.questions.length} · {cur.concept}
            </div>

            {/* Points pill */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex items-center gap-1.5 bg-brand-surface border border-brand-border rounded-lg px-3 py-1.5 text-xs">
                <Zap className="w-3 h-3 text-brand-amber" />
                <span className="text-slate-300">
                  {curSt.answered
                    ? `${curSt.pts} / ${PTS_PER_Q} earned`
                    : curSt.hintUsed
                    ? `Max ${PTS_PER_Q - HINT_PENALTY} pts (hint used)`
                    : `Up to ${PTS_PER_Q} pts`}
                </span>
              </div>
              {curSt.answered && (
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  curSt.correct
                    ? "bg-green-950/40 text-green-400 border border-green-500/30"
                    : "bg-red-950/40 text-red-400 border border-red-500/30"
                }`}>
                  {curSt.correct ? "✓ Correct" : "✗ Missed"}
                </span>
              )}
            </div>

            {/* Narrative */}
            <div className={`rounded-lg p-4 mb-5 border ${bc} bg-brand-surface/30`}>
              <p className="text-slate-300 text-sm leading-relaxed italic">{cur.narrative}</p>
            </div>

            {/* Mission */}
            <div className="mb-5">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">Your mission</p>
              <p className="text-slate-200 text-sm leading-relaxed whitespace-pre-line">{cur.prompt}</p>
            </div>

            {/* Hint */}
            {!curSt.answered && (
              <button
                onClick={handleHint}
                className="flex items-center gap-1.5 text-xs text-brand-amber hover:text-amber-300 transition-colors mb-2"
              >
                <Lightbulb className="w-3.5 h-3.5" />
                {curSt.hintUsed
                  ? curSt.hintVisible ? "Hide hint" : "Show hint again"
                  : `Hint (−${HINT_PENALTY} pts)`}
              </button>
            )}
            {curSt.hintVisible && (
              <div className="bg-amber-950/20 border border-amber-500/20 rounded-lg p-3 mb-4 text-xs text-slate-300 leading-relaxed">
                💡 {cur.hint}
                <p className="text-amber-700 mt-1.5">−{HINT_PENALTY} points deducted from this question.</p>
              </div>
            )}
          </div>

          {/* Bottom nav */}
          <div className="border-t border-brand-border px-5 py-3 flex items-center justify-between flex-shrink-0">
            <button
              onClick={() => goTo(qIdx - 1)}
              disabled={qIdx === 0}
              className="flex items-center gap-1 text-sm text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Prev
            </button>
            <span className="text-xs text-slate-600">{qIdx + 1} / {challenge.questions.length}</span>
            <button
              onClick={() => goTo(qIdx + 1)}
              disabled={qIdx === challenge.questions.length - 1}
              className="flex items-center gap-1 text-sm text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right panel — editor */}
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
          {/* Toolbar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-brand-border bg-brand-surface flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="text-xs text-slate-500 font-mono ml-1">
                final-q{qIdx + 1}.{ext}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => patch(qIdx, { code: cur.starterCode })}
                disabled={curSt.answered}
                title="Reset to starter code"
                className="flex items-center gap-1 text-xs text-slate-500 hover:text-white transition-colors px-2 py-1 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset
              </button>
              <button
                onClick={submit}
                disabled={running || curSt.answered}
                className="flex items-center gap-1.5 bg-brand-glow hover:bg-purple-600 text-white text-sm font-semibold px-4 py-1.5 rounded-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {running ? (
                  <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : curSt.answered ? (
                  <Check className="w-3.5 h-3.5" />
                ) : (
                  <Play className="w-3.5 h-3.5 fill-white" />
                )}
                {curSt.answered ? "Submitted" : "Submit"}
              </button>
            </div>
          </div>

          {/* Monaco */}
          <div className="flex-1 min-h-0 overflow-hidden">
            <MonacoEditor
              key={cur.id}
              language={language.monacoId}
              value={curSt.code}
              onChange={(val) => {
                if (!curSt.answered) patch(qIdx, { code: val ?? "" });
              }}
              theme="vs-dark-custom"
            />
          </div>

          {/* Terminal output — fixed height */}
          <div className="h-40 flex-shrink-0 bg-[#050e05] flex flex-col overflow-hidden border-t border-green-900/40">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-green-900/30 flex-shrink-0">
              <div className="flex gap-1">
                {[0, 1, 2].map((d) => <div key={d} className="w-2 h-2 rounded-full bg-green-900" />)}
              </div>
              <span className="text-green-900 text-xs font-mono">output</span>
              {running && (
                <span className="ml-auto flex items-center gap-1.5 text-xs text-green-700">
                  <span className="w-2.5 h-2.5 border border-green-700/50 border-t-green-500 rounded-full animate-spin" />
                  {language.id === "sql" || PISTON_LANGUAGES.has(language.id) ? "executing…" : "evaluating…"}
                </span>
              )}
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-3 font-mono text-xs">
              {output === null ? (
                <div className="flex items-center gap-1 text-green-900">
                  <span>$</span><span>submit your answer to see output</span>
                  <span className="inline-block w-[6px] h-[11px] bg-green-700/50 animate-blink ml-1" />
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="text-green-700">$</span>
                    {correct ? (
                      <>
                        <Check className="w-3 h-3 text-green-400" />
                        <span className="text-green-400 font-semibold">
                          Correct! +{qStates[qIdx].pts} points
                        </span>
                      </>
                    ) : (
                      <>
                        <X className="w-3 h-3 text-red-400" />
                        <span className="text-red-400 font-semibold">Incorrect — 0 points for this question</span>
                      </>
                    )}
                  </div>
                  <pre className={`whitespace-pre-wrap leading-relaxed mb-3 ${correct ? "text-green-400" : "text-red-400/80"}`}>
                    {output}
                  </pre>
                  {correct && qIdx < challenge.questions.length - 1 && (
                    <button
                      onClick={() => goTo(qIdx + 1)}
                      className="flex items-center gap-1.5 bg-brand-glow hover:bg-purple-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-all"
                    >
                      Next question <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                  {correct && qIdx === challenge.questions.length - 1 && (
                    <p className="text-green-400 text-xs font-semibold animate-pulse">
                      🏆 All questions answered! Calculating score…
                    </p>
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

// ─────────────────────────────────────────────────────────────────────────────
// Result screen
// ─────────────────────────────────────────────────────────────────────────────
function ResultScreen({
  theme, language, questions, qStates, totalScore, maxPossible, timeUsed, tc,
}: {
  theme: Theme; language: Language;
  questions: FinalQuestion[]; qStates: QState[];
  totalScore: number; maxPossible: number;
  timeUsed: number; tc: string;
}) {
  const pct = Math.round((totalScore / maxPossible) * 100);
  const { letter, color } = grade(pct);
  const fmtTime = (s: number) => `${Math.floor(s / 60)}m ${s % 60}s`;

  const msgs: Record<string, string> = {
    "S+": "Flawless. You didn't just pass — you mastered it.",
    "A":  "Excellent work. You clearly know your stuff.",
    "B":  "Solid showing. A few more reps and you'll be unstoppable.",
    "C":  "Not bad. Go back through the lessons and try again.",
    "D":  "Keep going — every expert was a beginner once.",
  };

  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-amber/15 border-2 border-brand-amber/30 mb-4">
            <Trophy className="w-10 h-10 text-brand-amber" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Final Quest Complete</h1>
          <p className={`font-semibold ${tc}`}>{theme.emoji} {theme.name} × {language.icon} {language.name}</p>
        </div>

        {/* Score card */}
        <div className="glass-card p-6 mb-5 text-center">
          <div className="flex items-end justify-center gap-4 mb-4">
            <div className={`text-7xl font-black leading-none ${color}`}>{letter}</div>
            <div className="pb-2 text-left">
              <p className="text-4xl font-bold text-white tabular-nums">
                {totalScore}
                <span className="text-slate-500 text-2xl font-normal">/{maxPossible}</span>
              </p>
              <p className="text-slate-500 text-sm">{pct}% · {fmtTime(timeUsed)}</p>
            </div>
          </div>
          {/* Progress bar */}
          <div className="h-2.5 bg-brand-surface rounded-full overflow-hidden mb-3">
            <div
              className={`h-full rounded-full transition-all duration-1000 ${
                pct >= 80 ? "bg-green-500" : pct >= 50 ? "bg-amber-500" : "bg-red-500"
              }`}
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="text-slate-400 text-sm italic">{msgs[letter] ?? msgs["D"]}</p>
        </div>

        {/* Per-question breakdown */}
        <div className="glass-card p-5 mb-5">
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
            Question Breakdown
          </h3>
          <div className="space-y-2.5">
            {questions.map((q, i) => {
              const s = qStates[i];
              return (
                <div key={q.id} className="flex items-center gap-3 text-sm">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                    s.correct ? "bg-green-900/50 text-green-400" : "bg-red-900/30 text-red-400/70"
                  }`}>
                    {s.correct ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-slate-300">Q{i + 1}: {q.concept}</span>
                    {s.hintUsed && (
                      <span className="text-amber-700 text-xs ml-2">(hint used −{HINT_PENALTY}pt)</span>
                    )}
                  </div>
                  <span className={`font-semibold tabular-nums ${s.correct ? "text-green-400" : "text-slate-600"}`}>
                    {s.pts}/{PTS_PER_Q}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href={`/learn/${theme.id}/${language.id}`}
            className="flex-1 btn-secondary flex items-center justify-center gap-2 py-3"
          >
            <RotateCcw className="w-4 h-4" />
            Retry Quest
          </Link>
          <Link
            href="/dashboard"
            className="flex-1 btn-primary flex items-center justify-center gap-2 py-3"
          >
            <Trophy className="w-4 h-4" />
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
