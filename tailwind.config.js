/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00E5FF",
        secondary: "#A855F7",
        tertiary: "#FBBF24",
        darkBg: "#080B14",
        darkCard: "#0F1624",
        glassBorder: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
