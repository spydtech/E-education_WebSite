// import React from "react";
import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

const MobileappHero = () => {
  const [courseName] = useState("Full stack Mobile App"); // Placeholder for course name
  const [coursePrice] = useState(199);

  const navigate = useNavigate();
  const handleEnroll = () => {
    // Navigate to the card details page with course details as parameters
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      {/* First Part */}
      <div>
        <img
          src="https://thenextrex.pk/wp-content/uploads/2021/10/App-Development-01.jpg"
          className="w-full object-cover md:h-[500px]"
          alt="mobile app"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div> */}
      </div>
      <div
        className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right"
        data-aos-duration={800}
      >
        <div className="pr-2 md:mb-14 py-14 font-lora md:py-0">
          <h1 className="text-3xl font-semibold text-[#f9ac13] xl:text-5xl lg:text-3xl">
            <span className="block w-full">Master Mobile App Development</span>{" "}
            and Build Next-Gen Applications!
          </h1>
          <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            Dive into the world of mobile app development, from iOS and Android
            platforms to cross-platform frameworks like React Native and
            Flutter. Unlock the potential to create innovative and user-friendly
            mobile experiences.
          </p>

          <div className="mt-4">
            <a
              onClick={handleEnroll}
              className="px-5 py-3 text-lg tracking-wider text-white bg-yellow-300 rounded-lg md:px-8 hover:bg-yellow-400 group"
            >
              <span>Enroll Now</span>{" "}
            </a>
          </div>
        </div>
        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            className="transition-all rounded-[20px] duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
            src="https://www.crunchgrowth.com/wp-content/uploads/2017/04/mobile_apps.jpg"
            alt="Mobile App Development Illustration"
            width={500}
            height={488}
          />
        </div>
      </div>
    </>
  );
};

export default MobileappHero;
