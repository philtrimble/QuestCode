import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service — QuestCode",
  description: "The terms and conditions for using QuestCode.",
};

const LAST_UPDATED = "May 27, 2025";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-glow/5 rounded-full blur-[120px]" />
      </div>

      <Navbar />

      <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="mb-12">
            <p className="text-brand-glow text-sm font-semibold uppercase tracking-widest mb-3">Legal</p>
            <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-slate-500 text-sm">Last updated: {LAST_UPDATED}</p>
            <div className="mt-4 p-4 bg-brand-surface/60 border border-brand-border rounded-lg">
              <p className="text-slate-400 text-sm leading-relaxed">
                Please read these terms carefully before using QuestCode. By creating an account
                or accessing the platform, you agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>

          <div className="space-y-10">

            <section>
              <h2 className="policy-heading">1. Acceptance of terms</h2>
              <p className="body-text">
                These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement
                between you and QuestCode (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;)
                governing your access to and use of the QuestCode platform at{" "}
                <Link href="https://www.questcode.app" className="text-brand-glow hover:underline">
                  questcode.app
                </Link>{" "}
                and any related services.
              </p>
              <p className="body-text">
                If you do not agree to these Terms, do not use QuestCode. By using the platform,
                you confirm that you are at least 13 years of age, or that you have the consent
                of a parent or guardian if you are under 18.
              </p>
            </section>

            <section>
              <h2 className="policy-heading">2. Account registration</h2>
              <p className="body-text">
                To access most features of QuestCode, you must create an account. You agree to:
              </p>
              <ul className="policy-list">
                <li>Provide accurate, current, and complete information during registration.</li>
                <li>Keep your account credentials confidential and not share your password with others.</li>
                <li>Notify us immediately at <a href="mailto:hello@questcode.app" className="text-brand-glow hover:underline">hello@questcode.app</a> if you suspect unauthorised access to your account.</li>
                <li>Take responsibility for all activity that occurs under your account.</li>
              </ul>
              <p className="body-text">
                We reserve the right to suspend or terminate accounts that violate these Terms,
                engage in abusive behaviour, or are created fraudulently.
              </p>
            </section>

            <section>
              <h2 className="policy-heading">3. Subscriptions and payments</h2>

              <h3 className="policy-subheading">3.1 Plan types</h3>
              <p className="body-text">
                QuestCode offers both free and paid plans. Paid plans include monthly subscriptions
                and one-time lifetime access purchases, as described on the{" "}
                <Link href="/pricing" className="text-brand-glow hover:underline">Pricing page</Link>.
                Plan availability and features may change over time.
              </p>

              <h3 className="policy-subheading">3.2 Billing</h3>
              <p className="body-text">
                Payments are processed by Stripe. By subscribing to a paid plan, you authorise
                QuestCode to charge your payment method on a recurring basis (for monthly plans)
                or as a one-time charge (for lifetime plans). All prices are in USD unless
                otherwise stated.
              </p>

              <h3 className="policy-subheading">3.3 Cancellation and refunds</h3>
              <p className="body-text">
                You may cancel a monthly subscription at any time from your account settings.
                Cancellation takes effect at the end of the current billing period — you will
                retain access until then. We do not provide pro-rated refunds for unused portions
                of a monthly billing cycle.
              </p>
              <p className="body-text">
                Lifetime access purchases are generally non-refundable. If you believe you are
                owed a refund due to a technical issue, contact us within 14 days of purchase at{" "}
                <a href="mailto:hello@questcode.app" className="text-brand-glow hover:underline">
                  hello@questcode.app
                </a>
                , and we will evaluate your request in good faith.
              </p>

              <h3 className="policy-subheading">3.4 Price changes</h3>
              <p className="body-text">
                We may change subscription prices with at least 30 days&apos; notice. For existing
                subscribers, price changes take effect at the next billing cycle after the notice
                period. You may cancel before the change takes effect if you do not wish to
                continue at the new price.
              </p>
            </section>

            <section>
              <h2 className="policy-heading">4. Acceptable use</h2>
              <p className="body-text">You agree not to:</p>
              <ul className="policy-list">
                <li>Use QuestCode for any unlawful purpose or in violation of any applicable laws.</li>
                <li>Attempt to gain unauthorised access to any part of the platform, other users&apos; accounts, or our backend systems.</li>
                <li>Scrape, crawl, or extract content from QuestCode in bulk without our written permission.</li>
                <li>Reproduce, resell, or redistribute QuestCode challenge content, lessons, or curriculum materials.</li>
                <li>Introduce malware, viruses, or other harmful code.</li>
                <li>Circumvent, disable, or interfere with security-related features of the platform.</li>
                <li>Use the platform in a way that could damage, disable, overburden, or impair our servers or networks.</li>
              </ul>
            </section>

            <section>
              <h2 className="policy-heading">5. Intellectual property</h2>

              <h3 className="policy-subheading">5.1 QuestCode content</h3>
              <p className="body-text">
                All original content on QuestCode — including challenge text, lesson explanations,
                code examples, UI design, and the QuestCode name and logo — is owned by QuestCode
                and protected by copyright and other intellectual property laws. You may not
                reproduce, distribute, or create derivative works from this content without
                our express written permission.
              </p>

              <h3 className="policy-subheading">5.2 Third-party intellectual property</h3>
              <p className="body-text">
                QuestCode references characters, settings, and story elements from popular
                television shows and films for educational purposes. These references are made
                under the doctrine of fair use and do not imply affiliation with, endorsement
                by, or sponsorship by the respective rights holders. For a full fair use
                disclosure, see our{" "}
                <Link href="/legal" className="text-brand-glow hover:underline">Legal page</Link>.
              </p>

              <h3 className="policy-subheading">5.3 Your code</h3>
              <p className="body-text">
                Code you write in the QuestCode editor remains yours. We do not claim ownership
                over solutions you write. We may collect anonymised code submission data to
                improve our hint and evaluation systems.
              </p>
            </section>

            <section>
              <h2 className="policy-heading">6. Disclaimer of warranties</h2>
              <p className="body-text">
                QuestCode is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
                warranties of any kind, either express or implied, including but not limited to
                implied warranties of merchantability, fitness for a particular purpose, or
                non-infringement.
              </p>
              <p className="body-text">
                We do not warrant that the platform will be uninterrupted, error-free, or free
                of viruses or other harmful components. We do not guarantee any particular
                learning outcome from using QuestCode.
              </p>
            </section>

            <section>
              <h2 className="policy-heading">7. Limitation of liability</h2>
              <p className="body-text">
                To the maximum extent permitted by applicable law, QuestCode and its affiliates,
                directors, employees, and agents shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages — including loss of profits, data,
                goodwill, or other intangible losses — arising from your use of or inability
                to use the platform, even if we have been advised of the possibility of such damages.
              </p>
              <p className="body-text">
                In no event shall our total liability to you for all claims exceed the greater of
                (a) $100 USD or (b) the amount you paid to QuestCode in the 12 months preceding
                the claim.
              </p>
            </section>

            <section>
              <h2 className="policy-heading">8. Indemnification</h2>
              <p className="body-text">
                You agree to indemnify and hold harmless QuestCode and its affiliates from any
                claims, losses, damages, liabilities, and expenses (including reasonable legal fees)
                arising from your violation of these Terms, your use of the platform, or your
                infringement of any third-party rights.
              </p>
            </section>

            <section>
              <h2 className="policy-heading">9. Termination</h2>
              <p className="body-text">
                We reserve the right to suspend or terminate your account at our discretion,
                with or without notice, if we believe you have violated these Terms. Upon
                termination, your right to use QuestCode ceases immediately.
              </p>
              <p className="body-text">
                You may delete your account at any time from your account settings. See our{" "}
                <Link href="/privacy" className="text-brand-glow hover:underline">Privacy Policy</Link>{" "}
                for information on data retention after account deletion.
              </p>
            </section>

            <section>
              <h2 className="policy-heading">10. Governing law and disputes</h2>
              <p className="body-text">
                These Terms are governed by the laws of the United States. Any disputes arising
                from these Terms or your use of QuestCode shall be resolved through binding
                arbitration, except that either party may seek injunctive relief in court for
                matters involving intellectual property or emergency relief.
              </p>
            </section>

            <section>
              <h2 className="policy-heading">11. Changes to these terms</h2>
              <p className="body-text">
                We may update these Terms from time to time. When we do, we will update the
                &ldquo;Last updated&rdquo; date at the top of this page. We will notify registered
                users of material changes by email. Your continued use of QuestCode after changes
                take effect constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="policy-heading">12. Contact</h2>
              <p className="body-text">
                Questions about these Terms? Reach us at:
              </p>
              <div className="mt-4 glass-card p-5 text-sm text-slate-400">
                <p className="text-white font-semibold mb-1">QuestCode</p>
                <p>Email: <a href="mailto:hello@questcode.app" className="text-brand-glow hover:underline">hello@questcode.app</a></p>
                <p>Website: <Link href="https://www.questcode.app" className="text-brand-glow hover:underline">questcode.app</Link></p>
              </div>
            </section>

          </div>

          {/* Footer nav */}
          <div className="mt-16 pt-8 border-t border-brand-border flex flex-wrap gap-4 text-sm text-slate-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/legal" className="hover:text-white transition-colors">Legal & Fair Use</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
