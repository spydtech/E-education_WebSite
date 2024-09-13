
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

  return (
    <div className="p-4 bg-white  ">
      <h2 className="text-xl text-[#FF9B26] font-bold mb-4">
        Course Completion Within 30 Days
      </h2>
      <div className="mb-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <input
          type="text"
          className="border-[#FF9B26] border-2 focus:ring-[#FF9B26]  p-2 focus:border-[#FF9B26] rounded-3xl placeholder:text-[#FF9B26] w-full md:w-auto"
          placeholder="Search courses"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="number"
          className="border-[#FF9B26] border-2 focus:ring-[#FF9B26] focus:border-[#FF9B26] p-2 text-[#FF9B26] placeholder:text-[#FF9B26] rounded w-full md:w-auto"
          placeholder="Show rows"
          value={rowsToShow}
          onChange={(e) => setRowsToShow(Number(e.target.value))}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border  ">
          <thead>
            <tr>
              <th className="border  bg-[#FF9B26] text-white px-4 py-4">Course Name</th>
              <th className="border  bg-[#FF9B26] text-white px-4 py-4">Issue Date</th>
              <th className="border  bg-[#FF9B26] text-white px-4 py-4">Expiry Date</th>
              <th className="border  bg-[#FF9B26] text-white px-4 py-4">Username</th>
              <th className="border  bg-[#FF9B26] text-white px-4 py-4">First Name</th>
              <th className="border  bg-[#FF9B26] text-white px-4 py-4">Last Name</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.slice(0, rowsToShow).map((item, index) => (
              <tr key={index} className="border">
                <td className="border-white bg-[#FF9B26] text-center text-[#FF9B26] bg-opacity-10 px-4 py-2">{item.courseName}</td>
                <td className="border-white bg-[#FF9B26] text-center text-[#FF9B26] bg-opacity-10  px-4 py-2">{item.issueDate}</td>
                <td className="border-white bg-[#FF9B26] text-center text-[#FF9B26] bg-opacity-10  px-4 py-2">{item.expiryDate}</td>
                <td className="border-white bg-[#FF9B26] text-center text-[#FF9B26] bg-opacity-10  px-4 py-2">{item.username}</td>
                <td className="border-white bg-[#FF9B26] text-center text-[#FF9B26] bg-opacity-10  px-4 py-2">{item.firstName}</td>
                <td className="border-white  bg-[#FF9B26] text-center text-[#FF9B26] bg-opacity-10 px-4 py-2">{item.lastName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CourseCompletionTable;
