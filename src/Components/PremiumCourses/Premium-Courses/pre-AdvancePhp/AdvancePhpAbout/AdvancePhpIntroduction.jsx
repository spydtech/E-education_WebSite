import React, { useState } from "react";

function AdvancePhpIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-[400px] flex justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-[#ffbc42] font-lora">
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
      heading: "Advanced PHP Concepts",
      items: [
        "Object-Oriented Programming in PHP.",
        "MVC Architecture for PHP web applications.",
        "Working with databases using PHP (e.g., MySQL).",
        "Error handling and exception handling in PHP.",
        "Integration of PHP with frontend technologies like React or Angular.",
      ],
    },
    {
      heading: "Server-Side Scripting",
      items: [
        "Difference between client-side and server-side scripting.",
        "Server-side validation and form handling in PHP.",
      ],
    },
    {
      heading: "PHP Security",
      items: [
        "Common security vulnerabilities in PHP applications.",
        "Best practices for securing PHP code.",
        "Protection against SQL injection and XSS attacks.",
      ],
    },
    {
      heading: "Advanced PHP Functions",
      items: [
        "Creating custom functions in PHP.",
        "Working with PHP libraries and packages.",
        "Handling file uploads and processing in PHP.",
      ],
    },
    {
      heading: "Performance Optimization",
      items: [
        "Caching strategies for PHP applications.",
        "Optimizing database queries in PHP.",
        "Using asynchronous processing in PHP applications.",
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
        className="grid grid-cols-1 w-fit md:lg:grid-cols-2 h-full bg-gradient-to-br to-[#9e0059] from-[#640d14]"
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
              <p className="text-[#ffbc42] text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="text-6xl font-lora ">
                So what is
                <p className="text-[#ffbc42] inline pl-2">Advance Php</p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">Brief about C & C++</p>
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
                  className="hover:text-yellow-500 text-black font-bold py-2 px-4 rounded"
                >
                  Previous
                </button>
                <div>{`Page ${currentSlide + 1}/${slidesData.length}`}</div>
                <button
                  onClick={goToNextSlide}
                  className="hover:text-yellow-500 text-black font-bold py-2 px-4 rounded"
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

export default AdvancePhpIntroduction;
