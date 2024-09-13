import React, { useState } from "react";

function BasicJavaIntroduction() {
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
              <span className="text-[#f6ac14] inline pl-2">Java?</span>
            </p>
          </div>
          <div>
            <p className="text-lg lg:text-xl text-gray-500">
              Brief about Java
            </p>
          </div>
        </div>
      </div>
      <div className="h-auto lg:h-[500px] flex justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-4 lg:px-14 xl:px-36 sm:mt-8 lg:mt-0 lg:mr-32">
          <div className="bg-[#0098f1] relative w-full lg:w-[500px] lg:h-[450px] md:h-[350px] sm:h-[400px] h-[550px] p-5 mt-10 mb-2 shadow-xl sm:rounded-lg">
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

export default BasicJavaIntroduction;
