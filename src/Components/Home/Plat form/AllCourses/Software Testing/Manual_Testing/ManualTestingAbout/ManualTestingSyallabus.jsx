import React from "react";

function ManualTestingSyllabus() {
  const data = [
    {
      heading: "Introduction to Manual Testing",
      subheading: "Topics (16)",
      items: [
        "Overview of Manual Testing",
        "Importance of Manual Testing",
        "Manual Testing Tools",
        "Manual Testing Metrics",
        "Test Planning and Strategy",
        "Test Case Development",
        "Test Execution",
        "Defect Reporting and Tracking",
        "Exploratory Testing",
        "Usability Testing",
        "Regression Testing",
        "Boundary Value Analysis",
        "Equivalence Partitioning",
        "Manual Testing Best Practices",
        "Manual Testing in Agile",
        "Manual Testing Case Studies",
      ],
    },
  ];

  return (
    <>
      <div
        id="subdiv"
        className="grid grid-cols-1 md:lg:grid-cols-2 gap-x-6 bg-gradient-to-br  from-[#0077b6] to-[#00b4d8]"
      >
        <div
          id="div1"
          className="flex items-center justify-center xl:lg:md:w-auto"
        >
          <div id="headings" className="grid grid-cols-1 text-start pl-4">
            <div>
              <p className="text-[#fca311] text-xl font-medium">Syllabus</p>
            </div>
            <div className="py-5">
              <p className="md:text-5xl text-2xl font-lora">
                Discover What You
                <p className="text-[#fca311] inline pl-2">Will Learn</p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-300">
                Top-notch and up-to-date curriculum taught by renowned
                professors and industry experts using videos, case studies,
                hands-on projects, and live sessions.
              </p>
            </div>
          </div>
        </div>
        <div
          id="div2"
          className="space-y-5 flex justify-center px-10 p-4 my-2 mx-2 mb-2 border-2 border-opacity-15 rounded overflow-hidden bg-gray-200 shadow-2xl"
        >
          <div className="container mx-auto">
            {data.map((category, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-4xl font-semibold mb-2 text-[#fca311]">
                  {category.heading}
                </h2>
                <h3 className="text-2xl font-medium mb-2">
                  {category.subheading}
                </h3>
                <ul className="list-disc ml-6 text-[16px]">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ManualTestingSyllabus;
