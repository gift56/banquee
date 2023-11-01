/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5BB5A2",
        dark: "#1A191E",
        navhover: "#F8F8F8",
        bordergray: "#E8E8E8",
        featureBg: "#E8F2EE",
      },
      fontFamily: {
        dm: "'DM Sans', sans-serif",
      },
      screens: {
        tab: "948px",
      },
      animation: {
        switchImages: "switchImages 4s infinite",
      },
      keyframes: {
        switchImages: {
          "0%": {
            zIndex: 0,
            transform: "translateX(0)",
          },
          "50%": {
            zIndex: 20,
            transform: "translateX(10%)",
          },
          "100%": {
            zIndex: 0,
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
