module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  purge:['./src/**/*.{js, jsx, ts, tsx}', './public/index.html'],
  darkMode:'class',
  theme: {
    extend: {},
  },
  plugins: [],
}