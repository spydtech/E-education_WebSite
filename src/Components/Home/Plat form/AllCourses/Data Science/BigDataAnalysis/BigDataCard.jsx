import React from "react";

const BigDataCard = () => {
  const courseData = [
    {
      imgSrc: "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1725873209/image_14_hry4hj.jpg",
      title: "Explore Course Catalog",
      description:
        "Browse our extensive catalog of Big Data Analysis courses Discover beginner-friendly to advanced-level programs designed to accommodate learners of all backgrounds.",
    },
    {
      imgSrc: "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1725873209/image_14_hry4hj.jpg",
      title: "Enroll in Foundational Courses",
      description:
        "Start with foundational courses covering basic concepts, algorithms, and tools essential for Big Data Analysis.",
    },
    { 
      imgSrc: "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1725873209/image_14_hry4hj.jpg",
      title: "Practice with Real-world Projects",
      description:
        "Apply your knowledge by working on hands-on projects tailored to real-world scenarios. Gain practical experience in data analysis, data processing, and visualization under the guidance of industry experts.",
    },
    {
      imgSrc: "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1725873209/image_14_hry4hj.jpg",
      title: "Track Your Progress",
      description:
        "Monitor your progress with intuitive dashboards and tracking tools. Set goals, track milestones, and measure your proficiency in various Big Data Analysis concepts as you advance through the courses.",
    },
    {
      imgSrc: "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1725873209/image_14_hry4hj.jpg",
      title: "Specialize and Advance",
      description:
        "Choose specialized tracks or advanced courses to delve deeper into specific areas of Big Data Analysis, such as data engineering, predictive analytics, or big data technologies. Customize your learning path to align with your interests and career goals.",
    },
    {
      imgSrc: "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1725873209/image_14_hry4hj.jpg",
      title: "Earn Recognized Certifications",
      description:
        "Upon successful completion of courses and projects, earn industry-recognized certifications to showcase your expertise to employers and enhance your career prospects.",
    },
  ];
  
  return (
      <section id="portfolio" className="portfolio-section py-10 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
          <h1 className="bg-gradient-to-r text-4xl font-medium from-[#f6ac14] to-[#0098f1] bg-clip-text text-transparent">
  The Future of Learning
</h1>
            {/* bg-gradient-to-r from-[#F6AC14] to-[#0098F1] text-transparent bg-clip-text"> */}
  
            {/* </h2> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {courseData.map((course, index) => (
              <div
                key={index}
                className="group  border-2 hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden"
              >
                <a href="#">
                  <div className="h-[170px] bg-[#0098f1]">
                    <img
                      className="w-full h-full bg-cover"
                      src={course.imgSrc}
                      alt={`Project ${index + 1}`}
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

export default BigDataCard;
