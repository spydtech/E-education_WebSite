import React, { useState } from "react";

function EthicalHackingIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-auto flex justify-center">
          <div>
            <h2 className="text-2xl lg:text-3xl font-medium mb-4 text-white font-sans">
              {heading}
            </h2>
            <ul className="list-disc list-inside text-lg lg:text-xl text-white">
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
    <div className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[468px] bg-white mb-20">
      {/* Text Section */}
      <div className="flex items-center justify-center lg:pr-10">
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
                Ethical Hacking
              </span>
            </p>
          </div>
          <div>
            <p className="text-lg lg:text-xl text-gray-500">
              Brief about Ethical Hacking
            </p>
          </div>
        </div>
      </div>

      {/* Slider Section */}
      <div className="h-auto lg:h-[468px] flex justify-center ml-10">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-4 lg:px-10 mt-8 lg:mt-0">
          <div className="bg-[#0098f1] w-full lg:w-[550px] h-auto lg:h-[420px] p-5 mt-10 mb-2 shadow-xl sm:rounded-lg">
            <div className="w-full">
              <div className="flex text-white text-opacity-80">
                <Slide
                  heading={slidesData[currentSlide].heading}
                  items={slidesData[currentSlide].items}
                />
              </div>
              <div className="flex justify-between">
                <button
                  onClick={goToPreviousSlide}
                  className="hover:text-white text-black font-bold  rounded"
                >
                  Previous
                </button>
                <div>{`Page ${currentSlide + 1}/${slidesData.length}`}</div>
                <button
                  onClick={goToNextSlide}
                  className="hover:text-white text-black font-bold  rounded"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
          {/* <div className="flex justify-between mt-4 lg:mt-0">
            <button
              onClick={goToPreviousSlide}
              className="hover:text-pink-700 text-black font-bold py-2 px-4 rounded"
            >
              Previous
            </button>
            <div>{`Page ${currentSlide + 1}/${slidesData.length}`}</div>
            <button
              onClick={goToNextSlide}
              className="hover:text-pink-700 text-black font-bold py-2 px-4 rounded"
            >
              Next
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default EthicalHackingIntroduction;
