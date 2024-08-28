import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MobileappHero = () => {
  const [courseName] = useState("Full Stack Mobile App");
  const [coursePrice] = useState(14999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-10/12 mx-auto overflow-x-hidden md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5">
        <div className="order-2 lg:order-1 w-auto h-auto md:mb-14 font md:py-0 mx-auto">
          <h1 className="text-[18px] md:text-[26px] lg:text-[28px] font-semibold text-[#f6ac14] leading-tight text-start">
            Master Mobile App Development and Build Next-Gen Applications!
          </h1>
          <p className="text-lg text-gray-500 flex items-center justify-center pl-3 leading-8 mt-4">
            Dive into the world of mobile app development, from iOS and Android platforms to cross-platform frameworks like React Native and Flutter. Unlock the potential to create innovative and user-friendly mobile experiences.
          </p>
          <div className="mt-6 md:w-[250px] md:h-[70px] w-auto h-auto lg:w-[160px] lg:h-[60px] flex justify-center items-center md:ml-48">
            <button
              onClick={handleEnroll}
              className="px-5 md:w-full w-auto font-sans h-full py-3 text-[26px] font-medium text-white bg-[#0098f1] rounded-[22px] md:px-6"
            >
              Enroll Now
            </button>
          </div>
        </div>
        <div className="order-1 lg:order-2 pb-10 mx-auto w-auto h-auto overflow-hidden md:p-10 lg:p-0 sm:pb-0 mt-14 md:mb-10 flex justify-center items-center">
          <img
            id="heroImg1"
            className="rounded-full object-cover w-[280px] h-[280px] sm:w-[375px] sm:h-[375px] md:w-[400px] md:h-[400px] lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px] 2xl:w-[600px] 2xl:h-[600px] mx-auto"
            src="https://www.crunchgrowth.com/wp-content/uploads/2017/04/mobile_apps.jpg"
            alt="Mobile App Development Illustration"
          />
        </div>
      </div>
    </>
  );
};

export default MobileappHero;
