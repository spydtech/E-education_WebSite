import React, { useState, useEffect } from "react";

// import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

// import Navbar from "../../../../Navbar";
import Navbar from "../../../../../../../Navbar";
import Footer from "../../../../../../footer/Footer";
import AboutCourses from "./AboutCourses";
import Community from "../Community/community";
import SuccessStory from "../SuccessStory/successstory";
import Delivery_Methods from "../deliverymethods/Delivery_Methods";
import FullStackPythonDeveloper from "../Developer/FullStackPythonDeveloper";

const images = [
  "https://media.istockphoto.com/id/1385099270/vector/team-of-it-programmers-working-on-web-development-on-computers-concept-of-script-coding-and.jpg?s=612x612&w=0&k=20&c=LhX1MDawchrUQOCzC2eIhNEvJDThhRSdweDhk5QXn8s=",
  "https://media.istockphoto.com/id/1269047864/vector/business-team-managers-ceo-brainstorming-discussing-entrepreneurial-anti-crisis-plan-for.jpg?s=612x612&w=0&k=20&c=S2dSlnlUiG3ax7nlHBxPp0bJJ6wBu9OOpq0bGrO3w2k=",
  "https://media.istockphoto.com/id/1066987398/vector/isometric-web-banner-online-training-or-education-and-internet-training-courses-concept.jpg?s=612x612&w=0&k=20&c=iQVT366GzOgpR9k-7uX5PFujOFVyxgLAM1MVfkLMGwI=",
  "https://media.istockphoto.com/id/1323557670/vector/programming-courses-tiny-students-characters-at-huge-laptop-with-coach-explain-programmer.jpg?s=612x612&w=0&k=20&c=bFDxN0Gr_xnp4s_GgYBz0TvxJYJuYX6nmfcmxcafVS0=",
];

const FullStackPythonDevelopment = () => {
  const [courseName] = useState("full stack python developmwnt"); // Placeholder for course name
  // const [coursePrice] = useState(199);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [coursePrice] = useState(199);
  const navigate = useNavigate(); // useNavigate hook for navigation

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleEnroll = () => {
    // Navigate to the card details page with course details as parameters
    navigate("/course-details", { state: { courseName, coursePrice } });
  };
  return (
    <>
      <Navbar />
      <div className="w-full bg-[#c8b6ff] py-12 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 max-w-7xl mx-auto">
        <div className="font-l text-center md:text-left">
          <span className="text-sm font-semibold tracking-wide text-black uppercase sm:text-base lg:text-sm xl:text-base">
            Explore Full Stack Python Course
          </span>
          <h3 className="mt-1 text-4xl md:text-5xl lg:text-6xl text-[#6a4c93] font-lora font-extrabold leading-10 tracking-tight">
            Master Full Stack Python Development
          </h3>
          <p className="mt-3 text-base md:text-lg lg:text-base xl:text-lg text-black">
            Enhance your tech capabilities with in-depth courses focused on full
            stack Python development. Master Python, Django, Flask, RESTful APIs
            covering both front-end and back-end technologies. Develop
            proficiency in building robust, scalable applications and position
            yourself for success as a full stack Python developer.
          </p>
          <p className="text-base md:text-lg text-black my-4">
            Our courses empower you to dive deep into full stack Python
            technologies. Develop practical skills and stand out in a
            competitive job market. Start your full stack Python journey today.
          </p>
          <button
            onClick={handleEnroll}
            className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95"
          >
            Enroll Now
          </button>
          <div className="py-4">10,299 already enrolled</div>
        </div>
        <div className="relative pl-0 md:pl-12">
          <img
            className="h-72 md:h-auto w-full object-cover"
            src={images[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
          />

          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between px-8">
            <button
              onClick={prevSlide}
              className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
            >
              &larr;
            </button>
            <button
              onClick={nextSlide}
              className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
      <FullStackPythonDeveloper />
      <AboutCourses />
      <Delivery_Methods />
      <Community />
      <SuccessStory />
      <Footer />
    </>
  );
};

export default FullStackPythonDevelopment;