import React, { useState } from "react";


function DataAnalyticsSyallabus() {
  const data = [
    {
      heading: "Data Analytics",
      subheading: "Topics(16)",
      items: [
        "Data Modelling",
        "Advanced SQL Programming",
        "Introduction to Cloud and AWS",
        "Analytics at Large Scale in Spark - I",
        "Analytics at Large Scale in Spark - II",
        "Big Data Case Study",
        "Basic Viz. using Tableau",
        "Advanced Excel",
        "Data Analysis and Visualisation in PowerBI",
        "Analytical Thinking and Structured Problem Solving using Frameworks",
        "Data Storytelling",
        "Airbnb Case Study",
        "Data Structures and Algorithms",
        "Algorithm Analysis and Recursion",
        "Advanced Database Programming using Pandas",
        "SQL & Python Lab",
      ],
    },
  ];
  return (
    <>
      <div id="subdiv" className="grid grid-cols-1 md:lg:grid-cols-2 gap-x-6 md:mb-20 ">
        <div
          id="div1"
          className=" flex items-center justify-center     xl:lg:md:w-auto "
        >
          <div id="headings" className="grid grid-cols-1 text-start px-20">
            <div>
              {" "}
              <p className="text-pink-800 text-xl font-medium">Syllabus</p>
            </div>
            <div className="py-5">
              <p className="text-6xl font-lora ">
                What you
                <p className="text-violet-800 inline pl-2">will learn?</p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">
                Top notch and up-to-date curriculum taught by renowned
                professors and industry experts using videos, case studies,
                hands-on projects and live sessions
              </p>
            </div>
          </div>
        </div>
        <div
          id="div2"
          className=" space-y-5  flex justify-center px-10 p-4 mx-4 mb-2 border-2  border-opacity-15 rounded  overflow-hidden bg-gray-200 shadow-2xl "
        >
          <div className="container mx-auto">
            {data.map((category, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-4xl font-semibold mb-2 text-pink-600">
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

export default DataAnalyticsSyallabus;
