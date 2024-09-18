import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import hero from "../../../../../../assetss/student/softwareTesting/usabilityTesting/hero.png";

const UsabilityTestingHero = () => {
  const [courseName] = useState("Usability Testing"); // Placeholder for course name
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
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-center text-white max-md:text-[16px] text-[20px] font-medium px-4">
            Elevate Your Usability Testing to Create Exceptional User
            Experiences! <br /> Empowering you to rigorously test and refine
            your user interfaces, <br /> ensuring intuitive and seamless
            experiences for your users...
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

export default UsabilityTestingHero;
