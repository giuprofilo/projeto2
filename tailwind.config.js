/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      text: "#010922",
      background: "#f5f7ff",
      'background-2': '#f0eef6',
      "primary-button": "#5b1ef6",
      "secondary-button": "#f4d3fd",
      accent: "#c71ef6",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      slate: colors.slate,
    },
  },
  plugins: [],
};

