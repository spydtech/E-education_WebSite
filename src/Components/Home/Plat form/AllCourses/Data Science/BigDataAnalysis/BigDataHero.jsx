// import React from "react";
// import BigDataScroller from "./BigDataScroller";
import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

const BigDataHero = () => {
  const [courseName] = useState("Big Data"); // Placeholder for course name
  const [coursePrice] = useState(199);

  const handleEnroll = () => {
    // Navigate to the card details page with course details as parameters
    navigate("/course-details", { state: { courseName, coursePrice } });
  };
  const navigate = useNavigate();
  return (
    <>
      {/* First Part */}
      <div>
        <img
          src="https://venture.com.bd/wp-content/uploads/2021/01/Big-Data-scaled.jpg"
          // src="https://wallpaperaccess.com/full/1704582.jpg"
          className="w-full object-cover md:h-[500px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div>
      </div>
      <div
        className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right"
        data-aos-duration={800}
      >
        <div className="pr-2 md:mb-14 py-14 font-lora md:py-0">
          <h1 className="text-3xl font-semibold text-[#38b000] xl:text-5xl lg:text-3xl">
            <span className="block w-full">
              Harness the Power of Big Data Analysis
            </span>{" "}
            to Revolutionize Your Business!
          </h1>
          <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            Empowering you to leverage massive data sets and extract valuable
            insights, we are your trusted partners in driving business
            success...
          </p>

          <div className="mt-4">
            <a
              onClick={handleEnroll}
              className="px-5 py-3 text-lg tracking-wider text-white bg-green-500 rounded-lg md:px-8 hover:bg-green-700 group"
            >
              <span>Enroll Now</span>{" "}
            </a>
          </div>
        </div>
        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
            src="https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_52683-84601.jpg?t=st=1716451630~exp=1716455230~hmac=1d685dfa81a6736836431fbddf3c94f69e520c472b2f166f4bce78f5b22f64fa&w=740"
            alt="Awesome hero page image"
            width={500}
            height={488}
          />
        </div>
      </div>

      {/* Second Part */}
    </>
  );
};

export default BigDataHero;
