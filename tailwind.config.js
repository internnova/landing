module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        sans: ["Nunito Sans"],
      },
      colors: {
        accent: {
          primary: {
            DEFAULT: "var(--color-primary)",
          },
        },
      },
      screens: {
        tablet: "900px",
      },
    },
  },
  plugins: [],
};

//sans basically makes it default oh i see
//then what about montserrat
//what
// that you can do via css/give it a class
