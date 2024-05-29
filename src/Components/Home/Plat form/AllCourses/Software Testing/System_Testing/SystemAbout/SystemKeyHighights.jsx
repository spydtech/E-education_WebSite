import React, { useState } from "react";

function SystemTestingKeyHighlights() {
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
              <li>Introduction to system testing and its importance.</li>
              <li>Validating the complete and integrated software product.</li>
              <li>
                Types of system testing: Functional, Performance, Security, and
                Usability testing.
              </li>
              <li>
                Role of system testing in ensuring software quality and
                robustness.
              </li>
              <li>Tools and technologies used in system testing.</li>
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
              <li>
                Functional Testing: Ensuring the software functions as expected.
              </li>
              <li>
                Performance Testing: Evaluating software performance under
                various conditions.
              </li>
              <li>
                Security Testing: Identifying vulnerabilities and security
                flaws.
              </li>
              <li>
                Usability Testing: Assessing the software's user-friendliness.
              </li>
              <li>
                Automated vs. Manual testing: Understanding the differences and
                when to use each.
              </li>
            </ul>
          </>
        );
      case 2:
        return (
          <>
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium text-orange-600">
                Applications
              </p>
              <li>Quality Assurance (QA) Engineer</li>
              <li>Test Automation Engineer</li>
              <li>System Test Engineer</li>
              <li>Performance Test Engineer</li>
              <li>Security Test Engineer</li>
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
              <li>
                Proficiency in functional, performance, and security testing
                techniques.
              </li>
              <li>
                Understanding of different testing methodologies and tools.
              </li>
              <li>
                Ability to use testing tools like Selenium, JMeter, and
                LoadRunner.
              </li>
              <li>Knowledge of security testing tools and techniques.</li>
              <li>Ability to identify, report, and track issues.</li>
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
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium text-orange-600">
                Target Audience
              </p>
              <li>
                Software Developers looking to enhance system testing skills.
              </li>
              <li>Individuals aspiring to become QA Engineers.</li>
              <li>
                Professionals interested in functional, performance, and
                security testing.
              </li>
              <li>
                IT professionals looking to transition into a testing role.
              </li>
              <li>
                Students pursuing a career in software development or testing.
              </li>
              <li>
                Project managers aiming to understand system testing processes
                better.
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
        className="md:lg:xl:px-20 bg-gradient-to-r from-rose-500 to-red-500 mb-12"
      >
        <div id="subdiv1" className="pt-4">
          <div id="h1" className="">
            <p className="md:lg:w-auto w-96 font-semibold text-xl p-2 text-[#f9ac13]">
              System Testing Course Highlights
            </p>
          </div>
          <div
            id="h2"
            className="md:lg:flex pl-2 space-x-3 md:lg:w-auto lg:md:h-auto w-96 h-auto"
          >
            <p className="text-5xl font-bold">What does this</p>
            <p className="text-5xl font-bold text-[#f9ac13] inline">
              Course have to offer?
            </p>
          </div>
        </div>
        <div
          id="subdiv2"
          className="justify-between grid grid-cols-1 lg:md:grid-cols-2"
        >
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
        </div>
      </div>
    </>
  );
}

export default SystemTestingKeyHighlights;
