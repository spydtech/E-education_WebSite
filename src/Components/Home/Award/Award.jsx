import React from "react";
import { RiFacebookBoxFill } from "react-icons/ri";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { FaAward } from "react-icons/fa6";

function HomeContent() {
  return (
    <>
      <div
        id="main"
        className="grid grid-rows-1 bg-gray-300   md:grid-rows-2 lg:grid-rows-2 lg:md:h-[440px]"
      >
        <div id="sub1" className="">
          <div
            id="heading"
            className="   text-center w-[450px]  md:w-[800px] lg:w-screen py-20"
          >
            <p className="text-7xl font-medium text-gray-800">
              Award winning experience
            </p>
          </div>

          <div
            id="foricons"
            className=" grid  md:lg:pl-32 
              grid-cols-2  justify-center md:lg:w-screen w-[450px] md:w-[800px]  pl-10 lg:grid-cols-4 "
          >
            {/* icon 1 */}
            <div className="">
              <div id="icon1" className=" flex  h-16">
                {" "}
                <FaStar className="h-10 w-6 text-yellow-500 " alt="LinkedIn" />
                <FaStar className="h-10 w-6 text-yellow-500 " alt="LinkedIn" />
                <FaStar className="h-10 w-6 text-yellow-500 " alt="LinkedIn" />
                <FaStar className="h-10 w-6 text-yellow-500 " alt="LinkedIn" />
                <FaStar className="h-10 w-6 text-yellow-500 " alt="LinkedIn" />
              </div>
              <p className="text-xl font-medium ">4.8 out of 5</p>
              <p>Stars on AppStore</p>
            </div>
            {/* icon2 */}
            <div>
              <div id="icon1" className="px-10">
                {" "}
                <RiFacebookBoxFill
                  className="w-16 h-16 text-blue-800"
                  alt="LinkedIn"
                />
              </div>
              <p className="text-xl font-medium ">App Of The Year</p>
              <p>FB Start by Facebook</p>
            </div>
            {/* icon3 */}
            <div>
              <div id="icon1" className="px-10">
                {" "}
                <IoLogoGooglePlaystore
                  className="w-16 h-16 text-red-500"
                  alt="LinkedIn"
                />
              </div>
              <p className="text-xl font-medium ">Editors choice</p>
              <p>Stars on AppStore</p>
            </div>
            {/* icon4 */}
            <div className=" w-52">
              <div id="icon1" className="px-10">
                {" "}
                <FaAward className="w-16 h-16 text-yellow-500" alt="LinkedIn" />
              </div>
              <p className="text-xl font-medium ">
                Best Computer Coding Education Solution
              </p>
              <p>EdTech BreakThrough Award 2021</p>
            </div>
            {/* icon end */}
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeContent;
