import React, { useState } from "react";

function BlockChainIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-2 py-8 flex flex-col h-full relative overflow-hidden">
        <div className="flex-grow pb-28">
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
      heading: "What is Blockchain?",
      items: [
        "Blockchain is a decentralized and distributed digital ledger technology.",
        "It records transactions across multiple computers in a way that makes them tamper-resistant and transparent.",
      ],
    },
    {
      heading: "How Does Blockchain Work?",
      items: [
        "Transactions are grouped into blocks and linked together in chronological order to form a chain.",
        "Each block contains a cryptographic hash of the previous block, creating a secure and immutable record of transactions.",
      ],
    },
    {
      heading: "Key Concepts of Blockchain",
      items: [
        "Decentralization: No single entity has control over the network.",
        "Transparency: All transactions are visible to participants.",
        "Immutability: Once recorded, data cannot be altered or deleted.",
        "Consensus Mechanism: Agreement among network participants on the validity of transactions.",
      ],
    },
    {
      heading: "Applications of Blockchain",
      items: [
        "Cryptocurrencies like Bitcoin and Ethereum.",
        "Supply chain management.",
        "Smart contracts and decentralized finance (DeFi).",
        "Identity verification and authentication.",
      ],
    },
    {
      heading: "Challenges and Future of Blockchain",
      items: [
        "Scalability: Handling a large number of transactions per second.",
        "Interoperability: Ensuring compatibility between different blockchain platforms.",
        "Regulatory concerns and legal frameworks.",
        "Integration with existing systems and industries.",
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-auto overflow-x-hidden h-auto mb-16">
      <div className="flex items-center justify-center">
        <div className="text-start px-4 lg:px-10">
          <div>
            <p className="text-[#f6ac14] underline-offset-2 underline text-2xl lg:text-[24px] font-bold">
              Introduction
            </p>
          </div>
          <div className="py-5">
            <p className="text-xl lg:text-5xl font">
              Discover
              <span className="text-[#f6ac14] inline pl-2">Blockchain</span>
            </p>
          </div>
          <div>
            <p className="text-lg lg:text-xl text-gray-500">
              Learn about the fundamentals of blockchain technology, its key
              concepts, applications, and challenges.
            </p>
          </div>
        </div>
      </div>
      <div className="h-auto lg:h-[600px] flex justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-4 lg:px-14 xl:px-36 sm:mt-8 lg:mt-0 lg:mr-32">
          <div className="bg-[#0098f1] relative w-full lg:w-[500px] lg:h-[500px] md:h-[380px] sm:h-[450px] h-[550px] p-5 mt-10 mb-2 shadow-xl sm:rounded-lg">
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

export default BlockChainIntroduction;
