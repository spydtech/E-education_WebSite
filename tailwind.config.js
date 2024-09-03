

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          'anton': ['Anton', 'sans-serif'], // Example font family
          'lora': ['Lora', 'serif'], // Example font family
        },
        animation: {
          'spin-slow': 'spin 5s linear infinite', // Adjust the duration (5s) to control the speed
        },
        keyframes: {
          spin: {
            from: {
              transform: 'rotate(0deg)',
            },
            to: {
              transform: 'rotate(360deg)',
            },
          },
        },
      },
    },
    plugins: [
      require('flowbite/plugin')
    ],
  };
  