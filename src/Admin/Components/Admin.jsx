import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Box, CssBaseline, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import AdminDashBoard from './AdminDashBoard';
// import Courses from '../Views/Courses'
import Orders from '../Views/Orders';
import Users from '../Views/Users';
import { AccountCircle, Dashboard, ShoppingCart, People, ListAlt, AddCircle } from '@mui/icons-material';
import {
    Dashboard as DashboardIcon,
    // School as CoursesIcon,
    People as UsersIcon,
    ShoppingCart as OrdersIcon,
    Settings as SettingsIcon
} from '@mui/icons-material';

const menu = [
    { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
    // { name: "Courses", path: "/admin/courses", icon: <CoursesIcon /> },
    { name: "Users", path: "/admin/users", icon: <UsersIcon /> },
    { name: "Orders", path: "/admin/orders", icon: <OrdersIcon /> },
    { name: "Settings", path: "/admin/settings", icon: <SettingsIcon /> },
];

const Admin = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible, setSideBarVisible] = useState(false);
    const navigate = useNavigate();

    const handleCloseSideBar = () => {
        setSideBarVisible(false);
    };

    const drawerWidth = isLargeScreen ? 250 : '50vw'; // Adjust the width for large and small screens

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
                <button
                    className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 w-full"
                >
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
            <div className={`bg-gray-900 text-white ${drawerVariant === 'temporary' && !sideBarVisible ? '-left-64' : `w-${drawerWidth}`}`}>
                {drawer}
            </div>
            <div className="flex-grow h-screen overflow-auto">
                <Box component="main" className="p-4">
                    <Routes>
                        <Route path='/' element={<AdminDashBoard />} />
                        {/* <Route path='/courses' element={<Courses />} /> */}
                        <Route path='/orders' element={<Orders />} />
                        <Route path='/users' element={<Users />} />
                    </Routes>
                </Box>
            </div>
        </div>
    );
};

export default Admin;
