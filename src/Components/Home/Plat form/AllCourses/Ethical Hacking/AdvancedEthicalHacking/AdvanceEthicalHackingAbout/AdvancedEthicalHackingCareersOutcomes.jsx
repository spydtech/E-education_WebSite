import { BsGraphUpArrow } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { FcPositiveDynamic } from "react-icons/fc";
import { GrTransaction } from "react-icons/gr";

function AdvancedEthicalHackingCareersOutcomes() {
  return (
    <>
      <div
        id="main"
        className=" mb-16 bg-gradient-to-br from-purple-300 via-pink-500 to-red-600 pl-4"
      >
        <div id="headings" className="grid grid-cols-1 text-start md:px-20">
          <div>
            <p className="text-orange-600 text-xl font-medium">
              Career Outcomes in Ethical Hacking Program
            </p>
          </div>
          <div className="py-5">
            <p className="md:text-5xl text-2xl font">
              Discover What our{" "}
              <p className="text-violet-800">Learners Have Achieved</p>
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
          className="grid grid-cols-1 md:grid-cols-2 gap-x-6 "
        >
          <div
            id="a"
            className="grid grid-rows-2 grid-cols-2 gap-8 p-3  hover:cursor-pointer text-xl font-medium my-6 items-center border-2 border-opacity-15 rounded-md overflow-hidden shadow-lg shadow-gray-400"
          >
            <div id="x">
              <p>
                <BsGraphUpArrow className="w-10 h-10 text-green-700" />
              </p>
              <p>57%</p>
              <p className="text-gray-500 text-[16px]">Average salary hike</p>
            </div>
            <div id="y">
              <p>
                <FaPeopleGroup className="w-10 h-10 text-blue-700" />
              </p>
              <p>100+</p>
              <p className="text-gray-500 text-[16px]">Hiring partners</p>
            </div>
            <div id="z">
              <p>
                <FcPositiveDynamic className="w-10 h-10 text-green-700" />
              </p>
              <p>5/6</p>
              <p className="text-gray-500 text-[16px]">
                Learners saw positive career growth
              </p>
            </div>
            <div id="z">
              <p>
                <GrTransaction className="w-10 h-10 text-red-800" />
              </p>
              <p>300+</p>
              <p className="text-gray-500 text-[16px]">Career Transitions</p>
            </div>
          </div>
          {/*  */}
          <div id="b">
            <div
              id="n"
              className="p-5 text-xl font-medium my-6 rounded-md overflow-hidden"
            >
              <p className="p-4 pt-0">Top Recruiters</p>
              <div id="list" className="grid grid-rows-3 gap-y-8 grid-cols-3  ">
                {/* {recruiters.map((recruiter, index) => (
            <div key={index} className="w-12 h-12">
              <img src={recruiter} alt="" />
            </div>
          ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdvancedEthicalHackingCareersOutcomes;
