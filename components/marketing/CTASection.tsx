import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <div className="glass-card p-12 neon-border relative overflow-hidden">
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-radial from-brand-glow/10 via-transparent to-transparent" />

          <div className="relative z-10">
            <span className="text-4xl block mb-4">⚡</span>
            <h2 className="text-4xl font-bold text-white mb-4">
              Start using AI{" "}
              <span className="gradient-text">like you mean it</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-md mx-auto">
              First challenge is free. No credit card. Pick a theme, learn the basics, and start getting more out of AI today.
            </p>
            <Link href="/signup" className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4">
              Start learning free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-slate-500 text-sm mt-4">
              Monthly plans from $9 · Lifetime access from $79
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
