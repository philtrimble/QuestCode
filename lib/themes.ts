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
  "the-office": {
    id: "the-office",
    name: "The Office",
    tagline: "That's what good code is.",
    description:
      "Welcome to Dunder Mifflin, where Michael Scott needs your help managing paper sales, tracking beet inventory, and surviving another day at the world's most chaotic workplace.",
    colorClass: "text-office-light",
    bgClass: "bg-office-bg",
    glowClass: "shadow-glow-yellow",
    gradient: "from-office-bg via-yellow-950 to-brand-bg",
    accentColor: "#f59e0b",
    emoji: "📄",
    characters: ["Michael Scott", "Dwight Schrute", "Jim Halpert", "Pam Beesly", "Ryan Howard"],
    setting: "Dunder Mifflin, Scranton PA",
  },
  "game-of-thrones": {
    id: "game-of-thrones",
    name: "Game of Thrones",
    tagline: "When you play the game of code, you win or you debug.",
    description:
      "The realm is in chaos. Houses clash, dragons soar, and winter has come. Use your coding skills to help the great houses of Westeros survive the long night.",
    colorClass: "text-westeros-light",
    bgClass: "bg-westeros-bg",
    glowClass: "shadow-glow-gold",
    gradient: "from-westeros-bg via-yellow-950 to-brand-bg",
    accentColor: "#d4a017",
    emoji: "⚔️",
    characters: ["Jon Snow", "Daenerys Targaryen", "Tyrion Lannister", "Arya Stark", "Cersei Lannister"],
    setting: "The Seven Kingdoms of Westeros",
  },
  "the-matrix": {
    id: "the-matrix",
    name: "The Matrix",
    tagline: "There is no bug.",
    description:
      "You've taken the red pill. The Matrix is a simulation — and now you can see its code. Help Neo, Morpheus, and Trinity expose the truth hidden beneath reality.",
    colorClass: "text-matrix-light",
    bgClass: "bg-matrix-bg",
    glowClass: "shadow-glow-matrix",
    gradient: "from-matrix-bg via-green-950 to-brand-bg",
    accentColor: "#00ff41",
    emoji: "💊",
    characters: ["Neo", "Morpheus", "Trinity", "Agent Smith", "The Oracle"],
    setting: "The Matrix — 1999 simulation",
  },
  "rick-and-morty": {
    id: "rick-and-morty",
    name: "Rick and Morty",
    tagline: "Wubba lubba dub dub — there's a bug in your code.",
    description:
      "Strap into the flying saucer. Rick needs a co-pilot who can code, and Morty is busy panicking. Solve interdimensional problems with Python across the multiverse.",
    colorClass: "text-rickmorty-light",
    bgClass: "bg-rickmorty-bg",
    glowClass: "shadow-glow-cyan",
    gradient: "from-rickmorty-bg via-cyan-950 to-brand-bg",
    accentColor: "#06b6d4",
    emoji: "🛸",
    characters: ["Rick Sanchez", "Morty Smith", "Summer Smith", "Beth Smith", "Jerry Smith"],
    setting: "Dimension C-137 and beyond",
  },
  "squid-game": {
    id: "squid-game",
    name: "Squid Game",
    tagline: "456 players. 1 coder.",
    description:
      "The games have begun. 456 desperate players compete for a prize that could change everything. Use SQL to track who's still standing — and who isn't.",
    colorClass: "text-squid-light",
    bgClass: "bg-squid-bg",
    glowClass: "shadow-glow-pink",
    gradient: "from-squid-bg via-pink-950 to-brand-bg",
    accentColor: "#ec4899",
    emoji: "🔺",
    characters: ["Player 456", "Player 001", "The Front Man", "Player 067", "Player 218"],
    setting: "The Island — Game Arena",
  },
};

export const THEME_LIST = Object.values(THEMES);

export function getTheme(id: ThemeId): Theme {
  return THEMES[id];
}
