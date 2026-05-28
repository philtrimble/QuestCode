const testimonials = [
  {
    quote:
      "I used to just copy whatever code ChatGPT gave me and hope it worked. After a few weeks on QuestCode I actually understand what it's doing — and I catch the mistakes before they blow up.",
    name: "Mia K.",
    role: "Marketing Ops Manager",
    emoji: "🔴",
  },
  {
    quote:
      "The Severance theme is eerily perfect. But the real win was realising I could finally write a prompt that got back exactly what I needed, first try. My whole team noticed.",
    name: "James T.",
    role: "Product Manager",
    emoji: "🔵",
  },
  {
    quote:
      "I'm not trying to become an engineer. I just wanted to stop feeling lost every time AI spits out code. QuestCode gave me that in about a month — through Breaking Bad, which was a bonus.",
    name: "Rachel M.",
    role: "Operations Lead",
    emoji: "🟢",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">They get more out of AI now</h2>
          <p className="text-slate-400 text-lg">Real learners. Real outcomes.</p>
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
