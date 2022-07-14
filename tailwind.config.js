const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      green: colors.green,
      red: colors.red,
      'space-dark-blue' : '#090B31',
      'space-blue' : '#4D2A9C',
      'space-green' : '#44f5ba',
      'space-darker-green' : '#22c790',
      'space-red' : '#db3737',
      'space-darker-red' : '#a82323',
      'space-dark' : '#1e1e1e',
    },
    boxShadow: {
      'space': '0px 0px 50px 5px rgba(48,181,255,0.8)',
      'pseudo': '-14px 0px 40px 7px rgb(77, 42, 156, 0.4)'
    },
    animation: {
      'spin-slow': 'spin 120s linear infinite',
    },
    lineHeight: {
      'extra-loose': '2.5',
      '12': '3rem',
    },
  },
  plugins: [],
}
