import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

// A handful of show → language pairings shown in the headline zone.
// Each uses the show's accent color.
const FEATURED_PAIRINGS = [
  { show: "⚗️ Breaking Bad",      language: "Python",     color: "text-green-400",   border: "border-green-500/30"  },
  { show: "🔦 Stranger Things",   language: "SQL",        color: "text-red-400",     border: "border-red-500/30"    },
  { show: "🛗 Severance",         language: "JavaScript", color: "text-blue-400",    border: "border-blue-500/30"   },
  { show: "⚔️ Game of Thrones",   language: "Java",       color: "text-yellow-500",  border: "border-yellow-600/30" },
];

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

        {/* Show → Language pairings — the mechanism, shown immediately */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 mt-6">
          {FEATURED_PAIRINGS.map(({ show, language, color, border }) => (
            <div
              key={show}
              className={`flex items-center gap-1.5 border ${border} bg-brand-card/60 px-3 py-1.5 rounded-full text-sm backdrop-blur-sm`}
            >
              <span className={`font-medium ${color}`}>{show}</span>
              <ChevronRight className={`w-3.5 h-3.5 ${color} opacity-60`} />
              <span className="text-slate-300 font-medium">{language}</span>
            </div>
          ))}
          <span className="text-slate-500 text-sm px-1">+ 8 more</span>
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
