// import React from "react";
// import BigDataScroller from "./BigDataScroller";
import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

const BigDataHero = () => {
  const [courseName] = useState("Big Data"); // Placeholder for course name
  const [coursePrice] = useState(14999);

  const handleEnroll = () => {
    // Navigate to the card details page with course details as parameters
    navigate("/course-details", { state: { courseName, coursePrice } });
  };
  const navigate = useNavigate();
  return (
    <div
      className="relative w-full h-[420px] bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/ds5ooz2ve/image/upload/v1725874356/image_13_oi7qfs.png")',
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-center text-white text-[15px] md:text-[20px] font-medium px-4 md:w-[680px] leading-8">
          {/* Empowering you to leverage massive data sets and extract valuable 
            insights, we are your trusted partners in driving business
            success... */}
          {/* Master Big Data Analysis! Learn to transform complex datasets into actionable insights using tools like Python, R, and Hadoop. Gain essential skills for a successful career in data-driven industries! */}
          Unlock the Power of Big Data! In this course, you'll learn to
          transform complex datasets into actionable insights using tools like
          Python, R, Hadoop, and Spark. Develop essential skills to excel in
          data-driven industries and prepare for exciting career opportunities!
        </p>
      </div>
      <div className="absolute inset-0 flex items-end justify-center pb-16">
        <button
          onClick={handleEnroll}
          className="px-6 py-3 text-[20px] font-medium text-white bg-[#0098f1] rounded-xl"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default BigDataHero;
