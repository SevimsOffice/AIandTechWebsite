/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#C4521E',
          light:   '#D4632F',
          dark:    '#A8431A',
        },
      },
    },
  },
  plugins: [],
};
