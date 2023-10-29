/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-1": "#4475F2",
        "main-2": "#789DFC",
        "main-3": "#D9E3FC",
        "text-1": "#18191F",
        "text-2": "#474A57",
        "text-3": "#969BAB",
      },
    },
  },
  plugins: [],
};
