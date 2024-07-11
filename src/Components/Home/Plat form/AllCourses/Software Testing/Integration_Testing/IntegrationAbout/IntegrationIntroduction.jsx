import React, { useState } from "react";

function IntegrationIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-[400px] flex justify-center">
          <div>
            <h2 className="text-2xl font-medium mb-4 text-[#f9ac13] font">
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
      heading: "Introduction to Integration Testing",
      items: [
        "Integration testing focuses on verifying the interactions between different modules or components of the software.",
        "Key Concepts: Understand the importance of integration testing in detecting issues at the interfaces between components.",
      ],
    },
    {
      heading: "Types of Integration Testing",
      items: [
        "Big Bang Integration: Testing all components together after integration.",
        "Incremental Integration: Testing components incrementally as they are integrated.",
      ],
    },
    {
      heading: "Approaches to Integration Testing",
      items: [
        "Top-down Integration: Testing starts from the top-level modules and progresses downwards.",
        "Bottom-up Integration: Testing starts from the lower-level modules and progresses upwards.",
      ],
    },
    {
      heading: "Tools and Techniques for Integration Testing",
      items: [
        "Automated Testing: Utilize tools like JUnit, TestNG, and others for automated integration tests.",
        "Manual Testing: Understand the role of manual testing in verifying complex interactions that automated tests might miss.",
      ],
    },
    {
      heading: "Challenges in Integration Testing",
      items: [
        "Data Integration: Ensuring consistent data flow between integrated components.",
        "Interface Issues: Identifying and resolving mismatches and communication issues between components.",
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
        bg
        className="grid grid-cols-1 w-fit md:lg:grid-cols-2 h-full bg-gradient-to-r from-blue-600 to-blue-600 mb-12"
      >
        <div
          id="div1"
          className="flex items-center justify-center xl:lg:md:w-auto"
        >
          <div
            id="headings"
            className="grid grid-cols-1 text-start px-10 font"
          >
            <div>
              <p className="text-[#f9ac13] text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="md:text-5xl text-2xl font">
                So what is
                <p className="text-[#f9ac13] inline pl-2">
                  Integration Testing?
                </p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">
                Brief about Integration Testing
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

export default IntegrationIntroduction;
