import React, { useState } from "react";

function WordpressIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-[400px] flex justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-[#31cb00] font">
              {heading}
            </h2>
            <ul className="list-disc list-inside text-xl font">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
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
    <>
      <div
        id="subdiv"
        className="grid grid-cols-1 w-fit md:lg:grid-cols-2 h-full bg-[#9e0059]"
      >
        <div
          id="div1"
          className="flex items-center justify-center xl:lg:md:w-auto"
        >
          <div
            id="headings"
            className="grid grid-cols-1 text-start px-10 font"
          >
            <div>
              <p className="text-[#31cb00] text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="text-6xl font">
                So what is
                <p className="text-[#31cb00] inline pl-2">WordPress?</p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">Brief about WordPress</p>
            </div>
          </div>
        </div>
        <div id="div2" className="px-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            <div className="bg-white p-5 mb-2 overflow-hidden shadow-xl sm:rounded-lg">
              <div className="relative w-full overflow-hidden">
                <div className="flex">
                  <Slide
                    heading={slidesData[currentSlide].heading}
                    items={slidesData[currentSlide].items}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={goToPreviousSlide}
                  className="hover:text-yellow-600 text-black font-bold py-2 px-4 rounded"
                >
                  Previous
                </button>
                <div>{`Page ${currentSlide + 1}/${slidesData.length}`}</div>
                <button
                  onClick={goToNextSlide}
                  className="hover:text-yellow-600 text-black font-bold py-2 px-4 rounded"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WordpressIntroduction;
