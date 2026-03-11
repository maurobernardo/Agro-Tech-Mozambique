import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B4D2E",
        secondary: "#B8960C",
        background: "#F5F5F5",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "soft-lg": "0 18px 45px rgba(0,0,0,0.18)",
        "gold-glow": "0 0 30px rgba(184,150,12,0.5)",
      },
      keyframes: {
        "ken-burns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
        "pulse-soft": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.04)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "scroll-indicator": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.6" },
          "50%": { transform: "translateY(6px)", opacity: "1" },
        },
      },
      animation: {
        "ken-burns-slow": "ken-burns 20s ease-in-out infinite alternate",
        "pulse-soft": "pulse-soft 2.2s ease-in-out infinite",
        shimmer: "shimmer 1.8s linear infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "scroll-indicator": "scroll-indicator 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

