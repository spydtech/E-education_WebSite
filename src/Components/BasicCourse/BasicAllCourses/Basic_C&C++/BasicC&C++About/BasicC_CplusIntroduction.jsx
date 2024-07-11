import React, { useState } from "react";

function BasicC_CplusIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-[400px] flex justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-[#25a244] font">
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
      heading: "Introduction to C & C++",
      items: [
        "C is a general-purpose programming language that has been around since the 1970s.",
        "C++ is an extension of C with object-oriented features, developed in the 1980s.",
      ],
    },
    {
      heading: "Basic Syntax",
      items: [
        "C and C++ programs start with a main function.",
        "Statements end with a semicolon.",
        "Code blocks are enclosed in curly braces.",
      ],
    },
    {
      heading: "Variables and Data Types",
      items: [
        "Variables must be declared before use.",
        "Common data types include int, float, double, and char.",
        "C++ introduces additional data types like bool and string.",
      ],
    },
    {
      heading: "Control Structures",
      items: [
        "Conditional statements include if, else if, and else.",
        "Loops include for, while, and do-while.",
        "Switch statements are used for multi-way branching.",
      ],
    },
    {
      heading: "Functions",
      items: [
        "Functions are blocks of code that perform a specific task.",
        "Functions must be declared and defined.",
        "Functions can return values and accept parameters.",
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
        className="grid grid-cols-1 w-fit md:lg:grid-cols-2 h-full bg-gradient-to-br to-[#14213d] from-[#0c111e]"
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
              <p className="text-[#25a244] text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="text-6xl font text-white">
                So what is
                <p className="text-[#25a244] inline pl-2">C & C++?</p>
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

export default BasicC_CplusIntroduction;
