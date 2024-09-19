import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CybersecurityHero = () => {
  const [courseName] = useState("Introduction To CyberSecurity"); // Placeholder for course name
  const [coursePrice] = useState(34999);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <div
      className="relative w-full h-[370px] bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/ds5ooz2ve/image/upload/v1726477157/WhatsApp_Image_2024-09-15_at_11.16.12_PM_1_dlktrs.jpg")',
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <p className="text-white text-lg md:text-xl lg:text-2xl font-medium">
          In today's interconnected world, cybersecurity stands as the first{" "}
          <br />
          line of defense against an array of digital threats. With cyber <br />
          attacks becoming increasingly sophisticated,
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
  );
};

export default CybersecurityHero;
