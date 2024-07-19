/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      'scrollbar-blue': '#93c5fd', // Custom blue color for the scrollbar
    },},
  },
  plugins: [],
}
