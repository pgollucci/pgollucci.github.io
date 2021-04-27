// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'max-width': 'full',
          }
        }
      })
    }
  },
  purge: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require(`@tailwindcss/ui`),
  ],
  colors: {
    primary: '#51c4d3',
    secondary: '#004e89',
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
}