

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





import React, { Fragment, useRef, useEffect, useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import IMG from "../assets/logo/E-eLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from "../State/Auth/Action";
import { NotificationAdd } from "@mui/icons-material";
import Notification1 from "./Notification1";
import Explore from "./Explore";

const Navbar = () => {
  const [navigationMenu, setNavigationMenu] = useState(null);
  const [navigationMenuOpen, setNavigationMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigationRef = useRef(null);
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const auth = useSelector((state) => state.auth);
  const [showSidebar, setShowSidebar] = useState(false);
  const dispatch = useDispatch();
  const [showExplore, setShowExplore] = useState(false);

  const handleExploreClick = (event) => {
    event.stopPropagation(); // Prevents click event from closing the mobile menu
    setShowExplore(!showExplore);
  };


  const handleMenuClose = () => {
    setShowExplore(false);
    setNavigationMenuOpen(false);
  };

  const navigation = [{ name: "Explore", current: false }];
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
    <Disclosure as="nav" className="bg-white  sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl flex-wrap md:w-full  sm:w-full px-4 sm:px-6 lg:px-8 font-bold">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile Menu Button */}
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                <Disclosure.Button
                  onClick={handleMenuClose}
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
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

              {/* Logo */}
              <div className="flex flex-1 items-center justify-between md:justify-start pl-8">
                <div className="flex ml-2 md:ml-0 mt-2 flex-shrink-0 items-center mr-10">
                  <Link to="/">
                    <img
                      className="w-[150px] md:w-[275px] h-[50px] md:h-[90px] cursor-pointer"
                      src={IMG}
                      alt="Your Company"
                    />
                  </Link>
                </div>

                {/* Search Bar */}
                <div className="relative mr-14 hidden md:flex items-center w-full max-w-md min-w-sm">
                  <input
                    type="text"
                    placeholder="Want to learn?"
                    className="border text-sm border-zinc-300 h-[40px] rounded-lg py-1 px-2 pl-10 pr-16 focus:outline-none focus:ring-2 focus:ring-blue-400 w-[80%]"
                  />
                  <button
                    onClick={handleExploreClick}
                    className="absolute rounded-lg mr-2 right-[19%] top-1/2 transform -translate-y-1/2 bg-blue-100 text-blue-600 py-1 px-2 flex items-center space-x-1"
                  >
                    <span className="text-sm">Explore</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 transform transition-transform duration-200 ${showExplore ? "rotate-180" : ""
                        }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 000 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                {showExplore && (
                  <div className="absolute top-1/2 md:left-0 left-32 md:mt-2 mt-24 md:mb-10 md:w-full bg-white p-4 border border-gray-300 rounded shadow-lg z-50 max-h-screen overflow-y-auto">
                    <Explore />
                  </div>
                )}


                {/* User Initials & Notifications */}
                <div className="flex items-center space-x-4 -md:ml-0 -md:ml-[20%] ">
                  {auth.user && auth.user.firstName ? (
                    <>
                      <Link
                        to="/PostFeeds"
                        className="hidden md:block text-black  hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      >
                        Feeds
                      </Link>
                      <Link
                        to="/QuestionForm"
                        className="hidden md:block text-black  hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      >
                        Ask Me Later
                      </Link>
                      <div className="relative  flex inline-block md:right-0 right-10">
                        <button
                          className={`inline-flex items-center justify-center h-10 px-2 py-1  md:px-4 md:py-2 text-sm font-medium transition-colors rounded-md ${navigationMenu === "getting-started"
                            ? "border-2 border-black"
                            : ""
                            }`}
                          onClick={() =>
                            toggleNavigationMenu("getting-started")
                          }
                        >
                          <span className="p-3 w-12 rounded-full bg-blue-400 text-white font-bold text-center cursor-pointer">
                            {auth.user.firstName[0].toUpperCase()}
                          </span>
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
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </button>
                        {navigationMenuOpen &&
                          navigationMenu === "getting-started" && (
                            <div className="absolute right-0 z-10 w-48 py-2 mt-12 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <a
                                href="/MyCourse"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                My Course
                              </a>
                              <a
                                href="/mylearning"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                My Learning
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
                                href="/login"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                onClick={handleLogout}
                              >
                                Logout
                              </a>
                              <button
                                onClick={handleLogout}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                              >
                                Sign Out
                              </button>
                            </div>
                          )}
                        <div className="text-xl">
                          <NotificationAdd
                            className="text-yellow-400  cursor-pointer mt-2"
                            onClick={() => setShowSidebar(!showSidebar)}
                          />
                        </div>
                      </div>


                      <div
                        className={`fixed inset-y-0 right-0 w-64 md:mt-[5%] mt-[14%] bg-[#F6AC14] text-white transition-transform transform ${showSidebar ? "translate-x-0" : "translate-x-full"
                          } ease-in-out duration-300`}
                      >
                        <Notification1 />
                      </div>



                      {/* <Notification1 /> */}
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => navigate("/login")}
                        className="inline-block rounded-full bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                      >
                        Login
                      </button>
                      <button
                        onClick={() => navigate("/signup")}
                        className="inline-block ml-4 rounded-full bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                      >
                        Signup
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel
            className="md:hidden bg-white w-full h-auto"
            style={{ position: "absolute", top: "100%", left: 0, zIndex: 1 }}
          >
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              <Disclosure.Button className="relative mr-16 flex items-center w-full max-w-md">
                <input
                  type="text"
                  onClick={(e) => e.stopPropagation()}
                  placeholder="Want to learn?"

                  className="border border-zinc-300 h-[50px] rounded-lg py-2 px-4 pl-10 pr-16 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                />
                <button
                  onClick={(e) => handleExploreClick(e)}
                  className="absolute rounded-lg mr-2 right-0 top-1/2 transform -translate-y-1/2 bg-blue-100 text-blue-600 py-2 px-4 flex items-center space-x-1"
                >
                  <span>Explore</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transform transition-transform duration-200 ${showExplore ? "rotate-180" : ""
                      }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 000 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Disclosure.Button>
              {/* {showExplore && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white p-4 border border-gray-300 rounded shadow-lg z-50">
                  <Explore />
                </div>
              )} */}
              {/* {navigation.map((item) => (
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
              ))} */}
              {auth.user && auth.user.firstName ? (
                <>
                  <Disclosure.Button
                    as="a"
                    href="/PostFeeds"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white"
                  >
                    Feeds
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="/QuestionForm"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white"
                  >
                    Ask Me Later
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="/MyCourse"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white"
                  >
                    My Course
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="/mylearning"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white"
                  >
                    My Learning
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="/about_us"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white"
                  >
                    About Us
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="button"
                    onClick={handleLogout}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white"
                  >
                    Sign Out
                  </Disclosure.Button>
                </>
              ) : (
                <>
                  <Disclosure.Button
                    as="button"
                    onClick={() => navigate("/login")}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white"
                  >
                    Login
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="button"
                    onClick={() => navigate("/signup")}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white"
                  >
                    Signup
                  </Disclosure.Button>
                </>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;