import Link from "next/link";
import type { Theme } from "@/types";
import { ArrowRight } from "lucide-react";

interface Props {
  themes: Theme[];
}

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
};

export default function ThemeShowcase({ themes }: Props) {
  return (
    <section id="themes" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Pick your universe
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Every challenge is wrapped in a story. You're not solving
            algorithms — you're surviving the Upside Down.
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
  const gradientMap: Record<string, string> = {
    "stranger-things": "from-red-950/60 to-brand-card",
    "severance": "from-blue-950/60 to-brand-card",
    "breaking-bad": "from-green-950/60 to-brand-card",
  };

  const borderMap: Record<string, string> = {
    "stranger-things": "border-red-500/30 hover:border-red-500/60",
    "severance": "border-blue-500/30 hover:border-blue-500/60",
    "breaking-bad": "border-green-500/30 hover:border-green-500/60",
  };

  const glowMap: Record<string, string> = {
    "stranger-things": "shadow-glow-red",
    "severance": "shadow-glow-blue",
    "breaking-bad": "shadow-glow-green",
  };

  return (
    <div
      className={`
        relative glass-card border ${borderMap[theme.id]}
        bg-gradient-to-b ${gradientMap[theme.id]}
        p-6 transition-all duration-300 hover:${glowMap[theme.id]} hover:scale-[1.02] group
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
      <p className="text-slate-300 text-sm mb-5 italic">"{theme.tagline}"</p>

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
        <p className="text-xs text-slate-500 mb-2">Characters you'll meet</p>
        <div className="flex flex-wrap gap-1">
          {theme.characters.slice(0, 4).map((char) => (
            <span key={char} className="text-xs bg-brand-surface border border-brand-border px-2 py-0.5 rounded-full text-slate-400">
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
