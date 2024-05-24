// import React, { useState } from "react";

// function AdvanceEthicalHackingIntroduction() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const Slide = ({ heading, items }) => {
//     return (
//       <div className="w-full flex-shrink-0 px-4 py-8 ">
//         <div className="h-[400px] flex justify-center">
//           <div>
//             <h2 className="text-3xl font-medium mb-4 text-orange-600 font-lora">
//               {heading}
//             </h2>
//             <ul className="list-disc list-inside text-xl font-lora">
//               {items.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const slidesData = [
//     {
//       heading: "Advanced Network Penetration Testing",
//       items: [
//         "Mastering the art of advanced network penetration testing, including in-depth techniques and tools for identifying and exploiting network vulnerabilities.",
//       ],
//     },
//     {
//       heading: "Exploiting Web Application Vulnerabilities",
//       items: [
//         "Deep dive into advanced methods for exploiting web application vulnerabilities, including SQL injection, cross-site scripting, and advanced session hijacking techniques.",
//       ],
//     },
//     {
//       heading: "Advanced Social Engineering Techniques",
//       items: [
//         "Learn advanced social engineering techniques to manipulate individuals into revealing confidential information or performing actions that compromise security.",
//       ],
//     },
//     {
//       heading: "Advanced Wireless Network Security",
//       items: [
//         "In-depth study of advanced wireless network security, including techniques for securing wireless networks and advanced methods for wireless penetration testing.",
//       ],
//     },
//     {
//       heading: "Reverse Engineering and Malware Analysis",
//       items: [
//         "Gain expertise in reverse engineering and malware analysis, learning how to dissect malicious software to understand its behavior and develop countermeasures.",
//       ],
//     },
//   ];

//   const goToPreviousSlide = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === 0 ? slidesData.length - 1 : prevSlide - 1
//     );
//   };

//   const goToNextSlide = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1
//     );
//   };

//   return (
//     <>
//       <div
//         id="subdiv"
//         className="grid grid-cols-1 md:lg:grid-cols-2 gap-x-6 h-[600px]  bg-gradient-to-br from-purple-300 via-pink-500 to-red-600 mb-16"
//       >
//         <div
//           id="div1"
//           className="flex items-center justify-center xl:lg:md:w-auto"
//         >
//           <div
//             id="headings"
//             className="grid grid-cols-1 text-start px-20 font-lora"
//           >
//             <div>
//               <p className="text-orange-600 text-xl font-medium">
//                 Introduction
//               </p>
//             </div>
//             <div className="py-5">
//               <p className="text-6xl font-lora">
//                 Advanced
//                 <span className="text-violet-200 inline pl-2">
//                   Ethical Hacking
//                 </span>
//               </p>
//             </div>
//             <div>
//               <p className="text-xl text-gray-200">
//                 Deep Dive into Advanced Ethical Hacking Techniques
//               </p>
//             </div>
//           </div>
//         </div>
//         <div id="div2" className="px-10">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
//             <div className="bg-white p-5 mb-2 overflow-hidden shadow-xl sm:rounded-lg">
//               <div className="relative w-full overflow-hidden">
//                 <div className="flex">
//                   <Slide
//                     heading={slidesData[currentSlide].heading}
//                     items={slidesData[currentSlide].items}
//                   />
//                 </div>
//               </div>
//               <div className="flex justify-between">
//                 <button
//                   onClick={goToPreviousSlide}
//                   className="hover:text-pink-700 text-black font-bold py-2 px-4 rounded"
//                 >
//                   Previous
//                 </button>
//                 <div>{`Page ${currentSlide + 1}/${slidesData.length}`}</div>
//                 <button
//                   onClick={goToNextSlide}
//                   className="hover:text-pink-700 text-black font-bold py-2 px-4 rounded"
//                 >
//                   Next
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AdvanceEthicalHackingIntroduction;

import React, { useState } from "react";

function AdvanceEthicalHackingIntroduction() {
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
        className="grid grid-cols-1  w-fit   md:lg:grid-cols-2  h-full md:mb-20 bg-gradient-to-br from-purple-300 via-pink-500 to-red-600 mb-16"
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

export default AdvanceEthicalHackingIntroduction;
