// import React from "react";

import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

const BasicJavaHero = () => {
  const [courseName] = useState("Basic Java"); // Placeholder for course name
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
          src="https://bairesdev.mo.cloudinary.net/blog/2022/12/ordenador-con-elementos-de-cC3B3digo-de-programa-en-la-pantalla-y-la-inscripciC3B3n-java-y-un-1.jpg_s1024x1024wisk20cLRurCA2qFxY0HFKYDh_5Cjgu8mCuo9sbGxPiIB6_x38-1.jpg?tx=w_1920,q_auto"
          className="w-full object-cover md:h-[500px]"
        />
      </div>

      <div
        className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right"
        data-aos-duration={800}
      >
        <div className="pr-2 md:mb-14 py-14 font md:py-0">
          <h1 className="text-3xl font-semibold text-[#d90429] xl:text-5xl lg:text-3xl">
            <span className="block w-full">
              Elevate Your Java Programming Skills
            </span>{" "}
            for Unmatched Performance!
          </h1>
          <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            Empower yourself with advanced Java programming techniques to
            optimize performance and reliability for your projects...
          </p>

          <div className="mt-4">
            <a
              onClick={handleEnroll}
              className="px-5 py-3 text-lg tracking-wider text-white bg-red-500 rounded-lg md:px-8 hover:bg-red-700 group"
            >
              <span>Enroll Now</span>{" "}
            </a>
          </div>
        </div>
        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
            src="https://img.freepik.com/free-vector/app-development-concept-with-programming-languages_23-2148688949.jpg?t=st=1716970373~exp=1716973973~hmac=0322411a56d76b8a30c1e30198670505b94db1f057df973f4c1f06bb31c8519c&w=740"
            alt="Java Programming hero image"
            width={500}
            height={488}
          />
        </div>
      </div>

      {/* Second Part */}
    </>
  );
};

export default BasicJavaHero;
