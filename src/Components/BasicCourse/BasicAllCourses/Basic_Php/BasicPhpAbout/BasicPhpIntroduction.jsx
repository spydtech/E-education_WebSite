import React, { useState } from "react";

function BasicPhpIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-[400px] flex justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-[#31cb00] font">
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
    <>
      <div
        id="subdiv"
        className="grid grid-cols-1 w-fit md:lg:grid-cols-2 h-full bg-gradient-to-br to-[#072ac8] from-[#4f78e1]"
      >
        <div
          id="div1"
          className="flex items-center justify-center xl:lg:md:w-auto"
        >
          <div
            id="headings"
            className="grid grid-cols-1 text-start px-10 font"
          >
            <div>
              <p className="text-[#31cb00] text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="text-6xl font">
                So what is
                <p className="text-[#31cb00] inline pl-2">PHP?</p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">Brief about PHP</p>
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

export default BasicPhpIntroduction;
