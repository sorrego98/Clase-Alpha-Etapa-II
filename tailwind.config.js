/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#95D1E8",
        secondary: {
          100: "#40ADD6",
          200: "#36A5D5",
          300: "#42609D",
          400: "#C40113"
        }
      }
    },
  },
  plugins: [],
}

