import React, { useState } from "react";

function DatavisualisationIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8 ">
        <div className="h-[400px] flex justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-blue-600 font-lora">
              {heading}
            </h2>
            <ul className="list-disc list-inside text-xl font-lora">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const slidesData = [
    {
      heading: "Introduction to Data Visualization",
      items: [
        "Data visualization is the graphical representation of information and data. By using visual elements like charts, graphs, and maps, data visualization tools provide an accessible way to see and understand trends, outliers, and patterns in data.",
        "Key Concepts: Explore fundamental concepts such as the importance of visual context, data storytelling, and effective communication of insights.",
      ],
    },
    {
      heading: "Basics of Data Visualization",
      items: [
        "Understanding Data: Learn about the types of data used in data visualization and their significance in creating meaningful visualizations.",
        "Visualization Techniques: Differentiate between various techniques such as bar charts, line graphs, scatter plots, and more.",
      ],
    },
    {
      heading: "Popular Data Visualization Tools",
      items: [
        "Tableau: An introduction to one of the most popular data visualization tools used for creating interactive and shareable dashboards.",
        "Power BI: Learn about this business analytics tool that delivers insights throughout your organization.",
        "D3.js: Explore this JavaScript library for producing dynamic, interactive data visualizations in web browsers.",
      ],
    },
    {
      heading: "Design Principles for Effective Visualizations",
      items: [
        "Choosing the Right Chart: Understand how to select the appropriate chart type based on the data and the message you want to convey.",
        "Color Theory: Learn how to use colors effectively to enhance readability and highlight key information.",
        "Avoiding Misleading Visuals: Tips on how to avoid common pitfalls that can lead to misinterpretation of data.",
      ],
    },
    {
      heading: "Advanced Data Visualization Techniques",
      items: [
        "Interactive Visualizations: Discover how to create interactive charts and dashboards that allow users to explore data in depth.",
        "Geospatial Visualization: Learn how to visualize data with maps to show spatial patterns and relationships.",
        "Data Storytelling: Techniques for crafting compelling narratives around your data to engage and inform your audience.",
      ],
    },
  ];

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slidesData.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 h-full md:mb-20 bg-gradient-to-br from-blue-300 via-purple-500 to-pink-600">
        <div className="flex items-center justify-center pl-4 ">
          <div className="grid grid-cols-1 text-start px-10 font-lora">
            <div>
              <p className="text-blue-800 text-xl font-lora font-medium">
                Introduction
              </p>
            </div>
            <div className="py-5">
              <p className="md:text-6xl text-2xl font-lora">
                So what is
                <span className="text-blue-800 inline pl-2">
                  Data Visualization?
                </span>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">
                Brief about Data Visualization
              </p>
            </div>
          </div>
        </div>
        <div className="px-4">
          <div className="max-w-7xl mx-auto  lg:px-8 mt-8">
            <div className="bg-white p-5 mb-2 overflow-hidden shadow-xl sm:rounded-lg">
              <div className="relative w-full overflow-hidden">
                <div className="flex">
                  <Slide
                    heading={slidesData[currentSlide].heading}
                    items={slidesData[currentSlide].items}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={goToPreviousSlide}
                  className="hover:text-pink-700 text-black font-bold
                  py-2 px-4 rounded"
                >
                  Previous
                </button>
                <div>
                  Page {currentSlide + 1}/{slidesData.length}
                </div>
                <button
                  onClick={goToNextSlide}
                  className="hover:text-pink-700 text-black font-bold py-2 px-4 rounded"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DatavisualisationIntroduction;
