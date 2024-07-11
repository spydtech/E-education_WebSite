import React, { useState } from "react";

function CloudComputingIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-[400px] flex justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-[#072ac8] font">
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
    <>
      <div className="grid grid-cols-1 w-fit md:grid-cols-2 h-full bg-gradient-to-br from-[#04e761] to-[#00916e]">
        <div className="flex items-center justify-center xl:w-auto">
          <div className="grid grid-cols-1 text-start px-10 font">
            <div>
              <p className="text-[#072ac8] text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="text-6xl font">
                So what is
                <span className="text-[#072ac8] inline pl-2">
                  Cloud Computing?
                </span>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">
                Brief overview of Cloud Computing with AWS
              </p>
            </div>
          </div>
        </div>
        <div className="px-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            <div className="bg-white p-5 mb-2 overflow-hidden shadow-xl sm:rounded-lg">
              <div className="relative w-full overflow-hidden">
                <Slide
                  heading={slidesData[currentSlide].heading}
                  items={slidesData[currentSlide].items}
                />
              </div>
              <div className="flex justify-between">
                <button
                  onClick={goToPreviousSlide}
                  className="hover:text-yellow-600 text-black font-bold py-2 px-4 rounded"
                >
                  Previous
                </button>
                <div>{`Page ${currentSlide + 1}/${slidesData.length}`}</div>
                <button
                  onClick={goToNextSlide}
                  className="hover:text-yellow-600 text-black font-bold py-2 px-4 rounded"
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

export default CloudComputingIntroduction;
