/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
      },
      screens: {
        xs: "270px",
      },
    },
  },
  plugins: [],
};
