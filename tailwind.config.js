/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  fonts: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { extend: {
    primary: '#8B2BE2',
    secondary: '#9D4EDD',
    light: '#C69FDE',
    opacity: '#E2D4E8'
  } },
  fontFamily: {
    sans: ['Inter', 'sans-serif'], // This sets the default font
    // Or add custom font families:
    custom: ['Your Custom Font', 'fallback'],
  },
  plugins: [],
}
