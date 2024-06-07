import React, { useEffect, useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
// import WishLists from "../../AddtoCart/WishLists";
import { Link } from "react-router-dom";
import Navbar from "../../../../Navbar";
import Footer from "../../../footer/Footer";
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

  const dataScienceCourses = [
    {
      id: 1,
      title: "Introduction to Data Science",
      description:
        "Learn the basics of data science, including data analysis, visualization, and machine learning.",
      image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Data-Science-vs.-Big-Data-vs.jpg",
      link: "/data_Science/introduction-to-data-science",
    },
    {
      id: 2,
      title: "Data Science with Python",
      description:
        "Master data science concepts and techniques using Python, including libraries like NumPy, Pandas, and Matplotlib.",
      image: "https://www.softwaretechnologyconsultants.com/wp-content/uploads/2022/07/python-data-yand.jpg",
      link: "/data_Science/data-science-with-python",
    },
    {
      id: 3,
      title: "Machine Learning",
      description:
        "Dive deep into machine learning algorithms, model evaluation, and real-world applications.",
      image: "https://media.licdn.com/dms/image/D5612AQGmShKxO7LjFg/article-cover_image-shrink_720_1280/0/1685687818834?e=2147483647&v=beta&t=-eTltvFtKqAeqteVzDYJP9qKQSC8NB9bgJkQmVcOqME",
      link: "/data_Science/machine-Learning",
    },
    {
      id: 4,
      title: "Data Visualization",
      description:
        "Learn how to create compelling visualizations and communicate data insights effectively.",
      image: "https://visme.co/blog/wp-content/uploads/2021/08/Data-Visualization-thumbnail.jpg",
      link: "/data_Science/data-visualization",
    },
    {
      id: 5,
      title: "Big Data Analytics",
      description:
        "Understand the principles and tools for processing and analyzing large datasets, including Hadoop and Spark.",
      image: "https://esomar.org/uploads/attachments/ckwc7d0xl0rfm343vroi414xo-untitled-design-1.full.png",
      link: "/data_Science/big-data-analysis",
    },
    {
      id: 6,
      title: "Data Analytics",
      description:
        "Gain a solid foundation in statistical methods and their applications in data science.",
      image: "https://cerebra-consulting.com/wp-content/uploads/2019/10/Big-Data-Background.jpg",
      link: "/data_Science/data-Analatics",
    },
  
  ];

  const filteredCourses = dataScienceCourses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <Navbar />
      <img
        src="https://media.licdn.com/dms/image/D4D12AQH1TB_xjecewg/article-cover_image-shrink_720_1280/0/1688565793035?e=2147483647&v=beta&t=yujmOBi1mTaYAI6mJnbrOa62rt3hUtUbYzRPAHHj9y4"
        className="object-cover w-full"
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
          className="h-auto md:h-[200px] lg:h-[250px] w-full object-cover hover:scale-105 transition-all duration-500 shadow-2xl"
        />
        <div
          className="text-center px-4 py-8 bg-white shadow-lg rounded-md
                md:w-[] mx-auto absolute left-0 right-0 -bottom-12 hover:-translate-y-4 transition-all duration-300"
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


export default DataScienceArray;
