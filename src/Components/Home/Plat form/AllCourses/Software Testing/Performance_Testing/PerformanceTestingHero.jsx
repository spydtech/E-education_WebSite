// import React from "react";

import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
// import PerformanceTestingScroller from "./PerformanceTestingScroller";

const PerformanceTestingHero = () => {
  const [courseName] = useState("Performance Testing"); // Placeholder for course name
  const [coursePrice] = useState(14999);

  const navigate = useNavigate();
  const handleEnroll = () => {
    // Navigate to the card details page with course details as parameters
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      {/* First Part */}
      <div>
        <img
          src="https://images.squarespace-cdn.com/content/v1/5e51872712c0b73372f8fa1a/14b656b0-072d-436b-9746-712f87564b5a/Performance+Testing.png"
          className="w-full object-cover md:h-[500px]"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div> */}
      </div>

      <div
        className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right"
        data-aos-duration={800}
      >
        <div className="pr-2 md:mb-14 py-14 font-lora md:py-0">
          <h1 className="text-3xl font-semibold text-[#30c5ff] xl:text-5xl lg:text-3xl">
            <span className="block w-full">
              Optimize Your Performance Testing
            </span>{" "}
            to Achieve Unmatched Reliability!
          </h1>
          <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            Empowering you to rigorously test and optimize your systems,
            ensuring unparalleled performance and reliability for your
            business...
          </p>

          <div className="mt-4">
            <a
              onClick={handleEnroll}
              className="px-5 py-3 text-lg tracking-wider text-white bg-sky-300 rounded-lg md:px-8 hover:bg-sky-500 group"
            >
              <span>Enroll Now</span>{" "}
            </a>
          </div>
        </div>
        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
            src="https://img.freepik.com/free-vector/game-development-concept-creative-process-computer-video-game-design-digital-technology-programming-codding-testing-isolated-flat-vector-illustration_613284-3265.jpg?t=st=1716794417~exp=1716798017~hmac=61f26504e9f4ba2e667e43243240cdab2fa3faaacd42ffa79a9d56cdb01cffa5&w=740"
            alt="Performance Testing hero image"
            width={500}
            height={488}
          />
        </div>
      </div>

      {/* Second Part */}
    </>
  );
};

export default PerformanceTestingHero;
