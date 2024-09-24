// import React from "react";
import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import student from "../../../../../../assetss/Home/intro_DataScience/student.jpg";
import hero from '../../../../../../assetss/professional/networkSecurity/bestPractices/hero.png'
const NetworkSecurityBestPracticesHero = () => {
  const [courseName] = useState("NetWork Security Best Practices"); // Placeholder for course name
  const [coursePrice] = useState(14999);

  const navigate = useNavigate();
  const handleEnroll = () => {
    // Navigate to the card details page with course details as parameters
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      <div
        className="relative w-full h-[370px] bg-cover bg-center"
        style={{
          backgroundImage:
            `url(${hero})`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-center text-white max-md:text-[16px] text-[20px] font-medium px-4 max-w-[800px]">
            Secure Your Networks with Advanced Network Security Solutions!
            Empowering you to implement advanced security measures and
            defend against cyber attacks, we provide comprehensive solutions to keep your networks
            safe...
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

export default NetworkSecurityBestPracticesHero;
