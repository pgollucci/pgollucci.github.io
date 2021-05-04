// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'media',
  plugins: [require('@tailwindcss/forms'), require(`@tailwindcss/ui`)],
  colors: { primary: '#51c4d3', secondary: '#004e89' },
}
