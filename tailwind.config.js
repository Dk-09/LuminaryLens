/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.{jsx, js}","./src/components/*.{jsx,js}"],
  theme: {
    extend: {
      prespective: {
        '500': "500px",
      },
      fontFamily:{
        Stardom: ["Stardom"],
        MessinaLight: ["MessinaLight"],
        MessinaBold: ["MessinaBold"],
        MessinaRegular: ["MessinaRegular"],
        RanadeRegular: ["RanadaRegular"],
      },
      colors:{
        black: "#000000",
        green: "#C7EF00",
        red: "#FF206E",
        white: "#FFFFFF",
        gray: "#828282",
      },
      fontSize:{
        '10xl': '20rem',
      },
      textUnderlineOffset: {
        9: '20px',
      }
    },
  },
  plugins: [],
}

