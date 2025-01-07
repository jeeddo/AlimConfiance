/** @type {import('tailwindcss').Config} */
import motionPlugin from 'tailwindcss-motion'
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "550px",
      }
    },
  },
  plugins: [motionPlugin]
}