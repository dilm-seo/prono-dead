/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#1a1a1a',
          200: '#141414',
          300: '#0a0a0a',
          400: '#050505',
        },
        neon: {
          red: '#ff0000',
          glow: '#ff000033',
        },
        blood: '#8b0000',
      },
      boxShadow: {
        'neon': '0 0 5px #ff0000, 0 0 10px #ff0000',
        'neon-strong': '0 0 10px #ff0000, 0 0 20px #ff0000',
      },
    },
  },
  plugins: [],
};