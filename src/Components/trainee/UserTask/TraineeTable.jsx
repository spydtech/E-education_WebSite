import React, { useState } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid";

const data = [
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
    name: "Robert Wolfkisser",
    job: "Engineer",
    role: "Collaborator",
    lastActive: "2 days ago",
    active: false,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
    name: "Raghavendra",
    job: "Engineer",
    role: "Collaborator",
    lastActive: "2 days ago",
    active: false,
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtJuUw4ajfA54wQ0kCRhPB3DvakpxYA0-yew&s",
    name: "Ratnapriya",
    job: "Engineer",
    role: "Collaborator",
    lastActive: "2 days ago",
    active: true,
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7YhzBEZnt8CapqZWwUK6SRRfZC0Hj5PPSbw&s",
    name: "ashwini",
    job: "Engineer",
    role: "Collaborator",
    lastActive: "2 days ago",
    active: false,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
    name: "Robert Wolfkisser",
    job: "Engineer",
    role: "Collaborator",
    lastActive: "2 days ago",
    active: true,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png",
    name: "Jill Jailbreaker",
    job: "Engineer",
    role: "Collaborator",
    lastActive: "6 days ago",
    active: false,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png",
    name: "Henry Silkeater",
    job: "Designer",
    role: "Contractor",
    lastActive: "2 days ago",
    active: false,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
    name: "Bill Horsefighter",
    job: "Designer",
    role: "Contractor",
    lastActive: "5 days ago",
    active: true,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
    name: "Jeremy Footviewer",
    job: "Manager",
    role: "Manager",
    lastActive: "3 days ago",
    active: false,
  },
];

const rolesData = ["Manager", "Collaborator", "Contractor"];

function TraineeTable({ updateUsersCount }) {
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [selectedUsers, setSelectedUsers] = useState([]); // State for selected users
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const handleRoleChange = (event, name) => {
    const newRole = event.target.value;
    // Update role in data (this would typically involve API call or state management)
    console.log(`Updating role for ${name} to ${newRole}`);
  };

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Toggle selection of all users
  const handleSelectAllUsers = () => {
    if (selectedUsers.length === data.length) {
      // If all users are already selected, deselect all
      setSelectedUsers([]);
    } else {
      // Otherwise, select all users
      setSelectedUsers(data.map((user) => user.name));
    }
  };

  // Function to handle individual user selection
  const handleUserSelect = (event, name) => {
    if (event.target.checked) {
      setSelectedUsers([...selectedUsers, name]);
    } else {
      setSelectedUsers(selectedUsers.filter((user) => user !== name));
    }
  };

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Calculate active and inactive user counts
  const activeCount = data.filter((user) => user.active).length;
  const inactiveCount = data.filter((user) => !user.active).length;

  // Filter data based on search term
  const filteredData = data.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const rows = filteredData.map((item) => (
    <tr key={item.name} className="border-b hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            checked={selectedUsers.includes(item.name)}
            onChange={(e) => handleUserSelect(e, item.name)}
          />
          <img
            className="h-10 w-10 rounded-full ml-4"
            src={item.avatar}
            alt={`Avatar of ${item.name}`}
          />
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{item.name}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <h1>React js</h1>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">{item.lastActive}</td>
      <td className="px-6 py-4 whitespace-nowrap flex items-center justify-between">
        {item.active ? (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
            <CheckCircleIcon className="h-5 w-5 mr-1.5" aria-hidden="true" />
            Active
          </span>
        ) : (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
            <XCircleIcon className="h-5 w-5 mr-1.5" aria-hidden="true" />
            Inactive
          </span>
        )}
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ml-4"
          onClick={openModal}
        >
          Upload
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="overflow-x-auto mt-10 ml-10 mr-10 w-[1100px]">
      <div className="min-w-[1000px] overflow-hidden rounded-lg">
        <div className="flex justify-center mb-3">
          <input
            type="search"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by name..."
            className="w-[200px] px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex justify-end mb-4 mr-24">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={handleSelectAllUsers}
          >
            Select All Users
          </button>
        </div>

        <table className="min-w-[1000px] divide-y divide-gray-200 w-[900px]">
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Upload File
              </h3>
              <div className="mt-2 px-7 py-3">
                <input
                  type="file"
                  className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="items-center px-4 py-3">
                <button
                  className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  onClick={closeModal}
                >
                  Upload
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 mt-2"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TraineeTable;
