import React from "react";

function CybersecuritySyllabus() {
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
      className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:mb-20 bg-gradient-to-br from-blue-300 via-teal-500 to-green-600"
    >
      <div
        id="div1"
        className="flex items-center justify-center xl:lg:md:w-auto"
      >
        <div id="headings" className="grid grid-cols-1 text-start px-20">
          <div>
            <p className="text-white text-2xl font-bold">Syllabus</p>
          </div>
          <div className="py-5">
            <p className="text-6xl font-lora text-white">
              Discover What You
              <span className="text-yellow-300 inline pl-2">Will Learn</span>
            </p>
          </div>
          <div>
            <p className="text-xl text-white">
              Top-notch and up-to-date curriculum taught by renowned professors
              and industry experts using videos, case studies, hands-on
              projects, and live sessions.
            </p>
          </div>
        </div>
      </div>
      <div
        id="div2"
        className="space-y-5 flex justify-center px-10 p-4 mx-4  mt-8 mb-2 border-2 border-opacity-15 rounded overflow-hidden bg-gray-100 shadow-2xl"
      >
        <div className="container mx-auto">
          {data.map((category, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-4xl font-semibold mb-2 text-blue-800">
                {category.heading}
              </h2>
              <h3 className="text-2xl font-medium mb-2 text-teal-600">
                {category.subheading}
              </h3>
              <ul className="list-disc ml-6 text-lg text-gray-800">
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

export default CybersecuritySyllabus;
