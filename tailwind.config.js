/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        spin: "spin 1s linear infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      boxShadow: {
        "card-shadow": "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
      },
      screens: {
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
