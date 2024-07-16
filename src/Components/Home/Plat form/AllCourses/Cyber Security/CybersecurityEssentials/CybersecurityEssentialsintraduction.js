import React, { useState } from "react";

function CybersecurityEssentialsIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-[400px] flex justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-purple-600 font">
              {heading}
            </h2>
            <ul className="list-disc list-inside text-xl font text-black">
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
        className="grid grid-cols-1 w-fit md:lg:grid-cols-2 h-full bg-gradient-to-br  from-[#89fc00] to-[#12862b]"
      >
        <div
          id="div1"
          className="flex items-center justify-center xl:lg:md:w-auto"
        >
          <div
            id="headings"
            className="grid grid-cols-1 text-start px-4 font"
          >
            <div>
              <p className="text-[#7400b8] text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="md:text-5xl text-2xl font">
                So what is{" "}
                <p className="text-[#7400b8] inline ">
                  Cyber Security Essentials ?
                </p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">
                Brief about Cyber Security Essentials
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

export default CybersecurityEssentialsIntroduction;
