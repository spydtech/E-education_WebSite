import React from "react";

import programmer from "../../../../../../../assets/dataAnalatics/programmer.jpg";
import assistance from "../../../../../../../assets/dataAnalatics/assistance.jpg";

const UnitTestingAbout = () => {
  return (
    <div className="mx-auto w-full md:lg:xl:px-10 p-1 bg-gradient-to-br from-[#0077b6] to-[#03045e] mb-16">
      <div className="pt-0">
        <p className="text-[#f9ac13] text-xl font-medium">
          About The Software Testing Course
        </p>
      </div>
      <div className="py-2">
        <p className="md:text-5xl text-2xl font">
          Discover the
          <p className="text-[#f9ac13] my-2">Software Testing Program</p>
        </p>
      </div>

      <div className="flex flex-wrap -mx-4 items-center pb-6">
        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-52 object-cover object-center"
              src={programmer}
              alt="software-testing"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Student Support</h2>
              <p className="text-gray-700">
                Learn about the latest software testing techniques and tools to
                ensure robust and reliable applications.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-52 object-cover"
              src={assistance}
              alt="career-assistance"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Career Assistance</h2>
              <p className="text-gray-700">
                Gain expertise in various testing methodologies and receive
                support to advance your career in software testing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitTestingAbout;
