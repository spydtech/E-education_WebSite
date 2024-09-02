import React, { useState } from "react";

function BasicC_CplusKeyHighlights() {
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
            <li>Introduction to C and C++ programming languages</li>
            <li>Advanced modules with industry applications</li>
            <li>Hands-on coding exercises and projects</li>
            <li>Expert-led training sessions and workshops</li>
            <li>Comprehensive study material and resources</li>
          </ul>
        );
      case 1:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Key Concepts</p>
            <li>Basics of C and C++ syntax</li>
            <li>Object-oriented programming in C++</li>
            <li>Memory management and pointers</li>
            <li>Data structures and algorithms</li>
            <li>File handling and error management</li>
          </ul>
        );
      case 2:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Applications</p>
            <li>Software development and engineering</li>
            <li>Game development</li>
            <li>System-level programming</li>
            <li>Embedded systems</li>
            <li>Performance optimization</li>
          </ul>
        );
      case 3:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Skills Developed</p>
            <li>Proficiency in C and C++ programming</li>
            <li>Strong problem-solving skills</li>
            <li>Understanding of low-level programming concepts</li>
            <li>Experience with real-world projects and coding challenges</li>
            <li>Ability to write efficient and optimized code</li>
          </ul>
        );
      case 4:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Target Audience</p>
            <li>Aspiring programmers looking to learn C and C++</li>
            <li>Students and professionals seeking to enhance their coding skills</li>
            <li>Developers interested in system-level and performance-critical applications</li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="sm:px-20 pl-12 mb-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start justify-center">
        <div className="w-auto h-auto md:w-[500px] md:h-[420px] mt-10 md:pl-10 pl-0 text-xl">
          {renderContent()}
        </div>
        <div className="md:pl-20 pl-0">
          <div className="pt-4 md:pt-0 lg:pt-4">
            <p className="font-bold underline-offset-2 underline text-xl p-2 text-[#f6ac14]">
              E-Education Course Highlights
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

export default BasicC_CplusKeyHighlights;
