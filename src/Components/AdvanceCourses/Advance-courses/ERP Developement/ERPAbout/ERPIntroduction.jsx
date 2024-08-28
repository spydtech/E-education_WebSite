import React, { useState } from "react";

function ERPIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-2 py-8 flex flex-col h-full relative overflow-hidden">
        <div className="flex-grow pb-28 ">
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
      heading: "Introduction to ERP",
      items: [
        "ERP (Enterprise Resource Planning) is a type of software used by organizations to manage day-to-day business activities such as accounting, procurement, project management, and manufacturing.",
        "An ERP system integrates various functions into one complete system to streamline processes and information across the organization.",
      ],
    },
    {
      heading: "Benefits of ERP Systems",
      items: [
        "Improved Efficiency: Automates repetitive tasks and streamlines business processes.",
        "Enhanced Visibility: Provides real-time data access and reporting capabilities.",
        "Better Collaboration: Centralized data facilitates better communication and collaboration among departments.",
        "Scalability: Can grow and adapt with the business, adding new functionalities as needed.",
      ],
    },
    {
      heading: "Key Features of ERP Systems",
      items: [
        "Financial Management: General ledger, accounts payable, accounts receivable, and fixed assets management.",
        "Human Resources: Payroll, time tracking, and employee data management.",
        "Supply Chain Management: Inventory, procurement, and logistics management.",
        "Customer Relationship Management (CRM): Sales, customer service, and marketing automation.",
        "Manufacturing: Production planning, scheduling, and quality control.",
        "Project Management: Planning, execution, and monitoring of projects.",
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-screen h-auto mb-16">
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
              <span className="text-[#f6ac14] inline pl-2">ERP?</span>
            </p>
          </div>
          <div>
            <p className="text-lg lg:text-xl text-gray-500">
              Brief overview of ERP systems and their benefits
            </p>
          </div>
        </div>
      </div>
      <div className="h-auto lg:h-[650px] flex justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-4 lg:px-14 xl:px-36 sm:mt-8 lg:mt-0 lg:mr-32">
          <div className="bg-[#0098f1] relative w-full lg:w-[500px] lg:h-[620px] md:h-[400px] sm:h-[450px] h-[760px] p-5 mt-10 mb-2 shadow-xl sm:rounded-lg ">
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

export default ERPIntroduction;
