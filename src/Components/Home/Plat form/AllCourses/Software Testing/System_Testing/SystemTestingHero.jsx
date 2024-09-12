import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import student from "../../../../../../assetss/Home/intro_DataScience/student.jpg";
import img1 from '../../../../../../assetss/professionalimages/image13.png'; // Replace with the appropriate image for System Testing

const SystemTestingHero = () => {
  const [courseName] = useState("System Testing");
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
          backgroundImage: `url(${img1})`, // Ensure to use the correct image here
        }}
      ></div>

      <div className="relative z-10 text-center text-white p-6 md:p-10">
        {/* <h1 className="text-2xl text-[#0098f1] font-lora font-bold mb-4"> 
          Master the Art of Stress Testing to Ensure Comprehensive Software Quality!
        </h1> */}
        <p className="text-[20px] text-white leading-10 mb-10 max-w-[800px] mx-auto">
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

export default SystemTestingHero;
