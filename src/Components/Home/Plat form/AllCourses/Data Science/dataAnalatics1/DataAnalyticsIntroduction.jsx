import React, { useState } from "react";

function DataAnalyticsIntroduction() {
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
      heading: "Introduction",
      items: [
        "Data analytics is the process of examining large datasets to uncover patterns, correlations, trends, and other useful insights. It involves various techniques and tools to analyze raw data, interpret findings, and make informed decisions. Data analytics encompasses several subfields and methodologies.",
      ],
    },
    {
      heading: "Basics of Data Analytics",
      items: [
        "What is Data?: Define data and distinguish between structured and unstructured data.",
        "Types of Data Analytics: Introduce descriptive analytics (what happened), predictive analytics (what might happen), and prescriptive analytics (what should happen).",
      ],
    },
    {
      heading: "Tools and Technologies",
      items: [
        "Popular Data Analytics Tools: Provide an overview of commonly used tools like Python, R, SQL for data analysis, and Tableau, Power BI for visualization.",
        "Introduction to Machine Learning: Briefly introduce the concept of machine learning and its role in data analytics.",
      ],
    },
    {
      heading: "Data Collection and Preparation",
      items: [
        "Data Collection Methods: Explain various methods of data collection including surveys, interviews, sensors, etc.",
        "Data Cleaning and Preprocessing: Discuss the importance of cleaning and preprocessing data to ensure its quality and reliability",
      ],
    },
    {
      heading: "Exploratory Data Analysis (EDA)",
      items: [
        "Understanding the Dataset: Explain the initial steps involved in exploring and understanding the dataset.",
        "Basic Statistical Analysis: Introduce basic statistical techniques like mean, median, standard deviation, etc., used in EDA.",
        "Data Visualization Techniques: Showcase different visualization techniques such as histograms, scatter plots, etc., to understand data patterns.",
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
              <span className="text-[#f6ac14] inline pl-2">Data Analytics</span>
            </p>
          </div>
          <div>
            <p className="text-lg lg:text-xl text-gray-500">
              Brief about Data Analytics
            </p>
          </div>
        </div>
      </div>
      <div className="h-auto lg:h-[468px] flex justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 lg:mt-0">
          <div className="bg-[#0098f1] w-full lg:w-[550px] h-auto lg:h-[420px] p-5 mt-10 mb-2 shadow-xl sm:rounded-lg relative">
            <div className="flex text-white text-opacity-80">
              <Slide
                heading={slidesData[currentSlide].heading}
                items={slidesData[currentSlide].items}
              />
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-between w-full px-4">
              <button
                onClick={goToPreviousSlide}
                className="hover:text-[#F6AC14] text-white font-bold rounded"
              >
                Previous
              </button>
              <div className="text-white">{`Page ${currentSlide + 1}/${slidesData.length}`}</div>
              <button
                onClick={goToNextSlide}
                className="hover:text-[#F6AC14] text-white font-bold py-2 px-4 rounded"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataAnalyticsIntroduction;
