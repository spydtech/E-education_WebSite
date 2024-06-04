import React from "react";
import programmer from "../../../../../../../assets/dataAnalatics/programmer.jpg";
import assistance from "../../../../../../../assets/dataAnalatics/assistance.jpg";

const SystemTestingAbout = () => {
  return (
    <div className="mx-auto w-full pl-4 md:lg:xl:px-10 p-1 bg-gradient-to-r from-rose-500 to-red-500">
      <div className="pt-0">
        <p className="text-[#f9ac13] text-xl font-medium">
          About The Compatibility Testing Course
        </p>
      </div>
      <div className="py-2">
        <p className="md:text-5xl text-2xl font-lora">
          Discover the
          <p className="text-[#f9ac13] my-2">Compatibility Testing Program</p>
        </p>
      </div>

      <div className="flex flex-wrap -mx-4 items-center pb-6">
        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-52 object-cover object-center"
              src={programmer}
              alt="compatibility-testing"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Student Support</h2>
              <p className="text-gray-700">
                Learn about the latesting System testing techniques and tools to
                ensure your applications are robust and reliable across various
                environments.
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
                Gain expertise in various System testing methodologies and
                receive support to advance your career in this specialized
                field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemTestingAbout;
