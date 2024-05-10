import React, { useState } from "react";
// DataAnalyticsIntroduction
function DataAnalyticsIntroduction() {
  // const recruiters = [amazon, spotify, google, flipkart, uber, microsoft];
  const [currentSlide, setCurrentSlide] = useState(0);
  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4">
        <div className=" h-[400px] flex  justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-pink-600">
              {heading}
            </h2>
            <ul className="list-disc list-inside text-xl">
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
    <>
      <div
        id="subdiv"
        className="grid grid-cols-1 md:lg:grid-cols-2 gap-x-6 h-[530px] md:mb-20"
      >
        <div
          id="div1"
          className="  flex items-center justify-center   xl:lg:md:w-auto "
        >
          <div id="headings" className="grid grid-cols-1 text-start px-20">
            <div>
              {" "}
              <p className="text-pink-800 text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="text-6xl font-lora ">
                So what is
                <p className="text-violet-800 inline pl-2">Data Analytics</p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">
                Brief about Data Analytics
              </p>
            </div>
          </div>
        </div>
        <div id="div2" className=" px-10   ">
          {/*  */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 ">
            <div className="bg-white p-5 mb-2 overflow-hidden shadow-xl sm:rounded-lg">
              <div className="relative w-full overflow-hidden">
                <div className="flex">
                  <Slide
                    heading={slidesData[currentSlide].heading}
                    items={slidesData[currentSlide].items}
                  />
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={goToPreviousSlide}
                  className=" hover:text-pink-700  text-black font-bold py-2 px-4 rounded"
                >
                  Previous
                </button>
                <div>{`Page ${currentSlide + 1}/${slidesData.length}`}</div>
                <button
                  onClick={goToNextSlide}
                  className=" hover:text-pink-700 text-black font-bold py-2 px-4 rounded"
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

export default DataAnalyticsIntroduction;
