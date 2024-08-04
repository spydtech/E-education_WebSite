import React from "react";

function PerformanceTestingSyllabus() {
  const data = [
    {
      heading: "Introduction to Performance Testing",
      subheading: "Topics (16)",
      items: [
        "Overview of Performance Testing",
        "Types of Performance Testing",
        "Performance Testing Tools",
        "Performance Testing Metrics",
        "Load Testing",
        "Stress Testing",
        "Endurance Testing",
        "Spike Testing",
        "Scalability Testing",
        "Concurrency Testing",
        "Real User Monitoring (RUM)",
        "Application Performance Monitoring (APM)",
        "Performance Testing Best Practices",
        "Performance Testing in CI/CD Pipelines",
        "Performance Testing Challenges and Solutions",
        "Performance Testing Case Studies",
      ],
    },
  ];

  return (
    <div className="bg-white mb-20 pt-10">
      <div className="h-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4 justify-center items-center">
        {/* Left Content */}
        <div className="flex justify-center items-center">
          <div className="p-5 space-y-5">
            <p className="text-2xl font-bold text-[#f6ac14]">
              Syllabus
            </p>
            <p className="md:text-5xl text-2xl font">
              Discover What You{" "}
              <span className="text-[#f6ac14]">Will Learn</span>
            </p>
            <p className="text-xl text-gray-500">
              Top-notch and up-to-date curriculum taught by renowned professors
              and industry experts using videos, case studies, hands-on projects,
              and live sessions.
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="bg-[#0098f1] p-6 rounded-lg">
          <div className="container mx-auto">
            {data.map((category, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-3xl font-semibold mb-2 text-[#ffffff]">
                  {category.heading}
                </h2>
                <h3 className="text-xl md:text-2xl font-medium mb-2 text-[#ffffff]">
                  {category.subheading}
                </h3>
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

export default PerformanceTestingSyllabus;
