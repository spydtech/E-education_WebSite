import React, { useState } from "react";

function AdvancedNetworkSecurityIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-[400px] flex justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-[#07beb8] font-lora">
              {heading}
            </h2>
            <ul className="list-disc list-inside text-xl font-lora">
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
      heading: "Advanced Threat Detection",
      items: [
        "Deep Dive into Intrusion Detection Systems (IDS) and Intrusion Prevention Systems (IPS)",
        "Behavioral Analysis for Anomaly Detection",
        "Advanced Threat Intelligence Platforms (TIPs)",
        "Cyber Threat Hunting Techniques",
      ],
    },
    {
      heading: "Network Security Architecture",
      items: [
        "Designing Secure Network Architectures",
        "Segmentation Strategies for Enhanced Security",
        "Zero Trust Network Framework",
        "Software-Defined Perimeter (SDP)",
      ],
    },
    {
      heading: "Cloud Security",
      items: [
        "Securing Cloud Infrastructures and Services",
        "Identity and Access Management (IAM) in Cloud Environments",
        "Data Encryption and Key Management in the Cloud",
        "Cloud-Native Security Solutions",
      ],
    },
    {
      heading: "Advanced Cryptography",
      items: [
        "Quantum-Safe Cryptography",
        "Homomorphic Encryption",
        "Post-Quantum Cryptography",
        "Blockchain Security",
      ],
    },
    {
      heading: "Incident Response and Forensics",
      items: [
        "Advanced Incident Detection and Response Strategies",
        "Digital Forensics Techniques",
        "Threat Intelligence Sharing and Collaboration",
        "Incident Response Automation",
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
      <div className="grid grid-cols-1 w-fit md:lg:grid-cols-2 h-full bg-gradient-to-br from-[#480ca8] to-[#350657]">
        <div className="flex items-center justify-center xl:lg:md:w-auto">
          <div className="grid grid-cols-1 text-start px-10 font-lora">
            <div>
              <p className="text-[#07beb8] text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="text-6xl font-lora">
                So what is
                <p className="text-[#07beb8] inline pl-2">
                  Advanced Network Security
                </p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">
                Brief about Advanced Network Security
              </p>
            </div>
          </div>
        </div>
        <div className="px-10">
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

export default AdvancedNetworkSecurityIntroduction;
