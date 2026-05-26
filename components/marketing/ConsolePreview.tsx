"use client";

import { useState } from "react";
import { Play, ChevronRight, Lightbulb } from "lucide-react";

const DEMO_CHALLENGE = {
  themedTitle: "🔴 Eleven's Powers",
  narrative:
    "Hopper needs your help tracking Eleven's abilities. Store her data so the lab can't erase it.",
  prompt: "Create a variable `name` = \"Eleven\" and `power_level` = 11. Then print them both.",
  starterCode: `# Eleven's Powers
name = "Eleven"
power_level = ___

print(name)
print(power_level)`,
  solution: `# Eleven's Powers
name = "Eleven"
power_level = 11

print(name)
print(power_level)`,
};

export default function ConsolePreview() {
  const [code, setCode] = useState(DEMO_CHALLENGE.starterCode);
  const [output, setOutput] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [running, setRunning] = useState(false);
  const [success, setSuccess] = useState(false);

  const runCode = () => {
    setRunning(true);
    setTimeout(() => {
      const solved = code.includes("11") && code.includes("Eleven");
      if (solved) {
        setOutput("Eleven\n11");
        setSuccess(true);
      } else {
        setOutput("Error: Try filling in the missing value!");
        setSuccess(false);
      }
      setRunning(false);
    }, 600);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Code right in your browser
          </h2>
          <p className="text-slate-400 text-lg">
            No downloads. No setup. Just open and start coding — with full syntax highlighting.
          </p>
        </div>

        {/* Mock editor */}
        <div className="glass-card border border-brand-border overflow-hidden shadow-card">
          {/* Title bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-brand-border bg-brand-surface">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-slate-400 ml-2 font-mono">challenge-01.py</span>
            </div>
            <span className="text-xs text-slate-500">🐍 Python</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: challenge info */}
            <div className="p-6 border-b lg:border-b-0 lg:border-r border-brand-border">
              {/* Theme badge */}
              <div className="inline-flex items-center gap-1.5 bg-red-950/40 border border-red-500/30 rounded-full px-3 py-1 mb-4">
                <span className="text-xs font-semibold text-red-400">Stranger Things</span>
                <ChevronRight className="w-3 h-3 text-red-500" />
                <span className="text-xs text-red-300">Challenge 1 of 5</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-3">{DEMO_CHALLENGE.themedTitle}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 italic">
                {DEMO_CHALLENGE.narrative}
              </p>

              <div className="bg-brand-surface rounded-lg p-4 border border-brand-border mb-4">
                <p className="text-xs text-slate-500 mb-1 font-semibold uppercase tracking-wider">Your mission</p>
                <p className="text-slate-300 text-sm">{DEMO_CHALLENGE.prompt}</p>
              </div>

              <button
                onClick={() => setShowHint(!showHint)}
                className="flex items-center gap-1.5 text-xs text-brand-amber hover:text-amber-300 transition-colors"
              >
                <Lightbulb className="w-3.5 h-3.5" />
                {showHint ? "Hide hint" : "Show hint"}
              </button>
              {showHint && (
                <p className="mt-2 text-xs text-slate-400 bg-amber-950/20 border border-amber-500/20 rounded-lg px-3 py-2">
                  💡 Replace the blank with the number 11 — Eleven's signature number.
                </p>
              )}
            </div>

            {/* Right: code editor + output */}
            <div className="flex flex-col">
              {/* Code area */}
              <div className="flex-1 relative">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-40 bg-[#1e1e2e] text-slate-200 font-mono text-sm p-4 resize-none outline-none border-b border-brand-border"
                  spellCheck={false}
                />
              </div>

              {/* Run button */}
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

              {/* Output panel */}
              <div className="h-24 bg-[#0d0d14] p-4 font-mono text-sm">
                {output === null ? (
                  <span className="text-slate-600">Output will appear here...</span>
                ) : success ? (
                  <div>
                    <span className="text-green-400 text-xs font-semibold block mb-1">✓ Correct!</span>
                    <span className="text-slate-300 whitespace-pre">{output}</span>
                  </div>
                ) : (
                  <span className="text-red-400">{output}</span>
                )}
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-slate-500 text-sm mt-6">
          This is a preview. Sign up for the full interactive console with syntax highlighting, hints, and progress tracking.
        </p>
      </div>
    </section>
  );
}
