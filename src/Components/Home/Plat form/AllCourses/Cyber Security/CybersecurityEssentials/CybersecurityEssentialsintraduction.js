import React, { useState } from "react";

function CybersecurityEssentialsIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-[400px] flex justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-purple-600 font-lora">
              {heading}
            </h2>
            <ul className="list-disc list-inside text-xl font-lora text-black">
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
      <div
        id="subdiv"
        className="grid grid-cols-1  md:lg:grid-cols-2 gap-x-6 h-[600px] md:mb-20  mb-16 bg-gradient-to-br from-purple-300 via-pink-500 to-red-600"
      >
        <div
          id="div1"
          className="flex items-center justify-center xl:lg:md:w-auto"
        >
          <div
            id="headings"
            className="grid grid-cols-1 text-start px-20 font-lora"
          >
            <div>
              <p className="text-white text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="text-6xl font-lora text-white">
                What is
                <span className="text-yellow-400 inline pl-2">
                  Cybersecurity?
                </span>
              </p>
            </div>
            <div>
              <p className="text-xl text-white">
                A brief overview of cybersecurity and its significance.
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

export default CybersecurityEssentialsIntroduction;