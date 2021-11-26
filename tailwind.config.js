module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'prompt': ['Prompt'],
        'mitr': ['Mitr']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
