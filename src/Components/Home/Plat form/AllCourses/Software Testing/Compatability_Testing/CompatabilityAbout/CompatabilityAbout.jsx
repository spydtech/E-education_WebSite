import React from "react";
// import programmer from "../../../../../../../assets/dataAnalatics/programmer.jpg";
// import assistance from "../../../../../../../assets/dataAnalatics/assistance.jpg";
import career from '../../../../../../../assetss/career.png'
import student from '../../../../../../../assetss/student.png'

const CompatabilityAbout = () => {
  const compatabilityInfo = [
    {
      title: "Student Support",
      description:
        "Learn about the latest compatibility testing techniques and tools to ensure your applications are robust and reliable across various environments.",
      imgSrc: student,
      imgAlt: "student-support",
    },
    {
      title: "Career Assistance",
      description:
        "Gain expertise in various compatibility testing methodologies and receive support to advance your career in this specialized field.",
      imgSrc: career,
      imgAlt: "career-assistance",
    },
  ];

  return (
    <div className="px-3 text-center">
      <div className="">
        <p className="md:text-2xl font-bold text-[#0098F1]">
          Discover The Compatibility Testing Program
        </p>
      </div>

      <div className="md:flex justify-around ">
        {compatabilityInfo.map((item, index) => (
          <div
            key={index}
            className="md:w-2/5 md:h-96 bg-white rounded-lg shadow-lg p-3 my-4"
          >
            <img
              className=" md:w-full md:h-64 rounded-md"
              src={item.imgSrc}
              alt={item.imgAlt}
            />
            <div className="my-3">
              <h2 className="md:text-xl font-bold">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompatabilityAbout;
