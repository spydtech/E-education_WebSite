import React, { useState } from "react";

function BlockChainKeyHighlights() {
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
            <li>Introduction to blockchain technology and its fundamentals.</li>
            <li>Understanding of decentralized networks and distributed ledgers.</li>
            <li>Exploration of various consensus algorithms and smart contracts.</li>
            <li>Case studies of blockchain applications in different industries.</li>
            <li>Hands-on experience with blockchain development tools and platforms.</li>
          </ul>
        );
      case 1:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Key Concepts</p>
            <li>Blockchain Basics and History</li>
            <li>Cryptographic Hash Functions</li>
            <li>Consensus Mechanisms: Proof of Work, Proof of Stake</li>
            <li>Smart Contracts and DApps</li>
            <li>Tokenomics and Cryptocurrencies</li>
            <li>Decentralized Finance (DeFi)</li>
            <li>Blockchain Security and Privacy</li>
          </ul>
        );
      case 2:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Applications</p>
            <li>Cryptocurrencies and Digital Payments</li>
            <li>Supply Chain Management</li>
            <li>Healthcare Data Management</li>
            <li>Decentralized Finance (DeFi) Platforms</li>
            <li>Smart Contracts and Legal Agreements</li>
            <li>Voting Systems and Governance</li>
            <li>Intellectual Property and Digital Rights Management</li>
          </ul>
        );
      case 3:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Skills Developed</p>
            <li>Understanding of Blockchain Technology and Architecture</li>
            <li>Development of Smart Contracts and Decentralized Applications (DApps)</li>
            <li>Implementation of Blockchain Security Measures</li>
            <li>Exploring Cryptocurrencies and Token Creation</li>
            <li>Designing Blockchain Solutions for Real-World Problems</li>
            <li>Analyzing Blockchain Trends and Future Directions</li>
          </ul>
        );
      case 4:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Target Audience</p>
            <li>Blockchain Enthusiasts and Developers</li>
            <li>IT Professionals and System Architects</li>
            <li>Financial Analysts and Cryptocurrency Traders</li>
            <li>Legal Professionals interested in Smart Contracts</li>
            <li>Supply Chain and Healthcare Professionals</li>
            <li>Anyone interested in understanding and leveraging blockchain technology</li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="px-10 mb-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start justify-center">
        <div className="w-auto h-auto md:w-[550px] md:h-[420px] mt-10 md:pl-10 pl-0 text-xl">
          {renderContent()}
        </div>
        <div className="md:pl-10 pl-0">
          <div className="pt-4">
            <p className="font-bold underline-offset-2 underline text-xl  text-[#f6ac14]">
              Blockchain Course Highlights
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

export default BlockChainKeyHighlights;
