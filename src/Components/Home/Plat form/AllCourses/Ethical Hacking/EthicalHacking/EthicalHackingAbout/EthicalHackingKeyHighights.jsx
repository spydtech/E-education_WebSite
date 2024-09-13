import React, { useState } from "react";

function EthicalHackingKeyHighlights() {
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
          <ul className="space-y-2 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Overview</p>
            <li>Introduction to Ethical Hacking</li>
            <li>Advanced hacking techniques and methodologies</li>
            <li>Real-world case studies and hands-on labs</li>
            <li>Access to industry-leading tools and resources</li>
            <li>Expert-led live sessions and Q&A</li>
            <li>Certification preparation and guidance</li>
            <li>Networking opportunities with professionals</li>
            <li>Personalized career advice and mentorship</li>
            <li>Practical assignments and projects</li>
          </ul>
        );
      case 1:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Key Concepts</p>
            <li>Ethical hacking principles and techniques</li>
            <li>Network security and penetration testing</li>
            <li>Vulnerability assessment and management</li>
            <li>Cryptography and encryption</li>
            <li>Malware analysis and mitigation</li>
            <li>Incident response and handling</li>
            <li>Ethical and legal considerations</li>
          </ul>
        );
      case 2:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Applications</p>
            <li>Ethical Hacker/Consultant</li>
            <li>Security Analyst</li>
            <li>Penetration Tester</li>
            <li>Network Security Engineer</li>
            <li>Information Security Manager</li>
            <li>Cybersecurity Specialist</li>
            <li>Incident Responder</li>
          </ul>
        );
      case 3:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Skills Developed</p>
            <li>Advanced ethical hacking techniques and tools</li>
            <li>In-depth understanding of network security</li>
            <li>Ability to conduct comprehensive vulnerability assessments</li>
            <li>Proficiency in cryptographic methods and security protocols</li>
            <li>Skills in malware analysis and incident response</li>
            <li>Knowledge of legal and ethical hacking standards</li>
            <li>Preparation for industry-recognized certifications</li>
          </ul>
        );
      case 4:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Target Audience</p>
            <li>IT professionals looking to transition to cybersecurity</li>
            <li>Students and graduates in computer science</li>
            <li>Network and system administrators</li>
            <li>Security enthusiasts and aspiring ethical hackers</li>
            <li>Individuals aiming for cybersecurity certifications</li>
            <li>Business owners interested in protecting their assets</li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="px-20 mb-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start justify-center">
        <div className="w-auto h-auto md:w-[500px] md:h-[420px] mt-10 md:pl-10 pl-0 text-xl">
          {renderContent()}
        </div>
        <div className="md:pl-20 pl-0 -ml-10 md:ml-10 lg:-ml-0 lg:ml-10">
          <div className="pt-4">
            <p className="font-bold underline-offset-2 underline text-xl p-2 text-[#f6ac14]">
              E-Education Course Highlights
            </p>
          </div>
          {data.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`p-5 text-center hover:cursor-pointer text-xl font-medium my-6 mx-4 h-16 w-[210px] flex items-center border-2 border-opacity-15 rounded-md overflow-hidden transition-transform duration-300 transform hover:scale-105 ${
                selectedItem === index
                  ? "bg-[#0098f1] text-white border-none"
                  : ""
              }`}
            >
              <p className="text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EthicalHackingKeyHighlights;
