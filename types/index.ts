// ─── Themes ─────────────────────────────────────────────────────────────────

export type ThemeId =
  | "stranger-things"
  | "severance"
  | "breaking-bad"
  | "the-office"
  | "game-of-thrones"
  | "the-matrix"
  | "rick-and-morty"
  | "squid-game";

export interface Theme {
  id: ThemeId;
  name: string;
  tagline: string;
  description: string;
  colorClass: string;
  bgClass: string;
  glowClass: string;
  gradient: string;
  accentColor: string;
  emoji: string;
  characters: string[];
  setting: string;
}

// ─── Languages ───────────────────────────────────────────────────────────────

export type LanguageId = "python" | "javascript" | "java" | "sql" | "go";

export interface Language {
  id: LanguageId;
  name: string;
  tagline: string;
  icon: string;
  color: string;
  monacoId: string;
  defaultCode: string;
}

// ─── Challenges ──────────────────────────────────────────────────────────────

export type DifficultyLevel = "beginner" | "intermediate" | "advanced";

export interface TestCase {
  input: string;
  expected: string;
  description: string;
}

export interface Challenge {
  id: string;
  themeId: ThemeId;
  languageId: LanguageId;
  order: number;
  title: string;
  themedTitle: string;  // e.g. "The Upside Down Counter" instead of "Variables"
  narrative: string;    // Short story paragraph setting the scene
  prompt: string;       // The actual coding task
  hint: string;
  solution: string;
  starterCode: string;
  testCases: TestCase[];
  concept: string;      // e.g. "Variables & Data Types"
  difficulty: DifficultyLevel;
}

// ─── Lessons ─────────────────────────────────────────────────────────────────

export interface Lesson {
  intro: string;          // 1-2 sentence themed narrative hook
  concept: string;        // Plain-language explanation of the skill (2-3 sentences)
  example: string;        // Complete working code example
  exampleOutput: string;  // Exact output / result the example produces
  notes: string;          // What's happening in the example (1-2 sentences)
  keyPoints: string[];    // 3-4 essential rules to remember
}

// ─── Subscriptions ───────────────────────────────────────────────────────────

export type PlanId =
  | "unlimited-languages-monthly"
  | "unlimited-languages-lifetime"
  | "unlimited-themes-monthly"
  | "unlimited-themes-lifetime"
  | "all-access-monthly"
  | "all-access-lifetime";

export interface Plan {
  id: PlanId;
  name: string;
  tagline: string;
  monthlyPrice: number | null;  // null for lifetime
  lifetimePrice: number | null; // null for monthly
  stripePriceId: string;
  features: string[];
  highlight: boolean;
  badge?: string;
  unlimitedLanguages: boolean;
  unlimitedThemes: boolean;
}

// ─── User / Auth ─────────────────────────────────────────────────────────────

export interface UserProfile {
  id: string;
  email: string;
  displayName?: string;
  avatarUrl?: string;
  createdAt: string;
}

export interface UserSubscription {
  id: string;
  userId: string;
  planId: PlanId;
  stripeSubscriptionId?: string;
  stripeCustomerId: string;
  status: "active" | "canceled" | "past_due" | "trialing";
  currentPeriodEnd?: string;
  isLifetime: boolean;
  selectedThemeId?: ThemeId;   // for unlimited-languages plans
  selectedLanguageId?: LanguageId; // for unlimited-themes plans
  createdAt: string;
}

export interface UserProgress {
  userId: string;
  challengeId: string;
  themeId: ThemeId;
  languageId: LanguageId;
  completed: boolean;
  completedAt?: string;
  lastCode?: string;
  attempts: number;
}

// ─── API Responses ────────────────────────────────────────────────────────────

export interface ApiResponse<T> {
  data?: T;
  error?: string;
}
