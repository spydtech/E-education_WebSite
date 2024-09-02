import React from "react";
import programmer from "../../../../../assets/dataAnalatics/programmer.jpg";
import assistance from "../../../../../assets/dataAnalatics/assistance.jpg";

const AdvancePhpAbout = () => {
  const phpInfo = [
    {
      title: "Student Support",
      description:
        "Learn about the latest techniques and get support for courses 24/7.",
      imgSrc: programmer,
      imgAlt: "student-support",
    },
    {
      title: "Career Assistance",
      description:
        "Gain expertise in continuous network monitoring to detect anomalies and respond to incidents in real-time.",
      imgSrc: assistance,
      imgAlt: "career-assistance",
    },
  ];

  return (
    <div className="mx-auto h-auto w-full mb-20 px-4 md:px-10 bg-white">
      <div className="my-6">
        <p className="text-2xl text-center font-bold text-[#f6ac14]">
          About Advance PHP Course
        </p>
      </div>

      <div className="mb-10">
        <p className="text-4xl text-center font-bold">
          Discover the
          <span className="text-[#f6ac14] my-2 block">Advance PHP Program</span>
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center pb-6">
        {phpInfo.map((item, index) => (
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

export default AdvancePhpAbout;
