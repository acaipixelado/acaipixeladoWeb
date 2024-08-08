/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      keyframes: {
        spin: {
          '0%' : { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
      },
      animation: {
        'spin': 'spin 3s linear infinite'
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const colors = theme('colors')
      const newUtilities = {}

      Object.keys(colors).forEach(colorName => {
        const colorShades = colors[colorName]
        if (typeof colorShades === 'object') {
          Object.keys(colorShades).forEach(shade => {
            newUtilities[`.drop-shadow-1rem-${colorName}-${shade}`] = {
              filter: `drop-shadow(0 0 1rem ${colorShades[shade]})`
            }
            newUtilities[`.drop-shadow-4rem-${colorName}-${shade}`] = {
              filter: `drop-shadow(0 0 4rem ${colorShades[shade]})`
            }
          })
        } else {
          newUtilities[`.drop-shadow-1rem-${colorName}`] = {
            filter: `drop-shadow(0 0 1rem ${colorShades})`
          }
          newUtilities[`.drop-shadow-4rem-${colorName}`] = {
            filter: `drop-shadow(0 0 4rem ${colorShades})`
          }
        }
      })

      addUtilities(newUtilities, ['responsive', 'hover'])
    }),
  ]
}