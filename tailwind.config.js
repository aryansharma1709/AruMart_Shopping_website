const colors=require('tailwindcss/colors');
module.exports = {
   content: ["src/**/*.jsx","./index.html"],
  theme: {
    extend: {
      padding:{
        12.5:"50px",
      },
      width: {
        '10p': '10%',
        '20p': '20%',
        '40p': '40%',
        '50p': '50%',
        '90p': '90%',
        '60p': '60%',
        '15':"50px",
        '4':"110px",
      },
      height: {
        '10p': '10%',
        '20p': '20%',
        '40p': '40%',
        '90p': '90%',
        '60p': '60%',
        "120":"30rem",
        "140":"40rem",
      },
      margin: {
        '1/20': '5%',
        '1/3': '33.3333%',
        '1/4': '25%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        'full': '100%',
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
  },
  plugins: [],
}
