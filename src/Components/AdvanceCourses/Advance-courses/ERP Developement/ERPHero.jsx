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
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-10/12 mx-auto overflow-x-hidden">
        <div className="order-2 lg:order-1 w-auto h-auto  mx-auto">
          <h1 className="text-[18px] md:text-[26px] lg:text-[28px] xl:text-[28px] font-semibold text-[#f6ac14] leading-tight text-start">
            Master Enterprise Resource Planning with Our Comprehensive Course!
          </h1>
          <p className="text-lg text-gray-500 flex items-center justify-center pl-3 leading-8 mt-4">
            Learn how to optimize your business operations with our detailed ERP course. From implementation strategies to core modules, gain the skills needed to successfully manage and integrate various business processes using ERP systems.
          </p>
          <div className="mt-6 md:w-[250px] md:h-[70px] w-auto h-auto lg:w-[160px] lg:h-[60px] flex justify-center items-center md:ml-48">
            <button
              onClick={handleEnroll}
              className="px-5 w-auto font-sans h-full py-3 text-[26px] font-medium text-white bg-[#0098f1] rounded-[22px] md:px-6"
            >
              Enroll Now
            </button>
          </div>
        </div>
        <div className="order-1 lg:order-2   flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/speed-test-concept-illustration_114360-3267.jpg?t=st=1725014215~exp=1725017815~hmac=0f061f675b6f9f4fc0fc5888c1331e5d8f681067e1777ddc3bdd2cf1d826f223&w=740"
            alt="Hero"
            className="w-full h-full max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>
      </div>
    </>
  );
};

export default ERPHero;
