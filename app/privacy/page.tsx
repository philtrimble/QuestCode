import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — QuestCode",
  description: "How QuestCode collects, uses, and protects your personal information.",
};

const LAST_UPDATED = "May 27, 2025";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-brand-glow/5 rounded-full blur-[120px]" />
      </div>

      <Navbar />

      <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="mb-12">
            <p className="text-brand-glow text-sm font-semibold uppercase tracking-widest mb-3">Legal</p>
            <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-slate-500 text-sm">Last updated: {LAST_UPDATED}</p>
            <div className="mt-4 p-4 bg-brand-surface/60 border border-brand-border rounded-lg">
              <p className="text-slate-400 text-sm leading-relaxed">
                QuestCode is committed to protecting your privacy. This policy explains what data
                we collect, why we collect it, and how you can control it. We don&apos;t sell your
                data. We never will.
              </p>
            </div>
          </div>

          <div className="space-y-10">

            <section>
              <h2 className="policy-heading">1. Who we are</h2>
              <p className="body-text">
                QuestCode (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is an online
                learning platform at{" "}
                <Link href="https://www.questcode.app" className="text-brand-glow hover:underline">
                  questcode.app
                </Link>
                . We provide interactive coding challenges themed around popular TV shows and
                films to help people learn programming languages including Python, JavaScript,
                Java, SQL, and Go.
              </p>
            </section>

            <section>
              <h2 className="policy-heading">2. Information we collect</h2>

              <h3 className="policy-subheading">2.1 Information you provide</h3>
              <ul className="policy-list">
                <li><strong className="text-slate-300">Email address</strong> — required to create an account and log in.</li>
                <li><strong className="text-slate-300">Password</strong> — stored as a secure hash via Supabase Auth. We never see your plain-text password.</li>
                <li><strong className="text-slate-300">Payment information</strong> — if you subscribe to a paid plan, your card details are handled exclusively by Stripe. QuestCode does not store or have access to your full card number, CVV, or expiration date.</li>
                <li><strong className="text-slate-300">Access codes</strong> — if you use a beta or promotional access code to create an account, we log that the code was used.</li>
              </ul>

              <h3 className="policy-subheading">2.2 Information collected automatically</h3>
              <ul className="policy-list">
                <li><strong className="text-slate-300">Challenge progress</strong> — which challenges you have completed, your selected theme, and your selected language.</li>
                <li><strong className="text-slate-300">Usage data</strong> — pages visited, time spent, and general interaction patterns within the app. This is collected in aggregate to help us improve the product.</li>
                <li><strong className="text-slate-300">Device and browser information</strong> — basic technical data (browser type, operating system, viewport size) used for debugging and compatibility.</li>
                <li><strong className="text-slate-300">IP address</strong> — logged by our infrastructure for security and abuse prevention. Not used for advertising or tracking.</li>
              </ul>

              <h3 className="policy-subheading">2.3 Cookies and local storage</h3>
              <p className="body-text">
                We use session cookies to keep you logged in. Supabase Auth sets an authentication
                token in your browser&apos;s local storage. We do not use third-party advertising
                cookies or cross-site trackers.
              </p>
            </section>

            <section>
              <h2 className="policy-heading">3. How we use your information</h2>
              <ul className="policy-list">
                <li>To create and manage your account.</li>
                <li>To save your progress and preferences across sessions.</li>
                <li>To process subscription payments via Stripe.</li>
                <li>To send transactional emails (account creation confirmation, password reset). We do not send marketing emails without explicit opt-in.</li>
                <li>To improve QuestCode — understanding which challenges are most completed, where users get stuck, and which features are most used.</li>
                <li>To detect and prevent fraud, abuse, and security vulnerabilities.</li>
              </ul>
            </section>

            <section>
              <h2 className="policy-heading">4. How we share your information</h2>
              <p className="body-text">
                We do not sell, rent, or trade your personal information to third parties.
                We share data only in the following limited circumstances:
              </p>
              <ul className="policy-list">
                <li>
                  <strong className="text-slate-300">Supabase</strong> — our authentication and database provider. Your email, hashed password, and progress data are stored on Supabase infrastructure. Supabase is GDPR-compliant.
                </li>
                <li>
                  <strong className="text-slate-300">Stripe</strong> — our payment processor. Stripe handles all payment card data under PCI DSS compliance. We receive only a customer ID and subscription status from Stripe.
                </li>
                <li>
                  <strong className="text-slate-300">Vercel</strong> — our hosting provider. Vercel processes requests to our servers and may log IP addresses and request metadata.
                </li>
                <li>
                  <strong className="text-slate-300">Legal requirements</strong> — we may disclose information if required to do so by law, court order, or governmental authority.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="policy-heading">5. Data retention</h2>
              <p className="body-text">
                We retain your account data for as long as your account is active. If you
                delete your account, we will delete your personal information within 30 days,
                except where retention is required by law (e.g., payment records for tax purposes,
                which are retained for 7 years in accordance with applicable regulations).
              </p>
              <p className="body-text">
                Aggregated, anonymised usage data (with no link to individual users) may be
                retained indefinitely for product analytics.
              </p>
            </section>

            <section>
              <h2 className="policy-heading">6. Your rights</h2>
              <p className="body-text">
                Depending on where you are located, you may have the following rights:
              </p>
              <ul className="policy-list">
                <li><strong className="text-slate-300">Access</strong> — request a copy of the personal data we hold about you.</li>
                <li><strong className="text-slate-300">Correction</strong> — ask us to correct inaccurate or incomplete data.</li>
                <li><strong className="text-slate-300">Deletion</strong> — request that we delete your account and associated personal data.</li>
                <li><strong className="text-slate-300">Portability</strong> — request your data in a structured, machine-readable format.</li>
                <li><strong className="text-slate-300">Objection</strong> — object to certain types of processing, including profiling.</li>
                <li><strong className="text-slate-300">Withdrawal of consent</strong> — where processing is based on consent, you may withdraw it at any time.</li>
              </ul>
              <p className="body-text">
                To exercise any of these rights, email us at{" "}
                <a href="mailto:privacy@questcode.app" className="text-brand-glow hover:underline">
                  privacy@questcode.app
                </a>
                . We will respond within 30 days.
              </p>
            </section>

            <section>
              <h2 className="policy-heading">7. Children&apos;s privacy</h2>
              <p className="body-text">
                QuestCode is not directed at children under 13 years of age. We do not
                knowingly collect personal information from children under 13. If you believe
                a child has provided us with personal information, please contact us and we
                will delete it promptly.
              </p>
            </section>

            <section>
              <h2 className="policy-heading">8. Security</h2>
              <p className="body-text">
                We take reasonable technical and organisational measures to protect your personal
                data, including TLS encryption in transit, secure password hashing, and
                environment variable management for secret keys. However, no method of
                transmission over the internet is 100% secure. We encourage you to use a strong,
                unique password for your QuestCode account.
              </p>
            </section>

            <section>
              <h2 className="policy-heading">9. Changes to this policy</h2>
              <p className="body-text">
                We may update this Privacy Policy from time to time. When we do, we will update
                the &ldquo;Last updated&rdquo; date at the top of this page. For material changes,
                we will notify you by email (if you have an account) or by posting a notice on
                the site. Your continued use of QuestCode after changes take effect constitutes
                acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="policy-heading">10. Contact</h2>
              <p className="body-text">
                Questions about this Privacy Policy? We&apos;re happy to help.
              </p>
              <div className="mt-4 glass-card p-5 text-sm text-slate-400">
                <p className="text-white font-semibold mb-1">QuestCode</p>
                <p>Email: <a href="mailto:privacy@questcode.app" className="text-brand-glow hover:underline">privacy@questcode.app</a></p>
                <p>Website: <Link href="https://www.questcode.app" className="text-brand-glow hover:underline">questcode.app</Link></p>
              </div>
            </section>

          </div>

          {/* Footer nav */}
          <div className="mt-16 pt-8 border-t border-brand-border flex flex-wrap gap-4 text-sm text-slate-500">
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/legal" className="hover:text-white transition-colors">Legal & Fair Use</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
