// // import React, { useEffect, useState } from "react";
// // import { useNavigate, Link } from "react-router-dom";
// // import FooterPart from "../../../footer/Footer";
// // import Navbar from "../../../../Navbar";
// // import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
// // import { MdArrowOutward } from "react-icons/md";
// // import cardImage from "../../../../../assets/cardImage.png";

// // const SoftwareTestingArray = () => {
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     window.scrollTo(0, 0);
// //   }, []);

// //   // Card Data
// //   const softwareTestingArray = [
// //     {
// //       id: 1,
// //       title: "Unit Testing",
// //       description: "Testing individual components in isolation.",
// //       link: "/software-testing/unit-testing",
// //       image: cardImage,
// //       profilePic:
// //         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
// //       name: "Jane Smith",
// //       rating: 4.3, // Add dummy rating
// //       price: "$29.99", // Add dummy price
// //     },
// //     {
// //       id: 2,
// //       image: cardImage,
// //       title: "Integration Testing",
// //       description: "Testing software components together.",
// //       link: "/software-testing/intigration-testing",
// //       profilePic:
// //         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
// //       name: "Jane Smith",
// //       rating: 4.3, // Add dummy rating
// //       price: "$29.99", // Add dummy price
// //     },
// //     {
// //       id: 3,
// //       image: cardImage,
// //       title: "System Testing",
// //       description: "Testing the complete integrated software.",
// //       link: "/software-testing/system-testing",
// //       profilePic:
// //         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
// //       name: "Jane Smith",
// //       rating: 4.3, // Add dummy rating
// //       price: "$29.99", // Add dummy price
// //     },
// //     {
// //       id: 4,
// //       image: cardImage,
// //       title: "Acceptance Testing",
// //       description: "Testing if software meets user needs.",

// //       link: "/software-testing/acceptance-testing",
// //       profilePic:
// //         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
// //       name: "Jane Smith",
// //       rating: 4.3, // Add dummy rating
// //       price: "$29.99", // Add dummy price
// //     },
// //     {
// //       id: 5,
// //       image: cardImage,
// //       title: "Performance Testing",
// //       description: "Testing speed and stability.",
// //       link: "/software-testing/performance-testing",
// //       profilePic:
// //         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
// //       name: "Jane Smith",
// //       rating: 4.3, // Add dummy rating
// //       price: "$29.99", // Add dummy price
// //     },
// //     {
// //       id: 6,
// //       image: cardImage,
// //       title: "Security Testing",
// //       description: "Testing for vulnerabilities.",
// //       link: "/software-testing/security-testing",
// //       profilePic:
// //         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
// //       name: "Jane Smith",
// //       rating: 4.3, // Add dummy rating
// //       price: "$29.99", // Add dummy price
// //     },
// //     {
// //       id: 7,
// //       image: cardImage,
// //       title: "Usability Testing",
// //       description: "Testing user-friendliness.",
// //       link: "/software-testing/usability-testing",
// //       profilePic:
// //         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
// //       name: "Jane Smith",
// //       rating: 4.3, // Add dummy rating
// //       price: "$29.99", // Add dummy price
// //     },
// //     {
// //       id: 8,
// //       image: cardImage,
// //       title: "Compatibility Testing",
// //       description: "Testing across different environments.",
// //       link: "/software-testing/compatability-testing",
// //       profilePic:
// //         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
// //       name: "Jane Smith",
// //       rating: 4.3, // Add dummy rating
// //       price: "$29.99", // Add dummy price
// //     },
// //     {
// //       id: 9,
// //       image: cardImage,
// //       title: "Regression Testing",
// //       description: "Testing recent changes for new issues.",
// //       link: "/software-testing/regression-testing",
// //       profilePic:
// //         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
// //       name: "Jane Smith",
// //       rating: 4.3, // Add dummy rating
// //       price: "$29.99", // Add dummy price
// //     },
// //     {
// //       id: 10,
// //       image: cardImage,
// //       title: "Stress Testing",
// //       description: "Testing under extreme conditions.",
// //       link: "/software-testing/stress-testing",
// //       profilePic:
// //         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
// //       name: "Jane Smith",
// //       rating: 4.3, // Add dummy rating
// //       price: "$29.99", // Add dummy price
// //     },
// //     {
// //       id: 11,
// //       image: cardImage,
// //       title: "Manual Testing",
// //       description: "Testing done manually by testers.",
// //       link: "/software-testing/manual-testing",
// //       profilePic:
// //         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
// //       name: "Jane Smith",
// //       rating: 4.3, // Add dummy rating
// //       price: "$29.99", // Add dummy price
// //     },
// //     {
// //       id: 12,
// //       image: cardImage,
// //       title: "Automated Testing",
// //       description: "Testing using automation tools.",
// //       link: "/software-testing/automation-testing",
// //       profilePic:
// //         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
// //       name: "Jane Smith",
// //       rating: 4.3, // Add dummy rating
// //       price: "$29.99", // Add dummy price
// //     },
// //   ];

// //   const renderStars = (rating) => {
// //     const stars = [];
// //     for (let i = 1; i <= 5; i++) {
// //       if (rating >= i) {
// //         stars.push(<FaStar key={i} className="text-yellow-400" />);
// //       } else if (rating >= i - 0.5) {
// //         stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
// //       } else {
// //         stars.push(<FaRegStar key={i} className="text-yellow-400" />);
// //       }
// //     }
// //     return stars;
// //   };

// //   return (
// //     <>
// //       <Navbar />
// //       <div className="bg-gray-100 min-h-screen pb-10">
// //         <div className="container mx-auto px-4 pt-8">
// //           <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Software Testing Courses</h1>
// //           <div className="mb-10 flex justify-center">
// //             <input
// //               type="text"
// //               placeholder="Search..."
// //               value={searchQuery}
// //               onChange={(e) => setSearchQuery(e.target.value)}
// //               className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             />
// //           </div>
// //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
// //             {softwareTestingArray
// //               .filter((item) =>
// //                 item.title.toLowerCase().includes(searchQuery.toLowerCase())
// //               )
// //               .map((item) => (
// //                 <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
// //                   <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
// //                   <div className="p-6">
// //                     <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
// //                     <p className="text-gray-600 mb-4">{item.description}</p>
// //                     <div className="flex items-center mb-4">
// //                       <img src={item.profilePic} alt={item.name} className="w-10 h-10 rounded-full mr-3" />
// //                       <div>
// //                         <p className="text-gray-700 font-semibold">{item.name}</p>
// //                         <div className="flex text-yellow-400">{renderStars(item.rating)}</div>
// //                       </div>
// //                     </div>
// //                     <p className="text-lg font-bold text-gray-900 mb-4">{item.price}</p>
// //                     <Link
// //                       to={item.link}
// //                       className="flex items-center justify-between text-blue-500 hover:text-blue-600 font-semibold"
// //                     >
// //                       <span>Learn More</span>
// //                       <MdArrowOutward className="text-xl" />
// //                     </Link>
// //                   </div>
// //                 </div>
// //               )}
// //           </div>
// //         </div>
// //         <FooterPart />
// //       </div>
// //     </>
// //   );
// // };

// // export default SoftwareTestingArray;

// import React, { useEffect, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import FooterPart from "../../../footer/Footer";
// import Navbar from "../../../../Navbar";
// import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
// import { MdArrowOutward } from "react-icons/md";
// import cardImage from "../../../../../assets/cardImage.png";

// const SoftwareTestingArray = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   // Card Data
//   const softwareTestingArray = [
//     {
//       id: 1,
//       title: "Unit Testing",
//       description: "Testing individual components in isolation.",
//       link: "/software-testing/unit-testing",
//       image: cardImage,
//       profilePic:
//         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 2,
//       image: cardImage,
//       title: "Integration Testing",
//       description: "Testing software components together.",
//       link: "/software-testing/intigration-testing",
//       profilePic:
//         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 3,
//       image: cardImage,
//       title: "System Testing",
//       description: "Testing the complete integrated software.",
//       link: "/software-testing/system-testing",
//       profilePic:
//         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 4,
//       image: cardImage,
//       title: "Acceptance Testing",
//       description: "Testing if software meets user needs.",

//       link: "/software-testing/acceptance-testing",
//       profilePic:
//         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 5,
//       image: cardImage,
//       title: "Performance Testing",
//       description: "Testing speed and stability.",
//       link: "/software-testing/performance-testing",
//       profilePic:
//         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 6,
//       image: cardImage,
//       title: "Security Testing",
//       description: "Testing for vulnerabilities.",
//       link: "/software-testing/security-testing",
//       profilePic:
//         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 7,
//       image: cardImage,
//       title: "Usability Testing",
//       description: "Testing user-friendliness.",
//       link: "/software-testing/usability-testing",
//       profilePic:
//         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 8,
//       image: cardImage,
//       title: "Compatibility Testing",
//       description: "Testing across different environments.",
//       link: "/software-testing/compatability-testing",
//       profilePic:
//         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 9,
//       image: cardImage,
//       title: "Regression Testing",
//       description: "Testing recent changes for new issues.",
//       link: "/software-testing/regression-testing",
//       profilePic:
//         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 10,
//       image: cardImage,
//       title: "Stress Testing",
//       description: "Testing under extreme conditions.",
//       link: "/software-testing/stress-testing",
//       profilePic:
//         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 11,
//       image: cardImage,
//       title: "Manual Testing",
//       description: "Testing done manually by testers.",
//       link: "/software-testing/manual-testing",
//       profilePic:
//         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 12,
//       image: cardImage,
//       title: "Automated Testing",
//       description: "Testing using automation tools.",
//       link: "/software-testing/automation-testing",
//       profilePic:
//         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//   ];

//   const renderStarRating = (rating) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 !== 0;

//     for (let i = 0; i < fullStars; i++) {
//       stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
//     }
//     if (hasHalfStar) {
//       stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
//     }
//     while (stars.length < 5) {
//       stars.push(
//         <FaRegStar key={`empty-${stars.length}`} className="text-yellow-500" />
//       );
//     }

//     return <div className="flex">{stars}</div>;
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen ">
//       <Navbar />
//       <img
//         src="https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?ga=GA1.1.1671979702.1717669022&semt=sph"
//         className="object-cover w-full md:h-[490px]"
//         alt="Background Image"
//       />
//       <div className="px-20">
//         <div className="max-w-7xl mx-auto px-4 py-6">
//           <div className="flex items-center justify-center mb-4">
//             <span className="bg-gradient-to-r text-4xl font-bold from-[#0098f1] to-[#f6ac14] bg-clip-text text-transparent">
//               Software Testing Courses
//             </span>
//           </div>
//           <div className="mb-4 flex justify-end ">
//             <input
//               type="text"
//               placeholder="Search by course name ......"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="px-4 py-2 border border-blue-600 rounded placeholder-blue-500"
//             />
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {softwareTestingArray
//               .filter((course) =>
//                 course.title.toLowerCase().includes(searchQuery.toLowerCase())
//               )
//               .map((course) => (
//                 <div
//                   key={course.id}
//                   className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
//                 >
//                   <img
//                     src={course.image}
//                     alt={course.title}
//                     className="w-full h-32 object-cover rounded-md mb-4"
//                   />
//                   <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
//                   <p className="text-gray-600 mb-2">{course.description}</p>
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center text-gray-900">
//                       <span className="mr-2 font-bold">{course.rating}</span>
//                       {renderStarRating(course.rating)}
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between mb-2">
//                     <div className="flex items-center">
//                       <img
//                         src={course.profilePic}
//                         alt={course.name}
//                         className="w-8 h-8 rounded-full mr-2"
//                       />
//                       <div>
//                         <span className="text-gray-700 font-bold">
//                           {course.name}
//                         </span>
//                         <p className="text-gray-500 text-xs">2001 Enrolled</p>
//                       </div>
//                     </div>
//                     <span className="text-gray-900 font-bold">
//                       {course.price}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//       <div>
//         <FooterPart />
//       </div>
//     </div>
//   );
// };

// export default SoftwareTestingArray;
// import React, { useEffect, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import FooterPart from "../../../footer/Footer";
// import Navbar from "../../../../Navbar";
// import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
// import { MdArrowOutward } from "react-icons/md";
// import cardImage from "../../../../../assets/cardImage.png";

// const SoftwareTestingArray = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   // Card Data
//   const softwareTestingArray = [
//     {
//       id: 1,
//       title: "Unit Testing",
//       description: "Testing individual components in isolation.",
//       link: "/software-testing/unit-testing",
//       image: cardImage,
//       profilePic:
//         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 2,
//       image: cardImage,
//       title: "Integration Testing",
//       description: "Testing software components together.",
//       link: "/software-testing/intigration-testing",
//       profilePic:
//         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 3,
//       image: cardImage,
//       title: "System Testing",
//       description: "Testing the complete integrated software.",
//       link: "/software-testing/system-testing",
//       profilePic:
//         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 4,
//       image: cardImage,
//       title: "Acceptance Testing",
//       description: "Testing if software meets user needs.",

//       link: "/software-testing/acceptance-testing",
//       profilePic:
//         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 5,
//       image: cardImage,
//       title: "Performance Testing",
//       description: "Testing speed and stability.",
//       link: "/software-testing/performance-testing",
//       profilePic:
//         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 6,
//       image: cardImage,
//       title: "Security Testing",
//       description: "Testing for vulnerabilities.",
//       link: "/software-testing/security-testing",
//       profilePic:
//         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 7,
//       image: cardImage,
//       title: "Usability Testing",
//       description: "Testing user-friendliness.",
//       link: "/software-testing/usability-testing",
//       profilePic:
//         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 8,
//       image: cardImage,
//       title: "Compatibility Testing",
//       description: "Testing across different environments.",
//       link: "/software-testing/compatability-testing",
//       profilePic:
//         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 9,
//       image: cardImage,
//       title: "Regression Testing",
//       description: "Testing recent changes for new issues.",
//       link: "/software-testing/regression-testing",
//       profilePic:
//         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 10,
//       image: cardImage,
//       title: "Stress Testing",
//       description: "Testing under extreme conditions.",
//       link: "/software-testing/stress-testing",
//       profilePic:
//         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 11,
//       image: cardImage,
//       title: "Manual Testing",
//       description: "Testing done manually by testers.",
//       link: "/software-testing/manual-testing",
//       profilePic:
//         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 12,
//       image: cardImage,
//       title: "Automated Testing",
//       description: "Testing using automation tools.",
//       link: "/software-testing/automation-testing",
//       profilePic:
//         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//   ];

//   const renderStars = (rating) => {
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       if (rating >= i) {
//         stars.push(<FaStar key={i} className="text-yellow-400" />);
//       } else if (rating >= i - 0.5) {
//         stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
//       } else {
//         stars.push(<FaRegStar key={i} className="text-yellow-400" />);
//       }
//     }
//     return stars;
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="bg-gray-100 min-h-screen pb-10">
//         <div className="container mx-auto px-4 pt-8">
//           <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Software Testing Courses</h1>
//           <div className="mb-10 flex justify-center">
//             <input
//               type="text"
//               placeholder="Search..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//             {softwareTestingArray
//               .filter((item) =>
//                 item.title.toLowerCase().includes(searchQuery.toLowerCase())
//               )
//               .map((item) => (
//                 <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
//                   <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
//                   <div className="p-6">
//                     <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
//                     <p className="text-gray-600 mb-4">{item.description}</p>
//                     <div className="flex items-center mb-4">
//                       <img src={item.profilePic} alt={item.name} className="w-10 h-10 rounded-full mr-3" />
//                       <div>
//                         <p className="text-gray-700 font-semibold">{item.name}</p>
//                         <div className="flex text-yellow-400">{renderStars(item.rating)}</div>
//                       </div>
//                     </div>
//                     <p className="text-lg font-bold text-gray-900 mb-4">{item.price}</p>
//                     <Link
//                       to={item.link}
//                       className="flex items-center justify-between text-blue-500 hover:text-blue-600 font-semibold"
//                     >
//                       <span>Learn More</span>
//                       <MdArrowOutward className="text-xl" />
//                     </Link>
//                   </div>
//                 </div>
//               )}
//           </div>
//         </div>
//         <FooterPart />
//       </div>
//     </>
//   );
// };

// export default SoftwareTestingArray;

import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import FooterPart from "../../../footer/Footer";
import Navbar from "../../../../Navbar";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import cardImage from "../../../../../assets/cardImage.png";

const SoftwareTestingArray = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Card Data
  const softwareTestingArray = [
    {
      id: 1,
      title: "Unit Testing",
      description: "Testing individual components in isolation.",
      link: "/software-testing/unit-testing",
      image: cardImage,
      profilePic:
        "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
      name: "Jane Smith",
      rating: 4.3, // Add dummy rating
      price: "$29.99", // Add dummy price
    },
    {
      id: 2,
      image: cardImage,
      title: "Integration Testing",
      description: "Testing software components together.",
      link: "/software-testing/intigration-testing",
      profilePic:
        "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
      name: "Jane Smith",
      rating: 4.3, // Add dummy rating
      price: "$29.99", // Add dummy price
    },
    {
      id: 3,
      image: cardImage,
      title: "System Testing",
      description: "Testing the complete integrated software.",
      link: "/software-testing/system-testing",
      profilePic:
        "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
      name: "Jane Smith",
      rating: 4.3, // Add dummy rating
      price: "$29.99", // Add dummy price
    },
    {
      id: 4,
      image: cardImage,
      title: "Acceptance Testing",
      description: "Testing if software meets user needs.",

      link: "/software-testing/acceptance-testing",
      profilePic:
        "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
      name: "Jane Smith",
      rating: 4.3, // Add dummy rating
      price: "$29.99", // Add dummy price
    },
    {
      id: 5,
      image: cardImage,
      title: "Performance Testing",
      description: "Testing speed and stability.",
      link: "/software-testing/performance-testing",
      profilePic:
        "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
      name: "Jane Smith",
      rating: 4.3, // Add dummy rating
      price: "$29.99", // Add dummy price
    },
    {
      id: 6,
      image: cardImage,
      title: "Security Testing",
      description: "Testing for vulnerabilities.",
      link: "/software-testing/security-testing",
      profilePic:
        "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
      name: "Jane Smith",
      rating: 4.3, // Add dummy rating
      price: "$29.99", // Add dummy price
    },
    {
      id: 7,
      image: cardImage,
      title: "Usability Testing",
      description: "Testing user-friendliness.",
      link: "/software-testing/usability-testing",
      profilePic:
        "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
      name: "Jane Smith",
      rating: 4.3, // Add dummy rating
      price: "$29.99", // Add dummy price
    },
    {
      id: 8,
      image: cardImage,
      title: "Compatibility Testing",
      description: "Testing across different environments.",
      link: "/software-testing/compatability-testing",
      profilePic:
        "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
      name: "Jane Smith",
      rating: 4.3, // Add dummy rating
      price: "$29.99", // Add dummy price
    },
    {
      id: 9,
      image: cardImage,
      title: "Regression Testing",
      description: "Testing recent changes for new issues.",
      link: "/software-testing/regression-testing",
      profilePic:
        "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
      name: "Jane Smith",
      rating: 4.3, // Add dummy rating
      price: "$29.99", // Add dummy price
    },
    {
      id: 10,
      image: cardImage,
      title: "Stress Testing",
      description: "Testing under extreme conditions.",
      link: "/software-testing/stress-testing",
      profilePic:
        "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
      name: "Jane Smith",
      rating: 4.3, // Add dummy rating
      price: "$29.99", // Add dummy price
    },
    {
      id: 11,
      image: cardImage,
      title: "Manual Testing",
      description: "Testing done manually by testers.",
      link: "/software-testing/manual-testing",
      profilePic:
        "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
      name: "Jane Smith",
      rating: 4.3, // Add dummy rating
      price: "$29.99", // Add dummy price
    },
    {
      id: 12,
      image: cardImage,
      title: "Automated Testing",
      description: "Testing using automation tools.",
      link: "/software-testing/automation-testing",
      profilePic:
        "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
      name: "Jane Smith",
      rating: 4.3, // Add dummy rating
      price: "$29.99", // Add dummy price
    },
  ];

  const renderStarRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
    }
    while (stars.length < 5) {
      stars.push(
        <FaRegStar key={`empty-${stars.length}`} className="text-yellow-500" />
      );
    }

    return <div className="flex">{stars}</div>;
  };

  return (
    <div className="bg-gray-100 min-h-screen ">
      <Navbar />
      <img
        src="https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?ga=GA1.1.1671979702.1717669022&semt=sph"
        className="object-cover w-full md:h-[490px]"
        alt="Background Image"
      />
      <div className="px-20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center mb-4">
            <span className="bg-gradient-to-r text-4xl font-bold from-[#0098f1] to-[#f6ac14] bg-clip-text text-transparent">
              Software Testing Courses
            </span>
          </div>
          <div className="mb-4 flex justify-end ">
            <input
              type="text"
              placeholder="Search by course name ......"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 border border-blue-600 rounded placeholder-blue-500"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {softwareTestingArray
              .filter((course) =>
                course.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((course) => (
                <div
                  key={course.id}
                  className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                     <a href={course.link} rel="noopener noreferrer">
                  <div className="">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-32 object-cover rounded-md mb-4"
                  />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                  <p className="text-gray-600 mb-2">{course.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-900">
                      <span className="mr-2 font-bold">{course.rating}</span>
                      {renderStarRating(course.rating)}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <img
                        src={course.profilePic}
                        alt={course.name}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <div>
                        <span className="text-gray-700 font-bold">
                          {course.name}
                        </span>
                        <p className="text-gray-500 text-xs">2001 Enrolled</p>
                      </div>
                    </div>
                    <span className="text-gray-900 font-bold">
                      {course.price}
                    </span>
                  </div>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div>
        <FooterPart />
      </div>
    </div>
  );
};

export default SoftwareTestingArray;
