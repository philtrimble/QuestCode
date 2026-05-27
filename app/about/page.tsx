import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Code2, BookOpen, Zap, Heart, Users, Layers } from "lucide-react";

export const metadata = {
  title: "About — QuestCode",
  description: "The story behind QuestCode — why we built it, how it works, and what makes it different.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-glow/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-purple-700/5 rounded-full blur-[100px]" />
      </div>

      <Navbar />

      <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">

          {/* Hero */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-glow/20 rounded-2xl border border-brand-glow/30 mb-6">
              <Code2 className="w-7 h-7 text-brand-glow" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-5 leading-tight">
              Why we built QuestCode
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Because the best way to learn something hard is to care deeply about
              the world it lives in.
            </p>
          </div>

          {/* Story */}
          <section className="prose-section mb-14">
            <h2 className="section-heading">The problem with most coding courses</h2>
            <p className="body-text">
              Most coding tutorials follow the same script: variables, loops, functions,
              classes — illustrated with examples like <code className="inline-code">x = 5</code> or{" "}
              <code className="inline-code">printHello()</code>. They work, technically. But they
              don&apos;t stick. Your brain needs a reason to care.
            </p>
            <p className="body-text">
              Research consistently shows that narrative context dramatically improves
              retention. When you&apos;re not just writing a loop — you&apos;re tallying Gob&apos;s
              illusions, or totalling the DiMeo family&apos;s weekly earnings — the abstract
              becomes concrete. The syntax becomes a tool for something that feels real.
            </p>
          </section>

          {/* The idea */}
          <section className="prose-section mb-14">
            <h2 className="section-heading">The idea</h2>
            <p className="body-text">
              QuestCode wraps every programming concept in a story you already know and love.
              Instead of practising conditionals with made-up data, you&apos;re checking whether
              Tobias Fünke is wearing his jorts. Instead of learning SQL aggregates on
              anonymous rows, you&apos;re running Silvio&apos;s quarterly earnings report for the DiMeo family.
            </p>
            <p className="body-text">
              The code is real. The syntax is standard. The languages — Python, JavaScript,
              Java, SQL, and Go — are the same ones used by working engineers every day.
              We just wrapped them in something worth remembering.
            </p>
          </section>

          {/* What you get */}
          <section className="mb-14">
            <h2 className="section-heading">What&apos;s inside</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {[
                {
                  icon: <Layers className="w-5 h-5" />,
                  title: "12 themed universes",
                  desc: "Stranger Things, Severance, Breaking Bad, The Office, Game of Thrones, The Matrix, Rick and Morty, Squid Game, Arrested Development, Barbie, Sex and the City, The Sopranos.",
                },
                {
                  icon: <Code2 className="w-5 h-5" />,
                  title: "5 real languages",
                  desc: "Python, JavaScript, Java, SQL, and Go — not toy languages or simplified subsets. The same syntax you'd use on the job.",
                },
                {
                  icon: <BookOpen className="w-5 h-5" />,
                  title: "Structured lessons",
                  desc: "Every challenge comes with a narrative setup, a concept explanation, a worked example, and a hint if you're stuck — so you always understand the why.",
                },
                {
                  icon: <Zap className="w-5 h-5" />,
                  title: "In-browser editor",
                  desc: "Monaco Editor (the same engine that powers VS Code) with full syntax highlighting. No installations, no setup — just open and code.",
                },
                {
                  icon: <Heart className="w-5 h-5" />,
                  title: "Beginner-first design",
                  desc: "Every theme starts from absolute zero. No assumed knowledge, no imposter syndrome. Just a story and a challenge.",
                },
                {
                  icon: <Users className="w-5 h-5" />,
                  title: "Progress tracking",
                  desc: "Your completed challenges are saved. Come back where you left off, across any device.",
                },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="glass-card p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-brand-glow">{icon}</div>
                    <h3 className="text-white font-semibold text-sm">{title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Who it's for */}
          <section className="prose-section mb-14">
            <h2 className="section-heading">Who it&apos;s for</h2>
            <p className="body-text">
              QuestCode is built for anyone who&apos;s ever started a coding tutorial and
              quietly given up somewhere between hello world and their first real project.
              That covers a lot of people — and it was definitely us.
            </p>
            <p className="body-text">
              It&apos;s for the person who watches Severance and thinks <em>I wonder how that
              kind of software would actually be written</em>. It&apos;s for the developer who
              wants to pick up a new language but finds vanilla tutorials boring. It&apos;s for
              the student who needs to pass their intro CS course and also really just
              wants to spend time in the world of Breaking Bad.
            </p>
          </section>

          {/* Mission */}
          <section className="glass-card p-8 border-brand-glow/20 mb-14">
            <p className="text-xl text-white leading-relaxed font-medium text-center">
              &ldquo;Our mission is simple: make the first hundred hours of coding so
              engaging that the next thousand feel inevitable.&rdquo;
            </p>
          </section>

          {/* Where we are */}
          <section className="prose-section mb-14">
            <h2 className="section-heading">Where we are</h2>
            <p className="body-text">
              QuestCode is currently in early access. We&apos;re a small, focused team shipping
              fast and listening closely to early users. If something doesn&apos;t work, we want
              to know. If a theme you love is missing, tell us — the next four were added
              entirely because someone asked.
            </p>
            <p className="body-text">
              The roadmap includes more themes, more languages, multiplayer challenges,
              leaderboards, and eventually mobile apps. But the core will always stay the
              same: real code, real stories, real learning.
            </p>
          </section>

          {/* CTA */}
          <div className="text-center">
            <p className="text-slate-400 mb-6">Ready to start? Pick a universe and write your first line.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup" className="btn-primary px-8 py-3">
                Start free
              </Link>
              <Link href="/#themes" className="btn-secondary px-8 py-3">
                Browse themes
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
