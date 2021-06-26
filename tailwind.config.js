module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navy: "#060e1a",
        brand: "#64FFDA",
        "light-gray": "#ccd6f6",
      },
      borderColor: ["active"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
