module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'anton': ['Anton', 'sans-serif'], // Example font family
        'lora': ['Lora', 'serif'], // Example font family
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
 
}
