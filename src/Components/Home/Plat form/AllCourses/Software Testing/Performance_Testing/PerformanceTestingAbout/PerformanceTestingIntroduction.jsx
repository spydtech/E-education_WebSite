import React, { useState } from "react";

function PerformanceTestingIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-[400px] flex justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-[#30c5ff] font-lora">
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
    <>
      <div
        id="subdiv"
        className="grid grid-cols-1 w-fit md:lg:grid-cols-2 h-full  bg-gradient-to-br from-[#474973] to-[#0d0c1d]"
      >
        <div
          id="div1"
          className="flex items-center justify-center xl:lg:md:w-auto"
        >
          <div
            id="headings"
            className="grid grid-cols-1 text-start px-10 font-lora"
          >
            <div>
              <p className="text-[#30c5ff] text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="text-6xl font-lora">
                So what is
                <p className="text-[#30c5ff] inline pl-2">
                  Performance Testing?
                </p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">
                Brief about Performance Testing
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

export default PerformanceTestingIntroduction;