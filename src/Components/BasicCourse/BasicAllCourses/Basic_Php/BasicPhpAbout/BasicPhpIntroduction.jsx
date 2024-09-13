import React, { useState } from "react";

function BasicPhpIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-auto flex justify-center">
          <div>
            <h2 className="text-lg md:text-2xl lg:text-3xl font-medium mb-4 text-white font-sans">
              {heading}
            </h2>
            <ul className="list-disc list-inside text-md lg:text-xl text-white">
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
    setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : 0));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide < slidesData.length - 1 ? prevSlide + 1 : prevSlide
    );
  };

  return (
    <div className="flex flex-col space-y-3 md:flex-row md:justify-between md:items-center md:h-[380px] lg:h-[450px] px-3 mb-5">
      {/* Text Section */}
      <div className=" ">
        <div className=" lg:px-10">
          <div>
            <p className="text-[#0098F1]  underline-offset-2 underline md:text-2xl lg:text-4xl font-bold">
              Introduction
            </p>
          </div>
          <div className="mt-2">
            <p className="md:text-xl lg:text-4xl">
              So what is
              <span className="text-[#f6ac14] inline pl-2">PHP</span>
            </p>
          </div>
          <div>
            <p className="md:text-lg lg:text-4xl text-gray-500 mt-2">
              Brief about PHP
            </p>
          </div>
        </div>
      </div>

      {/* Slider Section */}
      <div className="bg-[#0098f1] md:w-[400px] lg:w-[550px] lg:h-[420px] md:p-5 lg:flex flex-col justify-between ">
        <div className="flex text-white text-opacity-80">
          <Slide
            heading={slidesData[currentSlide].heading}
            items={slidesData[currentSlide].items}
          />
        </div>

        <div className="flex justify-between max-md:p-4">
          <button
            onClick={goToPreviousSlide}
            className="hover:text-white text-black font-bold  rounded"
          >
            Previous
          </button>
          <div>{`Page ${currentSlide + 1}/${slidesData.length}`}</div>
          <button
            onClick={goToNextSlide}
            className="hover:text-white text-black font-bold  rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasicPhpIntroduction;
