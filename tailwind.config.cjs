/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'red': ' #f31b31',
        'blue': ' #2a72f8',
        'purple': '#722ba1',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },  },
    },
  plugins: [],
}