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
      <div className="relative w-full h-[370px] bg-cover bg-center" style={{ backgroundImage: 'url("https://res.cloudinary.com/dfftgkkev/image/upload/v1726484672/image_1_jtkxdd.png")' }}>
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
    <p className="text-white text-lg md:text-xl lg:text-2xl font-medium mb-6"> {/* Responsive text sizes and margin */}
      Discover how Data Science can transform raw data into actionable insights, 
      <span className="hidden md:inline"> <br /></span>
      empowering your business to make data-driven decisions and 
      <span className="hidden md:inline"> <br /></span>
      stay ahead of the competition...
    </p>
  </div>
  <div className="absolute inset-0 flex items-end justify-center pb-10">
    <button
      onClick={handleEnroll}
      className="px-6 py-3 text-lg md:text-xl font-medium text-white bg-[#0098f1] rounded-xl hover:bg-[#007bb5] transition duration-200"
    >
      Enroll Now
    </button>
  </div>
</div>


      {/* Second Part */}
    </>
  );
};

export default DataScienceWithPythonHero;
