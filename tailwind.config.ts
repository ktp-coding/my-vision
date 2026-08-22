import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: "#0d1b2a",
        "night-2": "#0a1622",
        gold: "#e0b872",
        "gold-soft": "#f5c26b",
        mist: "#c9d1d9",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        overline: "0.28em",
      },
    },
  },
  plugins: [],
};

export default config;
