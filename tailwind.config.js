module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
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
