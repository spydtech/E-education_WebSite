// import React from "react";

import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

const BlockChainHero = () => {
  const [courseName] = useState("Block Chain Development"); // Placeholder for course name
  const [coursePrice] = useState(34999);

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
          src="https://wallpaper.forfun.com/fetch/e2/e26042c747d0c6131146b07d38104c46.jpeg"
          className="w-full object-cover md:h-[500px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div>
      </div>

      <div
        className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right"
        data-aos-duration={800}
      >
        <div className="pr-2 md:mb-14 py-14 font-lora md:py-0">
          <h1 className="text-3xl font-semibold text-[#ff7000] xl:text-5xl lg:text-3xl">
            <span className="block w-full">Explore Blockchain Technology</span>{" "}
            and Build Innovative Solutions!
          </h1>
          <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            Empower yourself with the knowledge of blockchain technology.
            Discover its potential to revolutionize industries and create
            decentralized solutions. Our comprehensive resources will guide you
            from understanding the basics to developing advanced blockchain
            applications.
          </p>

          <div className="mt-4">
            <a
              onClick={handleEnroll}
              className="px-5 py-3 text-lg tracking-wider text-white bg-orange-300 rounded-lg md:px-8 hover:bg-orange-500 group"
            >
              <span>Enroll Now</span>
            </a>
          </div>
        </div>
        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
            src="https://img.freepik.com/free-vector/hand-drawn-flat-design-cryptocurrency-concept_23-2149180043.jpg?t=st=1717065815~exp=1717069415~hmac=6cc4cad3bf1710c004ca03d4be011c134bc667b27797b95a7c3bc2023cbc8ddc&w=740"
            alt="Blockchain Technology hero image"
            width={500}
            height={488}
          />
        </div>
      </div>

      {/* Second Part */}
    </>
  );
};

export default BlockChainHero;
