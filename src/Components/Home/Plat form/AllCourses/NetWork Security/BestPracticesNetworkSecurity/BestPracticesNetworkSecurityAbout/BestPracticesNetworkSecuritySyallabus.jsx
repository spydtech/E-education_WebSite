import React from "react";


function BestPracticesNetworkSecuritySyllabus() {
  const data = [
    {
      heading: "Network Security Best Practices",
      subheading: "Topics (16)",
      items: [
        "Introduction to Network Security",
        "Types of Network Threats",
        "Firewall and VPN Technologies",
        "Intrusion Detection and Prevention Systems",
        "Encryption and Secure Communications",
        "Access Control and Authentication",
        "Wireless Network Security",
        "Network Security Protocols (SSL/TLS, IPSec)",
        "Network Segmentation and Isolation",
        "Security Information and Event Management (SIEM)",
        "Incident Response and Management",
        "Security Policies and Procedures",
        "Threat Intelligence and Analysis",
        "Zero Trust Architecture",
        "Cloud Network Security",
        "Future Trends in Network Security",
      ],
    },
  ];

  return (
    <>
      <div
        id="subdiv"
        className="grid grid-cols-1 md:lg:grid-cols-2 gap-x-6  bg-gradient-to-br from-[#aad922] to-[#ffef19]"
      >
        <div
          id="div1"
          className="flex items-center justify-center xl:lg:md:w-auto"
        >
          <div id="headings" className="grid grid-cols-1 text-start px-20">
            <div>
              <p className="text-[#ec3400] text-xl font-medium">Syllabus</p>
            </div>
            <div className="py-5">
              <p className="text-6xl font-lora">
                Discover What You
                <p className="text-[#ec3400] inline pl-2">Will Learn</p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">
                Top-notch and up-to-date curriculum taught by renowned
                professors and industry experts using videos, case studies,
                hands-on projects, and live sessions.
              </p>
            </div>
          </div>
        </div>
        <div
          id="div2"
          className="space-y-5 flex justify-center px-10 p-4 my-2 mx-2 mb-2 border-2 border-opacity-15 rounded overflow-hidden bg-gray-200 shadow-2xl"
        >
          <div className="container mx-auto">
            {data.map((category, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-4xl font-semibold mb-2 text-[#ec3400]">
                  {category.heading}
                </h2>
                <h3 className="text-2xl font-medium mb-2">
                  {category.subheading}
                </h3>
                <ul className="list-disc ml-6 text-[16px]">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BestPracticesNetworkSecuritySyllabus;
