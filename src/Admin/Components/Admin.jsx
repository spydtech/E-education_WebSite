import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  Box,
  CssBaseline,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import AdminDashBoard from "./AdminDashBoard";
import Orders from "../Views/Orders";
// import Users from "../Views/FilterUsers";

import PaymentDashboard from "./pymentData/MainDashBoard";
import SealsReports from "./sealsRepotes2/coursestable";

import CreateGroup from "../Views/FilterUsers";
import ExistingGroup from "../Views/TraineeCourses";
import { AccountCircle, ExpandLess, ExpandMore } from "@mui/icons-material";
import AccessField from "./AccessField";
import RegisterEmployee from "./Register/RegisterEmployee";
import RegisterTrainee from "./Register/RegisterTraniee";
import SalesReport from "./SalesReport";
import Meeting from "./Meet/Meeting";
import PaymentData from "./PaymentData";
import TotalSales from "./TotalSales";
import {
  Dashboard as DashboardIcon,
  People as UsersIcon,
  ShoppingCart as OrdersIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";

const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Access Field", path: "/admin/accessField", icon: <DashboardIcon /> },
  {
    name: "Users",
    path: "/admin/users",
    icon: <UsersIcon />,
    subMenu: [
      { name: "Create Group", path: "/admin/users/create-group" },
      { name: "Go to Existing Group", path: "/admin/users/existing-group" },
    ],
  },
  {
    name: "payment Data",
    path: "/admin/payment-data",
    icon: <DashboardIcon />,
  },
  { name: "Sales Report", path: "/admin/sales-report", icon: <UsersIcon /> },
  { name: "Settings", path: "/admin/settings", icon: <SettingsIcon /> },
  { name: "Meet", path: "/admin/meeting", icon: <SettingsIcon /> },
];

const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const navigate = useNavigate();

  const drawerWidth = isLargeScreen ? 250 : "50vw";

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
        width: drawerWidth,
      }}
      className="bg-gray-800 text-white"
    >
      {isLargeScreen && <Toolbar />}
      <div className="flex-grow">
        <ul className="py-4">
          {menu.map((item, index) => (
            <li key={item.name}>
              <button
                onClick={() => {
                  if (item.subMenu) {
                    toggleSubMenu(index);
                  } else {
                    navigate(item.path);
                  }
                }}
                className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 w-full"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-semibold">{item.name}</span>
                {item.subMenu && (
                  <>{openSubMenu === index ? <ExpandLess /> : <ExpandMore />}</>
                )}
              </button>
              {item.subMenu && openSubMenu === index && (
                <ul className="pl-8">
                  {item.subMenu.map((subItem) => (
                    <li key={subItem.name}>
                      <button
                        onClick={() => navigate(subItem.path)}
                        className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 w-full"
                      >
                        <span className="font-semibold">{subItem.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 w-full">
          <AccountCircle />
          <span className="font-semibold">Account</span>
        </button>
      </div>
    </Box>
  );

  const drawerVariant = isLargeScreen ? "permanent" : "temporary";

  return (
    <div className="flex h-screen">
      <CssBaseline />
      <div
        className={`bg-gray-900 text-white ${
          drawerVariant === "temporary" && !sideBarVisible
            ? "-left-64"
            : `w-${drawerWidth}`
        }`}
      >
        {drawer}
      </div>
      <div className="flex-grow h-screen overflow-auto">
        <Box component="main" className="p-0">
          <Routes>
            <Route path="/" element={<AdminDashBoard />} />
            <Route path="/orders" element={<Orders />} />

            <Route path="/accessField" element={<AccessField />} />
            <Route path="/register-trainee" element={<RegisterTrainee />} />
            <Route path="/register-employee" element={<RegisterEmployee />} />
            <Route path="/sales-report" element={<SealsReports />} />
            <Route path="/meeting" element={<Meeting />} />
            <Route path="/payment-data" element={<PaymentDashboard />} />
            <Route path="/users/create-group" element={<CreateGroup />} />
            <Route path="/users/existing-group" element={<ExistingGroup />} />
          </Routes>
        </Box>
      </div>
    </div>
  );
};

export default Admin;
