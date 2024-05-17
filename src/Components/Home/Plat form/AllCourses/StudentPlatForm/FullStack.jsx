
import React, { useEffect, useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import WishLists from "../../AddtoCart/WishLists";
import { Link } from "react-router-dom";

const FullStack = () => {
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
      title: "Full Stack Web Development",
      description: "Learn how to build web applications from front to back",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCP7WwqRZMt45muqpTdBtWssi3TJHjGG4UkwvxBaIBRAV5naPe4-XBwl6tatEPaZWkDDk&usqp=CAU",
      link: "/fullStackWebDevelopment",
    },
    {
      id: 2,
      title: "Full Stack JavaScript",
      description:
        "Master JavaScript for both front-end and back-end development",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlpaPlcovcoH9QHUUJmlEgAPMw73NMmJAC4LcyZTNjmQ&s",
      link: "/fullStackJavaScript",
    },
    {
      id: 3,
      title: "MEAN Stack Development",
      description:
        "Explore MongoDB, Express.js, Angular, and Node.js for full-stack development",
      image:
        "https://crampete-staticfiles.s3.ap-south-1.amazonaws.com/blogs/Blog-133/mean-stack-image1.png",
      link: "/meanStackDevelopment",
    },
    {
      id: 4,
      title: "Full Stack Python",
      description: "Master Python for both front-end and back-end development",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwU-4XlioqzwP5cv2Ujy_MtoMNogfoYCw5W7rK1cGLyQ&s",
      link: "/fullStackPython",
    },
    {
      id: 5,
      title: "Full Stack Java",
      description: "Explore Java for building full-stack applications",
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20230926163338/Java-Full-Stack.png",
      link: "/fullStackJava",
    },
    {
      id: 8,
      title: "Full Stack .NET",
      description: "Explore the .NET framework for full-stack development",
      image:
        "https://www.radicaltechnologies.co.in/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-25-at-5.55.16-PM-1.jpeg",
      link: "/fullStackDotNet",
    },
    {
      id: 9,
      title: "Full Stack DevOps",
      description:
        "Learn DevOps practices for full-stack development environments",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/0*cl7fc6pt1MHjIF4K.png",
      link: "/fullStackDevOps",
    },
  ];

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <img
        src="https://miro.medium.com/v2/resize:fit:1400/1*e4HBnH84BpwLCFr78xvfjg.gif"
        className="object-cover w-full md:h-[450px]"
        alt="Background Image"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-center text-purple-600 underline">
          Explore Full Stack Development Courses
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
       
       <p>{`${description} with`} <span className="font-bold" >{title}</span></p>
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

export default FullStack;
