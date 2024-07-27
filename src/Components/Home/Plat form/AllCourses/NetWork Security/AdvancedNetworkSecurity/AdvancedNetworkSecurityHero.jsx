// import React from "react";

import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdvancedNetworkSecurityHero = () => {
  const [courseName] = useState("Advanced Network Security"); // Placeholder for course name
  const [coursePrice] = useState(14999);

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
          src="https://eccommonstorage.blob.core.windows.net/codered/uploads/82YA2U5YHWGgnTR7LpIGRUGZq4aYhzLdKEvFkylN.jpg"
          className="w-full object-cover md:h-[500px]"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div> */}
      </div>
      <div
        className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right"
        data-aos-duration={800}
      >
        <div className="pr-2 md:mb-14 py-14 font md:py-0">
          <h1 className="text-3xl font-semibold text-[#07beb8] xl:text-5xl lg:text-3xl">
            <span className="block w-full">
              Secure Your Networks with Advanced Network Security Solutions!
            </span>{" "}
          </h1>
          <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            Empowering you to implement advanced security measures and defend
            against cyber attacks, we provide comprehensive solutions to keep
            your networks safe...
          </p>

          <div className="mt-4">
            <a
              onClick={handleEnroll}
              className="px-5 py-3 text-lg tracking-wider text-white bg-cyan-500 rounded-lg md:px-8 hover:bg-cyan-700 group"
            >
              <span>Enroll Now</span>{" "}
            </a>
          </div>
        </div>
        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
            src="https://img.freepik.com/premium-vector/personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-flat-vector-illustration-banner-protection_128772-874.jpg?w=826"
            alt="Awesome hero page image"
            width={500}
            height={488}
          />
        </div>
      </div>

      {/* Second Part */}
    </>
  );
};

export default AdvancedNetworkSecurityHero;
