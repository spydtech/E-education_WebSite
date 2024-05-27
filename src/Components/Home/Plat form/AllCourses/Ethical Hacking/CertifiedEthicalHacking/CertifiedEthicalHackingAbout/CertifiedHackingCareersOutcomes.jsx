import { BsGraphUpArrow } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { FcPositiveDynamic } from "react-icons/fc";
import { GrTransaction } from "react-icons/gr";

function CertifiedEthicalHackingCareersOutcomes() {
  return (
    <>
      <div
        id="main"
        className="bg-gradient-to-r from-yellow-400 to-red-500 mb-8 p-4"
      >
        <div id="headings" className="text-start px-4 md:px-20">
          <div>
            <p className="text-orange-600 text-xl font-medium">
              Career Outcomes in Ethical Hacking Program
            </p>
          </div>
          <div className="py-5">
            <p className="text-4xl md:text-6xl font-lora">
              Discover What our{" "}
              <span className="text-violet-800">Learners Have Achieved</span>
            </p>
          </div>
          <div>
            <p className="text-xl text-gray-500">
              Snapshot of Alumni Placement Support
            </p>
          </div>
        </div>
        <div
          id="subdiv"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 md:px-20"
        >
          <div
            id="a"
            className="grid grid-rows-2 grid-cols-2 gap-4 p-3 hover:cursor-pointer text-xl font-medium my-6 items-center border-2 border-opacity-15 rounded-md overflow-hidden shadow-lg shadow-gray-400"
          >
            <div id="x" className="flex items-center space-x-4">
              <BsGraphUpArrow className="w-10 h-10 text-green-700" />
              <div>
                <p>57%</p>
                <p className="text-gray-500 text-[16px]">Average salary hike</p>
              </div>
            </div>
            <div id="y" className="flex items-center space-x-4">
              <FaPeopleGroup className="w-10 h-10 text-blue-700" />
              <div>
                <p>100+</p>
                <p className="text-gray-500 text-[16px]">Hiring partners</p>
              </div>
            </div>
            <div id="z" className="flex items-center space-x-4">
              <FcPositiveDynamic className="w-10 h-10 text-green-700" />
              <div>
                <p>5/6</p>
                <p className="text-gray-500 text-[16px]">
                  Learners saw positive career growth
                </p>
              </div>
            </div>
            <div id="w" className="flex items-center space-x-4">
              <GrTransaction className="w-10 h-10 text-red-800" />
              <div>
                <p>300+</p>
                <p className="text-gray-500 text-[16px]">Career Transitions</p>
              </div>
            </div>
          </div>
          <div
            id="b"
            className="p-3 hover:cursor-pointer text-xl font-medium my-6 items-center border-2 border-opacity-15 rounded-md overflow-hidden shadow-lg shadow-gray-400"
          >
            <p className="p-4 pt-0">Top Recruiters</p>
            <div
              id="list"
              className="grid grid-rows-3 gap-y-4 md:gap-y-8 grid-cols-3"
            >
              {/* Add recruiter logos here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CertifiedEthicalHackingCareersOutcomes;
