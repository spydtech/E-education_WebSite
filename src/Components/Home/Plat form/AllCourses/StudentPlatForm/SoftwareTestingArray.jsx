// import React from 'react'

// const SoftwareTestingArray = () => {
//   return (
//     <div>SoftwareTestingArray</div>
//   )
// }

// export default SoftwareTestingArray



import React, { useEffect, useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
// import WishLists from "../../AddtoCart/WishLists";
import { Link } from "react-router-dom";
import Navbar from "../../../../Navbar";
import Footer from "../../../footer/Footer";
const SoftwareTestingArray = () => {
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

  

  const SoftwareTestingArray = 
  [
    {
        "id": 1,
        "title": "Unit Testing",
        "description": "Unit Testing involves testing individual components of the software to ensure they work correctly in isolation.",
        "image": "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200514113957/What-is-Unit-Testing-and-Why-Developer-Should-Learn-It.png",
        "link": "https://example.com/unit-testing"
    },
    {
        "id": 2,
        "title": "Integration Testing",
        "description": "Integration Testing checks the interaction between different components of the software to ensure they work together as expected.",
        "image": "https://wp.testbytes.net/wp-content/uploads/2016/02/19-1-2016-integration-testing-what-is-it-1.gif",
        "link": "https://example.com/integration-testing"
    },
    {
        "id": 3,
        "title": "System Testing",
        "description": "System Testing validates the complete and integrated software to verify that it meets the specified requirements.",
        "image": "https://artoftesting.com/wp-content/uploads/2019/12/System-Testing.jpg",
        "link": "https://example.com/system-testing"
    },
    {
        "id": 4,
        "title": "Acceptance Testing",
        "description": "Acceptance Testing is performed to determine whether the software is ready for release and meets the end user's needs.",
        "image": "https://www.spaceo.ca/wp-content/uploads/2023/04/What-is-Acceptance-Testing.jpg",
        "link": "https://example.com/acceptance-testing"
    },
    {
        "id": 5,
        "title": "Performance Testing",
        "description": "Performance Testing evaluates the speed, responsiveness, and stability of the software under various conditions.",
        "image": "https://artoftesting.com/wp-content/uploads/2019/12/types-of-performance-testing.jpg",
        "link": "https://example.com/performance-testing"
    },
    {
        "id": 6,
        "title": "Security Testing",
        "description": "Security Testing aims to identify vulnerabilities and ensure that the software is protected against attacks.",
        "image": "https://miro.medium.com/v2/resize:fit:750/1*wYU7HChNgP-Mt8iZvdiFxQ.jpeg",
        "link": "https://example.com/security-testing"
    },
    {
        "id": 7,
        "title": "Usability Testing",
        "description": "Usability Testing assesses how easy and user-friendly the software is for end users.",
        "image": "https://er9wjw26noi.exactdn.com/wp-content/uploads/2022/08/What-is-usability-testing.jpg?lossy=1&quality=88&webp=88&ssl=1",
        "link": "https://example.com/usability-testing"
    },
    {
        "id": 8,
        "title": "Compatibility Testing",
        "description": "Compatibility Testing ensures that the software works well across different devices, browsers, and operating systems.",
        "image": "https://www.360logica.com/blog/wp-content/uploads/2018/05/Software-Compatibility-Testing.jpg",
        "link": "https://example.com/compatibility-testing"
    },
    {
        "id": 9,
        "title": "Regression Testing",
        "description": "Regression Testing involves re-running previously conducted tests to ensure that recent changes haven't adversely affected the software.",
        "image": "https://assets-global.website-files.com/619e15d781b21202de206fb5/62165ea063f4cb7c15c9fc6e_regression-testing-guide.jpg",
        "link": "https://example.com/regression-testing"
    },
    {
        "id": 10,
        "title": "Stress Testing",
        "description": "Stress Testing evaluates how the software performs under extreme conditions or high load to identify breaking points.",
        "image": "https://cdn.educba.com/academy/wp-content/uploads/2019/09/What-is-Stress-Testing.png",
        "link": "https://example.com/stress-testing"
    },
    {
        "id": 11,
        "title": "Manual Testing",
        "description": "Manual Testing is performed by human testers who manually execute test cases without the use of automation tools.",
        "image": "https://azilen-technologies.s3.us-west-1.amazonaws.com/wp-content/uploads/2023/07/Manual-testing.jpg",
        "link": "https://example.com/manual-testing"
    },
    {
        "id": 12,
        "title": "Automated Testing",
        "description": "Automated Testing uses scripts and automation tools to run tests on the software, increasing efficiency and coverage.",
        "image": "https://api.edoxi.com/assets/studyhub/Automation_Testing_-_Introduction_to_Automation_Testing1.webp",
        "link": "https://example.com/automated-testing"
    }
]
  

  const filteredCourses = SoftwareTestingArray.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <Navbar />
      <img
        src="https://trainings.internshala.com/blog/wp-content/uploads/2023/03/what-is-software-testing.jpg"
        className="object-cover w-full "
        alt="Background Image"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-center text-purple-600 underline">
         Type of Software Testing
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

export default SoftwareTestingArray;