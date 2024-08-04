import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
// import { IoRemoveOutline } from "react-icons/io5";
// import { IoReorderThreeOutline } from "react-icons/io5";
import WebDevelopmentCard from "./WebDevelopmentCard";

import skillsImg from "../../../../../../../assetss/fullstackwebdev/skills.png";
import requirementsImg from "../../../../../../../assetss/fullstackwebdev/requirements.png"
const softSkills = [
  { name: "Coordination" },
  { name: "Empathy" },
  { name: "Articulation" },
  { name: "Analysis" },
  { name: "Initialization" },
];

const technicalSkills = [
  { name: "MongoDB" },
  { name: "Express.js" },
  { name: "Angular" },
  { name: "Node.js" },
  { name: "RESTful APIs" },
];

const WebDeveloper = () => {
  return (
    <>
      <WebDevelopmentCard />
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Full Stack <span className="text-[#F6AC14]">Web Development</span> Skills
      </h2>
      <p className="text-gray-600 mb-6 text-center">
        The future of learning The future of learning The future of learning...
      </p>
      <div className="flex flex-col md:flex-row justify-around">
      <div className="bg-[#0098F1] rounded-lg mb-6 md:mb-0">
    <div className="flex">
      <img src={skillsImg} alt="Soft Skills" className="mb-4 w-190 h-160" />
      <h3 className="text-3xl font-bold px-20 py-14 text-white">Soft Skills</h3>
    </div>
    <div>
      {softSkills.map((skill, index) => (
        <div key={index} className="flex justify-center items-center mb-2">
          <div className="grid">
            <p className="text-xl text-white font">
              <FaArrowAltCircleRight className="text-white hover:text-[#F6AC14] inline mx-2" />
              {skill.name}
            </p>
          </div>
        </div>
      ))}
    </div>
        </div>
        <div className="bg-[#0098F1]   rounded-lg mb-6 md:mb-0">
          <div className=" flex">
          <img src={requirementsImg} alt="Technical Skills" className="mb-4  w-190 h-160" />
          <h3 className="text-3xl font-bold px-20 py-14 text-white">Technical Skills</h3>
          </div>
          <div>
              {technicalSkills.map((skill, index) => (
                <div key={index} className="flex justify-center items-center mb-2">
                 <div className="grid">
                 <p className="text-xl text-white font">
                    <FaArrowAltCircleRight className="text-white hover:text-[#F6AC14] inline mx-2" />
                    {skill.name}
                  </p>
                 </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default WebDeveloper;
