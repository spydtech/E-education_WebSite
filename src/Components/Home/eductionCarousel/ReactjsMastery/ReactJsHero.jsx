// import React from "react";

import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

import { FaReact } from "react-icons/fa";
const ReactJsHero = () => {
  const [courseName] = useState("React Js Mastery"); // Placeholder for course name
  const [coursePrice] = useState(34999);

  const navigate = useNavigate();
  const handleEnroll = () => {
    // Navigate to the card details page with course details as parameters
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      <div className="flex pt-12 px-6 md:px-20  items-center justify-center bg-[#16181D] md:h-screen overflow-hidden">
        <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
          <div className="w-full md:w-1/2 ">
            <h2 className="text-4xl lg:text-5xl text-center md:text-left text-[#61CCC5] leading-tight font-medium">
              Experience ReactJS: Revolutionizing Web Development!
            </h2>
            <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-white font-light tracking-wider leading-relaxed">
              Experience ReactJS: Revolutionizing Web Development. Its
              declarative, component-based design simplifies UI creation for
              top-notch performance. Whether you're a novice or expert, React
              equips you to craft responsive, scalable web apps. Dive in now and
              redefine your development journey!
            </h3>
            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
              <button
                onClick={handleEnroll}
                className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-[#61CCC5] text-white "
              >
                Get started
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <FaReact className="md:w-[400px] md:h-[400px] animate-spin-slow text-[#61CCC5]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReactJsHero;
