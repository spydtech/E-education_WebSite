import React from "react";
import programmer from "../../../../../../../assets/dataAnalatics/programmer.jpg";
import assistance from "../../../../../../../assets/dataAnalatics/assistance.jpg";

const SecurityTestingAbout = () => {
  const aboutInfo = [
    {
      title: "Student Support",
      description:
        "Learn about the latest techniques and get support for courses 24/7.",
      imgSrc: programmer,
      imgAlt: "security-protection",
    },
    {
      title: "Career Assistance",
      description:
        "Gain expertise in continuous network monitoring to detect anomalies and respond to incidents in real-time.",
      imgSrc: assistance,
      imgAlt: "network-monitoring",
    },
  ];

  return (
    <div className="mx-auto h-auto w-full mb-20 px-4 md:px-10">
      <div className="py-2 my-10">
        <p className="text-[#f6ac14] text-xl font-medium text-center">
          About The Security Testing Course
        </p>
        <p className="md:text-5xl text-2xl font text-center mt-4">
          Discover the
          <span className="text-[#f6ac14] my-2 block">
            Security Testing Program
          </span>
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center pb-6">
        {aboutInfo.map((item, index) => (
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

export default SecurityTestingAbout;
