import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CertifiedEthicalHackingHero = () => {
  const [courseName] = useState("Certified Ethical Hacker");
  const [coursePrice] = useState(34999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      <div
        className="relative w-full h-[370px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/ds5ooz2ve/image/upload/v1725874356/image_13_oi7qfs.png")',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-center text-white max-md:text-[16px] text-[20px] font-medium px-4">
            Discover how Machine Learning can transform using data and
            algorithms
            <br />
            to enable AI to imitate the way that humans learn,<br /> gradually
            improving its accuracy.
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

export default CertifiedEthicalHackingHero;
