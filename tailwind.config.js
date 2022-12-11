/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5555ff'
      },
      height: {
        '13': '3.25rem'
      },
    },
  },
  plugins: [],
}
