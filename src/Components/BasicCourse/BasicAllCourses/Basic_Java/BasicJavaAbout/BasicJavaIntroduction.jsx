import React, { useState } from "react";

function BasicJavaIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-[400px] flex justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-[#d90429] font">
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
    <>
      <div
        id="subdiv"
        className="grid grid-cols-1 w-fit md:lg:grid-cols-2 h-full bg-gradient-to-br from-[#000814] to-[#000814]"
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
              <p className="text-[#d90429] text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="text-6xl text-white font">
                So what is
                <p className="text-[#d90429] inline pl-2">Java?</p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">Brief about Java</p>
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

export default BasicJavaIntroduction;
