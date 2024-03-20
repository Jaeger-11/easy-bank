/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      smd: '600px',
      md: '825px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        lightGray: "hsl(0, 0%, 98%)",
        grayishBlue:"hsl(233, 8%, 62%)",
        lightGrayishBlue:"hsl(220, 16%, 96%)",
        darkBlue: "hsl(233, 26%, 24%)",
        limeGreen: "hsl(136, 65%, 51%)",
        brightCyan: "hsl(192, 70%, 51%)"
      },
      fontFamily: {
        public:['Public Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

