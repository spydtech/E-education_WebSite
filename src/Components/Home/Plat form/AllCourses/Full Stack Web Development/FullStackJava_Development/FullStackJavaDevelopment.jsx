import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Navbar from "../../../../Navbar";
import Navbar from "../../../../../Navbar";
import AboutCourses from "./AboutCourses";
import Community from "./Community/community";
import SuccessStory from "./SuccessStory/successstory";
import Delivery_Methods from "./deliverymethods/Delivery_Methods";
import FullStackJavaDeveloper from "./Developer/FullStackJavaDeveloper";
import Footer from "../../../../footer/Footer";

const FullStackJavaDevelopment = () => {
  const [courseName] = useState(" Testing"); // Placeholder for course name
  const [coursePrice] = useState(199);
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

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
      <div className="w-full md:pl-28 py-12 flex md:flex-row flex-col items-center justify-center gap-8 max-w-8xl mx-auto">
        <div className="md:w-[600px] pl-8 ">
          <span className="text-sm font-semibold tracking-wide text-gray-500 uppercase sm:text-base lg:text-sm xl:text-base">
            Explore Full Stack Java Course
          </span>
          <h3 className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
            Master Full Stack Java Development
          </h3>
          <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Elevate your technical skills with comprehensive courses focused on
            full stack Java development. Master Java, Spring Boot, Hibernate,
            RESTful APIs, and more, covering both front-end and back-end
            technologies. Develop expertise in building scalable,
            enterprise-grade applications and position yourself for success as a
            full stack Java developer.
          </p>
          <p className="text-base md:text-lg text-slate-700 my-4 md:my-6 ">
            Our courses empower you to dive deep into Fulll stack java
            technologies. Develop practical skills and stand out in a
            competitive job market. Start your full stack Java journey today.
          </p>
          <button
            onClick={handleEnroll}
            className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95"
          >
            Enroll Now
          </button>
          <div className="py-4">11,095 already enrolled</div>
        </div>
        <div className="relative pl-12">
          <img
            src="https://assets-global.website-files.com/6344c9cef89d6f2270a38908/63862296680a877e33cb39f9_c4.webp"
            className="pr-4 h-[350px]"
          />
        </div>
      </div>
      <FullStackJavaDeveloper />
      <AboutCourses />
      <Delivery_Methods />
      <Community />
      {/* <Award /> */}
      <SuccessStory />
      <Footer />
    </>
  );
};

export default FullStackJavaDevelopment;
