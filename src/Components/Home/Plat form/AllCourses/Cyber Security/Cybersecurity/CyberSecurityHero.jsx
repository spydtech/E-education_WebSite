import React, { useState, useEffect } from "react";
// import Navbar from "../../../../../Navbar";
// import Footer from "../../../../footer/Footer";
import student from "../../../../../../assetss/Home/intro_DataScience/student.jpg";

import { useNavigate } from "react-router-dom";
// import CybersecurityNavigation from "./CyberSecurityNavigation";
const CybersecurityHero = () => {
  const [courseName] = useState("Introduction To CyberSecurity"); // Placeholder for course name
  const [coursePrice] = useState(34999);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const handleEnroll = () => {
    // Navigate to the card details page with course details as parameters
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
    
    <div className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid  lg:mt-3 xl:mt-5">
        <div className="w-auto h-auto pr-10 md:mb-14 py-14 font md:py-0 mx-auto ">
        <h1 className="text-2xl  text-[#0098f1]   font-lora font-bold  pt-4">
              Your Digital World with Cybersecurity
            </h1>
          <p className=" md:lg:xl:2xl:text-[24px] text-[20px] text-[#101828]  md:py-6  leading-10">
          In today's interconnected world, cybersecurity stands as the first
              line of defense against an array of digital threats. With cyber
              attacks becoming increasingly sophisticated,
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
        
        <div className="pb-10 lg:md:w-[400px] lg:md:h-[380px] mx-auto w-auto h-auto overflow-hidden  p-6 ">
          <img
            id="heroImg1"
            className="rounded-full lg:w-full  sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
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

export default CybersecurityHero;
