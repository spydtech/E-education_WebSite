import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BasicJavaScriptHero = () => {
  const [courseName] = useState("Basic JavaScript");
  const [coursePrice] = useState(14999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-10/12 mx-auto overflow-x-hidden md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5">
        <div className="order-2 lg:order-1 w-auto h-auto md:mb-14 font md:py-0 mx-auto">
          <p className="text-lg text-gray-500 flex items-center justify-center pl-3 leading-8">
            Empower yourself with the skills to create dynamic and interactive websites using JavaScript. Our comprehensive course will guide you from the basics to advanced concepts, ensuring you're ready to build robust web applications.
          </p>
          <div className="mt-6 md:w-[250px] md:h-[70px] w-auto h-auto lg:w-[160px] lg:h-[60px] flex justify-center items-center md:ml-48">
            <button
              onClick={handleEnroll}
              className="px-5 md:w-full w-auto font-sans h-full py-3 text-[26px] font-medium text-white bg-[#0098f1] rounded-[22px] md:px-6"
            >
              Enroll Now
            </button>
          </div>
        </div>
        <div className="order-1 lg:order-2 pb-10 mx-auto w-auto h-auto overflow-hidden md:p-10 lg:p-0 sm:pb-0 mt-14 md:mb-10">
          <img
            id="heroImg1"
            className="rounded-full object-cover w-[280px] h-[280px] sm:w-[375px] sm:h-[375px] md:w-[400px] md:h-[400px] lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px] 2xl:w-[600px] 2xl:h-[600px] mx-auto"
            src="https://img.freepik.com/premium-photo/side-view-creative-female-editor-editing-video-computer-wooden-desk_1199132-176742.jpg?w=900"
            alt="JavaScript Development hero image"
          />
        </div>
      </div>
    </>
  );
};

export default BasicJavaScriptHero;
