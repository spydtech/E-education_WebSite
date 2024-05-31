import React from "react";

function CloudComputingSyllabus() {
  const data = [
    {
      heading: "Introduction to Cloud Computing with AWS",
      subheading: "Topics (12)",
      items: [
        "Overview of Cloud Computing",
        "Introduction to AWS",
        "AWS Global Infrastructure",
        "Compute Services (EC2, Lambda)",
        "Storage Services (S3, EBS)",
        "Database Services (RDS, DynamoDB)",
        "Networking Services (VPC, Route 53)",
        "Security Services (IAM, KMS)",
        "Monitoring and Management Tools (CloudWatch, CloudTrail)",
        "Deployment and Automation (Elastic Beanstalk, CloudFormation)",
        "Serverless Computing with AWS Lambda",
        "Best Practices for Cloud Architecture on AWS",
      ],
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:lg:grid-cols-2 gap-x-6 bg-gradient-to-br from-[#04e761] to-[#00916e]">
        <div className="flex items-center justify-center xl:w-auto">
          <div className="grid grid-cols-1 text-start px-20">
            <div>
              <p className="text-[#072ac8] text-xl font-medium">Syllabus</p>
            </div>
            <div className="py-5">
              <p className="text-6xl font-lora">
                Discover What You
                <span className="text-[#072ac8] inline pl-2">Will Learn</span>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-300">
                Top-notch and up-to-date curriculum taught by renowned
                professors and industry experts using videos, case studies,
                hands-on projects, and live sessions.
              </p>
            </div>
          </div>
        </div>
        <div className="px-10">
          <div className="space-y-5 flex justify-center p-4 my-2 mx-2 mb-2 border-2 border-opacity-15 rounded overflow-hidden bg-gray-200 shadow-2xl">
            <div className="container mx-auto">
              {data.map((category, index) => (
                <div key={index} className="mb-6">
                  <h2 className="text-4xl font-semibold mb-2 text-[#072ac8]">
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
      </div>
    </>
  );
}

export default CloudComputingSyllabus;
