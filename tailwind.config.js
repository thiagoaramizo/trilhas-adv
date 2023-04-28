/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#232A3B',
        'primary-500': '#00D1BE',
        'primary-700': '#008EA9',
        'secondary-300': '#89D2E6',
        'secondary-500': '#005FAB',
      },
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        slideInLeft: {
          '0%': { 
            transform: 'translateX(-1000px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
          }
        },
        slideInRight: {
          '0%': { 
            transform: 'translateX(1000px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
          }
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        slideInLeft: 'slideInLeft 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        slideInRight: 'slideInRight 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
    },
  },
  plugins: [],
}
