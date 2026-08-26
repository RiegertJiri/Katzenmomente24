import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#221C2A",
        bgAlt: "#2C2436",
        surface: "#392E44",
        line: "rgba(243,238,226,0.12)",
        cream: "#F3EEE2",
        creamMuted: "#B9C4B5",
        gold: "#E8B23D",
        coral: "#FF6B4A",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        blob: "63% 37% 54% 46% / 45% 41% 59% 55%",
      },
    },
  },
  plugins: [],
};
export default config;
