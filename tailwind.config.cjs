/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue': ' #2a72f8',
        'dark': '#1b1b1b',
        'dark gray': '#292929',
        'gray text': '#bbbbbb',
        'blue text': '#a1c1fc',
        'red': ' #f31b31',
      },
      fontFamily: {
        sans: ['StolzlBook', 'sans-serif'],
      },
    },
  },
  plugins: [],
}