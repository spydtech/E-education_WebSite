import React from "react";

const DataScienceCard = () => {
  const courseData = [
    {
      imgSrc:
        "https://img.freepik.com/free-vector/pair-programming-concept-illustration_114360-2170.jpg?t=st=1716451287~exp=1716454887~hmac=cc991f9dacafb486a88efc45f1b6ab6d8d04e77495c9a8d56c3b1bc97ef7884d&w=740",
      title: "Explore Course Catalog",
      description:
        "Browse our extensive catalog of Data Science courses. Discover beginner-friendly to advanced-level programs designed to accommodate learners of all backgrounds.",
    },
    {
      imgSrc:
        "https://img.freepik.com/free-vector/web-development-concept-with-programmer-ar_107791-17049.jpg?t=st=1716451383~exp=1716454983~hmac=02ea07b92b250c3bb681aaff29754fee3a4f75af789e5ba0a13b3fbd5ac0cdfc&w=826",
      title: "Enroll in Foundational Courses",
      description:
        "Start with foundational courses covering basic concepts, algorithms, and tools essential for Data Science.",
    },
    {
      imgSrc:
        "https://t3.ftcdn.net/jpg/04/57/66/56/240_F_457665662_ap8MydjBqBekFsieXX6HRgUAWcSM4Kl4.jpg",
      title: "Practice with Real-world Projects",
      description:
        "Apply your knowledge by working on hands-on projects tailored to real-world scenarios. Gain practical experience in data analysis, data processing, and visualization.",
    },
    {
      imgSrc:
        "https://img.freepik.com/free-vector/gradient-data-driven-concept-illustration_23-2149525002.jpg?t=st=1716451440~exp=1716455040~hmac=1d42424bd8241fa0f99758312693f9a8c5aaf7c2b1e20f231ff72fc5667e5f4c&w=740",
      title: "Track Your Progress",
      description:
        "Monitor your progress with intuitive dashboards and tracking tools. Set goals, track milestones, and measure your proficiency in various Data Science concepts as you advance through the courses.",
    },
    {
      imgSrc:
        "https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?t=st=1716451464~exp=1716455064~hmac=b20bffd75cbf6f3c20c1d05348247ca261db387eb06c386f823603a08a890fd1&w=826",
      title: "Specialize and Advance",
      description:
        "Choose specialized tracks or advanced courses to delve deeper into specific areas of Data Science, such as data engineering, predictive analytics, or machine learning.",
    },
    {
      imgSrc:
        "https://img.freepik.com/free-vector/3d-modeling-concept-illustration_114360-2971.jpg?t=st=1716451513~exp=1716455113~hmac=f53075acf6f8e69b191cbdd1db9ccd6dc17aab991a06dd2719d319773e0b2c8a&w=740",
      title: "Earn Recognized Certifications",
      description:
        "Upon successful completion of courses and projects, earn industry-recognized certifications to showcase your expertise to employers and enhance your career prospects.",
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section py-10 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl pb-2 md:text-4xl lg:text-5xl text-[#0098f1] font-medium">
            {" "}
            The Future of Learning
          </h2>
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

export default DataScienceCard;
