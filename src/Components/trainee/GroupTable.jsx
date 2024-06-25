import React, { useState } from "react";

function GroupTable({ groupName, users, onRemoveUser, onAddUser, trainees }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    course: "",
    avatar: "",
  });
  const [showAddUserForm, setShowAddUserForm] = useState(false);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleRemoveUser = (user) => {
    onRemoveUser(user);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = (event) => {
    event.preventDefault();
    if (newUser.name && newUser.email && newUser.course && newUser.avatar) {
      onAddUser(newUser);
      setNewUser({ name: "", email: "", course: "", avatar: "" });
      setShowAddUserForm(false);
    }
  };

  const rows = filteredUsers.map((user) => (
    <tr key={user.name} className="border-b hover:bg-gray-100">
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
  const traineeName = trainees.map((trainee) => (
    <tr key={trainee.name} className="border-b hover:bg-gray-100">
      <td className=" whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-4 flex">
            Trainee Name:
            <div className="text-xl uppercase font-medium  text-violet-600">
              {trainee.name}
            </div>
          </div>
        </div>
      </td>
    </tr>
  ));

  return (
    <div className="overflow-x-auto">
      <div className="min-w-full overflow-hidden rounded-lg">
        <div className="flex justify-between m-3">
          <input
            type="text"
            placeholder="Search by name"
            value={searchQuery}
            onChange={handleSearchChange}
            className="px-4 py-2 border border-gray-300 rounded-md"
          />
          <p className="">{traineeName}</p>
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            onClick={() => setShowAddUserForm(!showAddUserForm)}
          >
            {showAddUserForm ? "Cancel" : "Add User"}
          </button>
        </div>
        {showAddUserForm && (
          <form
            className="m-3 p-3 border border-gray-300 rounded-md"
            onSubmit={handleAddUser}
          >
            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-gray-900"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={newUser.name}
                onChange={handleInputChange}
                className="px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-gray-900"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={newUser.email}
                onChange={handleInputChange}
                className="px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-gray-900"
                htmlFor="course"
              >
                Course
              </label>
              <input
                type="text"
                id="course"
                name="course"
                value={newUser.course}
                onChange={handleInputChange}
                className="px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-gray-900"
                htmlFor="avatar"
              >
                Avatar URL
              </label>
              <input
                type="text"
                id="avatar"
                name="avatar"
                value={newUser.avatar}
                onChange={handleInputChange}
                className="px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
            >
              Add User
            </button>
          </form>
        )}
        <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Course
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">{rows}</tbody>
        </table>
      </div>
    </div>
  );
}

export default GroupTable;
