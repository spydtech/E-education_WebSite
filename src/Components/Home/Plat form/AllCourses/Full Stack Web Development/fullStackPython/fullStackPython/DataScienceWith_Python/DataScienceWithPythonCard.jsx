import React from "react";

const DataScienceWithPythonCard = () => {
  return (
    <>
      <section id="portfolio" className="portfolio-section py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              Mastering Data Science with Python: Transform Your Skills
            </h2>
            <p className="text-lg text-[#750e5c] font-semibold mt-2">
              Elevate your skills with our Data Science with Python courses.
              Dive deep into principles and gain hands-on experience. Whether
              novice or pro, unlock your potential.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/course-catalog">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/coding-concept-illustration_114360-1673.jpg"
                  alt="Course Catalog"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#08a700] to-[#00b96f] opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Explore Course Catalog
                  </h3>
                  <span className="text-sm font-bold text-[#750e5c] group-hover:text-white pt-4">
                    Browse our extensive catalog of Data Science with Python
                    courses. Discover beginner-friendly to advanced-level
                    programs designed to accommodate learners of all
                    backgrounds.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/foundational-courses">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1676.jpg"
                  alt="Foundational Courses"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#08a700] to-[#00b96f] opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Enroll in Foundational Courses
                  </h3>
                  <span className="text-sm font-bold text-[#750e5c] group-hover:text-white pt-4">
                    Start with foundational courses covering basic concepts,
                    algorithms, and tools essential for Data Science with
                    Python.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/real-world-projects">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/development-concept-illustration_114360-1497.jpg"
                  alt="Real-world Projects"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#08a700] to-[#00b96f] opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Practice with Real-world Projects
                  </h3>
                  <span className="text-sm font-bold text-[#750e5c] group-hover:text-white pt-4">
                    Apply your knowledge by working on hands-on projects
                    tailored to real-world scenarios. Gain practical experience
                    in data analysis, data processing, and visualization under
                    the guidance of industry experts.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/track-progress">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/progress-concept-illustration_114360-3983.jpg"
                  alt="Track Progress"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#08a700] to-[#00b96f] opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Track Your Progress
                  </h3>
                  <span className="text-sm font-bold text-[#750e5c] group-hover:text-white pt-4">
                    Monitor your progress with intuitive dashboards and tracking
                    tools. Set goals, track milestones, and measure your
                    proficiency in various Data Science with Python concepts as
                    you advance through the courses.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/specialize">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/analysis-concept-illustration_114360-2119.jpg"
                  alt="Specialize and Advance"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#08a700] to-[#00b96f] opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Specialize and Advance
                  </h3>
                  <span className="text-sm font-bold text-[#750e5c] group-hover:text-white pt-4">
                    Choose specialized tracks or advanced courses to delve
                    deeper into specific areas of Data Science with Python, such
                    as machine learning, data engineering, or deep learning.
                    Customize your learning path to align with your interests
                    and career goals.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/certifications">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/sentiment-analysis-concept-illustration_114360-5182.jpg?t=st=1716457888~exp=1716461488~hmac=ca0d563d291cbaf977ed37e3775e0b602428036a08979aefd79e32de0de0df23&w=740"
                  alt="Certifications"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#08a700] to-[#00b96f] opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Earn Recognized Certifications
                  </h3>
                  <span className="text-sm font-bold text-[#750e5c] group-hover:text-white pt-4">
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

export default DataScienceWithPythonCard;
