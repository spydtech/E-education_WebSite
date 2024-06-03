import { Grid } from '@mui/material'
import React from 'react'
import Achivements from './Achivements'
import MonthlyOverview from './MonthlyOverview'
// import CoursesTable from './CourseTable'
import OrderTable from './OrderTable'
import CourseTableView from '../Views/CourseTableView'

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
                        <OrderTable />
                    </div>

                </Grid>
                <Grid item xs={12} md={6}>
                    <div className='shadow-lg shadow-gray-600'>
                        <CourseTableView />
                    </div>
                </Grid>

            </Grid>
        </div>
    )
}

export default AdminDashBoard