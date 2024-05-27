import React from "react";
import amazon from "../../../../../../assets/dataAnalatics/amazon.png";
import google from "../../../../../../assets/dataAnalatics/google.png";
import microsoft from "../../../../../../assets/dataAnalatics/microsoft.png";
// import flipkart from "../../../../../assets/dataAnalatics/flipkart.png";
// import spotify from "../../../../../assets/dataAnalatics/spotify.png";
// import uber from "../../../../../assets/dataAnalatics/uber.png";

function NetworkSecuritySyallabus() {
  const data = [
    {
      heading: "Introduction to Network Security",
      subheading: "Topics (16)",
      items: [
        "Overview of Network Security",
        "Core Security Principles",
        "Types of Network Threats",
        "Vulnerabilities and Exploits",
        "Network Security Protocols",
        "Encryption and Decryption",
        "Public Key Infrastructure (PKI)",
        "Virtual Private Networks (VPNs)",
        "Firewalls and Intrusion Detection Systems (IDS)",
        "Security Information and Event Management (SIEM)",
        "Network Access Control (NAC)",
        "Wireless Network Security",
        "Incident Response and Management",
        "Penetration Testing and Ethical Hacking",
        "Compliance and Regulatory Requirements",
        "Best Practices in Network Security",
      ],
    },
  ];

  return (
    <>
      <div
        id="subdiv"
        className="grid grid-cols-1 md:lg:grid-cols-2 gap-x-6 md:my-20 bg-gradient-to-br from-[#0077b6] to-[#03045e]"
      >
        <div
          id="div1"
          className="flex items-center justify-center xl:lg:md:w-auto"
        >
          <div id="headings" className="grid grid-cols-1 text-start px-20">
            <div>
              <p className="text-[#f9ac13] text-xl font-medium">Syllabus</p>
            </div>
            <div className="py-5">
              <p className="text-6xl font-lora">
                Discover What You
                <p className="text-[#f9ac13] inline pl-2">Will Learn</p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-300">
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
                <h2 className="text-4xl font-semibold mb-2 text-[#f9ac13]">
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

export default NetworkSecuritySyallabus;
