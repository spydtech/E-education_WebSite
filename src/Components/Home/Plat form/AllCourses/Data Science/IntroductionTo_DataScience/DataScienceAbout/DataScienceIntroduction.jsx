import React, { useState } from "react";

function DataScienceIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-[400px] flex justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-[#ff206e] font">
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
    <>
      <div
        id="subdiv"
        className="grid grid-cols-1 w-fit md:lg:grid-cols-2 h-full bg-gradient-to-br from-[#4e148c] to-[#613dc1]"
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
              <p className="text-[#ff206e] text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="md:text-5xl text-2xl font">
                So what is
                <p className="text-[#ff206e] inline pl-2">Data Science</p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">Brief about Data Science</p>
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

export default DataScienceIntroduction;
