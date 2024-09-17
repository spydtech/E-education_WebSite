import React from "react";
import programmer from "../../../../../../../assets/dataAnalatics/programmer.jpg";
import assistance from "../../../../../../../assets/dataAnalatics/assistance.jpg";

const DBAbout = () => {
  const aboutInfo = [
    {
      title: "Expert Guidance",
      description:
        "Learn from industry experts about fundamental concepts and advanced practices in cloud computing to enhance your skillset.",
      imgSrc: programmer,
      imgAlt: "cloud-computing-essentials",
    },
    {
      title: "Career Support",
      description:
        "Receive career guidance and support to navigate opportunities in the rapidly growing field of cloud computing.",
      imgSrc: assistance,
      imgAlt: "cloud-career-assistance",
    },
  ];

  return (
    <div className="mx-auto h-auto w-full mb-20 px-4 md:px-10 bg-white">
      <div className="py-2 my-2 text-center">
        <p className="text-2xl font-bold text-[#0098f1]">
          Discover the Cloud Computing Essentials Program
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

export default DBAbout;
