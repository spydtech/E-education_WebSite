import React from "react";

const BasicJavaCard = () => {
  const courseData = [
    {
      imgSrc:
        "https://img.freepik.com/free-vector/programmer-doing-his-job-office_23-2148274928.jpg?t=st=1722598938~exp=1722602538~hmac=36fae1570ff87c8591042b26cfa59ae8a79c12292f342cb0428c64d21ea2251f&w=740",
      title: "Explore Course Catalog",
      description:
        "Browse our extensive catalog of Java Programming courses. Discover beginner-friendly to advanced-level programs designed to accommodate learners of all backgrounds.",
    },
    {
      imgSrc:
        "https://img.freepik.com/premium-psd/3d-artificial-intelligence-illustrations_504676-5117.jpg?w=740",
      title: "Enroll in Foundational Courses",
      description:
        "Start with foundational courses covering basic concepts, tools, and methodologies essential for Java.",
    },
    {
      imgSrc:
        "https://img.freepik.com/premium-vector/app-development-concept-with-desktop-coding-languages_23-2148700923.jpg?w=740",
      title: "Practice with Real-world Projects",
      description:
        "Apply your knowledge by working on hands-on projects tailored to real-world scenarios. Gain practical experience in Java, vulnerability assessment under the guidance of industry experts.",
    },
    {
      imgSrc:
        "https://img.freepik.com/free-vector/flat-design-cms-illustration_23-2148825229.jpg?t=st=1722599283~exp=1722602883~hmac=5ea7f8e457faa105e244ccd066a127024c6ae30b7856871205e79bf2de28e0bd&w=740",
      title: "Track Your Progress",
      description:
        "Monitor your progress with intuitive dashboards and tracking tools. Set goals, track milestones, and measure your proficiency in various Java concepts as you advance through the courses.",
    },
    {
      imgSrc:
        "https://img.freepik.com/free-vector/portrait-programmer-working-with-pc_23-2148222501.jpg?t=st=1722599336~exp=1722602936~hmac=fd5abc8e8af579ddfd10f168337488e889d442250e0a4c1b4234cd2f95cf26d6&w=740",
      title: "Specialize and Advance",
      description:
        "Choose specialized tracks or advanced courses to delve deeper into specific areas of Java Programming. Customize your learning path to align with your interests and career goals.",
    },
    {
      imgSrc:
        "https://img.freepik.com/free-vector/app-development-concept-with-desktop_23-2148700922.jpg?t=st=1722594308~exp=1722597908~hmac=eed976f6658996c632f22a2da2c76c9c1e9f39e08f0c6a271f385a112c0527ff&w=740",
      title: "Earn Recognized Certifications",
      description:
        "Upon successful completion of courses and projects, earn industry-recognized certifications to showcase your expertise to employers and enhance your career prospects.",
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
              Java Programming:{" "}
            </span>
            <span className="text-[#0098f1]"> Building Applications</span>
          </h2>
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

export default BasicJavaCard;
