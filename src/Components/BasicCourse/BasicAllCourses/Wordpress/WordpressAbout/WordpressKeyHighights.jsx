import React, { useState } from "react";

function WordpressKeyHighlights() {
  const [selectedItem, setSelectedItem] = useState(0);

  const data = [
    { label: "Overview" },
    { label: "Key Concepts" },
    { label: "Applications" },
    { label: "Skills Developed" },
    { label: "Target Audience" },
  ];

  const handleClick = (index) => {
    setSelectedItem(index);
  };

  const renderContent = () => {
    switch (selectedItem) {
      case 0:
        return (
          <>
            <ul className="space-y-2 pt-4 font-normal text-[16px] list-disc pl-16  bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium text-green-500 py-4">
                Overview
              </p>
              <li>WordPress is a powerful content management system (CMS).</li>
              <li>It allows users to create and manage websites easily.</li>
              <li>Flexible and customizable with themes and plugins.</li>
              <li>
                Supports various types of websites: blogs, e-commerce, etc.
              </li>
              <li>Offers both free and premium versions.</li>
              <li>Widely used and supported by a large community.</li>
            </ul>
          </>
        );
      case 1:
        return (
          <>
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium text-green-500 py-4">
                Key Concepts
              </p>
              <li>Themes: Customize the design and layout of your site.</li>
              <li>Plugins: Extend the functionality of your site.</li>
              <li>Widgets: Add content and features to your sidebars.</li>
              <li>Posts and Pages: Two main content types in WordPress.</li>
              <li>SEO: Optimize your site for search engines.</li>
              <li>
                User Roles: Manage permissions and access for different users.
              </li>
            </ul>
          </>
        );
      case 2:
        return (
          <>
            {" "}
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium  text-green-500">
                Applications
              </p>
              <li>Blogging: Share articles and updates regularly.</li>
              <li>E-commerce: Sell products and services online.</li>
              <li>Portfolio: Showcase your work and projects.</li>
              <li>Business Website: Promote your business and services.</li>
              <li>Membership Site: Offer exclusive content to members.</li>
              <li>Online Community: Create forums and social networks.</li>
            </ul>
          </>
        );
      case 3:
        return (
          <>
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium  text-green-500">
                Skills Developed
              </p>
              <li>Website Design and Development</li>
              <li>Content Management</li>
              <li>Search Engine Optimization (SEO)</li>
              <li>Using Themes and Plugins</li>
              <li>Basic HTML and CSS</li>
              <li>Website Security and Maintenance</li>
              <li>Understanding of Web Hosting</li>
              <li>Analytics and Performance Tracking</li>
            </ul>
          </>
        );
      case 4:
        return (
          <>
            {" "}
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium  text-green-500">
                Target Audience
              </p>
              <li>Bloggers and Writers</li>
              <li>Small Business Owners</li>
              <li>E-commerce Entrepreneurs</li>
              <li>Web Designers and Developers</li>
              <li>Marketing Professionals</li>
              <li>Anyone interested in creating a website</li>
              <li>Freelancers and Consultants</li>
            </ul>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div id="main" className=" md:lg:xl:px-20  bg-[#9e0059]">
        <div id="subdiv1" className="pt-4 font-lora">
          <div id="h1" className="">
            <p className="md:lg:w-auto w-96 font-semibold text-xl p-2 text-[#31cb00]">
              WordPress Course Highlights
            </p>
          </div>
          <div
            id="h2"
            className="md:lg:flex pl-2 space-x-3 md:lg:w-auto lg:md:h-auto w-96  h-auto"
          >
            <p className="text-5xl font-bold ">What does this</p>
            <p className="text-5xl font-bold text-[#31cb00] inline">
              Course have to offer?
            </p>
          </div>
        </div>
        <div
          id="subdiv2"
          className="justify-between grid  grid-cols-1 lg:md:grid-cols-2"
        >
          {/* content start*/}
          <div id="content1" className="">
            {data.map((item, index) => (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`hover:text-green-500 p-5 text-start hover:cursor-pointer text-xl font-medium my-6 mx-4 h-16 w-80 lg:md:h-16 lg:md:w-[400px] flex items-center border-2 border-opacity-15 rounded-md overflow-hidden  transition-transform duration-300 transform hover:scale-105 ${
                  selectedItem === index
                    ? "bg-[#31cb00]  text-white hover:text-white border-none"
                    : ""
                }`}
              >
                <p>{item.label}</p>
              </div>
            ))}
          </div>
          <div
            id="content2"
            className="md:lg:w-auto md:lg:h-auto md:lg:xl:w-[400px] h-auto pt-4 md:lg:xl:pl-4 text-xl"
          >
            {renderContent()}
          </div>
          {/* content end */}
        </div>
      </div>
    </>
  );
}

export default WordpressKeyHighlights;
