import React, { useState } from "react";

function Ui_UxKeyHighlights() {
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
            <li>Introduction to UI/UX design principles</li>
            <li>Focus on user-centered design and usability</li>
            <li>Hands-on projects and real-world applications</li>
            <li>Access to industry-leading design tools and resources</li>
            <li>Expert-led workshops and training sessions</li>
          </ul>
        );
      case 1:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Key Concepts</p>
            <li>User Experience (UX) design fundamentals</li>
            <li>User Interface (UI) design best practices</li>
            <li>Wireframing and prototyping techniques</li>
            <li>Usability testing and feedback integration</li>
            <li>Design systems and component libraries</li>
          </ul>
        );
      case 2:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Applications</p>
            <li>UI/UX Designer</li>
            <li>Product Designer</li>
            <li>Interaction Designer</li>
            <li>Usability Analyst</li>
            <li>UX Researcher</li>
            <li>Visual Designer</li>
          </ul>
        );
      case 3:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Skills Developed</p>
            <li>Proficiency in design tools like Figma and Adobe XD</li>
            <li>Strong understanding of UX research and testing methods</li>
            <li>Ability to create user-friendly and visually appealing interfaces</li>
            <li>Experience with wireframing and prototyping</li>
            <li>Capability to design responsive and adaptive layouts</li>
          </ul>
        );
      case 4:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Target Audience</p>
            <li>Aspiring UI/UX designers looking to build their skills</li>
            <li>Professionals seeking to transition into design roles</li>
            <li>Design enthusiasts eager to learn industry best practices</li>
            <li>Students and graduates aiming for a career in design</li>
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
            <p className="font-bold underline-offset-2 underline text-xl text-[#f6ac14]">
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

export default Ui_UxKeyHighlights;
