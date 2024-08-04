import React from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { FcPositiveDynamic } from "react-icons/fc";
import { GrTransaction } from "react-icons/gr";

function AdvancedEthicalHackingCareersOutcomes() {
  const stats = [
    {
      icon: <BsGraphUpArrow className="w-10 h-10 text-green-700 mb-2" />,
      stat: "57%",
      description: "Average salary hike",
    },
    {
      icon: <FaPeopleGroup className="w-10 h-10 text-blue-700 mb-2" />,
      stat: "100+",
      description: "Hiring partners",
    },
    {
      icon: <FcPositiveDynamic className="w-10 h-10 text-green-700 mb-2" />,
      stat: "5/6",
      description: "Learners saw positive career growth",
    },
    {
      icon: <GrTransaction className="w-10 h-10 text-red-800 mb-2" />,
      stat: "300+",
      description: "Career Transitions",
    },
  ];

  return (
    <div className="px-4 py-20 mb-16">
      <div className="flex flex-col lg:flex-row items-center justify-between text-start">
        {/* Left Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <div className="py-5">
            <p className="md:text-2xl text-[#f6ac14] text-2xl font-bold">
              Discover What our <span>Learners Have Achieved</span>
            </p>
            <p className="text-xl text-gray-500 mt-4">
              Snapshot of Alumni Placement Support
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-3 cursor-pointer text-xl font-medium border-2 border-transparent hover:border-[#f6ac14] bg-gray-100 rounded-md overflow-hidden shadow-lg"
              >
                {item.icon}
                <p>{item.stat}</p>
                <p className="text-gray-500 text-[16px]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvancedEthicalHackingCareersOutcomes;
