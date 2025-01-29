/** @type {import('tailwindcss').Config} */
import motionPlugin from 'tailwindcss-motion'
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      screens: {
        xs: "550px",
      },
      colors: {
        'main' : 'var(--color-main)',
        'primary' : 'var(--color-primary)',
        'secondary' : 'var(--color-secondary)',
        'excellent' : 'var(--color-excellent)',
        'good': 'var(--color-good)',
        'average' : 'var(--color-average)',
        'poor' : 'var(--color-poor)',
        'bg' : 'var(--color-bg)',
        'indigo': {
          DEFAULT : 'var(--color-indigo)'
        }
      },
      animation: {
        'skeleton': 'skeleton .9s ease-in-out infinite',
        'slide-in': 'slide-in 1s ease-out forwards',
        'fade-in' : 'fade-in 1s linear forwards 1s'
      },
      keyframes: {
        'skeleton' : {
          '100%': {transform: 'translateX(100%)'}
        },
        'slide-in' : {
          '100%' : {
            transform : 'translate(0)',
            opacity: '1'
          }
        },
        'fade-in' : {
          '100%' : {opacity: '1'}
        }
      }
    },
  },
  plugins: [motionPlugin]
}