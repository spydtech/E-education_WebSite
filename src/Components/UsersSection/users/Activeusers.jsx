import React, { useState } from "react";

const ActiveUsers = () => {
  const initialUsers = [
    { name: "Ratnapriya", isActive: true },
    { name: "Raghavendra", isActive: true },
    { name: "Ashwini", isActive: false },
    { name: "David Wilson", isActive: true },
    { name: "Ella Davis", isActive: false },
    { name: "Frank Harris", isActive: true },
    { name: "Grace Clark", isActive: false },
    { name: "Hank Lewis", isActive: true },
    { name: "Ivy Walker", isActive: false },
    { name: "Jack Hall", isActive: true },
    { name: "Kara Young", isActive: false },
    { name: "Leo King", isActive: true },
    { name: "Mia Wright", isActive: false },
    { name: "Noah Lopez", isActive: true },
    { name: "Olivia Scott", isActive: false },
    { name: "Paul Green", isActive: true },
    { name: "Quinn Adams", isActive: false },
    { name: "Rachel Baker", isActive: true },
    { name: "Sam Mitchell", isActive: false },
    { name: "Tina Perez", isActive: true },
  ];

  const [search, setSearch] = useState("");
  const [users, setUsers] = useState(initialUsers);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    const filteredUsers = initialUsers.filter((user) =>
      user.name.toLowerCase().includes(value)
    );
    setUsers(filteredUsers);
  };

  const handleClearSearch = () => {
    setSearch("");
    setUsers(initialUsers);
  };

  const toggleUserActiveState = (index) => {
    const updatedUsers = [...users];
    updatedUsers[index].isActive = !updatedUsers[index].isActive;
    setUsers(updatedUsers);
  };

  return (
    <div className="container mx-auto p-4 bg-[#0077b6] min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4 text-white">Active Users</h1>
      <div className="mb-4 flex flex-col sm:flex-row justify-center items-center w-full sm:max-w-md">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={handleSearch}
          className="p-2 mb-2 sm:mb-0 sm:mr-2 w-full sm:w-auto border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Search users"
        />
        {search && (
          <button
            className="w-full sm:w-auto px-4 py-2 bg-gray-300 text-gray-800 rounded-lg focus:outline-none"
            onClick={handleClearSearch}
          >
            Clear
          </button>
        )}
      </div>
      <div className="w-full max-w-md overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-6 text-center">Name</th>
              <th className="py-3 px-6 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                onClick={() => toggleUserActiveState(index)}
                style={{ cursor: "pointer" }}
              >
                <td className="py-3 px-6 text-center">{user.name}</td>
                <td className="py-3 px-6 text-center">
                  {user.isActive ? (
                    <span className="text-green-600 font-semibold">Active</span>
                  ) : (
                    <span className="text-red-600 font-semibold">Inactive</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveUsers;
