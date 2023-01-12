/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue': ' #2a72f8',
        'dark': '#1b1b1b',
        'dark-gray': '#292929',
        'gray-text': '#bbbbbb',
        'blue-text': '#a1c1fc',
        'red': ' #f31b31',
      },
      fontFamily: {
        sans: ['Stolzl', 'sans-serif'],
      },
      fontSize: {
        xxs: ['12px', '16px'],
        xs: ['16px', '22px'],
        sm: ['18px', '22px'],
        md: ['20px', '24px'],
        base: ['26px', '31px'],
        lg: ['30px', '56px'],
        xl: ['50px', '60px'],
        xxl: ['72px', '86px'],
      },
    },
  },
  plugins: [],
}