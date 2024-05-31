import React from "react";

const BasicC_CplusCard = () => {
  return (
    <>
      <section id="portfolio" className="portfolio-section py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              Mastering C & C++: Build Efficient Software Applications
            </h2>
            <p className="text-lg text-[#25a244] font-semibold mt-2">
              Enhance your programming skills with our comprehensive C & C++
              courses. Dive deep into these languages and gain hands-on
              experience. Whether novice or pro, create efficient and powerful
              applications with confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-1">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/premium-vector/illustration-designing-program-web-apps-monitor-screen-desktop-teamwork-developing-programming-debugging-development-process_4968-758.jpg?w=740"
                  alt="Project 1"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-green-300 to-green-600 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Explore Course Catalog
                  </h3>
                  <span className="text-sm font-bold text-[#25a244] group-hover:text-white pt-4">
                    Browse our extensive catalog of C & C++ courses. Discover
                    beginner-friendly to advanced-level programs designed to
                    accommodate learners of all backgrounds.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-2">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/premium-vector/application-development-process-testing-debugging-antivirus-software-catching-bugs_4968-747.jpg?w=740"
                  alt="Project 2"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-green-300 to-green-600 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Enroll in Foundational Courses
                  </h3>
                  <span className="text-sm font-bold text-[#25a244] group-hover:text-white pt-4">
                    Start with foundational courses covering basic concepts,
                    tools, and methodologies essential for C & C++ development.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-3">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/premium-vector/database-access-performance-providing-network-data-services-folder-based-storage_4968-1629.jpg?w=1060"
                  alt="Project 3"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-green-300 to-green-600 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Practice with Real-world Projects
                  </h3>
                  <span className="text-sm font-bold text-[#25a244] group-hover:text-white pt-4">
                    Apply your knowledge by working on hands-on projects
                    tailored to real-world scenarios. Gain practical experience
                    in C & C++ development, system programming, and software
                    design under the guidance of industry experts.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-4">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/hand-drawn-illustration-friends-video-conferencing-scenes_52683-55382.jpg?t=st=1717059223~exp=1717062823~hmac=ac8ae7bec05133451d0deafa7772e3cc8c31b6f0d76fe190a0f4332739166828&w=826"
                  alt="Project 4"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-green-300 to-green-600 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Track Your Progress
                  </h3>
                  <span className="text-sm font-bold text-[#25a244] group-hover:text-white pt-4">
                    Monitor your progress with intuitive dashboards and tracking
                    tools. Set goals, track milestones, and measure your
                    proficiency in various C & C++ concepts as you advance
                    through the courses.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-5">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/premium-vector/concept-business-meeting-teamwork-training-improving-professional-skill_1034-1135.jpg?w=740"
                  alt="Project 5"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-green-300 to-green-600 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Specialize and Advance
                  </h3>
                  <span className="text-sm font-bold text-[#25a244] group-hover:text-white pt-4">
                    Choose specialized tracks or advanced courses to delve
                    deeper into specific areas of C & C++ development, such as
                    systems programming, embedded systems, or performance
                    optimization. Customize your learning path to align with
                    your interests and career goals.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-6">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/premium-vector/business-people-meeting_1034-1093.jpg?w=740"
                  alt="Project 6"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-green-300 to-green-600 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Earn Recognized Certifications
                  </h3>
                  <span className="text-sm font-bold text-[#25a244] group-hover:text-white pt-4">
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

export default BasicC_CplusCard;
