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
      },
      animation: {
        'skeleton': 'skeleton 2s ease-in-out infinite'
      },
      keyframes: {
        'skeleton' : {
          '100%': {transform: 'translateX(100%)'}
        }
      
      }
    },
  },
  plugins: [motionPlugin]
}