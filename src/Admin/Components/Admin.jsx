import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  Box,
  CssBaseline,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PaymentDashboard from "./pymentData/MainDashBoard";
import SealsReports from "./sealsRepotes2/coursestable";
import AdminDashBoard from "./AdminDashBoard";
import Orders from "../Views/Orders";
import Users from "../Views/FilterUsers";
import { AccountCircle } from "@mui/icons-material";
import AccessField from "./AccessField";
import RegisterEmployee from "./Register/RegisterEmployee";
import RegisterTrainee from "./Register/RegisterTraniee";
import SalesReport from "./SalesReport";
import Meeting from "./Meet/Meeting";
import PaymentData from "./PaymentData";
import TotalSales from "./TotalSales";
import {
  Dashboard as DashboardIcon,
  // School as CoursesIcon,
  People as UsersIcon,
  ShoppingCart as OrdersIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";

const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Access Field", path: "/admin/accessField", icon: <DashboardIcon /> },
  { name: "Users", path: "/admin/users", icon: <UsersIcon /> },
  {
    name: "payment Data",
    path: "/admin/payment-data",
    icon: <DashboardIcon />,
  },
  { name: "Sales Report", path: "/admin/sales-report", icon: <UsersIcon /> },
  { name: "Settings", path: "/admin/settings", icon: <SettingsIcon /> },
  { name: "Meet", path: "/admin/meeting", icon: <SettingsIcon /> },
  // { name: "Total Sales", "path": "/admin/total-sales", "icon": <SettingsIcon /> }
];

const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();

  const drawerWidth = isLargeScreen ? 250 : "50vw"; // Adjust the width for large and small screens

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
                onClick={() => navigate(item.path)}
                className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-semibold">{item.name}</span>
              </button>
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
            <Route path="/users" element={<Users />} />
            <Route path="/accessField" element={<AccessField />} />
            <Route path="/register-trainee" element={<RegisterTrainee />} />
            <Route path="/register-employee" element={<RegisterEmployee />} />
            {/* <Route path='/sales-report' element={<SalesReport />} /> */}
            <Route path="/sales-report" element={<SealsReports />} />
            <Route path="/meeting" element={<Meeting />} />
            <Route path="/payment-data" element={<PaymentDashboard />} />
            {/* <Route path='/total-sales' element={<TotalSales />} /> */}
          </Routes>
        </Box>
      </div>
    </div>
  );
};

export default Admin;

// import React, { useState } from "react";
// import { Route, Routes, useNavigate } from "react-router-dom";
// import {
//   Box,
//   CssBaseline,
//   Toolbar,
//   useMediaQuery,
//   useTheme,
//   Menu,
//   MenuItem,
// } from "@mui/material";
// import PaymentDashboard from "./pymentData/MainDashBoard";
// import SealsReports from "./sealsRepotes2/coursestable";
// import AdminDashBoard from "./AdminDashBoard";
// import Orders from "../Views/Orders";
// import Users from "../Views/FilterUsers";
// import ExistingGroup from "../Views/GroupTable";
// import NewGroup from "../Views/FilterUsers"; // Example placeholder, replace with actual components
// import { AccountCircle, ArrowDropDown } from "@mui/icons-material";
// import AccessField from "./AccessField";
// import RegisterEmployee from "./Register/RegisterEmployee";
// import RegisterTrainee from "./Register/RegisterTraniee";
// import SalesReport from "./SalesReport";
// import Meeting from "./Meet/Meeting";
// import PaymentData from "./PaymentData";
// import TotalSales from "./TotalSales";
// import {
//   Dashboard as DashboardIcon,
//   People as UsersIcon,
//   Settings as SettingsIcon,
// } from "@mui/icons-material";

// const menu = [
//   { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
//   { name: "Access Field", path: "/admin/accessField", icon: <DashboardIcon /> },
//   { name: "Users", icon: <UsersIcon />, hasDropdown: true },
//   {
//     name: "Payment Data",
//     path: "/admin/payment-data",
//     icon: <DashboardIcon />,
//   },
//   { name: "Sales Report", path: "/admin/sales-report", icon: <UsersIcon /> },
//   { name: "Settings", path: "/admin/settings", icon: <SettingsIcon /> },
//   { name: "Meet", path: "/admin/meeting", icon: <SettingsIcon /> },
// ];

// const Admin = () => {
//   const theme = useTheme();
//   const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
//   const [sideBarVisible, setSideBarVisible] = useState(false);
//   const navigate = useNavigate();

//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleMenuClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const drawerWidth = isLargeScreen ? 250 : "50vw"; // Adjust the width for large and small screens

//   const drawer = (
//     <Box
//       sx={{
//         overflow: "auto",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//         height: "100vh",
//         width: drawerWidth,
//       }}
//       className="bg-gray-800 text-white"
//     >
//       {isLargeScreen && <Toolbar />}
//       <div className="flex-grow">
//         <ul className="py-4">
//           {menu.map((item, index) => (
//             <li key={item.name} className="relative">
//               {item.hasDropdown ? (
//                 <>
//                   <button
//                     onClick={handleMenuClick}
//                     className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 w-full text-left"
//                   >
//                     <span className="text-lg">{item.icon}</span>
//                     <span className="font-semibold">{item.name}</span>
//                     <ArrowDropDown />
//                   </button>
//                   <Menu
//                     anchorEl={anchorEl}
//                     open={Boolean(anchorEl)}
//                     onClose={handleMenuClose}
//                   >
//                     <MenuItem
//                       onClick={() => {
//                         handleMenuClose();
//                         navigate("/admin/users/existing-group");
//                       }}
//                     >
//                       Go to Existing Group
//                     </MenuItem>
//                     <MenuItem
//                       onClick={() => {
//                         handleMenuClose();
//                         navigate("/admin/users/create-group");
//                       }}
//                     >
//                       Create New Group
//                     </MenuItem>
//                   </Menu>
//                 </>
//               ) : (
//                 <button
//                   onClick={() => navigate(item.path)}
//                   className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 w-full text-left"
//                 >
//                   <span className="text-lg">{item.icon}</span>
//                   <span className="font-semibold">{item.name}</span>
//                 </button>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <button className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 w-full">
//           <AccountCircle />
//           <span className="font-semibold">Account</span>
//         </button>
//       </div>
//     </Box>
//   );

//   const drawerVariant = isLargeScreen ? "permanent" : "temporary";

//   return (
//     <div className="flex h-screen">
//       <CssBaseline />
//       <div
//         className={`bg-gray-900 text-white ${
//           drawerVariant === "temporary" && !sideBarVisible
//             ? "-left-64"
//             : `w-${drawerWidth}`
//         }`}
//       >
//         {drawer}
//       </div>
//       <div className="flex-grow h-screen overflow-auto">
//         <Box component="main" className="p-0">
//           <Routes>
//             <Route path="/" element={<AdminDashBoard />} />
//             <Route path="/orders" element={<Orders />} />
//             <Route path="/users" element={<Users />} />
//             <Route
//               path="/admin/users/existing-group"
//               element={<ExistingGroup />}
//             />
//             <Route path="/admin/users/create-group" element={<NewGroup />} />
//             <Route path="/accessField" element={<AccessField />} />
//             <Route path="/register-trainee" element={<RegisterTrainee />} />
//             <Route path="/register-employee" element={<RegisterEmployee />} />
//             <Route path="/admin/sales-report" element={<SealsReports />} />
//             <Route path="/admin/meeting" element={<Meeting />} />
//             <Route path="/admin/payment-data" element={<PaymentDashboard />} />
//           </Routes>
//         </Box>
//       </div>
//     </div>
//   );
// };

// export default Admin;
