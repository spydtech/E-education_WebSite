import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";
import { IoReorderThreeOutline } from "react-icons/io5";
import FullStackPythonDevelopmentCard from "./FullStackPythonDevelopmentCard";
import skills from "../../../../../../../assets/WebDeveloper/skills.png";
import requirements from "../../../../../../../assets/WebDeveloper/requirements.png";

const softSkills = [
  { name: "Coordination" },
  { name: "Empathy" },
  { name: "Articulation" },
  { name: "Analysis" },
  { name: "Initialization" },
];

const technicalSkills = [
  { name: "Python" },
  { name: "Django" },
  { name: "Flask" },
  { name: "RESTful APIs" },
  { name: "Database Management" },
];

const FullStackPythonDeveloper = () => {
  return (
    <>
      <FullStackPythonDevelopmentCard />
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
            <h2 className="text-base font-extrabold text-blue-600 sm:text-xl lg:text-lg xl:text-3xl font mb-4">
              Soft Skills
            </h2>
            <div>
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center mb-2">
                  <p className="text-base text-gray-600 font">
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
            <h2 className="text-base font-extrabold text-blue-600 sm:text-xl lg:text-lg xl:text-3xl font mb-4">
              Technical Skills
            </h2>
            <div>
              {technicalSkills.map((skill, index) => (
                <div key={index} className="flex items-center mb-2">
                  <p className="text-base text-gray-600 font">
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
          <div className="p-4 rounded-lg ">
            <h2 className="text-base font-extrabold text-blue-600 sm:text-xl lg:text-lg xl:text-3xl font mb-2">
              Full Stack Python Developer Skills{" "}
            </h2>
            <div className="flex text-blue-600 justify-center items-center mb-4">
              <IoRemoveOutline className="text-[40px]" />
              <IoReorderThreeOutline className="text-[40px]" />
              <IoRemoveOutline className="text-[40px]" />
            </div>
            <p className="text-base text-gray-600 font">
              Full Stack Python Developers are expected to possess a diverse set
              of skills, from back-end programming to front-end development,
              enabling them to handle various aspects of modern web
              applications.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullStackPythonDeveloper;
