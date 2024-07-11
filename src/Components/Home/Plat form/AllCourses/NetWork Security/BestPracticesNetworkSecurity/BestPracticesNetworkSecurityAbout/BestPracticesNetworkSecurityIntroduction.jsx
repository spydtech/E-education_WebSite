import React, { useState } from "react";

function BestPracticesNetworkSecurityIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-[400px] flex justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-[#ec3400] font">
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
        "Network Security involves policies and practices to prevent and monitor unauthorized access, misuse, modification, or denial of a computer network and network-accessible resources.",
        "Key Concepts: Understand the importance of protecting data integrity, confidentiality, and availability.",
      ],
    },
    {
      heading: "Fundamentals of Network Security",
      items: [
        "Understanding Threats: Learn about various types of network security threats like malware, phishing, and DDoS attacks.",
        "Security Mechanisms: Get introduced to firewalls, encryption, and intrusion detection systems.",
      ],
    },
    {
      heading: "Network Security Protocols",
      items: [
        "SSL/TLS: Explore Secure Socket Layer and Transport Layer Security protocols.",
        "IPSec: Learn about Internet Protocol Security for secure IP communications.",
      ],
    },
    {
      heading: "Implementing Network Security",
      items: [
        "Network Segmentation: Understand the importance of dividing a network into segments to improve security.",
        "Access Control: Learn about managing user access through authentication and authorization.",
      ],
    },
    {
      heading: "Advanced Network Security Practices",
      items: [
        "Zero Trust Architecture: Gain insights into a security model that assumes no one is trustworthy by default.",
        "Threat Intelligence: Understand the use of data to identify, detect, and respond to threats.",
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
        className="grid grid-cols-1 w-fit md:lg:grid-cols-2 h-full bg-gradient-to-br from-[#aad922] to-[#ffef19]"
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
              <p className="text-[#ec3400] text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="text-6xl font">
                So what is
                <p className="text-[#ec3400] inline pl-2">Network Security</p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">
                Brief about Network Security
              </p>
            </div>
          </div>
        </div>
        <div id="div2" className="px-10">
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
                  className="hover:text-pink-700 text-black font-bold py-2 px-4 rounded"
                >
                  Previous
                </button>
                <div>{`Page ${currentSlide + 1}/${slidesData.length}`}</div>
                <button
                  onClick={goToNextSlide}
                  className="hover:text-pink-700 text-black font-bold py-2 px-4 rounded"
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

export default BestPracticesNetworkSecurityIntroduction;
