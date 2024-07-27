import React, { useState } from "react";
// DataAnalyticsIntroduction
function MachineLearningIntroduction() {
  // const recruiters = [amazon, spotify, google, flipkart, uber, microsoft];
  const [currentSlide, setCurrentSlide] = useState(0);
  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className=" h-[400px] flex  justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-orange-600 font">
              {heading}
            </h2>
            <ul className="list-disc list-inside text-xl font">
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
      heading: "Introduction to Machine Learning",
      items: [
        "Machine learning is a subset of artificial intelligence that focuses on developing algorithms capable of learning from data to make predictions or decisions without being explicitly programmed.",
        "Key Concepts: Explore fundamental concepts such as supervised learning, unsupervised learning, and reinforcement learning.",
      ],
    },
    {
      heading: "Basics of Machine Learning",
      items: [
        "Understanding Data: Learn about the types of data used in machine learning and their significance in model training.",
        "Types of Machine Learning: Differentiate between supervised, unsupervised, and semi-supervised learning approaches.",
      ],
    },
    {
      heading: "Popular Machine Learning Algorithms",
      items: [
        "Regression Algorithms: Introduce linear regression, logistic regression, and other regression techniques for predictive modeling.",
        "Classification Algorithms: Explore decision trees, support vector machines, and other classification algorithms for pattern recognition.",
        "Clustering Algorithms: Discuss k-means clustering, hierarchical clustering, and other techniques for grouping data points.",
      ],
    },
    {
      heading: "Tools and Technologies for Machine Learning",
      items: [
        "Programming Languages: Overview of popular languages like Python and R used for machine learning development.",
        "Libraries and Frameworks: Introduction to libraries like TensorFlow, scikit-learn, and PyTorch for implementing machine learning algorithms.",
      ],
    },
    {
      heading: "Model Evaluation and Validation",
      items: [
        "Cross-Validation Techniques: Understand k-fold cross-validation and other methods for assessing model performance.",
        "Metrics for Evaluation: Learn about accuracy, precision, recall, F1 score, and other metrics used to evaluate machine learning models.",
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
        className="grid grid-cols-1  w-fit   md:lg:grid-cols-2  h-full bg-gradient-to-br from-yellow-300 via-orange-500 to-red-600"
      >
        <div
          id="div1"
          className="  flex items-center justify-center   xl:lg:md:w-auto "
        >
          <div
            id="headings"
            className="grid grid-cols-1 text-start md:px-10 font"
          >
            <div>
              {" "}
              <p className="text-orange-800 text-xl font-medium">
                Introduction
              </p>
            </div>
            <div className="py-5">
              <p className="md:text-5xl text-2xl font ">
                So what is
                <p className="text-violet-800 inline pl-2">Machine Learning</p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">
                Brief about Data Analytics
              </p>
            </div>
          </div>
        </div>
        <div id="div2" className=" md:px-10   ">
          {/*  */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 ">
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
                  className=" hover:text-pink-700  text-black font-bold py-2 px-4 rounded"
                >
                  Previous
                </button>
                <div>{`Page ${currentSlide + 1}/${slidesData.length}`}</div>
                <button
                  onClick={goToNextSlide}
                  className=" hover:text-pink-700 text-black font-bold py-2 px-4 rounded"
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

export default MachineLearningIntroduction;
