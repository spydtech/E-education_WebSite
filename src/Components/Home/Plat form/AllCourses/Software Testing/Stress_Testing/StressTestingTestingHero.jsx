// import React from "react";

import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

// import BigDataScroller from "./BigDataScroller";

const StressTestingHero = () => {
  const [courseName] = useState("Stress Testing"); // Placeholder for course name
  const [coursePrice] = useState(199);

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
          src="https://i0.wp.com/www.qatouch.com/wp-content/uploads/2023/05/6-15.png?resize=1024%2C535&ssl=1"
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
          <h1 className="text-3xl font-semibold text-[#f9ac13] xl:text-5xl lg:text-3xl">
            <span className="block w-full">
              Master the Art of Stress Testing
            </span>{" "}
            to Ensure Comprehensive Software Quality!
          </h1>
          <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            Empowering you to perform thorough stress tests and achieve reliable
            software, we are your trusted partners in ensuring complete code
            quality and robustness...
          </p>

          <div className="mt-4">
            <a
              onClick={handleEnroll}
              className="px-5 py-3 text-lg tracking-wider text-white bg-yellow-300 rounded-lg md:px-8 hover:bg-yellow-400 group"
            >
              <span>Enroll Now</span>{" "}
            </a>
          </div>
        </div>
        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
            src="https://media.istockphoto.com/id/1372353160/photo/young-asian-programmer-working-at-office.jpg?s=612x612&w=0&k=20&c=LO6IHvBGpqS798EZ6rmoJ8XtPs5iureu-pl38V1WxuA="
            alt="System Testing Illustration"
            width={500}
            height={488}
          />
        </div>
      </div>

      {/* Second Part */}
    </>
  );
};

export default StressTestingHero;
