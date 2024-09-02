import React, { useState } from "react";

function ERPKeyHighlights() {
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
            <li>Advanced modules with Generative AI fusion</li>
            <li>E-education certificate via upGrad collaboration</li>
            <li>Access to live training sessions by Meta Blueprint trainers</li>
            <li>15+ Case Studies, Live projects</li>
            <li>Earn E-Education Executive Alumni Status</li>
            <li>90+ Tool Video Library</li>
            <li>Industry mentor-led fortnightly coaching</li>
            <li>Tailored resume feedback</li>
            <li>Mock Interview by managers</li>
            <li>Explore ChatGPT in digital marketing tutorials</li>
          </ul>
        );
      case 1:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Key Concepts</p>
            <li>Generative AI in digital marketing</li>
            <li>SEO</li>
            <li>Search and Display advertising</li>
            <li>Social and Display advertising</li>
            <li>Content Marketing</li>
            <li>Branding</li>
            <li>Web Analytics</li>
          </ul>
        );
      case 2:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Applications</p>
            <li>Digital Marketing Manager</li>
            <li>SEM Manager</li>
            <li>SEO Manager</li>
            <li>Social Media and Content Manager</li>
            <li>Associate</li>
            <li>Consultant</li>
            <li>Business Analyst</li>
            <li>(Sr.) Associate-Digital Marketing</li>
          </ul>
        );
      case 3:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Skills Developed</p>
            <li>List of target audience goes here...</li>
            <li>Explore 2 tracks & 5 specializations for diverse learning.</li>
            <li>Experience seamless integration with Gen AI modules.</li>
            <li>Attain E-Education Executive Alumni Status for exclusive benefits.</li>
            <li>Access EMI at RS. 2,879/month for greater flexibility.</li>
            <li>A voucher worth $50 for Meta's "Digital Marketing Associate" certificate exam, free of cost.</li>
          </ul>
        );
      case 4:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Target Audience</p>
            <li>Utilize ChatGPT to assist in creative unique content, plan strategies, build calendars, and more</li>
            <li>Generative SEO-optimized content with ChatGPT</li>
            <li>Gain insights into your social media analytics by using ChatGPT</li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="px-10 md:px-20 mb-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start justify-center">
        <div className="w-auto h-auto md:lg:w-[500px] md:lg:h-[420px] mt-10 md:lg:pl-10 pl-0 text-xl">
          {renderContent()}
        </div>
        <div className="md:lg:pl-20 pl-0">
          <div className="pt-4">
            <p className="font-bold underline-offset-2 underline text-xl  text-[#f6ac14]">
              E-Education Course Highlights
            </p>
          </div>
          <div className="pt-4 ">
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

export default ERPKeyHighlights;
