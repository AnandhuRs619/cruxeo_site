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
          subtle: "rgba(255, 255, 255, 0.04)",
        },
        brand: {
          blue: "#0b5cff",
          "blue-glow": "#3b82f6",
          "blue-light": "#38bdf8",
          cyan: "#38bdf8",
          violet: "#7c3aed",
          "violet-glow": "#8b5cf6",
          obsidian: "#030712",
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
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
        display: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        glow: "0 0 25px rgba(11, 92, 255, 0.45)",
        "glow-lg": "0 0 45px rgba(11, 92, 255, 0.6)",
        "glow-violet": "0 0 35px rgba(124, 58, 237, 0.35)",
        "blue-glow": "0 0 25px rgba(56, 189, 248, 0.4)",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
