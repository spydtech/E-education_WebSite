import React, { useState } from "react";

function CybersecurityIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-[400px] flex justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-orange-600 font-lora">
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
      heading: "Introduction to Cybersecurity",
      items: [
        "Cybersecurity involves protecting computer systems, networks, and data from digital attacks, theft, and damage.",
        "Key Concepts: Explore fundamental concepts such as threat types, attack vectors, and security measures.",
      ],
    },
    {
      heading: "Basics of Cybersecurity",
      items: [
        "Understanding Threats: Learn about various types of cyber threats and their implications.",
        "Security Measures: Differentiate between preventive, detective, and corrective security controls.",
      ],
    },
    {
      heading: "Common Cybersecurity Practices",
      items: [
        "Network Security: Understand the importance of firewalls, intrusion detection systems, and secure network architecture.",
        "Encryption: Explore methods of data encryption to ensure confidentiality and integrity.",
      ],
    },
    {
      heading: "Tools and Technologies in Cybersecurity",
      items: [
        "Security Software: Overview of antivirus programs, malware scanners, and other security software.",
        "Incident Response Tools: Introduction to tools used for detecting, responding to, and recovering from security incidents.",
      ],
    },
    {
      heading: "Cybersecurity Careers and Roles",
      items: [
        "Job Roles: Learn about various roles such as Security Analyst, Penetration Tester, and Security Consultant.",
        "Skill Requirements: Understand the skills and qualifications needed for a career in cybersecurity.",
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
        className="grid grid-cols-1 w-fit md:lg:grid-cols-2 h-full bg-gradient-to-br from-blue-300 via-teal-500 to-green-600"
      >
        <div
          id="div1"
          className="flex items-center justify-center xl:lg:md:w-auto"
        >
          <div
            id="headings"
            className="grid grid-cols-1 text-start px-4 font-lora"
          >
            <div>
              <p className="text-[#7400b8] text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="md:text-5xl text-2xl font-lora">
                So what is{" "}
                <p className="text-[#7400b8] inline ">Cyber Security?</p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">
                Brief about Cyber Security
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

export default CybersecurityIntroduction;
