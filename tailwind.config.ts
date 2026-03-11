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
        dark: {
          50: "#1a1210",
          100: "#150f0c",
          200: "#110c0a",
          300: "#0D0907",
          400: "#0a0705",
          500: "#070503",
        },
        brown: {
          50: "#FDF8F3",
          100: "#F5EBE0",
          200: "#E8D5C0",
          300: "#D4B896",
          400: "#C19A6B",
          500: "#A67C52",
          600: "#8B6543",
          700: "#6F4E37",
          800: "#5C3D2E",
          900: "#3E2723",
          950: "#2A1A12",
        },
        cream: {
          50: "#FFFEF9",
          100: "#FFF8EE",
          200: "#F5EDE0",
          300: "#EDE0CF",
          400: "#E0CDB5",
        },
        gold: {
          300: "#D4B896",
          400: "#C9A96E",
          500: "#B8943E",
          600: "#9A7B2F",
        },
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "scale-in": "scaleIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
