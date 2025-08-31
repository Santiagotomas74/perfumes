/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#FFD700", // dorado clásico
      },
      fontFamily: {
        cursive: ["'Dancing Script'", "cursive"], // ejemplo con una fuente cursiva
      },
    },
  },
  plugins: [],
};
