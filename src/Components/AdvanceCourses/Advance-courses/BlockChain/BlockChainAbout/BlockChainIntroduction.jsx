import React, { useState } from "react";

function BlockChainIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-[400px] flex justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-[#ff7000] font-lora">
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
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 bg-gradient-to-br to-[#0a0908] from-[#272640]">
        <div className="flex items-center justify-center xl:lg:md:w-auto">
          <div className="grid grid-cols-1 text-start px-10 font-lora">
            <div>
              <p className="text-[#ff7000] text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="text-6xl font-lora text-white">
                Discover
                <p className="text-[#ff7000] inline pl-2">Blockchain</p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-300">
                Learn about the fundamentals of blockchain technology, its key
                concepts, applications, and challenges.
              </p>
            </div>
          </div>
        </div>
        <div className="px-10">
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

export default BlockChainIntroduction;
