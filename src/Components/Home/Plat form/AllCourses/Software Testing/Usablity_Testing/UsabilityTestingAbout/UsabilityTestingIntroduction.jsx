import React, { useState } from "react";

function UsabilityTestingIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-[400px] flex justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-[#00509d] font-lora">
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
    <>
      <div
        id="subdiv"
        className="grid grid-cols-1 w-fit md:lg:grid-cols-2 h-full bg-gradient-to-br from-[#cca000] to-[#f5cc00]"
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
              <p className="text-[#00509d] text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="text-6xl font-lora">
                So what is
                <p className="text-[#00509d] inline pl-2">Usability Testing?</p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">
                Brief about Usability Testing
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

export default UsabilityTestingIntroduction;
