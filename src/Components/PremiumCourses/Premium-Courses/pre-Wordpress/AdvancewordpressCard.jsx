import React from "react";

const AdvancewordpressCard = () => {
  return (
    <>
      <section id="portfolio" className="portfolio-section py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              Mastering Advanced WordPress: Elevate Your Development Skills
            </h2>
            <p className="text-lg text-[#f9ac13] font-semibold mt-2">
              Take your WordPress skills to the next level with our advanced
              courses. Explore complex concepts and enhance your website
              development expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-1">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/software-development-testing-abstract-concept-illustration_335657-3741.jpg?w=740"
                  alt="Project 1"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#0d3b66] opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Custom Theme Development
                  </h3>
                  <span className="text-sm font-bold text-[#f9ac13] group-hover:text-white pt-4">
                    Learn how to create custom WordPress themes from scratch,
                    including best practices for theme development and design.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-2">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/software-quality-assurance-abstract-concept-illustration_335657-3722.jpg?w=740"
                  alt="Project 2"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#31572c] opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Advanced Plugin Development
                  </h3>
                  <span className="text-sm font-bold text-[#f9ac13] group-hover:text-white pt-4">
                    Dive into the development of custom plugins, understanding
                    the WordPress plugin architecture and hooks system.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-3">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/software-testing-quality-assurance-abstract-concept-illustration_335657-3844.jpg?w=740"
                  alt="Project 3"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#85182a] opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Performance Optimization
                  </h3>
                  <span className="text-sm font-bold text-[#f9ac13] group-hover:text-white pt-4">
                    Explore techniques for optimizing WordPress performance,
                    including caching, database optimization, and code
                    efficiency.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-4">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/software-development-testing-abstract-concept-illustration_335657-3741.jpg?w=740"
                  alt="Project 4"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#f3d5b5] opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Advanced Security Techniques
                  </h3>
                  <span className="text-sm font-bold text-[#f9ac13] group-hover:text-white pt-4">
                    Learn advanced security practices to protect your WordPress
                    site from common vulnerabilities and threats.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-5">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/software-testing-abstract-concept-illustration_335657-3857.jpg?w=740"
                  alt="Project 5"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#072ac8] opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    WordPress REST API Integration
                  </h3>
                  <span className="text-sm font-bold text-[#f9ac13] group-hover:text-white pt-4">
                    Integrate external applications with WordPress using the
                    REST API, enabling advanced functionality and data exchange.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-6">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/quality-assurance-abstract-concept-illustration_335657-3790.jpg?w=740"
                  alt="Project 6"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#d62828] opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Scaling WordPress for High Traffic
                  </h3>
                  <span className="text-sm font-bold text-[#f9ac13] group-hover:text-white pt-4">
                    Implement strategies to scale WordPress sites for handling
                    high traffic, including server optimization and load
                    balancing.
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

export default AdvancewordpressCard;
