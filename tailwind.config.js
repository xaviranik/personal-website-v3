module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navy: "#0a192f",
        brand: "#64FFDA",
      },
      borderColor: ['active']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
