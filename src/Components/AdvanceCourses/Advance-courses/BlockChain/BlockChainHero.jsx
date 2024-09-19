import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BlockChainHero = () => {
  const [courseName] = useState("Block Chain Development");
  const [coursePrice] = useState(34999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center w-10/12 mx-auto overflow-x-hidden ">
        <div className="order-2 lg:order-1 w-auto h-auto md:mb-14 font md:py-0 mx-auto">
          <h1 className="text-[18px] md:text-[26px] lg:text-[28px] xl:text-[28px] font-semibold text-[#f6ac14] leading-tight text-start">
            Master Block Chain Development with Our Expert Course!
          </h1>
          <p className="text-lg text-gray-500 flex items-center justify-center pl-3 leading-8 mt-4">
            Explore blockchain technology and build innovative solutions! Our comprehensive resources will guide you from understanding the basics to developing advanced blockchain applications.
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
        <div className="order-1 lg:order-2 mt-4 md:mt-0 p-10  flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/blockchain-infographics_23-2147853635.jpg?t=st=1725009353~exp=1725012953~hmac=31d2602c46ccede58f992c90636fd155d5d8c5800e73f71dade952824b859c19&w=740"
            alt="Hero"
            className="w-full h-full max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>
      </div>
    </>
  );
};

export default BlockChainHero;
