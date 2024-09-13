import React, { useState } from "react";

function AdvancedEthicalHackingKeyHighlights() {
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
            <li>Comprehensive modules covering all aspects of ethical hacking</li>
            <li>Certificate accredited by leading cybersecurity institutions</li>
            <li>Access to live hacking simulations and workshops</li>
            <li>15+ Case Studies and real-world projects</li>
            <li>Earn Certified Ethical Hacker (CEH) certification</li>
            <li>Extensive library of hacking tools and resources</li>
            <li>Mentor-led guidance and coaching sessions</li>
            <li>Personalized resume feedback</li>
            <li>Mock interviews conducted by industry experts</li>
            <li>Explore the latest tools and techniques in ethical hacking</li>
          </ul>
        );
      case 1:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Key Concepts</p>
            <li>Introduction to ethical hacking and penetration testing</li>
            <li>Footprinting and reconnaissance techniques</li>
            <li>Scanning networks and identifying vulnerabilities</li>
            <li>Enumeration and gaining unauthorized access</li>
            <li>Maintaining access and covering tracks</li>
            <li>Web application and network hacking</li>
            <li>Wireless network security</li>
          </ul>
        );
      case 2:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Applications</p>
            <li>Penetration Tester</li>
            <li>Security Consultant</li>
            <li>Network Security Engineer</li>
            <li>Security Analyst</li>
            <li>Information Security Manager</li>
            <li>Incident Responder</li>
            <li>Threat Hunter</li>
            <li>Vulnerability Assessor</li>
          </ul>
        );
      case 3:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Skills Developed</p>
            <li>Proficiency in various ethical hacking tools and techniques</li>
            <li>In-depth knowledge of network security and protocols</li>
            <li>Ability to identify and exploit system vulnerabilities</li>
            <li>Expertise in web application security</li>
            <li>Skills in wireless network security</li>
            <li>Incident response and forensic analysis skills</li>
            <li>Strong problem-solving and analytical abilities</li>
          </ul>
        );
      case 4:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Target Audience</p>
            <li>IT professionals seeking to enhance their security skills</li>
            <li>Individuals aspiring to become ethical hackers</li>
            <li>Network and security administrators</li>
            <li>Security enthusiasts and hobbyists</li>
            <li>Anyone interested in learning about cybersecurity</li>
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
        <div className="lg:pl-14 pl-0 -ml-10 md:ml-10 lg:-ml-0 lg:ml-10">
          <div className="pt-4">
            <p className="font-bold underline-offset-2 underline text-xl p-2 text-[#f6ac14]">
              Advanced Ethical Hacking Course Highlights
            </p>
          </div>
          <div className="w-auto h-auto xs:w-[20px] md:w-[500px] md:h-[420px] sm:w-[250px] mt-10 md:pl-16 pl-0 items-center">
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
    </div>
  );
}

export default AdvancedEthicalHackingKeyHighlights;
