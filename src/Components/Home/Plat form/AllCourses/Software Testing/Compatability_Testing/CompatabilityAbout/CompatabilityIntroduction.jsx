import React, { useState } from "react";

function CompatabilityIntroduction() {
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
    <>
      <div
        id="subdiv"
        className="grid grid-cols-1 w-fit md:lg:grid-cols-2 h-full bg-gradient-to-r from-orange-700 to-red-600 mb-12"
      >
        <div
          id="div1"
          className="flex items-center justify-center xl:lg:md:w-auto"
        >
          <div
            id="headings"
            className="grid grid-cols-1 text-start  font"
          >
            <div>
              <p className="text-[#f9ac13] text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="md:text-5xl text-2xl font">
                So what is
                <p className="text-[#f9ac13] inline pl-2">
                  Compatibility Testing?
                </p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">
                Brief about Compatibility Testing
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

export default CompatabilityIntroduction;
