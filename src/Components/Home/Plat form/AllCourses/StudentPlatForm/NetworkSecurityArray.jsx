

import React, { useEffect, useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
// import WishLists from "../../AddtoCart/WishLists";
import { Link } from "react-router-dom";
import Navbar from "../../../../Navbar";
import Footer from "../../../footer/Footer";
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
    console.log("wish", wishlist);
    if (sh) navigate("/wishLists", { state: { wishlist } });
  }, [wishlist, sh]);

  const handleDelete = (id) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((course) => course.id !== id)
    );
  };

  

  const networkSecurityCourses = [
    {
      id: 1,
      title: "Network Security Fundamentals",
      description: "Understand the basics of network security, including firewalls, intrusion detection systems, and VPNs.",
      image: "https://miro.medium.com/v2/resize:fit:640/1*A2X0FaO48D1tv4HpuKUdkg.jpeg",
      link: "/network_security/network-security-fundamentals",
    },
    {
      id: 2,
      title: "Advanced Network Security",
      description: "Learn advanced network security techniques and strategies to protect against sophisticated cyber threats.",
      image: "https://www.logsign.com/uploads/ensuring_network_security_e34d6ce4bb.png",
      link: "/network_security/advance-network-secuity",
    },
    {
      id: 3,
      title: "Network Security Best Practices",
      description: "Explore best practices for securing network infrastructure.",
      image: "https://networkats.com/wp-content/uploads/2023/06/feaeefe5-f2bd-409c-b069-8869066894f2.webp",
      link: "/network_security/network-security-best-practices",
    },
  ];
  

  const filteredCourses = networkSecurityCourses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <Navbar />
      <img
        src="https://assets-global.website-files.com/5b6df8bb681f89c158b48f6b/5d95e4e76593e827edc795e5_network-security-specialist.jpg"
        className="object-cover w-full"
        alt="Background Image"
      />
      {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div> */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-center text-purple-600 underline">
          Explore Network Security Courses
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              handleWishList={handleWishList}
              setShow={setShow}
            />
          ))}
        </div>
      </div> 

      <Footer />
    </>
  );
};

const CourseCard = ({ course, handleWishList, setShow }) => {
  const { id, title, description, image, link } = course;
  const [liked, setLiked] = useState(false);

  const handleDataTransfer = () => {
    setShow(true);
    setLiked((prevLiked) => !prevLiked);
    handleWishList(course);
  };

  return (
    <div className="mx-auto relative mb-12 cursor-pointer">
      <Link to={link}>
        <img
          src={image}
          alt={title}
          className="h-[240px] w-full hover:scale-105 transition-all duration-500 shadow-2xl"
        />
        <div
          className="text-center px-4 py-8 bg-white shadow-lg rounded-md
                md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12 hover:-translate-y-4 transition-all duration-300"
        >
          <p>
            {description} <span className="font-bold">with {title}</span>
          </p>
        </div>
      </Link>
        <button id="wishlist" onClick={handleDataTransfer}>
          {liked ? (
            <FcLike className="w-8 transition-transform duration-300 transform hover:scale-125 rounded h-8 text-white top-3 left-3 absolute" />
          ) : (
            <FcLikePlaceholder className="w-8 rounded text-red-800 h-8 transition-transform duration-300 transform hover:scale-125 top-3 left-3 absolute" />
          )}
        </button>
    </div>
  );
};

export default NetworkSecurityArray;
