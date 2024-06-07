import React, { useState } from "react";

function AutomationTestingIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-[400px] flex justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-[#7400b8] font-lora">
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
      heading: "Introduction to Automation Testing",
      items: [
        "Automation testing uses automated tools to execute tests and compare actual outcomes with expected results.",
        "Key Concepts: Learn how automation testing improves efficiency, repeatability, and accuracy in the testing process.",
      ],
    },
    {
      heading: "Types of Automation Testing",
      items: [
        "Unit Testing: Testing individual units or components of the software.",
        "Integration Testing: Testing the interactions between integrated units/modules.",
      ],
    },
    {
      heading: "Common Automation Testing Tools",
      items: [
        "Selenium: A widely-used tool for automating web applications.",
        "Jenkins: A tool for continuous integration and continuous testing.",
      ],
    },
    {
      heading: "Automation Testing Metrics",
      items: [
        "Test Execution Time: The time taken to execute automated tests.",
        "Defect Detection Rate: The rate at which defects are found in the software.",
      ],
    },
    {
      heading: "Best Practices for Automation Testing",
      items: [
        "Maintainable Scripts: Write clear and maintainable test scripts.",
        "Continuous Integration: Integrate automated tests with CI/CD pipelines.",
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
            className="grid grid-cols-1 text-start pl-4 font-lora"
          >
            <div>
              <p className="text-[#7400b8] text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="md:text-5xl text-2xl font-lora">
                So what is
                <p className="text-[#7400b8] inline pl-2">
                  Automation Testing?
                </p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">
                Brief about Automation Testing
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

export default AutomationTestingIntroduction;
