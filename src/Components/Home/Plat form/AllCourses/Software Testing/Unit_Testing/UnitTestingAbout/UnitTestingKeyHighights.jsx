import React, { useState } from "react";

function UnitTestingKeyHighlights() {
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
            <ul className="space-y-2 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl mb-12">
              <p className="text-2xl font-medium text-orange-600 py-4">
                Overview
              </p>
              <li>Introduction to software testing and its importance.</li>
              <li>Understanding the software development lifecycle (SDLC).</li>
              <li>Different types of software testing methodologies.</li>
              <li>Role of a software tester in the development process.</li>
              <li>Overview of automated vs manual testing.</li>
              <li>Key testing tools and technologies.</li>
            </ul>
          </>
        );
      case 1:
        return (
          <>
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium text-orange-600 py-4">
                Key Concepts
              </p>
              <li>Unit Testing: Testing individual components or modules.</li>
              <li>
                Integration Testing: Ensuring that combined components work
                together.
              </li>
              <li>System Testing: Testing the entire system as a whole.</li>
              <li>
                Acceptance Testing: Verifying the system meets user
                requirements.
              </li>
              <li>
                Performance Testing: Assessing the speed, responsiveness, and
                stability under load.
              </li>
              <li>
                Regression Testing: Ensuring new changes don't negatively affect
                existing functionality.
              </li>
              <li>Black Box vs White Box Testing.</li>
            </ul>
          </>
        );
      case 2:
        return (
          <>
            {" "}
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium text-orange-600">
                Applications
              </p>
              <li>Quality Assurance (QA) Engineer</li>
              <li>Test Automation Engineer</li>
              <li>Performance Test Engineer</li>
              <li>Security Test Engineer</li>
              <li>Test Manager</li>
              <li>QA Consultant</li>
              <li>Software Development Engineer in Test (SDET)</li>
              <li>Functional Tester</li>
            </ul>
          </>
        );
      case 3:
        return (
          <>
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium text-orange-600">
                Skills Developed
              </p>
              <li>Proficiency in writing and executing test cases.</li>
              <li>Understanding of various testing methodologies and tools.</li>
              <li>
                Ability to automate test scripts using tools like Selenium,
                JUnit, etc.
              </li>
              <li>Knowledge of performance testing tools like JMeter.</li>
              <li>Ability to identify, report, and track software defects.</li>
              <li>Strong analytical and problem-solving skills.</li>
              <li>Experience with version control systems like Git.</li>
              <li>
                Understanding of continuous integration and deployment (CI/CD).
              </li>
            </ul>
          </>
        );
      case 4:
        return (
          <>
            {" "}
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium text-orange-600">
                Target Audience
              </p>
              <li>Software Developers looking to enhance testing skills.</li>
              <li>Individuals aspiring to become QA Engineers.</li>
              <li>Professionals interested in test automation.</li>
              <li>
                IT professionals looking to transition into a testing role.
              </li>
              <li>
                Students pursuing a career in software development or testing.
              </li>
              <li>
                Project managers aiming to understand testing processes better.
              </li>
              <li>
                Business analysts interested in the quality assurance aspects of
                projects.
              </li>
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
        className="md:lg:xl:px-20 bg-gradient-to-br from-[#0077b6] to-[#03045e] mb-12"
      >
        <div id="subdiv1" className="pt-4">
          <div id="h1" className="">
            <p className="md:lg:w-auto w-96 font-semibold text-xl p-2 text-[#f9ac13]">
              Software Testing Course Highlights
            </p>
          </div>
          <div
            id="h2"
            className="md:lg:flex pl-2 space-x-3 md:lg:w-auto lg:md:h-auto w-96 h-auto"
          >
            <p className="md:text-5xl text-2xl font-bold">What does this</p>
            <p className="md:text-5xl text-2xl font-bold text-[#f9ac13] inline">
              Course have to offer?
            </p>
          </div>
        </div>
        <div
          id="subdiv2"
          className="justify-between grid grid-cols-1 lg:md:grid-cols-2"
        >
          {/* content start */}
          <div id="content1" className="">
            {data.map((item, index) => (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`hover:text-yellow-500 p-5 text-start hover:cursor-pointer text-xl font-medium my-6 mx-4 h-16 w-80 lg:md:h-16 lg:md:w-[400px] flex items-center border-2 border-opacity-15 rounded-md overflow-hidden transition-transform duration-300 transform hover:scale-105 ${
                  selectedItem === index
                    ? "bg-[#f9ac13] text-white hover:text-white border-none"
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

export default UnitTestingKeyHighlights;
