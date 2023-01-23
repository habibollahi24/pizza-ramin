/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Vazir: ["Vazir", "sans-serif"],
      },
      // backgroundImage: {
      //   "hero-header": "url('public/images/b3.jpg')",
      // },
    },
  },
  plugins: [],
};
