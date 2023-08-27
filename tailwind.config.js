/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-100": "#FAF8ED",
        "primary-300": "#2E476B",
        "primary-500": "#006400",
        "secondary-100": "#2D3134",
        "secondary-300": "#5B5F62"
      },
      fontFamily:{
        inter:["Inter", "sans-serif"],
        sen:["Sen", "sans-serif"]
      },
      screens:{
        xs:"480px",
        sm:"768px",
        MD:"1060px"
      }
    },
  },
  plugins: [],
}