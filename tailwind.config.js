/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#EEEEEE",
        "mid-gray": "#888888",
        "dark-gray": "#303030",
        "nav-blue": "#229AC8",
        "dark-blue": "#2786ab",
      },
    },
  },
  plugins: [],
};
