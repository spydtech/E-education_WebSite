import React from "react";
import programmer from "../../../../../assets/dataAnalatics/programmer.jpg";
import assistance from "../../../../../assets/dataAnalatics/assistance.jpg";

const BlockChainAbout = () => {
  return (
    <div className="mx-auto h-[470px] w-full mb-20 px-4 md:px-10 bg-white">
      <div className="mt-4">
        <p className="text-2xl text-center font-bold text-[#f6ac14]">
          About Block Chain Development Course
        </p>
      </div>
      <div className="mt-2">
        <p className="text-4xl text-center font-bold">
          Discover the
          <span className="text-[#f6ac14] my-2 block">Block Chain Development Program</span>
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center pb-6">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-52 object-cover object-center"
              src={programmer}
              alt="student-support"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Student Support</h2>
              <p className="text-gray-700">
                Learn about the latest techniques and get support for courses 24/7.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-52 object-cover object-center"
              src={assistance}
              alt="career-assistance"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Career Assistance</h2>
              <p className="text-gray-700">
                Gain expertise in continuous network monitoring to detect anomalies and respond to incidents in real-time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockChainAbout;
