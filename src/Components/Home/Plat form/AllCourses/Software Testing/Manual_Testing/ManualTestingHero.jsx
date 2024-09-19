// import React from "react";

import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

// import ManualTestingScroller from "./ManualTestingScroller";

const ManualTestingHero = () => {
  const [courseName] = useState("Manual Testing"); // Placeholder for course name
  const [coursePrice] = useState(14999);

  const navigate = useNavigate();
  const handleEnroll = () => {
    // Navigate to the card details page with course details as parameters
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
   <div className="relative w-full h-[370px] bg-cover bg-center" style={{ backgroundImage: 'url("https://res.cloudinary.com/dfftgkkev/image/upload/v1726486887/image_8_icjvtx.png")' }}>
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
    <p className="text-white text-lg md:text-xl lg:text-2xl font-medium mb-6"> {/* Responsive text sizes and margin */}
      Understand the importance of regression testing in maintaining software stability 
      <span className="hidden md:inline"> <br /></span>
      and functionality after updates and enhancements. Learn best practices and  
      <span className="hidden md:inline"> <br /></span>
      strategies to effectively implement regression testing in your projects...
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


    </>
  );
};

export default ManualTestingHero;
