const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],

  theme: {
    extend: {},
  },
  plugins: [function ({ addUtilities }) {
    const newUtilities = {
      ".scrollbar-hidden": {
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
        "-ms-overflow-style": "none",
      },
    };
    addUtilities(newUtilities, ["responsive", "hover"]);
  }, flowbite.plugin()],
};
