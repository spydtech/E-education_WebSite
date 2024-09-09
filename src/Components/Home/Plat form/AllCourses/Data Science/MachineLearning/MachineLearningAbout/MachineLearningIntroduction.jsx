import React, { useState } from "react";

function MachineLearningIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => (
    <div className="w-full flex-shrink-0 px-4 py-8">
      <div className="h-auto flex justify-center">
        <div>
          <h2 className="text-2xl lg:text-3xl font-medium mb-4 text-white font-sans">
            {heading}
          </h2>
          <ul className="list-disc list-inside text-lg lg:text-xl">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

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
    <div className="grid grid-cols-1 lg:grid-cols-2 h-auto bg-white mb-20">
      <div className="flex items-center justify-center lg:pr-10 px-4 lg:px-10 py-10">
        <div className="text-center lg:text-left">
          <p className="text-[#f6ac14] underline-offset-2 underline text-2xl lg:text-[24px] font-bold">
            Introduction
          </p>
          <div className="py-5">
            <p className="text-xl lg:text-5xl font">
              So what is
              <span className="text-[#f6ac14] inline pl-2">Machine Learning</span>
            </p>
          </div>
          <p className="text-lg lg:text-xl text-gray-500">
            Brief about Machine Learning
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center px-4 lg:px-10 py-10">
        <div className="w-full max-w-7xl">
          <div className="bg-[#0098f1] w-full lg:w-[550px] h-auto lg:h-[420px] p-5 mx-auto shadow-xl sm:rounded-lg">
            <div className="relative w-full flex justify-center">
              <Slide
                heading={slidesData[currentSlide].heading}
                items={slidesData[currentSlide].items}
              />
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={goToPreviousSlide}
              className="hover:text-pink-700 text-black font-bold py-2 px-4 rounded"
            >
              Previous
            </button>
            <div className="text-center">{`Page ${currentSlide + 1}/${slidesData.length}`}</div>
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
  );
}

export default MachineLearningIntroduction;
