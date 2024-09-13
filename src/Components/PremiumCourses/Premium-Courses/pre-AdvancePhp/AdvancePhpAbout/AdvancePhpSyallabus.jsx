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
    <div className="py-8">
      <div className="flex flex-col lg:flex-row items-center justify-between px-4">
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0 px-10">
          <div className="text-start">
            <h2 className="text-2xl text-[#f6ac14] font-bold mb-4">
              Explore What You Will Learn
            </h2>
            <p className="text-lg text-gray-500">
              Cutting-edge curriculum designed to cover advanced PHP concepts
              taught by experts through various methods like videos, practical
              projects, and interactive sessions.
            </p>
          </div>
        </div>
        <div className="lg:w-[700px] w-full bg-[#0098f1] p-6 pl-20 rounded-lg">
          <div className="container mx-auto">
            {data.map((category, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-3xl font-semibold mb-2 text-[#ffffff]">
                  {category.heading}
                </h3>
                <h4 className="text-xl md:text-2xl font-medium mb-2 text-[#ffffff]">
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
  );
}

export default AdvancePhpSyllabus;
