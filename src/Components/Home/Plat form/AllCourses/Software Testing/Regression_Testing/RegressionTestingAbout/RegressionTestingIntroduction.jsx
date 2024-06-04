import React, { useState } from "react";

function RegressionTestingIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-[400px] flex justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-[#00a8e8] font-lora">
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
      heading: "Introduction to Regression Testing",
      items: [
        "Regression testing ensures that new code changes do not adversely affect the existing functionality of the software.",
        "Key Concepts: Learn how regression testing helps maintain software stability and reliability.",
      ],
    },
    {
      heading: "Types of Regression Testing",
      items: [
        "Corrective Regression Testing: Used when there are no changes in the product's specification.",
        "Retest-all Regression Testing: All the tests in the existing test suite are re-executed.",
      ],
    },
    {
      heading: "Common Regression Testing Tools",
      items: [
        "Selenium: A widely-used tool for automating web applications.",
        "QTP/UFT: A tool by Micro Focus for functional and regression test automation.",
      ],
    },
    {
      heading: "Regression Testing Metrics",
      items: [
        "Test Coverage: The extent to which the code is covered by automated tests.",
        "Defect Detection Rate: The rate at which defects are found in the software after changes.",
      ],
    },
    {
      heading: "Best Practices for Regression Testing",
      items: [
        "Selective Testing: Choose the right subset of test cases that cover the impacted areas.",
        "Automated Testing: Automate regression tests to ensure they are run consistently and efficiently.",
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
        className="grid grid-cols-1 w-fit md:lg:grid-cols-2 h-full bg-gradient-to-br  from-[#6f1d1b] to-[#432818]"
      >
        <div
          id="div1"
          className="flex items-center justify-center xl:lg:md:w-auto"
        >
          <div
            id="headings"
            className="grid grid-cols-1 text-start font-lora pl-4"
          >
            <div>
              <p className="text-[#00a8e8] text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="md:text-5xl text-2xl font-lora">
                So what is
                <p className="text-[#00a8e8] inline pl-2">
                  Regression Testing?
                </p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">
                Brief about Regression Testing
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

export default RegressionTestingIntroduction;
