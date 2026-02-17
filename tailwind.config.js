/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        nature: {
          50: '#f2f7f2',
          100: '#e1efe1',
          200: '#c5dec5',
          300: '#9bc49b',
          400: '#6ea36e',
          500: '#4d874d',
          600: '#3a6b3a',
          700: '#2f5530',
          800: '#274428',
          900: '#213822',
          950: '#101d11',
        },
        earth: {
          50: '#fdfbf7',
          100: '#f8f4eb',
          200: '#efe6d6',
          300: '#e2cfb4',
          400: '#d1b088',
          500: '#c49363',
          600: '#b8794d',
          700: '#995d3d',
          800: '#7d4c36',
          900: '#653f30',
          950: '#362018',
        },
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
