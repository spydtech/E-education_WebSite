import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../../../assetss/Basic_Courses/BasicUIUX/bgimageUIUX.jpg";

const Ui_UxHero = () => {
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
      Dive into the world of UI/UX design. Learn the principles of user-centered design, enhance your skills, and create visually stunning and user-friendly interfaces. Our resources will take you from basics to advanced techniques in UI/UX design.
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


export default Ui_UxHero;


