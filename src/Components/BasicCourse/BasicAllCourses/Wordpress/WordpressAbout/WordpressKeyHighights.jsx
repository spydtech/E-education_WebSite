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
          <ul className="space-y-2 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Overview</p>
            <li>WordPress is a powerful content management system (CMS).</li>
            <li>It allows users to create and manage websites easily.</li>
            <li>Flexible and customizable with themes and plugins.</li>
            <li>Supports various types of websites: blogs, e-commerce, etc.</li>
            <li>Offers both free and premium versions.</li>
            <li>Widely used and supported by a large community.</li>
          </ul>
        );
      case 1:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Key Concepts</p>
            <li>Themes: Customize the design and layout of your site.</li>
            <li>Plugins: Extend the functionality of your site.</li>
            <li>Widgets: Add content and features to your sidebars.</li>
            <li>Posts and Pages: Two main content types in WordPress.</li>
            <li>SEO: Optimize your site for search engines.</li>
            <li>User Roles: Manage permissions and access for different users.</li>
          </ul>
        );
      case 2:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Applications</p>
            <li>Blogging: Share articles and updates regularly.</li>
            <li>E-commerce: Sell products and services online.</li>
            <li>Portfolio: Showcase your work and projects.</li>
            <li>Business Website: Promote your business and services.</li>
            <li>Membership Site: Offer exclusive content to members.</li>
            <li>Online Community: Create forums and social networks.</li>
          </ul>
        );
      case 3:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Skills Developed</p>
            <li>Website Design and Development</li>
            <li>Content Management</li>
            <li>Search Engine Optimization (SEO)</li>
            <li>Using Themes and Plugins</li>
            <li>Basic HTML and CSS</li>
            <li>Website Security and Maintenance</li>
            <li>Understanding of Web Hosting</li>
            <li>Analytics and Performance Tracking</li>
          </ul>
        );
      case 4:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Target Audience</p>
            <li>Bloggers and Writers</li>
            <li>Small Business Owners</li>
            <li>E-commerce Entrepreneurs</li>
            <li>Web Designers and Developers</li>
            <li>Marketing Professionals</li>
            <li>Anyone interested in creating a website</li>
            <li>Freelancers and Consultants</li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="px-20 mb-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start justify-center">
        <div className="w-auto h-auto md:lg:w-[500px] md:lg:h-[420px] mt-10 md:lg:pl-10 pl-0 text-xl">
          {renderContent()}
        </div>
        <div className="md:lg:pl-20 pl-0">
          <div className="pt-4">
            <p className="font-bold underline-offset-2 underline text-xl p-2 text-[#f6ac14]">
              WordPress Course Highlights
            </p>
          </div>
          <div className="pt-4 -ml-10 md:ml-10 lg:-ml-0 lg:ml-10">
            {data.map((item, index) => (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`p-5 text-center hover:cursor-pointer text-xl font-medium my-6 mx-4 h-16 w-[210px] flex items-center border-2 border-opacity-15 rounded-md overflow-hidden transition-transform duration-300 transform hover:scale-105 ${
                  selectedItem === index
                    ? "bg-[#0098f1] text-white border-none"
                    : ""
                }`}
              >
                <p className="text-center">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WordpressKeyHighlights;
