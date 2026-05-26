import type { Theme, ThemeId } from "@/types";

export const THEMES: Record<ThemeId, Theme> = {
  "stranger-things": {
    id: "stranger-things",
    name: "Stranger Things",
    tagline: "Code your way out of the Upside Down",
    description:
      "Hawkins, Indiana is full of secrets. Help Eleven, Mike, and the gang investigate the mysterious Mind Flayer — one line of code at a time.",
    colorClass: "text-stranger-light",
    bgClass: "bg-stranger-bg",
    glowClass: "shadow-glow-red",
    gradient: "from-stranger-bg via-red-950 to-brand-bg",
    accentColor: "#ef4444",
    emoji: "🔴",
    characters: ["Eleven", "Mike", "Dustin", "Lucas", "Will", "Jim Hopper"],
    setting: "Hawkins, Indiana — 1983",
  },
  "severance": {
    id: "severance",
    name: "Severance",
    tagline: "Your innie writes code. Your outie gets the credit.",
    description:
      "You've just been severed. The Macrodata Refinement department needs you to sort numbers, process data, and never ask why.",
    colorClass: "text-severance-light",
    bgClass: "bg-severance-bg",
    glowClass: "shadow-glow-blue",
    gradient: "from-severance-bg via-blue-950 to-brand-bg",
    accentColor: "#3b82f6",
    emoji: "🔵",
    characters: ["Mark S.", "Helly R.", "Irving B.", "Dylan G.", "Ms. Cobel"],
    setting: "Lumon Industries — Floor MDR",
  },
  "breaking-bad": {
    id: "breaking-bad",
    name: "Breaking Bad",
    tagline: "I am the one who codes.",
    description:
      "A high school chemistry teacher turned programmer. Apply scientific precision to every algorithm. Say my name.",
    colorClass: "text-breaking-light",
    bgClass: "bg-breaking-bg",
    glowClass: "shadow-glow-green",
    gradient: "from-breaking-bg via-green-950 to-brand-bg",
    accentColor: "#22c55e",
    emoji: "🟢",
    characters: ["Walter White", "Jesse Pinkman", "Saul Goodman", "Mike Ehrmantraut"],
    setting: "Albuquerque, New Mexico",
  },
};

export const THEME_LIST = Object.values(THEMES);

export function getTheme(id: ThemeId): Theme {
  return THEMES[id];
}
