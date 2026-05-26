import Link from "next/link";
import { THEME_LIST } from "@/lib/themes";
import { LANGUAGE_LIST } from "@/lib/languages";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/marketing/HeroSection";
import ThemeShowcase from "@/components/marketing/ThemeShowcase";
import LanguageGrid from "@/components/marketing/LanguageGrid";
import HowItWorks from "@/components/marketing/HowItWorks";
import ConsolePreview from "@/components/marketing/ConsolePreview";
import Testimonials from "@/components/marketing/Testimonials";
import CTASection from "@/components/marketing/CTASection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-brand-bg overflow-x-hidden">
      {/* Ambient glow effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-glow/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-brand-neon/8 rounded-full blur-[100px]" />
      </div>

      <Navbar />
      <HeroSection />
      <ThemeShowcase themes={THEME_LIST} />
      <HowItWorks />
      <ConsolePreview />
      <LanguageGrid languages={LANGUAGE_LIST} />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
