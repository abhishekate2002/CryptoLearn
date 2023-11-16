/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-orange": "#E79F3D",
        "custom-grey": "#766D6D",
      },
    },
  },
  plugins: [],
};
