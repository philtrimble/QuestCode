"use client";

import { useState } from "react";
import { X } from "lucide-react";
import type { Language } from "@/types";

interface Props {
  languages: Language[];
}

const LANG_DETAIL: Record<string, {
  description: string;
  usedFor: string[];
  usedAt: string[];
}> = {
  python: {
    description:
      "Python reads almost like plain English, making it the most popular first language in the world — and a serious power tool for experts. Its clean syntax means you spend time solving problems, not fighting the language. It's also the dominant language for AI and machine learning, so learning Python today puts you right at the frontier.",
    usedFor: ["Data science & ML", "AI / LLM tooling", "Web back-ends", "Automation & scripting", "Scientific research"],
    usedAt: ["Google", "Netflix", "Instagram", "NASA", "Spotify", "Dropbox"],
  },
  javascript: {
    description:
      "The only language that runs natively in every web browser on the planet. JavaScript started as a simple scripting tool and has grown into a full-stack language — build the front-end, the back-end (Node.js), and mobile apps all with the same syntax. If something exists on the web, JavaScript is almost certainly involved.",
    usedFor: ["Web front-ends", "React / Next.js apps", "Node.js back-ends", "Mobile apps", "Browser extensions"],
    usedAt: ["Meta", "Airbnb", "Netflix", "Twitter / X", "Uber", "LinkedIn"],
  },
  java: {
    description:
      "Java has been the backbone of enterprise software for 30 years. Its 'write once, run anywhere' promise means Java compiled once runs on billions of devices — from banking servers to Android phones. It's verbose by design: that strictness is exactly why the world's largest companies trust it with mission-critical systems.",
    usedFor: ["Enterprise back-ends", "Android development", "Big data (Hadoop, Spark)", "Financial systems", "Cloud microservices"],
    usedAt: ["Amazon", "Google", "LinkedIn", "Goldman Sachs", "Uber", "Twitter / X"],
  },
  sql: {
    description:
      "SQL is how you talk to databases — and almost every application in existence uses a database. Whether you're pulling a business report, building a dashboard, or analysing millions of rows, SQL is the universal language of data. It's consistently one of the most in-demand skills on job listings across every industry.",
    usedFor: ["Data analysis & reporting", "Business intelligence", "Back-end development", "Data engineering", "Product analytics"],
    usedAt: ["Every tech company", "Banks & finance", "Healthcare", "Retail & e-commerce", "Government", "Startups"],
  },
  go: {
    description:
      "Go was built at Google to solve the problems of large-scale systems: slow compile times, complex concurrency, and heavyweight runtimes. The result is a language that compiles as fast as a scripting language but runs as fast as C — and its built-in concurrency model makes it the language of choice for cloud infrastructure and high-performance APIs.",
    usedFor: ["Cloud infrastructure", "API servers", "Microservices", "DevOps tooling", "High-performance networking"],
    usedAt: ["Google", "Docker", "Cloudflare", "Uber", "Twitch", "Dropbox"],
  },
};

export default function LanguageGrid({ languages }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  const toggle = (id: string) => setSelected((prev) => (prev === id ? null : id));

  const activeLang = languages.find((l) => l.id === selected);
  const detail = selected ? LANG_DETAIL[selected] : null;

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

        {/* Language cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          {languages.map((lang) => {
            const isActive = selected === lang.id;
            return (
              <button
                key={lang.id}
                onClick={() => toggle(lang.id)}
                className={`glass-card p-5 text-center transition-all duration-200 group cursor-pointer outline-none border-2 ${
                  isActive
                    ? "scale-105 border-opacity-100"
                    : "hover:scale-105 border-transparent hover:border-brand-muted"
                }`}
                style={isActive ? { borderColor: lang.color + "80" } : undefined}
              >
                <span className="text-3xl block mb-3">{lang.icon}</span>
                <h3
                  className="font-bold mb-1 transition-colors"
                  style={isActive ? { color: lang.color } : undefined}
                >
                  <span className={isActive ? "" : "text-white"}>{lang.name}</span>
                </h3>
                <p className="text-slate-500 text-xs leading-snug">{lang.tagline}</p>
                {isActive && (
                  <div
                    className="mt-2 text-[10px] font-semibold"
                    style={{ color: lang.color }}
                  >
                    ▾ details
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Expandable detail panel */}
        {activeLang && detail && (
          <div
            className="rounded-2xl border p-6 sm:p-8 transition-all duration-300"
            style={{
              borderColor: activeLang.color + "30",
              backgroundColor: activeLang.color + "08",
            }}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{activeLang.icon}</span>
                <div>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: activeLang.color }}
                  >
                    {activeLang.name}
                  </h3>
                  <p className="text-slate-400 text-sm">{activeLang.tagline}</p>
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-slate-500 hover:text-white transition-colors flex-shrink-0 mt-1"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {detail.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Used for */}
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  What it&apos;s used for
                </p>
                <div className="flex flex-wrap gap-2">
                  {detail.usedFor.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-full border font-medium"
                      style={{
                        color: activeLang.color,
                        borderColor: activeLang.color + "40",
                        backgroundColor: activeLang.color + "10",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Used at */}
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  Used at
                </p>
                <div className="flex flex-wrap gap-2">
                  {detail.usedAt.map((company) => (
                    <span
                      key={company}
                      className="text-xs px-2.5 py-1 rounded-full bg-brand-surface border border-brand-border text-slate-400"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
