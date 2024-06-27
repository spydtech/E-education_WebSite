import React, { useState } from "react";

function GroupTable({ groupName, users, onRemoveUser, onAddUser, trainees }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showTraineeDetails, setShowTraineeDetails] = useState(false);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [selectedTrainee, setSelectedTrainee] = useState(null);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleRemoveUser = (user) => {
    onRemoveUser(user);
  };

  const showTraineeDetailsModal = () => {
    setShowTraineeDetails(true);
  };

  const closeTraineeDetailsModal = () => {
    setShowTraineeDetails(false);
  };

  const showUserDetailsModal = () => {
    setShowUserDetails(true);
  };

  const closeUserDetailsModal = () => {
    setShowUserDetails(false);
  };

  const traineeName = trainees.map((trainee) => (
    <tr key={trainee.name} className="border-b hover:bg-gray-100">
      <td className=" whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-4 flex">
            <span className="px-2 py-1 bg-gray-100 rounded-md">
              {trainee.name}
            </span>
          </div>
        </div>
      </td>
    </tr>
  ));

  const setTrainee = (trainee) => {
    setSelectedTrainee(trainee.name);
    setShowTraineeDetails(false);
  };

  const userData = [
    {
      avatar:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
      name: "garry fighter",
      course: "Full Stack Java",
      email: "garry@gmail.com",
    },
    {
      avatar:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
      name: "Halen plantviewer",
      course: "Full Stack Java",
      email: "halen@foot.dev",
    },
    {
      avatar:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
      name: "Robert Wolfkisser",
      course: "Full Stack Python",
      email: "rob_wolf@gmail.com",
    },
    {
      avatar:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png",
      name: "Jill Jailbreaker",
      course: "Full Stack Python",
      email: "jj@breaker.com",
    },
    {
      avatar:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
      name: "Bill Horsefighter",
      course: "Full Stack Java",
      email: "bhorsefighter@gmail.com",
    },
  ];

  const traineeData = [
    {
      avatar:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",
      name: "Alice Wonderland",
      designation: "trainee",
      email: "alice@wonderland.com",
    },
    {
      avatar:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png",
      name: "Garry Builder",
      designation: "trainee",
      email: "gar@builder.com",
    },
    {
      avatar:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",
      name: "Jonny Dawn",
      designation: "trainee",
      email: "johnny@dawn.com",
    },
  ];

  const traineeRows = traineeData.map((trainee) => (
    <tr key={trainee.name} className="border-b hover:bg-gray-100 ">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <img
            className="h-10 w-10 rounded-full"
            src={trainee.avatar}
            alt={`Avatar of ${trainee.name}`}
          />
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {trainee.name}
            </div>
            <div className="text-sm text-gray-500">{trainee.email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <button
          className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
          onClick={() => setTrainee(trainee)}
        >
          Set as Trainee
        </button>
      </td>
    </tr>
  ));

  const userRows = userData.map((user) => (
    <tr key={user.name} className="border-b hover:bg-gray-100 ">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <img
            className="h-10 w-10 rounded-full"
            src={user.avatar}
            alt={`Avatar of ${user.name}`}
          />
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{user.name}</div>
            <div className="text-sm text-gray-500">{user.email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">{user.course}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <button
          className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
          onClick={() => handleAddUser(user)}
        >
          Add user to group
        </button>
      </td>
    </tr>
  ));

  const handleAddUser = (user) => {
    onAddUser(user);
    closeUserDetailsModal();
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const rows = filteredUsers.map((user) => (
    <tr key={user.name} className="border-b hover:bg-gray-100 ">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <img
            className="h-10 w-10 rounded-full"
            src={user.avatar}
            alt={`Avatar of ${user.name}`}
          />
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{user.name}</div>
            <div className="text-sm text-gray-500">{user.email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{user.course}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <button
          className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
          onClick={() => handleRemoveUser(user)}
        >
          Remove User
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="overflow-x-auto">
      <div className="min-w-full overflow-hidden rounded-lg">
        <div className="flex flex-col md:flex-row justify-between m-3 space-y-3 md:space-y-0">
          <input
            type="text"
            placeholder="Search by name"
            value={searchQuery}
            onChange={handleSearchChange}
            className="px-4 py-2 border border-gray-300 rounded-md"
          />

          <div className="flex items-center space-x-2">
            <span className="text-gray-500">Trainee:</span>
            <span className="px-2 py-1 bg-gray-100 rounded-md">
              {selectedTrainee ? selectedTrainee : traineeName}
            </span>
          </div>
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            onClick={showTraineeDetailsModal}
          >
            Update Trainee
          </button>
          <button
            className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
            onClick={showUserDetailsModal}
          >
            Add User
          </button>
        </div>

        {/* Trainee Details Modal */}
        {showTraineeDetails && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-3xl">
              <h2 className="text-lg font-medium text-gray-800 mb-4">
                Select Trainee
              </h2>
              <table className="min-w-full bg-white divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 bg-gray-50"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {traineeRows}
                </tbody>
              </table>
              <div className="mt-4 flex justify-end">
                <button
                  className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600"
                  onClick={closeTraineeDetailsModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Add User Modal */}
        {showUserDetails && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-3xl">
              <h2 className="text-lg font-medium text-gray-800 mb-4">
                Select User to Add
              </h2>
              <table className="min-w-full bg-white divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Course
                    </th>
                    <th className="px-6 py-3 bg-gray-50"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {userRows}
                </tbody>
              </table>
              <div className="mt-4 flex justify-end">
                <button
                  className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600"
                  onClick={closeUserDetailsModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <table className="min-w-full bg-white divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Course
              </th>
              <th className="px-6 py-3 bg-gray-50"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">{rows}</tbody>
        </table>
      </div>
    </div>
  );
}

export default GroupTable;
