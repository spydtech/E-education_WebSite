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
            <li>WordPress is a leading content management system (CMS).</li>
            <li>Used for building and managing websites with ease.</li>
            <li>Highly customizable with a wide range of themes and plugins.</li>
            <li>Supports various types of websites including blogs and e-commerce.</li>
            <li>Offers both free and premium features.</li>
            <li>Backed by a robust community and extensive support.</li>
          </ul>
        );
      case 1:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Key Concepts</p>
            <li>Themes: Customize your site's appearance and layout.</li>
            <li>Plugins: Enhance functionality and add features.</li>
            <li>Widgets: Add extra content and functionalities to sidebars.</li>
            <li>Posts vs. Pages: Understand the differences and use cases.</li>
            <li>SEO: Optimize your site for search engines.</li>
            <li>User Roles: Manage permissions and access control.</li>
          </ul>
        );
      case 2:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Applications</p>
            <li>Blogging: Regularly publish articles and updates.</li>
            <li>E-commerce: Build online stores to sell products and services.</li>
            <li>Portfolio: Showcase your work and creative projects.</li>
            <li>Business Website: Promote and manage business presence online.</li>
            <li>Membership Site: Provide exclusive content to members.</li>
            <li>Community Forum: Create and manage user forums and discussion boards.</li>
          </ul>
        );
      case 3:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Skills Developed</p>
            <li>Design and development of WordPress websites</li>
            <li>Content management and optimization</li>
            <li>Utilization of themes and plugins</li>
            <li>Basic knowledge of HTML and CSS</li>
            <li>Website security and maintenance</li>
            <li>Understanding web hosting and domain management</li>
            <li>Analytics and performance tracking</li>
          </ul>
        );
      case 4:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Target Audience</p>
            <li>Bloggers and Content Creators</li>
            <li>Small to Medium Business Owners</li>
            <li>E-commerce Operators</li>
            <li>Freelance Web Designers and Developers</li>
            <li>Digital Marketers</li>
            <li>Anyone interested in starting a website</li>
            <li>Consultants and Educators</li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="sm:px-20 pl-12 mb-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start justify-center">
        <div className="w-auto h-auto md:w-[500px] md:h-[420px] mt-10 md:pl-10 pl-0 text-xl">
          {renderContent()}
        </div>
        <div className="md:pl-20 pl-0">
          <div className="pt-4">
            <p className="font-bold underline-offset-2 underline text-xl  text-[#f6ac14]">
              WordPress Course Highlights
            </p>
          </div>
          <div className="pt-4 lg:ml-10">
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
