/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        nature: {
          50: '#f4f9f4',
          100: '#eef6ee',
          200: '#dcecdb',
          300: '#bdddbe',
          400: '#94c696',
          500: '#6fae71',
          600: '#548d56',
          700: '#437045',
          800: '#38593a',
          900: '#2f4931',
          950: '#19281a',
        },
        earth: {
          50: '#fbf8f3',
          100: '#f5efe4',
          200: '#eaddc8',
          300: '#dec4a3',
          400: '#d0a578',
          500: '#c58855',
          600: '#b96e47',
          700: '#9a563c',
          800: '#7e4636',
          900: '#663b2f',
          950: '#361d16',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
