import React from "react";

const BasicJavaScriptCard = () => {
  const courseData = [
    {
      imgSrc: "https://img.freepik.com/free-vector/javascript-frameworks-concept-illustration_114360-752.jpg?t=st=1722848868~exp=1722852468~hmac=5f3db5f71ef16598efe1b7ab049e7de15e398ad81d7a0d5293077527aa2e7ce8&w=740",
      title: "Explore Course Catalog",
      description: "Browse our extensive catalog of JavaScript courses. Discover beginner-friendly to advanced-level programs designed to accommodate learners of all backgrounds.",
    },
    {
      imgSrc: "https://img.freepik.com/free-vector/flat-computer-engineering-concept_23-2148152149.jpg?t=st=1722848797~exp=1722852397~hmac=27602d248273a5b1ee68bb0f86b40e56841c5769776078c7f1a8260a6b034dd8&w=740",
      title: "Enroll in Foundational Courses",
      description: "Start with foundational courses covering basic concepts, tools, and methodologies essential for JavaScript development.",
    },
    {
      imgSrc: "https://img.freepik.com/free-vector/web-development-banner_33099-1687.jpg?w=740",
      title: "Practice with Real-world Projects",
      description: "Apply your knowledge by working on hands-on projects tailored to real-world scenarios. Gain practical experience in JavaScript development, DOM manipulation, and web application design under the guidance of industry experts.",
    },
    {
      imgSrc: "https://img.freepik.com/free-vector/programmer-doing-his-job-flat-design_52683-14150.jpg?t=st=1722848437~exp=1722852037~hmac=0c2ba71ade89e3ac3d29c7410860f9046f8aa373cef1509bfba4f6faf4339a7c&w=740",
      title: "Track Your Progress",
      description: "Monitor your progress with intuitive dashboards and tracking tools. Set goals, track milestones, and measure your proficiency in various JavaScript concepts as you advance through the courses.",
    },
    {
      imgSrc: "https://img.freepik.com/free-vector/app-development-concept-with-desk-desktop_23-2148699345.jpg?t=st=1722848915~exp=1722852515~hmac=52791024cec51b38914f802dde3b77e730a59396c0abc7240445390cc3e7a647&w=740",
      title: "Specialize and Advance",
      description: "Choose specialized tracks or advanced courses to delve deeper into specific areas of JavaScript development, such as frameworks, API integration, or performance optimization. Customize your learning path to align with your interests and career goals.",
    },
    {
      imgSrc: "https://img.freepik.com/free-vector/single-page-application-abstract-concept-illustration-spa-web-page-web-development-trend-app-inside-browser-dynamically-rewriting-page-responsive-website-creation_335657-899.jpg?t=st=1722849058~exp=1722852658~hmac=498f8ac9070511442a827b6e63599025fcf43db13d0036ebde6ba6ac2352dd36&w=740",
      title: "Earn Recognized Certifications",
      description: "Upon successful completion of courses and projects, earn industry-recognized certifications to showcase your expertise to employers and enhance your career prospects.",
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section py-10 md:py-0 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl pb-2 md:text-4xl  lg:text-5xl font-medium">
            <span className="text-[#f6ac14]">Mastering</span>
            <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent">
              {" "}
              JavaScript:{" "}
            </span>
            <span className="text-[#0098f1]"> Build Dynamic Web Applications</span>
          </h2>
         {/*} <p className="text-lg text-[#31cb00] font-semibold mt-2">
            Enhance your web development skills with our comprehensive JavaScript courses. Dive deep into JavaScript programming and gain hands-on experience. Whether novice or pro, create dynamic and interactive web applications with confidence.
          </p>*/}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courseData.map((course, index) => (
            <div
              key={index}
              className="group border-2 hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden"
            >
              <a href="#">
                <div className="h-[210px] bg-[#0098f1]">
                  <img
                    className="w-full h-full object-cover"
                    src={course.imgSrc}
                    alt={`Project ${index + 1}`}
                  />
                </div>
                <div className="p-4 flex flex-col items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-800 group-hover:text-gray-900">
                    {course.title}
                  </h3>
                  <p className="text-md text-gray-600 pt-4">
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
