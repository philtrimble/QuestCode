import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";
import PostHogProvider from "@/components/analytics/PostHogProvider";
import PostHogPageview from "@/components/analytics/PostHogPageview";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "QuestCode — Learn to Code Through Your Favorite Stories",
  description:
    "Master Python, JavaScript, Java, SQL, and Go through the worlds of Stranger Things, Severance, Breaking Bad, and more. Interactive challenges, in-browser console, cinematic learning.",
  keywords: ["learn to code", "coding games", "stranger things coding", "severance javascript", "interactive programming"],
  openGraph: {
    title: "QuestCode — Learn to Code Through Your Favorite Stories",
    description: "Code challenges themed around your favorite TV shows.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-brand-bg text-slate-200 antialiased">
        <PostHogProvider>
          {/* Wrapped in Suspense — useSearchParams() requires it in App Router */}
          <Suspense fallback={null}>
            <PostHogPageview />
          </Suspense>
          {children}
        </PostHogProvider>

        {/* Vercel Analytics + Speed Insights — zero-config, privacy-friendly */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
