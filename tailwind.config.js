  
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        full2x: '200vh',
        '11/12': '48%',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}