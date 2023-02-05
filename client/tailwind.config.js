/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        cal: "[calc(100% - 64px)]",
      },
      colors: {
        "main-grey": "#212026",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
            "background-position": "rotate(0deg)"
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
            "background-position": "rotate(360deg)"
          },
        },
      },

      animation: {
        text: "text 5s ease infinite",
      },
    },
  },
  plugins: [
    // scrollbar
    require("tailwind-scrollbar"),
  ],
  variants: {
    scrollbar: ["rounded"],
  },
};
