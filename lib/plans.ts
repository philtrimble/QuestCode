import type { Plan, PlanId } from "@/types";

// Replace these with your actual Stripe Price IDs after setup
export const PLANS: Record<PlanId, Plan> = {
  "unlimited-languages-monthly": {
    id: "unlimited-languages-monthly",
    name: "Theme Fanatic",
    tagline: "All 5 languages. Your favorite theme.",
    monthlyPrice: 12,
    lifetimePrice: null,
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_THEME_MONTHLY ?? "price_theme_monthly",
    features: [
      "Pick ONE theme (Stranger Things, Severance, or Breaking Bad)",
      "Learn all 5 languages: Python, JS, Java, SQL & Go",
      "Unlock new themed challenges monthly",
      "In-browser code console",
      "Progress tracking & badges",
      "Community Discord access",
    ],
    highlight: false,
    unlimitedLanguages: true,
    unlimitedThemes: false,
  },
  "unlimited-languages-lifetime": {
    id: "unlimited-languages-lifetime",
    name: "Theme Fanatic — Lifetime",
    tagline: "All 5 languages. Your favorite theme. Forever.",
    monthlyPrice: null,
    lifetimePrice: 99,
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_THEME_LIFETIME ?? "price_theme_lifetime",
    features: [
      "Pick ONE theme — yours for life",
      "Learn all 5 languages",
      "All future language additions included",
      "In-browser code console",
      "Progress tracking & badges",
      "Community Discord access",
      "No recurring charges — ever",
    ],
    highlight: false,
    badge: "Best Value",
    unlimitedLanguages: true,
    unlimitedThemes: false,
  },
  "unlimited-themes-monthly": {
    id: "unlimited-themes-monthly",
    name: "Language Master",
    tagline: "All 3 themes. Master one language.",
    monthlyPrice: 9,
    lifetimePrice: null,
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_LANG_MONTHLY ?? "price_lang_monthly",
    features: [
      "Pick ONE language to master",
      "Access ALL 3 themes for that language",
      "New themed challenges monthly",
      "In-browser code console",
      "Progress tracking & badges",
      "Community Discord access",
    ],
    highlight: true,
    badge: "Most Popular",
    unlimitedLanguages: false,
    unlimitedThemes: true,
  },
  "unlimited-themes-lifetime": {
    id: "unlimited-themes-lifetime",
    name: "Language Master — Lifetime",
    tagline: "All 3 themes. Master one language. Forever.",
    monthlyPrice: null,
    lifetimePrice: 79,
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_LANG_LIFETIME ?? "price_lang_lifetime",
    features: [
      "Pick ONE language — yours for life",
      "All 3 current themes + all future themes",
      "Lifetime access to all new content",
      "In-browser code console",
      "Progress tracking & badges",
      "Community Discord access",
      "No recurring charges — ever",
    ],
    highlight: false,
    unlimitedLanguages: false,
    unlimitedThemes: true,
  },
};

export const PLAN_LIST = Object.values(PLANS);

export function getPlan(id: PlanId): Plan {
  return PLANS[id];
}
