/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}', './src/**/*.{vue,js,ts,jsx,tsx,css}',"./node_modules/flowbite/**/*.js"],
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
        'md-plus': ['24px', '32px'],
        base: ['26px', '31px'],
        big:['38px','44px'],
        lg: ['30px', '56px'],
        xl: ['50px', '60px'],
        xxl: ['72px', '86px'],
        '5xl': ['35vw', '35vw'],
        '7xl': ['25vh', '25vh']
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}