import React, { useState } from "react";

function AdvanceEthicalHackingIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => (
    <div className="w-full flex-shrink-0 px-4 py-8">
      <div className="h-auto flex justify-center">
        <div>
          <h2 className="text-2xl lg:text-3xl font-medium mb-4 text-white font-sans">
            {heading}
          </h2>
          <ul className="list-disc list-inside text-lg lg:text-xl">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  const slidesData = [
    {
      heading: "Introduction to Ethical Hacking",
      items: [
        "Ethical hacking involves assessing computer systems, networks, or applications to identify vulnerabilities and weaknesses that malicious hackers could exploit.",
        "Key Concepts: Learn about penetration testing, vulnerability assessment, and ethical hacking methodologies.",
      ],
    },
    {
      heading: "Ethical Hacking Techniques",
      items: [
        "Footprinting and Reconnaissance: Gather information about the target system or network to identify potential entry points.",
        "Exploitation and Post-Exploitation: Use various tools and techniques to exploit vulnerabilities and gain unauthorized access.",
      ],
    },
    {
      heading: "Network Security Fundamentals",
      items: [
        "Understanding Network Protocols: Explore common network protocols and their security implications.",
        "Firewalls and Intrusion Detection Systems: Learn about network security devices and their role in preventing unauthorized access.",
      ],
    },
    {
      heading: "Web Application Security",
      items: [
        "SQL Injection and Cross-Site Scripting (XSS): Understand common web application vulnerabilities and how to mitigate them.",
        "Secure Coding Practices: Learn about best practices for writing secure code to prevent common security issues.",
      ],
    },
    {
      heading: "Ethical Hacking Tools",
      items: [
        "Penetration Testing Tools: Explore popular tools like Nmap, Metasploit, and Wireshark used by ethical hackers for testing.",
        "Forensic Analysis Tools: Learn about tools used for digital forensics and incident response.",
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
    <div className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[468px] mb-16">
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
              <span className="text-[#f6ac14] inline pl-2">Ethical Hacking</span>
            </p>
          </div>
          <div>
            <p className="text-lg lg:text-xl text-gray-500">
              Brief overview of Ethical Hacking
            </p>
          </div>
        </div>
      </div>
      <div className="h-auto lg:h-[468px] flex justify-center ml-10">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-4 lg:px-10 mt-8 lg:mt-0">
          <div className="bg-[#0098f1] w-full lg:w-[550px] h-auto lg:h-[420px] p-5 mt-10 mb-2 shadow-xl sm:rounded-lg">
            <div className="relative w-full">
              <div className="flex text-white text-opacity-80">
                <Slide
                  heading={slidesData[currentSlide].heading}
                  items={slidesData[currentSlide].items}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4 lg:mt-0">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvanceEthicalHackingIntroduction;
