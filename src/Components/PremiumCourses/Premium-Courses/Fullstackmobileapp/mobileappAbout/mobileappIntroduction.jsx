import React, { useState } from "react";

function MobileappIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-[400px] flex justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-[#f9ac13] font-lora">
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
      heading: "UI/UX Design Principles",
      items: [
        "Learn the fundamentals of UI/UX design for mobile applications.",
        "Understand user interface design, usability, and user experience principles.",
      ],
    },
    {
      heading: "Mobile App Development Tools",
      items: [
        "Explore essential tools and technologies for mobile app development.",
        "Get hands-on experience with popular frameworks like React Native and Flutter.",
      ],
    },
    {
      heading: "Mobile App Architecture",
      items: [
        "Understand different mobile app architectures such as MVC, MVP, and MVVM.",
        "Learn best practices for structuring and organizing mobile app code.",
      ],
    },
    {
      heading: "Testing and Deployment",
      items: [
        "Implement mobile app testing strategies for ensuring quality and reliability.",
        "Learn about the deployment process to app stores like Google Play and Apple App Store.",
      ],
    },
    {
      heading: "Performance Optimization",
      items: [
        "Optimize mobile app performance for speed, responsiveness, and efficiency.",
        "Implement techniques to reduce app size, improve loading times, and enhance user experience.",
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
        className="grid grid-cols-1 w-fit md:lg:grid-cols-2 h-full bg-[#00296b] mb-12"
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
              <p className="text-[#f9ac13] text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="text-6xl font-lora">
                So what is
                <p className="text-[#f9ac13] inline pl-2">
                  Mobile App Development?
                </p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">
                Discover the deeper aspects of mobile app development
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

export default MobileappIntroduction;
