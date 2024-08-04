import React, { useState, useEffect } from "react";

import AboutCourses from "./AboutCourses";

import Navbar from "../../../../../Navbar";
import Hero from "../../../../../../assetss/fullstackwebdev/hero.png"
// import Hero from "../../../../../../assetss/fullstackwebdev/hero.png"
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full  flex md:flex-row flex-col items-center justify-center gap-8 mx-auto">
        <div className=" ml-4 md:w-[520px] ">
          {/* <span className="text-sm font-semibold tracking-wide text-gray-500 uppercase sm:text-base lg:text-sm xl:text-base">
            Explore Full Stack Web Development
          </span> */}
          <h3 className="mt-1 md:text-6xl font-bold leading-10 tracking-tight text-gray-900 sm:leading-none text-4xl ">
            Master  {" "}
            <span className="text-[#F6AC14]">

            Full Stack 
            </span>
          {" "} Web Development
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
            className="bg-[#0098F1] text-white font-medium py-2 px-4 rounded transition-all hover:bg-[#0098F1] active:scale-95"
          >
            Enroll Now
          </button>
          <div className="py-4">11,095 already enrolled</div>
        </div>
        <div className="relative">
          <img
            src={Hero}
            className=" h-[517px]  w-[623px] p-4"
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
