import React, { useState } from "react";

function BestPracticesNetworkSecurityIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const Slide = ({ heading, items }) => {
    return (
     
    <div className="w-full flex-shrink-0 px-4 py-8">
    <div className="h-[400px] flex justify-center">
      <div>
        <h2 className="text-3xl font-medium mb-4 text-white font">
          {heading}
        </h2>
        <ul className="list-disc list-inside text-xl text-opacity-70 font text-white">
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
     <div className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[468px] bg-white mb-20">
      <div className="flex items-center justify-center lg:pr-10">
        <div className="text-start px-4 lg:px-10">
          <div>
            <p className="text-[#f6ac14] underline-offset-2 underline text-2xl lg:text-[24px] font-bold">
              Introduction
            </p>
          </div>
          <div className="py-5">
            <p className="text-xl lg:text-5xl font">
              So what is
              <span className="text-[#f6ac14] inline pl-2">Network Security</span>
            </p>
          </div>
          <div>
            <p className="text-lg lg:text-xl text-gray-500">
              Brief about Network Security
            </p>
          </div>
        </div>
      </div>
      <div className="h-auto lg:h-[468px] flex justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 lg:mt-0">
          <div className="bg-[#0098f1] w-full lg:w-[550px] h-auto lg:h-[420px] p-5 mt-10 mb-2 shadow-xl sm:rounded-lg">

             <div className="relative w-full">
              <div className="flex text-white text-opacity-80 ">
                <Slide
                  heading={slidesData[currentSlide].heading}
                  items={slidesData[currentSlide].items}
                />
              </div>
            </div>
          </div>
          <div className=" lg:w-[563px] xl:w-[563px]  ">
          <div className="flex justify-between mt-4 lg:mt-0">
            <button
              onClick={goToPreviousSlide}
              className="hover:text-[#F6AC14]  text-black font-bold    rounded"
            >
              Previous
            </button>
            <div className="pt-2 pr-2">{`Page ${currentSlide + 1}/${slidesData.length}`}</div>
            <button
              onClick={goToNextSlide}
              className="hover:text-[#F6AC14] text-black font-bold  py-2 px-4 rounded"
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
