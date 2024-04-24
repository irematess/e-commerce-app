/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F27A1A'
      }
    },

    fontFamily: {
      source: ['Source Sans 3']
    }
  },
  plugins: []
}
