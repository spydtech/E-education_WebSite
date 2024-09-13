import React from "react";

function BasicJavaSyllabus() {
  const data = [
    {
      heading: "Introduction to Basic Java",
      subheading: "Topics (16)",
      items: [
        "Introduction to Java",
        "Setting Up the Environment",
        "Basic Syntax and Structure",
        "Variables and Data Types",
        "Operators and Expressions",
        "Control Structures (if, else, switch)",
        "Loops (for, while, do-while, enhanced for loop)",
        "Methods and Parameters",
        "Arrays and ArrayLists",
        "String Manipulation",
        "Object-Oriented Programming (Classes and Objects)",
        "Inheritance and Polymorphism",
        "Exception Handling",
        "File I/O",
        "Java Collections Framework",
        "Java Best Practices and Coding Standards",
      ],
    },
  ];

  return (
    <div className="py-8">
      <div className="flex flex-col lg:flex-row items-center justify-between px-4">
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0 px-10">
          <div className="text-start">
            <h2 className="text-2xl text-[#f6ac14] font-bold mb-4">
              Discover What You Will Learn
            </h2>
            <p className="text-lg text-gray-500">
              Top-notch and up-to-date curriculum taught by renowned professors
              and industry experts using videos, case studies, hands-on projects,
              and live sessions.
            </p>
          </div>
        </div>
        <div className="lg:w-[700px] w-full bg-[#0098f1] p-6 pl-20 rounded-lg shadow-lg">
          <div className="container mx-auto">
            {data.map((category, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-3xl font-semibold mb-2 text-white">
                  {category.heading}
                </h3>
                <h4 className="text-xl md:text-2xl font-medium mb-2">
                  {category.subheading}
                </h4>
                <ul className="list-disc ml-4 text-base md:text-lg text-white">
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
  );
}

export default BasicJavaSyllabus;
