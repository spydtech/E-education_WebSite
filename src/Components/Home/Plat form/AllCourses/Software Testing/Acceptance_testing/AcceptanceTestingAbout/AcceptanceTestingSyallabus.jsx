import React from "react";

function AcceptanceTestingSyllabus() {
  const data = [
    {
      heading: "Introduction to Acceptance Testing",
      subheading: "Topics (16)",
      items: [
        "Overview of Acceptance Testing",
        "Types of Acceptance Testing",
        "Acceptance Testing Tools",
        "Acceptance Criteria",
        "User Acceptance Testing (UAT)",
        "Operational Acceptance Testing (OAT)",
        "Contract Acceptance Testing",
        "Regulation Acceptance Testing",
        "Alpha Testing",
        "Beta Testing",
        "Writing Effective Test Cases",
        "Creating Test Plans",
        "Defect Tracking and Management",
        "Acceptance Testing in Agile",
        "Best Practices for Acceptance Testing",
        "Acceptance Testing Case Studies",
      ],
    },
  ];

  return (
    <>
       <div className=" py-8">
    <div className="flex flex-col lg:flex-row items-center justify-between px-4">
      <div className="lg:w-1/2 w-full mb-8 lg:mb-0 px-10">
        <div className="text-start">
          <h2 className="text-2xl  text-[#f6ac14] font-bold mb-4">
            Discover What You Will Learn
          </h2>
          <p className="text-lg text-gray-500 ">
            Top-notch and up-to-date curriculum taught by renowned professors
            and industry experts using videos, case studies, hands-on
            projects, and live sessions.
          </p>
        </div>
      </div>
      <div className="lg:w-[700px] w-full bg-[#0098f1] p-6 pl-20 rounded-lg ">
        <div className="container mx-auto">
          {data.map((category, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-3xl  font-semibold mb-2 text-[#ffffff]">
                {category.heading}
              </h3>
              <h4 className="text-xl md:text-2xl font-medium mb-2">
                {category.subheading}
              </h4>
              <ul className="list-disc ml-4 text-base md:text-lg text-[#ffffff] text-opacity-80">
                {category.items.map((item, idx) => (
                  <li key={idx} className="mb-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
    </>
  );
}

export default AcceptanceTestingSyllabus;
