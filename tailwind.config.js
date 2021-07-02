module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navy: "#060e1a",
        "navy-light": "#081424",
        brand: "#64FFDA",
        "light-gray": "#ccd6f6",
      },
      borderColor: ["active"],
      boxShadow: {
        "shadow-gray":
          "0 20px 25px -5px rgba(37, 37, 37, 0.1), 0 10px 10px -5px rgba(29, 29, 29, 0.04)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
