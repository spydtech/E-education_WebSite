

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SiGooglemeet } from "react-icons/si";
import MeetSlider from "../../Meeting/MeetSlider";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaLayerGroup } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import ApprovalIcon from "@mui/icons-material/Approval";
import Traineeprofile from "../../../assets/Calender/traineeprofile.png";
import { FaUserAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import Trainee_Home from "../home/Home";
import Navigation from "../TraineAdmin/navigation/navigation";
import TraineUpload from "../UserTask/traineuploads";
import COursesGroup from "../TraineAdmin/CoursesGroup/Tabs";
import UserAccount from "../UsersSection/usernavigation/navigation";
import { IoMdLogOut } from "react-icons/io";
import StatusPage from "../UserTask/StatusPage";
import { getTrainee, logout } from "../../../State/Auth/Action";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "../TraineeCalendar/Calendar";
import Eeducationlogo from "../../../assets/logo/E-educationlogo.png";
// import gradientThemes from "./Themfile"; // Ensure this path and export are correct

const TraineeDashboard = () => {
  const location = useLocation();
  const redirect = location?.state?.redirect;
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isLogoutOpen, setLogoutOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(redirect || "home");
  const [themeIndex, setThemeIndex] = useState(0);

  const jwt = localStorage.getItem("jwt");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

  const handleTabClick = (tabName) => setActiveTab(tabName);

  const toggleLogoutOptions = () => setLogoutOpen(!isLogoutOpen);

  useEffect(() => {
    if (redirect) setActiveTab(redirect);
  }, [redirect]);

  useEffect(() => {
    if (jwt) dispatch(getTrainee(jwt));
  }, [jwt, dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("jwt");
    navigate("/trainee");
  };

  // const changeTheme = () => {
  //   setThemeIndex((prevIndex) => (prevIndex + 1) % gradientThemes.length);
  // };

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Trainee_Home />;
      case "courses":
        return <COursesGroup />;
      case "calendar":
        return <Calendar />;
      case "reports":
        return <StatusPage />;
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
    <div className="flex h-screen w-auto">
      {/* Sidebar */}
      <div className={`hidden md:flex flex-col w-64 `}>
        <div className="flex items-center justify-center h-16">
          <img src={Eeducationlogo} alt="E-education logo" className="h-[80px] w-[250px]" />
        </div>

        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex-1 px-2 py-4">
            {["home", "courses", "calendar", "reports", "approvals", "user", "settings"].map((tab) => (
              <a
                key={tab}
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300
                ${activeTab === tab ? `bg-white border-[#204349]` : `border-transparent $`}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab === "home" && <MdOutlineDashboardCustomize className="h-6 w-6 mr-2" />}
                {tab === "courses" && <FaLayerGroup className="h-6 w-6 mr-2" />}
                {tab === "calendar" && <SlCalender className="h-6 w-6 mr-2" />}
                {tab === "reports" && <TbReportAnalytics className="h-6 w-6 mr-2" />}
                {tab === "approvals" && <ApprovalIcon className="h-6 w-6 mr-2" />}
                {tab === "user" && <FaUserAlt className="h-6 w-6 mr-2" />}
                {tab === "settings" && <IoSettingsSharp className="h-6 w-6 mr-2" />}
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </a>
            ))}
            <button
              className="flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 border-transparent transition-all duration-300 text-gray-800"
              onClick={toggleLogoutOptions}
            >
              <IoMdLogOut className="h-6 w-6 mr-2" />
              Logout
            </button>
          </nav>
        </div>
        <button
          className="flex items-center justify-center p-2 text-white font-semibold"
          // onClick={changeTheme}
        >
          Change Theme
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {renderContent()}
      </div>

      {/* Mobile Drawer */}
      <div className={`md:hidden fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
        <div className="flex items-center justify-center h-16 bg-gray-900">
          <img src={Eeducationlogo} alt="E-education logo" className="h-[80px] w-[250px]" />
        </div>
        <nav className="flex flex-col flex-1 overflow-y-auto">
          {["home", "courses", "calendar", "reports", "approvals", "user", "settings"].map((tab) => (
            <a key={tab} href="#" onClick={() => handleTabClick(tab)}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </a>
          ))}
          <button onClick={toggleLogoutOptions}>
            Logout
          </button>
        </nav>
      </div>
    </div>
  );
};

export default TraineeDashboard;
