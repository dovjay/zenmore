/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bangbooBgSlide: {
          '0%': { 'background-position': '0 0' },
          '100%': { 'background-position': '-25% 51%'}
        }
      },
      animation: {
        'bangboo-bg-slide': 'bangbooBgSlide 10s linear infinite'
      }
    },
  },
  plugins: [],
}
