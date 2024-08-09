/** @type {import('tailwindcss').Config} */

// plugins
import DropShadowPlugin from './src/functions/tailwindcss/plugins/dropShadow'
// safelist
import DropShadowSafelist from './src/functions/tailwindcss/safelist/dropShadow'
import TextSafelist from './src/functions/tailwindcss/safelist/text'

const twcss_plugin = require('tailwindcss/plugin')
const twcss_colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
      },
      animation: {
        'spin': 'spin 3s linear infinite'
      }
    }
  },
  plugins: [
    twcss_plugin(function ({ addUtilities, theme }) {
      addUtilities (
        DropShadowPlugin(theme('colors')),
        ['responsive', 'hover']
      )
    })
  ],
  safelist: [
    ...DropShadowSafelist(twcss_colors),
    ...TextSafelist(twcss_colors)
  ]
}