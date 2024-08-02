const colors=require('tailwindcss/colors');
module.exports = {
   content: ["src/**/*.jsx","./index.html"],
  theme: {
    extend: {
      padding:{
        12.5:"50px",
      },
      width:{
        15:"50px",
      },
      height:{
        "120":"30rem",
        "140":"40rem",
        
      },
    },
  
  colors:{
    primary:{
      light:"rgb(245,148,148)",
      default:"rgb(255,81,81)",
      dark:"rgb(248,47,47)",
    },
     gray:
       {
         200: "rgb(244,245,246)",
         500: "rgb(145,148,150)",
         700: "rgb(96,96,96)",
       },
    white:colors.white,
    black:colors.black,
  },
  },
  plugins: [],
}
