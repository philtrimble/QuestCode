"use client";

import { useState, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import { Play, Lightbulb, ChevronDown } from "lucide-react";
import { THEME_LIST } from "@/lib/themes";
import { LANGUAGE_LIST } from "@/lib/languages";
import { getChallenges } from "@/lib/challenges";
import { SIMULATOR_OUTPUTS } from "@/lib/simulator-outputs";
import type { ThemeId, LanguageId } from "@/types";

const MonacoEditor = dynamic(() => import("@/components/editor/MonacoEditor"), { ssr: false });

const THEME_COLORS: Record<string, { badge: string; text: string; border: string; glow: string }> = {
  "stranger-things":  { badge: "bg-red-950/50 border-red-500/40",   text: "text-red-400",    border: "border-red-500/30",    glow: "shadow-[0_0_30px_rgba(239,68,68,0.15)]" },
  "severance":        { badge: "bg-blue-950/50 border-blue-500/40",  text: "text-blue-400",   border: "border-blue-500/30",   glow: "shadow-[0_0_30px_rgba(59,130,246,0.15)]" },
  "breaking-bad":     { badge: "bg-green-950/50 border-green-500/40",text: "text-green-400",  border: "border-green-500/30",  glow: "shadow-[0_0_30px_rgba(34,197,94,0.15)]" },
  "the-office":       { badge: "bg-yellow-950/50 border-yellow-500/40",text: "text-yellow-400",border: "border-yellow-500/30", glow: "shadow-[0_0_30px_rgba(245,158,11,0.15)]" },
  "game-of-thrones":  { badge: "bg-yellow-950/50 border-yellow-600/40",text: "text-yellow-500",border: "border-yellow-600/30", glow: "shadow-[0_0_30px_rgba(180,83,9,0.15)]" },
  "the-matrix":       { badge: "bg-green-950/50 border-green-400/40",text: "text-green-300",  border: "border-green-400/30",  glow: "shadow-[0_0_30px_rgba(0,255,65,0.15)]" },
  "rick-and-morty":   { badge: "bg-cyan-950/50 border-cyan-500/40",  text: "text-cyan-400",   border: "border-cyan-500/30",   glow: "shadow-[0_0_30px_rgba(6,182,212,0.15)]" },
  "squid-game":           { badge: "bg-pink-950/50 border-pink-500/40",   text: "text-pink-400",   border: "border-pink-500/30",   glow: "shadow-[0_0_30px_rgba(236,72,153,0.15)]" },
  "arrested-development": { badge: "bg-orange-950/50 border-orange-500/40",text: "text-orange-400", border: "border-orange-500/30", glow: "shadow-[0_0_30px_rgba(249,115,22,0.15)]" },
  "barbie":               { badge: "bg-fuchsia-950/50 border-fuchsia-500/40",text: "text-fuchsia-400",border: "border-fuchsia-500/30",glow: "shadow-[0_0_30px_rgba(217,70,239,0.15)]" },
  "sex-and-the-city":     { badge: "bg-rose-950/50 border-rose-500/40",    text: "text-rose-400",   border: "border-rose-500/30",   glow: "shadow-[0_0_30px_rgba(244,63,94,0.15)]" },
  "sopranos":             { badge: "bg-red-950/50 border-red-800/40",       text: "text-red-400",    border: "border-red-800/30",    glow: "shadow-[0_0_30px_rgba(153,27,27,0.15)]" },
};

export default function ConsolePreview() {
  const [selectedTheme, setSelectedTheme] = useState<ThemeId>("stranger-things");
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageId>("python");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [running, setRunning] = useState(false);
  const [success, setSuccess] = useState(false);

  const challenges = useMemo(
    () => getChallenges(selectedTheme, selectedLanguage),
    [selectedTheme, selectedLanguage]
  );
  const challenge = challenges[0];
  const theme = THEME_LIST.find((t) => t.id === selectedTheme)!;
  const language = LANGUAGE_LIST.find((l) => l.id === selectedLanguage)!;
  const colors = THEME_COLORS[selectedTheme] ?? THEME_COLORS["stranger-things"];

  useEffect(() => {
    setCode(challenge?.starterCode ?? "// No challenge available for this combo yet.");
    setOutput(null);
    setSuccess(false);
    setShowHint(false);
  }, [selectedTheme, selectedLanguage, challenge]);

  const runCode = () => {
    if (!challenge) return;
    setRunning(true);
    setTimeout(() => {
      const norm = code.toLowerCase().replace(/\s+/g, " ");
      const firstTestExpected = challenge.testCases[0]?.expected ?? "";
      const solved = challenge.testCases.every((tc) =>
        tc.expected.split("\n").every((word) => norm.includes(word.toLowerCase()))
      );
      if (solved) {
        setOutput(SIMULATOR_OUTPUTS[challenge.id] ?? firstTestExpected);
        setSuccess(true);
      } else {
        setOutput("Error: Output doesn't match. Check your code and try again.");
        setSuccess(false);
      }
      setRunning(false);
    }, 700);
  };

  const fileExt: Record<string, string> = {
    python: "py", javascript: "js", java: "java", sql: "sql", go: "go",
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Section background to make it pop */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-brand-surface/40 to-brand-bg pointer-events-none" />
      <div className="absolute inset-0 border-y border-brand-border/50 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white mb-4">
            Code right in your browser
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            No downloads. No setup. Just open and start coding — with full syntax highlighting.
          </p>

          {/* Theme + Language dropdowns */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-slate-500 text-sm">Try it with:</span>

            {/* Theme dropdown */}
            <div className="relative">
              <select
                value={selectedTheme}
                onChange={(e) => setSelectedTheme(e.target.value as ThemeId)}
                className="appearance-none bg-brand-surface border border-brand-border hover:border-brand-muted text-white text-sm font-medium pl-3 pr-8 py-2 rounded-lg cursor-pointer outline-none transition-colors focus:border-brand-glow"
              >
                {THEME_LIST.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.emoji} {t.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
            </div>

            <span className="text-slate-600">×</span>

            {/* Language dropdown */}
            <div className="relative">
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value as LanguageId)}
                className="appearance-none bg-brand-surface border border-brand-border hover:border-brand-muted text-white text-sm font-medium pl-3 pr-8 py-2 rounded-lg cursor-pointer outline-none transition-colors focus:border-brand-glow"
              >
                {LANGUAGE_LIST.map((l) => (
                  <option key={l.id} value={l.id}>
                    {l.icon} {l.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Mock editor */}
        <div className={`rounded-xl border ${colors.border} overflow-hidden ${colors.glow} transition-all duration-500`}>
          {/* Title bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-brand-border bg-brand-surface">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-slate-400 ml-2 font-mono">
                challenge-01.{fileExt[selectedLanguage] ?? "txt"}
              </span>
            </div>
            <span className={`text-xs font-medium ${colors.text}`}>
              {theme.emoji} {theme.name} · {language.icon} {language.name}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: challenge info */}
            <div className="p-6 border-b lg:border-b-0 lg:border-r border-brand-border bg-brand-bg/40">
              <div className={`inline-flex items-center gap-1.5 ${colors.badge} border rounded-full px-3 py-1 mb-4`}>
                <span className={`text-xs font-semibold ${colors.text}`}>{theme.name}</span>
                <span className="text-slate-600 text-xs">·</span>
                <span className="text-xs text-slate-400">Challenge 1 of {challenges.length || 5}</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-3">
                {challenge?.themedTitle ?? "Loading..."}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 italic">
                {challenge?.narrative ?? "Select a theme and language to get started."}
              </p>

              <div className="bg-brand-surface/80 rounded-lg p-4 border border-brand-border mb-4">
                <p className="text-xs text-slate-500 mb-1 font-semibold uppercase tracking-wider">Your mission</p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {challenge?.prompt ?? ""}
                </p>
              </div>

              {challenge && (
                <>
                  <button
                    onClick={() => setShowHint(!showHint)}
                    className="flex items-center gap-1.5 text-xs text-brand-amber hover:text-amber-300 transition-colors"
                  >
                    <Lightbulb className="w-3.5 h-3.5" />
                    {showHint ? "Hide hint" : "Show hint"}
                  </button>
                  {showHint && (
                    <p className="mt-2 text-xs text-slate-400 bg-amber-950/20 border border-amber-500/20 rounded-lg px-3 py-2">
                      💡 {challenge.hint}
                    </p>
                  )}
                </>
              )}
            </div>

            {/* Right: code editor + output */}
            <div className="flex flex-col">
              {/* Code area — Monaco editor with syntax highlighting */}
              <div className="h-44 border-b border-brand-border">
                <MonacoEditor
                  language={language.monacoId}
                  value={code}
                  onChange={(val) => setCode(val ?? "")}
                />
              </div>

              {/* Run button bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-brand-border bg-brand-surface">
                <span className="text-xs text-slate-500">Edit the code above, then run it</span>
                <button
                  onClick={runCode}
                  disabled={running}
                  className="flex items-center gap-1.5 bg-brand-glow hover:bg-purple-600 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all disabled:opacity-50"
                >
                  {running ? (
                    <span className="inline-block w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Play className="w-3 h-3 fill-white" />
                  )}
                  Run
                </button>
              </div>

              {/* Terminal output panel */}
              <div className="h-48 overflow-y-auto bg-[#050e05] border-t-2 border-green-900/60 p-4 font-mono text-xs">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-900" />
                    <div className="w-2 h-2 rounded-full bg-green-900" />
                    <div className="w-2 h-2 rounded-full bg-green-900" />
                  </div>
                  <span className="text-green-900 text-xs font-mono">terminal</span>
                </div>
                {output === null ? (
                  <div className="flex items-center gap-1">
                    <span className="text-green-700 text-xs">$</span>
                    <span className="text-green-900 text-xs">run program</span>
                    <span className="inline-block w-[6px] h-[11px] bg-green-700/50 animate-blink ml-1" />
                  </div>
                ) : success ? (
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <span className="text-green-700 text-xs">$</span>
                      <span className="text-green-500 text-xs font-semibold">✓ Correct!</span>
                    </div>
                    <span className="text-green-400 whitespace-pre text-xs">{output}</span>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <span className="text-green-700 text-xs">$</span>
                      <span className="text-red-400 text-xs font-semibold">Error</span>
                    </div>
                    <span className="text-red-400 text-xs">{output}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-slate-600 text-sm mt-6">
          This is a live preview — sign up for full syntax highlighting, hints, and progress tracking.
        </p>
      </div>
    </section>
  );
}
