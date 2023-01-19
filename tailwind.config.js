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
          '100%': { 'background-position': '-222px 380px'}
        },
        filmRollSlide: {
          '0%': { 'background-position': '0 0' },
          '100%': { 'background-position': '0 -115px'}
        },
        agentRollSlide: {
          '0%': { 'background-position': '0 0'},
          '100%': { 'background-position': '0 1335px' }
        },
        agentRollSlide50: {
          '0%': { 'background-position': '0 365px'},
          '100%': { 'background-position': '0 1700px' }
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
        'film-roll-slide': 'filmRollSlide 5s linear infinite',
        'agent-roll-slide': 'agentRollSlide 10s linear infinite',
        'agent-roll-slide-50': 'agentRollSlide50 10s linear infinite',
        'bangboo-bg-slide': 'bangbooBgSlide 7s linear infinite',
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
