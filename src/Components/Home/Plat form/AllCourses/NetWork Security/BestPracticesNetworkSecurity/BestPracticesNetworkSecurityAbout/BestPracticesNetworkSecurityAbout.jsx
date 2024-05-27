import React from "react";
import programmer from "../../../../../../../assets/dataAnalatics/programmer.jpg";
import assistance from "../../../../../../../assets/dataAnalatics/assistance.jpg";
// import support from "../../../../../assets/Platform/support.jpg";

const BestPracticesNetworkSecurityAbout = () => {
  return (
    <div className="mx-auto w-full md:lg:xl:px-10 p-1 bg-gradient-to-br from-[#aad922] to-[#ffef19]">
      <div className="pt-0">
        <p className="text-[#ec3400] text-xl font-medium">
          About The Network Security Best Practices Course
        </p>
      </div>
      <div className="py-2">
        <p className="text-6xl font-lora">
          Discover the
          <p className="text-[#ec3400] my-2">
            Network Security Best Practices Program
          </p>
        </p>
      </div>

      <div className="flex flex-wrap -mx-4 items-center pb-6">
        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-52 object-cover object-center"
              src={programmer}
              alt="security-training"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Comprehensive Training</h2>
              <p className="text-gray-700">
                Equip yourself with cutting-edge security practices through our
                comprehensive training sessions.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-52 object-cover"
              src={assistance}
              alt="expert-guidance"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Expert Guidance</h2>
              <p className="text-gray-700">
                Receive guidance from industry experts to stay updated with the
                latest trends and techniques in network security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestPracticesNetworkSecurityAbout;
