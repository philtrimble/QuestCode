import { BookOpen, Code2, Trophy, Zap } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    number: "01",
    title: "Pick your theme",
    description:
      "Choose Stranger Things, Severance, Breaking Bad — or more coming soon. Code concepts click faster when the context is something you already love.",
    color: "text-brand-accent",
  },
  {
    icon: Code2,
    number: "02",
    title: "Learn the basics",
    description:
      "Python, JavaScript, Java, SQL, or Go. Short, focused challenges teach you just enough to understand what AI is actually doing — and how to direct it.",
    color: "text-brand-neon",
  },
  {
    icon: Trophy,
    number: "03",
    title: "Solve themed challenges",
    description:
      "Each challenge is wrapped in a story moment. You're not memorising syntax — you're building genuine intuition for how code thinks.",
    color: "text-brand-amber",
  },
  {
    icon: Zap,
    number: "04",
    title: "Prompt smarter",
    description:
      "Spot when AI gets it wrong. Write prompts that actually work. Review the code it generates. That's the edge everyone else is missing.",
    color: "text-green-400",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-surface/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">How it works</h2>
          <p className="text-slate-400 text-lg">From curious to confidently AI-fluent</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="glass-card p-6 relative">
              {/* Number watermark */}
              <span className="absolute top-4 right-4 text-5xl font-black text-brand-border/60 select-none">
                {step.number}
              </span>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-brand-surface flex items-center justify-center mb-4 ${step.color}`}>
                <step.icon className="w-6 h-6" />
              </div>

              <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
