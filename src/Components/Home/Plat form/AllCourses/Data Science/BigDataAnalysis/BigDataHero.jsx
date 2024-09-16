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
    <div className="relative w-full h-[370px] bg-cover bg-center" style={{ backgroundImage: 'url("https://res.cloudinary.com/ds5ooz2ve/image/upload/v1726473975/WhatsApp_Image_2024-09-15_at_11.16.12_PM_nvvaj5.jpg")' }}>
    <div className="absolute inset-0 flex items-center justify-center">
      <p className="text-center text-white text-[20px] font-medium px-4">
      Explore the power of data visualization in transforming complex  datasets into intuitive<br/>
                datasets into intuitive visual narratives. Our data visualization solutions empower<br/>
                     solutions empower your business to uncover hidden patterns, trends, <br/>
                    and correlations, enabling data-driven decisions that drive <br/>
                       success  and keep you ahead of the competition.
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
  

  )
};

export default BigDataHero;
