import React, { useState } from "react";

function SecurityTestingIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-[400px] flex justify-center">
          <div>
            <h2 className="text-2xl font-medium mb-4 text-[#31cb00] font-lora">
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
      heading: "Introduction to Security Testing",
      items: [
        "Security testing ensures that systems and applications are free from vulnerabilities that could be exploited by attackers.",
        "Key Concepts: Understand the importance of security testing in protecting data and ensuring system integrity.",
      ],
    },
    {
      heading: "Types of Security Testing",
      items: [
        "Vulnerability Scanning: Identifying security weaknesses in systems.",
        "Penetration Testing: Simulating attacks to find exploitable vulnerabilities.",
      ],
    },
    {
      heading: "Common Security Testing Tools",
      items: [
        "OWASP ZAP: An open-source tool for finding security vulnerabilities.",
        "Burp Suite: A comprehensive solution for web application security testing.",
      ],
    },
    {
      heading: "Security Testing Metrics",
      items: [
        "Vulnerability Detection Rate: The percentage of vulnerabilities identified.",
        "False Positive Rate: The rate of non-vulnerabilities reported as vulnerabilities.",
      ],
    },
    {
      heading: "Best Practices for Security Testing",
      items: [
        "Test Continuously: Integrate security testing into the development lifecycle.",
        "Comprehensive Coverage: Ensure all aspects of the system are tested, including APIs, databases, and third-party components.",
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
        className="grid grid-cols-1 w-fit md:lg:grid-cols-2 h-full bg-gradient-to-br from-[#560bad] to-[#3a0ca3]"
      >
        <div
          id="div1"
          className="flex items-center justify-center xl:lg:md:w-auto"
        >
          <div
            id="headings"
            className="grid grid-cols-1 text-start font-lora"
          >
            <div>
              <p className="text-[#31cb00] text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="md:text-5xl text-2xl font-lora">
                So what is
                <p className="text-[#31cb00] inline pl-2">Security Testing?</p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">
                Brief about Security Testing
              </p>
            </div>
          </div>
        </div>
        <div id="div2" className="">
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

export default SecurityTestingIntroduction;
