import React, { useState } from "react";

function PowerBiIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-2 py-8">
        <div className="h-auto flex flex-col justify-center">
          <div>
            <h2 className="text-2xl lg:text-3xl font-medium mb-2 text-white font-sans">
              {heading}
            </h2>
            <ul className="list-disc list-inside text-lg lg:text-xl pl-6">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between mt-8 pt-10 lg:mt-0">
            <button
              onClick={goToPreviousSlide}
              className="hover:text-pink-700 text-white font-bold px-4 rounded"
            >
              Previous
            </button>
            <div className="text-white">{`Page ${currentSlide + 1}/${slidesData.length}`}</div>
            <button
              onClick={goToNextSlide}
              className="hover:text-pink-700 text-white font-bold px-4 rounded"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  };

  const slidesData = [
    {
      heading: "Introduction to Power BI",
      items: [
        "Power BI is a business analytics tool by Microsoft that provides interactive visualizations and business intelligence capabilities with an interface simple enough for end users to create their own reports and dashboards.",
        "It connects to a wide range of data sources and helps organizations make data-driven decisions.",
      ],
    },
    {
      heading: "Benefits of Power BI",
      items: [
        "Interactive Visualizations: Create visually appealing reports and dashboards.",
        "Data Connectivity: Connect to various data sources including Excel, SQL Server, and cloud-based sources.",
        "Real-Time Insights: Get real-time data insights with up-to-date information.",
        "User-Friendly: Easy-to-use interface for both technical and non-technical users.",
      ],
    },
    {
      heading: "Power BI Components",
      items: [
        "Power BI Desktop: A development tool for creating reports.",
        "Power BI Service: An online SaaS service for publishing and sharing reports.",
        "Power BI Mobile: Mobile apps for viewing reports on the go.",
        "Power BI Gateway: Bridges on-premises data with Power BI Service.",
        "Power BI Report Server: An on-premises report server for hosting Power BI reports.",
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
    <div className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[468px] bg-white mb-16">
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
              <span className="text-[#f6ac14] inline pl-2">Power BI</span>
            </p>
          </div>
          <div>
            <p className="text-lg lg:text-xl text-gray-500">
              Brief overview of Power BI and its capabilities
            </p>
          </div>
        </div>
      </div>
      <div className="h-auto lg:h-[468px] flex justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-4 lg:px-10 mt-10 lg:mt-0">
          <div className="bg-[#0098f1] w-full lg:w-auto h-auto lg:h-auto p-5 mt-4 mb-2 shadow-xl sm:rounded-lg">
            <div className="relative w-full">
              <div className="flex text-white text-opacity-80">
                <Slide
                  heading={slidesData[currentSlide].heading}
                  items={slidesData[currentSlide].items}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PowerBiIntroduction;
