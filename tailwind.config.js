/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '768px',  
        'laptop': '1024px',
        'desktop': '1920px',
      },
      colors: {
        current: "currentColor",
        bgColor: "#42ADFD",
        borderColor: "#E5E5E5"
      },
      fontFamily: {
        tahoma: ["tahoma"]
      }
    },
  },
  plugins: [],
}