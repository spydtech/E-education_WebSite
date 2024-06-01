import React, { useEffect, useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
// import WishLists from "../../AddtoCart/WishLists";
import { Link } from "react-router-dom";
import Navbar from "../../../../Navbar";
import FooterPart from "../../../footer/Footer";

const EthicalHackingStudentArray = () => {
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

  const ethicalHackingCourses = [
    {
      id: 1,
      title: "Ethical Hacking Basics",
      description:
        "Learn the fundamentals of ethical hacking, including reconnaissance, scanning, and vulnerability assessment.",
      image:
        "https://www.eccouncil.org/cybersecurity-exchange/wp-content/uploads/2022/03/ETHICAL-HACKING.jpg",
      link: "/Ethical_Hacking/basic_ethical_Hacking",
    },
    {
      id: 2,
      title: "Advanced Ethical Hacking",
      description:
        "Dive deeper into ethical hacking techniques, including exploitation, privilege escalation, and post-exploitation.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLbv6P5JmHHMLlrqLXCN21RuKXNZTeTxvC2w5T_AoERcEH9YNTrIzAghuPcLAgnN-KAKk&usqp=CAU",
      link: "/Ethical_Hacking/advance_Ethical_Hacking",
    },
    {
      id: 3,
      title: "Certified Ethical Hacker",
      description:
        "Prepare for the Certified Ethical Hacker (CEH) certification with comprehensive coverage of ethical hacking topics.",
      image:
        "https://ceh.nativeva.com/wp-content/uploads/2023/04/Unlock-Your-Potential-1-1.png",
      link: "/Ethical-Hacking/certified_Ethical_Hacking",
    },
  ];

  const filteredCourses = ethicalHackingCourses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <img
        src="https://www.trinitytechnology.in/_logo/hacking.webp"
        className="object-cover w-full"
        alt="Background Image"
      />
      {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div> */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-center text-purple-600 underline">
          Explore Ethical Hacking Courses
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
      <FooterPart />
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

export default EthicalHackingStudentArray;
