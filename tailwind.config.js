/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        springgreen: "#00f570",
        black: "#000",
        white: "#fff",
        red: "#ff0606",
        blue: "#0500ff",
      },
      spacing: {},
      fontFamily: {
        inika: "Inika",
        kadwa: "Kadwa",
        inter: "Inter",
        "inknut-antiqua": "'Inknut Antiqua'",
      },
      borderRadius: {
        "8xs": "5px",
        xl: "20px",
        "3xs": "10px",
      },
    },
    fontSize: {
      mid: "17px",
      lg: "18px",
      "11xl": "30px",
      base: "16px",
      "21xl": "40px",
      "6xl": "25px",
      mini: "15px",
      xs: "12px",
      "3xl": "22px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
