/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      ff: "Manrope, sans-serif",
    },
    extend: {
      colors: {
        LightCyan: "hsl(193, 38%, 86%)",
        NeonGreen: "hsl(150, 100%, 66%)",
        GrayishBlue: "hsl(217, 19%, 38%)",
        DarkGrayish: "hsl(217, 19%, 24%)",
        DarkBlue: "hsl(218, 23%, 16%)",
      },
      width: {
        32: "32rem",
      },
      letterSpacing: {
        widest: "0.3em",
      },
      boxShadow: {
        shadow2xl: "0 0 25px 0 hsl(150, 100%, 66%)",
      },
    },
  },
  plugins: [],
};
