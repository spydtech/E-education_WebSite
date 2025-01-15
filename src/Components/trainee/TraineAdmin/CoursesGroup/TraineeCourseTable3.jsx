import React, { useState } from "react";

const course = "full stack python"; // Setting the same course for all trainees

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
    name: "Jeremy Footviewer",
    course: course,
  },
];

function TraineeCourseTable3() {
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => setSearch(event.target.value);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const rows = filteredData.map((item, index) => (
    <tr key={index} className={`border-b-[#204349]  `}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 rounded-full" src={item.avatar} alt="" />
          </div>
          <div className="ml-4">
            <div className={`text-[16px] font-medium`}>{item.name}</div>
          </div>
        </div>
      </td>
      <td className={`px-6 py-4 whitespace-nowrap`}>
        <p
          className={`px-2 inline-flex text-[16px] leading-5 font-semibold rounded-full`}
        >
          {item.course}
        </p>
      </td>
    </tr>
  ));

  return (
    <div className="overflow-x-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-[#204349]">
      <div className="min-w-full shadow-md overflow-hidden ">
        <div
          className={`p-3 flex flex-col md:flex-row justify-between m-3 space-y-3 md:space-y-0`}
        >
          <input
            type="text"
            placeholder="Search by name"
            value={search}
            onChange={handleSearchChange}
            className="inline-block px-4 py-2 rounded-3xl placeholder:text-black"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y border-[#204349] border-2">
            <thead className="bg-[#204349] text-white">
              <tr>
                <th
                  className={`px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider`}
                >
                  User
                </th>
                <th
                  className={`px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider`}
                >
                  Course
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#204349] ">{rows}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TraineeCourseTable3;
