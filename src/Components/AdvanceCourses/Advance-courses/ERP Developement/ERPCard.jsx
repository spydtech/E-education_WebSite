import React from "react";

const ERPCard = () => {
  return (
    <>
      <section id="portfolio" className="portfolio-section py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              Mastering Enterprise Resource Planning (ERP)
            </h2>
            <p className="text-lg text-[#072ac8] font-semibold mt-2">
              Enhance your business management skills with our comprehensive ERP
              courses. Dive deep into ERP systems and gain hands-on experience.
              Whether novice or pro, streamline and optimize your business
              processes with confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/erp-course-catalog">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/hand-drawn-flat-design-erp-illustration_23-2149379505.jpg?t=st=1717347773~exp=1717351373~hmac=aea4da0af47395903c5bb2d2a140a2cd49e5a3ef932cc050b8c85c7002639b42&w=826"
                  alt="Course Catalog"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-300 to-blue-600 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Explore Course Catalog
                  </h3>
                  <span className="text-sm font-bold text-[#072ac8] group-hover:text-white pt-4">
                    Browse our extensive catalog of ERP courses. Discover
                    beginner-friendly to advanced-level programs designed to
                    accommodate learners of all backgrounds.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/erp-foundational-courses">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/premium-vector/erp-enterprise-resource-planning-word-lettering-typography-design-illustration_9233-190.jpg?w=826"
                  alt="Foundational Courses"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-300 to-blue-600 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Enroll in Foundational Courses
                  </h3>
                  <span className="text-sm font-bold text-[#072ac8] group-hover:text-white pt-4">
                    Start with foundational courses covering basic concepts,
                    tools, and methodologies essential for ERP systems.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/erp-projects">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/ui-ux-designers-isometric-composition-with-small-people-creating-custom-design-web-site-3d-vector-illustration_1284-68939.jpg?t=st=1717347889~exp=1717351489~hmac=cac722f0add95601e8cc7192f72842bf9b2b3a859233cccbb10691cdf93f0504&w=740"
                  alt="Real-world Projects"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-300 to-blue-600 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Practice with Real-world Projects
                  </h3>
                  <span className="text-sm font-bold text-[#072ac8] group-hover:text-white pt-4">
                    Apply your knowledge by working on hands-on projects
                    tailored to real-world scenarios. Gain practical experience
                    in ERP implementation and integration under the guidance of
                    industry experts.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/erp-progress-tracking">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/presentation-concept-illustration_114360-1579.jpg?w=740"
                  alt="Progress Tracking"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-300 to-blue-600 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Track Your Progress
                  </h3>
                  <span className="text-sm font-bold text-[#072ac8] group-hover:text-white pt-4">
                    Monitor your progress with intuitive dashboards and tracking
                    tools. Set goals, track milestones, and measure your
                    proficiency in various ERP modules as you advance through
                    the courses.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/erp-specialize">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/business-meeting-concept-illustration_114360-1511.jpg?w=740"
                  alt="Specialize and Advance"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-300 to-blue-600 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Specialize and Advance
                  </h3>
                  <span className="text-sm font-bold text-[#072ac8] group-hover:text-white pt-4">
                    Choose specialized tracks or advanced courses to delve
                    deeper into specific areas of ERP, such as supply chain
                    management, finance, or human resources. Customize your
                    learning path to align with your interests and career goals.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/erp-certifications">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/business-people-concept-illustration_114360-1418.jpg?w=740"
                  alt="Certifications"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-300 to-blue-600 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Earn Recognized Certifications
                  </h3>
                  <span className="text-sm font-bold text-[#072ac8] group-hover:text-white pt-4">
                    Upon successful completion of courses and projects, earn
                    industry-recognized certifications to showcase your
                    expertise to employers and enhance your career prospects.
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ERPCard;
