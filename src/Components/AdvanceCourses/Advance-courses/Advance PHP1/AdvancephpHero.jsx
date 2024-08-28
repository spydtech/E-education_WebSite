import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdvancephpHero = () => {
  const [courseName] = useState("Advance PHP");
  const [coursePrice] = useState(14999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-10/12 mx-auto overflow-x-hidden md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5">
        <div className="order-2 lg:order-1 w-auto h-auto pr-10 md:mb-14 py- font md:py-0 mx-auto">
          <h1 className="text-[18px] md:text-[26px] lg:text-[28px] xl:text-[28px] font-semibold text-[#f6ac14] leading-tight text-start">
            Master Advanced PHP Techniques to Elevate Your Development Skills!
          </h1>
          <p className="text-lg text-gray-500 md:py-6 leading-8">
            Dive deep into advanced PHP concepts including OOP, design patterns, and performance optimization. Enhance your backend development expertise with cutting-edge PHP practices.
          </p>
          <div className="mt-6 md:w-[250px] md:h-[70px] w-auto h-auto flex justify-center items-center">
            <button
              onClick={handleEnroll}
              className="px-5 w-auto font-sans h-full py-3 text-[26px] font-medium text-white bg-[#0098f1] rounded-[22px] md:px-6"
            >
              Enroll Now
            </button>
          </div>
        </div>
        <div className="order-1 lg:order-2 pb-10 mx-auto w-auto h-auto overflow-hidden md:p-10 lg:p-0 sm:pb-0 mt-14 md:mb-10 flex justify-center items-center">
          <img
            id="heroImg1"
            className="rounded-full object-cover w-[280px] h-[280px] sm:w-[375px] sm:h-[375px] md:w-[400px] md:h-[400px] lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px] 2xl:w-[600px] 2xl:h-[600px] mx-auto"
            src="https://media.istockphoto.com/id/1136829806/vector/website-app-design-development-technology-software-code-programming-ui-ux-concept.jpg?s=612x612&w=0&k=20&c=wB6hinX448B_fLDEGKubgkeVyX6ijVLQQ_Gz_kSqQUg="
            alt="Advanced PHP Illustration"
          />
        </div>
      </div>
    </>
  );
};

export default AdvancephpHero;
