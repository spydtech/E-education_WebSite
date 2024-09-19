import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CloudComputingHero = () => {
  const [courseName] = useState("Cloud with AWS");
  const [coursePrice] = useState(34999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2   justify-center items-center w-10/12 mx-auto overflow-x-hidden h-auto overflow-y-hidden">
        <div className="order-2 lg:order-1 w-auto h-auto  mt-10 lg:mt-0 font mx-auto">
          <h1 className="text-[18px] md:text-[26px] lg:text-[28px] xl:text-[28px] font-semibold text-[#f6ac14] leading-tight text-start">
            Master Cloud Computing with AWS and Build Scalable Solutions!
          </h1>
          <p className="text-lg text-gray-500 flex items-center justify-center pl-3 leading-8 mt-4">
            Learn how to leverage the power of Amazon Web Services to build scalable, reliable, and secure cloud solutions. Our comprehensive course will guide you through the essential services and best practices for cloud computing with AWS.
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
        <div className="order-1 lg:order-2  flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/cloud-computing-with-data-inflow-outflow-binary-codes_1017-31868.jpg?t=st=1725014602~exp=1725018202~hmac=aa8dc351eafc4ed2e0bf7abeedc26307ba6e25a1522c8a7a5a81c3c02b4c7914&w=900"
            alt="Hero"
            className="w-full h-full max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>
      </div>
    </>
  );
};

export default CloudComputingHero;
