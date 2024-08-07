import { BsGraphUpArrow } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { FcPositiveDynamic } from "react-icons/fc";
import { GrTransaction } from "react-icons/gr";

function BlockChainCareersOutcomes() {
  // const recruiters = ["apple", "facebook", "intel", "oracle", "sap", "nvidia"];

  return (
    <>
      <div
        id="main"
        className=" md:lg:xl:pl-20  bg-gradient-to-br to-[#0a0908] from-[#272640]"
      >
        <div id="headings" className="grid grid-cols-1 text-start ">
          <div>
            <p className="text-[#ff7000] text-xl font-medium">
              Career Outcomes in BlockChain Program
            </p>
          </div>
          <div className="py-5">
            <p className="text-6xl font text-white">
              Discover What our{" "}
              <p className="text-[#ff7000]">Learners Have Achieved</p>
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
            className="grid grid-rows-2 grid-cols-2 gap-8 p-3  hover:cursor-pointer text-xl font-medium my-6 items-center bg-gray-100 border-4 border-[#ff7000] border-opacity-50 rounded-md overflow-hidden  "
          >
            <div id="x">
              <p>
                <BsGraphUpArrow className="w-10 h-10 text-green-700" />
              </p>
              <p>60%</p>
              <p className="text-gray-500 text-[16px]">Average salary hike</p>
            </div>
            <div id="y">
              <p>
                <FaPeopleGroup className="w-10 h-10 text-blue-700" />
              </p>
              <p>120+</p>
              <p className="text-gray-500 text-[16px]">Hiring partners</p>
            </div>
            <div id="z">
              <p>
                <FcPositiveDynamic className="w-10 h-10 text-yellow-500" />
              </p>
              <p>6/7</p>
              <p className="text-gray-500 text-[16px]">
                Learners saw positive career growth
              </p>
            </div>
            <div id="z">
              <p>
                <GrTransaction className="w-10 h-10 text-red-800" />
              </p>
              <p>400+</p>
              <p className="text-gray-500 text-[16px]">Career Transitions</p>
            </div>
          </div>
          {/*  */}
          <div id="b">
            <div
              id="n"
              className="p-5 text-xl font-medium my-6 rounded-md overflow-hidden"
            >
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

export default BlockChainCareersOutcomes;
