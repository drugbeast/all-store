/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0px 35px rgba(129, 140, 248, 0.5)',
        '4xl': '0 0px 25px rgba(129, 140, 248, 0.5)'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      }
    }
  },
  plugins: []
}
