import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PerformanceTestingHero = () => {
  const [courseName] = useState("Performance Testing");
  const [coursePrice] = useState(14999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      <div className="relative w-full h-[370px] bg-cover bg-center" style={{ backgroundImage: 'url("https://res.cloudinary.com/dfftgkkev/image/upload/v1726485732/image_5_ijvlan.png")' }}>
  <div className="absolute inset-0 flex items-center justify-center">
    <p className="text-center text-white text-[20px] font-medium px-4">
           Empowering you to rigorously test and optimize your systems,<br/>
            ensuring unparalleled performance and reliability for <br/>
            your business...
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

export default PerformanceTestingHero;
