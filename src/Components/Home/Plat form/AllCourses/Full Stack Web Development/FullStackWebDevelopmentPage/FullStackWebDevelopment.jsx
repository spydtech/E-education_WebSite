import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../../../Navbar";
import Hero from "../../../../../../assetss/fullstackwebdev/hero.png";
import Footer from "../../../../footer/Footer";
import WebDeveloper from "./Web_Development/WebDeveloper";
import AboutCourses from "./AboutCourses";
import SuccessStory from "./Web_Development/Community/SuccessStory/successstory";
import Community from "./Web_Development/Community/community";
// import DeliveryMethods from "./deliverymethods/Delivery_Methods";

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
    <div className="pl-4">
      <div className="w-full flex flex-col p-6 lg:flex-row  items-center justify-center gap-4 md:px-8 lg:px-16 xl:px-32 py-8 ">
        <div className="md:w-3/4 text-center xl:2xl:text-left">
          <h3 className="  text-xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-gray-900">
            Master{" "}
            <span className="text-[#F6AC14]">Full Stack</span> Web Development
          </h3>
          <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-600">
            Accelerate your tech skills with comprehensive courses designed to
            cover front-end and back-end development. Gain expertise in
            JavaScript frameworks, databases, server-side scripting, and more.
            Prepare yourself for success as a full stack developer.
          </p>
          <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-700">
            Our courses empower you to dive deep into full stack technologies.
            Develop practical skills and stand out in a competitive job market.
            Start your full stack journey today.
          </p>
          <button
            onClick={handleEnroll}
            className="mt-6 bg-[#0098F1] text-white  md:w-auto py-3 px-6 rounded transition-all hover:bg-[#007acc] active:scale-95 xl:lg:text-2xl xl:lg:w-[280px] xl:lg:h-[80px] md:text-xl"
          >
            Enroll Now
          </button>
          <div className="mt-4 text-gray-600">11,095 already enrolled</div>
        </div>
        <div className="mt-4 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src={Hero}
            alt="Hero"
            className="w-full h-full max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>
      </div>
      <WebDeveloper />
      <AboutCourses />
      <Community />
      <hr className="text-white" />
      <SuccessStory />
      <Footer />
    </div>
    </>
  );
};

export default ParticularFullStack;
