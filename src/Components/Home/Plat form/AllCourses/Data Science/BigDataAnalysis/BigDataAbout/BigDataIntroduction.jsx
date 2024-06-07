import React, { useState } from "react";
// BigDataAnalysisIntroduction
function BigDataIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-[400px] flex justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-[#38b000] font-lora">
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
      heading: "Introduction to Big Data Analysis",
      items: [
        "Big Data Analysis refers to the process of examining large and varied data sets to uncover hidden patterns, unknown correlations, market trends, customer preferences, and other useful information.",
        "Key Concepts: Understand the significance of big data in today's data-driven world.",
      ],
    },
    {
      heading: "Basics of Big Data",
      items: [
        "Understanding Big Data: Learn about the characteristics of big data, such as volume, velocity, variety, and veracity.",
        "Big Data Technologies: Get introduced to technologies like Hadoop and Spark that enable big data processing.",
      ],
    },
    {
      heading: "Popular Big Data Tools",
      items: [
        "Hadoop Ecosystem: Explore components like HDFS, MapReduce, Hive, and Pig.",
        "Spark: Learn about Apache Spark and its capabilities in big data processing.",
      ],
    },
    {
      heading: "Data Processing and Analysis",
      items: [
        "ETL Processes: Understand Extract, Transform, Load processes for data integration.",
        "Data Warehousing: Learn about data warehousing concepts and tools like Amazon Redshift and Google BigQuery.",
      ],
    },
    {
      heading: "Big Data Analytics Techniques",
      items: [
        "Descriptive Analytics: Gain insights into data using descriptive analytics techniques.",
        "Predictive Analytics: Learn how to build predictive models to forecast future trends.",
        "Prescriptive Analytics: Understand how to recommend actions based on data analysis.",
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
      <div
        id="subdiv"
        className="grid grid-cols-1 w-fit md:lg:grid-cols-2 h-full  bg-gradient-to-br from-[#f7b801] to-[#f35b04]"
      >
        <div
          id="div1"
          className="flex items-center justify-center xl:lg:md:w-auto"
        >
          <div
            id="headings"
            className="grid grid-cols-1 text-start  font-lora"
          >
            <div>
              <p className="text-[#38b000] text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="md:text-5xl text-2xl font-lora">
                So what is
                <p className="text-[#38b000] inline pl-2">Big Data Analysis</p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">
                Brief about Big Data Analysis
              </p>
            </div>
          </div>
        </div>
        <div id="div2" className="md:px-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
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
                  className="hover:text-pink-700 text-black font-bold py-2 px-4 rounded"
                >
                  Previous
                </button>
                <div>{`Page ${currentSlide + 1}/${slidesData.length}`}</div>
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

export default BigDataIntroduction;
