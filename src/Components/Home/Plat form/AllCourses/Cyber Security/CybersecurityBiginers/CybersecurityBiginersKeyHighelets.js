import React, { useState } from "react";

function CybersecurityBiginersKeyHighlights() {
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
          <div className="bg-gray-200 shadow-2xl p-4 rounded-lg">
            <p className="text-2xl font-medium text-orange-600 py-4">
              Overview
            </p>
            <ul className="space-y-3 font-normal text-[16px] list-disc pl-5">
              <li>Comprehensive coverage of modern cybersecurity topics</li>
              <li>Hands-on labs and real-world projects</li>
              <li>Access to cutting-edge security tools and technologies</li>
              <li>Industry-recognized certification upon completion</li>
              <li>Mentorship from experienced cybersecurity professionals</li>
              <li>Personalized career guidance and support</li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="bg-gray-200 shadow-2xl p-4 rounded-lg">
            <p className="text-2xl font-medium text-orange-600 py-4">
              Key Concepts
            </p>
            <ul className="space-y-3 font-normal text-[16px] list-disc pl-5">
              <li>Fundamentals of Cybersecurity</li>
              <li>Network Security and Protocols</li>
              <li>Cryptography and Encryption</li>
              <li>Ethical Hacking and Penetration Testing</li>
              <li>Security Operations and Incident Response</li>
              <li>Risk Management and Compliance</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="bg-gray-200 shadow-2xl p-4 rounded-lg">
            <p className="text-2xl font-medium text-orange-600 py-4">
              Applications
            </p>
            <ul className="space-y-3 font-normal text-[16px] list-disc pl-5">
              <li>Information Security Analyst</li>
              <li>Penetration Tester</li>
              <li>Security Consultant</li>
              <li>Network Security Engineer</li>
              <li>Cybersecurity Architect</li>
              <li>Incident Response Specialist</li>
              <li>Risk and Compliance Analyst</li>
            </ul>
          </div>
        );
      case 3:
        return (
          <div className="bg-gray-200 shadow-2xl p-4 rounded-lg">
            <p className="text-2xl font-medium text-orange-600 py-4">
              Skills Developed
            </p>
            <ul className="space-y-3 font-normal text-[16px] list-disc pl-5">
              <li>Proficiency in network security tools and techniques</li>
              <li>Understanding of cryptographic principles and methods</li>
              <li>Expertise in ethical hacking and vulnerability assessment</li>
              <li>Incident detection and response capabilities</li>
              <li>Knowledge of regulatory compliance and risk management</li>
              <li>Hands-on experience with real-world security scenarios</li>
            </ul>
          </div>
        );
      case 4:
        return (
          <div className="bg-gray-200 shadow-2xl p-4 rounded-lg">
            <p className="text-2xl font-medium text-orange-600 py-4">
              Target Audience
            </p>
            <ul className="space-y-3 font-normal text-[16px] list-disc pl-5">
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
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="px-20  mb-16 bg-gradient-to-r from-amber-400 to-red-500">
      <div className="pt-4">
        <div className="md:lg:w-auto w-96 font-semibold text-xl p-2 text-pink-900">
          Cybersecurity Course Highlights
        </div>
        <div className="md:lg:flex pl-2 space-x-3 md:lg:w-auto lg:md:h-auto w-96 h-auto">
          <p className="text-5xl font-bold">What does this</p>
          <p className="text-5xl font-bold text-yellow-700 inline">
            Course have to offer?
          </p>
        </div>
      </div>
      <div className="justify-between grid grid-cols-1 lg:md:grid-cols-2">
        <div>
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
        <div className="md:lg:w-auto md:lg:h-auto w-[400px] h-auto pt-4 pl-4 text-xl">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default CybersecurityBiginersKeyHighlights;
