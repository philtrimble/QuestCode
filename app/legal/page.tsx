import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
  title: "Legal & Fair Use — QuestCode",
  description: "QuestCode's fair use statement, intellectual property disclosures, and third-party rights notices.",
};

const LAST_UPDATED = "May 27, 2025";

const SHOW_ATTRIBUTIONS = [
  {
    title: "Stranger Things",
    owner: "Netflix / Monkey Massacre Productions",
    creators: "Created by Matt Duffer & Ross Duffer (the Duffer Brothers)",
  },
  {
    title: "Severance",
    owner: "Apple TV+ / Red Hour Productions",
    creators: "Created by Dan Erickson",
  },
  {
    title: "Breaking Bad",
    owner: "Sony Pictures Television / AMC",
    creators: "Created by Vince Gilligan",
  },
  {
    title: "The Office (US)",
    owner: "Universal Television / NBC",
    creators: "Based on the original UK series by Ricky Gervais & Stephen Merchant; US version developed by Greg Daniels",
  },
  {
    title: "Game of Thrones",
    owner: "HBO Entertainment / Warner Bros. Television",
    creators: "Based on the book series A Song of Ice and Fire by George R.R. Martin; TV series created by David Benioff & D.B. Weiss",
  },
  {
    title: "The Matrix",
    owner: "Warner Bros. Entertainment Inc.",
    creators: "Written and directed by Lana Wachowski & Lilly Wachowski",
  },
  {
    title: "Rick and Morty",
    owner: "Cartoon Network Studios / Adult Swim / Warner Bros. Discovery",
    creators: "Created by Justin Roiland & Dan Harmon",
  },
  {
    title: "Squid Game",
    owner: "Netflix / Siren Pictures Inc.",
    creators: "Created by Hwang Dong-hyuk",
  },
  {
    title: "Arrested Development",
    owner: "20th Television / Netflix",
    creators: "Created by Mitchell Hurwitz",
  },
  {
    title: "Barbie (2023 film)",
    owner: "Warner Bros. Entertainment Inc. / Mattel Films",
    creators: "Directed by Greta Gerwig; written by Greta Gerwig & Noah Baumbach; based on the Barbie fashion doll by Mattel",
  },
  {
    title: "Sex and the City",
    owner: "HBO Entertainment / Warner Bros. Television",
    creators: "Based on the book by Candace Bushnell; TV series created by Darren Star",
  },
  {
    title: "The Sopranos",
    owner: "HBO Entertainment / Warner Bros. Television",
    creators: "Created by David Chase",
  },
];

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-[400px] h-[400px] bg-brand-glow/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] bg-purple-700/4 rounded-full blur-[80px]" />
      </div>

      <Navbar />

      <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="mb-12">
            <p className="text-brand-glow text-sm font-semibold uppercase tracking-widest mb-3">Legal</p>
            <h1 className="text-4xl font-bold text-white mb-4">Legal &amp; Fair Use</h1>
            <p className="text-slate-500 text-sm">Last updated: {LAST_UPDATED}</p>
          </div>

          <div className="space-y-12">

            {/* Fair Use Statement */}
            <section>
              <h2 className="policy-heading">Fair Use Statement</h2>

              <div className="p-5 bg-brand-surface/60 border border-brand-glow/20 rounded-xl mb-6">
                <p className="text-slate-300 text-sm leading-relaxed">
                  QuestCode makes limited, transformative, educational use of character names,
                  setting names, and thematic elements from copyrighted television shows and films.
                  This use is made in good faith under the doctrine of fair use as provided in{" "}
                  <strong className="text-white">17 U.S.C. § 107</strong> of the United States
                  Copyright Act and equivalent doctrines in other jurisdictions.
                </p>
              </div>

              <h3 className="policy-subheading">Nature of our use</h3>
              <p className="body-text">
                QuestCode is an educational platform designed to teach programming languages
                through narrative-themed coding challenges. Our use of third-party intellectual
                property is limited to:
              </p>
              <ul className="policy-list">
                <li>References to character names (e.g., &ldquo;Eleven,&rdquo; &ldquo;Tony Soprano,&rdquo; &ldquo;Barbie&rdquo;) as context for programming exercises.</li>
                <li>References to fictional settings and locations (e.g., &ldquo;Hawkins, Indiana,&rdquo; &ldquo;Barbieland,&rdquo; &ldquo;Lumon Industries&rdquo;) as narrative framing for code challenges.</li>
                <li>General thematic references to storylines or plot points as educational context.</li>
              </ul>
              <p className="body-text">
                We do not reproduce, distribute, or display any of the following:
              </p>
              <ul className="policy-list">
                <li>Actual dialogue, scripts, or transcripts from any show or film.</li>
                <li>Original music, sound recordings, or audio from any production.</li>
                <li>Video footage, screenshots, production artwork, or photography from any show or film.</li>
                <li>Official logos, trademarks, or stylised branding elements of any show or its characters.</li>
              </ul>

              <h3 className="policy-subheading">Four-factor fair use analysis</h3>
              <p className="body-text">
                Under 17 U.S.C. § 107, courts consider four factors in determining whether a
                use is fair. We believe our use satisfies these factors as follows:
              </p>

              <div className="space-y-4 mt-4">
                {[
                  {
                    factor: "1. Purpose and character of the use",
                    analysis: "Our use is transformative and educational, not commercial in the way the original works are commercial. We do not sell or reproduce the shows themselves — we use their characters as scaffolding for an entirely original educational product. The purpose is to teach programming skills, which is an entirely different market and purpose from the original works.",
                  },
                  {
                    factor: "2. Nature of the copyrighted work",
                    analysis: "The works referenced are published, commercially released creative works. While this factor weighs somewhat against fair use, it is outweighed by the transformative and educational nature of our use.",
                  },
                  {
                    factor: "3. Amount and substantiality of the portion used",
                    analysis: "We use only minimal, non-central elements — primarily character names and general setting references. We do not reproduce any substantial portion of any copyrighted work. Character names alone, absent accompanying story expression, receive limited or no copyright protection.",
                  },
                  {
                    factor: "4. Effect on the potential market",
                    analysis: "Our use does not substitute for, compete with, or diminish the market for any of the referenced works. QuestCode is a coding education product — it does not serve the same market as streaming entertainment. Our use may, if anything, serve as a positive signal to fans of these shows.",
                  },
                ].map(({ factor, analysis }) => (
                  <div key={factor} className="glass-card p-5">
                    <p className="text-white font-semibold text-sm mb-2">{factor}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{analysis}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* No affiliation */}
            <section>
              <h2 className="policy-heading">No affiliation or endorsement</h2>
              <p className="body-text">
                QuestCode is an independent product. We are not affiliated with, sponsored by,
                endorsed by, or in any way officially connected to any of the studios, networks,
                streaming services, production companies, or rights holders associated with the
                shows and films referenced on this platform.
              </p>
              <p className="body-text">
                All show names, character names, and related marks are the property of their
                respective owners. Any use of these names on QuestCode is for identification
                and educational context only.
              </p>
            </section>

            {/* DMCA */}
            <section>
              <h2 className="policy-heading">Copyright infringement / DMCA</h2>
              <p className="body-text">
                We respect the intellectual property rights of others. If you believe that
                content on QuestCode infringes your copyright, please send a notice containing
                the following information to{" "}
                <a href="mailto:legal@questcode.app" className="text-brand-glow hover:underline">
                  legal@questcode.app
                </a>
                :
              </p>
              <ul className="policy-list">
                <li>A description of the copyrighted work you claim has been infringed.</li>
                <li>A description of where the allegedly infringing material is located on QuestCode.</li>
                <li>Your contact information (name, address, telephone number, and email).</li>
                <li>A statement that you have a good-faith belief that the use is not authorised by the copyright owner, its agent, or applicable law.</li>
                <li>A statement, under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorised to act on the owner&apos;s behalf.</li>
                <li>Your physical or electronic signature.</li>
              </ul>
              <p className="body-text">
                We will review all notices promptly and, where appropriate, remove or disable
                access to the allegedly infringing material.
              </p>
            </section>

            {/* Trademark */}
            <section>
              <h2 className="policy-heading">Trademark notice</h2>
              <p className="body-text">
                &ldquo;QuestCode&rdquo; is our trademark. All other trademarks, service marks,
                product names, and company names or logos mentioned on QuestCode are the
                property of their respective owners. Their appearance on QuestCode does not
                imply any affiliation with or endorsement of QuestCode.
              </p>
            </section>

            {/* Attributions table */}
            <section>
              <h2 className="policy-heading">Third-party rights attributions</h2>
              <p className="body-text">
                The following table identifies the intellectual property referenced on QuestCode
                and its known rights holders. This list is provided for transparency and does
                not constitute a licence, waiver, or admission that any particular use is
                infringing.
              </p>

              <div className="mt-6 space-y-3">
                {SHOW_ATTRIBUTIONS.map(({ title, owner, creators }) => (
                  <div key={title} className="glass-card p-4">
                    <p className="text-white font-semibold text-sm mb-1">{title}</p>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      <span className="text-slate-500">© </span>{owner}
                      <br />
                      <span className="text-slate-500">Credits: </span>{creators}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-slate-500 text-xs mt-4 leading-relaxed">
                Rights information is provided to the best of our knowledge and may not be
                exhaustive. If you are a rights holder and believe any attribution is incorrect
                or incomplete, please contact us at{" "}
                <a href="mailto:legal@questcode.app" className="text-brand-glow hover:underline">
                  legal@questcode.app
                </a>
                .
              </p>
            </section>

            {/* Open Source */}
            <section>
              <h2 className="policy-heading">Open source software</h2>
              <p className="body-text">
                QuestCode is built on open source software. Key dependencies include Next.js
                (MIT License), Monaco Editor (MIT License), Tailwind CSS (MIT License),
                Supabase client libraries (MIT License), and Stripe.js. Full dependency
                attribution is available in our package manifest.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="policy-heading">Contact</h2>
              <p className="body-text">
                For legal inquiries, copyright notices, or questions about our fair use
                position, contact us at:
              </p>
              <div className="mt-4 glass-card p-5 text-sm text-slate-400">
                <p className="text-white font-semibold mb-1">QuestCode — Legal</p>
                <p>Email: <a href="mailto:legal@questcode.app" className="text-brand-glow hover:underline">legal@questcode.app</a></p>
                <p>Website: <Link href="https://www.questcode.app" className="text-brand-glow hover:underline">questcode.app</Link></p>
              </div>
            </section>

          </div>

          {/* Footer nav */}
          <div className="mt-16 pt-8 border-t border-brand-border flex flex-wrap gap-4 text-sm text-slate-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
