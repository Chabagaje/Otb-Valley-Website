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
      boxShadow: {
        // Neumorphism (soft outer glow)
        neumorph:
          "8px 8px 24px rgba(0,0,0,0.6), -8px -8px 24px rgba(255,255,255,0.02)",
        // Claymorphism (chubby, lifted)
        clay: "0px 8px 0px 0px rgba(0, 229, 255, 0.2), 0px 12px 30px -10px rgba(0,0,0,0.8)",
        // Glass inner
        glass: "0 8px 32px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};
