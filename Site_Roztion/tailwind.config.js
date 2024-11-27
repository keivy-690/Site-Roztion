/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#F3E8FF',  // Very light purple
          200: '#E9D5FF',  // Light purple
          300: '#D8B4FE',  // Medium-light purple
          400: '#C084FC',  // Medium purple
          500: '#A855F7',  // Base purple
          600: '#9333EA',  // Medium-dark purple
          700: '#7E22CE',  // Dark purple
          800: '#6B21A8',  // Darker purple
          900: '#581C87',  // Very dark purple
        },
      },
    },
  },
  plugins: [],
};
