import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0E14",
        surface: "#141A24",
        surface2: "#1C2432",
        subtle: "#2E3848",
        muted: "#7A879A",
        fore: "#E8EDF5",
        accent: "#7A96FF",
        "accent-dim": "#243858",
        green: "#66E898",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        grotesk: ["var(--font-grotesk)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        pulse2: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        pulse2: "pulse2 2s ease-in-out infinite",
        "fade-up": "fadeUp 0.4s ease forwards",
      },
      scrollMargin: {
        6: "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
