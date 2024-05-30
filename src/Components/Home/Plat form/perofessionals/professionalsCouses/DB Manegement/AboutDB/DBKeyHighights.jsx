

import React, { useState } from "react";

function DBKeyHighights() {
  const [selectedItem, setSelectedItem] = useState(0);

  const data = [
    { label: "Overview" },
    { label: "Key Concepts" },
    { label: "Applications" },
    { label: "Skills Developed" },
    { label: "Target Audience" },
  ];

  const handleClick = (index) => {
    setSelectedItem(index);
  };

  const renderContent = () => {
    switch (selectedItem) {
      case 0:
        return (
          <>
            <ul className="space-y-2 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium text-blue-500 py-4">Overview</p>
              <li>Introduction to database management systems (DBMS)</li>
              <li>Importance and benefits of effective database management</li>
              <li>Overview of different types of database systems</li>
              <li>Real-world applications of database management</li>
            </ul>
          </>
        );
      case 1:
        return (
          <>
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium text-blue-500 py-4">
                Key Concepts
              </p>
              <li>Relational Database Management Systems (RDBMS)</li>
              <li>NoSQL Databases</li>
              <li>Data Modeling and Database Design</li>
              <li>SQL and Query Optimization</li>
              <li>Database Security and Integrity</li>
            </ul>
          </>
        );
      case 2:
        return (
          <>
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium text-blue-500">
                Applications
              </p>
              <li>Data Warehousing and Business Intelligence</li>
              <li>Web and Mobile Application Databases</li>
              <li>Big Data Analytics</li>
              <li>Enterprise Resource Planning (ERP) Systems</li>
              <li>Customer Relationship Management (CRM) Systems</li>
            </ul>
          </>
        );
      case 3:
        return (
          <>
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium text-blue-500">
                Skills Developed
              </p>
              <li>Proficiency in SQL and database querying</li>
              <li>Ability to design and normalize database schemas</li>
              <li>Understanding of database management and optimization</li>
              <li>Experience with NoSQL databases</li>
              <li>Knowledge of database security best practices</li>
            </ul>
          </>
        );
      case 4:
        return (
          <>
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium text-blue-500">
                Target Audience
              </p>
              <li>Database Administrators and Managers</li>
              <li>Software Developers and Engineers</li>
              <li>Data Analysts and Scientists</li>
              <li>IT Professionals and System Administrators</li>
              <li>Students and Aspiring Database Professionals</li>
            </ul>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div
        id="main"
        className="md:lg:xl:px-20 bg-gradient-to-r from-rose-500 to-red-500"
      >
        <div id="subdiv1" className="pt-4 font-lora">
          <div id="h1" className="">
            <p className="md:lg:w-auto w-96 font-semibold text-xl p-2 text-[#00509d]">
              Course Highlights
            </p>
          </div>
          <div
            id="h2"
            className="md:lg:flex pl-2 space-x-3 md:lg:w-auto lg:md:h-auto w-96 h-auto"
          >
            <p className="text-5xl font-bold">What does this</p>
            <p className="text-5xl font-bold text-[#00509d] inline">
              Course have to offer?
            </p>
          </div>
        </div>
        <div
          id="subdiv2"
          className="justify-between grid grid-cols-1 lg:md:grid-cols-2"
        >
          {/* content start*/}
          <div id="content1">
            {data.map((item, index) => (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`hover:text-blue-500 p-5 text-start hover:cursor-pointer text-xl font-medium my-6 mx-4 h-16 w-80 lg:md:h-16 lg:md:w-[400px] flex items-center border-2 border-opacity-15 rounded-md overflow-hidden transition-transform duration-300 transform hover:scale-105 ${
                  selectedItem === index
                    ? "bg-[#00509d] text-white hover:text-white border-none"
                    : ""
                }`}
              >
                <p>{item.label}</p>
              </div>
            ))}
          </div>
          <div
            id="content2"
            className="md:lg:w-auto md:lg:h-auto md:lg:xl:w-[400px] h-auto pt-4 md:lg:xl:pl-4 text-xl"
          >
            {renderContent()}
          </div>
          {/* content end */}
        </div>
      </div>
    </>
  );
}

export default DBKeyHighights;
