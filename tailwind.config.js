/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'glasses': "url('/assets/background.jpg')",
        'glasses-sm': "url('/assets/background-sm.jpg')"
      },
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
      },
      animation: {
        'type': 'typing 5s steps(40, end)',
      },
      colors: {
        blue: {
          50: '#FAF8FF',
          300: '#00A8F6'
        },
        black: '#1F2421',
        gray: {
          50: '#dce1de',
          500: '#D0FBE1'
        },
        green: {
          50: '#F0FCF5',
          200: '#D3FBD8',
          300: '#9CC5A1',
          600: '#49A078',
          800: '#216869'
        },
      },
    },
  },
  plugins: [],
}

