import React, { useState } from "react";

function ERPIntroduction() {
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
    <>
      <div className="grid grid-cols-1 w-fit md:grid-cols-2 h-full bg-gradient-to-br to-[#0a0908] from-[#272640]">
        <div className="flex items-center justify-center xl:w-auto">
          <div className="grid grid-cols-1 text-start px-10 font-lora">
            <div>
              <p className="text-[#072ac8] text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="text-6xl font-lor text-white">
                So what is
                <span className="text-[#072ac8] inline pl-2">ERP?</span>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">
                Brief overview of ERP systems and their benefits
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

export default ERPIntroduction;
