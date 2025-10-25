/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'noudemy-purple': '#a435f0',
        'noudemy-dark': '#1c1d1f',
      }
    },
  },
  plugins: [],
}
