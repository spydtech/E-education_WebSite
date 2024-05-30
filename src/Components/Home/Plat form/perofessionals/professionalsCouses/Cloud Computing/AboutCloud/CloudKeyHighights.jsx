

import React, { useState } from "react";

function CloudKeyHighights() {
  const [selectedItem, setSelectedItem] = useState(0);

  const data = [
    { label: "Overview" },
    { label: "Key Concepts" },
    { label: "Applications" },
    { label: "Skills Developed" },
    { label: "Target Audience" },
  ];

  const handleClick = (index) => {
    setSelectedItem(index);
  };

  const renderContent = () => {
    switch (selectedItem) {
      case 0:
        return (
          <>
            <ul className="space-y-2 pt-4 font-normal text-[16px] list-disc pl-16  bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium text-blue-500 py-4">Overview</p>
              <li>Introduction to cloud computing fundamentals</li>
              <li>Benefits and advantages of cloud computing</li>
              <li>Overview of cloud service models and deployment models</li>
              <li>Real-world examples of cloud computing applications</li>
            </ul>
          </>
        );
      case 1:
        return (
          <>
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium text-blue-500 py-4">
                Key Concepts
              </p>
              <li>Infrastructure as a Service (IaaS)</li>
              <li>Platform as a Service (PaaS)</li>
              <li>Software as a Service (SaaS)</li>
              <li>Public, private, and hybrid cloud models</li>
              <li>Cloud security and compliance</li>
            </ul>
          </>
        );
      case 2:
        return (
          <>
            {" "}
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium  text-blue-500">
                Applications
              </p>
              <li>Web and mobile application development</li>
              <li>Big data analytics and processing</li>
              <li>Artificial intelligence and machine learning</li>
              <li>Internet of Things (IoT) platforms</li>
              <li>Enterprise resource planning (ERP) systems</li>
            </ul>
          </>
        );
      case 3:
        return (
          <>
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium  text-blue-500">
                Skills Developed
              </p>
              <li>Understanding of cloud computing principles and practices</li>
              <li>Proficiency in deploying and managing cloud services</li>
              <li>Ability to design scalable and resilient cloud architectures</li>
              <li>Experience with cloud-based development and deployment tools</li>
              <li>Knowledge of cloud security best practices</li>
            </ul>
          </>
        );
      case 4:
        return (
          <>
            {" "}
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium  text-blue-500">
                Target Audience
              </p>
              <li>Software developers and engineers</li>
              <li>System administrators and IT professionals</li>
              <li>Cloud architects and solution architects</li>
              <li>Enterprise decision-makers and business leaders</li>
              <li>Students and aspiring cloud professionals</li>
            </ul>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div
        id="main"
        className=" md:lg:xl:px-20  bg-gradient-to-br  from-[#cca000] to-[#f5cc00]"
      >
        <div id="subdiv1" className="pt-4 font-lora">
          <div id="h1" className="">
            <p className="md:lg:w-auto w-96 font-semibold text-xl p-2 text-[#00509d]">
              Course Highlights
            </p>
          </div>
          <div
            id="h2"
            className="md:lg:flex pl-2 space-x-3 md:lg:w-auto lg:md:h-auto w-96  h-auto"
          >
            <p className="text-5xl font-bold ">What does this</p>
            <p className="text-5xl font-bold text-[#00509d] inline">
              Course have to offer?
            </p>
          </div>
        </div>
        <div
          id="subdiv2"
          className="justify-between grid  grid-cols-1 lg:md:grid-cols-2"
        >
          {/* content start*/}
          <div id="content1" className="">
            {data.map((item, index) => (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`hover:text-blue-500 p-5 text-start hover:cursor-pointer text-xl font-medium my-6 mx-4 h-16 w-80 lg:md:h-16 lg:md:w-[400px] flex items-center border-2 border-opacity-15 rounded-md overflow-hidden  transition-transform duration-300 transform hover:scale-105 ${
                  selectedItem === index
                    ? "bg-[#00509d]  text-white hover:text-white border-none"
                    : ""
                }`}
              >
                <p>{item.label}</p>
              </div>
            ))}
          </div>
          <div
            id="content2"
            className="md:lg:w-auto md:lg:h-auto md:lg:xl:w-[400px] h-auto pt-4 md:lg:xl:pl-4 text-xl"
          >
            {renderContent()}
          </div>
          {/* content end */}
        </div>
      </div>
    </>
  );
}

export default CloudKeyHighights;
