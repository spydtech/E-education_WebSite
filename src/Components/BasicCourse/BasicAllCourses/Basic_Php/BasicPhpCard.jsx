import React from "react";

const BasicPhpCard = () => {
  return (
    <>
      <section id="portfolio" className="portfolio-section py-16 px-4 ">
        <div className="container mx-auto ">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              Mastering PHP: Build Dynamic Web Applications
            </h2>
            <p className="text-lg text-[#31cb00] font-semibold mt-2">
              Enhance your web development skills with our comprehensive PHP
              courses. Dive deep into PHP programming and gain hands-on
              experience. Whether novice or pro, create dynamic and interactive
              web applications with confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-1">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/online-courses-tutorials_52683-37860.jpg?w=740"
                  alt="Project 1"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-green-300 to-green-600 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Explore Course Catalog
                  </h3>
                  <span className="text-sm font-bold text-[#31cb00] group-hover:text-white pt-4">
                    Browse our extensive catalog of PHP courses. Discover
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
                  src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1213.jpg?t=st=1716965610~exp=1716969210~hmac=62ded24d52782adf8c36b15132812ee7f9b2ebe3eb5ed685e50c1b6b73e0848e&w=740"
                  alt="Project 2"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-green-300 to-green-600 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Enroll in Foundational Courses
                  </h3>
                  <span className="text-sm font-bold text-[#31cb00] group-hover:text-white pt-4">
                    Start with foundational courses covering basic concepts,
                    tools, and methodologies essential for PHP development.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-3">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/web-development-banner_33099-1687.jpg?w=740"
                  alt="Project 3"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-green-300 to-green-600 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Practice with Real-world Projects
                  </h3>
                  <span className="text-sm font-bold text-[#31cb00] group-hover:text-white pt-4">
                    Apply your knowledge by working on hands-on projects
                    tailored to real-world scenarios. Gain practical experience
                    in PHP development, database integration, and web
                    application design under the guidance of industry experts.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-4">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?t=st=1716965655~exp=1716969255~hmac=8fc0978648041f3f5399f6af0d6f0296967432103aebe88a64faccfe2a441f48&w=740"
                  alt="Project 4"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-green-300 to-green-600 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Track Your Progress
                  </h3>
                  <span className="text-sm font-bold text-[#31cb00] group-hover:text-white pt-4">
                    Monitor your progress with intuitive dashboards and tracking
                    tools. Set goals, track milestones, and measure your
                    proficiency in various PHP concepts as you advance through
                    the courses.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-5">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/programmer-concept-illustration_114360-2417.jpg?t=st=1716965670~exp=1716969270~hmac=9f2b367e36b06a173db9c0acb787db11fb4844d424f6b803709cd88c6c6c5789&w=740"
                  alt="Project 5"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-green-300 to-green-600 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Specialize and Advance
                  </h3>
                  <span className="text-sm font-bold text-[#31cb00] group-hover:text-white pt-4">
                    Choose specialized tracks or advanced courses to delve
                    deeper into specific areas of PHP development, such as
                    frameworks, API integration, or performance optimization.
                    Customize your learning path to align with your interests
                    and career goals.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-6">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/premium-vector/business-team-working_115495-71.jpg?w=740"
                  alt="Project 6"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-green-300 to-green-600 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
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

export default BasicPhpCard;
