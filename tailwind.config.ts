import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
    "./styles/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: "hsl(var(--surface))",
        "surface-muted": "hsl(var(--surface-muted))",
        border: "hsl(var(--border))",
        muted: "hsl(var(--muted))",
        violet: {
          DEFAULT: "#7C3AED",
          soft: "#A78BFA",
          deep: "#4C1D95"
        },
        cyan: {
          DEFAULT: "#06B6D4",
          soft: "#67E8F9"
        },
        amber: {
          soft: "#FBBF24"
        }
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      boxShadow: {
        "violet-glow": "0 0 30px rgba(124, 58, 237, 0.32)",
        "cyan-glow": "0 0 24px rgba(6, 182, 212, 0.24)",
        "card-glow": "0 18px 55px rgba(10, 10, 15, 0.42)"
      },
      backgroundImage: {
        "radial-violet": "radial-gradient(circle at center, rgba(124, 58, 237, 0.28), transparent 62%)",
        "radial-cyan": "radial-gradient(circle at center, rgba(6, 182, 212, 0.18), transparent 64%)",
        "noise-soft": "linear-gradient(135deg, rgba(255,255,255,0.035) 0 1px, transparent 1px 7px)"
      },
      keyframes: {
        auroraOne: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(8%, -6%, 0) scale(1.18)" }
        },
        auroraTwo: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(-7%, 8%, 0) scale(1.12)" }
        },
        auroraThree: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(5%, 7%, 0) scale(1.16)" }
        },
        floatChip: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" }
        },
        blink: {
          "0%, 48%": { opacity: "1" },
          "49%, 100%": { opacity: "0" }
        },
        shimmer: {
          "0%": { transform: "translateX(-120%) skewX(-20deg)" },
          "100%": { transform: "translateX(220%) skewX(-20deg)" }
        }
      },
      animation: {
        "aurora-one": "auroraOne 18s ease-in-out infinite",
        "aurora-two": "auroraTwo 22s ease-in-out infinite",
        "aurora-three": "auroraThree 26s ease-in-out infinite",
        "float-chip": "floatChip 6s ease-in-out infinite",
        blink: "blink 1s steps(1) infinite",
        shimmer: "shimmer 1.4s ease-in-out"
      }
    }
  },
  plugins: []
};

export default config;
