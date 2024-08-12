import React from "react";
import programmer from "../../../../../assets/dataAnalatics/programmer.jpg";
import assistance from "../../../../../assets/dataAnalatics/assistance.jpg";

const AdvancephpAbout = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-10/12 mx-auto overflow-x-hidden md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5">
      <div className="order-2 lg:order-1 w-auto h-auto pr-10 md:mb-14 py- font md:py-0 mx-auto">
        <div className="text-lg text-gray-500 md:py-6 leading-10">
          Discover the advanced features of PHP and enhance your development skills. Our comprehensive program covers in-depth concepts to build sophisticated web applications and improve your career prospects...
        </div>
      </div>
      <div className="order-1 lg:order-2 pb-10 mx-auto w-auto h-auto overflow-hidden md:p-10 lg:p-0 sm:pb-0 mt-14 md:mb-10">
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[280px] h-[300px] flex flex-col items-center">
            <img
              className="w-full h-2/3 object-cover"
              src={programmer}
              alt="Student Support"
            />
            <div className="p-4 w-full text-center">
              <h2 className="text-xl font-bold mb-2 text-[#0098f1]">Student Support</h2>
              <p className="text-gray-700">
                Learn about the latest software testing techniques and tools to ensure robust and reliable applications.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[280px] h-[300px] flex flex-col items-center">
            <img
              className="w-full h-2/3 object-cover"
              src={assistance}
              alt="Career Assistance"
            />
            <div className="p-4 w-full text-center">
              <h2 className="text-xl font-bold mb-2 text-[#0098f1]">Career Assistance</h2>
              <p className="text-gray-700">
                Gain expertise in various testing methodologies and receive support to advance your career in software testing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancephpAbout;
