import React, { useState } from "react";

function EthicalHackingIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className=" h-[400px] flex  justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-orange-600 font">
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
      heading: "Introduction to Ethical Hacking",
      items: [
        "Ethical hacking involves the authorized testing of computer systems and networks to identify potential vulnerabilities and weaknesses. It is conducted by trained professionals with the goal of improving security by fixing these weaknesses before malicious hackers can exploit them.",
      ],
    },
    {
      heading: "Basics of Ethical Hacking",
      items: [
        "Definition of Ethical Hacking: Define ethical hacking and differentiate it from malicious hacking.",
        "Legal and Ethical Considerations: Discuss the ethical and legal framework surrounding ethical hacking, including permissions, consent, and confidentiality.",
      ],
    },
    {
      heading: "Tools and Techniques",
      items: [
        "Common Ethical Hacking Tools: Provide an overview of widely used tools such as Nmap, Metasploit, Wireshark, etc., for network scanning, penetration testing, and exploitation.",
        "Social Engineering: Introduce social engineering techniques used to manipulate individuals into divulging confidential information or performing actions that compromise security.",
      ],
    },
    {
      heading: "Vulnerability Assessment and Penetration Testing (VAPT)",
      items: [
        "Vulnerability Assessment: Explain the process of identifying and assessing vulnerabilities in systems and networks.",
        "Penetration Testing: Discuss the methodology of simulating cyberattacks to evaluate the security posture of an organization.",
      ],
    },
    {
      heading: "Cybersecurity Best Practices",
      items: [
        "Security Measures: Highlight essential security practices such as regular software updates, strong password policies, and network segmentation.",
        "Incident Response: Outline the steps involved in responding to security incidents, including detection, containment, eradication, and recovery.",
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
      <div
        id="subdiv"
        className="grid grid-cols-1 w-fit md:lg:grid-cols-2 h-full bg-gradient-to-br  from-cyan-400 via-sky-500  to-blue-500"
      >
        <div
          id="div1"
          className="flex items-center justify-center xl:lg:md:w-auto"
        >
          <div
            id="headings"
            className="grid grid-cols-1 text-start px-10 font"
          >
            <div>
              <p className="text-[#7400b8] text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="text-6xl font">
                So what is
                <p className="text-[#7400b8] inline pl-2">
                  Automation Testing?
                </p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">
                Brief about Automation Testing
              </p>
            </div>
          </div>
        </div>
        <div id="div2" className="px-10">
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

export default EthicalHackingIntroduction;
