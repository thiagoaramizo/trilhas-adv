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
        'background': '#232A3B',
        'primary-500': '#00D1BE',
        'primary-700': '#008EA9',
        'secondary-300': '#89D2E6',
        'secondary-500': '#005FAB',
      },
      gridTemplateRows: {
        'layout': 'auto 1fr auto',
      },
    },
  },
  plugins: [],
}
