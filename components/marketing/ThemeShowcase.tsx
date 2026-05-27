"use client";

import { useState, useEffect } from "react";
import type { Theme } from "@/types";

interface Props {
  themes: Theme[];
}

const ROTATING_PHRASES = [
  { text: "you're surviving the Upside Down.", color: "text-red-400" },
  { text: "you're refining macrodata for Lumon.", color: "text-blue-400" },
  { text: "you're cooking something legendary.", color: "text-green-400" },
  { text: "you're surviving another day at Dunder Mifflin.", color: "text-yellow-400" },
  { text: "you're playing the game of thrones.", color: "text-yellow-500" },
  { text: "you're bending the simulation.", color: "text-green-300" },
  { text: "you're adventuring across the multiverse.", color: "text-cyan-400" },
  { text: "you're playing for 45.6 billion won.", color: "text-pink-400" },
  { text: "there's always money in the banana stand.", color: "text-orange-400" },
  { text: "you're everything. Ken is just Ken.", color: "text-fuchsia-400" },
  { text: "you couldn't help but wonder…", color: "text-rose-400" },
  { text: "those who want respect, give respect.", color: "text-red-500" },
];

const THEME_CHALLENGE_PREVIEWS: Record<string, string[]> = {
  "stranger-things": [
    "Eleven's Powers — Variables",
    "Decoding Will's Messages — Functions",
    "The Party's Members — Lists & Loops",
    "The Mind Flayer Detector — Conditionals",
    "Hopper's Case Files — Dictionaries",
  ],
  "severance": [
    "Your Innie's ID Badge — Strings",
    "Macrodata Refinement — Arrays",
    "Lumon Employee Record — Objects",
    "The Wellness Session — Functions",
    "Binning the Numbers — Loops",
  ],
  "breaking-bad": [
    "The Product Inventory — SELECT",
    "Finding the Good Stuff — WHERE",
    "Top Batches — ORDER BY & LIMIT",
    "Counting Saul's Clients — Aggregates",
    "Distribution Routes — GROUP BY",
  ],
  "the-office": [
    "Michael's Bonus Math — Variables",
    "Beet Farm Inventory — Lists & Loops",
    "Dwight's Schrute Facts — Objects",
    "Is This Funny? — Conditionals",
    "Schrute Buck Converter — Functions",
  ],
  "game-of-thrones": [
    "House Allegiances — Variables",
    "The Night's Watch Roster — Arrays",
    "Dragon Census — Conditionals",
    "Gold in the Treasury — Functions",
    "Preparing for Winter — Loops",
  ],
  "the-matrix": [
    "Red vs Blue Pill — Variables",
    "Agent Detection — Conditionals",
    "Simulation Parameters — Arrays",
    "Rule Bending — Functions",
    "Exit Protocols — Loops",
  ],
  "rick-and-morty": [
    "Portal Gun Config — Variables",
    "Alien Species Classifier — Functions",
    "Council of Ricks — Arrays",
    "Szechuan Sauce Logic — Conditionals",
    "Multiverse Scanner — Loops",
  ],
  "squid-game": [
    "Player Registration — SELECT",
    "Survivors Only — WHERE",
    "Final Standings — ORDER BY & LIMIT",
    "Elimination Totals — Aggregates",
    "Games by Round — GROUP BY",
  ],
  "arrested-development": [
    "Banana Stand Inventory — Variables",
    "Bluth Venture List — Lists",
    "Her? — Conditionals",
    "Profit Calculator — Functions",
    "Gob's Illusions Count — Loops",
  ],
  "barbie": [
    "Barbie's Profile — Variables",
    "Career Roster — Lists",
    "Is He Kenough? — Conditionals",
    "Outfit Cost — Functions",
    "Perfect Days in Barbieland — Loops",
  ],
  "sex-and-the-city": [
    "Column Stats — Variables",
    "Brunch Guest List — Lists",
    "Second Date? — Conditionals",
    "Ex-Boyfriend File — Objects",
    "Word Count Total — Loops",
  ],
  "sopranos": [
    "Waste Management Ledger — Variables",
    "Crew Roster — Lists",
    "Loyalty Check — Conditionals",
    "The Cut Calculator — Functions",
    "Weekly Earnings Tally — Loops",
  ],
};

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
          <h2 className="text-4xl font-bold text-white mb-4">
            Pick your universe
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Every challenge is wrapped in a story. You&apos;re not solving
            algorithms —{" "}
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
            <ThemeCard
              key={theme.id}
              theme={theme}
              challenges={THEME_CHALLENGE_PREVIEWS[theme.id] ?? []}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ThemeCard({ theme, challenges }: { theme: Theme; challenges: string[] }) {
  return (
    <div
      className={`
        relative glass-card border
        ${borderMap[theme.id] ?? "border-brand-border hover:border-brand-muted"}
        bg-gradient-to-b ${gradientMap[theme.id] ?? "from-brand-surface to-brand-card"}
        p-6 transition-all duration-300
        ${glowMap[theme.id] ?? ""} hover:scale-[1.02] group
      `}
    >
      {/* Emoji + title */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="text-4xl mb-2 block">{theme.emoji}</span>
          <h3 className={`text-xl font-bold ${theme.colorClass}`}>{theme.name}</h3>
          <p className="text-slate-400 text-sm mt-1">{theme.setting}</p>
        </div>
      </div>

      {/* Tagline */}
      <p className="text-slate-300 text-sm mb-5 italic">&ldquo;{theme.tagline}&rdquo;</p>

      {/* Challenge list */}
      <ul className="space-y-2 mb-6">
        {challenges.map((challenge, i) => {
          const [challengeTitle, concept] = challenge.split(" — ");
          return (
            <li key={i} className="flex items-center gap-2 text-sm">
              <span className="w-5 h-5 rounded-full bg-brand-muted text-slate-300 text-xs flex items-center justify-center flex-shrink-0">
                {i + 1}
              </span>
              <span className="text-slate-300">{challengeTitle}</span>
              <span className="text-slate-600 ml-auto text-xs hidden sm:block">{concept}</span>
            </li>
          );
        })}
      </ul>

      {/* Characters */}
      <div className="pt-4 border-t border-brand-border/50">
        <p className="text-xs text-slate-500 mb-2">Characters you&apos;ll meet</p>
        <div className="flex flex-wrap gap-1">
          {theme.characters.slice(0, 4).map((char) => (
            <span
              key={char}
              className="text-xs bg-brand-surface border border-brand-border px-2 py-0.5 rounded-full text-slate-400"
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
