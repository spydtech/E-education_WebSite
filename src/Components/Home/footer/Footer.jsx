import React from "react";
import { Link } from "react-router-dom";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaFacebookF } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import IMG from "../../../assets/E- education logo .png";

function FooterPart() {
  const sections = [
    {
      title: "Learning Paths",
      links: [
        { label: "Web development", Link: "/fullStack_WebDevelopment/fullStack-Web-Development" },
        { label: "Python Developer", Link: "/fullStack_WebDevelopment/fullStack-Python-Development" },
        { label: "Data Science", Link: "/data_Science" },
        { label: "Coding For Hacking", Link: "/ethical_Hacking" },
        { label: "Software Testing", Link: "/software_testing" },
      ],
    },
    {
      title: "Student Courses",
      links: [
        { label: "Introduction to C", Link: "#" },
        { label: "Introduction to Python", Link: "#" },
        { label: "Introduction to C++", Link: "#" },
        { label: "Introduction to DataBase", Link: "#" },
        { label: "Introduction to HTML", Link: "#" },
        { label: "Introduction to CSS", Link: "#" },
        { label: "Introduction to Java", Link: "#" },
        { label: "Introduction to JavaScript", Link: "#" },
        { label: "Tech for EveryOne", Link: "#" },
        { label: "Generative AI for practise", Link: "#" },
      ],
    },
    {
      title: "Professional Courses",
      links: [
        { label: "C# Intermediate", Link: "#" },
        { label: "Python Intermediate", Link: "#" },
        { label: "Java Intermediate", Link: "#" },
        { label: "JavaScript Intermediate", Link: "#" },
        { label: "C++ Intermediate", Link: "#" },
        { label: "C Intermediate", Link: "#" },
        { label: "SQL Intermediate", Link: "#" },
        { label: "Angular", Link: "#" },
      ],
    },
    {
      title: "Advanced Courses",
      links: [
        { label: "Machine Learning", Link: "#" },
        { label: "Ai", Link: "#" },
        // { label: "Ai", Link: "#" },
        // { label: "Ai", Link: "#" },
      ],
    },
    {
      title: "Community",
      links: [
        { label: "Discuss", Link: "#" },
        { label: "Code Bits", Link: "#" },
        { label: "Feeds", Link: "#" },
        { label: "Ask me!", Link: "#" },
      ],
    },
  ];

  return (
    <>
      <footer className="md:lg:h-[700px] h-auto bg-black font-lora">
        <div className=" p-2   pb-4 text-sm">
          <div className="container mx-auto px-6 pt-24  flex justify-center">
            <div className="grid grid-cols-4  gap-6 md:grid-cols-8 lg:grid-cols-12 justify-around   bg-black">
              <div className="col-span-2 md:col-span-2 lg:col-span-2">
                <a
                  id="WindUI-5-logo"
                  aria-label="WindUI logo"
                  aria-current="page"
                  href="javascript:void(0)"
                >
                  <Link to="/">
                    <img src={IMG} className="" alt="Your Company" />
                  </Link>
                </a>
              </div>
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="col-span-2 md:col-span-4 lg:col-span-2 "
                  aria-labelledby={`footer-${section.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  <h3
                    className="mb-6 text-[20px] font-medium text-white"
                    id={`footer-${section.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    {section.title}
                  </h3>
                  {/*  */}
                  <ul>
                    {section.links.map((link, index) => (
                      <li
                        key={index}
                        className="mb-2 text-gray-400 leading-7 text-[18px]"
                      >
                        <Link
                          to={link.Link}
                          className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* foot */}
        <div className="container mx-auto flex justify-center items-center  px-8 py-6 bg-gray-900  text-white ">
          <div className="grid gap-6 md:ml-10 md:grid-cols-3 md:px-10 lg:grid-cols-5  grid-cols-2">
            <div>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 flex items-center font-medium w-36"
              >
                <SlSocialLinkedin
                  className="w-12 h-10 text-blue-500 mr-3"
                  alt="LinkedIn"
                />
                Follow us on LinkedIn
              </a>
            </div>

            <div>
              {" "}
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 flex items-center font-medium w-40"
              >
                <FaFacebookF
                  className="w-12 h-10 text-blue-800 mr-3"
                  alt="LinkedIn"
                />
                Check out our facebook
              </a>
            </div>

            <div>
              {" "}
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 flex items-center font-medium w-36"
              >
                <FiTwitter
                  className="w-12 h-12 text-blue-500 mr-3"
                  alt="LinkedIn"
                />
                See what we tweet about
              </a>
            </div>

            <div>
              {" "}
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 flex items-center font-medium w-36"
              >
                <BsInstagram
                  className="w-12 h-12 text-pink-700 mr-3"
                  alt="LinkedIn"
                />
                Join our instagram
              </a>
            </div>

            <div>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 flex items-center font-medium w-36"
              >
                <FaYoutube
                  className="w-12 h-12 text-red-600 mr-3"
                  alt="LinkedIn"
                />
                Watch our youtube
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4 mx-auto text-center">
          <p className="text-xs text-white">
            &copy; {new Date().getFullYear()} E-education. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default FooterPart;
