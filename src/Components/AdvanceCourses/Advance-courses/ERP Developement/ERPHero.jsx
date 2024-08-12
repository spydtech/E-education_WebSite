import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ERPHero = () => {
  const [courseName] = useState("Enterprise Resource Planning");
  const [coursePrice] = useState(14999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-10/12 mx-auto overflow-x-hidden md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5">
        <div className="order-2 lg:order-1 w-auto h-auto pr-10 md:mb-14 py- font md:py-0 mx-auto">
          <h1 className="text-[18px] text-[#f6ac14] font-semibold md:text-[24px] lg:text-[28px] xl:text-[28px]">
            Master Enterprise Resource Planning with Our Comprehensive Course!
          </h1>
          <p className="text-lg text-gray-500 md:py-6 leading-10">
            Learn how to optimize your business operations with our detailed ERP
            course. From implementation strategies to core modules, gain the
            skills needed to successfully manage and integrate various business
            processes using ERP systems.
          </p>
          <div className="mt-4 md:w-[250px] md:h-[70px] w-auto h-auto lg:w-[160px] lg:h-[60px] flex justify-center items-center md:ml-48">
            <button
              onClick={handleEnroll}
              className="px-5 w-auto font-sans h-full py-3 text-[26px] font-medium text-white bg-[#0098f1] rounded-[22px] md:px-6"
            >
              Enroll Now
            </button>
          </div>
        </div>
        <div className="order-1 lg:order-2 pb-10 mx-auto w-auto h-auto overflow-hidden md:p-10 lg:p-0 sm:pb-0 mt-14 md:mb-10">
          <img
            id="heroImg1"
            className="rounded-full object-cover w-[280px] h-[280px] sm:w-[375px] sm:h-[375px] md:w-[400px] md:h-[400px] lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px] 2xl:w-[600px] 2xl:h-[600px] mx-auto"
            src="https://img.freepik.com/free-photo/business-growth-graph_53876-163233.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid"
            alt="Enterprise Resource Planning"
          />
        </div>
      </div>
    </>
  );
};

export default ERPHero;
