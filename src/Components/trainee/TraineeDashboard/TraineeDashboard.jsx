import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { SiGooglemeet } from "react-icons/si";
import MeetSlider from "../../Meeting/MeetSlider";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaLayerGroup } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import ApprovalIcon from "@mui/icons-material/Approval";
import { FaUserAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import Trainee_Home from "../home/Home";
import Navigation from "../TraineAdmin/navigation/navigation";
import TraineUpload from "../UserTask/traineuploads";
import COursesGroup from "../TraineAdmin/CoursesGroup/Tabs";
import UserAccount from "../UsersSection/usernavigation/navigation";
import Calendar from "../Calendar/Calendar";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";
import StatusPage from "../UserTask/StatusPage";
const TraineeDashboard = () => {
  const location = useLocation();
  const redirect = location?.state?.redirect;
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isLogoutOpen, setLogoutOpen] = useState(false); // State to manage logout options visibility
  const [activeTab, setActiveTab] = useState(redirect ? redirect : "home"); // State to manage active tab
  const trainee = {
    name: "Robin Huion", // Assuming one trainee for now
  };
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const toggleLogoutOptions = () => {
    setLogoutOpen(!isLogoutOpen);
  };
  useEffect(() => {
    if (redirect) setActiveTab(redirect);
  }, [redirect]);

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Trainee_Home />;
      case "courses":
        return <COursesGroup />;
      case "calendar":
        return <Calendar />;
      case "reports":
        return <StatusPage />; // Ensure this line renders StatusPage for the "reports" tab
      case "approvals":
        return <TraineUpload />;
      case "user":
        return <UserAccount />;
      case "settings":
        return <Navigation />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        {/* sidebar */}
        <div className="hidden md:flex flex-col w-64 bg-gray-800">
          <div className="flex items-center justify-center h-16 bg-gray-900">
            <span className="text-white font-bold uppercase">
              Trainee Dashboard
            </span>
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto">
            <nav className="flex-1 px-2 py-4 bg-gray-800">
              <a
                href="#"
                className={`flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700 ${
                  activeTab === "home" && "bg-gray-700"
                }`}
                onClick={() => handleTabClick("home")}
              >
                <MdOutlineDashboardCustomize className="h-6 w-6 mr-2" />
                Home
              </a>
              <a
                href="#"
                className={`flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700 ${
                  activeTab === "courses" && "bg-gray-700"
                }`}
                onClick={() => handleTabClick("courses")}
              >
                <FaLayerGroup className="h-6 w-6 mr-2" />
                Courses Group
              </a>
              <a
                href="#"
                className={`flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700 ${
                  activeTab === "calendar" && "bg-gray-700"
                }`}
                onClick={() => handleTabClick("calendar")}
              >
                <SlCalender className="h-6 w-6 mr-2" />
                Calendar
              </a>
              <a
                href="#"
                className={`flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700 ${
                  activeTab === "reports" && "bg-gray-700"
                }`}
                onClick={() => handleTabClick("reports")}
              >
                <TbReportAnalytics className="h-6 w-6 mr-2" />
                Reports
              </a>

              {/* <a
                href="#"
                className={`flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700 ${
                  activeTab === "courses" && "bg-gray-700"
                }`}
                onClick={() => handleTabClick("reports")}
              >
                <FaLayerGroup className="h-6 w-6 mr-2" />
                Reports
              </a> */}
              <a
                href="#"
                className={`flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700 ${
                  activeTab === "approvals" && "bg-gray-700"
                }`}
                onClick={() => handleTabClick("approvals")}
              >
                <ApprovalIcon className="h-6 w-6 mr-2 " />
                Approvals
              </a>
              <a
                href="#"
                className={`flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700 ${
                  activeTab === "user" && "bg-gray-700"
                }`}
                onClick={() => handleTabClick("user")}
              >
                <FaUserAlt className="h-6 w-6 mr-2" />
                User
              </a>
              <a
                href="#"
                className={`flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700 ${
                  activeTab === "settings" && "bg-gray-700"
                }`}
                onClick={() => handleTabClick("settings")}
              >
                <IoSettingsSharp className="h-6 w-6 mr-2" />
                Settings
              </a>
            </nav>
          </div>

          {isLogoutOpen && (
            <div className="w-auto h-14 mx-2 px-2 float-end  relative z-10">
              <div className="flex items-end justify-end space-x-1 mt-2">
                <IoMdLogOut className="h-8 w-8 mb-1  text-gray-300" />
                <Link to="/trainelogin">
                  {" "}
                  <button className=" p-2 bg-gray-800 text-white  rounded-md hover:bg-gray-700">
                    Logout
                  </button>
                </Link>
              </div>
            </div>
          )}

          <div className=" flex mb-4 mx-2">
            <div className="rounded-full text-white font-bold text-xl border-2 w-12 h-12  flex justify-center items-center ">
              {trainee.name.charAt(0)}
            </div>
            <span className="px-2 mx-1 mt-3 flex  text-white font-bold ">
              {trainee.name}
            </span>
            <RiArrowRightSLine
              className=" w-6 h-6 text-white mt-[13px] cursor-pointer"
              onClick={toggleLogoutOptions}
            />
          </div>
        </div>
        {/* Main content */}
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
            <div className="flex items-center px-4">
              <button className="text-gray-500 focus:outline-none focus:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center px-4 h-16">
              <h1 className="text-xl font-semibold">Trainee Dashboard</h1>
            </div>
            <div className="flex items-center px-4">
              <button
                className="text-gray-500 hover:text-gray-600"
                id="open-sidebar"
                onClick={toggleDrawer}
              >
                <SiGooglemeet />
              </button>
              <MeetSlider isOpen={isDrawerOpen} onClose={toggleDrawer} />
            </div>
          </div>
          <div className="p-4">{renderContent()}</div>
        </div>
      </div>
    </>
  );
};

export default TraineeDashboard;
