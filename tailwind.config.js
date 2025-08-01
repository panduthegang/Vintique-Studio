/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'vintage-cream': '#D8C9AE',
        'vintage-charcoal': '#575757',
        'vintage-gold': '#B8860B',
        'vintage-cream-light': '#E5D8C1',
        'vintage-cream-dark': '#C4B59A',
      },
    },
  },
  plugins: [],
};
