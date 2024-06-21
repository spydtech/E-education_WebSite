import React, { useState } from "react";

const InactiveUsers = () => {
  const initialUsers = [
    { name: "Emily Moore" },
    { name: "George Taylor" },
    { name: "Hannah Anderson" },
    { name: "Isaac Martinez" },
    { name: "Jessica Garcia" },
    { name: "Kevin Thomas" },
    { name: "Lily Hernandez" },
    { name: "Michael Young" },
    { name: "Natalie King" },
    { name: "Oscar Davis" },
    { name: "Penelope White" },
    { name: "Quentin Wilson" },
    { name: "Rose Brown" },
    { name: "Simon Lopez" },
    { name: "Tiffany Green" },
    { name: "Ulysses Clark" },
    { name: "Victoria Baker" },
    { name: "William Adams" },
    { name: "Xavier Moore" },
    { name: "Yasmine Scott" },
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

  return (
    <div className="container mx-auto p-4 bg-[#0077b6] min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4 text-white">Inactive Users</h1>
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
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="py-3 px-6 text-center">{user.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InactiveUsers;
