import React from "react";

const AdvancewordpressCard = () => {
  const courseData = [
    {
      href: "/custom-theme-development",
      imgSrc: "https://img.freepik.com/free-vector/top-view-laptop-technology-background_23-2148127699.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid",
      title: "Custom Theme Development",
      description: "Learn how to create custom WordPress themes from scratch, including best practices for theme development and design.",
    },
    {
      href: "/advanced-plugin-development",
      imgSrc: "https://img.freepik.com/free-vector/illustration-technology-vector_53876-18164.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid",
      title: "Advanced Plugin Development",
      description: "Dive into the development of custom plugins, understanding the WordPress plugin architecture and hooks system.",
    },
    {
      href: "/performance-optimization",
      imgSrc: "https://img.freepik.com/premium-photo/laptop-with-word-code-it_1243200-19129.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid",
      title: "Performance Optimization",
      description: "Explore techniques for optimizing WordPress performance, including caching, database optimization, and code efficiency.",
    },
    {
      href: "/advanced-security-techniques",
      imgSrc: "https://img.freepik.com/free-vector/hand-drawn-flat-design-homepage-illustration_23-2149258059.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid",
      title: "Advanced Security Techniques",
      description: "Learn advanced security practices to protect your WordPress site from common vulnerabilities and threats.",
    },
    {
      href: "/wordpress-rest-api-integration",
      imgSrc: "https://img.freepik.com/free-vector/isometric-tecnology-abstract-background_52683-845.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid",
      title: "WordPress REST API Integration",
      description: "Integrate external applications with WordPress using the REST API, enabling advanced functionality and data exchange.",
    },
    {
      href: "/scaling-wordpress-for-high-traffic",
      imgSrc: "https://img.freepik.com/premium-photo/laptop-with-screen-that-says-earth-it_1243200-19177.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid",
      title: "Scaling WordPress for High Traffic",
      description: "Implement strategies to scale WordPress sites for handling high traffic, including server optimization and load balancing.",
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section py-10 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl pb-2 md:text-4xl lg:text-5xl font-medium">
            <span className="text-[#f6ac14]">Mastering</span>
            <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent">
              {" "}
              Advanced WordPress:{" "}
            </span>
            <span className="text-[#0098f1]"> Elevate Your Development Skills</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courseData.map((course, index) => (
            <div
              key={index}
              className="group border-2 hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden"
            >
              <a href={course.href}>
                <div className="h-[210px] bg-[#0098f1]">
                  <img
                    className="w-full h-full object-cover"
                    src={course.imgSrc}
                    alt={course.title}
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

export default AdvancewordpressCard;
