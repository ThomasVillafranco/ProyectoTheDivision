/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#ff6c0f",
        "secondary": "#060000",
        "youtube":"#ff0000",
      },
      height: {
        "80": "20rem",
        "100": "25rem",
        "120": "30rem",
        "140": "35rem",
        "160": "40rem",

      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
