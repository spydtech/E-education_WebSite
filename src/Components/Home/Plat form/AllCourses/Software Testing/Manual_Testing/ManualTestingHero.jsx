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
  <div className="absolute inset-0 flex items-center justify-center">
    <p className="text-center text-white text-[20px] font-medium px-4">
             Understand the importance of regression testing in maintaining software stability <br/>
              and functionality after updates and enhancements. Learn best practices and  <br/>
              strategies to effectively implement regression testing in your projects...
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

export default ManualTestingHero;
