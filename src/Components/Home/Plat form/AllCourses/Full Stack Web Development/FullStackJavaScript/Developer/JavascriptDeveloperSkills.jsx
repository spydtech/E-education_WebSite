import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";
import { IoReorderThreeOutline } from "react-icons/io5";
import JavascriptDevelopmentCard from "./JavascriptDevelopmentCard";
// import skills from "../Assests_MeanStack/WebDeveloper/skills.png";
import skills from "../../../../../../assets/Assests_MeanStack/WebDeveloper/skills.png";
import requirements from "../../../../../../assets/Assests_MeanStack/WebDeveloper/requirements.png";

const softSkills = [
  { name: "Problem Solving" },
  { name: "Teamwork" },
  { name: "Communication" },
  { name: "Time Management" },
  { name: "Adaptability" },
];

const technicalSkills = [
  { name: "React" },
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "RESTful APIs" },
  { name: "JavaScript ES6+" },
];

const JavascriptDeveloperSkills = () => {
  return (
    <>
      <JavascriptDevelopmentCard />
      <div
        id="main"
        className=" gap-10 py-20   grid lg:md:grid-cols-3 grid-cols-1  p-10 justify-center items-center "
      >
        <div id="1" className=" w-[400px] rounded-lg   h-60 relative">
          <div className="  p-4 rounded-lg shadow-2xl border-violet-800 border-2">
            <img src={skills} className="w-24 h-24 absolute left-[280px]" />
            <h2 className="text-base  font-extrabold text-violet-700  sm:text-xl lg:text-lg xl:text-3xl font-lora">
              Soft Skills
            </h2>
            <div className="">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center  mr-4 mb-2">
                  <p className=" text-base text-gray-600  font-lora">
                    <FaArrowAltCircleRight className="text-violet-800 inline mx-2" />
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div id="2" className=" rounded-lg  w-[400px] h-60 relative">
          <div className="bg-white p-4 rounded-lg shadow-2xl border-violet-800 border-2 ">
            <img
              src={requirements}
              className="w-24 h-24 absolute left-[280px]"
            />
            <h2 className="text-base  font-extrabold text-violet-700  sm:text-xl lg:text-lg xl:text-3xl font-lora">
              Technical Skills
            </h2>
            <div className="">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="flex items-center mr-4 mb-2">
                  <p className=" text-base text-gray-600  font-lora">
                    <FaArrowAltCircleRight className="text-violet-800 inline mx-2" />
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div id="3" className=" w-[400px] h-40 rounded-lg  items-center flex">
          <div className=" p-4 rounded-lg  ">
            <h2 className="text-base  font-extrabold text-violet-700  sm:text-xl lg:text-lg xl:text-3xl font-lora">
              Full Stack JavaScript Developer Skills
            </h2>
            <div className=" flex text-violet-700 justify-center items-center">
              <IoRemoveOutline className="text-[40px]" />
              <IoReorderThreeOutline className="text-[40px]" />{" "}
              <IoRemoveOutline className="text-[40px]" />
            </div>
            <p className=" text-base text-gray-600  font-lora">
              Over the last decade, web development expectations have shifted
              dramatically, with many businesses now expecting their Full Stack
              JavaScript developers to be multi-skilled experts.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>
    </>
  );
};

export default JavascriptDeveloperSkills;
