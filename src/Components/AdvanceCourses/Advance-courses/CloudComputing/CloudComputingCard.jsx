import React from "react";

const CloudComputingCard = () => {
  const courseData = [
    {
      imgSrc: "https://img.freepik.com/premium-photo/future-tech-cloud-computing-internet-storage-concept_1036975-209728.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid",
      title: "Explore Course Catalog",
      description: "Browse our extensive catalog of AWS courses. Discover beginner-friendly to advanced-level programs designed to accommodate learners of all backgrounds.",
    },
    {
      imgSrc: "https://img.freepik.com/premium-photo/abstract-web-cloud-technology-business-vector-background_1036975-206915.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid",
      title: "Enroll in Foundational Courses",
      description: "Start with foundational courses covering basic concepts, tools, and methodologies essential for AWS cloud computing.",
    },
    {
      imgSrc: "https://img.freepik.com/premium-photo/futureready-cloud-internet-storage-networking-solution_1036975-208968.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid",
      title: "Practice with Real-world Projects",
      description: "Apply your knowledge by working on hands-on projects tailored to real-world scenarios. Gain practical experience in AWS services, cloud architecture, and infrastructure design under the guidance of industry experts.",
    },
    {
      imgSrc: "https://img.freepik.com/free-photo/saas-concept-collage_23-2149399285.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid",
      title: "Track Your Progress",
      description: "Monitor your progress with intuitive dashboards and tracking tools. Set goals, track milestones, and measure your proficiency in various AWS services as you advance through the courses.",
    },
    {
      imgSrc: "https://img.freepik.com/free-vector/cloud-storage-realistic-composition-with-digital-elements-bright-lights-city_1284-26975.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid",
      title: "Specialize and Advance",
      description: "Choose specialized tracks or advanced courses to delve deeper into specific areas of AWS, such as machine learning, big data, or security. Customize your learning path to align with your interests and career goals.",
    },
    {
      imgSrc: "https://img.freepik.com/premium-photo/digital-cloud-computing-cyber-technology-mobile-concept_1036975-207638.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid",
      title: "Earn Recognized Certifications",
      description: "Upon successful completion of courses and projects, earn industry-recognized certifications to showcase your expertise to employers and enhance your career prospects.",
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
              Cloud Computing with AWS{" "}
            </span>
            <span className="text-[#0098f1]"> Build Scalable Solutions</span>
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

export default CloudComputingCard;
