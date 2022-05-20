module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white' : '#fff',
      'space-dark-blue' : '#090B31',
      'space-blue' : '#4D2A9C'
    },
    boxShadow: {
      'space': '0px 0px 50px 5px rgba(48,181,255,0.8)',
    },
    animation: {
      'spin-slow': 'spin 120s linear infinite',
    }
  },
  plugins: [],
}
