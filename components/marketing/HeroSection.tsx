"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const LANGUAGES = [
  { name: "Python",     icon: "🐍" },
  { name: "JavaScript", icon: "⚡" },
  { name: "SQL",        icon: "🗄️" },
  { name: "Java",       icon: "☕" },
  { name: "Go",         icon: "🔷" },
];

// All 12 shows with their accent colours
const SHOWS = [
  { label: "⚗️ Breaking Bad",           color: "text-green-400",   border: "border-green-500/30"   },
  { label: "🔦 Stranger Things",         color: "text-red-400",     border: "border-red-500/30"     },
  { label: "🛗 Severance",               color: "text-blue-400",    border: "border-blue-500/30"    },
  { label: "⚔️ Game of Thrones",         color: "text-yellow-500",  border: "border-yellow-600/30"  },
  { label: "📋 The Office",              color: "text-amber-400",   border: "border-amber-500/30"   },
  { label: "💊 The Matrix",              color: "text-lime-400",    border: "border-lime-500/30"    },
  { label: "🥒 Rick & Morty",            color: "text-cyan-400",    border: "border-cyan-500/30"    },
  { label: "🦑 Squid Game",              color: "text-pink-400",    border: "border-pink-500/30"    },
  { label: "🍌 Arrested Development",    color: "text-orange-400",  border: "border-orange-500/30"  },
  { label: "👗 Barbie",                  color: "text-fuchsia-400", border: "border-fuchsia-500/30" },
  { label: "👠 Sex and the City",        color: "text-rose-400",    border: "border-rose-500/30"    },
  { label: "🍝 The Sopranos",            color: "text-red-600",     border: "border-red-800/30"     },
];

// ── Individual pill — manages its own cycling state ───────────────────────────
function ShowPill({
  label,
  color,
  border,
  seed,
}: {
  label: string;
  color: string;
  border: string;
  /** Index of this pill — drives stagger delay, start language, and cycle speed */
  seed: number;
}) {
  // Each pill starts on a different language so they're immediately varied
  const [langIdx, setLangIdx] = useState(seed % LANGUAGES.length);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let mounted = true;
    let cycleId: ReturnType<typeof setInterval>;

    // Spread pill starts across ~9.6 s so at most 1–2 change at the same time
    const startDelay = seed * 800;

    // Each pill cycles every 5–8 s — slow enough to read, varied enough to
    // avoid synchronising. Prime multiplier (173) keeps the distribution uneven.
    const cyclePeriod = 5000 + (seed * 173) % 3000;

    const delayId = setTimeout(() => {
      cycleId = setInterval(() => {
        if (!mounted) return;

        // Fade out
        setVisible(false);

        // Wait until the fade-out transition has fully completed (450 ms)
        // plus a 100 ms buffer before swapping text, then fade back in.
        // The buffer ensures the old text is never visible when the new one appears.
        setTimeout(() => {
          if (!mounted) return;
          setLangIdx((i) => (i + 1) % LANGUAGES.length);
          setVisible(true);
        }, 550);
      }, cyclePeriod);
    }, startDelay);

    return () => {
      mounted = false;
      clearTimeout(delayId);
      if (cycleId) clearInterval(cycleId);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const lang = LANGUAGES[langIdx];

  return (
    <div
      className={`flex items-center gap-1.5 border ${border} bg-brand-card/60 px-3 py-1.5 rounded-full text-sm backdrop-blur-sm select-none`}
    >
      <span className={`font-medium ${color} whitespace-nowrap`}>{label}</span>
      <ChevronRight className={`w-3.5 h-3.5 ${color} opacity-60 flex-shrink-0`} />
      {/* Fixed-width slot so the pill never resizes during cycling */}
      <span className="inline-flex items-center gap-1 w-[108px] overflow-hidden">
        <span
          className="text-slate-300 font-medium whitespace-nowrap transition-opacity duration-[450ms]"
          style={{ opacity: visible ? 1 : 0 }}
        >
          {lang.icon} {lang.name}
        </span>
      </span>
    </div>
  );
}

// ── Hero section ──────────────────────────────────────────────────────────────
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Scanline */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-brand-neon/30 to-transparent animate-scan" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-brand-card border border-brand-border rounded-full px-4 py-1.5 mb-8 text-sm text-slate-300">
          <span className="text-brand-amber">🎬</span>
          <span>12 iconic shows · 5 languages · AI-era coding skills</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
          Learn to code through{" "}
          <span className="gradient-text text-glow-purple">
            the shows you love.
          </span>
        </h1>

        {/* All 12 show pills — each cycles through all 5 languages independently */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-6 mt-6">
          {SHOWS.map(({ label, color, border }, i) => (
            <ShowPill
              key={label}
              label={label}
              color={color}
              border={border}
              seed={i}
            />
          ))}
        </div>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Themed coding challenges built around characters and storylines you already
          know — so skills actually stick. And once you understand what code does,
          your AI prompts get sharper, you catch mistakes, and you go from passenger
          to builder.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Link href="/signup" className="btn-primary flex items-center gap-2 text-base px-8 py-4">
            Start learning free
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/#themes" className="btn-secondary flex items-center gap-2 text-base px-8 py-4">
            Browse all 12 shows
          </Link>
        </div>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
          <div className="flex -space-x-2">
            {["bg-purple-500", "bg-blue-500", "bg-green-500", "bg-red-500", "bg-amber-500"].map((c, i) => (
              <div key={i} className={`w-7 h-7 rounded-full ${c} border-2 border-brand-bg`} />
            ))}
          </div>
          <span>Join 2,400+ learners already coding through their favorite shows</span>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-bg to-transparent" />
    </section>
  );
}
