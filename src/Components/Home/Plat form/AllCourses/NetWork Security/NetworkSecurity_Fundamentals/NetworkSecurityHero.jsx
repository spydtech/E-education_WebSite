// import React from "react";
// import BigDataScroller from "./BigDataScroller";

import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import student from "../../../../../../assetss/Home/intro_DataScience/student.jpg";
const NetworkSecurityHero = () => {
  const [courseName] = useState("Network Security Fundamentals"); // Placeholder for course name
  const [coursePrice] = useState(14999);

  const navigate = useNavigate();
  const handleEnroll = () => {
    // Navigate to the card details page with course details as parameters
    navigate("/course-details", { state: { courseName, coursePrice } });
  };
  return (
   <>
   
    <div className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid  lg:mt-3 xl:mt-5">
        <div className="w-auto h-auto pr-10 md:mb-14 py-14 font md:py-0 mx-auto ">
          <p className="py-4 md:lg:xl:2xl:text-[24px] text-[20px] text-[#101828]  md:py-6  leading-10">
          Empowering you to leverage massive data sets and extract valuable
            insights, we are your trusted partners in driving business
            success...
          </p>
          <div className="mt-14 lg:md:w-[250px] lg:md:h-[70px]  w-auto h-auto justify-center items-center">
            <button
              onClick={handleEnroll}
              className="px-5  md:lg:w-full  w-auto font-sans h-full  py-3 text-[26px] font-medium text-white bg-[#0098f1] rounded-[22px] md:px-6  "
            >
              Enroll Now
            </button>
          </div>
        </div>
        <div className="pb-10 lg:md:w-[400px] lg:md:h-[380px] mx-auto w-auto h-auto   md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="rounded-full lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
            src="https://img.freepik.com/free-vector/gradient-ssl-illustration_23-2149251020.jpg?t=st=1722951201~exp=1722954801~hmac=d10890eabb5b76994fef715c6c3d76b48ebe90e8622337c91e67e158a8488e3c&w=740"
            alt="Data Science Introduction "
            width={500}
            height={488}
          />
        </div>
      </div>
    </>
  );
};

export default NetworkSecurityHero;
