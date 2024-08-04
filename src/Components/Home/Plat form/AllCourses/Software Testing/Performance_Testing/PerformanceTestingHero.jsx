import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PerformanceTestingHero = () => {
  const [courseName] = useState("Performance Testing");
  const [coursePrice] = useState(14999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      <div className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5">
        <div className="w-auto h-auto pr-10 md:mb-14 py-14 font md:py-0 mx-auto">
          <h1 className="text-lg font-semibold text-[#f6ac14] xl:text-2xl lg:text-xl">
            <span className="block w-full">Optimize Your Performance Testing</span>{" "}
            to Achieve Unmatched Reliability!
          </h1>
          <p className="py-4 text-lg text-gray-500 md:py-6 leading-10">
            Empowering you to rigorously test and optimize your systems,
            ensuring unparalleled performance and reliability for your
            business...
          </p>
          <div className="mt-14 lg:md:w-[250px] lg:md:h-[70px] w-auto h-auto justify-center items-center">
            <button
              onClick={handleEnroll}
              className="px-5 md:lg:w-full w-auto font-sans h-full py-3 text-[26px] font-medium text-white bg-[#0098f1] rounded-[22px] md:px-6"
            >
              Enroll Now
            </button>
          </div>
        </div>
        <div className="pb-10 lg:w-[400px] lg:h-[400px] mx-auto md:w-[640px] h-auto overflow-hidden md:p-10 lg:p-0 sm:pb-0 ">
          <img
            id="heroImg1"
            className="rounded-full lg:h-full object-cover lg:w-auto sm:mx-auto sm:w-4/6 sm:h-4/6"
            src="https://img.freepik.com/premium-vector/man-sits-computer-with-man-working-his-computer_1230457-4733.jpg?ga=GA1.1.213537375.1722233910&semt=ais_hybrid"
            alt="Performance Testing hero image"
          />
        </div>
      </div>
    </>
  );
};

export default PerformanceTestingHero;
