/** @type {import('tailwindcss').Config} */

const { addDynamicIconSelectors } = require('@iconify/tailwind')


module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "black": "#000000",
        "dark-grey": "#2B463C",
        "dark-green": "#688F4E",
        "light-green": "#B1D182",
        "light-grey": "#F4F1E9",
        "placeholder": "#8E8E8E",
        "bg-light-grey": "#EEEEEE",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
