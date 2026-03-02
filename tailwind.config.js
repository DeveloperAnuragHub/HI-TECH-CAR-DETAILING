/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sky: { light: '#A8E8F9' },
        brand: {
          primary: '#00537A',
          dark: '#013C58',
          gold: '#F5A201',
          amber: '#FFBA42',
          yellow: '#FFD35B',
        },
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        heading: ['Barlow Condensed', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px #F5A201, 0 0 20px #F5A20155' },
          '50%': { boxShadow: '0 0 25px #F5A201, 0 0 60px #F5A20188' },
        },
      },
      animation: {
        shimmer: 'shimmer 3s linear infinite',
        glow: 'glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
