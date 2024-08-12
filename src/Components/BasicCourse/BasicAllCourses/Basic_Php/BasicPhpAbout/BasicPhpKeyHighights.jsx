import React, { useState } from "react";

function BasicPhpKeyHighlights() {
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
            <li>Introduction to PHP programming</li>
            <li>Basics of server-side scripting</li>
            <li>Database integration with MySQL</li>
            <li>Building dynamic websites</li>
            <li>Error handling and debugging</li>
          </ul>
        );
      case 1:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Key Concepts</p>
            <li>PHP Syntax and Operators</li>
            <li>Control Structures</li>
            <li>Functions and Arrays</li>
            <li>Sessions and Cookies</li>
            <li>File Handling</li>
            <li>Object-Oriented Programming</li>
          </ul>
        );
      case 2:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Applications</p>
            <li>Web Application Development</li>
            <li>Content Management Systems (CMS)</li>
            <li>E-commerce Platforms</li>
            <li>Custom Web Solutions</li>
            <li>API Development</li>
          </ul>
        );
      case 3:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Skills Developed</p>
            <li>Develop dynamic and interactive websites</li>
            <li>Integrate PHP with databases</li>
            <li>Implement security measures in web applications</li>
            <li>Debug and troubleshoot PHP code</li>
            <li>Create and manage sessions and cookies</li>
          </ul>
        );
      case 4:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Target Audience</p>
            <li>Beginner programmers interested in server-side scripting</li>
            <li>Web developers looking to enhance their skills with PHP</li>
            <li>Individuals aiming to build dynamic web applications</li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="px-20 mb-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start justify-center">
        <div className="w-auto h-auto md:lg:w-[500px] md:lg:h-[420px] mt-10 md:lg:pl-10 pl-0 text-xl">
          {renderContent()}
        </div>
        <div className="md:lg:pl-20 pl-0">
          <div className="pt-4">
            <p className="font-bold underline-offset-2 underline text-xl p-2 text-[#f6ac14]">
              E-Education Course Highlights
            </p>
          </div>
        {/*}  <div className="md:lg:flex pl-2 space-x-3 md:lg:w-auto lg:md:h-auto w-96 h-auto">
            <p className="text-xl font-bold">What does this</p>
            <p className="text-xl font-bold text-[#f6ac14] inline">
              Course have to offer?
            </p>
          </div>*/}
          <div className="pt-4 -ml-10 md:ml-10 lg:-ml-0 lg:ml-10">
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

export default BasicPhpKeyHighlights;
