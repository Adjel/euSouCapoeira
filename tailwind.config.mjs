/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,js}",
  ".src/component/**/*.{html,js,jsx}",
  ".src/page/**/*.{html,js,jsx}",
];
export const theme = {
  extend: {
    colors: {
      "background-medium-gray": "var(--background-medium-gray)",
    },
  },
};
export const plugins = [];
