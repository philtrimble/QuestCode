import Link from "next/link";
import { ArrowRight, Play, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Scanline effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-brand-neon/30 to-transparent animate-scan" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-brand-card border border-brand-border rounded-full px-4 py-1.5 mb-8">
          <Star className="w-3.5 h-3.5 text-brand-amber fill-brand-amber" />
          <span className="text-sm text-slate-300">Learn the way your brain actually works</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Learn to code through{" "}
          <span className="gradient-text text-glow-purple">
            stories you love
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Forget boring tutorials. Code your way through Hawkins, Lumon HQ, and
          Albuquerque. Real Python, JavaScript, Java, SQL, and Go — inside the worlds
          of your favorite shows.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/signup" className="btn-primary flex items-center gap-2 text-base px-8 py-4">
            Start coding free
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/#themes" className="btn-secondary flex items-center gap-2 text-base px-8 py-4">
            <Play className="w-4 h-4" />
            See the themes
          </Link>
        </div>

        {/* Theme preview pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {[
            { label: "🔴 Stranger Things", color: "border-red-500/40 text-red-400" },
            { label: "🔵 Severance", color: "border-blue-500/40 text-blue-400" },
            { label: "🟢 Breaking Bad", color: "border-green-500/40 text-green-400" },
          ].map(({ label, color }) => (
            <span
              key={label}
              className={`border ${color} bg-brand-card/50 px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm`}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-2 text-slate-500 text-sm mt-4">
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
