import React from "react";

function MobileAppSyllabus() {
  const data = [
    {
      heading: "Mobile App Development Fundamentals",
      subheading: "Topics (14)",
      items: [
        "Introduction to Mobile App Development",
        "Understanding Mobile Platforms (iOS, Android)",
        "UI/UX Design Principles for Mobile Apps",
        "Responsive Design and Adaptability",
        "Mobile App Navigation Patterns",
        "Introduction to Cross-Platform Development",
        "Using Frameworks like React Native, Flutter",
        "Mobile App Architecture and Components",
        "Data Management in Mobile Apps",
        "Integrating with Device Features (Camera, GPS)",
        "Push Notifications and Alerts",
        "Security Measures in Mobile App Development",
        "Testing and Debugging Mobile Apps",
        "Publishing and Distribution on App Stores",
      ],
    },
  ];

  return (
    <>
      <div
        id="subdiv"
        className="grid grid-cols-1 md:lg:grid-cols-2 gap-x-6 bg-[#00296b] mb-12"
      >
        <div
          id="div1"
          className="flex items-center justify-center xl:lg:md:w-auto"
        >
          <div id="headings" className="grid grid-cols-1 text-start px-20">
            <div>
              <p className="text-[#f9ac13] text-xl font-medium">Syllabus</p>
            </div>
            <div className="py-5">
              <p className="text-6xl font">
                Discover What You
                <p className="text-[#f9ac13] inline pl-2">Will Learn</p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-300">
                Dive into the comprehensive curriculum covering key concepts,
                practical applications, and advanced topics in mobile app
                development.
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

export default MobileAppSyllabus;
