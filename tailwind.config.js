/** @type {import('tailwindcss').Config} */

const customAnimation = require('./styles/customAnimation.config.js')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./posts/**/*.mdx"
  ],
  theme: {
    extend: {
      ...customAnimation,
      fontFamily: {
        'display': ['Oswald', 'display'],
        'rocksalt': ['Rock Salt', 'display']
      },
      screens: {
        'mobile': { 'raw': '(max-width: 640px) or (max-height: 640px)' }
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}
