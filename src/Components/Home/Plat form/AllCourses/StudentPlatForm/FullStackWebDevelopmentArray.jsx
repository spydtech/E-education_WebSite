// import React, { useEffect, useState } from "react";
// import { FcLike, FcLikePlaceholder } from "react-icons/fc";
// import { useNavigate } from "react-router-dom";
// import WishLists from "../../AddtoCart/WishLists";
// import { Link } from "react-router-dom";
// import Navbar from "../../../../Navbar";
// import Footer from "../../../footer/Footer";
// import { useDispatch, useSelector } from "react-redux";
// import { findCourses, getAllCourses } from "../../../../../State/Course/Action";
// import cardImage from "../../../../../assets";
// import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart } from "react-icons/fa";
// import { MdArrowOutward } from "react-icons/md";

// const FullStackWebDevelopmentArray = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [wishlist, setWishlist] = useState([]);
//   const [sh, setShow] = useState(false);
//   const navigate = useNavigate();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const handleWishList = (course) => {
//     const index = wishlist.findIndex((item) => item.id === course.id);
//     if (index !== -1) {
//       const updatedWishlist = [...wishlist];
//       updatedWishlist.splice(index, 1);
//       setWishlist(updatedWishlist);
//     } else {
//       setWishlist((prevWishlist) => [...prevWishlist, course]);
//     }
//   };

//   useEffect(() => {
//     console.log("wish", wishlist);
//     if (sh) navigate("/wishLists", { state: { wishlist } });
//   }, [wishlist, sh]);

//   const handleDelete = (id) => {
//     setWishlist((prevWishlist) =>
//       prevWishlist.filter((course) => course.id !== id)
//     );
//   };

//   const courses = [
//     {
//       id: 1,
//       title: "Full Stack Web Development",
//       description:
//         "The future of learning The future of learning The future of learning The future of learning",
//       image: cardImage,
//       link: "/fullStack_WebDevelopment/fullStack-Web-Development",
//       rating: 4.3,
//       price: "$17.84",
//       profilePic:
//         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
//       name: "John Doe",
//     },
//     {
//       id: 2,
//       title: "Full Stack JavaScript",
//       description:
//         "The future of learning The future of learning The future of learning The future of learning",
//       image: cardImage,
//       link: "/fullStack_WebDevelopment/full-stack-javascript",
//       rating: 4.5,
//       price: "$19.99",
//       profilePic:
//         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
//       name: "Jane Smith",
//     },
//     {
//       id: 3,
//       title: "MEAN Stack Development",
//       description:
//         "The future of learning The future of learning The future of learning The future of learning",
//       image: cardImage,
//       link: "/fullStack_WebDevelopment/mean-Stack-Developer",
//       rating: 4.8,
//       price: "$21.50",
//       profilePic:
//         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
//       name: "Michael Brown",
//     },
//     {
//       id: 4,
//       title: "Full Stack Python",
//       description:
//         "The future of learning The future of learning The future of learning The future of learning",
//       image: cardImage,
//       link: "/fullStack_WebDevelopment/fullStack-Python-Development",
//       rating: 4.7,
//       price: "$22.99",
//       profilePic:
//         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
//       name: "Emily Davis",
//     },
//     {
//       id: 5,
//       title: "Full Stack Java",
//       description:
//         "The future of learning The future of learning The future of learning The future of learning",
//       image: cardImage,
//       link: "/fullStack_WebDevelopment/fullStack-Java-Development",
//       rating: 4.3,
//       price: "$18.75",
//       profilePic:
//         "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
//       name: "Sarah Wilson",
//     },
//   ];

//   const filteredCourses = courses.filter((course) =>
//     course.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );
//   const renderStarRating = (rating) => {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 >= 0.5;
//     const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
//     return (
//       <div className="flex items-center text-yellow-400">
//         {Array(fullStars)
//           .fill()
//           .map((_, i) => (
//             <FaStar key={`full-${i}`} />
//           ))}
//         {halfStar && <FaStarHalfAlt />}
//         {Array(emptyStars)
//           .fill()
//           .map((_, i) => (
//             <FaRegStar key={`empty-${i}`} />
//           ))}
//       </div>
//     );
//   };

//   return (
//     <>
//       <Navbar />
//       <img
//         src="https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?ga=GA1.1.1671979702.1717669022&semt=sph"
//         className="object-cover  w-full md:h-[490px]"
//         alt="Background Image"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div>
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-4xl font-bold mb-4 text-center text-purple-600 underline">
//           Expand Full Stack <span>Development</span> Courses
//         </h1>

//         <div className="mb-4 flex justify-center">
//           <input
//             type="text"
//             placeholder="Search by course name"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="px-4 py-2 border border-gray-300 rounded focus:outline-none"
//           />
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
//           {courses.map((course) => (
//             <div
//               key={course.id}
//               className="relative bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out max-w-[320px] mx-auto"
//             >
//               <a href={course.link} rel="noopener noreferrer">
//                 <div className="relative">
//                   <FaHeart className="absolute top-2 left-2 ml-2 mt-2 text-red-500 text-2xl bg-white rounded-full p-1 shadow-md cursor-pointer hover:text-red-700" />
//                   <img
//                     src={course.image}
//                     alt={course.title}
//                     className="w-full h-32 object-cover px-3 py-3"
//                   />
//                 </div>
//                 <div className="p-4">
//                   <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
//                     {course.title}
//                     <MdArrowOutward className="text-gray-500 text-2xl" />
//                   </h3>
//                   <p className="text-gray-600 text-sm mb-4">
//                     {course.description}
//                   </p>
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center text-gray-900">
//                       <span className="mr-2 font-bold">{course.rating}</span>
//                       {renderStarRating(course.rating)}
//                     </div>
//                     {/* <span className="text-gray-900 font-bold">{course.price}</span> */}
//                   </div>
//                   <div className="flex items-center justify-between mb-2">
//                     <div className="flex items-center">
//                       <img
//                         src={course.profilePic}
//                         alt={course.name}
//                         className="w-8 h-8 rounded-full mr-2 "
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
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// const CourseCard = ({ course, handleWishList, setShow }) => {
//   const { id, title, description, image, link } = course;
//   const [liked, setLiked] = useState(false);

//   const handleDataTransfer = () => {
//     setShow(true);
//     setLiked((prevLiked) => !prevLiked);
//     handleWishList(course);
//   };

//   return (
//     <div className="mx-auto relative mb-12 cursor-pointer">
//       <Link to={link}>
//         <img
//           src={image}
//           alt={title}
//           className="h-[240px] w-full hover:scale-105 transition-all duration-500 shadow-2xl"
//         />
//         <div
//           className="text-center px-4 py-8 bg-white shadow-lg rounded-md
//                 md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12 hover:-translate-y-4 transition-all duration-300"
//         >
//           <p>
//             {`${description} with`} <span className="font-bold">{title}</span>
//           </p>
//         </div>
//       </Link>
//       <Link>
//         <button id="wishlist" onClick={handleDataTransfer}>
//           {liked ? (
//             <FcLike className="w-8 transition-transform duration-300 transform hover:scale-125 rounded h-8 text-white top-3 left-3 absolute" />
//           ) : (
//             <FcLikePlaceholder className="w-8 rounded text-red-800 h-8 transition-transform duration-300 transform hover:scale-125 top-3 left-3 absolute" />
//           )}
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default FullStackWebDevelopmentArray;

import React, { useEffect, useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import cardImage from "../../../../../assets/cardImage.png";
import { Link } from "react-router-dom";
import Navbar from "../../../../Navbar";
import Footer from "../../../footer/Footer";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const FullStackWebDevelopmentArray = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [sh, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWishList = (course) => {
    const index = wishlist.findIndex((item) => item.id === course.id);
    if (index !== -1) {
      const updatedWishlist = [...wishlist];
      updatedWishlist.splice(index, 1);
      setWishlist(updatedWishlist);
    } else {
      setWishlist((prevWishlist) => [...prevWishlist, course]);
    }
  };

  useEffect(() => {
    console.log("wish", wishlist);
    if (sh) navigate("/wishLists", { state: { wishlist } });
  }, [wishlist, sh]);

  const handleDelete = (id) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((course) => course.id !== id)
    );
  };

  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description:
        "The future of learning The future of learning The future of learning The future of learning",
      image: cardImage,
      link: "/fullStack_WebDevelopment/fullStack-Web-Development",
      rating: 4.3,
      price: "$17.84",
      profilePic:
        "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
      name: "John Doe",
    },
    {
      id: 2,
      title: "Full Stack JavaScript",
      description:
        "The future of learning The future of learning The future of learning The future of learning",
      image: cardImage,
      link: "/fullStack_WebDevelopment/full-stack-javascript",
      rating: 4.5,
      price: "$19.99",
      profilePic:
        "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
      name: "Jane Smith",
    },
    {
      id: 3,
      title: "MEAN Stack Development",
      description:
        "The future of learning The future of learning The future of learning The future of learning",
      image: cardImage,
      link: "/fullStack_WebDevelopment/mean-Stack-Developer",
      rating: 4.8,
      price: "$21.50",
      profilePic:
        "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
      name: "Michael Brown",
    },
    {
      id: 4,
      title: "Full Stack Python",
      description:
        "The future of learning The future of learning The future of learning The future of learning",
      image: cardImage,
      link: "/fullStack_WebDevelopment/fullStack-Python-Development",
      rating: 4.7,
      price: "$22.99",
      profilePic:
        "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
      name: "Emily Davis",
    },
    {
      id: 5,
      title: "Full Stack Java",
      description:
        "The future of learning The future of learning The future of learning The future of learning",
      image: cardImage,
      link: "/fullStack_WebDevelopment/fullStack-Java-Development",
      rating: 4.3,
      price: "$18.75",
      profilePic:
        "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
      name: "Sophia Johnson",
    },
    {
      id: 6,
      title: "MERN Stack Development",
      description:
        "The future of learning The future of learning The future of learning The future of learning",
      image: cardImage,
      link: "/fullStack_WebDevelopment/mern-Stack-Developer",
      rating: 4.9,
      price: "$24.50",
      profilePic:
        "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
      name: "Olivia Williams",
    },
  ];

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderStarRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <div className="flex items-center text-yellow-400">
        {Array(fullStars)
          .fill()
          .map((_, i) => (
            <FaStar key={`full-${i}`} />
          ))}
        {halfStar && <FaStarHalfAlt />}
        {Array(emptyStars)
          .fill()
          .map((_, i) => (
            <FaRegStar key={`empty-${i}`} />
          ))}
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <img
        src="https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?ga=GA1.1.1671979702.1717669022&semt=sph"
        className="object-cover w-full md:h-[490px]"
        alt="Background Image"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-center text-purple-600 underline">
          Expand Data Science <span>Courses</span>
        </h1>

        <div className="mb-4 flex justify-center">
          <input
            type="text"
            placeholder="Search by course name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="relative bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out max-w-[320px] mx-auto"
            >
              <a href={course.link} rel="noopener noreferrer">
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-32 object-cover px-3 py-3"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
                    {course.title}
                    <MdArrowOutward className="text-gray-500 text-2xl" />
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {course.description}
                  </p>
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
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FullStackWebDevelopmentArray;
