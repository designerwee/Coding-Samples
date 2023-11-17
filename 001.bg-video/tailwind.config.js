/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html'],
   theme: {
      extend: {
         colors: {
            orr: '#ff4500',
            dark: '#292d3e',
            light: '#d4d6dc',
         },
         fontFamily: {
            exo2: ["'Exo 2', sans-serif"],
            inter: ["'Inter', sans-serif"],
            notokr: ["'Noto Sans KR', sans-serif"],
         },
      },
   },
   plugins: [require('tailwindcss-debug-screens')],
};
