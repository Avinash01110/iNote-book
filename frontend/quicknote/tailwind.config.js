/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // colors used in the project
        "primary-100": "#019b98",
        "primary-200": "#55ccc9",
        "primary-300": "#c1ffff",
        "accent-100": "#dd0025",
        "accent-200": "#ffbfab",
        "text-100": "#014e60",
        "text-200": "#3f7a8d",
        "text-300": "#323232",
        "bg-100": "#fbfbfb",
        "bg-200": "#f1f1f1",
        "bg-300": "#c8c8c8",
        "cream": "#FFFBF2"
      },
      screens: {
        "xs": "480px",
        "xxs": "380px"
      },
    },
  },
  plugins: [],
};
