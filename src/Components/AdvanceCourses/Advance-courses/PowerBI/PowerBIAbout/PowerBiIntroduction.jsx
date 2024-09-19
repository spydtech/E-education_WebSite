import React, { useState } from "react";

function PowerBiIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-2 py-8 flex flex-col h-full relative overflow-hidden"> {/* Added overflow-hidden */}
        <div className="flex-grow"> {/* Removed overflow-y-auto */}
          <h2 className="text-2xl lg:text-3xl font-medium mb-4 text-white font-sans">
            {heading}
          </h2>
          <ul className="list-disc list-outside text-lg lg:text-xl pl-10 text-start text-white">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="absolute left-0 right-0 bottom-0 flex justify-between  ">
          <button
            onClick={goToPreviousSlide}
            className="hover:text-[#f6ac14] text-white font-bold rounded"
          >
            Previous
          </button>
          <div className="text-white">{`Page ${currentSlide + 1}/${slidesData.length}`}</div>
          <button
            onClick={goToNextSlide}
            className="hover:text-[#f6ac14] text-white font-bold rounded"
          >
            Next
          </button>
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-auto overflow-x-hidden h-auto mb-16">
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
      <div className="h-auto lg:h-[600px] flex justify-center ">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-4 lg:px-14 xl:px-36  sm:mt-8 lg:mt-0 lg:mr-32">
          <div className="bg-[#0098f1] relative w-full lg:w-[500px]  lg:h-[560px] md:h-[400px] sm:h-[460px] h-[650px] p-5 mt-10 mb-2 shadow-xl sm:rounded-lg"> {/* Set fixed width and height */}
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

export default PowerBiIntroduction;
