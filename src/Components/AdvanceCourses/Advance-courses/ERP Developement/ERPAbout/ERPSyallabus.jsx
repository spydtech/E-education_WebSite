import React from "react";

function ERPSyllabus() {
  const data = [
    {
      heading: "Introduction to ERP Systems",
      subheading: "Topics (12)",
      items: [
        "Overview of ERP Systems",
        "ERP System Architecture",
        "Core Modules of ERP Systems",
        "ERP Implementation Strategies",
        "Financial Management in ERP",
        "Human Resource Management in ERP",
        "Supply Chain Management in ERP",
        "Customer Relationship Management (CRM) in ERP",
        "Production and Manufacturing Management",
        "ERP Project Management",
        "Data Migration and Integration",
        "ERP Best Practices and Future Trends",
      ],
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:lg:grid-cols-2 gap-x-6 bg-gradient-to-br to-[#0a0908] from-[#272640]">
        <div className="flex items-center justify-center xl:w-auto">
          <div className="grid grid-cols-1 text-start px-20">
            <div>
              <p className="text-[#072ac8] text-xl font-medium">Syllabus</p>
            </div>
            <div className="py-5">
              <p className="text-6xl font text-white">
                Discover What You
                <span className="text-[#072ac8] inline pl-2">Will Learn</span>
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
        <div className="px-10">
          <div className="space-y-5 flex justify-center p-4 my-2 mx-2 mb-2 border-2 border-opacity-15 rounded overflow-hidden bg-gray-200 shadow-2xl">
            <div className="container mx-auto">
              {data.map((category, index) => (
                <div key={index} className="mb-6">
                  <h2 className="text-4xl font-semibold mb-2 text-[#072ac8]">
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
      </div>
    </>
  );
}

export default ERPSyllabus;
