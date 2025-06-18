/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{html,ts}", "./src/**/*"
  ],
  theme: {
    extend: {
      fontFamily: {
        // Ustaw Roboto jako pierwszą opcję dla czcionek sans-serif
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
    },

  plugins: [],
}
}

