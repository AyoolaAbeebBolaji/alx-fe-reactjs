/* module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}; */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
