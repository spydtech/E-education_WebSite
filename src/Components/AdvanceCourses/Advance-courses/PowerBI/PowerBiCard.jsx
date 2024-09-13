import React from "react";

const PowerBiCard = () => {
  const courseData = [
    {
      imgSrc:
        "https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241207.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid",
      title: "Explore Course Catalog",
      description:
        "Browse our extensive catalog of Power BI courses. Discover beginner-friendly to advanced-level programs designed to accommodate learners of all backgrounds.",
      link: "/powerbi-course-catalog",
    },
    {
      imgSrc:
        "https://img.freepik.com/free-vector/abstract-digital-technology-background-illustration_1028938-138148.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid",
      title: "Enroll in Foundational Courses",
      description:
        "Start with foundational courses covering basic concepts, tools, and methodologies essential for Power BI data visualization.",
      link: "/powerbi-foundational-courses",
    },
    {
      imgSrc:
        "https://img.freepik.com/free-vector/people-working-with-technology-isometric-style_52683-16806.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid",
      title: "Practice with Real-world Projects",
      description:
        "Apply your knowledge by working on hands-on projects tailored to real-world scenarios. Gain practical experience in Power BI services, data modeling, and report design under the guidance of industry experts.",
      link: "/powerbi-projects",
    },
    {
      imgSrc:
        "https://img.freepik.com/free-vector/isometric-financial-analysis_1262-16542.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid",
      title: "Track Your Progress",
      description:
        "Monitor your progress with intuitive dashboards and tracking tools. Set goals, track milestones, and measure your proficiency in various Power BI services as you advance through the courses.",
      link: "/powerbi-progress-tracking",
    },
    {
      imgSrc:
        "https://img.freepik.com/free-vector/isometric-data-visialization-concept-illustration_23-2148074448.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid",
      title: "Specialize and Advance",
      description:
        "Choose specialized tracks or advanced courses to delve deeper into specific areas of Power BI, such as data analytics, dashboard creation, or Power Query. Customize your learning path to align with your interests and career goals.",
      link: "/powerbi-specialize",
    },
    {
      imgSrc:
        "https://img.freepik.com/premium-photo/computer-monitor-with-blue-screen-that-says-graph-it_1103290-80279.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid",
      title: "Earn Recognized Certifications",
      description:
        "Upon successful completion of courses and projects, earn industry-recognized certifications to showcase your expertise to employers and enhance your career prospects.",
      link: "/powerbi-certifications",
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section py-10 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl pb-2 md:text-4xl lg:text-5xl font-medium">
            <span className="text-[#f6ac14]">Mastering</span>
            <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent">
              {" "}
              Data Visualization with Power BI{" "}
            </span>
            <span className="text-[#0098f1]"> Create Impactful Visualizations</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courseData.map((course, index) => (
            <div
              key={index}
              className="group border-2 hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden"
            >
              <a href={course.link}>
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

export default PowerBiCard;
