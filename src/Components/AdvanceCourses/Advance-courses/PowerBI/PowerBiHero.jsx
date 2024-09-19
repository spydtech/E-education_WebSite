import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PowerBiHero = () => {
  const [courseName] = useState("Master Power BI");
  const [coursePrice] = useState(14999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-10/12 mx-auto overflow-x-hidden ">
        <div className="order-2 lg:order-1 w-auto h-auto  mx-auto">
          <h1 className="text-[18px] md:text-[26px] lg:text-[28px] xl:text-[28px] font-semibold text-[#f6ac14] leading-tight text-start">
            Master Data Visualization with Power BI!
          </h1>
          <p className="text-lg text-gray-500 flex items-center justify-center pl-3 leading-8 mt-4">
            Learn how to leverage the power of Power BI to create stunning data visualizations and insightful reports. Our comprehensive course will guide you through the essential features and best practices for data analysis and visualization with Power BI.
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
            src="https://img.freepik.com/free-vector/strategic-consulting-concept-illustration_114360-9336.jpg?t=st=1725019896~exp=1725023496~hmac=cd9c10bc2d11a70c38be5aaee3e1fca1ada4d3e8ad52b6bb809a6186cc05e226&w=740"
            alt="Hero"
            className="w-full h-full max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>
      </div>
    </>
  );
};

export default PowerBiHero;
