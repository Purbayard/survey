/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkBlue' : '#002963',
        'cyan' : '#00337C'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
