/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'darkBlue' : '#002963',
      'cyan' : '#00337C',
      'putih' : '#ffffff'
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
