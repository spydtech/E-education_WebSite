import React from "react";
import programmer from "../../../../../../../assets/dataAnalatics/programmer.jpg";
import assistance from "../../../../../../../assets/dataAnalatics/assistance.jpg";
// import support from "../../../../../assets/Platform/support.jpg";

const EthicalHackingAbout = () => {
  return (
    <div className="mx-auto w-full md:lg:xl:px-10 p-1 bg-gradient-to-br  from-cyan-400 via-sky-500  to-blue-500">
      <div className="pt-0">
        <p className="text-[#7400b8] text-xl font-medium">
          About The Automation Testing Course
        </p>
      </div>
      <div className="py-2">
        <p className="text-6xl font-lora">
          Discover the
          <p className="text-[#7400b8] my-2">Automation Testing Program</p>
        </p>
      </div>

      <div className="flex flex-wrap -mx-4 items-center pb-6">
        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-52 object-cover object-center"
              src={programmer}
              alt="Automation-protection"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Student Supoort</h2>
              <p className="text-gray-700">
                Learn about the latest techniques and get support for courses
                24/7.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-52 object-cover"
              src={assistance}
              alt="network-monitoring"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Carrer Assistance</h2>
              <p className="text-gray-700">
                Gain expertise in continuous network monitoring to detect
                anomalies and respond to incidents in real-time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EthicalHackingAbout;
