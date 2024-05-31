import React, { useState } from "react";

function AdvancewordpressIntroduction() {
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
    <>
      <div
        id="subdiv"
        className="grid grid-cols-1 w-fit md:lg:grid-cols-2 h-full bg-[#540d6e] mb-12"
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
                  Advanced WordPress Development?
                </p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">
                Discover the deeper aspects of WordPress development
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

export default AdvancewordpressIntroduction;
