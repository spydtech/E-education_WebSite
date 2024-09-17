import React from "react";
import Img1 from "../../../../assetss/Basic_Courses/BasicJavaScript/image1.jpg";
import Img2 from "../../../../assetss/Basic_Courses/BasicJavaScript/image2.jpg";
import Img3 from "../../../../assetss/Basic_Courses/BasicJavaScript/image3.jpg";
import Img4 from "../../../../assetss/Basic_Courses/BasicJavaScript/image4.jpg";
import Img5 from "../../../../assetss/Basic_Courses/BasicJavaScript/image5.jpg";
import Img6 from "../../../../assetss/Basic_Courses/BasicJavaScript/image6.jpg";

const BasicJavaScriptCard = () => {
  const courseData = [
    {
      imgSrc: Img1,
      title: "Explore Course Catalog",
      description:
        "Browse our extensive catalog of JavaScript courses. Discover beginner-friendly to advanced-level programs designed to accommodate learners of all backgrounds.",
    },
    {
      imgSrc: Img2,
      title: "Enroll in Foundational Courses",
      description:
        "Start with foundational courses covering basic concepts, tools, and methodologies essential for JavaScript development.",
    },
    {
      imgSrc: Img3,
      title: "Practice with Real-world Projects",
      description:
        "Apply your knowledge by working on hands-on projects tailored to real-world scenarios. Gain practical experience in JavaScript development, DOM manipulation, and web application design under the guidance of industry experts.",
    },
    {
      imgSrc: Img4,
      title: "Track Your Progress",
      description:
        "Monitor your progress with intuitive dashboards and tracking tools. Set goals, track milestones, and measure your proficiency in various JavaScript concepts as you advance through the courses.",
    },
    {
      imgSrc: Img5,
      title: "Specialize and Advance",
      description:
        "Choose specialized tracks or advanced courses to delve deeper into specific areas of JavaScript development, such as frameworks, API integration, or performance optimization. Customize your learning path to align with your interests and career goals.",
    },
    {
      imgSrc: Img6,
      title: "Earn Recognized Certifications",
      description:
        "Upon successful completion of courses and projects, earn industry-recognized certifications to showcase your expertise to employers and enhance your career prospects.",
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section py-10 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xl sm:pb-2 md:text-4xl lg:text-5xl font-medium">
            <span className="text-[#f6ac14]">Mastering</span>
            <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent">
              {" "}
              Java Script:{" "}
            </span>
            <span className="text-[#0098f1]">
              {" "}
              Build Dynamic Web Applications
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseData.map((course, index) => (
            <div
              key={index}
              className="group border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <a href="#">
                <div className="h-[210px] bg-[#0098f1]">
                  <img
                    className="w-full h-full object-cover"
                    src={course.imgSrc}
                    alt={`Course ${index + 1}`}
                  />
                </div>
                <div className="p-6 flex flex-col items-start justify-between">
                  <h3 className="text-lg font-bold text-center text-gray-800 group-hover:text-[#f6ac14] mb-3 w-full">
                    {course.title}
                  </h3>
                  <p className="text-md text-gray-600 text-left">
                    {course.description}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BasicJavaScriptCard;

