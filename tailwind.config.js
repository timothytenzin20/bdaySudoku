/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brat': '#8BCF00'
      },
      fontFamily: {
        'sans': ['Arial Narrow', 'Arial', 'sans-serif'],
      },
      transitionProperty: {
        'transform': 'transform',
      },
      scale: {
        110: '1.10',
      },
    },
  },
  plugins: [],
}
