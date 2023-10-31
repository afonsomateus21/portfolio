/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#fdffff',
          950: '#23253a'
        },
        red: {
          500: '#ff4b57'
        }
      }
    },
  },
  plugins: [],
}

