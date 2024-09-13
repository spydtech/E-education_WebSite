import React, { useState } from "react";

function AdvancePhpIntroduction() {
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
            className="hover:text-[#f6ac14] text-white font-bold rounded px-4"
          >
            Previous
          </button>
          <div className="text-white">{`Page ${currentSlide + 1}/${slidesData.length}`}</div>
          <button
            onClick={goToNextSlide}
            className="hover:text-[#f6ac14] text-white font-bold rounded px-4"
          >
            Next
          </button>
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-screen h-auto mb-16">
      <div className="flex items-center justify-center">
        <div className="text-start px-4 lg:px-10">
          <div>
            <p className="text-[#f6ac14] underline-offset-2 underline text-2xl lg:text-[24px] font-bold">
              Introduction
            </p>
          </div>
          <div className="py-5">
            <p className="text-xl lg:text-5xl font">
              So what is
              <span className="text-[#f6ac14] inline pl-2">Advanced PHP?</span>
            </p>
          </div>
          <div>
            <p className="text-lg lg:text-xl text-gray-500">
              Brief about Advanced PHP
            </p>
          </div>
        </div>
      </div>
      <div className="h-auto lg:h-[550px] flex justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-4 lg:px-14 xl:px-36 sm:mt-8 lg:mt-0 lg:mr-32">
          <div className="bg-[#0098f1] relative w-full lg:w-[500px] lg:h-[520px] md:h-[400px] sm:h-[450px] h-[600px] p-5 mt-10 mb-2 shadow-xl sm:rounded-lg">
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

export default AdvancePhpIntroduction;
