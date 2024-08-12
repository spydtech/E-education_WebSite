import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdvancephpHero = () => {
  const [courseName] = useState("Advance Php");
  const [coursePrice] = useState(14999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      <div className="items-center w-10/12 mx-auto overflow-x-hidden lg:grid grid-cols-2 md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5">
        <div className="w-auto h-auto pr-10 md:mb-14 py-14 font md:py-0 mx-auto">
          <h1 className="text-[18px] text-[#f6ac14] font-semibold md:text-[24px] lg:text-[28px] xl:text-[28px]">
            Master Advanced PHP Techniques to Elevate Your Development Skills!
          </h1>
          <p className="py-4 md:py-6 text-[20px] text-gray-600 leading-10">
            Dive deep into advanced PHP concepts including OOP, design patterns,
            and performance optimization. Enhance your backend development
            expertise with cutting-edge PHP practices.
          </p>

          <div className="mt-14 lg:md:w-[250px] lg:md:h-[70px] w-auto h-auto justify-center items-center">
            <button
              onClick={handleEnroll}
              className="px-5 md:w-full w-auto font-sans h-full py-3 text-[26px] font-medium text-white bg-[#0098f1] rounded-[22px] md:px-6"
            >
              Enroll Now
            </button>
          </div>
        </div>
        <div className="pb-10 mx-auto w-full h-auto flex justify-center items-center mb-20">
          <img
            id="heroImg1"
            className="rounded-full object-cover w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px] 2xl:w-[400px] 2xl:h-[400px]"
            src="https://media.istockphoto.com/id/1136829806/vector/website-app-design-development-technology-software-code-programming-ui-ux-concept.jpg?s=612x612&w=0&k=20&c=wB6hinX448B_fLDEGKubgkeVyX6ijVLQQ_Gz_kSqQUg="
            alt="Advanced PHP Illustration"
            width={400}
            height={400}
          />
        </div>
      </div>
    </>
  );
};

export default AdvancephpHero;
