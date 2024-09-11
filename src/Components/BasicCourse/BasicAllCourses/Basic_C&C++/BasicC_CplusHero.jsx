import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../../../assets/background.png"; // Ensure path is correct

const BasicC_CplusHero = () => {
  const [courseName] = useState("Basic PHP");
  const [coursePrice] = useState(14999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <div
    className="relative w-full h-[520px] bg-cover bg-center"
    style={{
      backgroundImage: `url(${backgroundImage})`,
    }}
  >
    <div className="absolute inset-0 flex items-center justify-center">
      <p className="text-center text-white text-[15px] md:text-[20px] font-medium px-4 md:w-[680px] leading-8">
      Gain the skills to develop high-performance applications using C and C++. Our comprehensive course will guide you from basic programming concepts to advanced techniques, ensuring you're prepared to tackle complex software development challenges.
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


export default BasicC_CplusHero;


