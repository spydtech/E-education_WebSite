import React from "react";

function IntegrationSyllabus() {
  const data = [
    {
      heading: "Introduction to Integration Testing",
      subheading: "Topics (12)",
      items: [
        "Overview of Integration Testing",
        "Importance of Integration Testing",
        "Types of Integration Testing (Big Bang, Incremental)",
        "Top-Down Integration Testing",
        "Bottom-Up Integration Testing",
        "Sandwich Integration Testing",
        "Stubs and Drivers in Integration Testing",
        "Integration Testing Tools and Frameworks",
        "Automated Integration Testing",
        "Challenges in Integration Testing",
        "Best Practices for Effective Integration Testing",
        "Case Studies and Real-World Examples",
      ],
    },
  ];

  return (
    <>
      <div
        id="subdiv"
        className="grid grid-cols-1 md:lg:grid-cols-2 gap-x-6 bg-gradient-to-r from-blue-600 to-blue-600 mb-12"
      >
        <div
          id="div1"
          className="flex items-center justify-center xl:lg:md:w-auto"
        >
          <div id="headings" className="grid grid-cols-1 text-start pl-4">
            <div>
              <p className="text-[#f9ac13] text-xl font-medium">Syllabus</p>
            </div>
            <div className="py-5">
              <p className="md:text-5xl text-2xl font">
                Discover What You
                <span className="text-[#f9ac13] inline pl-2">Will Learn</span>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-300">
                Dive into the comprehensive curriculum covering key concepts,
                practical applications, and advanced topics in integration
                testing.
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
                <h2 className="text-4xl font-semibold mb-2 text-[#f9ac13]">
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

export default IntegrationSyllabus;
