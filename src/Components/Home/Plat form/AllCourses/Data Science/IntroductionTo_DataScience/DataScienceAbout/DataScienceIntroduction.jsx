import React, { useState } from "react";

function DataScienceIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-auto flex justify-center">
          <div>
            <h2 className="text-2xl lg:text-3xl font-medium mb-4 text-white font-sans">
              {heading}
            </h2>
            <ul className="list-disc list-inside text-lg lg:text-xl">
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
      heading: "Introduction to Data Science",
      items: [
        "Data Science is an interdisciplinary field focused on extracting knowledge and insights from structured and unstructured data.",
        "Key Concepts: Understand the importance of data science in solving complex problems.",
      ],
    },
    {
      heading: "Data Science Basics",
      items: [
        "Data Collection: Learn about various methods of data collection and the importance of data quality.",
        "Data Cleaning: Understand techniques for cleaning and preprocessing data to ensure accuracy.",
      ],
    },
    {
      heading: "Data Science Tools",
      items: [
        "Programming Languages: Explore Python and R as primary tools for data science.",
        "Libraries and Frameworks: Learn about essential libraries like Pandas, NumPy, and Scikit-learn.",
      ],
    },
    {
      heading: "Data Visualization",
      items: [
        "Visualization Tools: Get introduced to tools like Matplotlib, Seaborn, and Tableau for data visualization.",
        "Effective Communication: Learn how to present data findings clearly and effectively.",
      ],
    },
    {
      heading: "Machine Learning Basics",
      items: [
        "Supervised Learning: Understand algorithms for supervised learning such as linear regression and classification.",
        "Unsupervised Learning: Learn about clustering and association techniques in unsupervised learning.",
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
    <div className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[468px] bg-white mb-20">
      <div className="flex items-center justify-center lg:pr-10">
        <div className="text-start px-4 lg:px-10">
          <div>
            <p className="text-[#f6ac14] underline-offset-2 underline text-2xl lg:text-[24px] font-bold">
              Introduction
            </p>
          </div>
          <div className="py-5">
            <p className="text-xl lg:text-5xl font">
              So what is
              <span className="text-[#f6ac14] inline pl-2">Data Science</span>
            </p>
          </div>
          <div>
            <p className="text-lg lg:text-xl text-gray-500">
              Brief about Data Science
            </p>
          </div>
        </div>
      </div>
      <div className="h-auto lg:h-[468px] flex justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 lg:mt-0">
          <div className="bg-[#0098f1] w-full lg:w-[550px] h-auto lg:h-[420px] p-5 mt-10 mb-2 shadow-xl sm:rounded-lg">
            <div className="relative w-full">
              <div className="flex text-white text-opacity-80">
                <Slide
                  heading={slidesData[currentSlide].heading}
                  items={slidesData[currentSlide].items}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4 lg:mt-0">
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
  );
}

export default DataScienceIntroduction;
