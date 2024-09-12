import React, { useState } from "react";

function Ui_UxIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-2 py-8 flex flex-col h-full relative overflow-hidden">
        <div className="flex-grow pb-28">
          <h2 className="text-2xl lg:text-3xl font-medium mb-4 text-white font-sans">
            {heading}
          </h2>
          <ul className="list-disc list-outside text-lg lg:text-xl pl-10 text-start text-white">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="absolute left-0 right-0 bottom-0 flex justify-between">
          <button
            onClick={goToPreviousSlide}
            className="hover:text-white text-black font-bold rounded px-4"
          >
            Previous
          </button>
          <div className="text-black">{`Page ${currentSlide + 1}/${slidesData.length}`}</div>
          <button
            onClick={goToNextSlide}
            className="hover:text-white text-black font-bold rounded px-4"
          >
            Next
          </button>
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-screen h-auto mb-16">
      <div className="flex items-center justify-center">
        <div className="text-start px-4 lg:px-10">
          <div>
            <p className="text-[#0098f1] underline-offset-2 underline text-2xl lg:text-[30px] font-bold">
              Introduction
            </p>
          </div>
          <div className="py-5">
            <p className="text-xl lg:text-5xl font">
              Explore
              <span className="text-[#f6ac14] inline pl-2">UI/UX Design</span>
            </p>
          </div>
          <div>
            <p className="text-lg lg:text-xl text-gray-500">
              Learn about the fundamentals of UI/UX design, its key principles,
              tools, and trends.
            </p>
          </div>
        </div>
      </div>
      <div className="h-auto lg:h-[650px] flex justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-4 lg:px-14 xl:px-36 sm:mt-8 lg:mt-0 lg:mr-32">
          <div className="bg-[#0098f1] relative w-full lg:w-[500px] lg:h-[480px] md:h-[350px] sm:h-[400px] h-[450px] p-5 mt-10 mb-2 shadow-xl sm:rounded-lg">
            <div className="relative w-full h-full">
              <Slide
                heading={slidesData[currentSlide].heading}
                items={slidesData[currentSlide].items}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui_UxIntroduction;
