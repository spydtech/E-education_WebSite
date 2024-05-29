import React, { useState } from "react";

function CybersecurityKeyHighlights() {
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
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl md:my-16">
              <p className="text-2xl font-medium text-orange-600 py-4">
                Overview
              </p>
              <li>Comprehensive coverage of modern cybersecurity topics</li>
              <li>Hands-on labs and real-world projects</li>
              <li>Access to cutting-edge security tools and technologies</li>
              <li>Industry-recognized certification upon completion</li>
              <li>Mentorship from experienced cybersecurity professionals</li>
              <li>Personalized career guidance and support</li>
            </ul>
          </>
        );
      case 1:
        return (
          <>
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium text-orange-600 py-4">
                Key Concepts
              </p>
              <li>Fundamentals of Cybersecurity</li>
              <li>Network Security and Protocols</li>
              <li>Cryptography and Encryption</li>
              <li>Ethical Hacking and Penetration Testing</li>
              <li>Security Operations and Incident Response</li>
              <li>Risk Management and Compliance</li>
            </ul>
          </>
        );
      case 2:
        return (
          <>
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium text-orange-600">
                Applications
              </p>
              <li>Information Security Analyst</li>
              <li>Penetration Tester</li>
              <li>Security Consultant</li>
              <li>Network Security Engineer</li>
              <li>Cybersecurity Architect</li>
              <li>Incident Response Specialist</li>
              <li>Risk and Compliance Analyst</li>
            </ul>
          </>
        );
      case 3:
        return (
          <>
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium text-orange-600">
                Skills Developed
              </p>
              <li>Proficiency in network security tools and techniques</li>
              <li>Understanding of cryptographic principles and methods</li>
              <li>Expertise in ethical hacking and vulnerability assessment</li>
              <li>Incident detection and response capabilities</li>
              <li>Knowledge of regulatory compliance and risk management</li>
              <li>Hands-on experience with real-world security scenarios</li>
            </ul>
          </>
        );
      case 4:
        return (
          <>
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium text-orange-600">
                Target Audience
              </p>
              <li>IT professionals seeking to specialize in cybersecurity</li>
              <li>
                Individuals looking to transition into a cybersecurity career
              </li>
              <li>Security analysts aiming to advance their skills</li>
              <li>
                Anyone interested in protecting digital assets and
                infrastructure
              </li>
              <li>Students pursuing a career in information security</li>
              <li>
                Professionals needing certification to advance their careers
              </li>
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
        className="px-20 bg-gradient-to-br from-blue-300 via-teal-500 to-green-600"
      >
        <div id="subdiv1" className="pt-4">
          <div id="h1">
            <p className="md:lg:w-auto w-96 font-semibold text-xl p-2 text-pink-900">
              Cybersecurity Course Highlights
            </p>
          </div>
          <div
            id="h2"
            className="md:lg:flex pl-2 space-x-3 md:lg:w-auto lg:md:h-auto w-96 h-auto"
          >
            <p className="text-5xl font-bold">What does this</p>
            <p className="text-5xl font-bold text-yellow-700 inline">
              Course have to offer?
            </p>
          </div>
        </div>
        <div
          id="subdiv2"
          className="justify-between grid grid-cols-1 lg:md:grid-cols-2"
        >
          {/* content start */}
          <div id="content1">
            {data.map((item, index) => (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`hover:text-violet-700 p-5 text-start hover:cursor-pointer text-xl font-medium my-6 h-16 w-96 lg:md:h-16 lg:md:w-[400px] flex items-center border-2 border-opacity-15 rounded-md overflow-hidden shadow-lg shadow-gray-400 transition-transform duration-300 transform hover:scale-105 ${
                  selectedItem === index
                    ? "bg-cyan-600 text-white hover:text-white border-none"
                    : ""
                }`}
              >
                <p>{item.label}</p>
              </div>
            ))}
          </div>
          <div
            id="content2"
            className="md:lg:w-auto md:lg:h-auto w-[400px] h-auto pt-4 pl-4 text-xl"
          >
            {renderContent()}
          </div>
          {/* content end */}
        </div>
      </div>
    </>
  );
}

export default CybersecurityKeyHighlights;
