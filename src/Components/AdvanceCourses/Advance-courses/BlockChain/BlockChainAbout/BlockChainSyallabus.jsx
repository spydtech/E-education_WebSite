import React from "react";

function BlockChainSyllabus() {
  const data = [
    {
      heading: "Introduction to Blockchain",
      subheading: "Topics (18)",
      items: [
        "What is Blockchain?",
        "How Blockchain Works",
        "Key Concepts of Blockchain",
        "Types of Blockchain (Public, Private, Consortium)",
        "Blockchain Applications",
        "Smart Contracts",
        "Decentralized Finance (DeFi)",
        "Blockchain Security",
        "Challenges and Limitations",
        "Future Trends in Blockchain Technology",
        "Blockchain vs. Traditional Databases",
        "Consensus Mechanisms (PoW, PoS, etc.)",
        "Cryptocurrencies and Blockchain",
        "Blockchain in Supply Chain Management",
        "Regulatory and Legal Issues in Blockchain",
        "Blockchain Interoperability",
        "Blockchain and Internet of Things (IoT)",
        "Tokenization and Digital Assets",
      ],
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 bg-gradient-to-br to-[#0a0908] from-[#272640]">
        <div className="flex items-center justify-center xl:lg:md:w-auto">
          <div className="grid grid-cols-1 text-start px-20">
            <div>
              <p className="text-[#ff7000] text-xl font-medium">Syllabus</p>
            </div>
            <div className="py-5">
              <p className="text-6xl font text-white">
                Explore
                <p className="text-[#ff7000] inline pl-2">Blockchain</p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-300">
                Dive into the world of blockchain with our comprehensive
                syllabus covering the fundamental concepts, applications, and
                future trends in blockchain technology.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-5 flex justify-center px-10 p-4 my-2 mx-2 mb-2 border-2 border-opacity-15 rounded overflow-hidden bg-gray-200 shadow-2xl">
          <div className="container mx-auto">
            {data.map((category, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-4xl font-semibold mb-2 text-[#ff7000]">
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
    </>
  );
}

export default BlockChainSyllabus;
