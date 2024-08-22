import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import JavascriptDevelopmentCard from "./JavascriptDevelopmentCard";
// import skills from "../Assests_MeanStack/WebDeveloper/skills.png";
import skills from "../../../../../../../../assetss/fullstackwebdev/skills.png";
import requirements from "../../../../../../../../assetss/fullstackwebdev/requirements.png";

const softSkills = [
  { name: "Coordination" },
  { name: "Empathy" },
  { name: "Articulation" },
  { name: "Analysis" },
  { name: "Initialization" },
];

const technicalSkills = [
  { name: "React" },
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "RESTful APIs" },
  { name: "JavaScript " },
];

const JavascriptDeveloperSkills = () => {
  return (
    <>
      <JavascriptDevelopmentCard />

      <div className="container mx-auto ">
        <h2 className=" font-bold text-gray-900  mb-4 sm:text-xl text-xl md:text-3xl lg:text-4xl text-center">
          Full Stack <span className="text-[#F6AC14]">Javascript Development</span>{" "}
          Skills
        </h2>
        <div className="flex flex-col lg:flex-row  md:justify-center gap-8">
          <div className="bg-[#0098F1] rounded-lg lg:xl:w-[480px] lg:xl:h-80 mb-6 md:mb-0  flex flex-col lg:items-start lg:flex-row md:items-center ">
            <img
              src={skills}
              alt="Soft Skills"
              className="w-full h-auto mb-4 md:mb-0 md:w-48 md:h-44"
            />
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold text-white px-10 pt-6 mb-4">
                Soft Skills
              </h3>
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center mb-2">
                  <FaArrowAltCircleRight className="text-white hover:text-[#F6AC14] inline mx-2" />
                  <p className="text-xl text-white">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#0098F1] rounded-lg lg:xl:w-[480px] lg:xl:h-80 mb-6 md:mb-0 flex flex-col lg:items-start lg:flex-row md:items-center ">
            <img
              src={requirements}
              alt="STechnical Skills"
              className="w-full h-auto mb-4 md:mb-0 md:w-48 md:h-44"
            />
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold text-white px-6 pt-6 mb-4">
                Technical Skills
              </h3>
              {technicalSkills.map((skill, index) => (
                <div key={index} className="flex items-center mb-2">
                  <FaArrowAltCircleRight className="text-white hover:text-[#F6AC14] inline mx-2" />
                  <p className="text-xl text-white">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JavascriptDeveloperSkills;
