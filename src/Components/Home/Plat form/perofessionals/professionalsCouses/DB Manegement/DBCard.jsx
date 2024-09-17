import React from 'react';
import img2 from '../../../../../../assetss/professionalimages/image14.png'; // Adjust the image path as needed

const DBCard = () => {
  const cardData = [
    {
      href: "/project-1",
      imgSrc: img2,
      title: "Explore Course Catalog",
      description: "Browse our extensive catalog of Database Management courses. Discover beginner-friendly to advanced-level programs designed to accommodate learners of all backgrounds.",
    },
    {
      href: "/project-2",
      imgSrc: img2,
      title: "Enroll in Foundational Courses",
      description: "Start with foundational courses covering basic concepts, tools, and methodologies essential for Database Management.",
    },
    {
      href: "/project-3",
      imgSrc: img2,
      title: "Practice with Real-world Projects",
      description: "Apply your knowledge by working on hands-on projects tailored to real-world scenarios. Gain practical experience in database design, deployment, and management under the guidance of industry experts.",
    },
    {
      href: "/project-4",
      imgSrc: img2,
      title: "Track Your Progress",
      description: "Monitor your progress with intuitive dashboards and tracking tools. Set goals, track milestones, and measure your proficiency in various Database Management concepts as you advance through the courses.",
    },
    {
      href: "/project-5",
      imgSrc: img2,
      title: "Specialize and Advance",
      description: "Choose specialized tracks or advanced courses to delve deeper into specific areas of Database Management, such as database security, data warehousing, or big data analytics. Customize your learning path to align with your interests and career goals.",
    },
    {
      href: "/project-6",
      imgSrc: img2,
      title: "Earn Recognized Certifications",
      description: "Upon successful completion of courses and projects, earn industry-recognized certifications to showcase your expertise to employers and enhance your career prospects.",
    }
  ];

  return (
    <section id="portfolio" className="portfolio-section py-10 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl pb-2 md:text-4xl lg:text-5xl font-medium">
            <span className="text-[#f6ac14]">Mastering</span>
            <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent">
              {" "}
              Database Management{" "}
            </span>
            <span className="text-[#0098f1]">: Elevate Your IT Skills</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cardData.map((course, index) => (
            <div
              key={index}
              className="group border-2 hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden"
            >
              <a href={course.href}>
                <div className="h-[180px]">
                  <img
                    className="w-full h-full bg-cover"
                    src={course.imgSrc}
                    alt={course.title}
                  />
                </div>
                <div className="p-4 flex flex-col items-center justify-between">
                  <h3 className="text-lg font-medium text-[#FF9B26] group-hover:text-gray-900">
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

export default DBCard;
