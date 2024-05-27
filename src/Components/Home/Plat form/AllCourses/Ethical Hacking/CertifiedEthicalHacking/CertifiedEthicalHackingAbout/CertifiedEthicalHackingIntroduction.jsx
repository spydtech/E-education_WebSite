import React, { useState } from "react";

function CertifiedEthicalHackingIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className=" h-[400px] flex  justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-orange-600 font-lora">
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
    <>
      <div
        id="subdiv"
        className="grid grid-cols-1  w-fit   md:lg:grid-cols-2  h-full md:mb-20 bg-gradient-to-br from-yellow-300 via-orange-500 to-red-600"
      >
        <div
          id="div1"
          className="  flex items-center justify-center   xl:lg:md:w-auto "
        >
          <div
            id="headings"
            className="grid grid-cols-1 text-start px-10 font-lora"
          >
            <div>
              {" "}
              <p className="text-orange-800 text-xl font-medium">
                Introduction
              </p>
            </div>
            <div className="py-5">
              <p className="text-6xl font-lora ">
                So what is
                <p className="text-orange-800 inline pl-2">Ethical Hacking</p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">
                Brief overview of Ethical Hacking
              </p>
            </div>
          </div>
        </div>
        <div id="div2" className=" px-10   ">
          {/*  */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 ">
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
                  className=" hover:text-pink-700  text-black font-bold py-2 px-4 rounded"
                >
                  Previous
                </button>
                <div>
                  Page {currentSlide + 1}/{slidesData.length}
                </div>
                <button
                  onClick={goToNextSlide}
                  className=" hover:text-pink-700 text-black font-bold py-2 px-4 rounded"
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

export default CertifiedEthicalHackingIntroduction;
