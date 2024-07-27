import React, { useState } from "react";

function ManualTestingIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-[400px] flex justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-[#fca311] font">
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
      heading: "Introduction to Manual Testing",
      items: [
        "Manual testing is the process of manually verifying that software functions correctly.",
        "Key Concepts: Understand the importance of manual testing in identifying bugs and ensuring software quality.",
      ],
    },
    {
      heading: "Types of Manual Testing",
      items: [
        "Exploratory Testing: Simultaneously learning, test design, and test execution.",
        "Usability Testing: Evaluating the user interface and user experience.",
      ],
    },
    {
      heading: "Common Manual Testing Techniques",
      items: [
        "Test Case Design: Creating detailed steps for testing specific functionalities.",
        "Boundary Value Analysis: Testing the boundaries between partitions.",
      ],
    },
    {
      heading: "Manual Testing Metrics",
      items: [
        "Test Coverage: The percentage of the software tested.",
        "Defect Density: The number of defects per size of the software module.",
      ],
    },
    {
      heading: "Best Practices for Manual Testing",
      items: [
        "Detailed Documentation: Maintain clear and concise test cases and results.",
        "Continuous Improvement: Regularly review and refine testing processes.",
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
        className="grid grid-cols-1 w-fit md:lg:grid-cols-2 h-full bg-gradient-to-br  from-[#0077b6] to-[#00b4d8]"
      >
        <div
          id="div1"
          className="flex items-center justify-center xl:lg:md:w-auto"
        >
          <div
            id="headings"
            className="grid grid-cols-1 text-start font"
          >
            <div>
              <p className="text-[#fca311] text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="md:text-5xl text-2xl font">
                So what is
                <p className="text-[#fca311] inline pl-2">Manual Testing?</p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">
                Brief about Manual Testing
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

export default ManualTestingIntroduction;
