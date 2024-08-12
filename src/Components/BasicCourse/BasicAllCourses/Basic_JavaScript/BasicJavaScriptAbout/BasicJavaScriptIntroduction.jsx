import React, { useState } from "react";

function BasicJavaScriptIntroduction() {
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
      heading: "Introduction to JavaScript",
      items: [
        "JavaScript is a versatile programming language primarily used for web development.",
        "It allows you to implement complex features on web pages.",
      ],
    },
    {
      heading: "Basic Syntax",
      items: [
        "JavaScript is case-sensitive and uses the Unicode character set.",
        "Statements are separated by semicolons.",
      ],
    },
    {
      heading: "Variables in JavaScript",
      items: [
        "Variables can be declared using var, let, or const.",
        "Variable names must start with a letter, underscore (_), or dollar sign ($).",
      ],
    },
    {
      heading: "JavaScript Data Types",
      items: [
        "String: A sequence of characters.",
        "Number: Numeric values.",
        "Boolean: True or false.",
        "Object: A collection of properties.",
        "Array: An ordered list of values.",
      ],
    },
    {
      heading: "Basic JavaScript Functions",
      items: [
        "Functions are defined with the function keyword.",
        "They can accept parameters and return values.",
        "Functions can be stored in variables and passed as arguments to other functions.",
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
              <span className="text-[#f6ac14] inline pl-2">JavaScript</span>
            </p>
          </div>
          <div>
            <p className="text-lg lg:text-xl text-gray-500">
              Brief about JavaScript
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

export default BasicJavaScriptIntroduction;
