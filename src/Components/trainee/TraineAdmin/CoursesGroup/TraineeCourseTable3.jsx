import React, { useState } from "react";

const trainee = [
  {
    name: "Robin Huion",
  },
];

const course = "Full Stack Python"; // Setting the same course for all trainees

const data = [
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
    name: "Robert Wolfkisser",
    course: course,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
    name: "Jill Jailbreaker",
    course: course,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
    name: "Henry Silkeater",
    course: course,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",
    name: "Bill Horsefighter",
    course: course,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png",
    name: "Jeremy Footviewer",
    course: course,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png",
    name: "Robert Wolfkisser",
    course: course,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",
    name: "Jill Jailbreaker",
    course: course,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",
    name: "Henry Silkeater",
    course: course,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
    name: "Bill Horsefighter",
    course: course,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png",
    name: "Robin Huion",
    course: course,
  },
];

const courseColor = "bg-yellow-100 text-yellow-600";

function TraineeCourseTable3() {
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const rows = filteredData.map((item, index) => (
    <tr key={index} className="border-b  bg-opacity-10">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 rounded-full" src={item.avatar} alt="" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-[#FF9B26]">{item.name}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-2 inline-flex text-[16px] text-[#FF9B26] leading-5 font-semibold rounded-full `}
        >
          {item.course}
        </span>
      </td>
    </tr>
  ));

  return (
    <div className="overflow-x-auto">
      <div className="min-w-full shadow-md overflow-hidden rounded-lg">
        <div className="p-3 flex flex-col md:flex-row justify-between m-3 space-y-3 md:space-y-0 ">
          <input
            type="text"
            placeholder="Search by name"
            value={search}
            onChange={handleSearchChange}
            className="inline-block  px-4 py-2  placeholder:text-[#FF9B26]  border-2 border-[#F6AC14] rounded-3xl"
          />
          <div className="flex items-center bg-opacity-10  space-x-2 mx-2">
            <span className="text-[#FF9B26]"> Trainee:</span>
            {trainee.map((traineeItem, index) => (
              <span key={index} className="px-2 py-1  text-[#FF9B26] rounded-md">
                {traineeItem.name}
              </span>
            ))}
          </div>
        </div>

        <table className="min-w-full divide-y bg-[#FF9B26]  bg-opacity-10 divide-white">
          <thead className="bg-[#FF9B26]  text-white">
            <tr >
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                User
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Course
              </th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-gray-200">{rows}</tbody>
        </table>
      </div>
    </div>
  );
}

export default TraineeCourseTable3;
