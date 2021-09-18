module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Poppins: `'Poppins', serif`,
        DmMono: `'DM Mono', monospace`,
      },
      colors: {
        brand: "#057E86",
        secondary: {
          500: "#D2394B",
          600: "#BB2B3C",
        },
        primary: "#1235F0",
      },
      zIndex:{
          '1':'-1'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
