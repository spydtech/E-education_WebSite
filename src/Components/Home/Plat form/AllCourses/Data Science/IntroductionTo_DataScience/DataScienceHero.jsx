import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import student from "../../../../../../assetss/Home/intro_DataScience/student.jpg";
const DataScienceHero = () => {
  const [courseName] = useState("Introduction to Data Science"); // Placeholder for course name
  const [coursePrice] = useState(14999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
       <div className="relative w-full h-[370px] bg-cover bg-center" style={{ backgroundImage: 'url("https://res.cloudinary.com/dfftgkkev/image/upload/v1726487963/image_10_tqfmry.png")' }}>
  <div className="absolute inset-0 flex items-center justify-center">
    <p className="text-center text-white text-[20px] font-medium px-4">
    Discover how Data Science can transform raw data into actionable <br/>
            insights, empowering your business to make data-driven decisions and <br/>
            stay ahead of the competition...
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
    </>
  );
};

export default DataScienceHero;
