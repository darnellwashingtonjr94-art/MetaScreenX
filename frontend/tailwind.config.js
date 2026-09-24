/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        meta: {
          dark: '#0f172a',
          panel: 'rgba(15, 23, 42, 0.90)',
          border: '#334155',
          accent: '#3b82f6',
          glow: '#60a5fa'
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
