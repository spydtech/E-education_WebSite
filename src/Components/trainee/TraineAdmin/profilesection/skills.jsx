import React from "react";

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 80 },
  { name: "CSS", level: 75 },
  { name: "Node.js", level: 70 },
];

const Skills = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-full md:w-[500px] lg:w-[600px] xl:w-[700px] mx-auto mt-8">
      <h3 className="text-black font pl-2 text-xl pb-2 font-semibold">
        Skills
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <div key={skill.name} className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-800 font-semibold">{skill.name}</span>
              <span className="text-gray-600">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;