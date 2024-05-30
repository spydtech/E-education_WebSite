import React from "react";

function BasicPhpSyllabus() {
  const data = [
    {
      heading: "Introduction to Basic PHP",
      subheading: "Topics (16)",
      items: [
        "Introduction to PHP",
        "Setting Up the Environment",
        "Basic Syntax and Tags",
        "Variables and Data Types",
        "Operators and Expressions",
        "Control Structures (if, else, switch)",
        "Loops (for, while, do-while, foreach)",
        "Functions and Parameters",
        "Arrays and Array Functions",
        "String Manipulation",
        "Forms and User Input",
        "Session Management",
        "Working with Files",
        "PHP and MySQL Integration",
        "Error Handling",
        "PHP Best Practices and Coding Standards",
      ],
    },
  ];

  return (
    <>
      <div
        id="subdiv"
        className="grid grid-cols-1 md:lg:grid-cols-2 gap-x-6 bg-gradient-to-br to-[#072ac8] from-[#4f78e1]"
      >
        <div
          id="div1"
          className="flex items-center justify-center xl:lg:md:w-auto"
        >
          <div id="headings" className="grid grid-cols-1 text-start px-20">
            <div>
              <p className="text-[#31cb00] text-xl font-medium">Syllabus</p>
            </div>
            <div className="py-5">
              <p className="text-6xl font-lora">
                Discover What You
                <p className="text-[#31cb00] inline pl-2">Will Learn</p>
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
                <h2 className="text-4xl font-semibold mb-2 text-[#31cb00]">
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

export default BasicPhpSyllabus;
