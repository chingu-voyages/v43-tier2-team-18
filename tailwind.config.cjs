/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
      },
      screens: {
        xs: "270px",
      },
    },
  },
  plugins: [],
};
