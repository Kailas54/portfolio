/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0c0f14",
          soft: "#141922",
          muted: "#1c2430",
        },
        sand: {
          DEFAULT: "#e8e4dc",
          dim: "#9a958c",
        },
        accent: {
          DEFAULT: "#e85d4c",
          glow: "#ff7a6b",
          deep: "#c44335",
        },
        leaf: {
          DEFAULT: "#3d8f7a",
          soft: "#5cb89e",
        },
      },
      fontFamily: {
        display: ['"Syne"', "system-ui", "sans-serif"],
        body: ['"Outfit"', "system-ui", "sans-serif"],
        "hero-display": ['"Bebas Neue"', "system-ui", "sans-serif"],
        "hero-serif": ['"Instrument Serif"', "Georgia", "serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
