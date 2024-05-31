import React, { useState } from "react";

function BasicJavaScriptIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-[400px] flex justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-[#480ca8] font-lora">
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
    <>
      <div
        id="subdiv"
        className="grid grid-cols-1 w-fit md:lg:grid-cols-2 h-full bg-gradient-to-br to-[#ffb703] from-[#fb8500]"
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
              <p className="text-[#480ca8] text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="text-6xl font-lora">
                So what is
                <p className="text-[#480ca8] inline pl-2">JavaScript?</p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">Brief about JavaScript</p>
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

export default BasicJavaScriptIntroduction;
