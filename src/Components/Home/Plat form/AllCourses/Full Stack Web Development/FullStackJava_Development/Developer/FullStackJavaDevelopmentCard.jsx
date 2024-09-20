import React from "react";
import Nextgen from "../../../../../../../assetss/fullstackwebdev/java/java11.png";

const FullStackJavaDevelopmentCard = () => {
  return (
    <>
     <div className="max-w-screen  px-4 mx-auto  sm:px-6 mb-12">
        <div className=" lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="relative mt-8 pl-8 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <img src={Nextgen} alt="" className="" />
          </div>
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left pl-4 mb-8">
            <div className="text-sm font-semibold tracking-wide text-gray-500 uppercase sm:text-base lg:text-sm xl:text-base font">
            Full Stack Java Development
            </div>
            <h2 className="mt-1   leading-10 tracking-tight text-gray-900 sm:leading-none text-xl md:text-3xl lg:text-4xl font-bold font">
              Next-Gen <span className="text-[#F6AC14]">   Full Stack  </span>Java Development
            </h2>
            <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-md lg:text-lg xl:text-xl font">
            Enhance your web applications with our comprehensive Full Stack
              Java development solutions. From powerful backend logic to
              interactive frontend experiences, we leverage Java's robustness to
              deliver scalable and efficient web solutions. It is one of the
              most simple programming languages to learn. Write code once and it
              will run on nearly any computing platform. Java is platform
              agnostic. Some programs developed on one machine can be run on
              another.
              </p>
            <div className="mt-5 sm:mt-8 flex justify-center lg:justify-start">
                <button
            className="mt-6 bg-[#0098F1] text-white   md:w-auto py-3 px-6 rounded transition-all hover:bg-[#007acc] active:scale-95 xl:lg:text-2xl xl:lg:w-[180px] xl:lg:h-[60px] text-nowrap md:text-xl">
            <a href="/"
               className=""
                >
                  Explore Now
                </a>
          </button>
              </div>
            </div>
          </div>
        </div>


    </>
  );
};

export default FullStackJavaDevelopmentCard;
