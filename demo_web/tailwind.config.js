/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'udemy-purple': '#a435f0',
        'udemy-dark': '#1c1d1f',
      }
    },
  },
  plugins: [],
}
