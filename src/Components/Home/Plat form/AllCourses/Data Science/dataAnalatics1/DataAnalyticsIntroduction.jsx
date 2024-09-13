import React, { useState } from "react";

function DataAnalyticsIntroduction() {
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
            className="hover:text-white text-black font-bold rounded px-4"
          >
            Previous
          </button>
          <div className="text-black">{`Page ${currentSlide + 1}/${slidesData.length}`}</div>
          <button
            onClick={goToNextSlide}
            className="hover:text-white text-black font-bold rounded px-4"
          >
            Next
          </button>
        </div>
      </div>
    );
  };

  const slidesData = [
    {
      heading: "Introduction",
      items: [
        "Data analytics is the process of examining large datasets to uncover patterns, correlations, trends, and other useful insights. It involves various techniques and tools to analyze raw data, interpret findings, and make informed decisions. Data analytics encompasses several subfields and methodologies,",
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
        "Data Visualization Techniques: Showcase different visualization techniques such as histograms, scatter plots, etc.,to understand data patterns.",
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full h-auto mb-16">
      <div className="flex items-center justify-center">
        <div className="text-start px-4 lg:px-10">
          <div>
            <p className="text-[#0098f1] underline-offset-2 underline text-2xl lg:text-[30px] font-bold">
              Introduction
            </p>
          </div>
          <div className="py-5">
            <p className="text-xl lg:text-5xl font">
              So what is
              <span className="text-[#f6ac14] inline pl-2">
              Data Analytics
              </span>
            </p>
          </div>
          <div>
            <p className="text-lg lg:text-xl text-gray-500">
            Brief about Data Analytics
            </p>
          </div>
        </div>
      </div>
      <div className="h-auto lg:h-[600px] flex justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-4 lg:px-14 xl:px-36 sm:mt-8 lg:mt-0 lg:mr-32">
          <div className="bg-[#0098f1] relative w-full lg:w-[500px] lg:h-[500px] md:h-[360px] sm:h-[450px] h-[450px] p-5 mt-10 mb-2 shadow-xl sm:rounded-lg">
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

export default DataAnalyticsIntroduction;
