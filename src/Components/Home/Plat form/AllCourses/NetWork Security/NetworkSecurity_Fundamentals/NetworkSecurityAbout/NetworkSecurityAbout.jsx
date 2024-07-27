import React from "react";
import programmer from "../../../../../../../assets/dataAnalatics/programmer.jpg";
import assistance from "../../../../../../../assets/dataAnalatics/assistance.jpg";

const NetworkSecurityAbout = () => {
  return (
    <div className="mx-auto w-full md:lg:xl:px-10 p-1 bg-gradient-to-br from-[#0077b6] to-[#03045e] mb-16">
      <div className="pt-0">
        <p className="text-[#f9ac13] text-xl font-medium">
          About The Network Security Course
        </p>
      </div>
      <div className="py-2 pl-4">
        <p className="md:text-5xl text:2xl font">
          Discover the
          <p className="text-[#f9ac13] my-2">Network Security Program</p>
        </p>
      </div>

      <div className="flex flex-wrap -mx-4 items-center pb-6">
        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-52 object-cover object-center"
              src={programmer}
              alt="security-protection"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Student Supoort</h2>
              <p className="text-gray-700">
                Learn about the latest techniques and tools to protect your
                network from cyber threats and ensure robust security.
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

export default NetworkSecurityAbout;
