import React, { useEffect, useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
// import WishLists from "../../AddtoCart/WishLists";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Home/footer/Footer";
const BasicCourseArray = () => {
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
      title: " Web Development",
      description: "Learn how to build web applications from front to back",
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20231205165904/web-development-image.webp",
      link: "/fullStack_WebDevelopment/fullStack-Web-Development",
    },
    {
      id: 2,
      title: "Unit Testing",
      description:
        "Master JavaScript for both front-end and back-end development",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw3wuCZOCBggFb3RK8AGPGGQagsocutNezBfghSNLrdg&s",
      link: "/software-testing/unit-testing",
    },
    {
      id: 3,
      title: "Basic Php",
      description:
        "Explore MongoDB, Express.js, Angular, and Node.js for full-stack development",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUlEZMH3R-k_ZreGPfhhNKcNisvEIJ1cJW4S5iBz0bbg&s",
      link: "/php",
    },
    {
      id: 4,
      title: "Basic Java",
      description: "Master Python for both front-end and back-end development",
      image:
        "https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2023_01_Untitled-design-1.jpg",
      link: "/java",
    },
    {
      id: 5,
      title: "Wordpress",
      description: "Explore Java for building full-stack applications",
      image:
        "https://i.ytimg.com/vi/71EZb94AS1k/maxresdefault.jpg",
      link: "/wordpress",
    },
    {
      id: 8,
      title: "Basic JavaScript",
      description: "Explore the .NET framework for full-stack development",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYmpKizkiZ4vR50ndoXJZnBi2l2O7yj2NGw-YdjX2Jfg&s",
      link: "/javaScript",
    },
    {
      id: 9,
      title: "Basic C/C++",
      description:
        "Learn DevOps practices for full-stack development environments",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhwX49W-oHzQ9SNKqBuslHTLFfoCuhXGDhZXBzxpcUg&s",
      link: "/c_c++",
    },
    {
      id: 10,
      title: "UI/UX Design",
      description: "Master the art of UI/UX Design",
      image: "https://miro.medium.com/v2/resize:fit:1100/1*4Fl8H1Q_ZvhDoSSRBFmPhw.png",
      link: "/ui_ux_design",
    }
    
  ];

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <Navbar />
      <img
        src="https://img.freepik.com/premium-photo/word-basic-consists-wooden-cubes-with-letters-top-view-light-background-work-space_284815-2974.jpg"
        className="object-cover w-full md:h-[450px]"
        alt="Background Image"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-center text-purple-600 underline">
          Explore Basic Courses
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

export default BasicCourseArray;
