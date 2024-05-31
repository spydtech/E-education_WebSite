import { Fragment, useRef, useEffect } from "react";
import React, { useState } from "react";
import { Disclosure, Menu } from "@headlessui/react";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import IMG from "../assets/E- education logo .png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from "../State/Auth/Action";
import { NotificationAdd } from "@mui/icons-material";
import Notification1 from "./Notification1";

const Navbar = () => {
  const [navigationMenu, setNavigationMenu] = useState(null);
  const [navigationMenuOpen, setNavigationMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigationRef = useRef(null); // Initialize navigationRef with useRef
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const auth = useSelector((state) => state.auth);
  const [showSidebar, setShowSidebar] = useState(false);


  const dispatch = useDispatch();

  const navigation = [{ name: "Explore", href: "/", current: false }];
  if (auth.user) {
    navigation.push(
      { name: "My Learning", href: "/mylearning", current: false },
      { name: "Course", href: "/Mycourse", current: false },
      { name: "About US", href: "/about_us", current: false }
    );
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("jwt");
    navigate("/");
  };

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt, dispatch]);

  const toggleNavigationMenu = (menuName) => {
    if (navigationMenuOpen && navigationMenu === menuName) {
      setNavigationMenuOpen(false);
      setNavigationMenu(null);
    } else {
      setNavigationMenuOpen(true);
      setNavigationMenu(menuName);
    }
  };

  const handleOutsideClick = (event) => {
    if (
      navigationRef.current &&
      !navigationRef.current.contains(event.target)
    ) {
      setNavigationMenuOpen(false);
      setNavigationMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <Disclosure as="nav" className="bg-[#0077b6] sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 font-lora">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <IoCloseSharp
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <FaBars className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-between sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img
                      className="h-14 cursor-pointer"
                      src={IMG}
                      alt="Your Company"
                    />
                  </Link>
                </div>
                {/* Navigation Links */}
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 mt-2 text-sm font-medium ml-4 mb-2"
                      )}
                      aria-current={item.current ? "page" : undefined}
                      onMouseEnter={() => {
                        if (item.name === "Explore") {
                          setShowPopup(true);
                        }
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Popup */}
              {showPopup && (
                <div
                  onMouseLeave={() => setShowPopup(false)}
                  className="absolute top-14 left-0 bg-white p-4 border border-gray-300 rounded shadow-lg"
                >
                  {/* Your popup content here */}
                  <h1 className="text-xl ">Explore Here Courses List</h1>
                  <hr className="text-2xl" />
                  <div className="flex gap-10 py-5">
                    <div class="p-4 max-w-lg mx-auto ">
                      <details ClassName="mb-2">
                        <summary ClassName="bg-gray-200 p-4 rounded-lg cursor-pointer shadow-md mb-4">
                          <span ClassName="font-semibold">
                            Advanced Courses
                          </span>
                        </summary>
                        <ul ClassName="ml-8 space-y-4">
                          <li>
                            <details ClassName="mb-2">
                              <summary ClassName="bg-gray-100 p-3 rounded-lg cursor-pointer shadow">
                                <Link to = "/fullStack_WebDevelopment/fullStack-Python-Development" ClassName="font-semibold">
                                  Python Programming
                                </Link>
                              </summary>
                            </details>
                          </li>
                          <li>
                            <details ClassName="mb-2">
                              <summary ClassName="bg-gray-100 p-3 rounded-lg cursor-pointer shadow">
                                <Link to = "/data_Science" ClassName="font-semibold">
                                  Data Science
                                </Link>
                              </summary>
                            </details>
                          </li>
                          <details ClassName="mb-2">
                            <summary ClassName="bg-gray-100 p-3 rounded-lg cursor-pointer shadow">
                              <Link to = "/data_Science/machine-Learning" ClassName="font-semibold">
                                Machine Learning
                              </Link>
                            </summary>
                          </details>
                          <li>
                            <details ClassName="mb-2">
                              <summary ClassName="bg-gray-100 p-3 rounded-lg cursor-pointer shadow">
                                <Link to = "/ethical_Hacking" ClassName="font-semibold">
                                  Ethical hacking
                                </Link>
                              </summary>
                            </details>
                          </li>
                          <li>
                            <details ClassName="mb-2">
                              <summary ClassName="bg-gray-100 p-3 rounded-lg cursor-pointer shadow">
                                <Link to = "/cyber_security" ClassName="font-semibold">
                                  Cyber Security
                                </Link>
                              </summary>
                            </details>
                          </li>
                          <li></li>
                        </ul>
                      </details>

                      <details ClassName="mb-2">
                        <summary ClassName="bg-gray-200 p-4 rounded-lg cursor-pointer shadow-md mb-4">
                          <span ClassName="font-semibold">
                            Web developement
                          </span>
                        </summary>
                        <ul ClassName="ml-8 space-y-4">
                          <li>
                            <details ClassName="mb-2">
                              <summary ClassName="bg-gray-100 p-3 rounded-lg cursor-pointer shadow">
                                <Link to= "/fullStack_WebDevelopment/fullStack-Web-Development" ClassName="font-semibold">
                                  Front-end Development
                                </Link>
                              </summary>
                            </details>
                          </li>
                          <li>
                            <details ClassName="mb-2">
                              <summary ClassName="bg-gray-100 p-3 rounded-lg cursor-pointer shadow">
                                <Link to = "/fullStack_WebDevelopment/mean-Stack-Developer" ClassName="font-semibold">
                                  Backend development
                                </Link>
                              </summary>
                            </details>
                          </li>
                          <li>
                            <details ClassName="mb-2">
                              <summary ClassName="bg-gray-100 p-3 rounded-lg cursor-pointer shadow">
                                <Link to= "/fullStack_WebDevelopment" ClassName="font-semibold">
                                  Full-stack development
                                </Link>
                              </summary>
                            </details>
                          </li>
                          <li>
                            <details ClassName="mb-2">
                              <summary ClassName="bg-gray-100 p-3 rounded-lg cursor-pointer shadow">
                                <Link to = "/ui_ux_design" ClassName="font-semibold">
                                  {" "}
                                  Ui/Ux Design
                                </Link>
                              </summary>
                            </details>
                          </li>
                        </ul>
                      </details>
                    </div>
                  </div>
                </div>
              )}

              {/* User Initials */}
              {auth.user && auth.user.firstName && (
                <div className="flex items-center">
                  {/* Feeds */}
                  <Link
                    to="/PostFeeds"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-
3 py-2 mt-2 text-sm font-medium ml-4 mb-2"
                  >
                    Feeds
                  </Link>
                  {/* Ask Me Later */}
                  <Link
                    to="/QuestionForm"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 mt-2 text-sm font-medium ml-4 mb-2"
                  >
                    Ask Me Later
                  </Link>
                  {/* Dropdown menu */}
                  <div className="relative inline-block">
                    {/* Dropdown button */}
                    <button
                      className={`inline-flex items-center justify-center h-14 px-4 py-2 text-sm font-medium transition-colors rounded-md ${navigationMenu === "getting-started"
                        ? "border-2 border-black"
                        : ""
                        } ${navigationMenu !== "getting-started" ? "" : ""}`}
                      onClick={() => toggleNavigationMenu("getting-started")}
                    >
                      {/* User initials */}
                      <span className="p-3 w-12 rounded-full bg-blue-400 text-white font-bold text-center cursor-pointer">
                        {auth.user.firstName[0].toUpperCase()}
                      </span>
                      {/* Dropdown arrow icon */}
                      <svg
                        className={`relative top-[1px] ml-1 h-5 w-5 ease-out duration-300 ${navigationMenuOpen &&
                          navigationMenu === "getting-started"
                          ? "-rotate-180"
                          : ""
                          }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>

                    {/* Dropdown menu items */}
                    {navigationMenuOpen &&
                      navigationMenu === "getting-started" && (
                        <div className="absolute z-10 mt-1 w-48 -ml-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {/* List of links */}
                          <a
                            href="/MyCourse"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          >
                            My Courses
                          </a>
                          <a
                            href="/Purchases"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          >
                            Purchases
                          </a>
                          <a
                            href="/Profile"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          >
                            Profile
                          </a>
                          <a
                            href="/Settings"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          >
                            Settings
                          </a>
                          <a
                            href="/"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          >
                            Updates
                          </a>
                          <a
                            href="/WSpace"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          >
                            WorkSpace
                          </a>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          >
                            Accomplishments
                          </a>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          >
                            Help Center
                          </a>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            onClick={handleLogout}
                          >
                            Logout
                          </a>
                        </div>
                      )}
                  </div>
                  <NotificationAdd className="color:yellow" onClick={() => setShowSidebar(!showSidebar)}></NotificationAdd>
                  {/* Sidebar */}
                  <div
                    className={`fixed inset-y-0 right-0 w-64  mt-[5%] bg-gray-800 text-white transition-transform transform ${showSidebar ? 'translate-x-0' : 'translate-x-full'
                      } ease-in-out duration-300`}
                  >
                    {/* Sidebar content */}
                    <Notification1 />
                  </div>

                </div>
              )}

              {/* Login and Join Us Buttons */}
              {!auth.user && (
                <div className="flex items-center space-x-4">
                  <Menu as="div" className="relative">
                    <Link to="/login">
                      <div className="text-white">Log In</div>
                    </Link>
                  </Menu>
                  <Menu as="div" className="relative">
                    <Link to="/SignUp">
                      <button className="py-3 px-6 bg-blue-800 text-white rounded">
                        Join Us
                      </button>
                    </Link>
                  </Menu>
                </div>
              )}
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;