import React from "react";

function AdvancePhpSyllabus() {
  const data = [
    {
      heading: "Advanced PHP Concepts",
      subheading: "Topics (12)",
      items: [
        "Object-Oriented Programming in PHP",
        "MVC Architecture and Frameworks",
        "Database Management with PHP",
        "Error Handling and Debugging",
        "Security Best Practices",
        "RESTful API Development",
        "Performance Optimization Techniques",
        "Asynchronous Processing in PHP",
        "Working with XML and JSON Data",
        "Integration with External APIs",
        "Deployment and Server Configuration",
        "Project Development and Collaboration",
      ],
    },
  ];

  return (
    <>
      <div
        id="subdiv"
        className="grid grid-cols-1 md:lg:grid-cols-2 gap-x-6 bg-gradient-to-br to-[#9e0059] from-[#640d14]"
      >
        <div
          id="div1"
          className="flex items-center justify-center xl:lg:md:w-auto"
        >
          <div id="headings" className="grid grid-cols-1 text-start px-20">
            <div>
              <p className="text-[#ffbc42] text-xl font-medium">Syllabus</p>
            </div>
            <div className="py-5">
              <p className="text-6xl font">
                Explore What You
                <p className="text-[#ffbc42] inline pl-2">Will Learn</p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-300">
                Cutting-edge curriculum designed to cover advanced PHP concepts
                taught by experts through various methods like videos, practical
                projects, and interactive sessions.
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
                <h2 className="text-4xl font-semibold mb-2 text-[#ffbc42]">
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

export default AdvancePhpSyllabus;
