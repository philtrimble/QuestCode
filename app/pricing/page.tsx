import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PricingCards from "@/components/marketing/PricingCards";
import { PLAN_LIST } from "@/lib/plans";

export const metadata = {
  title: "Pricing — QuestCode",
  description: "Choose your plan and start coding through your favorite TV shows.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-brand-glow/8 rounded-full blur-[100px]" />
      </div>
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-4">
              Simple, honest pricing
            </h1>
            <p className="text-slate-400 text-xl max-w-xl mx-auto">
              Two flavors. Monthly or lifetime. You decide.
            </p>
          </div>

          <PricingCards plans={PLAN_LIST} />

          {/* FAQ */}
          <div className="mt-20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Can I switch themes or languages later?",
                  a: "Yes! You can change your selected theme or language from your account settings at any time. Your progress in the old selection is saved.",
                },
                {
                  q: "What does 'lifetime' mean?",
                  a: "Pay once, access forever. You'll also get all future content added for your plan type — new themes as they launch, new challenges as we write them.",
                },
                {
                  q: "I've never coded before. Is this for me?",
                  a: "Absolutely. Every challenge starts from zero, assuming no prior knowledge. The first challenge in every set covers the very basics.",
                },
                {
                  q: "Which plan should I choose?",
                  a: "If you want to master one language across all stories, pick Language Master. If you love one show and want to try every language through its lens, pick Theme Fanatic.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="glass-card p-5">
                  <p className="text-white font-semibold mb-2">{q}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
