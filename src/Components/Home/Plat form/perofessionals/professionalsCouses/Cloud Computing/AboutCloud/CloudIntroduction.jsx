import React, { useState } from "react";

function CloudIntroduction() {
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
      heading: "Introduction to Cloud Computing",
      items: [
        "Cloud computing provides on-demand access to computing resources over the internet.",
        "Key Concepts: Understand the fundamental principles and benefits of cloud computing.",
      ],
    },
    {
      heading: "Types of Cloud Computing Services",
      items: [
        "Infrastructure as a Service (IaaS): Offers virtualized computing resources over the internet.",
        "Platform as a Service (PaaS): Provides a platform allowing customers to develop, run, and manage applications without the complexity of infrastructure management.",
        "Software as a Service (SaaS): Delivers software applications over the internet on a subscription basis.",
      ],
    },
    {
      heading: "Cloud Deployment Models",
      items: [
        "Public Cloud: Infrastructure and services are provided to multiple customers over the internet by a third-party provider.",
        "Private Cloud: Dedicated infrastructure and services are maintained for a single organization, either on-premises or hosted by a third-party provider.",
        "Hybrid Cloud: Combines public and private clouds, allowing data and applications to be shared between them.",
      ],
    },
    // Add more slides as needed
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
                Welcome to
                <p className="text-[#00509d] inline pl-2">Cloud Computing!</p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">
                Gain insights into the foundational concepts and principles of cloud computing.
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

export default CloudIntroduction;
