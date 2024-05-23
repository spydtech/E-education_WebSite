

import React, { useEffect, useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
// import WishLists from "../../AddtoCart/WishLists";
import { Link } from "react-router-dom";
import Navbar from "../../../../Navbar";
import Footer from "../../../footer/Footer";

const CyberSecurityArray = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [sh, setShow] = useState(false);
  const navigate = useNavigate();

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
  // /cybersecurity
  

  const cybersecurityCourses = [
    {
      id: 1,
      title: "Introduction to Cybersecurity",
      description: "Learn the basic principles of cybersecurity, including risk management, threat detection, and security policies.",
      image: "https://images.shiksha.com/mediadata/images/articles/1709545684phpPfnagp.jpeg",
      link: "/cybersecurity",
    },
    {
      id: 2,
      title: "Cybersecurity Essentials",
      description: "Understand the core concepts of cybersecurity, including network security, cryptography, and incident response.",
      image: "https://i.ytimg.com/vi/xsL5ax44530/maxresdefault.jpg",
      link: "/cybersecurity-essentials",
    },
    {
      id: 3,
      title: "Cybersecurity for Beginners",
      description: "An introductory course for those new to the field of cybersecurity, covering fundamental concepts and best practices.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCKr60KjwzYEQPATOULM6X99sU6NAn8AqX1dsTeUSRqQ&s",
      link: "/cybersecurity-for-beginners",
    },
  ];
  

  const filteredCourses = cybersecurityCourses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <Navbar />
      <img
        src="https://www.springboard.com/blog/wp-content/uploads/2021/06/shutterstock_505066678-scaled-scaled.jpg"
        className="object-cover w-full md:h-[340px]"
        alt="Background Image"
      />
      {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div> */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-center text-purple-600 underline">
          Explore Data Science Courses
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

export default CyberSecurityArray;
