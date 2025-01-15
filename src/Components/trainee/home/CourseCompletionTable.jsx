import React, { useState } from "react";

function CourseCompletionTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [rowsToShow, setRowsToShow] = useState(10);

  const data = [
    {
      courseName: "React Basics",
      issueDate: "2023-01-01",
      expiryDate: "2024-01-01",
      username: "user1",
      firstName: "John",
      lastName: "Doe",
    },
    {
      courseName: "Advanced React",
      issueDate: "2023-02-15",
      expiryDate: "2024-02-15",
      username: "user2",
      firstName: "Jane",
      lastName: "Smith",
    },
    {
      courseName: "JavaScript Essentials",
      issueDate: "2023-03-10",
      expiryDate: "2024-03-10",
      username: "user3",
      firstName: "Bob",
      lastName: "Brown",
    },
    {
      courseName: "TypeScript Fundamentals",
      issueDate: "2023-04-05",
      expiryDate: "2024-04-05",
      username: "user4",
      firstName: "Alice",
      lastName: "White",
    },
    {
      courseName: "Node.js Basics",
      issueDate: "2023-05-20",
      expiryDate: "2024-05-20",
      username: "user5",
      firstName: "Charlie",
      lastName: "Black",
    },
    {
      courseName: "Express.js Overview",
      issueDate: "2023-06-15",
      expiryDate: "2024-06-15",
      username: "user6",
      firstName: "Eve",
      lastName: "Green",
    },
    {
      courseName: "MongoDB for Beginners",
      issueDate: "2023-07-01",
      expiryDate: "2024-07-01",
      username: "user7",
      firstName: "Frank",
      lastName: "Blue",
    },
    {
      courseName: "HTML & CSS Basics",
      issueDate: "2023-08-10",
      expiryDate: "2024-08-10",
      username: "user8",
      firstName: "Grace",
      lastName: "Gray",
    },
    {
      courseName: "Bootstrap Framework",
      issueDate: "2023-09-05",
      expiryDate: "2024-09-05",
      username: "user9",
      firstName: "Henry",
      lastName: "Purple",
    },
    {
      courseName: "Git and GitHub",
      issueDate: "2023-10-20",
      expiryDate: "2024-10-20",
      username: "user10",
      firstName: "Ivy",
      lastName: "Orange",
    },
    {
      courseName: "Python for Beginners",
      issueDate: "2023-11-15",
      expiryDate: "2024-11-15",
      username: "user11",
      firstName: "Jack",
      lastName: "Pink",
    },
    {
      courseName: "Django Basics",
      issueDate: "2023-12-01",
      expiryDate: "2024-12-01",
      username: "user12",
      firstName: "Kathy",
      lastName: "Yellow",
    },
    {
      courseName: "Flask Introduction",
      issueDate: "2024-01-10",
      expiryDate: "2025-01-10",
      username: "user13",
      firstName: "Leo",
      lastName: "Red",
    },
    {
      courseName: "Ruby on Rails",
      issueDate: "2024-02-05",
      expiryDate: "2025-02-05",
      username: "user14",
      firstName: "Mona",
      lastName: "Brown",
    },
    {
      courseName: "PHP Essentials",
      issueDate: "2024-03-20",
      expiryDate: "2025-03-20",
      username: "user15",
      firstName: "Nina",
      lastName: "Black",
    },
    {
      courseName: "Laravel Framework",
      issueDate: "2024-04-15",
      expiryDate: "2025-04-15",
      username: "user16",
      firstName: "Oscar",
      lastName: "White",
    },
    {
      courseName: "MySQL Basics",
      issueDate: "2024-05-01",
      expiryDate: "2025-05-01",
      username: "user17",
      firstName: "Pam",
      lastName: "Green",
    },
    {
      courseName: "PostgreSQL Overview",
      issueDate: "2024-06-10",
      expiryDate: "2025-06-10",
      username: "user18",
      firstName: "Quinn",
      lastName: "Blue",
    },
    {
      courseName: "DevOps Essentials",
      issueDate: "2024-07-05",
      expiryDate: "2025-07-05",
      username: "user19",
      firstName: "Ray",
      lastName: "Gray",
    },
    {
      courseName: "AWS Basics",
      issueDate: "2024-08-20",
      expiryDate: "2025-08-20",
      username: "user20",
      firstName: "Sam",
      lastName: "Purple",
    },
  ];

  const filteredData = data.filter(
    (item) =>
      item.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.username.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const themes = localStorage.getItem("theme");

  return (
    <div className={`  p-4 `}>
      <h2 className={` text-xl text-black font-bold mb-4`}>
        Course Completion Within 30 Days
      </h2>
      <div className="mb-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <input
          type="text"
          className="border-[#204349] border-2 focus:ring-[#204349]  p-2 focus:border-[#204349] rounded-3xl placeholder:text-black w-full md:w-auto"
          placeholder="Search courses"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="number"
          className="border-[#204349] border-2 focus:ring-[#204349] focus:border-[#204349] p-2 text-black placeholder:text-black rounded w-full md:w-auto"
          placeholder="Show rows"
          value={rowsToShow}
          onChange={(e) => setRowsToShow(Number(e.target.value))}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y border-[#204349] border-2   ">
          <thead className="bg-[#204349] text-white">
            <tr>
              <th
                className={` px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider`}
              >
                Course Name
              </th>
              <th
                className={` px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider`}
              >
                Issue Date
              </th>
              <th
                className={` px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider`}
              >
                Expiry Date
              </th>
              <th
                className={` px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider`}
              >
                Username
              </th>
              <th
                className={`  px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider`}
              >
                First Name
              </th>
              <th
                className={` px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider`}
              >
                Last Name
              </th>
            </tr>
          </thead>
          <tbody className="divide-y text-black divide-[#204349]">
            {filteredData.slice(0, rowsToShow).map((item, index) => (
              <tr key={index} className="border-b-[#204349]">
                <td className={`    px-6 py-4 whitespace-nowrap`}>
                  {item.courseName}
                </td>
                <td className={` px-6 py-4 whitespace-nowrap`}>
                  {item.issueDate}
                </td>
                <td className={` px-6 py-4 whitespace-nowrap`}>
                  {item.expiryDate}
                </td>
                <td className={`  px-6 py-4 whitespace-nowrap`}>
                  {item.username}
                </td>
                <td className={` px-6 py-4 whitespace-nowrap`}>
                  {item.firstName}
                </td>
                <td className={`   text-center text-black  px-4 py-2`}>
                  {item.lastName}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CourseCompletionTable;
