import React, { useState } from "react";

function BasicJavaIntroduction() {
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
      heading: "Introduction to Java",
      items: [
        "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
        "It is a general-purpose programming language intended to let application developers write once, run anywhere (WORA).",
      ],
    },
    {
      heading: "Basic Syntax",
      items: [
        "Java syntax is the set of rules defining how a Java program is written and interpreted.",
        "Java programs are typically compiled into bytecode that can run on any Java virtual machine (JVM).",
      ],
    },
    {
      heading: "Variables in Java",
      items: [
        "A variable is a container that holds data that can be changed during the execution of a program.",
        "Java has several types of variables, including instance variables, class variables, and local variables.",
      ],
    },
    {
      heading: "Java Data Types",
      items: [
        "Primitive Data Types: byte, short, int, long, float, double, boolean, char.",
        "Non-Primitive Data Types: String, Arrays, Classes, Interface, etc.",
      ],
    },
    {
      heading: "Basic Java Syntax",
      items: [
        "System.out.println(): Used to print messages to the console.",
        "Comments: Single-line (//) and multi-line (/* */) comments.",
        "Main Method: public static void main(String[] args) is the entry point of any Java program.",
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
      <div>
        <div className="lg:px-10">
          <div>
            <p className="text-[#0098F1]  underline-offset-2 underline md:text-2xl lg:text-4xl font-bold">
              Introduction
            </p>
          </div>
          <div className="mt-2">
            <p className="md:text-xl lg:text-4xl">
              So what is
              <span className="text-[#f6ac14] inline pl-2">Java?</span>
            </p>
          </div>
          <div>
            <p className="md:text-lg lg:text-4xl text-gray-500 mt-2">
              Brief about Java
            </p>
          </div>
        </div>
      </div>

      {/* Slider Section */}
      <div className="bg-[#0098f1] md:w-[400px] lg:w-[550px] lg:h-[420px] md:p-5 lg:flex flex-col justify-between">
        <div className="flex text-white text-opacity-80">
          <Slide
            heading={slidesData[currentSlide].heading}
            items={slidesData[currentSlide].items}
          />
        </div>

        <div className="flex justify-between max-md:p-4">
          <button
            onClick={goToPreviousSlide}
            className="hover:text-white text-black font-bold rounded"
          >
            Previous
          </button>
          <div>{`Page ${currentSlide + 1}/${slidesData.length}`}</div>
          <button
            onClick={goToNextSlide}
            className="hover:text-white text-black font-bold rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasicJavaIntroduction;
