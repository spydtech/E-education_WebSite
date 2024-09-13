import React, { useState } from "react";

function BasicJavaScriptIntroduction() {
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
            <p className="text-[#0098F1] underline-offset-2 underline md:text-2xl lg:text-4xl font-bold">
              Introduction
            </p>
          </div>
          <div className="mt-2">
            <p className="md:text-xl lg:text-4xl">
              So what is
              <span className="text-[#f6ac14] inline pl-2">JavaScript</span>
            </p>
          </div>
          <div>
            <p className="md:text-lg lg:text-4xl text-gray-500 mt-2">
              Brief about JavaScript
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

export default BasicJavaScriptIntroduction;
