import React from "react";

const UsabilityTestingCard = () => {
  const courseData = [
    {
      imgSrc: "https://img.freepik.com/free-vector/flat-web-development-concept-cms_23-2148806100.jpg?t=st=1716808376~exp=1716811976~hmac=33d99af9c16d2fb1950dc4ffe4fcca248df75640c1789e115a62248bf650076a&w=826",
      title: "Explore Course Catalog",
      description: "Browse our extensive catalog of Usability Testing courses. Discover beginner-friendly to advanced-level programs designed to accommodate learners of all backgrounds.",
    },
    {
      imgSrc: "https://img.freepik.com/free-vector/user-interface-development-isometric-concept-with-young-woman-creating-custom-design-mobile-application-vector-illustration_1284-72341.jpg?t=st=1716808402~exp=1716812002~hmac=ef1bc3361183a549d53ffb181464d1c41c4b1aa5a8ea1bbef02519b746ded771&w=740",
      title: "Enroll in Foundational Courses",
      description: "Start with foundational courses covering basic concepts, tools, and methodologies essential for Usability Testing.",
    },
    {
      imgSrc: "https://img.freepik.com/free-vector/kanban-method-concept-illustration_114360-9810.jpg?t=st=1716808425~exp=1716812025~hmac=50e334abe77c4be477f5cf4d2435381e272958d47bc92f9ed56eddc19d608a51&w=740",
      title: "Practice with Real-world Projects",
      description: "Apply your knowledge by working on hands-on projects tailored to real-world scenarios. Gain practical experience in usability testing, user research, and design evaluation under the guidance of industry experts.",
    },
    {
      imgSrc: "https://img.freepik.com/free-vector/internet-day-concept-illustration_114360-5303.jpg?t=st=1716808445~exp=1716812045~hmac=225347e9f8c42422dbda63b3271bdf91e3804a4b1d45f59a756d86e38f1146a1&w=740",
      title: "Track Your Progress",
      description: "Monitor your progress with intuitive dashboards and tracking tools. Set goals, track milestones, and measure your proficiency in various Usability Testing concepts as you advance through the courses.",
    },
    {
      imgSrc: "https://img.freepik.com/free-vector/marketing-concept-illustration_114360-3903.jpg?t=st=1716808460~exp=1716812060~hmac=b9aab589a0c1b5dea0e60314ba921c742af966e4450f989022d48a6ca7833906&w=826",
      title: "Specialize and Advance",
      description: "Choose specialized tracks or advanced courses to delve deeper into specific areas of Usability Testing, such as user experience design, user research methods, or accessibility testing. Customize your learning path to align with your interests and career goals.",
    },
    {
      imgSrc: "https://img.freepik.com/premium-vector/app-development-modern-flat-concept-web-banner-design-male-designer-works-laptop-develops_9209-8179.jpg?w=826",
      title: "Earn Recognized Certifications",
      description: "Upon successful completion of courses and projects, earn industry-recognized certifications to showcase your expertise to employers and enhance your career prospects.",
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
              Usability Testing
            </span>
            <span className="text-[#0098f1]"> Expertise</span>
          </h2>
         {/*} <p className="text-md text-gray-600">
            Elevate your skills with our Usability Testing courses. Explore methodologies and gain practical insights. Whether a beginner or an expert, optimize user experiences with confidence.
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

export default UsabilityTestingCard;
