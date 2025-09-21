/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#119D97',
        brandLight: '#e0f2f1',
        brandDark: '#00695c',
      }
    }
  },
  plugins: [],
}
