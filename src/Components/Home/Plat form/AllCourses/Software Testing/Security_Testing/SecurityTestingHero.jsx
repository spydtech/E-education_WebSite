import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SecurityTestingHero = () => {
  const [courseName] = useState("Security Testing");
  const [coursePrice] = useState(14999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
     <div className="relative w-full h-[370px] bg-cover bg-center" style={{ backgroundImage: 'url("https://res.cloudinary.com/dfftgkkev/image/upload/v1726486175/image_6_qsmi2x.png")' }}>
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
    <p className="text-white text-lg md:text-xl lg:text-2xl font-medium mb-6"> {/* Responsive text sizes and margin */}
      Empowering you to rigorously test and optimize your systems,
      <span className="hidden md:inline"> <br /></span>
      ensuring unparalleled performance and reliability for your
      <span className="hidden md:inline"> <br /></span>
      business...
    </p>
  </div>
  <div className="absolute inset-0 flex items-end justify-center pb-10">
    <button
      onClick={handleEnroll}
      className="px-6 py-3 text-lg md:text-xl font-medium text-white bg-[#0098f1] rounded-xl hover:bg-[#007bb5] transition duration-200"
    >
      Enroll Now
    </button>
  </div>
</div>


    </>
  );
};

export default SecurityTestingHero;
