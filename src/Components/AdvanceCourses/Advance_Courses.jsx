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
      title: " MERN Stack",
      description: "Learn how to build web applications from front to back",
      image:
        "https://i0.wp.com/blog.apitier.com/wp-content/uploads/2023/02/MERN_Stack.jpg?fit=560%2C315&ssl=1",
      link: "/fullStack_WebDevelopment/mean-Stack-Developer",
    },
    {
      id: 2,
      title: "Advance Java",
      description:
        "Master JavaScript for both front-end and back-end development",
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20230823152056/What-is-Advance-JAVA.png",
      link: "/fullStack_WebDevelopment/fullStack-Java-Development",
    },
    {
      id: 3,
      title: "Advance Php",
      description:
        "Explore MongoDB, Express.js, Angular, and Node.js for full-stack development",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM_-_y91ofGI7yjop5oRlM1uL1hA5r1hJ40Ld6oyN1bw&s",
      link: "/meanStackDeveloper",
    },
    {
      id: 4,
      title: "Machine Learning with AI",
      description: "Master Python for both front-end and back-end development",
      image:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/Deep-Learning-vs-Machine-Learning.jpg",
      link: "/data_Science/machine-Learning",
    },
    {
        id: 5,
        title: "DevOps Mastery",
        description: "Learn advanced DevOps practices and tools for automating and streamlining development workflows.",
        image: "https://s3.amazonaws.com/tf-nightingale/2023/04/How-DevOps-Mastery-Optimizes-Development-and-Operations-for-Business-Success--2.jpg",
        link: "/fullStack_WebDevelopment/fullStack-Devops",
      },
  
      {
        id: 6,
        title: "Cloud Computing with AWS",
        description: "Advanced AWS cloud computing course, focusing on architecture and deployment.",
        image: "https://images.squarespace-cdn.com/content/v1/60cfd646701da4034512a1c5/1654217981309-RTSZMBJWA9YJ5V32UN8R/AWS-Cloud.png",
        link: "/cloudComputingAWS",
      },
      {
        id: 7,
        title: "Cybersecurity Advanced Practices",
        description: "Learn advanced techniques and tools for protecting systems and networks from cyber threats.",
        image: "https://www.ggoffice.com/wp-content/uploads/2024/03/Golden-Gate-March-2024-Blog-Image-Cybersecurity.jpg",
        link: "/Cybersecurity/cybersecurity_essentials",
      },
      {
        id: 8,
        title: "Blockchain Development",
        description: "Advanced blockchain development course covering smart contracts, Ethereum, and decentralized applications.",
        image: "https://ideausher.com/wp-content/uploads/2022/12/Blockchain-Developer-Hire_-A-Complete-Guide-1.webp",
        link: "/blockchainDevelopment",
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
