// import React from "react";
// import IMG from "../../../assets/E- education logo .png"
// import { Link } from "react-router-dom";

// function Footer() {
//   return (
//     <>
//       <footer className="w-full text-slate-500">
//         {/*      <!-- Main footer --> */}
//         <div className="border-t border-slate-200 bg-slate-100 pt-16 pb-12 text-sm">
//           <div className="container mx-auto px-6">
//             <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
//               <div
//                 className="col-span-4 md:col-span-8 lg:col-span-4"
//                 aria-labelledby="footer-header"
//               >
//                 <a
//                   id="WindUI-5-logo"
//                   aria-label="WindUI logo"
//                   aria-current="page"
//                   className="mb-6 flex items-center gap-2 whitespace-nowrap text-base font-medium leading-6 text-slate-700 focus:outline-none"
//                   href="javascript:void(0)"
//                 >
//                   <Link to="/">
//                   <img
//                   src={IMG}
//                     className="h-14 w-auto"
//                     alt="Your Company"
//                   /></Link>
                 
                
//                 </a>
//                 <p>
//                   Expertly made, responsive, accessible components in React and
//                   HTML ready to be used on your website or app. Just copy and
//                   paste them on your Tailwind CSS project.
//                 </p>
//               </div>
//               <nav
//                 className="col-span-2 md:col-span-4 lg:col-span-2"
//                 aria-labelledby="footer-product-5-logo"
//               >
//                 <h3
//                   className="mb-6 text-base font-medium text-slate-700"
//                   id="footer-product-5-logo"
//                 >
//                   Product
//                 </h3>
//                 <ul>
//                   <li className="mb-2 leading-6">
//                     <a
//                       href="javascript:void(0)"
//                       className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
//                     >
//                       Features
//                     </a>
//                   </li>
//                   <li className="mb-2 leading-6">
//                     <a
//                       href="javascript:void(0)"
//                       className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
//                     >
//                       Customers
//                     </a>
//                   </li>
//                   <li className="mb-2 leading-6">
//                     <a
//                       href="javascript:void(0)"
//                       className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
//                     >
//                       Why us?
//                     </a>
//                   </li>
//                   <li className="mb-2 leading-6">
//                     <a
//                       href="javascript:void(0)"
//                       className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
//                     >
//                       Pricing
//                     </a>
//                   </li>
//                 </ul>
//               </nav>
//               <nav
//                 className="col-span-2 md:col-span-4 lg:col-span-2"
//                 aria-labelledby="footer-docs-5-logo"
//               >
//                 <h3
//                   className="mb-6 text-base font-medium text-slate-700"
//                   id="footer-docs-5-logo"
//                 >
//                   Docs & Help
//                 </h3>
//                 <ul>
//                   <li className="mb-2 leading-6">
//                     <a
//                       href="javascript:void(0)"
//                       className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
//                     >
//                       Documentation
//                     </a>
//                   </li>
//                   <li className="mb-2 leading-6">
//                     <a
//                       href="javascript:void(0)"
//                       className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
//                     >
//                       Training
//                     </a>
//                   </li>
//                   <li className="mb-2 leading-6">
//                     <a
//                       href="javascript:void(0)"
//                       className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
//                     >
//                       System status
//                     </a>
//                   </li>
//                   <li className="mb-2 leading-6">
//                     <a
//                       href="javascript:void(0)"
//                       className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
//                     >
//                       FAQ's
//                     </a>
//                   </li>
//                   <li className="mb-2 leading-6">
//                     <a
//                       href="javascript:void(0)"
//                       className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
//                     >
//                       Help Center
//                     </a>
//                   </li>
//                 </ul>
//               </nav>
//               <nav
//                 className="col-span-2 md:col-span-4 lg:col-span-2"
//                 aria-labelledby="footer-about-5-logo"
//               >
//                 <h3
//                   className="mb-6 text-base font-medium text-slate-700"
//                   id="footer-about-5-logo"
//                 >
//                   About us
//                 </h3>
//                 <ul>
//                   <li className="mb-2 leading-6">
//                     <a
//                       href="javascript:void(0)"
//                       className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
//                     >
//                       About us
//                     </a>
//                   </li>
//                   <li className="mb-2 leading-6">
//                     <a
//                       href="javascript:void(0)"
//                       className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
//                     >
//                       Careers
//                     </a>
//                   </li>
//                   <li className="mb-2 leading-6">
//                     <a
//                       href="javascript:void(0)"
//                       className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
//                     >
//                       Leadership
//                     </a>
//                   </li>
//                   <li className="mb-2 leading-6">
//                     <a
//                       href="javascript:void(0)"
//                       className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
//                     >
//                       Blog
//                     </a>
//                   </li>
//                   <li className="mb-2 leading-6">
//                     <a
//                       href="javascript:void(0)"
//                       className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
//                     >
//                       Events
//                     </a>
//                   </li>
//                 </ul>
//               </nav>
//               <nav
//                 className="col-span-2 md:col-span-4 lg:col-span-2"
//                 aria-labelledby="footer-get-in-touch-5-logo"
//               >
//                 <h3
//                   className="mb-6 text-base font-medium text-slate-700"
//                   id="footer-get-in-touch-5-logo"
//                 >
//                   Get in touch
//                 </h3>
//                 <ul>
//                   <li className="mb-2 leading-6">
//                     <a
//                       href="javascript:void(0)"
//                       className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
//                     >
//                       Contact
//                     </a>
//                   </li>
//                   <li className="mb-2 leading-6">
//                     <a
//                       href="javascript:void(0)"
//                       className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
//                     >
//                       Support
//                     </a>
//                   </li>
//                   <li className="mb-2 leading-6">
//                     <a
//                       href="javascript:void(0)"
//                       className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
//                     >
//                       Partners
//                     </a>
//                   </li>
//                   <li className="mb-2 leading-6">
//                     <a
//                       href="javascript:void(0)"
//                       className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
//                     >
//                       Join research
//                     </a>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }
// export default Footer;


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
        { label: "Web development", url: "#" },
        { label: "Python Developer", url: "#" },
        { label: "Coding Foundations", url: "#" },
        { label: "Coding for Data", url: "#" },
        { label: "Front-end for Beginners", url: "#" },
      ],
    },
    {
      title: "Introduction Courses",
      links: [
        { label: "Introduction to C", url: "#" },
        { label: "Introduction to Python", url: "#" },
        { label: "Introduction to C#", url: "#" },
        { label: "Introduction to SQL", url: "#" },
        { label: "Introduction to HTML", url: "#" },
        { label: "Introduction to CSS", url: "#" },
        { label: "Introduction to Java", url: "#" },
        { label: "Introduction to JavaScript", url: "#" },
        { label: "Introduction to C++", url: "#" },
        { label: "Tech for EveryOne", url: "#" },
        { label: "Generative AI for practise", url: "#" },
      ],
    },
    {
      title: "Intermediate Courses",
      links: [
        { label: "C# Intermediate", url: "#" },
        { label: "Python Intermediate", url: "#" },
        { label: "Java Intermediate", url: "#" },
        { label: "JavaScript Intermediate", url: "#" },
        { label: "C++ Intermediate", url: "#" },
        { label: "C Intermediate", url: "#" },
        { label: "SQL Intermediate", url: "#" },
        { label: "Angular", url: "#" },
      ],
    },
    {
      title: "Community",
      links: [
        { label: "Discuss", url: "#" },
        { label: "Code Bits", url: "#" },
        { label: "Blog", url: "#" },
      ],
    },
  ];

  return (
    <>
      <footer className="md:lg:h-screen h-auto bg-black">
        <div className="border-t p-2   pb-4 text-sm">
          <div className="container mx-auto px-6  flex justify-center">
            <div className="grid grid-cols-4  gap-6 md:grid-cols-8 lg:grid-cols-12 justify-around   bg-black">
              <div className="col-span-2 md:col-span-4 lg:col-span-3">
                <a
                  id="WindUI-5-logo"
                  aria-label="WindUI logo"
                  aria-current="page"
                  href="javascript:void(0)"
                >
                  <Link to="/">
                    <img src={IMG} className="h-60 w-60" alt="Your Company" />
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
                        <a
                          href={link.url}
                          className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* foot */}
        <div className="container mx-auto my-4  px-8  py-6 bg-gray-900  text-white ">
          <div className=" justify-between items-center grid gap-6 ml-10 grid-cols-2 px-10 lg:md:grid-cols-5 ">
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
            &copy; {new Date().getFullYear()} E-Education. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default FooterPart;
