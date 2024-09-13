import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import student from "../../../../../../assetss/professionalimages/image13.png";

const IntigrationHero = () => {
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
        <p className="text-[20px] md:text-[24px] font-medium text-white px-4 mb-10 max-w-[800px] mx-auto">
          Empower your team with efficient acceptance testing procedures, ensuring your software meets stakeholder requirements and expectations...
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

export default IntigrationHero;
