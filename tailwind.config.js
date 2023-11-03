/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        black: '#1F2421',
        gray: {
          50: '#dce1de'
        },
        green: {
          300: '#9CC5A1',
          600: '#49A078',
          800: '#216869'
        },
      }
    },
  },
  plugins: [],
}

