import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — dark cinema feel
        brand: {
          bg: "#0a0a0f",
          surface: "#12121a",
          card: "#1a1a26",
          border: "#2a2a3d",
          muted: "#3a3a55",
          glow: "#6c47ff",
          accent: "#a855f7",
          neon: "#00f5d4",
          red: "#ff4444",
          amber: "#f59e0b",
        },
        // Theme colors
        stranger: {
          DEFAULT: "#b91c1c",
          light: "#ef4444",
          glow: "#dc2626",
          bg: "#1a0a0a",
        },
        severance: {
          DEFAULT: "#1d4ed8",
          light: "#3b82f6",
          glow: "#2563eb",
          bg: "#0a0f1a",
        },
        breaking: {
          DEFAULT: "#16a34a",
          light: "#22c55e",
          glow: "#15803d",
          bg: "#0a1a0a",
        },
        office: {
          DEFAULT: "#b45309",
          light: "#f59e0b",
          glow: "#d97706",
          bg: "#1a1200",
        },
        westeros: {
          DEFAULT: "#92400e",
          light: "#d4a017",
          glow: "#b45309",
          bg: "#0f0b02",
        },
        matrix: {
          DEFAULT: "#00b300",
          light: "#00ff41",
          glow: "#00cc00",
          bg: "#020f02",
        },
        rickmorty: {
          DEFAULT: "#0e7490",
          light: "#06b6d4",
          glow: "#0891b2",
          bg: "#020d14",
        },
        squid: {
          DEFAULT: "#be185d",
          light: "#ec4899",
          glow: "#db2777",
          bg: "#1a0510",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "Consolas", "monospace"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "noise": "url('/noise.svg')",
      },
      boxShadow: {
        "glow-purple": "0 0 20px rgba(108, 71, 255, 0.4)",
        "glow-neon": "0 0 20px rgba(0, 245, 212, 0.4)",
        "glow-red": "0 0 20px rgba(185, 28, 28, 0.5)",
        "glow-blue": "0 0 20px rgba(29, 78, 216, 0.5)",
        "glow-green": "0 0 20px rgba(22, 163, 74, 0.5)",
        "glow-yellow": "0 0 20px rgba(180, 83, 9, 0.5)",
        "glow-gold": "0 0 20px rgba(146, 64, 14, 0.5)",
        "glow-matrix": "0 0 20px rgba(0, 179, 0, 0.5)",
        "glow-cyan": "0 0 20px rgba(14, 116, 144, 0.5)",
        "glow-pink": "0 0 20px rgba(190, 24, 93, 0.5)",
        "card": "0 4px 32px rgba(0,0,0,0.4)",
        "card-hover": "0 8px 48px rgba(0,0,0,0.6)",
      },
      animation: {
        "flicker": "flicker 3s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "scan": "scan 2s linear infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
          "75%": { opacity: "0.95" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(108, 71, 255, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(108, 71, 255, 0.7)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
