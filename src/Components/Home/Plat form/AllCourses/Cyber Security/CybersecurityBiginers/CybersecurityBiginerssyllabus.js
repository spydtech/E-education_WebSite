import React from "react";

function CybersecurityBiginersSyllabus() {
  const data = [
    {
      heading: "Cybersecurity",
      subheading: "Topics (16)",
      items: [
        "Introduction to Cybersecurity",
        "Network Security",
        "Cryptography",
        "Cyber Threats and Defense",
        "Security Operations and Incident Response",
        "Identity and Access Management",
        "Ethical Hacking and Penetration Testing",
        "Application Security",
        "Cloud Security",
        "IoT Security",
        "Security Architecture and Design",
        "Risk Management and Compliance",
        "Digital Forensics",
        "Malware Analysis",
        "Cybersecurity Governance",
        "Legal and Ethical Issues in Cybersecurity",
      ],
    },
  ];

  return (
    <div
      id="subdiv"
      className="grid grid-cols-1 md:lg:grid-cols-2 gap-x-6 bg-gradient-to-br  from-[#89fc00] to-[#12862b]"
    >
      <div
        id="div1"
        className="flex items-center justify-center xl:lg:md:w-auto"
      >
        <div id="headings" className="grid grid-cols-1 text-start px-20">
          <div>
            <p className="text-[#7400b8] text-xl font-medium">Syllabus</p>
          </div>
          <div className="py-5">
            <p className="text-6xl font-lora">
              Discover What You
              <p className="text-[#7400b8] inline pl-2">Will Learn</p>
            </p>
          </div>
          <div>
            <p className="text-xl text-gray-300">
              Top-notch and up-to-date curriculum taught by renowned professors
              and industry experts using videos, case studies, hands-on
              projects, and live sessions.
            </p>
          </div>
        </div>
      </div>
      <div
        id="div2"
        className="space-y-5 flex justify-center px-10 p-4 my-2 mx-2 mb-2 border-2 border-opacity-15 rounded overflow-hidden bg-gray-200 shadow-2xl"
      >
        <div className="container mx-auto">
          {data.map((category, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-4xl font-semibold mb-2 text-[#7400b8]">
                {category.heading}
              </h2>
              <h3 className="text-2xl font-medium mb-2">
                {category.subheading}
              </h3>
              <ul className="list-disc ml-6 text-[16px]">
                {category.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CybersecurityBiginersSyllabus;
