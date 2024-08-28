import React, { useState } from "react";

function CloudComputingIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-2 py-8 flex flex-col h-full relative overflow-hidden">
        <div className="flex-grow ">
          <h2 className="text-2xl lg:text-3xl font-medium mb-4 text-white font-sans">
            {heading}
          </h2>
          <ul className="list-disc list-outside text-lg lg:text-xl pl-10 text-start text-white">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="absolute left-0 right-0 bottom-0 flex justify-between">
          <button
            onClick={goToPreviousSlide}
            className="hover:text-[#f6ac14] text-white font-bold rounded px-4"
          >
            Previous
          </button>
          <div className="text-white">{`Page ${currentSlide + 1}/${slidesData.length}`}</div>
          <button
            onClick={goToNextSlide}
            className="hover:text-[#f6ac14] text-white font-bold rounded px-4"
          >
            Next
          </button>
        </div>
      </div>
    );
  };

  const slidesData = [
    {
      heading: "Introduction to Cloud Computing",
      items: [
        "Cloud computing refers to the delivery of computing services over the Internet (the cloud) to offer faster innovation, flexible resources, and economies of scale.",
        "AWS (Amazon Web Services) is a secure cloud services platform that offers computing power, database storage, content delivery, and other functionalities to help businesses scale and grow.",
      ],
    },
    {
      heading: "Benefits of Cloud Computing",
      items: [
        "Cost-Efficiency: Pay only for the resources you use.",
        "Scalability: Easily scale resources up or down based on demand.",
        "Flexibility: Access resources from anywhere with an internet connection.",
        "Reliability: Redundant systems ensure high availability and uptime.",
      ],
    },
    {
      heading: "AWS Services",
      items: [
        "Compute: EC2, Lambda, Elastic Beanstalk",
        "Storage: S3, EBS, Glacier",
        "Database: RDS, DynamoDB, Redshift",
        "Networking: VPC, Route 53, CloudFront",
        "Security: IAM, KMS, WAF",
        "AI/ML: SageMaker, Rekognition, Polly",
        "And many more...",
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-screen h-auto mb-16">
      <div className="flex items-center justify-center">
        <div className="text-start px-4 lg:px-10">
          <div>
            <p className="text-[#f6ac14] underline-offset-2 underline text-2xl lg:text-[24px] font-bold">
              Introduction
            </p>
          </div>
          <div className="py-5">
            <p className="text-xl lg:text-5xl font">
              So what is
              <span className="text-[#f6ac14] inline pl-2">
                Cloud Computing?
              </span>
            </p>
          </div>
          <div>
            <p className="text-lg lg:text-xl text-gray-500">
              Brief overview of Cloud Computing with AWS
            </p>
          </div>
        </div>
      </div>
      <div className="h-auto lg:h-[650px] flex justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-4 lg:px-14 xl:px-36 sm:mt-8 lg:mt-0 lg:mr-32">
          <div className="bg-[#0098f1] relative w-full lg:w-[500px] lg:h-[520px] md:h-[400px] sm:h-[450px] h-[620px] p-5 mt-10 mb-2 shadow-xl sm:rounded-lg">
            <div className="relative w-full h-full">
              <Slide
                heading={slidesData[currentSlide].heading}
                items={slidesData[currentSlide].items}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CloudComputingIntroduction;
