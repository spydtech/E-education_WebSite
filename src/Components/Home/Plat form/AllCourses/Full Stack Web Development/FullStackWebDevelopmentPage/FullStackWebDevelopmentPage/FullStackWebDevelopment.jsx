import React, { useState, useEffect } from "react";

import AboutCourses from "./AboutCourses";
import { MdArrowOutward } from "react-icons/md";
import Navbar from "../../../../../../Navbar";
import Footer from "../../../../../footer/Footer";
// import FullStackCard from "./FullStackCard";
import WebDeveloper from "./Web_Development/WebDeveloper";
import Delivery_Methods from "./deliverymethods/Delivery_Methods";
import { useNavigate } from "react-router-dom";
import SuccessStory from "./Web_Development/SuccessStory/successstory";
import Community from "./Web_Development/Community/community";
import fullstackwebdevelopmentimg from "../../../../../../../assets/WebDeveloper/fullstackwebdevelopmentimg.png";

const ParticularFullStack = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const [courseName] = useState("Master Full Stack Web Development"); // Placeholder for course name
  const [coursePrice] = useState(199);

  const handleEnroll = () => {
    // Navigate to the card details page with course details as parameters
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  //   }, 3000); // Change the time interval here (in milliseconds) for auto-sliding

  //   return () => clearInterval(interval);
  // }, [currentSlide]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  //   }, 3000); // Change the time interval here (in milliseconds) for auto-sliding

  //   return () => clearInterval(interval);
  // }, [currentSlide]);

  return (
    <>
      <Navbar />
      <div className="w-full md:pl-28 py-12 flex md:flex-row flex-col items-center justify-center gap-8 max-w-8xl mx-auto">
        <div className="md:w-[600px] pl-8 ">
          <h3 className="mt-1 text-[30px]  font-semibold leading-10 tracking-tight text-gray-900 sm:leading-none sm:text-6xl lg:text-3xl xl:text-3xl">
            Master {"    "}
            <span className="text-full-stack pl-4 text-[#F6AC14]">
              {"   "}
              Full Stack
            </span>{" "}
            <br />
            Web Development
          </h3>

          <p className="mt-3 text-base text-[#0098F1] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl leading-8">
            The future of learning The future of learning The future of learning
            The future of learning The future of learning The future of learning
            The future of learning The future of learning The future of learning
            The future of learning The future of lThe future of learning The
            future of learning The future of l future of learning The future of
            learning The future of l
          </p>

          {/* <p className="text-base md:text-lg text-slate-700 my-4 md:my-6 ">
            Our courses empower you to dive deep into full stack technologies.
            Develop practical skills and stand out in a competitive job market.
            Start your full stack journey today.
          </p> */}
          <button
            onClick={handleEnroll}
            className="bg-[#0098F1] text-white mt-5 w-[200px] h-[50px] font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95 flex items-center justify-center"
          >
            Enroll Now <MdArrowOutward className="ml-2" />
          </button>

          {/* <div className="py-4">11,095 already enrolled</div> */}
        </div>
        <div className="relative pl-12">
          <img
            className="md:h-[350px] md:w-[500px] "
            src={fullstackwebdevelopmentimg}
            alt="img"
          />
        </div>
      </div>

      <WebDeveloper />
      <AboutCourses />
      <Delivery_Methods />
      <Community />
      {/* <Award /> */}
      <SuccessStory />
      <Footer />
    </>
  );
};

export default ParticularFullStack;
