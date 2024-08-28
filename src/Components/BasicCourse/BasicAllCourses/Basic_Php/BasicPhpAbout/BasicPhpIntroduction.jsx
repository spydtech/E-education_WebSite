import React, { useState } from "react";

function BasicPhpIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => (
    <div className="w-full flex-shrink-0 px-2 py-8 md:mr-6 flex flex-col h-full relative">
      <div className="flex-grow pb-10 overflow-y-auto"> {/* Added overflow-y-auto to handle excess content */}
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
          className="hover:text-[#f6ac14] text-white font-bold rounded"
        >
          Previous
        </button>
        <div className="text-white">{`Page ${currentSlide + 1}/${slidesData.length}`}</div>
        <button
          onClick={goToNextSlide}
          className="hover:text-[#f6ac14] text-white font-bold rounded"
        >
          Next
        </button>
      </div>
    </div>
  );

  const slidesData = [
    {
      heading: "Introduction to PHP",
      items: [
        "PHP (Hypertext Preprocessor) is a widely-used open source general-purpose scripting language.",
        "It is especially suited for web development and can be embedded into HTML.",
      ],
    },
    {
      heading: "Basic Syntax",
      items: [
        "PHP scripts are executed on the server.",
        "A PHP script can be placed anywhere in the document.",
      ],
    },
    {
      heading: "Variables in PHP",
      items: [
        "A variable starts with the $ sign, followed by the name of the variable.",
        "A variable name must start with a letter or the underscore character.",
      ],
    },
    {
      heading: "PHP Data Types",
      items: [
        "String: A sequence of characters.",
        "Integer: Non-decimal number.",
        "Float: Decimal number.",
        "Boolean: True or false.",
        "Array: A collection of values.",
      ],
    },
    {
      heading: "Basic PHP Syntax",
      items: [
        "echo: Outputs one or more strings.",
        "print: Outputs a string.",
        "Comments: Single-line (//) and multi-line (/* */) comments.",
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
    <div className="grid grid-cols-1 lg:grid-cols-2  gap-6 w-screen h-auto lg:h-[468px] mb-16">
      <div className="flex items-center justify-center ">
        <div className="text-start px-4 lg:px-10">
          <div>
            <p className="text-[#f6ac14] underline-offset-2 underline text-2xl lg:text-[24px] font-bold">
              Introduction
            </p>
          </div>
          <div className="sm:py-3 py-2">
            <p className="text-xl lg:text-5xl font">
              So what is
              <span className="text-[#f6ac14] inline pl-2">PHP</span>
            </p>
          </div>
          <div>
            <p className="text-lg lg:text-xl text-gray-500">
              Brief about PHP
            </p>
          </div>
        </div>
      </div>
      <div className="h-auto lg:h-[468px] flex justify-center ">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-4 lg:px-14 xl:px-36  sm:mt-8 lg:mt-0">
          <div className="bg-[#0098f1] relative w-full lg:w-[400px] lg:h-[420px] md:h-[350px] p-5 mt-10 mb-2 shadow-xl sm:rounded-lg"> {/* Set fixed width and height */}
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

export default BasicPhpIntroduction;
