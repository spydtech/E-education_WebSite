import React, { useState } from "react";

function SystemTestingIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-[400px] flex justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-[#f9ac13] font">
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
      heading: "Introduction to System Testing",
      items: [
        "System testing validates the complete and integrated software product.",
        "Key Concepts: Understand the importance of system testing in the software development lifecycle.",
      ],
    },
    {
      heading: "Types of System Testing",
      items: [
        "Functional Testing: Ensures that the software functions as expected.",
        "Performance Testing: Checks the software's performance under various conditions.",
        "Security Testing: Identifies vulnerabilities and security flaws.",
      ],
    },
    {
      heading: "Functional Testing in System Testing",
      items: [
        "Test Cases: Develop comprehensive test cases to cover all functionalities.",
        "User Scenarios: Validate the software against real-world user scenarios.",
      ],
    },
    {
      heading: "Performance Testing in System Testing",
      items: [
        "Load Testing: Evaluate the software's performance under peak load conditions.",
        "Stress Testing: Determine the software's robustness under extreme conditions.",
        "Scalability Testing: Assess how well the software scales with increasing load.",
      ],
    },
    {
      heading: "Tools and Techniques for System Testing",
      items: [
        "Automated Testing: Utilize tools like Selenium, JMeter, and LoadRunner.",
        "Manual Testing: Understand the importance of manual testing for complex test cases.",
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
        className="grid grid-cols-1 w-fit md:lg:grid-cols-2 h-full bg-gradient-to-r from-rose-500 to-red-500 mb-12"
      >
        <div
          id="div1"
          className="flex items-center justify-center xl:lg:md:w-auto"
        >
          <div
            id="headings"
            className="grid grid-cols-1 text-start pl-4 font"
          >
            <div>
              <p className="text-[#f9ac13] text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="md:text-5xl text-2xl font">
                So what is
                <p className="text-[#f9ac13] inline pl-2">System Testing?</p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">
                Brief about System Testing
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

export default SystemTestingIntroduction;
