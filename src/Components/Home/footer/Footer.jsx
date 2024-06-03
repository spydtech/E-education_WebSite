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
        { label: "Full Stack JavaScript", Link: "/fullStack_WebDevelopment/fullStack-Java-Development" },
        { label: "MERN Stack Development", Link: "/fullStack_WebDevelopment/mean-Stack-Developer" },
        { label: "Full Stack java", Link: "/fullStack_WebDevelopment/fullStack-Java-Development" },
        { label: "Full Stack .Net", Link: "/fullStack_WebDevelopment/dot-net-development" },
        { label: "Full Stack Devops", Link: "/fullStack_WebDevelopment/fullStack-Devops" },
        { label: "Introduction to Data Science", Link: "/data_Science/introduction-to-data-science" },
        { label: "Data Science with python", Link: "/data_Science/data-science-with-python" },
        { label: "Introduction of Data Analytics", Link: "/data_Science/big-data-analysis" },
        { label: "Big Data Analytics", Link: "/data_Science/big-data-analysis" },
        { label: "Generative AI", Link: "/data_Science/machine-Learning" },
      ],
    },
    {
      title: "Advanced Courses",
      links: [
        { label: "Ethical Hacking", Link: "/Ethical_Hacking/advance_Ethical_Hacking" },
        { label: "Network Security", Link: "/network_security/advance-network-secuity" },
        { label: "Mobile App Development", Link: "/fullStackMobileAppDevelopment" },
        { label: "Data Base Management", Link: "/database" },
        { label: "UI/Ux Design", Link: "/ui_ux_design" },
        { label: "React", Link: "/reactjs" },
        { label: "Wordpress Developemt", Link: "/masteringWordPressDevelopment" },
      ],
    },
    {
      title: "Professional Courses",
      links: [
        { label: "Machine Learning", Link: "/data_Science/machine-Learning" },
        { label: "Ethical Hacking", Link: "/Ethical_Hacking/advance_Ethical_Hacking" },
        { label: "Data Visualization", Link: "/data_Science/data-visualization" },
        { label: "Cyber Security", Link: "/Cybersecurity/Cybersecurity_fundamentals" },
        { label: "Cloud Computing", Link: "/cloud-testing" },
        { label: "It and Networking", Link: "/network_security/advance-network-secuity" },
        { label: "Big Data", Link: "/data_Science/big-data-analysis" },
        { label: "Block Chain Developemt", Link: "/blockchain" },
        { label: "DevOps Mastry", Link: "/fullStack_WebDevelopment/fullStack-Devops" },
      ],
    },
    {
      title: "Community",
      links: [
        { label: "Discuss", Link: "/" },
        { label: "Code Bits", Link: "/" },
        { label: "Feeds", Link: "/PostFeeds" },
        { label: "Ask me!", Link: "/QuestionForm" },
      ],
    },
  ];

  return (
    <>
      <footer className=" h-auto bg-black font-lora">
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
            &copy; {new Date().getFullYear()} SPY D Technology . All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default FooterPart;
