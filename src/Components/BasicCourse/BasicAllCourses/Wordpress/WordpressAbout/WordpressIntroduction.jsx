import React, { useState } from "react";

function WordpressIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-2 py-8 flex flex-col h-full relative overflow-hidden">
        <div className="flex-grow pb-28">
          <h2 className="text-2xl lg:text-3xl font-medium mb-4 text-white font-sans">
            {heading}
          </h2>
          <ul className="list-disc list-outside text-lg lg:text-xl pl-10 text-start text-white">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="absolute left-0 right-0 bottom-0 flex justify-between">
          <button
            onClick={goToPreviousSlide}
            className="hover:text-[#f6ac14] text-white font-bold rounded px-4"
          >
            Previous
          </button>
          <div className="text-white">{`Page ${currentSlide + 1}/${slidesData.length}`}</div>
          <button
            onClick={goToNextSlide}
            className="hover:text-[#f6ac14] text-white font-bold rounded px-4"
          >
            Next
          </button>
        </div>
      </div>
    );
  };

  const slidesData = [
    {
      heading: "Introduction to WordPress",
      items: [
        "WordPress is a powerful content management system (CMS) that enables users to create and manage websites with ease.",
        "Key Concepts: Learn about the WordPress interface, themes, and plugins to customize your site.",
      ],
    },
    {
      heading: "Types of WordPress Websites",
      items: [
        "Blog: Share your thoughts, ideas, and updates with a blog website.",
        "E-commerce: Build online stores using WordPress and WooCommerce.",
      ],
    },
    {
      heading: "Essential WordPress Plugins",
      items: [
        "Yoast SEO: Optimize your website for search engines.",
        "WooCommerce: Turn your site into a powerful e-commerce platform.",
      ],
    },
    {
      heading: "WordPress Security Measures",
      items: [
        "Use Security Plugins: Protect your site with plugins like Wordfence and Sucuri.",
        "Regular Backups: Ensure you have regular backups of your site to prevent data loss.",
      ],
    },
    {
      heading: "Best Practices for WordPress",
      items: [
        "Keep WordPress Updated: Regularly update WordPress, themes, and plugins to the latest versions.",
        "Optimize for Performance: Use caching plugins and optimize images for faster load times.",
      ],
    },
  ];

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slidesData.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-screen h-auto mb-16">
      <div className="flex items-center justify-center">
        <div className="text-start px-4 lg:px-10">
          <div>
            <p className="text-[#f6ac14] underline-offset-2 underline text-2xl lg:text-[24px] font-bold">
              Introduction
            </p>
          </div>
          <div className="py-5">
            <p className="text-xl lg:text-5xl font">
              So what is
              <span className="text-[#f6ac14] inline pl-2">WordPress?</span>
            </p>
          </div>
          <div>
            <p className="text-lg lg:text-xl text-gray-500">
              Brief about WordPress
            </p>
          </div>
        </div>
      </div>
      <div className="h-auto lg:h-[520px] flex justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-4 lg:px-14 xl:px-36 sm:mt-8 lg:mt-0 lg:mr-32">
          <div className="bg-[#0098f1] relative w-full lg:w-[500px] lg:h-[450px] md:h-[350px] sm:h-[400px] h-[520px] p-5 mt-10 mb-2 shadow-xl sm:rounded-lg">
            <div className="relative w-full h-full">
              <Slide
                heading={slidesData[currentSlide].heading}
                items={slidesData[currentSlide].items}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WordpressIntroduction;
