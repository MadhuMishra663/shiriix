// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{ts,tsx}",
//   ],
//   theme: {
//      extend: {
//   animation: {
//     pastelMove: "pastelMove 20s ease infinite",
//     gradient: "gradient 8s ease infinite",
//     float: "float 6s ease-in-out infinite",
//     slideIn: "slideIn 0.5s ease-out",
//   },

//   keyframes: {
//     pastelMove: {
//       "0%": { backgroundPosition: "0% 50%" },
//       "50%": { backgroundPosition: "100% 50%" },
//       "100%": { backgroundPosition: "0% 50%" },
//     },

//     gradient: {
//       "0%, 100%": { backgroundPosition: "0% 50%" },
//       "50%": { backgroundPosition: "100% 50%" },
//     },

//     float: {
//       "0%, 100%": { transform: "translateY(0px)" },
//       "50%": { transform: "translateY(-20px)" },
//     },

//     slideIn: {
//       "0%": { opacity: 0, transform: "translateX(100%)" },
//       "100%": { opacity: 1, transform: "translateX(0)" },
//     },
//   },
// },


//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        pastelMove: "pastelMove 20s ease infinite",
      },
      keyframes: {
        pastelMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
    },
  },
  plugins: [],
};
