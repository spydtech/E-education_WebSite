import React, { useState } from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { FcPositiveDynamic } from "react-icons/fc";
import { GrTransaction } from "react-icons/gr";
import amazon from "../../../../../../assets/dataAnalatics/amazon.png";
import google from "../../../../../../assets/dataAnalatics/google.png";
import microsoft from "../../../../../../assets/dataAnalatics/microsoft.png";
// import flipkart from "../../../../../assets/dataAnalatics/flipkart.png";
// import spotify from "../../../../../assets/dataAnalatics/spotify.png";
// import uber from "../../../../../assets/dataAnalatics/uber.png";

function MachineLearningSyallabus() {
  const data = [
    {
      heading: "Machine Learning",
      subheading: "Topics (16)",
      items: [
        "Introduction to Machine Learning",
        "Supervised Learning Algorithms",
        "Unsupervised Learning Algorithms",
        "Reinforcement Learning",
        "Deep Learning Fundamentals",
        "Convolutional Neural Networks (CNNs)",
        "Recurrent Neural Networks (RNNs)",
        "Generative Adversarial Networks (GANs)",
        "Natural Language Processing (NLP)",
        "Computer Vision",
        "Dimensionality Reduction Techniques",
        "Model Evaluation and Validation",
        "Hyperparameter Tuning",
        "Feature Engineering",
        "Deployment Strategies for ML Models",
        "Ethical Considerations in Machine Learning",
      ],
    },
  ];
  
  return (
    <>
    <div id="subdiv" className="grid grid-cols-1 md:lg:grid-cols-2 gap-x-6 md:mb-20 bg-gradient-to-br from-yellow-300 via-orange-500 to-red-600">
  <div id="div1" className="flex items-center justify-center xl:lg:md:w-auto">
    <div id="headings" className="grid grid-cols-1 text-start px-20">
      <div>
        <p className="text-orange-800 text-xl font-medium">Syllabus</p>
      </div>
      <div className="py-5">
        <p className="text-6xl font-lora">
          Discover What You
          <p className="text-violet-800 inline pl-2">Will Learn</p>
        </p>
      </div>
      <div>
        <p className="text-xl text-gray-500">
          Top-notch and up-to-date curriculum taught by renowned professors and industry experts using videos, case studies, hands-on projects, and live sessions.
        </p>
      </div>
    </div>
  </div>
  <div id="div2" className="space-y-5 flex justify-center px-10 p-4 mx-4 mb-2 border-2 border-opacity-15 rounded overflow-hidden bg-gray-200 shadow-2xl">
    <div className="container mx-auto">
      {data.map((category, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-4xl font-semibold mb-2 text-orange-600">{category.heading}</h2>
          <h3 className="text-2xl font-medium mb-2">{category.subheading}</h3>
          <ul className="list-disc ml-6 text-[16px]">
            {category.items.map((item, idx) => (
              <li key={idx} className="text-gray-700">{item}</li>
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

export default MachineLearningSyallabus;
