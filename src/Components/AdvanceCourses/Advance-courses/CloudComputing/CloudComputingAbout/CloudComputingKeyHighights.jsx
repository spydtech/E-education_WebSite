import React, { useState } from "react";

function CloudComputingKeyHighlights() {
  const [selectedItem, setSelectedItem] = useState(0);

  const data = [
    { label: "Overview" },
    { label: "Key Concepts" },
    { label: "Applications" },
    { label: "Skills Developed" },
    { label: "Target Audience" },
  ];

  const handleClick = (index) => {
    setSelectedItem(index);
  };

  const renderContent = () => {
    switch (selectedItem) {
      case 0:
        return (
          <ul className="space-y-2 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Overview</p>
            <li>Introduction to cloud computing and its benefits.</li>
            <li>Understanding various cloud service models: IaaS, PaaS, SaaS.</li>
            <li>Overview of major cloud platforms: AWS, Azure, Google Cloud.</li>
            <li>Hands-on experience with cloud deployment and management.</li>
            <li>Explore real-world case studies and practical applications.</li>
          </ul>
        );
      case 1:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Key Concepts</p>
            <li>Cloud Service Models: IaaS, PaaS, SaaS</li>
            <li>Virtualization and Containers</li>
            <li>Cloud Storage Solutions</li>
            <li>Scalability and Elasticity</li>
            <li>Cloud Security and Compliance</li>
            <li>Disaster Recovery and Backup</li>
            <li>Cost Management and Optimization</li>
          </ul>
        );
      case 2:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Applications</p>
            <li>Developing and Deploying Applications on the Cloud</li>
            <li>Managing Cloud Infrastructure</li>
            <li>Data Analytics and Big Data Solutions</li>
            <li>Disaster Recovery Planning</li>
            <li>Cloud-based Business Intelligence</li>
            <li>Cost-effective Cloud Solutions for Enterprises</li>
            <li>Hybrid Cloud Implementations</li>
          </ul>
        );
      case 3:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Skills Developed</p>
            <li>Cloud Architecture Design and Implementation</li>
            <li>Managing Cloud Resources and Services</li>
            <li>Implementing Security Measures in the Cloud</li>
            <li>Optimizing Cloud Performance and Cost</li>
            <li>Developing Cloud-based Applications</li>
            <li>Understanding Cloud Provider Ecosystems</li>
            <li>Disaster Recovery and Backup Strategies</li>
          </ul>
        );
      case 4:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Target Audience</p>
            <li>IT Professionals and Cloud Engineers</li>
            <li>Software Developers and DevOps Engineers</li>
            <li>System Administrators</li>
            <li>Data Analysts and Data Scientists</li>
            <li>Business Leaders and IT Managers</li>
            <li>Anyone interested in cloud technologies and their applications</li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="px-10 mb-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start justify-center">
        <div className="w-auto h-auto md:w-[500px] md:h-[420px] mt-10 md:pl-10 pl-0 text-xl">
          {renderContent()}
        </div>
        <div className="md:pl-10 pl-0">
          <div className="pt-4">
            <p className="font-bold underline-offset-2 underline text-xl  text-[#f6ac14]">
              Cloud Computing Course Highlights
            </p>
          </div>
          <div className="pt-4 lg:ml-10">
            {data.map((item, index) => (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`p-5 text-center hover:cursor-pointer text-xl font-medium my-6 mx-4 h-16 w-[210px] flex items-center border-2 border-opacity-15 rounded-md overflow-hidden transition-transform duration-300 transform hover:scale-105 ${
                  selectedItem === index
                    ? "bg-[#0098f1] text-white border-none"
                    : ""
                }`}
              >
                <p className="text-center">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CloudComputingKeyHighlights;
