// import React from "react";
// import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid";

// const data = [
//   {
//     avatar:
//       "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
//     name: "Robert Wolfkisser",
//     job: "Engineer",
//     email: "rob_wolf@gmail.com",
//     role: "Collaborator",
//     lastActive: "2 days ago",
//     active: true,
//   },
//   {
//     avatar:
//       "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png",
//     name: "Jill Jailbreaker",
//     job: "Engineer",
//     email: "jj@breaker.com",
//     role: "Collaborator",
//     lastActive: "6 days ago",
//     active: true,
//   },
//   {
//     avatar:
//       "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png",
//     name: "Henry Silkeater",
//     job: "Designer",
//     email: "henry@silkeater.io",
//     role: "Contractor",
//     lastActive: "2 days ago",
//     active: false,
//   },
//   {
//     avatar:
//       "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
//     name: "Bill Horsefighter",
//     job: "Designer",
//     email: "bhorsefighter@gmail.com",
//     role: "Contractor",
//     lastActive: "5 days ago",
//     active: true,
//   },
//   {
//     avatar:
//       "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
//     name: "Jeremy Footviewer",
//     job: "Manager",
//     email: "jeremy@foot.dev",
//     role: "Manager",
//     lastActive: "3 days ago",
//     active: false,
//   },
// ];

// const rolesData = ["Manager", "Collaborator", "Contractor"];

// function ActiveUsers() {
//   const rows = data.map((item) => (
//     <tr key={item.name} className="border-b hover:bg-gray-100  ">
//       <td className="px-6 py-4 whitespace-nowrap">
//         <div className="flex items-center">
//           <img
//             className="h-10 w-10 rounded-full"
//             src={item.avatar}
//             alt={`Avatar of ${item.name}`}
//           />
//           <div className="ml-4">
//             <div className="text-sm font-medium text-gray-900">{item.name}</div>
//             <div className="text-sm text-gray-500">{item.email}</div>
//           </div>
//         </div>
//       </td>
//       <td className="px-6 py-4 whitespace-nowrap">
//         <select
//           defaultValue={item.role}
//           className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//         >
//           {rolesData.map((role) => (
//             <option key={role}>{role}</option>
//           ))}
//         </select>
//       </td>
//       <td className="px-6 py-4 whitespace-nowrap">{item.lastActive}</td>
//       <td className="px-6 py-4 whitespace-nowrap">
//         {item.active ? (
//           <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
//             <CheckCircleIcon className="h-5 w-5 mr-1.5" aria-hidden="true" />
//             Active
//           </span>
//         ) : (
//           <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
//             <XCircleIcon className="h-5 w-5 mr-1.5" aria-hidden="true" />
//             Disabled
//           </span>
//         )}
//       </td>
//     </tr>
//   ));

//   return (
//     <div className="overflow-x-auto mt-10 ml-10 mr-10 ">
//       <div className="min-w-full overflow-hidden rounded-lg">
//         <h1 className="text-center text-2xl font-semibold">Active Users</h1>
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Employee
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Role
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Last active
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Status
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">{rows}</tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default ActiveUsers;

import React, { useState } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid";

const data = [
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
    name: "Robert Wolfkisser",
    job: "Engineer",
    email: "rob_wolf@gmail.com",
    role: "Collaborator",
    lastActive: "2 days ago",
    active: true,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
    name: "Raghavendra",
    job: "Engineer",
    email: "rob_wolf@gmail.com",
    role: "Collaborator",
    lastActive: "2 days ago",
    active: true,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
    name: "Ratnapriya",
    job: "Engineer",
    email: "rob_wolf@gmail.com",
    role: "Collaborator",
    lastActive: "2 days ago",
    active: true,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
    name: "ashwini",
    job: "Engineer",
    email: "rob_wolf@gmail.com",
    role: "Collaborator",
    lastActive: "2 days ago",
    active: true,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
    name: "Robert Wolfkisser",
    job: "Engineer",
    email: "rob_wolf@gmail.com",
    role: "Collaborator",
    lastActive: "2 days ago",
    active: true,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png",
    name: "Jill Jailbreaker",
    job: "Engineer",
    email: "jj@breaker.com",
    role: "Collaborator",
    lastActive: "6 days ago",
    active: true,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png",
    name: "Henry Silkeater",
    job: "Designer",
    email: "henry@silkeater.io",
    role: "Contractor",
    lastActive: "2 days ago",
    active: false,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
    name: "Bill Horsefighter",
    job: "Designer",
    email: "bhorsefighter@gmail.com",
    role: "Contractor",
    lastActive: "5 days ago",
    active: true,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
    name: "Jeremy Footviewer",
    job: "Manager",
    email: "jeremy@foot.dev",
    role: "Manager",
    lastActive: "3 days ago",
    active: false,
  },
];

const rolesData = ["Manager", "Collaborator", "Contractor"];

function ActiveUsers({ updateUsersCount }) {
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  const handleRoleChange = (event, name) => {
    const newRole = event.target.value;
    // Update role in data (this would typically involve API call or state management)
    console.log(`Updating role for ${name} to ${newRole}`);
  };

  // Calculate active and inactive user counts
  const activeCount = data.filter((user) => user.active).length;
  const inactiveCount = data.filter((user) => !user.active).length;

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter data based on search term
  const filteredData = data.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const rows = filteredData.map((item) => (
    <tr key={item.name} className="border-b hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <img
            className="h-10 w-10 rounded-full"
            src={item.avatar}
            alt={`Avatar of ${item.name}`}
          />
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{item.name}</div>
            <div className="text-sm text-gray-500">{item.email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <select
          defaultValue={item.role}
          onChange={(e) => handleRoleChange(e, item.name)}
          className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          {rolesData.map((role) => (
            <option key={role}>{role}</option>
          ))}
        </select>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">{item.lastActive}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        {item.active ? (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
            <CheckCircleIcon className="h-5 w-5 mr-1.5" aria-hidden="true" />
            Active
          </span>
        ) : (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
            <XCircleIcon className="h-5 w-5 mr-1.5" aria-hidden="true" />
            Disabled
          </span>
        )}
      </td>
    </tr>
  ));

  return (
    <div className="overflow-x-auto mt-10 ml-10 mr-10 ">
      <div className="min-w-full overflow-hidden rounded-lg">
        <h1 className="text-center text-2xl font-semibold">Active Users</h1>
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by name..."
          className="w-[200px] px-3 py-2 mb-3 mx-auto bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          style={{ marginLeft: "500px" }}
        />

        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Employee
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last active
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">{rows}</tbody>
        </table>
      </div>
    </div>
  );
}

export default ActiveUsers;
