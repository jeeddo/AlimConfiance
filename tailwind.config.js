/** @type {import('tailwindcss').Config} */
import motionPlugin from 'tailwindcss-motion'
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [motionPlugin]
}