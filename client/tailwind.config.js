/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height:{
        "cal": "[calc(100% - 64px)]"
      },
      colors: {
        "main-grey": "#212026",
      },
    },
  },
  plugins: [],
};
