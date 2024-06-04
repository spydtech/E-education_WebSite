import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";
import { IoReorderThreeOutline } from "react-icons/io5";
import MeanStackDevelopmentCard from "./MeanStackDevelopmentCard";
import skills from "../../../../../../../assets/WebDeveloper/skills.png";
// Assests_MeanStack/WebDeveloper/skills.png";
import requirements from "../../../../../../../assets/WebDeveloper/requirements.png";

const softSkills = [
  { name: "Project Management" },
  { name: "Interpersonal Skills" },
  { name: "Communication Skills" },
  { name: "Critical Thinking Skills" },
  { name: "Setting Up Projects" },
];

const technicalSkills = [
  { name: "MongoDB" },
  { name: "Express.js" },
  { name: "Angular" },
  { name: "Node.js" },
  { name: "RESTful APIs" },
];

const MeanStackDeveloper = () => {
  return (
    <>
      <MeanStackDevelopmentCard />
      <div
        id="main"
        className="gap-10 py-20 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 p-10 justify-center items-center"
      >
        <div
          id="1"
          className="max-w-sm w-full rounded-lg h-60 relative mx-auto mb-10"
        >
          <div className="p-4 rounded-lg shadow-2xl border-orange-700 border-2 relative">
            <img src={skills} className="w-24 h-24 absolute top-4 right-4" />
            <h2 className="text-base font-extrabold text-blue-600 sm:text-xl lg:text-lg xl:text-3xl font-lora mb-4">
              Soft Skills
            </h2>
            <div>
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center mb-2">
                  <p className="text-base text-gray-600 font-lora">
                    <FaArrowAltCircleRight className="text-blue-600 inline mx-2" />
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          id="2"
          className="max-w-sm w-full rounded-lg h-60 relative mx-auto mb-10"
        >
          <div className="bg-white p-4 rounded-lg shadow-2xl border-orange-700 border-2 relative">
            <img
              src={requirements}
              className="w-24 h-24 absolute top-4 right-4"
            />
            <h2 className="text-base font-extrabold text-blue-600 sm:text-xl lg:text-lg xl:text-3xl font-lora mb-4">
              Technical Skills
            </h2>
            <div>
              {technicalSkills.map((skill, index) => (
                <div key={index} className="flex items-center mb-2">
                  <p className="text-base text-gray-600 font-lora">
                    <FaArrowAltCircleRight className="text-blue-600 inline mx-2" />
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          id="3"
          className="max-w-sm w-full h-40 rounded-lg items-center flex mx-auto mb-4"
        >
          <div className="p-4 rounded-lg text-center">
            <h2 className="text-base font-extrabold text-blue-600 sm:text-xl lg:text-lg xl:text-3xl font-lora mb-2">
              Mean Stack Developer Skills{" "}
            </h2>
            <div className="flex text-blue-600 justify-center items-center mb-4">
              <IoRemoveOutline className="text-[40px]" />
              <IoReorderThreeOutline className="text-[40px]" />
              <IoRemoveOutline className="text-[40px]" />
            </div>
            <p className="text-base text-gray-600 font-lora">
              Over the last decade, web development expectations have shifted
              dramatically, with many businesses now expecting their MEAN stack
              developers to be multi-skilled experts.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeanStackDeveloper;
