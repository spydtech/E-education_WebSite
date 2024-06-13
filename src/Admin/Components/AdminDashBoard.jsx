import { Grid } from '@mui/material'
import React from 'react'
import Achivements from './Achivements'
import MonthlyOverview from './MonthlyOverview'
// import CoursesTable from './CourseTable'
import Orders from '../Views/Orders'
import Users from '../Views/Users'
// import Courses from '../Views/Courses'

const AdminDashBoard = () => {
    return (
        <div className='p-10'>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <div className='shadow-lg shadow-gray-600'>
                        <Achivements />
                    </div>
                </Grid>
                <Grid item xs={12} md={8}>
                    <div className='shadow-lg shadow-gray-600'>
                        <MonthlyOverview />
                    </div>

                </Grid>
                <Grid item xs={12} md={6}>
                    <div className='shadow-lg shadow-gray-600'>
                        <Orders />
                    </div>

                </Grid>
                <Grid item xs={12} md={6}>
                    <div className='shadow-lg shadow-gray-600'>
                        <Users />
                    </div>

                </Grid>

            </Grid>
        </div>
    )
}

export default AdminDashBoard

// AdminDashboard.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Grid, Paper, Typography, Button } from '@mui/material';
// import AdminSidebar from './AdminSidebar';
// import Dashboard from './Dashboard';

// const AdminDashboard = () => {
//     return (
//         <div className="container mx-auto mt-10">
//             <Grid container spacing={3}>
//                 <Grid item xs={3}>
//                     <AdminSidebar />
//                 </Grid>
//                 <Grid item xs={9}>
//                     <Paper className="p-4" elevation={3}>
//                         <Typography variant="h5" gutterBottom className="mb-4">
//                             Admin Dashboard
//                         </Typography>

//                         <Typography variant="subtitle1" gutterBottom>
//                             Welcome to the Admin Dashboard!
//                         </Typography>
//                         <Dashboard />
//                         {/* Add more content as needed */}
//                     </Paper>
//                 </Grid>
//             </Grid>
//         </div>
//     );
// };

// export default AdminDashboard;

