import React, { useState } from "react";

function CybersecurityEssentialsIntroduction() {
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
      heading: "Understanding Cybersecurity",
      items: [
        "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.",
        "Importance: Learn why cybersecurity is crucial in today's digital world.",
      ],
    },
    {
      heading: "Cyber Threats Overview",
      items: [
        "Types of Threats: Malware, phishing, ransomware, and other common threats.",
        "Impact: Explore the potential consequences of cybersecurity breaches.",
      ],
    },
    {
      heading: "Cybersecurity Strategies",
      items: [
        "Prevention: Best practices to prevent cyber attacks.",
        "Detection and Response: How to identify and respond to security incidents.",
      ],
    },
    {
      heading: "Key Cybersecurity Technologies",
      items: [
        "Firewalls: Understanding how firewalls protect your network.",
        "Encryption: Learn about encryption techniques to protect data.",
      ],
    },
    {
      heading: "Building a Career in Cybersecurity",
      items: [
        "Career Paths: Different roles in the cybersecurity field.",
        "Skills and Certifications: Key skills and certifications needed to succeed.",
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
              <span className="text-[#f6ac14] inline pl-2">Cyber Security</span>
            </p>
          </div>
          <div>
            <p className="text-lg lg:text-xl text-gray-500">
              Brief about Cyber Security
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

export default CybersecurityEssentialsIntroduction;
