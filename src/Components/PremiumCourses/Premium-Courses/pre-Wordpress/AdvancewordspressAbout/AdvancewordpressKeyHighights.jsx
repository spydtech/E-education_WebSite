import React, { useState } from "react";

function AdvancewordpressKeyHighlights() {
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
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Overview</p>
            <ul className="space-y-2 font-normal list-disc pl-6 text-white">
              <li>Introduction to advanced Wordpress programming and its importance.</li>
              <li>Understanding modern Wordpress development practices.</li>
              <li>Exploring Wordpress 7+ features and improvements.</li>
              <li>Utilizing Wordpress in web development and beyond.</li>
              <li>Integration with databases and other technologies.</li>
              <li>Introduction to Wordpress frameworks and tools.</li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Key Concepts</p>
            <ul className="space-y-2 font-normal list-disc pl-6 text-white">
              <li>Advanced Object-Oriented Programming (OOP) in Wordpress.</li>
              <li>Namespaces and autoloading with Composer.</li>
              <li>Traits and reusable code patterns.</li>
              <li>Dependency Injection and Service Containers.</li>
              <li>RESTful API development with Wordpress.</li>
              <li>Security best practices in Wordpress.</li>
              <li>Error handling and debugging techniques.</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Applications</p>
            <ul className="space-y-2 font-normal list-disc pl-6 text-white">
              <li>Web Application Development</li>
              <li>API Development and Integration</li>
              <li>Command Line Interface (CLI) Scripts</li>
              <li>Data Processing and ETL tasks</li>
              <li>Content Management Systems (CMS)</li>
              <li>E-commerce platforms</li>
              <li>Microservices Architecture</li>
              <li>Custom Frameworks and Libraries</li>
            </ul>
          </div>
        );
      case 3:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Skills Developed</p>
            <ul className="space-y-2 font-normal list-disc pl-6 text-white">
              <li>Proficiency in modern Wordpress syntax and features.</li>
              <li>Understanding of advanced OOP principles.</li>
              <li>Ability to develop and consume RESTful APIs.</li>
              <li>Experience with Wordpress frameworks like Laravel or Symfony.</li>
              <li>Knowledge of security best practices in Wordpress.</li>
              <li>Ability to write efficient and maintainable code.</li>
              <li>Proficiency in database integration and ORM.</li>
              <li>Understanding of testing and debugging techniques.</li>
            </ul>
          </div>
        );
      case 4:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Target Audience</p>
            <ul className="space-y-2 font-normal list-disc pl-6 text-white">
              <li>Wordpress Developers looking to deepen their knowledge.</li>
              <li>Web Developers aiming to master backend development.</li>
              <li>Software Engineers interested in Wordpress frameworks.</li>
              <li>IT professionals transitioning to Wordpress development.</li>
              <li>Students pursuing a career in web development.</li>
              <li>Freelancers building complex Wordpress applications.</li>
              <li>Project managers wanting to understand Wordpress development better.</li>
              <li>Technology enthusiasts exploring server-side scripting.</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="px-4 md:mb-4">
      <div className="md:flex justify-around">
        <div className="bg-[#0098F1] text-white md:w-[380px] lg:w-[520px] p-2">
          {renderContent()}
        </div>
        <div className="my-3">
          <p className="font-bold underline-offset-2 text-wrap underline text-xl text-[#0098F1]">
            Advanced Wordpress Key Highlights
          </p>
          {data.map((item, index) => (
            <ul key={index}>
              <li
                onClick={() => handleClick(index)}
                className={`p-5 hover:cursor-pointer text-xl my-2 md:h-16 md:w-[210px] border-2 rounded-md ${
                  selectedItem === index
                    ? "bg-[#0098f1] text-white border-none"
                    : ""
                }`}
              >
                {item.label}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdvancewordpressKeyHighlights;
