import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import uiUxBackground from '../../../../assetss/professionalimages/image13.png'; 

const Ui_UxHero = () => {
  const [courseName] = useState("Basic UI/UX");
  const [coursePrice] = useState(14999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <div className="relative w-full h-[500px] lg:h-[408px] flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${uiUxBackground})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div> 
      <div className="relative z-10 text-center text-white p-6 md:p-10">
        <p className="text-lg text-gray-200 mt-4 max-w-[800px]">
          Dive into the world of UI/UX design. Learn the principles of user-centered design, enhance your skills, and create visually stunning and user-friendly interfaces. Our resources will take you from basics to advanced techniques in UI/UX design.
        </p>
        <div className="mt-6 flex justify-center items-center">
          <button
            onClick={handleEnroll}
            className="px-6 py-3 text-[20px] font-medium text-white bg-[#0098f1] rounded-xl"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ui_UxHero;
