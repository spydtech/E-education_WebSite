import React, { useState } from "react";
// FundamentalsOfNetworkSecurityIntroduction
function NetworkSecurityIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-[400px] flex justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-[#f9ac13] font">
              {heading}
            </h2>
            <ul className="list-disc list-inside text-xl font">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const slidesData = [
    {
      heading: "Introduction to Network Security",
      items: [
        "Network security involves strategies and practices designed to protect the integrity, confidentiality, and accessibility of computer networks and data.",
        "Key Concepts: Understand the importance of securing network infrastructure against cyber threats.",
      ],
    },
    {
      heading: "Basics of Network Security",
      items: [
        "Security Principles: Learn about core principles such as confidentiality, integrity, and availability.",
        "Threats and Vulnerabilities: Understand different types of network threats and vulnerabilities.",
      ],
    },
    {
      heading: "Common Network Security Tools",
      items: [
        "Firewalls: Explore the role of firewalls in controlling network traffic.",
        "Intrusion Detection Systems (IDS): Learn about IDS and their importance in detecting suspicious activities.",
      ],
    },
    {
      heading: "Network Security Protocols",
      items: [
        "Encryption: Understand how encryption protects data in transit and at rest.",
        "VPNs: Learn about Virtual Private Networks (VPNs) and their role in secure communications.",
      ],
    },
    {
      heading: "Network Security Best Practices",
      items: [
        "Access Control: Implement robust access control measures to protect sensitive information.",
        "Incident Response: Develop effective incident response strategies to handle security breaches.",
      ],
    },
  ];

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slidesData.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <>
      <div
        id="subdiv"
        className="grid grid-cols-1 w-fit md:lg:grid-cols-2 h-full  bg-gradient-to-br from-[#0077b6] to-[#03045e]"
      >
        <div
          id="div1"
          className="flex items-center justify-center xl:lg:md:w-auto"
        >
          <div
            id="headings"
            className="grid grid-cols-1 text-start px-10 font"
          >
            <div>
              <p className="text-[#f9ac13] text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="md:text-5xl text:2xl font">
                So what is
                <p className="text-[#f9ac13] inline pl-2">Network Security?</p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">
                Brief about Network Security
              </p>
            </div>
          </div>
        </div>
        <div id="div2" className="md:px-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            <div className="bg-white p-5 mb-2 overflow-hidden shadow-xl sm:rounded-lg">
              <div className="relative w-full overflow-hidden">
                <div className="flex">
                  <Slide
                    heading={slidesData[currentSlide].heading}
                    items={slidesData[currentSlide].items}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={goToPreviousSlide}
                  className="hover:text-yellow-600 text-black font-bold py-2 px-4 rounded"
                >
                  Previous
                </button>
                <div>{`Page ${currentSlide + 1}/${slidesData.length}`}</div>
                <button
                  onClick={goToNextSlide}
                  className="hover:text-yellow-600 text-black font-bold py-2 px-4 rounded"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NetworkSecurityIntroduction;
