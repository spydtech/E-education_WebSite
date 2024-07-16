import React, { useEffect, useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import FooterPart from "../../../footer/Footer";
import Navbar from "../../../../Navbar";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import cardImage from "../../../../../assets/cardImage.png";

const NetworkSecurityArray = () => {
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
    if (sh) navigate("/wishLists", { state: { wishlist } });
  }, [wishlist, sh, navigate]);

  const networkSecurityCourses = [
    {
      id: 1,
      title: "Network Security Fundamentals",
      image: cardImage,
      description:
        "Understand the basics of network security, including firewalls, intrusion detection systems, and VPNs.",
      link: "/network_security/network-security-fundamentals",
      rating: 4.3,
      price: "$29.99",
      profilePic:
        "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
      name: "Jane Smith",
    },
    {
      id: 2,
      title: "Advanced Network Security",
      image: cardImage,
      description:
        "Learn advanced network security techniques and strategies to protect against sophisticated cyber threats.",
      link: "/network_security/advance-network-secuity",
      rating: 4.7,
      price: "$39.99",
      profilePic:
        "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
      name: "Jane Smith",
    },
    {
      id: 3,
      title: "Network Security Best Practices",
      image: cardImage,
      description:
        "Explore best practices for securing network infrastructure.",
      link: "/network_security/network-security-best-practices",
      rating: 4.6,
      price: "$24.99",
      profilePic:
        "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjFp6NNFNdrGO2NCr3vY5oMNMSTaBzKad2SumwgJ0JzXhSpcR6KrVg-dSamjoKkMxTwKZRTZG1YWJmJO67XxLYJFoRC4sRyBD22K-HuYjCF7opzXWwbRju6pu6KUEkMTrDOoAJ~ZRlSom8t3pk0Cz-rm1pXY6AoG4MuB-3I1cu6oVakyDNmA~alsUUGH744TroXuV83HB2XfjPBov9~kINFzjeu-H3tdqTDXTauy9qn3P02ouJq7agSoYBWRv2E-OwjspQZGsARxxoATPAwDE6XlLnapVzyLAWbBLYOd72-hOH6Vtb4aHwRUGOIuqT-MJArIJfv7e5rxDiI2MHkXmw__",
      name: "Jane Smith",
    },
  ];

  const filteredCourses = networkSecurityCourses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            Expand CyberSecurityCourses
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
      <FooterPart />
    </>
  );

  function renderStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStars = Math.ceil(rating - fullStars);
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} />
        ))}
        {halfStars === 1 && <FaStarHalfAlt />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={i} />
        ))}
      </>
    );
  }
};

export default NetworkSecurityArray;
