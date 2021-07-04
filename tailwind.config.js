module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navy: "#060e1a",
        "navy-light": "#081424",
        "navy-lightest": "#081424db",
        brand: "#64FFDA",
        "brand-light": "#64ffda45",
        "light-gray": "#ccd6f6",
      },
      boxShadow: {
        "shadow-gray": "0px 3px 9px 2px rgba(59,59,59,0.41)",
      },
    },
  },
  variants: {
    extend: {
      margin: ["first"],
      borderColor: ["active"],
    },
  },
  plugins: [],
};
