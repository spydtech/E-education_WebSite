import React, { useState } from "react";

function UsabilityTestingIntroduction() {
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
      heading: "Introduction to Usability Testing",
      items: [
        "Usability testing evaluates how easy and intuitive it is for users to interact with a system or application.",
        "Key Concepts: Understand the importance of usability testing in enhancing user experience.",
      ],
    },
    {
      heading: "Types of Usability Testing",
      items: [
        "Moderated Testing: Conducted with a facilitator guiding participants.",
        "Unmoderated Testing: Participants complete tasks independently.",
      ],
    },
    {
      heading: "Common Usability Testing Methods",
      items: [
        "Think-Aloud Protocol: Participants verbalize their thoughts while using the system.",
        "Eye Tracking: Monitoring where and how long users look at different parts of the interface.",
      ],
    },
    {
      heading: "Usability Testing Metrics",
      items: [
        "Task Success Rate: The percentage of correctly completed tasks.",
        "Time on Task: The amount of time taken to complete a task.",
      ],
    },
    {
      heading: "Best Practices for Usability Testing",
      items: [
        "Test Early and Often: Integrate usability testing into the development lifecycle.",
        "Diverse User Base: Test with a variety of users to identify different usability issues.",
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
              <span className="text-[#f6ac14] inline pl-2">Usability Testing?</span>
            </p>
          </div>
          <div>
            <p className="text-lg lg:text-xl text-gray-500">
              Brief about Usability Testing
            </p>
          </div>
        </div>
      </div>
      <div className="h-auto lg:h-[468px] flex justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 lg:mt-0">
          <div className="bg-[#0098f1] w-full lg:w-[550px] h-auto lg:h-[420px] p-5 mt-10 mb-2 shadow-xl sm:rounded-lg">
            <div className="relative w-full">
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
              className="hover:text-pink-700 text-black font-bold py-2 px-4 rounded"
            >
              Previous
            </button>
            <div>{`Page ${currentSlide + 1}/${slidesData.length}`}</div>
            <button
              onClick={goToNextSlide}
              className="hover:text-pink-700 text-black font-bold py-2 px-4 rounded mr-14"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsabilityTestingIntroduction;
