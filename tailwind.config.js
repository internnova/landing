module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway"],
        montserrat: ["Montserrat"],
        inter: ["Inter"],
        nunito: ["Nunito"],
      },
      colors: {
        accent: {
          primary: {
            DEFAULT: "var(--color-primary)",
          },
        },
      },
    },
  },
  plugins: [],
};
