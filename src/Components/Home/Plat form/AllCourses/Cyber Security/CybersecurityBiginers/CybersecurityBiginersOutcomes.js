import React from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { FcPositiveDynamic } from "react-icons/fc";
import { GrTransaction } from "react-icons/gr";

function CybersecurityCareersOutcomes() {
  return (
    <>
      <div
        id="main"
        className=" mb-16 bg-gradient-to-r from-amber-400 to-red-500"
      >
        <div id="headings" className="grid grid-cols-1 text-start px-20 py-10">
          <div>
            <p className="text-white text-2xl font-medium font-lora">
              Career Outcomes in Cybersecurity Program
            </p>
          </div>
          <div className="py-5">
            <p className="text-5xl font-lora text-white">
              Discover What our{" "}
              <span className="text-yellow-300">Learners Have Achieved</span>
            </p>
          </div>
          <div>
            <p className="text-xl text-white">
              Snapshot of Alumni Placement Support
            </p>
          </div>
        </div>
        <div
          id="subdiv"
          className="grid grid-cols-1 md:grid-cols-2 gap-x-6 pl-20 pb-10"
        >
          <div
            id="a"
            className="grid grid-rows-2 grid-cols-2 gap-8 p-3 pl-20 hover:cursor-pointer text-xl font-medium my-6 items-center border-2 border-opacity-15 rounded-md overflow-hidden shadow-lg bg-white"
          >
            <div id="x" className="text-center">
              <p>
                <BsGraphUpArrow className="w-10 h-10 text-green-700 mx-auto" />
              </p>
              <p className="text-2xl text-gray-800">65%</p>
              <p className="text-gray-600 text-[16px]">Average salary hike</p>
            </div>
            <div id="y" className="text-center">
              <p>
                <FaPeopleGroup className="w-10 h-10 text-blue-700 mx-auto" />
              </p>
              <p className="text-2xl text-gray-800">120+</p>
              <p className="text-gray-600 text-[16px]">Hiring partners</p>
            </div>
            <div id="z" className="text-center">
              <p>
                <FcPositiveDynamic className="w-10 h-10 text-green-700 mx-auto" />
              </p>
              <p className="text-2xl text-gray-800">6/7</p>
              <p className="text-gray-600 text-[16px]">
                Learners saw positive career growth
              </p>
            </div>
            <div id="z" className="text-center">
              <p>
                <GrTransaction className="w-10 h-10 text-red-700 mx-auto" />
              </p>
              <p className="text-2xl text-gray-800">350+</p>
              <p className="text-gray-600 text-[16px]">Career Transitions</p>
            </div>
          </div>
          <div id="b">
            <div
              id="n"
              // className="p-5 text-xl font-medium my-6 rounded-md overflow-hidden bg-white shadow-lg"
            >
              {/* <p className="p-4 pt-0 text-gray-800">Top Recruiters</p> */}
              <div id="list" className="grid grid-rows-3 gap-y-8 grid-cols-3">
                {/* {recruiters.map((recruiter, index) => (
                  <div key={index} className="w-12 h-12">
                    <img src={recruiter} alt="" />
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CybersecurityCareersOutcomes;
