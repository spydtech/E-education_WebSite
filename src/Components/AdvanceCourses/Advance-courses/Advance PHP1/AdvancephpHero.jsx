import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

// import React from "react";
// import BigDataScroller from "./BigDataScroller";

const AdvancephpHero = () => {
  const [courseName] = useState("Advance Php"); // Placeholder for course name
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
          src="https://oreation.coresites.in/assets/images/courses/2024-01-11-17-13-8656665291.png"
          className="w-full object-cover md:h-[500px]"
          alt="Advance PHP Development Hero Image"
        />

        {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div> */}
      </div>
      <div
        className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right"
        data-aos-duration={800}
      >
        <div className="pr-2 md:mb-14 py-14 font md:py-0">
          <h1 className="text-3xl font-semibold text-[#f9ac13] xl:text-5xl lg:text-3xl">
            <span className="block w-full">Master Advanced PHP Techniques</span>{" "}
            to Elevate Your Development Skills!
          </h1>
          <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            Dive deep into advanced PHP concepts including OOP, design patterns,
            and performance optimization. Enhance your backend development
            expertise with cutting-edge PHP practices.
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
            id="heroImg1"
            className="transition-all rounded-[20px] duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
            // src="https://img.freepik.com/free-vector/flat-safer-internet-day-background_23-2151163157.jpg?t=st=1716534608~exp=1716538208~hmac=09e4c538073b8355fd4ffcbfe01d08ff8411d5109bc8fb5320e4a51009442ee6&w=826"
            src="https://media.istockphoto.com/id/1136829806/vector/website-app-design-development-technology-software-code-programming-ui-ux-concept.jpg?s=612x612&w=0&k=20&c=wB6hinX448B_fLDEGKubgkeVyX6ijVLQQ_Gz_kSqQUg="
            alt="Advanced PHP Illustration"
            width={500}
            height={488}
          />
        </div>
      </div>

      {/* Second Part */}
    </>
  );
};

export default AdvancephpHero;
