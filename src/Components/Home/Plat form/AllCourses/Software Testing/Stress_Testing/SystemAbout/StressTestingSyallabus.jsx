import React from "react";


function StressTestingSyllabus() {
  const data = [
    {
      heading: "Introduction to Cloud Computing",
      subheading: "Topics (16)",
      items: [
        "Overview of Cloud Computing",
        "Cloud Service Models (IaaS, PaaS, SaaS)",
        "Cloud Deployment Models (Public, Private, Hybrid)",
        "Cloud Infrastructure Components",
        "Virtualization in Cloud Computing",
        "Scalability and Elasticity",
        "Security in Cloud Computing",
        "Identity and Access Management (IAM)",
        "Data Privacy and Compliance",
        "Cloud Networking Fundamentals",
        "Load Balancing and Content Delivery Networks (CDNs)",
        "High Availability and Disaster Recovery",
        "Serverless Computing",
        "Big Data and Analytics in the Cloud",
        "Artificial Intelligence and Machine Learning in the Cloud",
        "Future Trends in Cloud Computing",
      ],
    },
  ];

  return (
    <>
      <div
        id="subdiv"
        className="grid grid-cols-1 md:lg:grid-cols-2 gap-x-6 bg-gradient-to-r from-indigo-500 to-indigo-500 mb-12"
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
                <p className="text-[#f9ac13] inline pl-2">Will Learn</p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-300">
                Dive into the comprehensive curriculum covering key concepts,
                practical applications, and advanced topics in cloud computing.
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
                  {category.heading.replace(
                    "Cloud Computing",
                    "Stress Testing"
                  )}
                </h2>
                <h3 className="text-2xl font-medium mb-2">
                  {category.subheading.replace(
                    "Topics",
                    "Stress Testing Topics"
                  )}
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

export default StressTestingSyllabus;
