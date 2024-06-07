import React from "react";
import { FcBarChart, FcLineChart, FcPieChart } from "react-icons/fc";

function DatavisualisationSyallabus() {
  const data = [
    {
      heading: "Data Visualization",
      subheading: "Topics (12)",
      items: [
        "Introduction to Data Visualization",
        "Types of Data Visualization",
        "Charts and Graphs",
        "Mapping Techniques",
        "Interactive Visualization",
        "Data Storytelling",
        "Visualization Best Practices",
        "Tools for Data Visualization",
        "Dashboard Design",
        "Color Theory in Visualization",
        "Visual Perception and Cognition",
        "Ethical Considerations in Data Visualization",
      ],
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:mb-20 bg-gradient-to-br from-blue-300 via-purple-500 to-pink-600">
        <div className="flex items-center justify-center xl:lg:md:w-auto">
          <div className="grid grid-cols-1 text-start pl-4">
            <div>
              <p className="text-orange-800 text-xl font-medium">Syllabus</p>
            </div>
            <div className="py-5">
              <p className="md:text-5xl text-2xl font-lora">
                Discover What You
                <p className="text-violet-800 inline pl-2">Will Learn</p>
              </p>
            </div>
            <div>
              <p className="text-xl text-white filter brightness-125">
                Explore a comprehensive curriculum designed to equip you with
                the skills and knowledge needed to excel in the field of data
                visualization.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-5 flex justify-center px-10 p-4 mx-4 mb-2  border-opacity-15 rounded overflow-hidden bg-white shadow-2xl">
          <div className="container mx-auto">
            {data.map((category, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-4xl font-semibold mb-2 text-orange-600">
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

export default DatavisualisationSyallabus;
