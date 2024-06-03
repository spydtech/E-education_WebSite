import React, { useState } from "react";

function PowerBiIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-[400px] flex justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-[#072ac8] font-lora">
              {heading}
            </h2>
            <ul className="list-disc list-inside text-xl font-lora">
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
    <>
      <div className="grid grid-cols-1 w-fit md:grid-cols-2 h-full bg-gradient-to-br from-[#04e761] to-[#00916e]">
        <div className="flex items-center justify-center xl:w-auto">
          <div className="grid grid-cols-1 text-start px-10 font-lora">
            <div>
              <p className="text-[#072ac8] text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="text-6xl font-lora">
                So what is
                <span className="text-[#072ac8] inline pl-2">Power BI?</span>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">
                Brief overview of Power BI and its capabilities
              </p>
            </div>
          </div>
        </div>
        <div className="px-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            <div className="bg-white p-5 mb-2 overflow-hidden shadow-xl sm:rounded-lg">
              <div className="relative w-full overflow-hidden">
                <Slide
                  heading={slidesData[currentSlide].heading}
                  items={slidesData[currentSlide].items}
                />
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

export default PowerBiIntroduction;
