import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { FaBars, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import IMG from "../assets/logo/E-educationlogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from "../State/Auth/Action";
import { NotificationAdd } from "@mui/icons-material";
import { MdKeyboardArrowRight } from "react-icons/md";
const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown
  const [sidebarDropdown, setSidebarDropdown] = useState(false);
  const [isBasicCoursesOpen, setIsBasicCoursesOpen] = useState(false);
  const [isAdvanceCoursesOpen, setIsAdvanceCoursesOpen] = useState(false);
  const [isPremiumCoursesOpen, setIsPremiumCoursesOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 64) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navigation = [{ name: "Explore", current: false }];
  if (auth.user) {
    navigation.push(
      { name: "My Learning", href: "/mylearning", current: false },
      { name: "Course", href: "/Mycourse", current: false },
      { name: "About US", href: "/about_us", current: false }
    );
  }

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt, dispatch]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setShowDropdown(false);
      }
    };

    // Detect scroll and toggle background color

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("jwt");
    navigate("/");
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown); // Toggle the dropdown
  };

  const toggleSidebarDropdown = () => {
    setSidebarDropdown(!sidebarDropdown); // Toggle the sidebar dropdown
  };
  const toggleBasicCourses = () => setIsBasicCoursesOpen(!isBasicCoursesOpen);
  const toggleAdvanceCourses = () =>
    setIsAdvanceCoursesOpen(!isAdvanceCoursesOpen);
  const togglePremiumCourses = () =>
    setIsPremiumCoursesOpen(!isPremiumCoursesOpen);

  return (
    <>
      <Disclosure
        as="nav"
        className={`sticky top-0 z-50 ${isScrolled ? "bg-white " : "bg-white "
          }`}
      >
        {({ open }) => (
          <>
            <div
              className={`max-w-7xl mx-auto px-2 sm:px-6 lg:px-8${isScrolled ? "bg-white " : "bg-white "
                }`}
            >
              <div className="relative flex h-16 justify-between items-center">
                {/* Mobile Menu Button */}
                <div className="absolute inset-y-0 left-0 flex pl-2  mt-5 h-6 w-4 justify-center items-center lg:hidden">
                  <Disclosure.Button
                    onClick={toggleSidebar}
                    className="inline-flex items-center justify-center p-2  text-[#0098F1] hover:bg-[#0098F1] hover:text-white focus:outline-none"
                  >
                    {open ? (
                      <FaBars className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <FaBars className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                {/* Logo */}
                <div className="flex items-center lg:justify-between flex-1 pl-8 justify-center">
                  <Link to="/" className="flex-shrink-0 ">
                    <img
                      className="h-12 w-40 lg:h-16 lg:w-56"
                      src={IMG}
                      alt="Logo"
                    />
                  </Link>

                  {/* Desktop Search Bar */}
                  <div className="hidden lg:flex relative w-full max-w-lg items-center ml-10">
                    <input
                      type="text"
                      placeholder="Want to learn?"
                      className="w-full border border-zinc-300 h-10 rounded-lg pl-10 pr-12 focus:outline-none focus:ring-2 focus:ring-[#0098F1]"
                    />
                    <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={toggleDropdown} // Toggle dropdown on Explore click
                      className="absolute right-[1px] p-2 py-[6px] top-1/2 transform -translate-y-1/2 bg-[#0098F1]   rounded-lg text-[#0098F1]  flex items-center space-x-1"
                    >
                      <span className="text-white">Explore</span>
                      {showDropdown ? (
                        <FaChevronUp className="text-white" />
                      ) : (
                        <FaChevronDown className="text-white" />
                      )}
                    </button>
                    {/* Dropdown Menu */}
                  </div>
                  {showDropdown && (
                    <div className=" h-auto  absolute right-20   top-14   justify-center items-center flex">
                      <div className=" bg-[#0098F1] border-white border-2 rounded-xl  text-white h-auto w-auto   ">
                        <h3 className="lg:text-xl text-lg text-center p-4 bg-white  text-[#0098F1] w-full font-bold ">
                          Explore Here Courses List
                        </h3>
                        <div className="grid ">
                          {/* Column 1: Courses */}
                          <div className="flex  justify-between  ">
                            <div className="p-4  text-nowrap text-start mx-4 my-2">
                              <h4 className="font-bold text-white text-start ml-4 mb-2 text-lg">
                                Basic
                              </h4>
                              <ul className="grid text-[16px] ">
                                <li className="py-[2px] ">
                                  <Link
                                    className="group   text-blue-400 transition-all duration-100 ease-in-out"
                                    to="/php"
                                  >
                                    <span className="flex pb-[2px]    text-white hover:text-black   ">
                                      <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                      Php
                                    </span>
                                  </Link>
                                </li>

                                <li className="py-[2px]">
                                  <Link
                                    className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                    to="/java"
                                  >
                                    <span className=" flex pb-[2px]    text-white hover:text-black   ">
                                      <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                      Java
                                    </span>
                                  </Link>
                                </li>
                                <li className="py-[2px]">
                                  <Link
                                    className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                    to="/c_c++"
                                  >
                                    <span className="flex pb-[2px]    text-white hover:text-black  ">
                                      <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                      C/C++
                                    </span>
                                  </Link>
                                </li>
                                <li className="py-[2px]">
                                  <Link
                                    className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                    to="/wordpress"
                                  >
                                    <span className="flex pb-[2px]    text-white hover:text-black   ">
                                      <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                      Wordpress
                                    </span>
                                  </Link>
                                </li>
                                <li className="py-[2px]">
                                  <Link
                                    className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                    to="/javascript"
                                  >
                                    <span className="flex pb-[2px]    text-white hover:text-black   ">
                                      <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                      JavaScript
                                    </span>
                                  </Link>
                                </li>
                                <li className="py-[2px]">
                                  <Link
                                    className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                    to="/ui_ux_design"
                                  >
                                    <span className=" flex pb-[2px]    text-white hover:text-black   ">
                                      <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                      UI/UX Design
                                    </span>
                                  </Link>
                                </li>
                                <li className=" py-[2px]">
                                  <Link
                                    className="group   transition-all duration-100 ease-in-out"
                                    to="/fullStack_WebDevelopment/fullStack-Web-Development"
                                  >
                                    <span className="flex pb-[2px]    text-white hover:text-black  ">
                                      <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                      Web Development
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            {/* Column 3: Premium Courses */}
                            <div className="p-4  text-start text-nowrap  mx-4 my-2">
                              <h4 className="font-bold text-white mb-2 text-start ml-4 text-lg ">
                                Premium
                              </h4>
                              <ul className="grid text-[16px] ">
                                <li className="py-[2px]">
                                  <Link
                                    className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                    to="/cyber_security"
                                  >
                                    <span className="flex pb-[2px]    text-white hover:text-black   ">
                                      <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                      Cyber Security
                                    </span>
                                  </Link>
                                </li>
                                <li className="py-[2px]">
                                  <Link
                                    className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                    to="/ethical_hacking"
                                  >
                                    <span className="flex pb-[2px]    text-white hover:text-black   ">
                                      <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                      Ethical Hacking
                                    </span>
                                  </Link>
                                </li>

                                <li className="py-[2px]">
                                  <Link
                                    className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                    to="/cloud-computing"
                                  >
                                    <span className="flex pb-[2px]    text-white hover:text-black   ">
                                      <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                      Cloud with AWS
                                    </span>
                                  </Link>
                                </li>

                                <li className="py-[2px]">
                                  <Link
                                    className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                    to="/fullStack_WebDevelopment/fullStack-Devops"
                                  >
                                    <span className="flex pb-[2px]    text-white hover:text-black   ">
                                      <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                      DevOps Mastery
                                    </span>
                                  </Link>
                                </li>
                                <li className="py-[2px]">
                                  <Link
                                    className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                    to="/software_testing"
                                  >
                                    <span className="flex pb-[2px]    text-white hover:text-black   ">
                                      <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                      Software Testing
                                    </span>
                                  </Link>
                                </li>
                                <li className="py-[2px]">
                                  <Link
                                    className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                    to="/fullStack_WebDevelopment/fullStack-Web-Development"
                                  >
                                    <span className="flex pb-[2px]    text-white hover:text-black   ">
                                      <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                      Full Stack Development
                                    </span>
                                  </Link>
                                </li>
                                <li className="py-[2px]">
                                  <Link
                                    className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                    to="/blockchain"
                                  >
                                    <span className="flex pb-[2px]    text-white hover:text-black   ">
                                      <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                      Blockchain Development
                                    </span>
                                  </Link>
                                </li>

                                <li className="py-[2px]">
                                  <Link
                                    className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                    to="/data_Science/machine-Learning"
                                  >
                                    <span className="flex pb-[2px]    text-white hover:text-black   ">
                                      <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                      Machine Learning with AI
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            {/* Column 2: Advance Courses */}

                            <div className="p-2 text-lg text-start text-nowrap  mx-4 my-2">
                              <h4 className="font-bold text-white mb-2 pt-2  text-start ml-4  text-lg ">
                                Advance
                              </h4>
                              <ul className="grid text-[16px] ">
                                <li className="py-[2px]">
                                  <Link
                                    className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                    to="/power-bi"
                                  >
                                    <span className="flex pb-[2px]    text-white hover:text-black   ">
                                      <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                      Power BI
                                    </span>
                                  </Link>
                                </li>
                                <li className="py-[2px]">
                                  <Link
                                    className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                    to="/data_Science"
                                  >
                                    <span className="flex pb-[2px]    text-white hover:text-black   ">
                                      <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                      Data Science
                                    </span>
                                  </Link>
                                </li>
                                <li className="py-[2px]">
                                  <Link
                                    className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                    to="/fullStack_WebDevelopment/mean-Stack-Developer"
                                  >
                                    <span className="flex pb-[2px]    text-white hover:text-black   ">
                                      <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                      MEAN Stack
                                    </span>
                                  </Link>
                                </li>

                                <li className="py-[2px]">
                                  <Link
                                    className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                    to="/fullStack_WebDevelopment/fullStack-Java-Development"
                                  >
                                    <span className="flex pb-[2px]    text-white hover:text-black   ">
                                      <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                      Java Mastery
                                    </span>
                                  </Link>
                                </li>
                                <li className="py-[2px]">
                                  <Link
                                    className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                    to="/erp"
                                  >
                                    <span className="flex pb-[2px]    text-white hover:text-black   ">
                                      <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                      ERP-Software
                                    </span>
                                  </Link>
                                </li>
                                <li className="py-[2px]">
                                  <Link
                                    className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                    to="/advancedPhpProgramming"
                                  >
                                    <span className="flex pb-[2px] text-white">
                                      <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                      Advance PHP
                                    </span>
                                  </Link>
                                </li>
                                <li className="py-[2px]">
                                  <Link
                                    className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                    to="/network_security"
                                  >
                                    <span className=" flex pb-[2px]    text-white hover:text-black   ">
                                      <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                      Network Security
                                    </span>
                                  </Link>
                                </li>

                                <li className="py-[2px]">
                                  <Link
                                    className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                    to="/fullStack_WebDevelopment/full-stack-javascript"
                                  >
                                    <span className=" flex pb-[2px]    text-white hover:text-black   ">
                                      <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                      Advance JavaScript
                                    </span>
                                  </Link>
                                </li>
                                <li className="py-[2px]">
                                  <Link
                                    className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                    to="/masteringWordPressDevelopment"
                                  >
                                    <span className="flex pb-[2px]    text-white hover:text-black   ">
                                      <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                      Mastering Wordpress
                                    </span>
                                  </Link>
                                </li>
                                <li className="py-[2px]">
                                  <Link
                                    className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                    to="/fullStackMobileAppDevelopment"
                                  >
                                    <span className="flex pb-[2px]    text-white hover:text-black   ">
                                      <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                      Full Stack Mobile App
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* for width above 1024 */}

                {/* User Action Buttons */}
                <div className="hidden  lg:flex items-center ml-2 px-2 space-x-3">
                  {auth.user ? (
                    <>
                      <Link
                        className="group  text-blue-400 transition-all duration-100 ease-in-out"
                        to="/mylearning"
                      >
                        <span className="block pb-[2px] hover:text-[#0098f1]   text-black   bg-left-bottom ml-1 bg-gradient-to-r from-[#0098f1] to-[#0098f1] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                          My Learning
                        </span>
                      </Link>

                      <Link
                        className="group  text-blue-400 transition-all duration-100 ease-in-out"
                        to="/Mycourse"
                      >
                        <span className="block pb-[2px] hover:text-[#0098f1]   text-black  bg-left-bottom ml-1 bg-gradient-to-r from-[#0098f1] to-[#0098f1] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                          Course
                        </span>
                      </Link>

                      <Link
                        className="group  text-blue-400 transition-all duration-100 ease-in-out"
                        to="/about_us"
                      >
                        <span className="block pb-[2px] hover:text-[#0098f1]   text-black   bg-left-bottom ml-1 bg-gradient-to-r from-[#0098f1] to-[#0098f1] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                          About Us
                        </span>
                      </Link>

                      <span className="p-2 w-10 h-10 rounded-full bg-[#0098F1]  text-white text-center font-bold">
                        {auth.user.firstName[0].toUpperCase()}
                      </span>
                      <NotificationAdd
                        onMouseOver={() => setShowTooltip(true)}
                        onMouseOut={() => setShowTooltip(false)}
                        className="text-[#0098f1] cursor-pointer"
                      />
                      {showTooltip && (
                        <div className="absolute  right-11  z-50  top-16 mt-1 transform  mb-2 px-2 py-1 bg-[#0098f1] text-white text-sm rounded shadow-lg">
                          Notifications
                        </div>
                      )}
                      <button
                        onClick={handleLogout}
                        className="bg-[#0098F1] px-2 py-2 rounded-lg text-white"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/trainee" className="text-black text-lg pl-4 ">
                        Trainee
                      </Link>
                      <Link to="/login" className="text-black text-lg ">
                        Log In
                      </Link>
                      <button
                        onClick={() => navigate("/signup")}
                        className="px-4 py-2 bg-[#0098F1] text-white rounded-lg"
                      >
                        Sign Up
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Tablet & Mobile Sidebar */}
            {showSidebar && (
              <div className="lg:hidden fixed  inset-0  z-50 flex">
                <div
                  className="bg-white opacity-50 hidden w-full h-full"
                  onClick={toggleSidebar}
                ></div>
                <div className="   bg-white w-80 h-16 shadow-lg">
                  <div className="flex items-center justify-between px-4 py-3">
                    <div className="ml-24 h-10">
                      <Link to="/" className="flex-shrink-0 hidden  ">
                        <img className="h-10 w-auto" src={IMG} alt="Logo" />
                      </Link>
                    </div>
                    <button
                      onClick={toggleSidebar}
                      className="text-[#0098F1] hover:text-[#0098F1] focus:outline-none"
                    >
                      <IoCloseSharp className="h-6 w-6" />
                    </button>
                  </div>
                  {/* imp */}
                  <div className="bg-[#0098f1] pb-36  h-screen overflow-y-scroll px-4">
                    <button
                      onClick={toggleSidebarDropdown} // Toggle sidebar dropdown
                      className="w-full flex items-center justify-between p-3 text-gray-700 hover:bg-[#0098F1] hover:text-white rounded-lg"
                    >
                      <span className="text-white">Explore</span>
                      {sidebarDropdown ? (
                        <FaChevronUp className="text-white" />
                      ) : (
                        <FaChevronDown className="text-white" />
                      )}
                    </button>
                    {sidebarDropdown && (
                      <div className=" ">
                        <button
                          onClick={toggleBasicCourses} // Toggle sidebar dropdown
                          className="w-full flex items-center justify-between p-3 text-gray-700 hover:bg-[#0098F1] hover:text-white rounded-lg"
                        >
                          <span className="font-bold text-white ">Basic</span>
                          {isBasicCoursesOpen ? (
                            <FaChevronUp className="text-white" />
                          ) : (
                            <FaChevronDown className="text-white" />
                          )}
                        </button>
                        {isBasicCoursesOpen && (
                          <div className="  text-nowrap md:text-wrap">
                            <ul className="grid text-[16px] ">
                              <li className="py-[2px] ">
                                <Link
                                  className="group   text-blue-400 transition-all duration-100 ease-in-out"
                                  to="/php"
                                >
                                  <span className="flex pb-[2px]    text-white hover:text-black   ">
                                    <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                    Php
                                  </span>
                                </Link>
                              </li>

                              <li className="py-[2px]">
                                <Link
                                  className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                  to="/java"
                                >
                                  <span className=" flex pb-[2px]    text-white hover:text-black   ">
                                    <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                    Java
                                  </span>
                                </Link>
                              </li>
                              <li className="py-[2px]">
                                <Link
                                  className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                  to="/c_c++"
                                >
                                  <span className="flex pb-[2px]    text-white hover:text-black    ">
                                    <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                    C/C++
                                  </span>
                                </Link>
                              </li>
                              <li className="py-[2px]">
                                <Link
                                  className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                  to="/wordpress"
                                >
                                  <span className="flex pb-[2px]    text-white hover:text-black   ">
                                    <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                    Wordpress
                                  </span>
                                </Link>
                              </li>
                              <li className="py-[2px]">
                                <Link
                                  className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                  to="/javascript"
                                >
                                  <span className="flex pb-[2px]    text-white hover:text-black   ">
                                    <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                    JavaScript
                                  </span>
                                </Link>
                              </li>
                              <li className="py-[2px]">
                                <Link
                                  className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                  to="/ui_ux_design"
                                >
                                  <span className=" flex pb-[2px]    text-white hover:text-black   ">
                                    <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                    UI/UX Design
                                  </span>
                                </Link>
                              </li>
                              <li className=" py-[2px]">
                                <Link
                                  className="group   transition-all duration-100 ease-in-out"
                                  to="/fullStack_WebDevelopment/fullStack-Web-Development"
                                >
                                  <span className="flex pb-[2px]   text-white hover:text-black  ">
                                    <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                    Web Development
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        )}

                        {/* Column 2: Advance Courses */}

                        <button
                          onClick={toggleAdvanceCourses} // Toggle sidebar dropdown
                          className="w-full flex items-center justify-between p-3 text-gray-700 hover:bg-[#0098F1] hover:text-white rounded-lg"
                        >
                          <span className="font-bold text-white">Advance</span>
                          {isAdvanceCoursesOpen ? (
                            <FaChevronUp className="text-white" />
                          ) : (
                            <FaChevronDown className="text-white" />
                          )}
                        </button>
                        {isAdvanceCoursesOpen && (
                          <div className="  text-nowrap">
                            <ul className="grid text-[16px] ">
                              <li className="py-[2px]">
                                <Link
                                  className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                  to="/power-bi"
                                >
                                  <span className="flex pb-[2px]    text-white hover:text-black   ">
                                    <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                    Power BI
                                  </span>
                                </Link>
                              </li>
                              <li className="py-[2px]">
                                <Link
                                  className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                  to="/data_Science"
                                >
                                  <span className="flex pb-[2px]    text-white hover:text-black   ">
                                    <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                    Data Science
                                  </span>
                                </Link>
                              </li>
                              <li className="py-[2px]">
                                <Link
                                  className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                  to="/fullStack_WebDevelopment/mean-Stack-Developer"
                                >
                                  <span className="flex pb-[2px]    text-white hover:text-black   ">
                                    <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                    MEAN Stack
                                  </span>
                                </Link>
                              </li>

                              <li className="py-[2px]">
                                <Link
                                  className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                  to="/fullStack_WebDevelopment/fullStack-Java-Development"
                                >
                                  <span className="flex pb-[2px]    text-white hover:text-black   ">
                                    <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                    Java Mastery
                                  </span>
                                </Link>
                              </li>
                              <li className="py-[2px]">
                                <Link
                                  className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                  to="/erp"
                                >
                                  <span className="flex pb-[2px]    text-white hover:text-black   ">
                                    <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                    ERP-Software
                                  </span>
                                </Link>
                              </li>
                              <li className="py-[2px]">
                                <Link
                                  className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                  to="/advancedPhpProgramming"
                                >
                                  <span className="flex pb-[2px] text-white">
                                    <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                    Advance PHP
                                  </span>
                                </Link>
                              </li>
                              <li className="py-[2px]">
                                <Link
                                  className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                  to="/network_security"
                                >
                                  <span className=" flex pb-[2px]    text-white hover:text-black   ">
                                    <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                    Network Security
                                  </span>
                                </Link>
                              </li>

                              <li className="py-[2px]">
                                <Link
                                  className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                  to="/fullStack_WebDevelopment/full-stack-javascript"
                                >
                                  <span className=" flex pb-[2px]    text-white hover:text-black   ">
                                    <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                    Advance JavaScript
                                  </span>
                                </Link>
                              </li>
                              <li className="py-[2px]">
                                <Link
                                  className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                  to="/masteringWordPressDevelopment"
                                >
                                  <span className="flex pb-[2px]    text-white hover:text-black   ">
                                    <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                    Mastering Wordpress
                                  </span>
                                </Link>
                              </li>
                              <li className="py-[2px]">
                                <Link
                                  className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                  to="/fullStackMobileAppDevelopment"
                                >
                                  <span className="flex pb-[2px]    text-white hover:text-black   ">
                                    <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                    Full Stack Mobile App
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        )}

                        {/* Column 3: Premium Courses */}

                        <button
                          onClick={togglePremiumCourses} // Toggle sidebar dropdown
                          className="w-full flex items-center justify-between p-3 text-gray-700 hover:bg-[#0098F1] hover:text-white rounded-lg"
                        >
                          <span className="font-bold text-white">Premium</span>
                          {isPremiumCoursesOpen ? (
                            <FaChevronUp className="text-white" />
                          ) : (
                            <FaChevronDown className="text-white" />
                          )}
                        </button>
                        {isPremiumCoursesOpen && (
                          <div className="  text-nowrap ">
                            <ul className="grid text-[16px] ">
                              <li className="py-[2px]">
                                <Link
                                  className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                  to="/cyber_security"
                                >
                                  <span className="flex pb-[2px]    text-white hover:text-black   ">
                                    <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                    Cyber Security
                                  </span>
                                </Link>
                              </li>
                              <li className="py-[2px]">
                                <Link
                                  className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                  to="/ethical_hacking"
                                >
                                  <span className="flex pb-[2px]    text-white hover:text-black   ">
                                    <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                    Ethical Hacking
                                  </span>
                                </Link>
                              </li>

                              <li className="py-[2px]">
                                <Link
                                  className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                  to="/cloud-computing"
                                >
                                  <span className="flex pb-[2px]    text-white hover:text-black   ">
                                    <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                    Cloud with AWS
                                  </span>
                                </Link>
                              </li>

                              <li className="py-[2px]">
                                <Link
                                  className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                  to="/fullStack_WebDevelopment/fullStack-Devops"
                                >
                                  <span className="flex pb-[2px]    text-white hover:text-black   ">
                                    <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                    DevOps Mastery
                                  </span>
                                </Link>
                              </li>
                              <li className="py-[2px]">
                                <Link
                                  className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                  to="/software_testing"
                                >
                                  <span className="flex pb-[2px]    text-white hover:text-black   ">
                                    <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                    Software Testing
                                  </span>
                                </Link>
                              </li>
                              <li className="py-[2px]">
                                <Link
                                  className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                  to="/fullStack_WebDevelopment/fullStack-Web-Development"
                                >
                                  <span className="flex pb-[2px]    text-white hover:text-black   ">
                                    <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                    Full Stack Development
                                  </span>
                                </Link>
                              </li>
                              <li className="py-[2px]">
                                <Link
                                  className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                  to="/blockchain"
                                >
                                  <span className="flex pb-[2px]    text-white hover:text-black   ">
                                    <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                    Blockchain Development
                                  </span>
                                </Link>
                              </li>

                              <li className="py-[2px]">
                                <Link
                                  className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                  to="/data_Science/machine-Learning"
                                >
                                  <span className="flex pb-[2px]    text-white hover:text-black   ">
                                    <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                    Machine Learning with AI
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                    {/* <button
                    onClick={handleLogout}
                    className="block hover:text-gray-700 hover:bg-[#0098F1] text-white p-3 rounded-lg"
                  >
                    Logout
                  </button> */}

                    {/* width below 1024 */}
                    <div className="flex-col space-y-4     ml-1 px-2">
                      {auth.user ? (
                        <>
                          {" "}
                          <span className="absolute top-3 p-2 w-10 h-10 rounded-full bg-[#0098f1]  text-white text-center font-bold">
                            {auth.user.firstName[0].toUpperCase()}
                          </span>
                          <span className="text-white">
                            Notifications{" "}
                            {/* <NotificationAdd className="text-white cursor-pointer" /> */}
                          </span>
                          <Link
                            to="/mylearning"
                            className="block  hover:text-gray-700 hover:bg-[#0098F1] text-white  rounded-lg"
                          >
                            My Learning
                          </Link>
                          <Link
                            to="/Mycourse"
                            className="block hover:text-gray-700 hover:bg-[#0098F1] text-white  rounded-lg"
                          >
                            Course
                          </Link>
                          <Link
                            to="/about_us"
                            className="block hover:text-gray-700 hover:bg-[#0098F1] text-white  rounded-lg"
                          >
                            About Us
                          </Link>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>

                    <div className="w-auto absolute bg-[#0098f1] items-end flex  bottom-0 py-4   px-2 space-x-7">
                      {auth.user ? (
                        <>
                          <div className="w-72   ">
                            <button
                              onClick={handleLogout}
                              className="bg-white p-2 rounded-lg text-[#0098f1]"
                            >
                              Logout
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <Link
                            to="/trainee"
                            className="text-white text-lg pl-4 "
                          >
                            Trainee
                          </Link>
                          <Link
                            to="/login"
                            className="px-3 py-2 bg-white text-[#0098f1] rounded-lg "
                          >
                            Log In
                          </Link>
                          <button
                            onClick={() => navigate("/signup")}
                            className="px-3 py-2 bg-white text-[#0098f1] rounded-lg"
                          >
                            Sign Up
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navbar;

// import React, { useEffect, useState } from "react";
// import { Disclosure } from "@headlessui/react";
// import { FaBars } from "react-icons/fa";
// import { IoCloseSharp } from "react-icons/io5";
// import IMG from "../assets/logo/E-eLogo.png";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getUser, logout } from "../State/Auth/Action";
// import { NotificationAdd } from "@mui/icons-material";

// const Navbar = () => {
//   const [showSidebar, setShowSidebar] = useState(false);
//   const navigate = useNavigate();
//   const jwt = localStorage.getItem("jwt");
//   const auth = useSelector((state) => state.auth);
//   const dispatch = useDispatch();

//   const navigation = [{ name: "Explore", current: false }];
//   if (auth.user) {
//     navigation.push(
//       { name: "My Learning", href: "/mylearning", current: false },
//       { name: "Course", href: "/Mycourse", current: false },
//       { name: "About US", href: "/about_us", current: false }
//     );
//   }

//   useEffect(() => {
//     if (jwt) {
//       dispatch(getUser(jwt));
//     }
//   }, [jwt, auth.jwt, dispatch]);

//   const handleLogout = () => {
//     dispatch(logout());
//     localStorage.removeItem("jwt");
//     navigate("/");
//   };

//   const toggleSidebar = () => {
//     setShowSidebar(!showSidebar);
//   };

//   return (
//     <Disclosure as="nav" className="bg-white sticky top-0 z-50">
//       {({ open }) => (
//         <>
//           <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//             <div className="relative flex h-16 justify-between items-center">
//               {/* Mobile Menu Button */}
//               <div className="absolute inset-y-0 left-0 flex border-2 border-gray-500 mt-3 h-10 w-8 justify-center rounded-lg items-center md:hidden">
//                 <Disclosure.Button
//                   onClick={toggleSidebar}
//                   className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-[#0098F1] hover:text-white focus:outline-none"
//                 >
//                   {open ? (
//                     <IoCloseSharp className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <FaBars className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>

//               {/* Logo */}
//               <div className="flex items-center justify-between flex-1 pl-8 md:justify-start">
//                 <Link to="/" className="flex-shrink-0">
//                   <img className="h-12 w-40 lg:h-16 lg:w-56" src={IMG} alt="Logo" />
//                 </Link>

//                 {/* Desktop Search Bar */}
//                 <div className="hidden md:flex relative w-full max-w-lg items-center ml-10">
//                   <input
//                     type="text"
//                     placeholder="Want to learn?"
//                     className="w-full border border-zinc-300 h-10 rounded-lg pl-10 pr-12 focus:outline-none focus:ring-2 focus:ring-[#0098F1]"
//                   />
//                   <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-5 w-5"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </button>
//                   <button className="absolute right-[1px] p-2 py-[6px]  top-1/2 transform -translate-y-1/2 bg-blue-100  rounded-lg text-[#0098F1]">
//                     Explore
//                   </button>
//                 </div>
//               </div>

//               {/* User Action Buttons */}
//               <div className="hidden md:flex items-center space-x-4">
//                 {auth.user ? (
//                   <>
//                     <span className="p-3 w-10 h-10 rounded-full bg-blue-400 text-white text-center font-bold">
//                       {auth.user.firstName[0].toUpperCase()}
//                     </span>
//                     <NotificationAdd className="text-yellow-400 cursor-pointer" />
//                     <button onClick={handleLogout} className="text-red-500">
//                       Logout
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <Link to="/trainee" className="text-black text-lg pl-4 ">Trainee</Link>
//                     <Link to="/login" className="text-black text-lg ">Log In</Link>
//                     <button
//                       onClick={() => navigate("/signup")}
//                       className="px-4 py-2 bg-[#0098F1] text-white rounded-lg"
//                     >
//                       Sign Up
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Mobile Sidebar */}
//           <Disclosure.Panel className="md:hidden">
//             <div className="space-y-1 px-2 pt-2 pb-3">
//               {navigation.map((item) => (
//                 <Disclosure.Button
//                   key={item.name}
//                   as="a"
//                   href={item.href}
//                   className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-200 rounded-md"
//                 >
//                   {item.name}
//                 </Disclosure.Button>
//               ))}
//               <button className="w-full text-left px-3 py-2" onClick={toggleSidebar}>
//                 Explore
//               </button>
//             </div>
//           </Disclosure.Panel>

//           {/* Sidebar */}
//           {showSidebar && (
//             <div
//               className="fixed inset-y-0 left-0 w-48 bg-[#0098F1] p-6 text-white z-50 transform duration-300 ease-in-out"
//               style={{ left: showSidebar ? "0" : "-100%" }}
//             >
//               <button onClick={toggleSidebar} className="mb-4">Close</button>
//               <ul className="space-y-4 text-lg">
//                 <li><Link to="/explore">Explore</Link></li>
//                 <li><Link to="/trainee">Trainee</Link></li>
//                 <li><Link to="/login">Login</Link></li>
//                 <li><Link to="/signup">Signup</Link></li>
//                 {auth.user && <li onClick={handleLogout}>Logout</li>}
//               </ul>
//             </div>
//           )}
//         </>
//       )}
//     </Disclosure>
//   );
// };

// export default Navbar;

// import React, { Fragment, useRef, useEffect, useState } from "react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { FaBars } from "react-icons/fa";
// import { IoCloseSharp } from "react-icons/io5";
// import IMG from "../assets/logo/E-eLogo.png";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getUser, logout } from "../State/Auth/Action";
// import { NotificationAdd } from "@mui/icons-material";
// import Notification1 from "./Notification1";
// import Explore from "./Explore";

// const Navbar = () => {
//   const [navigationMenu, setNavigationMenu] = useState(null);
//   const [navigationMenuOpen, setNavigationMenuOpen] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const navigationRef = useRef(null);
//   const navigate = useNavigate();
//   const jwt = localStorage.getItem("jwt");
//   const auth = useSelector((state) => state.auth);
//   const [showSidebar, setShowSidebar] = useState(false);
//   const dispatch = useDispatch();

//   const navigation = [{ name: "Explore", current: false }];
//   if (auth.user) {
//     navigation.push(
//       { name: "My Learning", href: "/mylearning", current: false },
//       { name: "Course", href: "/Mycourse", current: false },
//       { name: "About US", href: "/about_us", current: false }
//     );
//   }

//   function classNames(...classes) {
//     return classes.filter(Boolean).join(" ");
//   }

//   const handleLogout = () => {
//     dispatch(logout());
//     localStorage.removeItem("jwt");
//     navigate("/");
//   };

//   useEffect(() => {
//     if (jwt) {
//       dispatch(getUser(jwt));
//     }
//   }, [jwt, auth.jwt, dispatch]);

//   const toggleNavigationMenu = (menuName) => {
//     if (navigationMenuOpen && navigationMenu === menuName) {
//       setNavigationMenuOpen(false);
//       setNavigationMenu(null);
//     } else {
//       setNavigationMenuOpen(true);
//       setNavigationMenu(menuName);
//     }
//   };

//   const handleOutsideClick = (event) => {
//     if (
//       navigationRef.current &&
//       !navigationRef.current.contains(event.target)
//     ) {
//       setNavigationMenuOpen(false);
//       setNavigationMenu(null);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleOutsideClick);
//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//     };
//   }, []);

//   return (
//     <Disclosure as="nav" className=" bg-white sticky top-0 z-50">
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 font-bold">
//             <div className="relative flex h-16 items-center justify-between">
//               {/* Mobile Menu Button */}
//               <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
//                 <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <IoCloseSharp
//                       className="block h-6 w-6"
//                       aria-hidden="true"
//                     />
//                   ) : (
//                     <FaBars className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>

//               {/* Logo */}
//               <div className="flex flex-1 items-center justify-between md:justify-start pl-8">
//                 <div className="flex ml-10 md:ml-0 mt-2 flex-shrink-0 items-center mr-10">
//                   <Link to="/">
//                     <img
//                       className="w-[200px] md:w-[275px] h-[60px] md:h-[90px] cursor-pointer"
//                       src={IMG}
//                       alt="Your Company"
//                     />
//                   </Link>
//                 </div>

//                 {/* Search Bar */}
//                 <div className="relative mr-16 hidden md:flex items-center w-full max-w-md">
//                   <input
//                     type="text"
//                     placeholder="Want to learn?"
//                     className="border border-zinc-300 h-[50px] rounded-lg py-2 px-4 pl-10 pr-16 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
//                   />
//                   <button className="absolute rounded-lg mr-2 right-0 top-1/2 transform -translate-y-1/2 bg-blue-100 text-blue-600 py-2 px-4 flex items-center space-x-1">
//                     <span>Explore</span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-5 w-5"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </button>
//                   <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-5 w-5"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </button>
//                 </div>

//                 {/* User Initials & Notifications */}
//                 <div className="flex items-center space-x-4">
//                   {auth.user && auth.user.firstName ? (
//                     <>
//                       <Link
//                         to="/PostFeeds"
//                         className="hidden md:block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
//                       >
//                         Feeds
//                       </Link>
//                       <Link
//                         to="/QuestionForm"
//                         className="hidden md:block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
//                       >
//                         Ask Me Later
//                       </Link>
//                       <div className="relative inline-block">
//                         <button
//                           className={`inline-flex items-center justify-center h-14 px-4 py-2 text-sm font-medium transition-colors rounded-md ${navigationMenu === "getting-started"
//                             ? "border-2 border-black"
//                             : ""
//                             }`}
//                           onClick={() =>
//                             toggleNavigationMenu("getting-started")
//                           }
//                         >
//                           <span className="p-3 w-12 rounded-full bg-blue-400 text-white font-bold text-center cursor-pointer">
//                             {auth.user.firstName[0].toUpperCase()}
//                           </span>
//                           <svg
//                             className={`relative top-[1px] ml-1 h-5 w-5 ease-out duration-300 ${navigationMenuOpen &&
//                               navigationMenu === "getting-started"
//                               ? "-rotate-180"
//                               : ""
//                               }`}
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             aria-hidden="true"
//                           >
//                             <polyline points="6 9 12 15 18 9"></polyline>
//                           </svg>
//                         </button>

//                         {navigationMenuOpen &&
//                           navigationMenu === "getting-started" && (
//                             <div className="absolute z-10 mt-1 w-48 -ml-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//                               <a
//                                 href="/MyCourse"
//                                 className="block mr-4 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                               >
//                                 My Courses
//                               </a>
//                               <a
//                                 href="/Purchases"
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                               >
//                                 Purchases
//                               </a>
//                               <a
//                                 href="/Profile"
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                               >
//                                 Profile
//                               </a>
//                               <a
//                                 href="/Settings"
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                               >
//                                 Settings
//                               </a>
//                               <a
//                                 href="/"
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                               >
//                                 Updates
//                               </a>
//                               <a
//                                 href="/WSpace"
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                               >
//                                 WorkSpace
//                               </a>
//                               <a
//                                 href="#"
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                               >
//                                 Accomplishments
//                               </a>
//                               <a
//                                 href="#"
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                               >
//                                 Help Center
//                               </a>
//                               <a
//                                 href="/login"
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                                 onClick={handleLogout}
//                               >
//                                 Logout
//                               </a>
//                             </div>
//                           )}
//                       </div>
//                       <NotificationAdd
//                         className="text-yellow-400 cursor-pointer"
//                         onClick={() => setShowSidebar(!showSidebar)}
//                       />
//                       <div
//                         className={`inset-y-0 right-0 w-64 mt-[5%] bg-gray-800 text-white transition-transform transform ${showSidebar ? "translate-x-0" : "translate-x-full"
//                           } ease-in-out duration-300`}
//                       >
//                         {/* <Notification1 /> */}
//                       </div>
//                     </>
//                   ) : (
//                     <div className=" flex hidden md:flex items-center space-x-4">
//                       <Menu as="div" className="relative mr-4">
//                         <div className="hidden md:flex items-center space-x-4">
//                           <Menu as="div" className="relative mr-4 mt-2">
//                             <Link to="/trainee">
//                               <div className="text-black">Trainee</div>
//                             </Link>
//                           </Menu>

//                           <Menu as="div" className="relative mt-2.5">
//                             <Link to="/login">
//                               <div className="text-black">Log In</div>
//                             </Link>
//                           </Menu>
//                         </div>
//                         <Transition
//                           as={Fragment}
//                           enter="transition ease-out duration-100"
//                           enterFrom="transform opacity-0 scale-95"
//                           enterTo="transform opacity-100 scale-100"
//                           leave="transition ease-in duration-75"
//                           leaveFrom="transform opacity-100 scale-100"
//                           leaveTo="transform opacity-0 scale-95"
//                         >
//                           <Menu.Items className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//                             <Menu.Item>
//                               {({ active }) => (
//                                 <a
//                                   href="/PostFeeds"
//                                   className={`${active
//                                     ? "bg-gray-100 text-gray-900"
//                                     : "text-gray-700"
//                                     } block px-4 py-2 text-sm`}
//                                 >
//                                   Feeds
//                                 </a>
//                               )}
//                             </Menu.Item>
//                             <Menu.Item>
//                               {({ active }) => (
//                                 <a
//                                   href="/QuestionForm"
//                                   className={`${active
//                                     ? "bg-gray-100 text-gray-900"
//                                     : "text-gray-700"
//                                     } block px-4 py-2 text-sm`}
//                                 >
//                                   Ask Me Later
//                                 </a>
//                               )}
//                             </Menu.Item>
//                           </Menu.Items>
//                         </Transition>
//                       </Menu>
//                       <button
//                         onClick={() => setShowPopup(true)}
//                         className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                       >
//                         Create account
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           <Disclosure.Panel className="md:hidden">
//             <div className="space-y-1 px-2 pt-2 pb-3">
//               {navigation.map((item) => (
//                 <Disclosure.Button
//                   key={item.name}
//                   as="a"
//                   href={item.href}
//                   className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//                 >
//                   {item.name}
//                 </Disclosure.Button>
//               ))}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// };

// export default Navbar;

// import React, { Fragment, useRef, useEffect, useState } from "react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { FaBars } from "react-icons/fa";
// import { IoCloseSharp } from "react-icons/io5";
// import IMG from "../assets/logo/E-eLogo.png";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getUser, logout } from "../State/Auth/Action";
// import { NotificationAdd } from "@mui/icons-material";
// import Notification1 from "./Notification1";
// import Explore from "./Explore";

// const Navbar = () => {
//   const [navigationMenu, setNavigationMenu] = useState(null);
//   const [navigationMenuOpen, setNavigationMenuOpen] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const navigationRef = useRef(null);
//   const navigate = useNavigate();
//   const jwt = localStorage.getItem("jwt");
//   const auth = useSelector((state) => state.auth);
//   const [showSidebar, setShowSidebar] = useState(false);
//   const dispatch = useDispatch();

//   const navigation = [{ name: "Explore", current: false }];
//   if (auth.user) {
//     navigation.push(
//       { name: "My Learning", href: "/mylearning", current: false },
//       { name: "Course", href: "/Mycourse", current: false },
//       { name: "About US", href: "/about_us", current: false }
//     );
//   }

//   function classNames(...classes) {
//     return classes.filter(Boolean).join(" ");
//   }

//   const handleLogout = () => {
//     dispatch(logout());
//     localStorage.removeItem("jwt");
//     navigate("/");
//   };

//   useEffect(() => {
//     if (jwt) {
//       dispatch(getUser(jwt));
//     }
//   }, [jwt, auth.jwt, dispatch]);

//   const toggleNavigationMenu = (menuName) => {
//     if (navigationMenuOpen && navigationMenu === menuName) {
//       setNavigationMenuOpen(false);
//       setNavigationMenu(null);
//     } else {
//       setNavigationMenuOpen(true);
//       setNavigationMenu(menuName);
//     }
//   };

//   const handleOutsideClick = (event) => {
//     if (
//       navigationRef.current &&
//       !navigationRef.current.contains(event.target)
//     ) {
//       setNavigationMenuOpen(false);
//       setNavigationMenu(null);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleOutsideClick);
//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//     };
//   }, []);

//   return (
//     <Disclosure as="nav" className=" bg-white sticky top-0 z-50">
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 font-bold">
//             <div className="relative flex h-16 items-center justify-between">
//               {/* Mobile Menu Button */}
//               <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
//                 <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <IoCloseSharp
//                       className="block h-6 w-6"
//                       aria-hidden="true"
//                     />
//                   ) : (
//                     <FaBars className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>

//               {/* Logo */}
//               <div className="flex flex-1 items-center justify-between md:justify-start pl-8">
//                 <div className="flex ml-10 md:ml-0 mt-2 flex-shrink-0 items-center mr-10">
//                   <Link to="/">
//                     <img
//                       className="w-[200px] md:w-[275px] h-[60px] md:h-[90px] cursor-pointer"
//                       src={IMG}
//                       alt="Your Company"
//                     />
//                   </Link>
//                 </div>

//                 {/* Search Bar */}
//                 <div className="relative mr-16 hidden md:flex items-center w-full max-w-md">
//                   <input
//                     type="text"
//                     placeholder="Want to learn?"
//                     className="border border-zinc-300 h-[50px] rounded-lg py-2 px-4 pl-10 pr-16 focus:outline-none focus:ring-2 focus:ring-[#0098F1]w-full"
//                   />
//                   <button className="absolute rounded-lg mr-2 right-0 top-1/2 transform -translate-y-1/2 bg-blue-100 text-[#0098F1] py-2 px-4 flex items-center space-x-1">
//                     <span>Explore</span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-5 w-5"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </button>
//                   <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-5 w-5"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </button>
//                 </div>

//                 {/* User Initials & Notifications */}
//                 <div className="flex items-center space-x-4">
//                   {auth.user && auth.user.firstName ? (
//                     <>
//                       <Link
//                         to="/PostFeeds"
//                         className="hidden md:block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
//                       >
//                         Feeds
//                       </Link>
//                       <Link
//                         to="/QuestionForm"
//                         className="hidden md:block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
//                       >
//                         Ask Me Later
//                       </Link>
//                       <div className="relative inline-block">
//                         <button
//                           className={`inline-flex items-center justify-center h-14 px-4 py-2 text-sm font-medium transition-colors rounded-md ${navigationMenu === "getting-started"
//                             ? "border-2 border-black"
//                             : ""
//                             }`}
//                           onClick={() =>
//                             toggleNavigationMenu("getting-started")
//                           }
//                         >
//                           <span className="p-3 w-12 rounded-full bg-blue-400 text-white font-bold text-center cursor-pointer">
//                             {auth.user.firstName[0].toUpperCase()}
//                           </span>
//                           <svg
//                             className={`relative top-[1px] ml-1 h-5 w-5 ease-out duration-300 ${navigationMenuOpen &&
//                               navigationMenu === "getting-started"
//                               ? "-rotate-180"
//                               : ""
//                               }`}
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             aria-hidden="true"
//                           >
//                             <polyline points="6 9 12 15 18 9"></polyline>
//                           </svg>
//                         </button>

//                         {navigationMenuOpen &&
//                           navigationMenu === "getting-started" && (
//                             <div className="absolute z-10 mt-1 w-48 -ml-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//                               <a
//                                 href="/MyCourse"
//                                 className="block mr-4 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                               >
//                                 My Courses
//                               </a>
//                               <a
//                                 href="/Purchases"
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                               >
//                                 Purchases
//                               </a>
//                               <a
//                                 href="/Profile"
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                               >
//                                 Profile
//                               </a>
//                               <a
//                                 href="/Settings"
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                               >
//                                 Settings
//                               </a>
//                               <a
//                                 href="/"
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                               >
//                                 Updates
//                               </a>
//                               <a
//                                 href="/WSpace"
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                               >
//                                 WorkSpace
//                               </a>
//                               <a
//                                 href="#"
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                               >
//                                 Accomplishments
//                               </a>
//                               <a
//                                 href="#"
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                               >
//                                 Help Center
//                               </a>
//                               <a
//                                 href="/login"
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                                 onClick={handleLogout}
//                               >
//                                 Logout
//                               </a>
//                             </div>
//                           )}
//                       </div>
//                       <NotificationAdd
//                         className="text-yellow-400 cursor-pointer"
//                         onClick={() => setShowSidebar(!showSidebar)}
//                       />
//                       <div
//                         className={`inset-y-0 right-0 w-64 mt-[5%] bg-gray-800 text-white transition-transform transform ${showSidebar ? "translate-x-0" : "translate-x-full"
//                           } ease-in-out duration-300`}
//                       >
//                         {/* <Notification1 /> */}
//                       </div>
//                     </>
//                   ) : (
//                     <div className=" flex hidden md:flex items-center space-x-4">
//                       <Menu as="div" className="relative mr-4">
//                         <div className="hidden md:flex items-center space-x-4">
//                           <Menu as="div" className="relative mr-4 mt-2">
//                             <Link to="/trainee">
//                               <div className="text-black">Trainee</div>
//                             </Link>
//                           </Menu>

//                           <Menu as="div" className="relative mt-2.5">
//                             <Link to="/login">
//                               <div className="text-black">Log In</div>
//                             </Link>
//                           </Menu>
//                         </div>
//                         <Transition
//                           as={Fragment}
//                           enter="transition ease-out duration-100"
//                           enterFrom="transform opacity-0 scale-95"
//                           enterTo="transform opacity-100 scale-100"
//                           leave="transition ease-in duration-75"
//                           leaveFrom="transform opacity-100 scale-100"
//                           leaveTo="transform opacity-0 scale-95"
//                         >
//                           <Menu.Items className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//                             <Menu.Item>
//                               {({ active }) => (
//                                 <a
//                                   href="/PostFeeds"
//                                   className={`${active
//                                     ? "bg-gray-100 text-gray-900"
//                                     : "text-gray-700"
//                                     } block px-4 py-2 text-sm`}
//                                 >
//                                   Feeds
//                                 </a>
//                               )}
//                             </Menu.Item>
//                             <Menu.Item>
//                               {({ active }) => (
//                                 <a
//                                   href="/QuestionForm"
//                                   className={`${active
//                                     ? "bg-gray-100 text-gray-900"
//                                     : "text-gray-700"
//                                     } block px-4 py-2 text-sm`}
//                                 >
//                                   Ask Me Later
//                                 </a>
//                               )}
//                             </Menu.Item>
//                           </Menu.Items>
//                         </Transition>
//                       </Menu>
//                       <button
//                         onClick={() => setShowPopup(true)}
//                         className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#0098F1] hover:bg-[#0098F1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0098F1]"
//                       >
//                         Create account
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           <Disclosure.Panel className="md:hidden">
//             <div className="space-y-1 px-2 pt-2 pb-3">
//               {navigation.map((item) => (
//                 <Disclosure.Button
//                   key={item.name}
//                   as="a"
//                   href={item.href}
//                   className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//                 >
//                   {item.name}
//                 </Disclosure.Button>
//               ))}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// };

// export default Navbar;