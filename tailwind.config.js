/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "mauve-95":"#121113",
        "mauve-90":"#1A191B",
        "mauve-80":"#232225",
        "mauve-70":"#2B292D",
        "mauve-60":"#323035",
        "mauve-50":"#3C393F",
        "mauve-40":"#49474E",
        "mauve-30":"#625F69",
      }
    },
  },
  plugins: [],
}