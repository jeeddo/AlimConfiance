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
        'skeleton': 'skeleton 1s ease-in-out infinite'
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