
import React, { useState } from "react";
// FundamentalsOfSoftwareDevelopmentIntroduction
function UnitTestingIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-[400px] flex justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-[#f9ac13] font">
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
      heading: "Introduction to Software Development",
      items: [
        "Software development involves designing, creating, and maintaining applications, frameworks, or other software components.",
        "Key Concepts: Understand the software development lifecycle and its phases.",
      ],
    },
    {
      heading: "Software Development Methodologies",
      items: [
        "Agile: Learn about Agile methodologies and their focus on iterative development.",
        "Waterfall: Understand the traditional Waterfall model and its structured approach.",
      ],
    },
    {
      heading: "Common Programming Languages",
      items: [
        "JavaScript: Explore the use of JavaScript in web development.",
        "Python: Learn about Python and its applications in various domains.",
      ],
    },
    {
      heading: "Version Control Systems",
      items: [
        "Git: Understand the importance of version control and learn basic Git commands.",
        "GitHub: Learn how to use GitHub for collaborative development and project management.",
      ],
    },
    {
      heading: "Software Testing and QA",
      items: [
        "Unit Testing: Understand the importance of unit testing in software development.",
        "Automated Testing: Learn about automated testing tools and their role in ensuring software quality.",
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
        className="grid grid-cols-1 w-fit md:lg:grid-cols-2 h-full bg-gradient-to-br from-[#0077b6] to-[#03045e] mb-12"
      >
        <div
          id="div1"
          className="flex items-center justify-center xl:lg:md:w-auto"
        >
          <div
            id="headings"
            className="grid grid-cols-1 text-start pl-4 font"
          >
            <div>
              <p className="text-[#f9ac13] text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="md:text-5xl text-2xl font">
                So what is
                <p className="text-[#f9ac13] inline pl-2">
                  Software Development?
                </p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">
                Brief about Software Development
              </p>
            </div>
          </div>
        </div>
        <div id="div2" className="md:px-10 pl-2">
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

export default UnitTestingIntroduction;
