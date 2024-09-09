import React from "react";

const ERPCard = () => {
  const courseData = [
    {
      href: "/erp-course-catalog",
      imgSrc: "https://img.freepik.com/free-photo/plan-planning-guidelines-process-solution-concept_53876-21153.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid",
      title: "Explore Course Catalog",
      description: "Browse our extensive catalog of ERP courses. Discover beginner-friendly to advanced-level programs designed to accommodate learners of all backgrounds.",
    },
    {
      href: "/erp-foundational-courses",
      imgSrc: "https://img.freepik.com/premium-photo/group-people-meeting-with-man-suit-sitting-table-with-laptop-front-him_1173110-342.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid",
      title: "Enroll in Foundational Courses",
      description: "Start with foundational courses covering basic concepts, tools, and methodologies essential for ERP systems.",
    },
    {
      href: "/erp-projects",
      imgSrc: "https://img.freepik.com/premium-photo/group-people-are-sitting-around-table-with-blue-background-with-blue-screen-with-word_941526-7242.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid",
      title: "Practice with Real-world Projects",
      description: "Apply your knowledge by working on hands-on projects tailored to real-world scenarios. Gain practical experience in ERP implementation and integration under the guidance of industry experts.",
    },
    {
      href: "/erp-progress-tracking",
      imgSrc: "https://img.freepik.com/free-vector/team-work-concept-with-flat-design_23-2147846971.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid",
      title: "Track Your Progress",
      description: "Monitor your progress with intuitive dashboards and tracking tools. Set goals, track milestones, and measure your proficiency in various ERP modules as you advance through the courses.",
    },
    {
      href: "/erp-specialize",
      imgSrc: "https://img.freepik.com/free-vector/business-meeting-concept-illustration_114360-1511.jpg?w=740",
      title: "Specialize and Advance",
      description: "Choose specialized tracks or advanced courses to delve deeper into specific areas of ERP, such as supply chain management, finance, or human resources. Customize your learning path to align with your interests and career goals.",
    },
    {
      href: "/erp-certifications",
      imgSrc: "https://img.freepik.com/premium-photo/business-planning-vision-teamwork-strategy_1036975-209833.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid",
      title: "Earn Recognized Certifications",
      description: "Upon successful completion of courses and projects, earn industry-recognized certifications to showcase your expertise to employers and enhance your career prospects.",
    }
  ];

  return (
    <section id="portfolio" className="portfolio-section pt-6 md:pt-0 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl pb-2 md:text-4xl lg:text-5xl font-medium">
            <span className="text-[#f6ac14]">Mastering</span>
            <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent">
              {" "}
              Enterprise Resource Planning (ERP):{" "}
            </span>
            <span className="text-[#0098f1]"> Optimize Business Processes</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courseData.map((course, index) => (
            <div
              key={index}
              className="group border-2 hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden"
            >
              <a href={course.href}>
                <div className="h-[210px] bg-[#0098f1]">
                  <img
                    className="w-full h-full object-cover"
                    src={course.imgSrc}
                    alt={course.title}
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

export default ERPCard;
