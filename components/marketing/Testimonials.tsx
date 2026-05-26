const testimonials = [
  {
    quote:
      "I tried Codecademy three times and kept quitting. QuestCode kept me going because I actually wanted to know how Hopper solved the next puzzle. Finished Python in 3 weeks.",
    name: "Mia K.",
    role: "Barista → Junior Dev",
    emoji: "🔴",
  },
  {
    quote:
      "The Severance theme is perfectly eerie. You feel like you're actually at Lumon. It sounds silly but it made JavaScript click for me in a way nothing else did.",
    name: "James T.",
    role: "Marketing Manager",
    emoji: "🔵",
  },
  {
    quote:
      "I'm a chemistry teacher who wanted to learn SQL. The Breaking Bad theme was such an obvious choice for me. 'Say my name' now means something completely different.",
    name: "Rachel M.",
    role: "Teacher learning to code",
    emoji: "🟢",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">They kept going</h2>
          <p className="text-slate-400 text-lg">Real learners. Real progress.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card p-6">
              <div className="text-3xl mb-4">{t.emoji}</div>
              <blockquote className="text-slate-300 text-sm leading-relaxed mb-5 italic">
                "{t.quote}"
              </blockquote>
              <div>
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-slate-500 text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
