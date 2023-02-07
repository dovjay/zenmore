module.exports = {
  keyframes: {
    bangbooBgSlide: {
      '0%': { 'background-position': '0 0' },
      '100%': { 'background-position': '-333px 0'}
    },
    filmRollSlide: {
      '0%': { 'background-position': '0 0' },
      '100%': { 'background-position': '0 115px'}
    },
    agentRollSlide: {
      '0%': { 'background-position': '0 0'},
      '100%': { 'background-position': '0 -1335px' }
    },
    agentRollSlide50: {
      '0%': { 'background-position': '0 -365px'},
      '100%': { 'background-position': '0 -1700px' }
    },
    selectButtonSlide: {
      '0%': { 'background-position': '0 50%' },
      '100%': { 'background-position': '-66px 50%'}
    },
    newsSlide: {
      '0%': { 'translate': '24rem' },
      '100%': { 'translate': '-100%' }
    },
    ringScale: {
      '0%': { 'box-shadow': '0 0 0 .5rem var(--tw-ring-color)' },
      '90%': { 'box-shadow': '0 0 0 .75rem var(--tw-ring-color)' },
      '100%': { 'box-shadow': '0 0 0 .5rem var(--tw-ring-color)' },
    },
    ringScaleMobile: {
      '0%': { 'box-shadow': '0 0 0 .25rem var(--tw-ring-color)' },
      '90%': { 'box-shadow': '0 0 0 .5rem var(--tw-ring-color)' },
      '100%': { 'box-shadow': '0 0 0 .25rem var(--tw-ring-color)' },
    },
    spinReverse: {
      'to': { 'transform': 'rotate(-360deg)' }
    }
  },
  animation: {
    'film-roll-slide': 'filmRollSlide 5s linear infinite',
    'agent-roll-slide': 'agentRollSlide 10s linear infinite',
    'agent-roll-slide-50': 'agentRollSlide50 10s linear infinite',
    'bangboo-bg-slide': 'bangbooBgSlide 7s linear infinite',
    'select-button-slide': 'selectButtonSlide 2s linear infinite',
    'news-slide': 'newsSlide 10s linear infinite',
    'ring-scale': 'ringScale .7s ease-in infinite',
    'ring-scale-mobile': 'ringScaleMobile .7s ease-in infinite',
    'spin-reverse': 'spinReverse 1s linear infinite'
  },
}