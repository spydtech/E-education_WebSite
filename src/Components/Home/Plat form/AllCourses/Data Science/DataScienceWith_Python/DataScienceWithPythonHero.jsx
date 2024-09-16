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

      <div className="relative w-full h-[370px] bg-cover bg-center" style={{ backgroundImage: 'url("https://res.cloudinary.com/dfftgkkev/image/upload/v1726488077/image_11_hmovl6.png")' }}>
  <div className="absolute inset-0 flex items-center justify-center">
    <p className="text-center text-white text-[20px] font-medium px-4">
    Equip yourself with cutting-edge data science techniques and tools.<br/>
            Extract actionable insights and drive business growth with our<br/>
            comprehensive courses and resources...
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

export default DataScienceWithPythonHero;
