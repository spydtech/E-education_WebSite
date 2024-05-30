import React, { useState } from "react";

function AcceptanceTestingKeyHighlights() {
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
            <ul className="space-y-2 pt-4 font-normal text-[16px] list-disc pl-16  bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium text-green-500 py-4">
                Overview
              </p>
              <li>Ensures systems meet specified requirements.</li>
              <li>Validates that the system is ready for delivery.</li>
              <li>Key part of software development lifecycle.</li>
              <li>Focuses on meeting business needs.</li>
              <li>Involves stakeholders in the testing process.</li>
              <li>Includes both manual and automated testing.</li>
            </ul>
          </>
        );
      case 1:
        return (
          <>
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium text-green-500 py-4">
                Key Concepts
              </p>
              <li>User Acceptance Testing (UAT)</li>
              <li>Operational Acceptance Testing (OAT)</li>
              <li>Contract Acceptance Testing</li>
              <li>Regulation Acceptance Testing</li>
              <li>Alpha and Beta Testing</li>
              <li>Test Cases and Test Plans</li>
              <li>Defect Tracking and Management</li>
            </ul>
          </>
        );
      case 2:
        return (
          <>
            {" "}
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium  text-green-500">
                Applications
              </p>
              <li>Verifying software meets business requirements</li>
              <li>Ensuring readiness for production</li>
              <li>Facilitating stakeholder approval</li>
              <li>Detecting and fixing defects</li>
              <li>Validating end-to-end business flows</li>
              <li>Improving software quality and reliability</li>
              <li>Mitigating risks associated with software deployment</li>
            </ul>
          </>
        );
      case 3:
        return (
          <>
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium  text-green-500">
                Skills Developed
              </p>
              <li>Understanding of testing methodologies</li>
              <li>Ability to create and execute test cases</li>
              <li>Proficiency in defect tracking</li>
              <li>Experience with testing tools</li>
              <li>Analytical and problem-solving skills</li>
              <li>Communication and stakeholder management</li>
              <li>Knowledge of software development lifecycle</li>
              <li>Ability to work in Agile and DevOps environments</li>
            </ul>
          </>
        );
      case 4:
        return (
          <>
            {" "}
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium  text-green-500">
                Target Audience
              </p>
              <li>Quality Assurance Professionals</li>
              <li>Software Testers</li>
              <li>Business Analysts</li>
              <li>Project Managers</li>
              <li>Developers transitioning to testing roles</li>
              <li>Anyone involved in software delivery</li>
              <li>Stakeholders in software projects</li>
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
        className=" md:lg:xl:px-20  bg-gradient-to-br  from-[#560bad] to-[#3a0ca3]"
      >
        <div id="subdiv1" className="pt-4 font-lora">
          <div id="h1" className="">
            <p className="md:lg:w-auto w-96 font-semibold text-xl p-2 text-[#31cb00]">
              Acceptance Testing Course Highlights
            </p>
          </div>
          <div
            id="h2"
            className="md:lg:flex pl-2 space-x-3 md:lg:w-auto lg:md:h-auto w-96  h-auto"
          >
            <p className="text-5xl font-bold ">What does this</p>
            <p className="text-5xl font-bold text-[#31cb00] inline">
              Course have to offer?
            </p>
          </div>
        </div>
        <div
          id="subdiv2"
          className="justify-between grid  grid-cols-1 lg:md:grid-cols-2"
        >
          {/* content start*/}
          <div id="content1" className="">
            {data.map((item, index) => (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`hover:text-green-500 p-5 text-start hover:cursor-pointer text-xl font-medium my-6 mx-4 h-16 w-80 lg:md:h-16 lg:md:w-[400px] flex items-center border-2 border-opacity-15 rounded-md overflow-hidden  transition-transform duration-300 transform hover:scale-105 ${
                  selectedItem === index
                    ? "bg-[#31cb00]  text-white hover:text-white border-none"
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

export default AcceptanceTestingKeyHighlights;
