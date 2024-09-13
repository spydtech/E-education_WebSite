import React, { useState } from "react";

function CompatabilityIntroduction() {
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
      heading: "Introduction to Compatibility Testing",
      items: [
        "Compatibility testing ensures that your software works seamlessly across different browsers, devices, and operating systems.",
        "Key Concepts: Understand the importance of compatibility testing and its role in delivering a consistent user experience.",
      ],
    },
    {
      heading: "Browser Compatibility Testing",
      items: [
        "Cross-browser testing: Learn how to test your application on different web browsers to ensure consistent behavior.",
        "Browser tools: Explore tools like BrowserStack and Selenium for effective cross-browser testing.",
      ],
    },
    {
      heading: "Device Compatibility Testing",
      items: [
        "Mobile testing: Understand the challenges of testing on various mobile devices and platforms.",
        "Device farms: Learn about services that provide access to a wide range of real devices for testing.",
      ],
    },
    {
      heading: "Operating System Compatibility Testing",
      items: [
        "OS-specific testing: Ensure your software performs well on different operating systems like Windows, macOS, Linux, iOS, and Android.",
        "Virtual machines: Use virtual machines to simulate different operating systems for testing purposes.",
      ],
    },
    {
      heading: "Tools and Techniques for Compatibility Testing",
      items: [
        "Automated Testing: Leverage automated testing tools to streamline compatibility testing processes.",
        "Manual Testing: Understand the role of manual testing in identifying compatibility issues that automated tests might miss.",
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
              <span className="text-[#f6ac14] inline pl-2">Compatibility Testing?</span>
            </p>
          </div>
          <div>
            <p className="text-lg lg:text-xl text-gray-500">
              Brief about Compatibility Testing
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

export default CompatabilityIntroduction;
