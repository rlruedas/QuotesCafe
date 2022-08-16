/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily : {
        'Tenorsans' : ['Tenor Sans', 'sans-serif'],
        'Vollkorn' : ['Vollkorn', 'serif']
      }
    },
  },
  plugins: [],
};
