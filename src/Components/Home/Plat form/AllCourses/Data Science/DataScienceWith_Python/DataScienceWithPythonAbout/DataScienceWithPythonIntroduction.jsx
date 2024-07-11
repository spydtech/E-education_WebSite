import React, { useState } from "react";

function DataScienceWithPythonIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-[400px] flex justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-[#750e5c] font">
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
      heading: "Introduction to Data Science with Python",
      items: [
        "Data Science with Python involves using Python programming language to perform data analysis, data manipulation, and data visualization.",
        "Key Concepts: Learn why Python is a popular choice for data science and its capabilities in handling and analyzing data.",
      ],
    },
    {
      heading: "Python Basics for Data Science",
      items: [
        "Introduction to Python: Learn the basics of Python programming.",
        "Data Structures: Understand Python data structures such as lists, dictionaries, and tuples.",
      ],
    },
    {
      heading: "Data Manipulation with Pandas",
      items: [
        "Pandas Library: Introduction to Pandas for data manipulation.",
        "DataFrames: Learn to create and manipulate DataFrames for data analysis.",
      ],
    },
    {
      heading: "Data Visualization with Matplotlib and Seaborn",
      items: [
        "Matplotlib: Learn to create basic plots and visualizations.",
        "Seaborn: Create advanced visualizations with Seaborn.",
      ],
    },
    {
      heading: "Machine Learning with Scikit-Learn",
      items: [
        "Introduction to Scikit-Learn: Learn the basics of machine learning with Scikit-Learn.",
        "Building Models: Understand how to build and evaluate machine learning models.",
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
        className="grid grid-cols-1 w-fit md:lg:grid-cols-2 h-full  bg-gradient-to-br from-[#38b000] to-[#70e000]"
      >
        <div
          id="div1"
          className="flex items-center justify-center xl:lg:md:w-auto"
        >
          <div
            id="headings"
            className="grid grid-cols-1 text-start md:px-10 font pl-4"
          >
            <div>
              <p className="text-[#750e5c] text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="md:text-5xl text-2xl font">
                So what is
                <p className="text-[#750e5c] inline pl-2">
                  Data Science with Python
                </p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">
                Brief about Data Science with Python
              </p>
            </div>
          </div>
        </div>
        <div id="div2" className="md:px-10">
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
                  className="hover:text-pink-700 text-black font-bold py-2 px-4 rounded"
                >
                  Previous
                </button>
                <div>{`Page ${currentSlide + 1}/${slidesData.length}`}</div>
                <button
                  onClick={goToNextSlide}
                  className="hover:text-pink-700 text-black font-bold py-2 px-4 rounded"
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

export default DataScienceWithPythonIntroduction;
