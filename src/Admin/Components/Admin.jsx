import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Box, CssBaseline, useMediaQuery, useTheme } from "@mui/material";
import { AiOutlineMenu } from "react-icons/ai";
import axios from "axios";
import { IoCloseCircle } from "react-icons/io5";
import { useDispatch } from "react-redux";
import AdminDashBoard from "./AdminDashBoard";
import Orders from "../Views/Orders";
import PaymentDashboard from "./pymentData/MainDashBoard";
import SealsReports from "./Reports/TableforAdmin";
import CreateGroup from "../Views/FilterUsers";
import ExistingGroup from "../Views/TraineeCourses";
import AccessField from "./AccessField";
import RegisterEmployee from "./Register/RegisterEmployee";
import RegisterTrainee from "./Register/RegisterTraniee";
import Meeting from "./Meet/Meeting";
import ThemeToggle from "../../Components/trainee/TraineeDashboard/Theamtoggle";
import IMG from "../../assets/logo/E-educationlogo.png";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Dashboard as DashboardIcon,
  People as UsersIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import { TbLockAccess, TbReport } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { SiGooglemeet } from "react-icons/si";

const menu = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: <DashboardIcon className="w-2 h-2 mr-2" />,
  },
  {
    name: "Access Field",
    path: "/admin/accessField",
    icon: <TbLockAccess className="w-6 h-6 mr-2" />,
  },
  {
    name: "Users",
    path: "/admin/users",
    icon: <UsersIcon className="w-6 h-6 mr-2" />,
    subMenu: [
      { name: "Create Group", path: "/admin/users/create-group" },
      { name: "Go to Existing Group", path: "/admin/users/existing-group" },
    ],
  },
  {
    name: "Payment Data",
    path: "/admin/payment-data",
    icon: <MdOutlinePayment className="w-6 h-6 mr-2" />,
  },
  {
    name: "Sales Report",
    path: "/admin/sales-report",
    icon: <TbReport className="w-6 h-6 mr-2" />,
  },
  {
    name: "Meet",
    path: "/admin/meeting",
    icon: <SiGooglemeet className="w-5 h-5 mr-3" />,
  },
  {
    name: "Settings",
    path: "/admin/settings",
    icon: <SettingsIcon className="w-6 h-6 mr-2" />,
  },
];

const Admin = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [adminName, setAdminName] = useState("Admin Name");
  const [profilePic, setProfilePic] = useState(null);
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const drawerWidth = 235;
  const themes = localStorage.getItem("theme");

  // Fetch admin name and image
  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const jwt = localStorage.getItem("jwt");
        if (!jwt) return;

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/signin`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });

        const { name, profilePic } = response.data; // Adjust this based on your API response
        setAdminName(name || "Admin Name");
        setProfilePic(profilePic);
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };

    fetchAdminData();
  }, []);

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const handleDrawerToggle = () => {
    setSideBarVisible(!sideBarVisible);
  };

  const closeSidebar = () => {
    setSideBarVisible(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    navigate("/admin_login");
  };

  const drawer = (
    <Box
      sx={{
        overflow: "hidden",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
        width: drawerWidth,
      }}
      className={` ${
        themes === "dark"
          ? "bg-black text-white"
          : "text-white bg-gradient-to-b from-[#001510] to-[#00BF8F]"
      } max-w-46 lg:block border-[#001510] border-opacity-10 border-r-0`}
    >
      {/* Sidebar Logo */}
      <div className="py-4 flex relative">
        <div className="pl-2">
          <img className="h-[78px] w-auto" src={IMG} alt="Logo" />
        </div>
        {isSmallScreen && (
          <button className="absolute top-2 right-2" onClick={closeSidebar}>
            <IoCloseCircle className="text-3xl text-white" />
          </button>
        )}
      </div>

      {/* Sidebar Admin Info */}
      <div className="p-2">
        <div className="flex items-center mb-4">
          <div className="w-[60px] h-[60px] rounded-full bg-white shadow-lg cursor-pointer">
            <img
              className="w-[60px] h-[60px] rounded-full"
              src={profilePic || "https://via.placeholder.com/60"}
              alt="Profile"
            />
          </div>
          <h1
            className={`${
              themes === "dark" ? "bg-black text-white" : "text-[#4CA1AF]"
            } text-white font-medium text-xl ml-2`}
          >
            {adminName}
          </h1>
        </div>
      </div>

      <div className="flex-grow">
        <ul>
          {menu.map((item, index) => (
            <li key={item.name} className="relative">
              <button
                onClick={() => {
                  if (item.subMenu) {
                    toggleSubMenu(index);
                  } else {
                    navigate(item.path);
                  }
                }}
                className="flex items-center px-4 py-3 hover:bg-white hover:text-black hover:bg-opacity-80 w-full border-l-8 border-transparent hover:border-[#001510] transition-all duration-300 rounded-r-2xl"
              >
                <span className="text-base">{item.icon}</span>
                <span className="text-sm">{item.name}</span>
                {item.subMenu && (
                  <span className="ml-auto">
                    {openSubMenu === index ? <ExpandLess /> : <ExpandMore />}
                  </span>
                )}
              </button>
              {item.subMenu && openSubMenu === index && (
                <ul>
                  {item.subMenu.map((subItem) => (
                    <li key={subItem.name} className="relative">
                      <button
                        onClick={() => navigate(subItem.path)}
                        className="flex items-center space-x-2 px-4 py-3 hover:bg-white hover:text-black hover:bg-opacity-80 w-full border-l-8 border-transparent hover:border-[#001510] transition-all duration-300 rounded-r-2xl"
                      >
                        <span className="text-sm pl-8">{subItem.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Logout Button */}
      <div className="px-4 py-4">
        <button
          onClick={handleLogout}
          className="px-4 py-2 w-full text-[#4CA1AF] bg-white transition-all duration-300 rounded-md"
        >
          Logout
        </button>
      </div>
    </Box>
  );

  return (
    <div className="flex h-screen relative">
      <CssBaseline />
      {isSmallScreen && (
        <AiOutlineMenu
          onClick={handleDrawerToggle}
          className="text-3xl md:hidden mt-4 ml-4 font-medium absolute flex text-black"
        />
      )}
      {(isSmallScreen ? sideBarVisible : true) && (
        <div
          className={`fixed inset-0 z-40 ${
            sideBarVisible || !isSmallScreen ? "block" : "hidden"
          } md:static md:block`}
          style={{ width: drawerWidth }}
        >
          {drawer}
        </div>
      )}

      <div className="flex-grow h-screen overflow-auto">
        <Box
          component="header"
          className={`${
            themes === "dark" ? "bg-black text-white" : "text-[#4CA1AF]"
          } p-2 flex items-center justify-between`}
        >
          {!isSmallScreen && (
            <div className="flex items-center justify-between px-4 space-x-2 w-full">
              <div className="flex items-center space-x-2">
                <div className="w-[60px] h-[60px] rounded-full bg-white">
                  <img
                    className="w-[60px] h-[60px] rounded-full"
                    src={profilePic || "https://via.placeholder.com/60"}
                    alt="Profile"
                  />
                </div>
                <h3
                  className={`${
                    themes === "dark"
                      ? "bg-black text-white"
                      : "bg-gradient-to-r from-[#00BF8F] to-[#001510] text-[#00BF8F]"
                  } text-transparent bg-clip-text font-semibold text-base`}
                >
                  {adminName}
                </h3>
              </div>
              <div className="items-end justify-end">
                <ThemeToggle />
              </div>
            </div>
          )}
        </Box>

        <Routes>
          <Route path="/" element={<AdminDashBoard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/payment-data" element={<PaymentDashboard />} />
          <Route path="/sales-report" element={<SealsReports />} />
          <Route path="/users/create-group" element={<CreateGroup />} />
          <Route path="/users/existing-group" element={<ExistingGroup />} />
          <Route path="/accessField" element={<AccessField />} />
          <Route path="/register-employee" element={<RegisterEmployee />} />
          <Route path="/register-trainee" element={<RegisterTrainee />} />
          <Route path="/meeting" element={<Meeting />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
