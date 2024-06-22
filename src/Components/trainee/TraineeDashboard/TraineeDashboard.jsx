import React, { useState } from "react";
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

const TraineeDashboard = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home"); // State to manage active tab

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Trainee_Home />;
      case "courses":
        return <div>Courses Group Content</div>;
      case "calendar":
        return <div>Calendar Content</div>;
      case "reports":
        return <div>Reports Content</div>;
      case "approvals":
        return <div>Approvals Content</div>;
      case "user":
        return <Navigation />;
      case "settings":
        return <div>Settings Content</div>;
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
            <div className="flex-1 flex items-center justify-center px-4">
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
