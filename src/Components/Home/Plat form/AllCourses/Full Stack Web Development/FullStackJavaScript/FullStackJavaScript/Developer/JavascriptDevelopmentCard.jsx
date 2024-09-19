import React from "react";
import nextgen from './../../../../../../../../assetss/fullstackwebdev/javaScript/javscript2.avif';

const JavascriptDevelopmentCard = () => {
  return (
    <>
      <div className="max-w-screen  px-4 mx-auto  sm:px-6 mb-12 ">
        <div className=" lg:grid lg:grid-cols-12 lg:gap-8 ">
          {/* Image Section */}
          <div className="relative mt-8 pl-8 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <img 
             src={nextgen}
              alt="Coding Illustration" 
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Text Section */}
          <div className="sm:text-center pt-6 md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left pl-4 mb-88">
            <div className="text-sm font-semibold tracking-wide text-gray-500 uppercase sm:text-base lg:text-sm xl:text-base">
              MEAN Stack Development
            </div>
            <h2 className="mt-1 tracking-tight text-gray-900 sm:leading-none text-xl md:text-3xl lg:text-4xl font-bold">
              Next-Gen <span className="text-[#F6AC14]">Full Stack</span> Javascript Development
            </h2>
            <p className="mt-3 text-base  text-gray-600 sm:mt-5 sm:text-md lg:text-lg xl:text-xl">
              Transform your web development skills with our comprehensive JavaScript full-stack solutions. From powerful backend services with Node.js and Express.js to interactive front-end experiences with React, we equip you with the latest tools and technologies to create seamless and scalable applications.
            </p>

            <div className="mt-5 md:flex md:justify-center lg:justify-start">
              <button className="bg-[#0098F1] text-white text-nowrap py-3 px-6 rounded transition-all hover:bg-[#007acc] active:scale-95 lg:text-2xl lg:w-[180px] lg:h-[60px] md:text-xl">
                <a href="/" className="">Explore Now</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JavascriptDevelopmentCard;
