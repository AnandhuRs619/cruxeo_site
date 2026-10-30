import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030712",
        surface: {
          DEFAULT: "#0b0f19",
          elevated: "#111827",
          subtle: "rgba(255, 255, 255, 0.05)",
        },
        brand: {
          blue: "#0b5cff",
          "blue-glow": "#3b82f6",
          cyan: "#00f5d4",
          "cyan-light": "#38bdf8",
          purple: "#a855f7",
        },
        division: {
          nexplay: "#a855f7",
          lumen: "#00f5d4",
          ignispectra: "#ffb12b",
          synapse: "#38b58b",
        },
        border: "rgba(255, 255, 255, 0.1)",
        card: {
          DEFAULT: "#0b0f19",
          foreground: "#f8fafc",
        },
        muted: {
          DEFAULT: "#0f172a",
          foreground: "#94a3b8",
        },
        secondary: {
          DEFAULT: "#1e293b",
          foreground: "#f8fafc",
        },
        foreground: "#f8fafc",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 25px rgba(37, 99, 235, 0.5)",
        "glow-lg": "0 0 40px rgba(37, 99, 235, 0.75)",
        "cyan-glow": "0 0 25px rgba(56, 189, 248, 0.5)",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

