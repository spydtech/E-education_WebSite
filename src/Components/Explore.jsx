import React from "react";
import { Link } from "react-router-dom";
function Explore() {
  return (
    <div>
      <h1 className="md:text-xl text-base bg-gray-500  border-l-8 border-green-500 rounded-md md:px-3 md:py-2">
        Explore Here Courses List
      </h1>
      <div className="flex flex-col md:flex-row gap-5 pt-5 md:p-5 overflow-y-scroll">
        <div className=" w-[250px]">
          <h1 className="shyam cursor-pointer relative font-extrabold uppercase transition-colors duration-400 ease-cubic">
            Course
          </h1>
          <div className="pt-6 text-xs">
            <Link
              to="/fullStack_WebDevelopment/fullStack-Web-Development"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Web Development
            </Link>
          </div>

          <div className="pt-6 text-xs">
            <Link
              to="/php"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Php
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/java"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Java
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/wordpress"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Wordpress
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/javaScript"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              JavaScript
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/c_c++"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              C/C++
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/ui_ux_design"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              UI/UX Design
            </Link>
          </div>
        </div>
        <div class="md:flex md:h-48 md:items-center ">
          <div class="h-full border-l-2 border-[#64748b] hidden"></div>
        </div>

        <div className=" w-[250px]">
          <h1 className="shyam cursor-pointer relative font-extrabold uppercase transition-colors duration-400 ease-cubic">
            Advanced Course
          </h1>
          <div className="pt-6 text-xs">
            <Link
              to="/fullStack_WebDevelopment/mean-Stack-Developer"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              MERN Stack
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/fullStack_WebDevelopment/fullStack-Java-Development"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Java Programming Mastery
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/advance-php"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Advanced PHP Programming
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/masteringWordPressDevelopment"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Mastering WordPress Development
            </Link>
          </div>

          <div className="pt-6 text-xs">
            <Link
              to="/fullStack_WebDevelopment/full-stack-javascript"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              JavaScript for Advanced Developers
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/data_Science"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Data Science Techniques
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/network_security"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Network Security
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/erp"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              ERP-Software-Development
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/power-bi"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Power BI Development
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/fullStackMobileAppDevelopment"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Full Stack Mobile App Development
            </Link>
          </div>
        </div>
        <div class="md:flex md:h-48 md:items-center ">
          <div class="h-full border-l-2 border-[#64748b] hidden"></div>
        </div>

        <div className=" w-[250px]">
          <h1 className="shyam cursor-pointer relative font-extrabold uppercase transition-colors duration-400 ease-cubic">
            Premium Course
          </h1>
          <div className="pt-6 text-xs">
            <Link
              to="/fullStack_WebDevelopment/fullStack-Web-Development"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Full Stack Development
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/software_testing"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Software Testing
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/data_Science/machine-Learning"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Machine Learning with AI
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/fullStack_WebDevelopment/fullStack-Devops"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              DevOps Mastery
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/cloud-computing"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Cloud with AWS
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/ethical_Hacking"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Ethical Hacking
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/blockchain"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Blockchain Development
            </Link>
          </div>

          <div className="pt-6 text-xs">
            <Link
              to="/cyber_security"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Cyber Security
            </Link>
          </div>
          <style jsx>{`
            .shyam {
              font-size: 18px;
              color: black;
              font-family: inherit;
              border: none;
              background: none;
            }

            .shyam:focus,
            .shyam:hover {
              color: #0369a1;
            }

            .shyam:focus::after,
            .shyam:hover::after {
              width: 100%;
              left: 0%;
            }

            .shyam::after {
              content: "";
              pointer-events: none;
              bottom: -2px;
              left: 50%;
              position: absolute;
              width: 0%;
              height: 2px;
              background-color: #0369a1;
              transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
              transition-duration: 400ms;
              transition-property: width, left;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}

export default Explore;
