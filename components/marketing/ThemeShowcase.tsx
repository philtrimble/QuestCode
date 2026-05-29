"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Theme } from "@/types";
import { ALL_CHALLENGES } from "@/lib/challenges";

// ── Static "random-looking" default language per show ─────────────────────────
// Chosen to give a varied spread across all 5 languages at first glance.
const DEFAULT_LANG: Record<string, string> = {
  "stranger-things":      "javascript",
  "severance":            "python",
  "breaking-bad":         "sql",
  "the-office":           "java",
  "game-of-thrones":      "python",
  "the-matrix":           "go",
  "rick-and-morty":       "javascript",
  "squid-game":           "sql",
  "arrested-development": "python",
  "barbie":               "javascript",
  "sex-and-the-city":     "java",
  "sopranos":             "go",
};

const LANG_OPTIONS = [
  { id: "python",     icon: "🐍", label: "Python" },
  { id: "javascript", icon: "⚡", label: "JS"     },
  { id: "sql",        icon: "🗄️", label: "SQL"    },
  { id: "java",       icon: "☕", label: "Java"   },
  { id: "go",         icon: "🔷", label: "Go"     },
];

const ROTATING_PHRASES = [
  { text: "you're surviving the Upside Down.",             color: "text-red-400"     },
  { text: "you're refining macrodata for Lumon.",          color: "text-blue-400"    },
  { text: "you're cooking something legendary.",           color: "text-green-400"   },
  { text: "you're surviving another day at Dunder Mifflin.", color: "text-yellow-400" },
  { text: "you're playing the game of thrones.",           color: "text-yellow-500"  },
  { text: "you're bending the simulation.",                color: "text-green-300"   },
  { text: "you're adventuring across the multiverse.",     color: "text-cyan-400"    },
  { text: "you're playing for 45.6 billion won.",          color: "text-pink-400"    },
  { text: "there's always money in the banana stand.",     color: "text-orange-400"  },
  { text: "you're everything. Ken is just Ken.",           color: "text-fuchsia-400" },
  { text: "you couldn't help but wonder…",                 color: "text-rose-400"    },
  { text: "those who want respect, give respect.",         color: "text-red-500"     },
];

const gradientMap: Record<string, string> = {
  "stranger-things":      "from-red-950/60 to-brand-card",
  "severance":            "from-blue-950/60 to-brand-card",
  "breaking-bad":         "from-green-950/60 to-brand-card",
  "the-office":           "from-yellow-950/60 to-brand-card",
  "game-of-thrones":      "from-yellow-950/70 to-brand-card",
  "the-matrix":           "from-green-950/60 to-brand-card",
  "rick-and-morty":       "from-cyan-950/60 to-brand-card",
  "squid-game":           "from-pink-950/60 to-brand-card",
  "arrested-development": "from-orange-950/60 to-brand-card",
  "barbie":               "from-fuchsia-950/60 to-brand-card",
  "sex-and-the-city":     "from-rose-950/60 to-brand-card",
  "sopranos":             "from-red-950/70 to-brand-card",
};

const borderMap: Record<string, string> = {
  "stranger-things":      "border-red-500/30 hover:border-red-500/60",
  "severance":            "border-blue-500/30 hover:border-blue-500/60",
  "breaking-bad":         "border-green-500/30 hover:border-green-500/60",
  "the-office":           "border-yellow-500/30 hover:border-yellow-500/60",
  "game-of-thrones":      "border-yellow-600/30 hover:border-yellow-600/60",
  "the-matrix":           "border-green-400/30 hover:border-green-400/60",
  "rick-and-morty":       "border-cyan-500/30 hover:border-cyan-500/60",
  "squid-game":           "border-pink-500/30 hover:border-pink-500/60",
  "arrested-development": "border-orange-500/30 hover:border-orange-500/60",
  "barbie":               "border-fuchsia-500/30 hover:border-fuchsia-500/60",
  "sex-and-the-city":     "border-rose-500/30 hover:border-rose-500/60",
  "sopranos":             "border-red-800/30 hover:border-red-700/60",
};

const glowMap: Record<string, string> = {
  "stranger-things":      "hover:shadow-glow-red",
  "severance":            "hover:shadow-glow-blue",
  "breaking-bad":         "hover:shadow-glow-green",
  "the-office":           "hover:shadow-glow-yellow",
  "game-of-thrones":      "hover:shadow-glow-gold",
  "the-matrix":           "hover:shadow-glow-matrix",
  "rick-and-morty":       "hover:shadow-glow-cyan",
  "squid-game":           "hover:shadow-glow-pink",
  "arrested-development": "hover:shadow-glow-orange",
  "barbie":               "hover:shadow-glow-fuchsia",
  "sex-and-the-city":     "hover:shadow-glow-rose",
  "sopranos":             "hover:shadow-glow-crimson",
};

// ── Section ───────────────────────────────────────────────────────────────────

interface Props { themes: Theme[] }

export default function ThemeShowcase({ themes }: Props) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setPhraseIndex((i) => (i + 1) % ROTATING_PHRASES.length);
        setVisible(true);
      }, 300);
    }, 3600);
    return () => clearInterval(interval);
  }, []);

  const phrase = ROTATING_PHRASES[phraseIndex];

  return (
    <section id="themes" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Pick your universe</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Every challenge is wrapped in a story. You&apos;re not solving algorithms —{" "}
            <span
              className={`transition-opacity duration-300 ${phrase.color} ${
                visible ? "opacity-100" : "opacity-0"
              }`}
            >
              {phrase.text}
            </span>
          </p>
        </div>

        {/* Theme cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {themes.map((theme) => (
            <ThemeCard key={theme.id} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Theme card ────────────────────────────────────────────────────────────────

function ThemeCard({ theme }: { theme: Theme }) {
  const defaultLang = DEFAULT_LANG[theme.id] ?? "python";
  const [activeLang, setActiveLang] = useState(defaultLang);
  const [fade, setFade] = useState(true);

  const switchLang = (lang: string) => {
    if (lang === activeLang) return;
    setFade(false);
    setTimeout(() => {
      setActiveLang(lang);
      setFade(true);
    }, 160);
  };

  const challenges = ALL_CHALLENGES[`${theme.id}-${activeLang}`] ?? [];
  const preview = challenges[0] ?? null;

  const activeLangMeta = LANG_OPTIONS.find((l) => l.id === activeLang);

  return (
    <div
      className={`
        relative glass-card border flex flex-col
        ${borderMap[theme.id] ?? "border-brand-border hover:border-brand-muted"}
        bg-gradient-to-b ${gradientMap[theme.id] ?? "from-brand-surface to-brand-card"}
        p-6 transition-all duration-300
        ${glowMap[theme.id] ?? ""} hover:scale-[1.02] group
      `}
    >
      {/* Show identity */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="text-3xl mb-1.5 block">{theme.emoji}</span>
          <h3 className={`text-lg font-bold ${theme.colorClass}`}>{theme.name}</h3>
          <p className="text-slate-500 text-xs mt-0.5">{theme.setting}</p>
        </div>
        <Link
          href={`/learn/${theme.id}/${activeLang}`}
          className="text-xs text-slate-500 hover:text-white flex items-center gap-0.5 transition-colors mt-1"
        >
          Try it <ChevronRight className="w-3 h-3" />
        </Link>
      </div>

      {/* Tagline */}
      <p className="text-slate-400 text-xs mb-4 italic">&ldquo;{theme.tagline}&rdquo;</p>

      {/* Language switcher */}
      <div className="flex gap-1 mb-4 flex-wrap">
        {LANG_OPTIONS.map((lang) => {
          const isActive = lang.id === activeLang;
          return (
            <button
              key={lang.id}
              onClick={() => switchLang(lang.id)}
              className={`flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium transition-all ${
                isActive
                  ? "bg-brand-surface text-white border border-brand-muted"
                  : "text-slate-500 hover:text-slate-300 border border-transparent hover:border-brand-border"
              }`}
            >
              <span>{lang.icon}</span>
              <span>{lang.label}</span>
            </button>
          );
        })}
      </div>

      {/* Challenge preview — fades when switching language */}
      <div
        className={`flex-1 flex flex-col transition-opacity duration-150 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {preview ? (
          <>
            {/* Challenge label */}
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-[10px] font-semibold px-2 py-0.5 rounded-full border"
                style={{
                  color: theme.accentColor,
                  borderColor: theme.accentColor + "40",
                  backgroundColor: theme.accentColor + "12",
                }}
              >
                Challenge 1
              </span>
              <span className="text-[10px] text-slate-500 font-medium truncate">
                {preview.concept}
              </span>
              <span className="ml-auto text-[10px] text-slate-600">
                {activeLangMeta?.icon} {activeLangMeta?.label}
              </span>
            </div>

            {/* Themed title */}
            <p className="text-white text-sm font-semibold mb-2 leading-snug">
              {preview.themedTitle}
            </p>

            {/* Narrative */}
            <div
              className="rounded-lg px-3 py-2.5 mb-3 border text-xs text-slate-300 italic leading-relaxed line-clamp-3"
              style={{
                borderColor: theme.accentColor + "25",
                backgroundColor: theme.accentColor + "08",
              }}
            >
              {preview.narrative}
            </div>

            {/* Challenge prompt — the actual mission */}
            <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
              {preview.prompt}
            </p>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-slate-600 text-xs">
            No challenges yet for this combination
          </div>
        )}
      </div>

      {/* CTA */}
      <Link
        href={`/learn/${theme.id}/${activeLang}`}
        className="mt-4 w-full flex items-center justify-center gap-1.5 text-xs font-semibold py-2 px-4 rounded-lg border transition-all"
        style={{
          color: theme.accentColor,
          borderColor: theme.accentColor + "40",
          backgroundColor: theme.accentColor + "10",
        }}
      >
        Start {theme.name} × {activeLangMeta?.label ?? activeLang}
        <ChevronRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}
