import React, { useState } from "react";

function SecurityTestingIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-auto flex justify-center">
          <div>
            <h2 className="text-2xl lg:text-3xl font-medium mb-4 text-white">
              {heading}
            </h2>
            <ul className="list-disc list-inside text-lg lg:text-xl">
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
              <span className="text-[#f6ac14] inline pl-2">Security Testing</span>
            </p>
          </div>
          <div>
            <p className="text-lg lg:text-xl text-gray-500">
              Brief about Security Testing
            </p>
          </div>
        </div>
      </div>
      <div className="h-auto lg:h-[468px] flex justify-center ml-10">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mt-8 lg:mt-0">
          <div className="bg-[#0098f1] w-full lg:w-[550px] h-auto lg:h-[420px] p-5 mt-10 mb-2 shadow-xl sm:rounded-lg">
            <div className="relative w-full overflow-hidden">
              <div className="flex  text-white">
                <Slide
                  heading={slidesData[currentSlide].heading}
                  items={slidesData[currentSlide].items}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4 lg:mt-0">
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
  );
}

export default SecurityTestingIntroduction;
