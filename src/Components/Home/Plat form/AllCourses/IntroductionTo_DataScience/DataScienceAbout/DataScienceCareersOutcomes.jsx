import { BsGraphUpArrow } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { FcPositiveDynamic } from "react-icons/fc";
import { GrTransaction } from "react-icons/gr";

function DataScienceCareersOutcomes() {
  return (
    <>
      <div
        id="main"
        className="md:lg:xl:pl-20 bg-gradient-to-br from-[#4e148c] to-[#613dc1]"
      >
        <div id="headings" className="grid grid-cols-1 text-start ">
          <div>
            <p className="text-[#ff206e] text-xl font-medium">
              Career Outcomes in Data Science Program
            </p>
          </div>
          <div className="py-5">
            <p className="text-6xl font-lora">
              Discover What our{" "}
              <p className="text-[#ff206e]">Learners Have Achieved</p>
            </p>
          </div>
          <div>
            <p className="text-xl text-gray-500">
              Snapshot of Alumni Placement Support
            </p>
          </div>
        </div>
        <div id="subdiv" className="grid grid-cols-1 md:grid-cols-2 gap-x-6 ">
          <div
            id="a"
            className="grid grid-rows-2 grid-cols-2 gap-8 p-3 hover:cursor-pointer text-xl font-medium my-6 items-center border-4 border-[#ff206e] bg-white border-opacity-50 rounded-md overflow-hidden shadow-lg "
          >
            <div id="x">
              <p>
                <BsGraphUpArrow className="w-10 h-10 text-green-700" />
              </p>
              <p>70%</p>
              <p className="text-gray-500 text-[16px]">Average salary hike</p>
            </div>
            <div id="y">
              <p>
                <FaPeopleGroup className="w-10 h-10 text-blue-700" />
              </p>
              <p>150+</p>
              <p className="text-gray-500 text-[16px]">Hiring partners</p>
            </div>
            <div id="z">
              <p>
                <FcPositiveDynamic className="w-10 h-10 text-green-700" />
              </p>
              <p>8/10</p>
              <p className="text-gray-500 text-[16px]">
                Learners saw positive career growth
              </p>
            </div>
            <div id="z">
              <p>
                <GrTransaction className="w-10 h-10 text-red-800" />
              </p>
              <p>500+</p>
              <p className="text-gray-500 text-[16px]">Career Transitions</p>
            </div>
          </div>
          <div id="b">
            <div
              id="n"
              className="p-5 text-xl font-medium my-6 rounded-md overflow-hidden"
            >
              <div id="list" className="grid grid-rows-3 gap-y-8 grid-cols-3 ">
                {/* Example recruiter logos can be added here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataScienceCareersOutcomes;