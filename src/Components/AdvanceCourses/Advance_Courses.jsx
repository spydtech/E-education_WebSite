// import React from 'react'

// const Advance_Courses = () => {
//   return (
//     <div>Advance_Courses</div>
//   )
// }

// export default Advance_Courses


import React, { useEffect, useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
// import WishLists from "../../AddtoCart/WishLists";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Home/footer/Footer";
const Advance_Courses = () => {
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

  const courses = [
    {
        id: 1,
        title: "Advanced Full Stack Web Development",
        description: "Learn to build full-fledged web applications using the latest technologies and frameworks.",
        image: "https://media.licdn.com/dms/image/D4E12AQHPfeaf61ARlw/article-cover_image-shrink_720_1280/0/1707956393334?e=2147483647&v=beta&t=GYpFx7NlLhBWpF2Ow0tzdwoqWrF78PvPmI-wVFuO3B8",
        link: "/advancedFullStackWebDevelopment",
      },
      {
        id: 2,
        title: "Comprehensive Software Testing",
        description: "Master advanced software testing techniques and tools to ensure high-quality software delivery.",
        image: "https://www.buildoffshoreteam.com/blog/wp-content/uploads/2024/03/type-of-testing.jpg",
        link: "/comprehensiveSoftwareTesting",
      },
      {
        id: 3,
        title: "Advanced PHP Programming",
        description: "Explore advanced PHP programming concepts and frameworks for robust web development.",
        image: "https://solman.in/wp-content/uploads/2018/12/php.jpg",
        link: "/advancedPhpProgramming",
      },
      {
        id: 4,
        title: "Java Programming Mastery",
        description: "Become proficient in advanced Java programming for enterprise-level applications.",
        image: "https://img-c.udemycdn.com/course/750x422/5638204_76bd.jpg",
        link: "/javaProgrammingMastery",
      },
      {
        id: 5,
        title: "Mastering WordPress Development",
        description: "Gain expertise in WordPress development, from theme creation to advanced plugin development.",
        image: "https://magicminds.io/wp-content/uploads/2023/12/guide-to-mastering-wordpress-development.png",
        link: "/masteringWordPressDevelopment",
      },
      {
        id: 6,
        title: "JavaScript for Advanced Developers",
        description: "Enhance your JavaScript skills with advanced programming techniques for front-end and back-end development.",
        image: "https://www.bluejaywebsolutions.com/sites/default/files/2021-08/javascript.jpg",
        link: "/javascriptAdvancedDevelopers",
      }, {
        id: 7,
        title: "Advanced Data Science Techniques",
        description: "Master advanced data science techniques including data mining, predictive modeling, and big data analytics.",
        image: "https://cdn.hackr.io/uploads/posts/large/1573232636UxdizR1FyX.png",
        link: "/advancedDataScienceTechniques",
      },
      {
        id: 8,
        title: "Full Stack Mobile App Development",
        description: "Learn to develop advanced mobile applications for both iOS and Android platforms.",
        image: "https://qph.cf2.quoracdn.net/main-qimg-73b9c74a99ce21c0ba7b760b8828172b",
        link: "/fullStackMobileAppDevelopment",
      }
  ];

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <Navbar />
      <img
        src="https://www.advancecharity.org.uk/wp-content/uploads/2020/04/advance-Trimmed.png"
        className="object-cover w-full md:h-[450px]"
        alt="Background Image"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-center text-purple-600 underline">
          Explore With Advance Courses
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
  const { id, title, description, image,link } = course;
  const [liked, setLiked] = useState(false);

  const handleDataTransfer = () => {
    setShow(true);
    setLiked((prevLiked) => !prevLiked);
    handleWishList(course);
  };

  return (
    <div className="mx-auto relative mb-12 cursor-pointer">
      <Link to = {link}>
      
   
      <img
        src={image}
        alt={title}
        className="h-[240px] w-full hover:scale-105 transition-all duration-500 shadow-2xl"
      />
      <div
        className="text-center px-4 py-8 bg-white shadow-lg rounded-md
                md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12 hover:-translate-y-4 transition-all duration-300"
      >
       
       <p> <span className="font-bold" >{title}</span></p>
      </div>
      </Link>
      <Link>

      <button id="wishlist" onClick={handleDataTransfer}>
        {liked ? (
          <FcLike className="w-8 transition-transform duration-300 transform hover:scale-125 rounded h-8 text-white top-3 left-3 absolute" />
        ) : (
          <FcLikePlaceholder className="w-8 rounded text-red-800 h-8 transition-transform duration-300 transform hover:scale-125 top-3 left-3 absolute" />
        )}
      </button>
      </Link>
   
    </div>
  );
};

export default Advance_Courses;