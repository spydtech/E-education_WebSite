import React from "react";
import { Link } from "react-router-dom";
const UsabilityTestingCard = () => {
  return (
    <>
      <section id="portfolio" className="portfolio-section py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              Mastering Usability Testing: Enhance User Experience
            </h2>
            <p className="text-lg text-[#00509d] font-semibold mt-2">
              Elevate your skills with our Usability Testing courses. Explore
              methodologies and gain practical insights. Whether a beginner or
              an expert, optimize user experiences with confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-1">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/flat-web-development-concept-cms_23-2148806100.jpg?t=st=1716808376~exp=1716811976~hmac=33d99af9c16d2fb1950dc4ffe4fcca248df75640c1789e115a62248bf650076a&w=826"
                  alt="Project 1"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Explore Course Catalog
                  </h3>
                  <span className="text-sm font-bold text-[#00509d] group-hover:text-white pt-4">
                    Browse our extensive catalog of Usability Testing courses.
                    Discover beginner-friendly to advanced-level programs
                    designed to accommodate learners of all backgrounds.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-2">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/user-interface-development-isometric-concept-with-young-woman-creating-custom-design-mobile-application-vector-illustration_1284-72341.jpg?t=st=1716808402~exp=1716812002~hmac=ef1bc3361183a549d53ffb181464d1c41c4b1aa5a8ea1bbef02519b746ded771&w=740"
                  alt="Project 2"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Enroll in Foundational Courses
                  </h3>
                  <span className="text-sm font-bold text-[#00509d] group-hover:text-white pt-4">
                    Start with foundational courses covering basic concepts,
                    tools, and methodologies essential for Usability Testing.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-3">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/kanban-method-concept-illustration_114360-9810.jpg?t=st=1716808425~exp=1716812025~hmac=50e334abe77c4be477f5cf4d2435381e272958d47bc92f9ed56eddc19d608a51&w=740"
                  alt="Project 3"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Practice with Real-world Projects
                  </h3>
                  <span className="text-sm font-bold text-[#00509d] group-hover:text-white pt-4">
                    Apply your knowledge by working on hands-on projects
                    tailored to real-world scenarios. Gain practical experience
                    in usability testing, user research, and design evaluation
                    under the guidance of industry experts.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-4">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/internet-day-concept-illustration_114360-5303.jpg?t=st=1716808445~exp=1716812045~hmac=225347e9f8c42422dbda63b3271bdf91e3804a4b1d45f59a756d86e38f1146a1&w=740"
                  alt="Project 4"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Track Your Progress
                  </h3>
                  <span className="text-sm font-bold text-[#00509d] group-hover:text-white pt-4">
                    Monitor your progress with intuitive dashboards and tracking
                    tools. Set goals, track milestones, and measure your
                    proficiency in various Usability Testing concepts as you
                    advance through the courses.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-5">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/marketing-concept-illustration_114360-3903.jpg?t=st=1716808460~exp=1716812060~hmac=b9aab589a0c1b5dea0e60314ba921c742af966e4450f989022d48a6ca7833906&w=826"
                  alt="Project 5"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Specialize and Advance
                  </h3>
                  <span className="text-sm font-bold text-[#00509d] group-hover:text-white pt-4">
                    Choose specialized tracks or advanced courses to delve
                    deeper into specific areas of Usability Testing, such as
                    user experience design, user research methods, or
                    accessibility testing. Customize your learning path to align
                    with your interests and career goals.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-6">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/premium-vector/app-development-modern-flat-concept-web-banner-design-male-designer-works-laptop-develops_9209-8179.jpg?w=826"
                  alt="Project 6"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Earn Recognized Certifications
                  </h3>
                  <span className="text-sm font-bold text-[#00509d] group-hover:text-white pt-4">
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

export default UsabilityTestingCard;
