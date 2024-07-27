import React, { useState } from "react";

function CertifiedEthicalHackingKeyHighlights() {
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
              <li>
                Comprehensive modules covering all aspects of ethical hacking
              </li>
              <li>
                Certificate accredited by leading cybersecurity institutions
              </li>
              <li>Access to live hacking simulations and workshops</li>
              <li>15+ Case Studies and real-world projects</li>
              <li>Earn Certified Ethical Hacker (CEH) certification</li>
              <li>Extensive library of hacking tools and resources</li>
              <li>Mentor-led guidance and coaching sessions</li>
              <li>Personalized resume feedback</li>
              <li>Mock interviews conducted by industry experts</li>
              <li>
                Explore the latest tools and techniques in ethical hacking
              </li>
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
              <li>Introduction to ethical hacking and penetration testing</li>
              <li>Footprinting and reconnaissance techniques</li>
              <li>Scanning networks and identifying vulnerabilities</li>
              <li>Enumeration and gaining unauthorized access</li>
              <li>Maintaining access and covering tracks</li>
              <li>Web application and network hacking</li>
              <li>Wireless network security</li>
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
              <li>Penetration Tester</li>
              <li>Security Consultant</li>
              <li>Network Security Engineer</li>
              <li>Security Analyst</li>
              <li>Information Security Manager</li>
              <li>Incident Responder</li>
              <li>Threat Hunter</li>
              <li>Vulnerability Assessor</li>
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
              <li>
                Proficiency in various ethical hacking tools and techniques
              </li>
              <li>In-depth knowledge of network security and protocols</li>
              <li>Ability to identify and exploit system vulnerabilities</li>
              <li>Expertise in web application security</li>
              <li>Skills in wireless network security</li>
              <li>Incident response and forensic analysis skills</li>
              <li>Strong problem-solving and analytical abilities</li>
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
              <li>IT professionals seeking to enhance their security skills</li>
              <li>Individuals aspiring to become ethical hackers</li>
              <li>Network and security administrators</li>
              <li>Security enthusiasts and hobbyists</li>
              <li>Anyone interested in learning about cybersecurity</li>
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
        className="md:lg:xl:px-20 bg-gradient-to-br from-yellow-300 via-orange-500 to-red-600"
      >
        <div id="subdiv1" className="pt-4">
          <div id="h1" className="">
            <p className="md:lg:w-auto w-96 font-semibold text-xl p-2 text-pink-900">
              Ethical Hacking Course Highlights
            </p>
          </div>
          <div
            id="h2"
            className="md:lg:flex pl-2 space-x-3 md:lg:w-auto lg:md:h-auto w-96 h-auto"
          >
            <p className="md:text-5xl text-2xl font-bold ">What does this</p>
            <p className="md:text-5xl text-2xl font-bold text-yellow-700 inline">
              Course have to offer?
            </p>
          </div>
        </div>
        <div
          id="subdiv2"
          className="justify-between grid grid-cols-1 lg:md:grid-cols-2"
        >
          {/* content start */}
          <div id="content1" className="">
            {data.map((item, index) => (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`hover:text-violet-700 p-5 text-start hover:cursor-pointer text-xl font-medium my-6  h-16 w-[300px] lg:md:h-16 lg:md:w-[400px] flex items-center border-2 border-opacity-15 rounded-md overflow-hidden shadow-lg shadow-gray-400 transition-transform duration-300 transform md:hover:scale-105 hover:scale-100 ${
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
            className="md:lg:w-auto w-[300px] md:lg:h-auto md:lg:xl:w-[400px] h-auto pt-4 md:lg:xl:pl-4 text-xl"
          >
            {renderContent()}
          </div>
          {/* content end */}
        </div>
      </div>
    </>
  );
}

export default CertifiedEthicalHackingKeyHighlights;
