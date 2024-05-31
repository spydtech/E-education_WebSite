import React, { useState } from "react";

function Ui_UxIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-[400px] flex justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-[#0070f3] font-lora">
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
      heading: "Introduction to UI/UX Design",
      items: [
        "UI (User Interface) design focuses on the look and layout of a product.",
        "UX (User Experience) design emphasizes the overall feel and usability of a product.",
      ],
    },
    {
      heading: "Principles of Good UI Design",
      items: [
        "Consistency: Uniform design elements across the application.",
        "Clarity: Clear and understandable elements and interactions.",
        "Feedback: Informing users of actions and results.",
      ],
    },
    {
      heading: "Principles of Good UX Design",
      items: [
        "User-Centric: Focusing on the needs and goals of the user.",
        "Accessibility: Ensuring the product is usable by people of all abilities.",
        "Simplicity: Keeping the design as simple and intuitive as possible.",
      ],
    },
    {
      heading: "Tools for UI/UX Design",
      items: [
        "Wireframing tools like Balsamiq and Figma.",
        "Prototyping tools like InVision and Sketch.",
        "User testing tools like UserTesting and Lookback.",
      ],
    },
    {
      heading: "UI/UX Design Trends",
      items: [
        "Dark Mode: Increasingly popular for its aesthetic and energy-saving benefits.",
        "Microinteractions: Small animations that enhance user experience.",
        "Voice User Interfaces: Designing for voice-activated systems.",
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 bg-gradient-to-br to-[#0a0908] from-[#272640]">
        <div className="flex items-center justify-center xl:lg:md:w-auto">
          <div className="grid grid-cols-1 text-start px-10 font-lora">
            <div>
              <p className="text-[#0070f3] text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="text-6xl font-lora text-white">
                Explore
                <p className="text-[#0070f3] inline pl-2">UI/UX Design</p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-300">
                Learn about the fundamentals of UI/UX design, its key
                principles, tools, and trends.
              </p>
            </div>
          </div>
        </div>
        <div className="px-10">
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
                  className="hover:text-blue-600 text-black font-bold py-2 px-4 rounded"
                >
                  Previous
                </button>
                <div>{`Page ${currentSlide + 1}/${slidesData.length}`}</div>
                <button
                  onClick={goToNextSlide}
                  className="hover:text-blue-600 text-black font-bold py-2 px-4 rounded"
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

export default Ui_UxIntroduction;
