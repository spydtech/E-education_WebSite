import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Add this import for navigation
import AboutCourses from "./AboutCourses";
import Community from "../Community/community";
import SuccessStory from "../SuccessStory/successstory";
import Navbar from "../../../../../../Navbar";
import Footer from "../../../../../footer/Footer";
import Delivery_Methods from "../deliverymethods/Delivery_Methods";
import MeanStackDeveloper from "../Developer/MeanStackDeveloper";

const MeanStackDevelopment = () => {
  const [courseName] = useState("Master MEAN Stack Development"); // Moved inside component
  const [coursePrice] = useState(199); // Moved inside component
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      <Navbar />
      <div className="w-full bg-[#b8b8ff] md:pl-28 py-12 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 max-w-8xl mx-auto">
        <div className="font-l">
          <span className="text-sm font-semibold tracking-wide text-gray-500 uppercase sm:text-base lg:text-sm xl:text-base">
            Explore MEAN Stack Development
          </span>
          <h3 className="mt-1 text-4xl font-lora font-extrabold leading-10 tracking-tight text-violet-800 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
            Master MEAN Stack Development
          </h3>
          <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Enhance your tech capabilities with in-depth courses focused on MEAN
            stack development. Master MongoDB, Express.js, Angular, and Node.js,
            covering both front-end and back-end technologies. Develop
            proficiency in building robust, scalable applications and position
            yourself for success as a MEAN stack developer.
          </p>
          <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
            Our courses empower you to dive deep into mean stack technologies.
            Develop practical skills and stand out in a competitive job market.
            Start your mean stack journey today.
          </p>
          <button
            onClick={handleEnroll}
            className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95"
          >
            Enroll Now
          </button>
          <div className="py-4">11,095 already enrolled</div>
        </div>
        <div className="relative pl-6">
          <img
            src="https://www.logicraysacademy.com/blog/wp-content/uploads/2023/05/MVM2.png"
            className="pr-4 h-[350px]"
          />
        </div>
      </div>
      <MeanStackDeveloper />
      <AboutCourses />
      <Delivery_Methods />
      <Community />
      <SuccessStory />
      <Footer />
    </>
  );
};
export default MeanStackDevelopment;
