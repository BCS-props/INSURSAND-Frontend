/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      cairo: ["Cairo", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      chakra: ["Chakra Petch", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [require("tailwindcss-animated")],
};
