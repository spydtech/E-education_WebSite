import React, { useState, useEffect } from "react";

import AboutCourses from "./AboutCourses";

import Navbar from "../../../../../Navbar";
import Footer from "../../../../footer/Footer";
// import FullStackCard from "./FullStackCard";
import WebDeveloper from "./Web_Development/WebDeveloper";
import Delivery_Methods from "./deliverymethods/Delivery_Methods";
import { useNavigate } from "react-router-dom";
import SuccessStory from "./Web_Development/SuccessStory/successstory";
import Community from "./Web_Development/Community/community";

const ParticularFullStack = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const [courseName] = useState("Master Full Stack Web Development"); // Placeholder for course name
  const [coursePrice] = useState(199);

  const handleEnroll = () => {
    // Navigate to the card details page with course details as parameters
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      <Navbar />
      <div className="w-full md:pl-28 py-12 flex md:flex-row flex-col items-center justify-center gap-8 max-w-8xl mx-auto">
        <div className="md:w-[600px] pl-4 ">
          <span className="text-sm font-semibold tracking-wide text-gray-500 uppercase sm:text-base lg:text-sm xl:text-base">
            Explore Full Stack Web Development
          </span>
          <h3 className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
            Master Full Stack Web Development
          </h3>
          <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Accelerate your tech skills with comprehensive courses designed to
            cover front-end and back-end development. Gain expertise in
            JavaScript frameworks, databases, server-side scripting, and more.
            Prepare yourself for success as a full stack developer.
          </p>
          <p className="text-base md:text-lg text-slate-700 my-4 md:my-6 ">
            Our courses empower you to dive deep into full stack technologies.
            Develop practical skills and stand out in a competitive job market.
            Start your full stack journey today.
          </p>
          <button
            onClick={handleEnroll}
            className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95"
          >
            Enroll Now
          </button>
          <div className="py-4">11,095 already enrolled</div>
        </div>
        <div className="relative">
          <img
            src="https://miro.medium.com/v2/resize:fit:750/1*-hL6ZeXl_Kt0O-b82UQo9A.png"
            className=" h-[300px] p-4"
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
