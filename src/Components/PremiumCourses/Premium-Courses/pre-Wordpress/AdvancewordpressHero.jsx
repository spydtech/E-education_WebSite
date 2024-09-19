import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import student from "../../../../assetss/professionalimages/image7.png";

const AdvanceWordpressHero = () => {
  const [courseName] = useState("Integration Testing");
  const [coursePrice] = useState(14999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <div className="relative w-full h-[500px] lg:h-[408px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${student})`,
        }}
      ></div>

      <div className="relative z-10 text-center text-white p-6 md:p-10">
        <p className="text-[18px] md:text-[20px] font-medium text-white px-4 mb-10 max-w-[1000px] mx-auto">
        Dive deep into advanced WordPress concepts, including custom theme development, plugin creation, performance optimization, and security best practices. Enhance your website development expertise with cutting-edge WordPress techniques.
        </p>
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

export default AdvanceWordpressHero;
