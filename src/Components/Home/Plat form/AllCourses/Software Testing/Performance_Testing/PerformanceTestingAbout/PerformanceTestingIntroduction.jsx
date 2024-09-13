import React, { useState } from "react";

function PerformanceTestingIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-auto flex justify-center">
          <div>
            <h2 className="text-2xl lg:text-3xl font-medium mb-4 text-white font-sans">
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
      heading: "Introduction to Performance Testing",
      items: [
        "Performance testing involves evaluating the speed, responsiveness, and stability of a computer, network, software program, or device under a workload.",
        "Key Concepts: Understand the importance of performance testing in ensuring a smooth user experience.",
      ],
    },
    {
      heading: "Types of Performance Testing",
      items: [
        "Load Testing: Assessing system behavior under expected load.",
        "Stress Testing: Determining system stability beyond normal operational capacity.",
      ],
    },
    {
      heading: "Common Performance Testing Tools",
      items: [
        "JMeter: A popular open-source tool for load testing.",
        "LoadRunner: A comprehensive tool for testing application performance.",
      ],
    },
    {
      heading: "Performance Testing Metrics",
      items: [
        "Response Time: The time taken for a system to respond to a request.",
        "Throughput: The amount of data processed by the system in a given amount of time.",
      ],
    },
    {
      heading: "Best Practices for Performance Testing",
      items: [
        "Test Early and Often: Integrate performance testing into the development lifecycle.",
        "Realistic Scenarios: Simulate real-world usage to get accurate results.",
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
    <div className="grid grid-cols-1 lg:grid-cols-2 h-auto bg-white mb-20">
      {/* Left Content */}
      <div className="flex items-center justify-center lg:pr-10">
        <div className="text-start px-4 lg:px-10">
          <p className="text-white underline-offset-2 underline text-2xl lg:text-[24px] font-bold">
            Introduction
          </p>
          <div className="py-5">
            <p className="text-xl lg:text-5xl font">
              So what is{" "}
              <span className="text-[#f6ac14] inline pl-2">
                Performance Testing
              </span>
            </p>
          </div>
          <p className="text-lg lg:text-xl text-gray-500">
            Brief about Performance Testing
          </p>
        </div>
      </div>
      
      {/* Right Content */}
      <div className="h-auto lg:h-[468px] flex justify-center ml-10">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mt-8 lg:mt-0">
          <div className="bg-[#0098f1]  w-full lg:w-[550px] h-auto lg:h-[420px] p-5 mt-10 mb-2 shadow-xl sm:rounded-lg">
            <div className="relative w-full ">
            <div className="flex text-white text-opacity-80">
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

export default PerformanceTestingIntroduction;
