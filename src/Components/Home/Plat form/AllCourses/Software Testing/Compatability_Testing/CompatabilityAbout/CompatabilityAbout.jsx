import React from "react";
import programmer from "../../../../../../../assets/dataAnalatics/programmer.jpg";
import assistance from "../../../../../../../assets/dataAnalatics/assistance.jpg";

const CompatabilityAbout = () => {
  const compatabilityInfo = [
    {
      title: "Student Support",
      description:
        "Learn about the latest compatibility testing techniques and tools to ensure your applications are robust and reliable across various environments.",
      imgSrc: programmer,
      imgAlt: "student-support",
    },
    {
      title: "Career Assistance",
      description:
        "Gain expertise in various compatibility testing methodologies and receive support to advance your career in this specialized field.",
      imgSrc: assistance,
      imgAlt: "career-assistance",
    },
  ];

  return (
    <div className="mx-auto h-auto w-full mb-20 px-4 md:px-10 bg-white">
      <div className="py-2 my-10">
        <p className="text-2xl text-center font-bold text-[#f6ac14]">
          Discover the Compatibility Testing Program
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center pb-6">
        {compatabilityInfo.map((item, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white h-[400px] rounded-lg shadow-lg overflow-hidden">
              <img
                className="w-full h-52 object-cover object-center"
                src={item.imgSrc}
                alt={item.imgAlt}
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompatabilityAbout;
