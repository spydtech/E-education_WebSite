import React, { useState } from "react";

function SecurityTestingKeyHighlights() {
  const [selectedItem, setSelectedItem] = useState(0);

  const data = [
    {
      label: "Overview",
      items: [
        "Advanced modules with Generative AI fusion",
        "E-education certificate via upGrad collaboration",
        "Access to live training sessions by Meta Blueprint trainers",
        "15+ Case Studies, Live projects",
        "Earn E-Education Executive Alumni Status",
        "90+ Tool Video Library",
        "Industry mentor-led fortnightly coaching",
        "Tailored resume feedback",
        "Mock Interview by managers",
        "Explore ChatGPT in digital marketing tutorials"
      ]
    },
    {
      label: "Key Concepts",
      items: [
        "Generative AI in digital marketing",
        "SEO",
        "Search and Display advertising",
        "Social and Display advertising",
        "Content Marketing",
        "Branding",
        "Web Analytics"
      ]
    },
    {
      label: "Applications",
      items: [
        "Digital Marketing Manager",
        "SEM Manager",
        "SEO Manager",
        "Social Media and Content Manager",
        "Associate",
        "Consultant",
        "Business Analyst",
        "(Sr.)Associate-Digital Marketing"
      ]
    },
    {
      label: "Skills Developed",
      items: [
        "List of target audience goes here...",
        "Explore 2 tracks & 5 specializations for diverse learning.",
        "Experience seamless integration with Gen AI modules.",
        "Attain E-education Executive Alumni Status for exclusive benefits.",
        "Access EMI at RS. 2,879/month for greater flexibility.",
        "A voucher worth $50 for Meta's 'Digital Marketing Associate' certificate exam, free of cost."
      ]
    },
    {
      label: "Target Audience",
      items: [
        "Utilize ChatGPT to assist in creative unique content, plan strategies, build calendars, and more",
        "Generative SEO-optimized content with ChatGPT",
        "Gain insights into your social media analytics by using ChatGPT"
      ]
    }
  ];

  const handleClick = (index) => {
    setSelectedItem(index);
  };

  const renderContent = () => {
    const selectedData = data[selectedItem];
    return (
      <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
        <p className="text-2xl font-medium text-[#f6ac14] py-4">
          {selectedData.label}
        </p>
        {selectedData.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="px-20 mb-20 bg-white">
      <div className="pt-4">
        <p className="font-bold underline-offset-2 underline text-xl p-2 text-[#f6ac14]">
          E-education Course Highlights
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start justify-center">
        <div className="w-auto h-auto md:w-[500px] md:h-[420px] mt-10 md:pl-10 pl-0 text-xl">
          {renderContent()}
        </div>
        <div className="lg:pl-14">
          <div className="pt-4">
            <p className="sm:text-2xl font-bold text-[#f6ac14] inline text-xs">
              What does this Course have to offer?
            </p>
          </div>
          <div className="w-auto h-auto xs:w-[20px] md:w-[500px] md:h-[420px] sm:w-[250px] mt-10 md:pl-16 pl-0 items-center">
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

export default SecurityTestingKeyHighlights;
