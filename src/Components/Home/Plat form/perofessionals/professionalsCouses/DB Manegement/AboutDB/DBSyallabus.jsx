import React from "react";

function DBSyallabus() {
  const data = [
    {
      heading: "Introduction to Database Management",
      subheading: "Topics (16)",
      items: [
        "Overview of Database Management Systems (DBMS)",
        "Types of Databases (Relational, NoSQL, In-Memory)",
        "Database Architecture and Components",
        "Data Modeling and Database Design",
        "SQL Basics and Advanced Queries",
        "Normalization and Denormalization",
        "Transactions and Concurrency Control",
        "Database Security and Encryption",
        "Backup and Recovery Strategies",
        "Performance Tuning and Optimization",
        "Stored Procedures, Triggers, and Functions",
        "NoSQL Databases: MongoDB, Cassandra",
        "Big Data and Distributed Databases",
        "Data Warehousing and OLAP",
        "Database Administration and Maintenance",
        "Future Trends in Database Technology",
      ],
    },
  ];

  return (
    <>
      <div
        id="subdiv"
        className="grid grid-cols-1 md:lg:grid-cols-2 gap-x-6 bg-gradient-to-r from-rose-500 to-red-500 mb-12"
      >
        <div
          id="div1"
          className="flex items-center justify-center xl:lg:md:w-auto"
        >
          <div id="headings" className="grid grid-cols-1 text-start px-20">
            <div>
              <p className="text-[#00509d] text-xl font-medium">Syllabus</p>
            </div>
            <div className="py-5">
              <p className="text-6xl font">
                Discover What You
                <p className="text-[#00509d] inline pl-2">Will Learn</p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-300">
                Dive into the comprehensive curriculum covering key concepts,
                practical applications, and advanced topics in database
                management.
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
                <h2 className="text-4xl font-semibold mb-2 text-[#00509d]">
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

export default DBSyallabus;
