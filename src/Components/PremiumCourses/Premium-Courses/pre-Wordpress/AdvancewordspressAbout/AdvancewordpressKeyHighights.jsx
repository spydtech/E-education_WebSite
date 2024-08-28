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
          <ul className="space-y-2 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Overview</p>
            <li>Introduction to advanced Wordpress programming and its importance.</li>
            <li>Understanding modern Wordpress development practices.</li>
            <li>Exploring Wordpress 7+ features and improvements.</li>
            <li>Utilizing Wordpress in web development and beyond.</li>
            <li>Integration with databases and other technologies.</li>
            <li>Introduction to Wordpress frameworks and tools.</li>
          </ul>
        );
      case 1:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Key Concepts</p>
            <li>Advanced Object-Oriented Programming (OOP) in Wordpress.</li>
            <li>Namespaces and autoloading with Composer.</li>
            <li>Traits and reusable code patterns.</li>
            <li>Dependency Injection and Service Containers.</li>
            <li>RESTful API development with Wordpress.</li>
            <li>Security best practices in Wordpress.</li>
            <li>Error handling and debugging techniques.</li>
          </ul>
        );
      case 2:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Applications</p>
            <li>Web Application Development</li>
            <li>API Development and Integration</li>
            <li>Command Line Interface (CLI) Scripts</li>
            <li>Data Processing and ETL tasks</li>
            <li>Content Management Systems (CMS)</li>
            <li>E-commerce platforms</li>
            <li>Microservices Architecture</li>
            <li>Custom Frameworks and Libraries</li>
          </ul>
        );
      case 3:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Skills Developed</p>
            <li>Proficiency in modern Wordpress syntax and features.</li>
            <li>Understanding of advanced OOP principles.</li>
            <li>Ability to develop and consume RESTful APIs.</li>
            <li>Experience with Wordpress frameworks like Laravel or Symfony.</li>
            <li>Knowledge of security best practices in Wordpress.</li>
            <li>Ability to write efficient and maintainable code.</li>
            <li>Proficiency in database integration and ORM.</li>
            <li>Understanding of testing and debugging techniques.</li>
          </ul>
        );
      case 4:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Target Audience</p>
            <li>Wordpress Developers looking to deepen their knowledge.</li>
            <li>Web Developers aiming to master backend development.</li>
            <li>Software Engineers interested in Wordpress frameworks.</li>
            <li>IT professionals transitioning to Wordpress development.</li>
            <li>Students pursuing a career in web development.</li>
            <li>Freelancers building complex Wordpress applications.</li>
            <li>Project managers wanting to understand Wordpress development better.</li>
            <li>Technology enthusiasts exploring server-side scripting.</li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="md:px-20 px-10 mb-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start justify-center">
        <div className="w-auto h-auto md:lg:w-[500px] md:lg:h-[420px] mt-10 md:lg:pl-10 pl-0 text-xl">
          {renderContent()}
        </div>
        <div className="md:lg:pl-20 pl-0">
          <div className="pt-4">
            <p className="font-bold underline-offset-2 underline text-xl  text-[#f6ac14]">
              Advanced wordpress Key Highlights
            </p>
          {/*}  <div className="flex space-x-3 pt-4">
              <p className="text-2xl font-bold">What does this</p>
              <p className="text-2xl font-bold text-[#f6ac14]">Course have to offer?</p>
            </div>*/}
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

export default AdvancewordpressKeyHighlights;
