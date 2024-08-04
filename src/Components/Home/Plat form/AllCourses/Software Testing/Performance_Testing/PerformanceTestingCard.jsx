import React from "react";

const PerformanceTestingCard = () => {
  const courseData = [
    {
      imgSrc: "https://img.freepik.com/free-vector/tiny-people-testing-quality-assurance-software-isolated-flat-vector-illustration-cartoon-character-fixing-bugs-hardware-device-application-test-it-service-concept_74855-10172.jpg?t=st=1716794667~exp=1716798267~hmac=b97dedb68e1abc43abc371702ab3b6213361edb8dd3ca8f0d717d0764f3be7b3&w=826",
      title: "Explore Course Catalog",
      description:
        "Browse our extensive catalog of Performance Testing courses. Discover beginner-friendly to advanced-level programs designed to accommodate learners of all backgrounds.",
    },
    {
      imgSrc: "https://img.freepik.com/free-vector/hand-drawn-illustrated-gathering-data-concept_23-2149139706.jpg?t=st=1716794719~exp=1716798319~hmac=b388d6e4c7c249c033cff77233befa49f34c164041a9c9c87a0e8fb37957ffee&w=826",
      title: "Enroll in Foundational Courses",
      description:
        "Start with foundational courses covering basic concepts, tools, and methodologies essential for Performance Testing.",
    },
    {
      imgSrc: "https://img.freepik.com/free-vector/programmer-doing-his-job-office_23-2148274928.jpg?t=st=1722518188~exp=1722521788~hmac=cba99f4f90672b5253134ba9daef2da39e2947afb2e2795eba0441e023deb844&w=740",
      title: "Practice with Real-world Projects",
      description:
        "Apply your knowledge by working on hands-on projects tailored to real-world scenarios. Gain practical experience in performance testing, load testing, and stress testing under the guidance of industry experts.",
    },
    {
      imgSrc: "https://img.freepik.com/free-vector/illustrated-infodemic-concept-with-person-searching-pandemic-information_23-2148723229.jpg?t=st=1722518272~exp=1722521872~hmac=0b20dfe2bcb1a6579528f73c4d6c850b10d9832c7866bc670d768289ade55f88&w=740",
      title: "Track Your Progress",
      description:
        "Monitor your progress with intuitive dashboards and tracking tools. Set goals, track milestones, and measure your proficiency in various Performance Testing concepts as you advance through the courses.",
    },
    {
      imgSrc: "https://img.freepik.com/premium-vector/vector-illustration-programmer-guycartoon-scene-programmer-sitting-table-with-computer-laptop-desk-lampwriting-programand-plant-pot-isolated-blue-background_812561-1378.jpg?w=900",
      title: "Specialize and Advance",
      description:
        "Choose specialized tracks or advanced courses to delve deeper into specific areas of Performance Testing, such as automated testing, performance monitoring, or performance engineering. Customize your learning path to align with your interests and career goals.",
    },
    {
      imgSrc: "https://img.freepik.com/free-vector/young-people-using-mobile-smartphone-texting_81522-1701.jpg?t=st=1716794840~exp=1716798440~hmac=9cafaf10302294a7f540bdc74d1dabea3f0bf44fec595173196d0156a2492ed7&w=996",
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
            <span className="text-[#f6ac14]">The</span>
            <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent">
              {" "}
              Future of{" "}
            </span>
            <span className="text-[#0098f1]"> Learning</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courseData.map((item, index) => (
            <div
              key={index}
              className="group border-2 hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden"
            >
              <a href="#">
                <div className={`relative h-60 bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo}`}>
                  <img
                    className="w-full h-full object-cover"
                    src={item.imgSrc}
                    alt={item.title}
                  />
                </div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-gray-800 group-hover:text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-md text-gray-600 pt-4">
                    {item.description}
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

export default PerformanceTestingCard;
