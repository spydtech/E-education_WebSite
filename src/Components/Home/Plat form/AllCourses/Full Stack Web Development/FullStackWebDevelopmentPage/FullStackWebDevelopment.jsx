import React, { useState, useEffect } from "react";
import Navbar from "../../../../../Navbar";
import AboutCourses from "./AboutCourses";
import Community from "../../../Community/community";
import SuccessStory from "../../../SuccessStory/successstory";
// import Award from "../../../Award/Award";
import Footer from "../../../../footer/Footer";
// import FullStackCard from "./FullStackCard";
import WebDeveloper from "./Web_Development/WebDeveloper";
import Delivery_Methods from "./deliverymethods/Delivery_Methods";
import { useNavigate } from "react-router-dom";


const images = [
  "https://www.cdmi.in/courses@2x/full-stack.webp",
  "https://www.weblineindia.com/wp-content/uploads/2017/03/full-stack-development-by-weblineindia-2.jpg",
  "https://images.saymedia-content.com/.image/t_share/MTc0NTEwODM4NTk2NzczODc4/full-stack-web-development-are-you-a-game-for-this.jpg",
];


const ParticularFullStack = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // Change the time interval here (in milliseconds) for auto-sliding

    return () => clearInterval(interval);
  }, [currentSlide]);



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
          <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95" navigate="/course-details">
            Eroll Now
          </button>
          <div className="py-4">11,095 already enrolled</div>
        </div>
        <div className="relative pl-12">

          <img
            className="md:h-[300px] md:w-[500px] "
            src={images[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
          />

        </div>



      </div>


      <WebDeveloper />
      <AboutCourses />
      <Delivery_Methods />
      <Community />
      {/* <Award /> */}
      {/* <SuccessStory /> */}
      <Footer />
    </>
  );
};

export default ParticularFullStack;
