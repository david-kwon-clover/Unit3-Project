/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter Variable, sans-serif',
        jetbrains: 'JetBrains Mono Variable, monospace'
      }
    },
  },
  plugins: [],
}

