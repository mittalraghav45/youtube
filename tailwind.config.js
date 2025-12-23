/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // key line
  content: [
      
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

