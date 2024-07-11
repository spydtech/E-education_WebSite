import React, { useState } from "react";

function AcceptanceTestingIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-[400px] flex justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-[#31cb00] font">
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
      heading: "Introduction to Acceptance Testing",
      items: [
        "Acceptance testing ensures that systems and applications meet the specified requirements and are acceptable for delivery.",
        "Key Concepts: Understand the importance of acceptance testing in verifying that the system meets business needs and requirements.",
      ],
    },
    {
      heading: "Types of Acceptance Testing",
      items: [
        "User Acceptance Testing: Validating that the system meets the needs of the users.",
        "Operational Acceptance Testing: Ensuring the system is ready for operational use.",
      ],
    },
    {
      heading: "Common Acceptance Testing Tools",
      items: [
        "Selenium: An open-source tool for automating web browser testing.",
        "Cucumber: A tool for running automated tests written in plain language.",
      ],
    },
    {
      heading: "Acceptance Testing Metrics",
      items: [
        "Test Coverage: The percentage of requirements covered by test cases.",
        "Defect Detection Rate: The percentage of defects identified during testing.",
      ],
    },
    {
      heading: "Best Practices for Acceptance Testing",
      items: [
        "Involve Stakeholders: Ensure that all relevant stakeholders are involved in the testing process.",
        "Comprehensive Test Cases: Create detailed test cases that cover all aspects of the system.",
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
            className="grid grid-cols-1 text-start px-10 font pl-4"
          >
            <div>
              <p className="text-[#31cb00] text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="md:text-5xl text-2xl font">
                So what is
                <p className="text-[#31cb00] inline pl-2">
                  Acceptance Testing?
                </p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">
                Brief about Acceptance Testing
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

export default AcceptanceTestingIntroduction;
