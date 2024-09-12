import React, { useState } from "react";

function MobileappIntroduction() {
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full h-auto mb-16">
      <div className="flex items-center justify-center">
        <div className="text-start px-4 lg:px-10">
          <div>
            <p className="text-[#0098f1] underline-offset-2 underline text-2xl lg:text-[30px] font-bold">
              Introduction
            </p>
          </div>
          <div className="py-5">
            <p className="text-xl lg:text-5xl font">
              So what is
              <span className="text-[#f6ac14] inline pl-2">
                Mobile App Development?
              </span>
            </p>
          </div>
          <div>
            <p className="text-lg lg:text-xl text-gray-500">
              Discover the deeper aspects of mobile app development
            </p>
          </div>
        </div>
      </div>
      <div className="h-auto lg:h-[600px] flex justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-4 lg:px-14 xl:px-36 sm:mt-8 lg:mt-0 lg:mr-32">
          <div className="bg-[#0098f1] relative w-full lg:w-[500px] lg:h-[500px] md:h-[360px] sm:h-[450px] h-[450px] p-5 mt-10 mb-2 shadow-xl sm:rounded-lg">
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

export default MobileappIntroduction;
