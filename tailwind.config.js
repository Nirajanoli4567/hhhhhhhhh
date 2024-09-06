/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'darks': '#070707',
        'rad1':'#80A4AC',
        'side':'#DAE6E8',
        'profile':'#A6D7DC',
        'white':'#FFFFFF',
        'calender':'#F4F6F7',
      
      },
      size:
      {
        'small':'10px',
      },
      borderRadius: {
        'extra-large': '2rem',  
        'huge': '3rem',         
      },
    },
  },
  plugins: [],
};
