/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        superWide : '5rem',
        veryWide : '3rem'
      },
      colors: {
        backgroundColor : '#111'
      }
    },
  },
  plugins: [],
}