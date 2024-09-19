// // const [themeIndex, setThemeIndex] = useState(0);
// // const changeTheme = () => {
// //   setThemeIndex((prevIndex) => (prevIndex + 1) % gradientThemes.length);
// // };
// // <button
// // className="flex items-center justify-center p-2 text-white font-semibold"
// // onClick={changeTheme}
// // >
// // Change Theme
// // </button>
// //  const gradientThemes = [
// //   {
// //     gradient: "bg-gradient-to-r from-[#4CA1AF] to-[#204349]", // Default theme
// //     textColor: "text-white" // Light text color for dark background
// //   },
// //   {
// //     gradient: "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500", // Theme 1
// //     textColor: "text-red-500" // Light text color for vibrant gradient
// //   },
// //   {
// //     gradient: "bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500", // Theme 2
// //     textColor: "text-gray-800" // Dark text color for bright gradient
// //   },
// //   {
// //     gradient: "bg-gradient-to-r from-green-400 to-blue-600", // Theme 3
// //     textColor: "text-green-600" // Light text color for dark green to blue gradient
// //   },
// //   {
// //     gradient: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500", // Theme 4
// //     textColor: "text-pink-600" // Light text color for gradient with darker tones
// //   }
// // ];
// // export default gradientThemes;

// // themeUtils.js

// export const gradientThemes = [
//   {
//     gradient: "bg-gradient-to-r from-[#4CA1AF] to-[#204349]", // Default theme
//     textColor: "text-white" // Light text color for dark background
//   },
//   {
//     gradient: "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500", // Theme 1
//     textColor: "text-red-500" // Light text color for vibrant gradient
//   },
//   {
//     gradient: "bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500", // Theme 2
//     textColor: "text-gray-800" // Dark text color for bright gradient
//   },
//   {
//     gradient: "bg-gradient-to-r from-green-400 to-blue-600", // Theme 3
//     textColor: "text-green-600" // Light text color for dark green to blue gradient
//   },
//   {
//     gradient: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500", // Theme 4
//     textColor: "text-pink-600" // Light text color for gradient with darker tones
//   }
// ];

// export const changeTheme = (currentThemeIndex, setThemeIndex) => {
//   setThemeIndex((prevIndex) => (prevIndex + 1) % gradientThemes.length);
// };
