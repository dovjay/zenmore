/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./posts/**/*.mdx"
  ],
  theme: {
    extend: {
      keyframes: {
        bangbooBgSlide: {
          '0%': { 'background-position': '0 0' },
          '100%': { 'background-position': '-25% 51%'}
        },
        filmRollMainSlide: {
          '0%': { 'background-position': '0 0' },
          '100%': { 'background-position': '-25% 51%'}
        },
        filmRollDecoSlide: {
          '0%': { 'background-position': '-0% 0%'},
          '100%': { 'background-position': '0 -150%' } 
        },
        selectButtonSlide: {
          '0%': { 'background-position': '0 50%' },
          '100%': { 'background-position': '-100% 50%'}
        },
        newsSlide: {
          '0%': { 'translate': '24rem' },
          '100%': { 'translate': '-100%' }
        }
      },
      animation: {
        'film-roll-main-slide': 'filmRollMainSlide 25s linear infinite',
        'film-roll-deco-slide': 'filmRollDecoSlide 10s linear infinite',
        'bangboo-bg-slide': 'bangbooBgSlide 10s linear infinite',
        'select-button-slide': 'selectButtonSlide 2s linear infinite',
        'news-slide': 'newsSlide 10s linear infinite'
      },
      fontFamily: {
        'display': ['Oswald', 'display'],
        'rocksalt': ['Rock Salt', 'display']
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}
