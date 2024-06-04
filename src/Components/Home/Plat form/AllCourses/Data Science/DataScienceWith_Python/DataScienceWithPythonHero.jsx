// import React from "react";
import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
// import PythonDataScroller from "./PythonDataScroller";

const DataScienceWithPythonHero = () => {
  const [courseName] = useState("Data Science With Python"); // Placeholder for course name
  const [coursePrice] = useState(14999);

  const handleEnroll = () => {
    // Navigate to the card details page with course details as parameters
    navigate("/course-details", { state: { courseName, coursePrice } });
  };
  const navigate = useNavigate();
  return (
    <>
      {/* First Part */}

      <div className="">
        <img
          // src="https://t3.ftcdn.net/jpg/05/90/54/50/240_F_590545034_KBdVwbAy6i5kVQYht1oswK8c8D6oVabA.jpg"
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230318230239/Python-Data-Science-Tutorial.jpg"
          className="w-full object-cover md:h-[500px]"
        />
      </div>
      <div
        className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right"
        data-aos-duration={800}
      >
        <div className="pr-2 md:mb-14 py-14 font-lora md:py-0">
          <h1 className="text-3xl font-semibold text-[#750e5c] xl:text-5xl lg:text-3xl">
            <span className="block w-full">
              Elevate Your Data Science Skills
            </span>{" "}
            with Python for Business Success!
          </h1>
          <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            Equip yourself with cutting-edge data science techniques and tools.
            Extract actionable insights and drive business growth with our
            comprehensive courses and resources...
          </p>

          <div className="mt-4">
            <a
              onClick={handleEnroll}
              className="px-5 py-3 text-lg tracking-wider text-white bg-pink-800 rounded-lg md:px-8 hover:bg-pink-900 group"
            >
              <span>Enroll Now</span>{" "}
            </a>
          </div>
        </div>
        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
            src="https://img.freepik.com/free-vector/data-inform-illustration-concept_114360-864.jpg?t=st=1716457953~exp=1716461553~hmac=74246d0ea355eba687de33b504f8cb7a79863ea70d264f4e8d3f8f76c2bede29&w=826"
            alt="Data Science with Python Hero Image"
            width={500}
            height={488}
          />
        </div>
      </div>

      {/* Second Part */}
    </>
  );
};

export default DataScienceWithPythonHero;
