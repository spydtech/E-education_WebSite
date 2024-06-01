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
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 bg-gradient-to-br to-[#0a0908] from-[#272640]">
        <div className="flex items-center justify-center xl:lg:md:w-auto">
          <div className="grid grid-cols-1 text-start px-20">
            <div>
              <p className="text-[#0070f3] text-xl font-medium">Syllabus</p>
            </div>
            <div className="py-5">
              <p className="text-6xl font-lora text-white">
                Explore
                <p className="text-[#0070f3] inline pl-2">UI/UX Design</p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-300">
                Dive into the world of UI/UX design with our comprehensive
                syllabus covering the fundamental concepts, best practices, and
                future trends in UI/UX design.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-5 flex justify-center px-10 p-4 my-2 mx-2 mb-2 border-2 border-opacity-15 rounded overflow-hidden bg-gray-200 shadow-2xl">
          <div className="container mx-auto">
            {data.map((category, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-4xl font-semibold mb-2 text-[#0070f3]">
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
    </>
  );
}

export default Ui_UxSyllabus;
