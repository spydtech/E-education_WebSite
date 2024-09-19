// import React from "react";
import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
const DatavisualisationHero = () => {
  const [courseName] = useState("Data Visualization"); // Placeholder for course name
  const [coursePrice] = useState(14999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    // Navigate to the card details page with course details as parameters
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      {/* First Part */}
      <div className="relative w-full h-[370px] bg-cover bg-center" style={{ backgroundImage: 'url("https://res.cloudinary.com/ds5ooz2ve/image/upload/v1726473780/WhatsApp_Image_2024-09-15_at_11.16.11_PM_2_pmcwvr.jpg")' }}>
  <div className="absolute inset-0 flex items-center justify-center">
  <p className="text-center text-white text-[16px] md:text-[20px] font-medium pb-5 leading-relaxed">
  Explore the power of data visualization in transforming complex datasets into intuitive
  <span className="hidden md:inline"> <br /></span>
  empower success and keep you ahead of the competition.
  <span className="hidden md:inline"> <br /></span>
  visual narratives. Our data visualization solutions
  
</p>


  </div>
  <div className="absolute inset-0 flex items-end justify-center pb-10">
    <button
      onClick={handleEnroll}
      className="px-6 py-3 text-[20px] font-medium text-white bg-[#0098f1] rounded-xl"
    >
      Enroll Now
    </button>
  </div>
</div>

      {/* Second Part */}
    </>
  );
};

export default DatavisualisationHero;
