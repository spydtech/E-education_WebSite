import React from "react";

const BasicPhpCard = () => {
  const courseData = [
    {
      imgSrc:
        "https://img.freepik.com/free-vector/app-development-concept-with-desktop_23-2148700922.jpg?t=st=1722594308~exp=1722597908~hmac=eed976f6658996c632f22a2da2c76c9c1e9f39e08f0c6a271f385a112c0527ff&w=740",
      title: "Explore Course Catalog",
      description:
        "Browse our extensive catalog of PHP courses. Discover beginner-friendly to advanced-level programs designed to accommodate learners of all backgrounds.",
    },
    {
      imgSrc:
        "https://img.freepik.com/free-vector/flat-computer-engineering-concept_23-2148152149.jpg?uid=R156536743&ga=GA1.2.1408907841.1721685451&semt=ais_hybrid",
      title: "Enroll in Foundational Courses",
      description:
        "Start with foundational courses covering basic concepts, tools, and methodologies essential for PHP development.",
    },
    {
      imgSrc:
        "https://img.freepik.com/free-vector/programmer-doing-his-job-office_23-2148274928.jpg?uid=R156536743&ga=GA1.2.1408907841.1721685451&semt=ais_hybrid",
      title: "Practice with Real-world Projects",
      description:
        "Apply your knowledge by working on hands-on projects tailored to real-world scenarios. Gain practical experience in PHP development, database integration, and web application design under the guidance of industry experts.",
    },
    {
      imgSrc:
        "https://img.freepik.com/premium-photo/programming-language-php-code-with-person-laptop_102583-4799.jpg?uid=R156536743&ga=GA1.2.1408907841.1721685451&semt=ais_hybrid",
      title: "Track Your Progress",
      description:
        "Monitor your progress with intuitive dashboards and tracking tools. Set goals, track milestones, and measure your proficiency in various PHP concepts as you advance through the courses.",
    },
    {
      imgSrc:
        "https://img.freepik.com/free-vector/programmer-concept-illustration_114360-2417.jpg?t=st=1716965670~exp=1716969270~hmac=9f2b367e36b06a173db9c0acb787db11fb4844d424f6b803709cd88c6c6c5789&w=740",
      title: "Specialize and Advance",
      description:
        "Choose specialized tracks or advanced courses to delve deeper into specific areas of PHP development, such as frameworks, API integration, or performance optimization. Customize your learning path to align with your interests and career goals.",
    },
    {
      imgSrc:
        "https://img.freepik.com/premium-vector/business-team-working_115495-71.jpg?w=740",
      title: "Earn Recognized Certifications",
      description:
        "Upon successful completion of courses and projects, earn industry-recognized certifications to showcase your expertise to employers and enhance your career prospects.",
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section py-10 md:py-0 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xl sm:pb-2 md:text-4xl lg:text-5xl font-medium">
            <span className="text-[#f6ac14]">Mastering</span>
            <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent">
              {" "}
              PHP:{" "}
            </span>
            <span className="text-[#0098f1]"> Build Dynamic Web Applications</span>
          </h2>
        {/*}  <p className="text-lg text-[#31cb00] font-semibold mt-2">
            Enhance your web development skills with our comprehensive PHP
            courses. Dive deep into PHP programming and gain hands-on
            experience. Whether novice or pro, create dynamic and interactive
            web applications with confidence.
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

export default BasicPhpCard;
