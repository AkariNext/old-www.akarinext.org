module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pinklavender: {
          light: "#CDB4DB",
          DEFAULT: "#CDB4DB",
          dark: "#CDB4DB"
        },
        orchidpink: {
          light: "#FFC8DD",
          DEFAULT: "#FFC8DD",
          dark: "#FFC8DD",
        },
        nadeshikopink: {
          light: "#FFAFCC",
          DEFAULT: "#FFAFCC",
          dark: "#FFAFCC",
        },
        uranianblue: {
          light: "#BDE0FE",
          DEFAULT: "#BDE0FE",
          dark: "#BDE0FE",
        },
        babyblueeyes: {
          light: "#A2D2FF",
          DEFAULT: "#A2D2FF",
          dark: "#A2D2FF",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
