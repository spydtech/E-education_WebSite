import React from "react";

function Ui_UxSyllabus() {
  const data = [
    {
      heading: "Introduction to UI/UX Design",
      subheading: "Topics (15)",
      items: [
        "What is UI/UX Design?",
        "Difference Between UI and UX",
        "Importance of UI/UX Design",
        "Design Thinking Process",
        "User Research and Personas",
        "Wireframing and Prototyping",
        "Visual Design Principles",
        "Typography and Color Theory",
        "Usability and Accessibility",
        "Interaction Design",
        "UI/UX Design Tools",
        "Responsive Design",
        "Design Systems and Style Guides",
        "User Testing and Feedback",
        "UI/UX Design Trends",
      ],
    },
  ];

  return (
    <div className="py-8">
      <div className="flex flex-col lg:flex-row items-start justify-between px-4">
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0 px-10">
          <div className="text-start">
            <h2 className="text-2xl text-[#0098f1] font-bold mb-4">
              Discover What You Will Learn
            </h2>
            <p className="text-lg text-gray-500">
              Dive into the world of UI/UX design with our comprehensive syllabus covering the fundamental concepts, best practices, and future trends in UI/UX design.
            </p>
          </div>
        </div>
        <div className="lg:w-[700px] w-full bg-[#0098f1] p-6 pl-20 rounded-lg shadow-lg">
          <div className="container mx-auto">
            {data.map((category, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-3xl font-semibold mb-2 text-white">
                  {category.heading}
                </h3>
                <h4 className="text-xl md:text-2xl font-medium mb-2 text-white">
                  {category.subheading}
                </h4>
                <ul className="list-disc ml-4 text-base md:text-lg text-white">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="mb-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui_UxSyllabus;
