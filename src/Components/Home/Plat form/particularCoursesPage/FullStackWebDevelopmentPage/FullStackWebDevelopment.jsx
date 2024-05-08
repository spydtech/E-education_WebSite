import React, { useState, useEffect } from "react";
import Navbar from "../../../../Navbar";
import AboutCourses from "./AboutCourses";
import Community from "../../../Community/community";
import SuccessStory from "../../../SuccessStory/successstory";
import Award from "../../../Award/Award";
import Footer from "../../../footer/Footer";
import FullStackCard from "./FullStackCard";

const images = [
  "https://www.cdmi.in/courses@2x/full-stack.webp",
  "https://www.weblineindia.com/wp-content/uploads/2017/03/full-stack-development-by-weblineindia-2.jpg",
  "https://images.saymedia-content.com/.image/t_share/MTc0NTEwODM4NTk2NzczODc4/full-stack-web-development-are-you-a-game-for-this.jpg",
];
const ParticularFullStack = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // Change the time interval here (in milliseconds) for auto-sliding

    return () => clearInterval(interval);
  }, [currentSlide]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  //   }, 3000); // Change the time interval here (in milliseconds) for auto-sliding

  //   return () => clearInterval(interval);
  // }, [currentSlide]);
  return (
    <>
      <Navbar />
      <div className="w-full md:pl-28 py-12 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 max-w-8xl mx-auto">
        <div>
          <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
            Explore Full Stack Web Development
          </span>
          <h3 className="text-4xl md:text-6xl font-semibold text-gradient">
            Master Full Stack Web Development
          </h3>
          <p className="text-base md:text-lg text-slate-700 my-4 md:my-6 ">
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
          <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
            Eroll Now
          </button>
          <div className="py-4">11,095 already enrolled</div>
        </div>
        <div className="relative pl-12">
         
          <img
            className="h-[300px] w-[500px]"
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

      <AboutCourses />
      <FullStackCard />
      <Community />
      {/* <Award /> */}
      <SuccessStory />
      <Footer />
    </>
  );
};

export default ParticularFullStack;
