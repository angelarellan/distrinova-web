import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { 950: "#0A0F1D", 900: "#0F172A", 800: "#162038" },
        brand: { DEFAULT: "#2563EB", dark: "#1D4ED8" },
        accent: { cyan: "#0EA5E9", magenta: "#A855F7", amber: "#F59E0B" },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(37,99,235,.55)",
      },
      keyframes: {
        "wa-pulse": {
          "0%": { boxShadow: "0 0 0 0 rgba(37,211,102,.55)" },
          "70%": { boxShadow: "0 0 0 18px rgba(37,211,102,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(37,211,102,0)" },
        },
        "wa-ring": {
          "0%": { transform: "scale(1)", opacity: ".55" },
          "70%,100%": { transform: "scale(1.7)", opacity: "0" },
        },
        "wa-wiggle": {
          "0%,88%,100%": { transform: "rotate(0)" },
          "90%": { transform: "rotate(-14deg)" },
          "93%": { transform: "rotate(12deg)" },
          "96%": { transform: "rotate(-8deg)" },
          "98%": { transform: "rotate(5deg)" },
        },
        "gradient-pan": {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "wa-pulse": "wa-pulse 2.4s ease-out infinite",
        "wa-ring": "wa-ring 2.4s ease-out infinite",
        "wa-wiggle": "wa-wiggle 5s ease-in-out infinite",
        "gradient-pan": "gradient-pan 8s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
