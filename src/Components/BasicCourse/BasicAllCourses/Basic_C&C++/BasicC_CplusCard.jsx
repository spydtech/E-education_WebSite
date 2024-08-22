import React from "react";

const BasicC_CplusCard = () => {
  const courseData = [
    {
      href: "/course-catalog",
      imgSrc: "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?t=st=1722897135~exp=1722900735~hmac=da686f295aec82645344447123151eb8acf4b41464a64016f192fd244b18a769&w=826",
      title: "Explore Course Catalog",
      description: "Browse our extensive catalog of C & C++ courses. Discover beginner-friendly to advanced-level programs designed to accommodate learners of all backgrounds.",
    },
    {
      href: "/foundational-courses",
      imgSrc: "https://img.freepik.com/free-vector/cloud-warehouse-data-copy-storage-server-room-connection-with-cloud_39422-568.jpg?t=st=1722897212~exp=1722900812~hmac=e6cc4f6c043aa10a425b729f59bc858ab5b9d5f2ad5bd1913edfabf5c9bd811c&w=826",
      title: "Enroll in Foundational Courses",
      description: "Start with foundational courses covering basic concepts, tools, and methodologies essential for C & C++ development.",
    },
    {
      href: "/real-world-projects",
      imgSrc: "https://img.freepik.com/premium-vector/learning-programming-programmer-working-computer-man-workplace-working-pc_130951-678.jpg?w=900",
      title: "Practice with Real-world Projects",
      description: "Apply your knowledge by working on hands-on projects tailored to real-world scenarios. Gain practical experience in C & C++ development, system programming, and software design under the guidance of industry experts.",
    },
    {
      href: "/track-progress",
      imgSrc: "https://img.freepik.com/free-vector/programmer-working-computer_23-2148312611.jpg?t=st=1722897540~exp=1722901140~hmac=22d0bc8e255ce407934ee3a10055974d4999fcc9e3ec2fb65348eefc5e43f4e2&w=740",
      title: "Track Your Progress",
      description: "Monitor your progress with intuitive dashboards and tracking tools. Set goals, track milestones, and measure your proficiency in various C & C++ concepts as you advance through the courses.",
    },
    {
      href: "/specialize-advance",
      imgSrc: "https://img.freepik.com/premium-photo/coding-computer-screen-gradient-background_1020200-5377.jpg?w=360",
      title: "Specialize and Advance",
      description: "Choose specialized tracks or advanced courses to delve deeper into specific areas of C & C++ development, such as systems programming, embedded systems, or performance optimization. Customize your learning path to align with your interests and career goals.",
    },
    {
      href: "/certifications",
      imgSrc: "https://img.freepik.com/premium-photo/programming-code-computer-screen-with-gradient-background_1020200-5387.jpg?w=1060",
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
              C & C++:{" "}
            </span>
            <span className="text-[#0098f1]"> Build Efficient Software Applications</span>
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
                    alt={`Course ${index + 1}`}
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

export default BasicC_CplusCard;
