import React from "react";
// import girl3 from "../../../../../../assets/girl3.png";

function DataAbout() {
  const courseData = [
    {
      imgSrc:
        "https://img.freepik.com/free-vector/pair-programming-concept-illustration_114360-2170.jpg?t=st=1716451287~exp=1716454887~hmac=cc991f9dacafb486a88efc45f1b6ab6d8d04e77495c9a8d56c3b1bc97ef7884d&w=740",
      title: "Explore Course Catalog",
      description:
        "Browse our extensive catalog of Data Data Analytics courses. Discover beginner-friendly to advanced-level programs designed to accommodate learners of all backgrounds.",
    },
    {
      imgSrc:
        "https://img.freepik.com/free-vector/hand-drawn-data-analysis-template_23-2150667967.jpg?ga=GA1.1.481732087.1715859514&semt=ais_hybrid",
      title: "Enroll in Foundational Courses",
      description:
        "Start with foundational courses covering basic concepts, algorithms, and tools essential for  Data Analytics.",
    },
    {
      imgSrc:
        "https://img.freepik.com/free-vector/data-extraction-concept-illustration_114360-4876.jpg?ga=GA1.1.481732087.1715859514&semt=ais_hybrid",
      title: "Practice with Real-world Projects",
      description:
        "Apply your knowledge by working on hands-on projects tailored to real-world scenarios. Gain practical experience in data analysis, data processing, and visualization.",
    },
    {
      imgSrc:
        "https://img.freepik.com/premium-vector/marketing-analysis-concept-flat-illustration_1168412-505.jpg?ga=GA1.1.481732087.1715859514&semt=ais_hybrid",
      title: "Track Your Progress",
      description:
        "Monitor your progress with intuitive dashboards and tracking tools. Set goals, track milestones, and measure your proficiency in various Data Data Analytics concepts as you advance through the courses.",
    },
    {
      imgSrc:
        "https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?t=st=1716451464~exp=1716455064~hmac=b20bffd75cbf6f3c20c1d05348247ca261db387eb06c386f823603a08a890fd1&w=826",
      title: "Specialize and Advance",
      description:
        "Choose specialized tracks or advanced courses to delve deeper into specific areas of Data Analytics, such as data engineering, predictive analytics, or machine learning.",
    },
    {
      imgSrc:
      "https://img.freepik.com/free-vector/dark-analytics-concept-illustration_114360-2171.jpg?ga=GA1.1.481732087.1715859514&semt=ais_hybrid",
      title: "Earn Recognized Certifications",
      description:
        "Upon successful completion of courses and projects, earn industry-recognized certifications to showcase your expertise to employers and enhance your career prospects.",
    },
  ]
  return (
    <section id="portfolio" className="portfolio-section py-10 px-4">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl pb-2 md:text-4xl lg:text-5xl font-medium">
          <span className="text-[#f6ac14]">The</span>
          <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent">
            {" "}
            Future of{" "}
          </span>
          <span className="text-[#0098f1]"> Learning</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {courseData.map((course, index) => (
          <div
            key={index}
            className="group  border-2 hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden"
          >
            <a href="#" >
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
}
export default DataAbout;
