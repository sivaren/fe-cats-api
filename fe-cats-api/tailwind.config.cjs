/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-brown': '#C4A260',
        'main-dark': '#262628',
        'secondary-dark': '#3F3F3F',
      },
    },
  },
  plugins: [],
}
