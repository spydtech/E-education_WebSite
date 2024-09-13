import React from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { FcPositiveDynamic } from "react-icons/fc";
import { GrTransaction } from "react-icons/gr";

function WordpressCareersOutcomes() {
  const stats = [
    {
      icon: <BsGraphUpArrow className="w-10 h-10 text-green-700 mb-2" />,
      stat: "60%",
      description: "Average salary hike",
    },
    {
      icon: <FaPeopleGroup className="w-10 h-10 text-blue-700 mb-2" />,
      stat: "120+",
      description: "Hiring partners",
    },
    {
      icon: <FcPositiveDynamic className="w-10 h-10 text-green-700 mb-2" />,
      stat: "6/7",
      description: "Learners saw positive career growth",
    },
    {
      icon: <GrTransaction className="w-10 h-10 text-red-800 mb-2" />,
      stat: "400+",
      description: "Career Transitions",
    },
  ];

  return (
    <div className="px-3 mb-4">
      <div className="flex flex-col lg:flex-row items-center justify-between lg:my-9">
        {/* Left Content */}
        <div className="mb-8 lg:mb-0 lg:w-1/2">
          <div className="text-start">
            <p className="text-2xl font-bold text-[#0098F1]">
              Discover What our Learners Have Achieved
            </p>
            <p className="text-xl text-gray-500 mt-2">
              Snapshot of Alumni Placement Support
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-end">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 cursor-pointer text-xl font-medium border-2 border-transparent hover:border-[#750e5c] bg-gray-100 rounded-md overflow-hidden shadow-lg"
              >
                {item.icon}
                <p className="text-2xl font-bold mt-2">{item.stat}</p>
                <p className="text-gray-500 text-base mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WordpressCareersOutcomes;
