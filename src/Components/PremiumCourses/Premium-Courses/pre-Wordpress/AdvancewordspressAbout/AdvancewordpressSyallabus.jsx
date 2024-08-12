import React from "react";

function AdvancewordpressSyllabus() {
  const data = [
    {
      heading: "Advanced Wordpress Development",
      subheading: "Topics (16)",
      items: [
        "Introduction to Advanced Wordpress",
        "Wordpress 7+ Features and Improvements",
        "Advanced Object-Oriented Programming (OOP)",
        "Namespaces and Autoloading",
        "Dependency Injection",
        "Using Composer for Dependency Management",
        "Design Patterns in Wordpress",
        "Wordpress Frameworks (Laravel, Symfony)",
        "Building RESTful APIs with Wordpress",
        "Error Handling and Exception Management",
        "Security Best Practices in Wordpress",
        "Unit Testing and Test-Driven Development (TDD)",
        "Working with Databases and ORMs",
        "Using Wordpress in Microservices Architecture",
        "Performance Optimization Techniques",
        "Integrating Wordpress with Frontend Technologies",
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
              Dive into the comprehensive curriculum covering key concepts,
              practical applications, and advanced topics in Wordpress development.
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

export default AdvancewordpressSyllabus;
