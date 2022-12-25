/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        menuItemDark: "linear-gradient(160deg, rgb(40, 40, 43), rgb(20, 20, 22))",
        menuItemLight: "linear-gradient(160deg, white, rgb(230, 230, 230))"
      }
    },
  },
  plugins: [],
}
