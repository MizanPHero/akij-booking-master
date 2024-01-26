/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  darkMode: false,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': 'Lato',
        'lexend': 'Lexend',
        'inter': 'Inter',
      },
    },
  },
  plugins: [],
}