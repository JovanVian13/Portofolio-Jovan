/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        defaultColor: "#16a34a",
        backColor: "#4ade80",
        bgColor: "#a3e635",
      },
    },
  },
  plugins: [],
}