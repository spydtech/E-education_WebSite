// module.exports = {
//   content: ['./src/**/*.{js,jsx,ts,tsx}'],
//   theme: {
//     extend: {
//       fontFamily: {
//         'anton': ['Anton', 'sans-serif'], // Example font family
//         'lora': ['Lora', 'serif'], // Example font family
//       },
      
//     },
//   },
//   plugins: [
//     require('flowbite/plugin')
//   ],
 
// }

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'anton': ['Anton', 'sans-serif'], // Example font family
        'lora': ['Lora', 'serif'], // Example font family
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'perspective(1000px) rotateY(0deg)'},
          '100%': { transform: 'perspective(1000px) rotateY(360deg)'}
        }
      },
      animation: {
        rotate: 'rotate 30s linear infinite',
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
