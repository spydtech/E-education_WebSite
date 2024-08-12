import React, { useState } from "react";

function AdvanceWordPressIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-2 py-8">
        <div className="h-auto flex flex-col justify-center">
          <div>
            <h2 className="text-2xl lg:text-3xl font-medium mb-2 text-white font-sans">
              {heading}
            </h2>
            <ul className="list-disc list-inside text-lg lg:text-xl pl-6">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between mt-8 pt-10 lg:mt-0">
            <button
              onClick={goToPreviousSlide}
              className="hover:text-pink-700 text-white font-bold px-4 rounded"
            >
              Previous
            </button>
            <div className="text-white">{`Page ${currentSlide + 1}/${slidesData.length}`}</div>
            <button
              onClick={goToNextSlide}
              className="hover:text-pink-700 text-white font-bold px-4 rounded"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  };

  const slidesData = [
    {
      heading: "Custom Theme Development",
      items: [
        "Learn to create custom WordPress themes from scratch.",
        "Understand theme hierarchy and template files.",
      ],
    },
    {
      heading: "Advanced Plugin Development",
      items: [
        "Explore the WordPress plugin architecture.",
        "Develop plugins using custom post types and taxonomies.",
      ],
    },
    {
      heading: "WordPress Performance Optimization",
      items: [
        "Implement caching strategies to improve site speed.",
        "Optimize database queries and reduce load times.",
      ],
    },
    {
      heading: "WordPress Security",
      items: [
        "Learn advanced security practices to protect your site.",
        "Understand how to secure WordPress against common threats.",
      ],
    },
    {
      heading: "REST API Integration",
      items: [
        "Integrate external applications with WordPress using the REST API.",
        "Create custom endpoints and handle requests securely.",
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
    <div className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[468px] bg-white mb-16">
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
              <span className="text-[#f6ac14] inline pl-2">
                Advanced WordPress Development?
              </span>
            </p>
          </div>
          <div>
            <p className="text-lg lg:text-xl text-gray-500">
              Discover the deeper aspects of WordPress development
            </p>
          </div>
        </div>
      </div>
      <div className="h-auto lg:h-[468px] flex justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-4 lg:px-10 mt-10 lg:mt-0">
          <div className="bg-[#0098f1] w-full lg:w-auto h-auto lg:h-auto p-5 mt-4 mb-2 shadow-xl sm:rounded-lg">
            <div className="relative w-full">
              <div className="flex text-white text-opacity-80">
                <Slide
                  heading={slidesData[currentSlide].heading}
                  items={slidesData[currentSlide].items}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvanceWordPressIntroduction;
