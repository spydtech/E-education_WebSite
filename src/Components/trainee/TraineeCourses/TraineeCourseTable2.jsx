import React, { useState } from "react";

function UserCourseTable2() {
  const [searchTerm, setSearchTerm] = useState("");
  const [rowsToShow, setRowsToShow] = useState(10);

  // Define user courses data
  const userCourses = [
    { username: "ryan", courseName: "Advanced React" },
    { username: "user2", courseName: "Advanced React" },
    { username: "user3", courseName: "Advanced React" },
    { username: "user4", courseName: "Advanced React" },
    { username: "user5", courseName: "Advanced React" },
  ];

  // Filter data based on search term
  const filteredData = userCourses.filter(
    (item) =>
      item.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.courseName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 bg-white">
      <h2 className="text-xl font-bold mb-4">Users</h2>
      <div className="mb-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <input
          type="text"
          className="border p-2 rounded w-full md:w-auto"
          placeholder="Search users"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="number"
          className="border p-2 rounded w-full md:w-auto"
          placeholder="Show rows"
          value={rowsToShow}
          onChange={(e) => setRowsToShow(Number(e.target.value))}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="border px-4 py-2">Username</th>
              <th className="border px-4 py-2">Course Name</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.slice(0, rowsToShow).map((item, index) => (
              <tr key={index} className="border">
                <td className="border px-4 py-2">{item.username}</td>
                <td className="border px-4 py-2">{item.courseName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserCourseTable2;
