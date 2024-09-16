import React from "react";

const DatavisualisationCard = () => {
  return (
    <>
      <section id="portfolio" className="portfolio-section py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl pb-2 md:text-4xl lg:text-4xl font-medium">
              <span className="text-[#f6ac14]">The</span>
              <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent">
                {" "}
                Future of{" "}
              </span>
              <span className="text-[#0098f1]"> Learning</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                imgSrc: "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1725873209/image_14_hry4hj.jpg",
                title: "Explore Course Catalog",
                description: "Browse our extensive catalog of Data Visualization courses. Discover beginner-friendly to advanced-level programs designed to accommodate learners of all backgrounds.",
              },
              {
                imgSrc: "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1725873209/image_14_hry4hj.jpg",
                title: "Enroll in Foundational Courses",
                description: "Start with foundational courses covering basic principles, tools, and techniques essential for Data Visualization.",
              },
              {
                imgSrc: "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1725873209/image_14_hry4hj.jpg",
                title: "Practice with Real-world Projects",
                description: "Apply your knowledge by working on hands-on projects tailored to real-world scenarios. Gain practical experience in data storytelling, dashboard design, and interactive visualizations under the guidance of industry experts.",
              },
              {
                imgSrc: "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1725873209/image_14_hry4hj.jpg",
                title: "Track Your Progress",
                description: "Monitor your progress with intuitive dashboards and tracking tools. Set goals, track milestones, and measure your proficiency in various Data Visualization techniques as you advance through the courses.",
              },
              {
                imgSrc: "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1725873209/image_14_hry4hj.jpg",
                title: "Specialize and Advance",
                description: "Choose specialized tracks or advanced courses to delve deeper into specific areas of Data Visualization, such as interactive dashboards, geospatial analysis, or data storytelling. Customize your learning path to align with your interests and career goals.",
              },
              {
                imgSrc: "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1725873209/image_14_hry4hj.jpg",
                title: "Earn Recognized Certifications",
                description: "Upon successful completion of courses and projects, earn industry-recognized certifications to showcase your expertise to employers and enhance your career prospects.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="portfolio-item relative shadow-md rounded-lg overflow-hidden"
              >
                <a>
                  <img
                    className="w-full"
                    style={{ height: '170px', objectFit: 'cover' }}
                    src={card.imgSrc}
                    alt={`Project ${index + 1}`}
                  />
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 transition duration-300 ease-in-out"></div>
                  <div className="p-4 flex flex-col items-center justify-between relative z-10">
                    <h3 className="text-lg text-[#FF9B26] font-medium text-txt">
                      {card.title}
                    </h3>
                    <span className="text-sm  text-black pt-4">
                      {card.description}
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DatavisualisationCard;
