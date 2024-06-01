// import React from "react";
import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
const WordpressHero = () => {
  const [courseName] = useState("Basic WordPress"); // Placeholder for course name
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
          src="https://kinsta.com/wp-content/uploads/2017/12/wordpress-admin.png"
          className="w-full object-cover md:h-[500px]"
        />
      </div>

      <div
        className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right"
        data-aos-duration={800}
      >
        <div className="pr-2 md:mb-14 py-14 font-lora md:py-0">
          <h1 className="text-3xl font-semibold text-[#31cb00] xl:text-5xl lg:text-3xl">
            <span className="block w-full">
              Build Your Dream Website with WordPress
            </span>{" "}
            Quickly and Easily!
          </h1>
          <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            Empower your online presence with WordPress, the most popular
            content management system, providing flexibility and ease of use for
            all your website needs...
          </p>

          <div className="mt-4">
            <a
              onClick={handleEnroll}
              className="px-5 py-3 text-lg tracking-wider text-white bg-green-300 rounded-lg md:px-8 hover:bg-green-500 group"
            >
              <span>Enroll Now</span>{" "}
            </a>
          </div>
        </div>
        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="transition-all rounded-[20px] duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
            src="https://www.searchenginejournal.com/wp-content/uploads/2022/05/wordpress-6-627233df6fbbc-sej.jpg"
            alt="WordPress hero image"
            width={500}
            height={488}
          />
        </div>
      </div>

      {/* Second Part */}
    </>
  );
};

export default WordpressHero;
