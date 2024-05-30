



import React, { useState } from "react";

function DBIntro() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-[400px] flex justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-[#00509d] font-lora">
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
      heading: "Introduction to Database Management",
      items: [
        "Database management involves the use of software to store and organize data.",
        "Key Concepts: Understand the fundamental principles and benefits of database systems.",
      ],
    },
    {
      heading: "Types of Database Management Systems",
      items: [
        "Relational Database Management System (RDBMS): Uses structured query language (SQL) for data manipulation.",
        "NoSQL Database: Designed for large-scale data storage and for massively-parallel data processing across a large number of commodity servers.",
        "In-Memory Database: Stores data in the main memory rather than on disk to provide faster query responses.",
      ],
    },
    {
      heading: "Database Design and Architecture",
      items: [
        "Schema Design: The logical structure of a database, including tables, columns, and relationships.",
        "Normalization: The process of organizing data to reduce redundancy and improve data integrity.",
        "Data Warehousing: A system used for reporting and data analysis, integrating data from multiple sources.",
      ],
    },
    // Add more slides as needed
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
        className="grid grid-cols-1 w-fit md:lg:grid-cols-2 h-full bg-gradient-to-r from-rose-500 to-red-500"
      >
        <div
          id="div1"
          className="flex items-center justify-center xl:lg:md:w-auto"
        >
          <div
            id="headings"
            className="grid grid-cols-1 text-start px-10 font-lora"
          >
            <div>
              <p className="text-[#00509d] text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="text-6xl font-lora">
                Welcome to
                <p className="text-[#00509d] inline pl-2">Database Management!</p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">
                Gain insights into the foundational concepts and principles of database management.
              </p>
            </div>
          </div>
        </div>
        <div id="div2" className="px-10">
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

export default DBIntro;
