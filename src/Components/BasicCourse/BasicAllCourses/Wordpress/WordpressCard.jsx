import React from "react";

const WordpressCard = () => {
  return (
    <>
      <section id="portfolio" className="portfolio-section py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              Unlock the Power of WordPress: Create Stunning Websites
            </h2>
            <p className="text-lg text-[#31cb00] font-semibold mt-2">
              Dive into our comprehensive WordPress courses. From beginners to
              advanced users, gain the skills to build, customize, and manage
              beautiful websites effortlessly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/course-1">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/man-sitting-desk-unlocking-computer-computer-settings-login-flat-illustration_74855-20645.jpg"
                  alt="Course 1"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-lime-300 to-lime-400 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Explore Course Catalog
                  </h3>
                  <span className="text-sm font-bold text-[#31cb00] group-hover:text-white pt-4">
                    Browse our extensive catalog of WordPress courses. Discover
                    beginner-friendly to advanced-level programs designed to
                    accommodate learners of all backgrounds.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/course-2">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/hand-drawn-vpn-illustration_23-2149229491.jpg"
                  alt="Course 2"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-lime-300 to-lime-400  opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Enroll in Foundational Courses
                  </h3>
                  <span className="text-sm font-bold text-[#31cb00] group-hover:text-white pt-4">
                    Start with foundational courses covering basic concepts,
                    tools, and methodologies essential for building and managing
                    WordPress sites.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/course-3">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/premium-vector/digital-media-data-concept-with-character-people-working-with-multimedia-files-database-upload-play-music-video-film_269730-293.jpg"
                  alt="Course 3"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-lime-300 to-lime-400 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Practice with Real-world Projects
                  </h3>
                  <span className="text-sm font-bold text-[#31cb00] group-hover:text-white pt-4">
                    Apply your knowledge by working on hands-on projects
                    tailored to real-world scenarios. Gain practical experience
                    in building and customizing WordPress sites under the
                    guidance of industry experts.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/course-4">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/premium-vector/cloud-computing-technology-concept-with-character-data-storage-protection-computing-science-disk-services-connection-innovations_269730-308.jpg"
                  alt="Course 4"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-lime-300 to-lime-400 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Track Your Progress
                  </h3>
                  <span className="text-sm font-bold text-[#31cb00] group-hover:text-white pt-4">
                    Monitor your progress with intuitive dashboards and tracking
                    tools. Set goals, track milestones, and measure your
                    proficiency in various WordPress skills as you advance
                    through the courses.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/course-5">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/digital-designers-team-drawing-with-pen-computer-monitor_74855-10586.jpg"
                  alt="Course 5"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-lime-300 to-lime-400 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Specialize and Advance
                  </h3>
                  <span className="text-sm font-bold text-[#31cb00] group-hover:text-white pt-4">
                    Choose specialized tracks or advanced courses to delve
                    deeper into specific areas of WordPress development, such as
                    theme customization, plugin development, or SEO
                    optimization. Customize your learning path to align with
                    your interests and career goals.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/course-6">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/colleagues-working-together-project_74855-6308.jpg"
                  alt="Course 6"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-lime-300 to-lime-400 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Earn Recognized Certifications
                  </h3>
                  <span className="text-sm font-bold text-[#31cb00] group-hover:text-white pt-4">
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

export default WordpressCard;
