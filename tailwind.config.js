/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "emerald",
      "cmyk",
      "cupcake",
      "light",
      "forest",
      "dark",
      "bumblebee",
      "corporate",
      "retro",
      "cyberpunk",
      "halloween",
      "garden",
      "pastel",
      "fantasy",
      "wireframe",
      "luxury",
      "dracula",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
    ],
  },
};
