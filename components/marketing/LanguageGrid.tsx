import type { Language } from "@/types";

interface Props {
  languages: Language[];
}

export default function LanguageGrid({ languages }: Props) {
  return (
    <section id="languages" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">5 real languages</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Every skill you build here is a skill you can put on your resume.
            We teach the languages that actually get you hired.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {languages.map((lang) => (
            <div
              key={lang.id}
              className="glass-card p-5 text-center hover:scale-105 transition-transform duration-200 group cursor-default"
            >
              <span className="text-3xl block mb-3">{lang.icon}</span>
              <h3 className="text-white font-bold mb-1">{lang.name}</h3>
              <p className="text-slate-500 text-xs leading-snug">{lang.tagline}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
