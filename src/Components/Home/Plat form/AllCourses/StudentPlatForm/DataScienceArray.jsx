import React, { useEffect, useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../../../../Navbar";
import Footer from "../../../footer/Footer";
import cardImage from "../../../../../assetss/student/cardImg.png";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
const DataScienceArray = () => {
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
      title: "Introduction to Data Science",
      description:
        "Master data analysis, visualization, and machine learning with Python.",
      image: cardImage,
      link: "/data_Science/introduction-to-data-science",
      rating: 4.7,
      price: "$29.99",
      profilePic:
        "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
      name: "John Doe",
    },
    {
      id: 2,
      title: "Data Science with Python",
      description:
        "Learn machine learning algorithms and their real-world applications.",
      image: cardImage,
      link: "/data_Science/data-science-with-python",
      rating: 4.8,
      price: "$34.50",
      profilePic:
        "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
      name: "Jane Smith",
    },
    {
      id: 3,
      title: "Machine Learning",
      description:
        "Dive deep into neural networks and deep learning techniques.",
      image: cardImage,
      link: "/data_Science/machine-Learning",
      rating: 4.9,
      price: "$39.99",
      profilePic:
        "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
      name: "Michael Brown",
    },
    {
      id: 4,
      title: "Data Visualization",
      description: "Learn to analyze and visualize data using R programming.",
      image: cardImage,
      link: "/data_Science/data-visualization",
      rating: 4.6,
      price: "$25.00",
      profilePic:
        "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
      name: "Emily Davis",
    },
    {
      id: 5,
      title: "Big Data Analytics",
      description:
        "Get introduced to the world of big data technologies and tools.",
      image: cardImage,
      link: "/data_Science/big-data-analysis",
      rating: 4.4,
      price: "$27.75",
      profilePic:
        "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
      name: "Sophia Johnson",
    },
    {
      id: 6,
      title: "Data Analytics",
      description:
        "Understand the basics of artificial intelligence and its applications.",
      image: cardImage,
      link: "/data_Science/data-Analatics",
      rating: 4.9,
      price: "$30.00",
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
        <div className="flex items-center justify-center mb-4">
          <span className="bg-gradient-to-r text-4xl font-bold from-[#0098f1] to-[#f6ac14] bg-clip-text text-transparent">
            Expand Data Science Courses
          </span>
        </div>

        <div className="mb-4 flex justify-end">
          <input
            type="text"
            placeholder="Search by course name ......"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border border-blue-600 rounded placeholder-blue-500"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {filteredCourses.map((course, index) => (
            <div
              key={course.id}
              className={`relative bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out max-w-[320px] mx-auto ${
                index >= 3 ? "mt-6" : "" // Add top margin for the second row
              }`}
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

export default DataScienceArray;
