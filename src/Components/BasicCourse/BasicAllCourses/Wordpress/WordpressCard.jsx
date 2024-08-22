import React from "react";

const WordpressCard = () => {
  const courseData = [
    {
      imgSrc:
        "https://img.freepik.com/premium-photo/laptop-with-blue-screen-that-says-earth-it_1243200-19206.jpg?w=740",
      title: "Explore Course Catalog",
      description:
        "Browse our extensive catalog of WordPress courses. Discover beginner-friendly to advanced-level programs designed to accommodate learners of all backgrounds.",
    },
    {
      imgSrc:
        "https://img.freepik.com/premium-photo/woman-is-sitting-desk-with-laptop-world-screen_1243200-8824.jpg?w=740",
      title: "Enroll in Foundational Courses",
      description:
        "Start with foundational courses covering basic concepts, tools, and methodologies essential for building and managing WordPress sites.",
    },
    {
      imgSrc:
        "https://img.freepik.com/free-vector/flat-cms-illustration_23-2148849835.jpg?t=st=1722842564~exp=1722846164~hmac=e12581bcc4646eda1563ee51c9578d0ceb299a76e8e7d238bea5a29b1f06e10c&w=740",
      title: "Practice with Real-world Projects",
      description:
        "Apply your knowledge by working on hands-on projects tailored to real-world scenarios. Gain practical experience in building and customizing WordPress sites under the guidance of industry experts.",
    },
    {
      imgSrc:
        "https://img.freepik.com/premium-vector/cloud-computing-technology-concept-with-character-data-storage-protection-computing-science-disk-services-connection-innovations_269730-308.jpg",
      title: "Track Your Progress",
      description:
        "Monitor your progress with intuitive dashboards and tracking tools. Set goals, track milestones, and measure your proficiency in various WordPress skills as you advance through the courses.",
    },
    {
      imgSrc:
        "https://img.freepik.com/free-vector/digital-designers-team-drawing-with-pen-computer-monitor_74855-10586.jpg",
      title: "Specialize and Advance",
      description:
        "Choose specialized tracks or advanced courses to delve deeper into specific areas of WordPress development, such as theme customization, plugin development, or SEO optimization. Customize your learning path to align with your interests and career goals.",
    },
    {
      imgSrc:
        "https://img.freepik.com/free-vector/colleagues-working-together-project_74855-6308.jpg",
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
            <span className="text-[#f6ac14]">Unlock the Power of</span>
            <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent">
              {" "}
              WordPress:{" "}
            </span>
            <span className="text-[#0098f1]"> Create Stunning Websites</span>
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

export default WordpressCard;
