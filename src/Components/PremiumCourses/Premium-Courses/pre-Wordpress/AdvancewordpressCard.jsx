import React from "react";
import { GoArrowUpRight } from "react-icons/go";

// Import local images
import Img1 from "../../../../assetss/Professionals/image1.jpg";
import Img2 from "../../../../assetss/Professionals/image2.jpg";
import Img3 from "../../../../assetss/Professionals/image3.jpg";
import Img4 from "../../../../assetss/Professionals/image4.jpg";
import Img5 from "../../../../assetss/Professionals/image5.jpg";
import Img6 from "../../../../assetss/Professionals/image6.jpg";

const AdvancewordpressCard = () => {
  const courseData = [
    {
      href: "/custom-theme-development",
      imgSrc: Img1,
      title: "Custom Theme Development",
      description:
        "Learn how to create custom WordPress themes from scratch, including best practices for theme development and design.",
    },
    {
      href: "/advanced-plugin-development",
      imgSrc: Img2,
      title: "Advanced Plugin Development",
      description:
        "Dive into the development of custom plugins, understanding the WordPress plugin architecture and hooks system.",
    },
    {
      href: "/performance-optimization",
      imgSrc: Img3,
      title: "Performance Optimization",
      description:
        "Explore techniques for optimizing WordPress performance, including caching, database optimization, and code efficiency.",
    },
    {
      href: "/advanced-security-techniques",
      imgSrc: Img4,
      title: "Advanced Security Techniques",
      description:
        "Learn advanced security practices to protect your WordPress site from common vulnerabilities and threats.",
    },
    {
      href: "/wordpress-rest-api-integration",
      imgSrc: Img5,
      title: "WordPress REST API Integration",
      description:
        "Integrate external applications with WordPress using the REST API, enabling advanced functionality and data exchange.",
    },
    {
      href: "/scaling-wordpress-for-high-traffic",
      imgSrc: Img6,
      title: "Scaling WordPress for High Traffic",
      description:
        "Implement strategies to scale WordPress sites for handling high traffic, including server optimization and load balancing.",
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section py-10 px-4 bg-white">
      <div className="container mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl pb-2 md:text-3xl lg:text-4xl font-medium">
            <span className="text-[#f6ac14]">Elevate</span>
            <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent">
              {" "}
              Your{" "}
            </span>
            <span className="text-[#0098f1]">IT Skills</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courseData.map((course, index) => (
            <div
              key={index}
              className="group border-2 border-transparent hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden bg-white transition-transform duration-300"
            >
              <a href={course.href}>
                {/* Image Section */}
                <div className="h-[180px] flex justify-center items-center">
                  <img
                    className="w-[300px] h-[220px] p-2 bg-cover object-cover"
                    src={course.imgSrc}
                    alt={course.title}
                  />
                </div>

                {/* Content Section */}
                <div className="p-4 flex flex-col items-center justify-between">
                  <h3 className="text-lg font-medium text-[#f6ac14] group-hover:text-black flex justify-center items-center">
                    {course.title} <GoArrowUpRight className="ml-2" />
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
