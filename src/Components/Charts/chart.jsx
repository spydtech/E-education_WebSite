// import React from "react";
// import {
//   BsFillArchiveFill,
//   BsFillGrid3X3GapFill,
//   BsPeopleFill,
//   BsFillBellFill,
// } from "react-icons/bs";
// import {
//   BarChart,
//   Bar,
//   Cell,
//   XAxis,
//   YAxis,f
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   LineChart,
//   Line,
// } from "recharts";

// function Home() {
//   const data = [
//     {
//       name: "Page A",
//       uv: 4000,
//       pv: 2400,
//       amt: 2400,
//     },
//     {
//       name: "Page B",
//       uv: 3000,
//       pv: 1398,
//       amt: 2210,
//     },
//     {
//       name: "Page C",
//       uv: 2000,
//       pv: 9800,
//       amt: 2290,
//     },
//     {
//       name: "Page D",
//       uv: 2780,
//       pv: 3908,
//       amt: 2000,
//     },
//     {
//       name: "Page E",
//       uv: 1890,
//       pv: 4800,
//       amt: 2181,
//     },
//     {
//       name: "Page F",
//       uv: 2390,
//       pv: 3800,
//       amt: 2500,
//     },
//     {
//       name: "Page G",
//       uv: 3490,
//       pv: 4300,
//       amt: 2100,
//     },
//   ];

//   return (
//     <main className="main-container">
//       <div className="main-title">
//         <h3>DASHBOARD</h3>
//       </div>

//       <div className="main-cards">
//         <div className="card">
//           <div className="card-inner">
//             <h3>PRODUCTS</h3>
//             <BsFillArchiveFill className="card_icon" />
//           </div>
//           <h1>300</h1>
//         </div>
//         <div className="card">
//           <div className="card-inner">
//             <h3>CATEGORIES</h3>
//             <BsFillGrid3X3GapFill className="card_icon" />
//           </div>
//           <h1>12</h1>
//         </div>
//         <div className="card">
//           <div className="card-inner">
//             <h3>CUSTOMERS</h3>
//             <BsPeopleFill className="card_icon" />
//           </div>
//           <h1>33</h1>
//         </div>
//         <div className="card">
//           <div className="card-inner">
//             <h3>ALERTS</h3>
//             <BsFillBellFill className="card_icon" />
//           </div>
//           <h1>42</h1>
//         </div>
//       </div>

//       <div className="charts">
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart
//             width={500}
//             height={300}
//             data={data}
//             margin={{
//               top: 5,
//               right: 30,
//               left: 20,
//               bottom: 5,
//             }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="pv" fill="#8884d8" />
//             <Bar dataKey="uv" fill="#82ca9d" />
//           </BarChart>
//         </ResponsiveContainer>

//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart
//             width={500}
//             height={300}
//             data={data}
//             margin={{
//               top: 5,
//               right: 30,
//               left: 20,
//               bottom: 5,
//             }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line
//               type="monotone"
//               dataKey="pv"
//               stroke="#8884d8"
//               activeDot={{ r: 8 }}
//             />
//             <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </main>
//   );
// }

// export default Home;
// import React from "react";
// import {
//   BsFillHouseFill,
//   BsFillGearFill,
//   BsCheckCircleFill,
//   BsFillCalendarFill,
//   BsFillBookFill,
//   BsFillBellFill,
//   BsPeopleFill,
// } from "react-icons/bs";
// import {
//   BarChart,
//   Bar,
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// function Home() {
//   const data = [
//     { name: "Week 1", uv: 4000, pv: 2400, amt: 2400 },
//     { name: "Week 2", uv: 3000, pv: 1398, amt: 2210 },
//     { name: "Week 3", uv: 2000, pv: 9800, amt: 2290 },
//     { name: "Week 4", uv: 2780, pv: 3908, amt: 2000 },
//     { name: "Week 5", uv: 1890, pv: 4800, amt: 2181 },
//     { name: "Week 6", uv: 2390, pv: 3800, amt: 2500 },
//     { name: "Week 7", uv: 3490, pv: 4300, amt: 2100 },
//   ];

//   return (
//     <main className="main-container">
//       <div className="main-title">
//         <h3>HOME</h3>
//       </div>

//       <div className="main-cards">
//         <div className="card">
//           <div className="card-inner">
//             <h3>HOME</h3>
//             <BsFillHouseFill className="card_icon" />
//           </div>
//           <h1>Overview</h1>
//         </div>
//         <div className="card">
//           <div className="card-inner">
//             <h3>ACCOUNT SETTINGS</h3>
//             <BsFillGearFill className="card_icon" />
//           </div>
//           <h1>Preferences</h1>
//         </div>
//         <div className="card">
//           <div className="card-inner">
//             <h3>APPROVALS</h3>
//             <BsCheckCircleFill className="card_icon" />
//           </div>
//           <h1>Pending</h1>
//         </div>
//         <div className="card">
//           <div className="card-inner">
//             <h3>CALENDAR</h3>
//             <BsFillCalendarFill className="card_icon" />
//           </div>
//           <h1>Events</h1>
//         </div>
//         <div className="card">
//           <div className="card-inner">
//             <h3>COURSES GROUP</h3>
//             <BsFillBookFill className="card_icon" />
//           </div>
//           <h1>Active</h1>
//         </div>
//         <div className="card">
//           <div className="card-inner">
//             <h3>NOTIFICATION</h3>
//             <BsFillBellFill className="card_icon" />
//           </div>
//           <h1>New</h1>
//         </div>
//       </div>

//       <div className="charts">
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart
//             width={500}
//             height={300}
//             data={data}
//             margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="pv" fill="#8884d8" />
//             <Bar dataKey="uv" fill="#82ca9d" />
//           </BarChart>
//         </ResponsiveContainer>

//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart
//             width={500}
//             height={300}
//             data={data}
//             margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line
//               type="monotone"
//               dataKey="pv"
//               stroke="#8884d8"
//               activeDot={{ r: 8 }}
//             />
//             <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </main>
//   );
// }

// export default Home;

import React from "react";
import {
  BsFillHouseFill,
  BsFillGearFill,
  BsCheckCircleFill,
  BsFillCalendarFill,
  BsFillBookFill,
  BsFillBellFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Chart() {
  // Data for bar chart (representing user activity)
  const userData = [
    { name: "Jan", activeUsers: 400, inactiveUsers: 200 },
    { name: "Feb", activeUsers: 800, inactiveUsers: 300 },
    { name: "Mar", activeUsers: 600, inactiveUsers: 400 },
    { name: "Apr", activeUsers: 900, inactiveUsers: 500 },
    { name: "May", activeUsers: 700, inactiveUsers: 600 },
  ];

  // Data for line chart (representing approvals over time)
  const approvalsData = [
    { month: "Jan", approvals: 30 },
    { month: "Feb", approvals: 40 },
    { month: "Mar", approvals: 35 },
    { month: "Apr", approvals: 50 },
    { month: "May", approvals: 45 },
  ];

  // Data for pie chart (representing notification types)
  const notificationData = [
    { name: "Messages", value: 400 },
    { name: "Alerts", value: 300 },
    { name: "Updates", value: 300 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>HOME</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>HOME</h3>
            <BsFillHouseFill className="card_icon" />
          </div>
          <h1>Overview</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>ACCOUNT SETTINGS</h3>
            <BsFillGearFill className="card_icon" />
          </div>
          <h1>Preferences</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>APPROVALS</h3>
            <BsCheckCircleFill className="card_icon" />
          </div>
          <h1>Pending</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>CALENDAR</h3>
            <BsFillCalendarFill className="card_icon" />
          </div>
          <h1>Events</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>COURSES GROUP</h3>
            <BsFillBookFill className="card_icon" />
          </div>
          <h1>Active</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>NOTIFICATION</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>New</h1>
        </div>
      </div>

      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={userData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="activeUsers" fill="#8884d8" />
            <Bar dataKey="inactiveUsers" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={approvalsData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="approvals" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={notificationData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {notificationData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Chart;
