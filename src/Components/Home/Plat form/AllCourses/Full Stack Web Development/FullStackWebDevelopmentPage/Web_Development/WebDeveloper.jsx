import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";
import { IoReorderThreeOutline } from "react-icons/io5";
import WebDevelopmentCard from "./WebDevelopmentCard";
import skills from "../../../../../../../assets/WebDeveloper/skills.png";
import requirements from "../../../../../../../assets/WebDeveloper/requirements.png";

const softSkills = [
  { name: "Project Management" },
  { name: "Interpersonal Skills" },
  { name: "Communication Skills" },
  { name: "Critical Thinking Skills" },
  { name: "Setting Up Projects" },
];

const technicalSkills = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "User Experience(UX)" },
  { name: "User Interface(UI)" },
];

const WebDeveloper = () => {
  return (
    <>
      <WebDevelopmentCard />
      <div
        id="main"
        className="pl-8 p-10 gap-y-8 gap-x-16 flex flex-col lg:flex-row justify-center items-center "
      >
        <div id="1" className=" md:w-[400px] rounded-lg  h-60 ">
          <div className="bg-white p-4 rounded-lg shadow-2xl border-cyan-500 border-2 flex justify-center items-center md:flex-row flex-col gap-8">
            <div>
              <img src={skills} className="w-24 h-24  " />
            </div>
            <div>
              <h2 className="text-base  font-extrabold text-violet-700  sm:text-xl lg:text-lg xl:text-3xl font-lora">
                Soft Skills
              </h2>
              <div className="">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center  mr-4 mb-2">
                    <p className=" text-base text-gray-600  font-lora">
                      <FaArrowAltCircleRight className="text-green-600 inline mx-2" />
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div id="2" className=" rounded-lg  md:w-[400px] h-60 ">
          <div className="bg-white p-4 rounded-lg shadow-2xl border-cyan-500 border-2 flex justify-center items-center md:flex-row flex-col">
            <div>
              <img src={requirements} className="w-24 h-24 " />
            </div>
            <div>
              <h2 className="text-base  font-extrabold text-violet-700  sm:text-xl lg:text-lg xl:text-3xl font-lora">
                Technical Skills
              </h2>
              <div className="">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="flex items-center mr-4 mb-2">
                    <p className=" text-base text-gray-600  font-lora">
                      <FaArrowAltCircleRight className="text-green-600 inline mx-2" />
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          id="3"
          className=" md:w-[400px] h-40 rounded-lg  items-center flex"
        >
          <div className=" p-4 rounded-lg  ">
            <h2 className="text-base  font-extrabold text-violet-700  sm:text-xl lg:text-lg xl:text-3xl font-lora text-center">
              Web Developer Skills
            </h2>
            <div className=" flex text-cyan-500 justify-center items-center">
              <IoRemoveOutline className="text-[40px]" />
              <IoReorderThreeOutline className="text-[40px]" />{" "}
              <IoRemoveOutline className="text-[40px]" />
            </div>
            <p className=" text-base text-gray-600  font-lora">
              Over the last decade,web design expectations have shifted
              dramatically,with many business now expecting their Web Developers
              to be mutli skilled masters
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>
    </>
  );
};

export default WebDeveloper;
