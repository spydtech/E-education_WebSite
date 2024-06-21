import React, { useState } from "react";
import TraineeCourseTable1 from "./TraineeCourseTable1";
import TraineeCourseTable2 from "./TraineeCourseTable2";
import TraineeCourseTable3 from "./TraineeCourseTable3";
function Tabs() {
  const [openTab, setOpenTab] = useState(1);

  const activeClasses = "border-l border-t border-r   rounded-t text-blue-700";
  const inactiveClasses = "text-black hover:text-blue-700";

  const handleTabClick = (tabNumber) => {
    setOpenTab(tabNumber);
  };

  // Define courses data
  const courses = [
    {
      id: 1,
      name: "React Basics",
      content: <TraineeCourseTable1></TraineeCourseTable1>,
    },
    {
      id: 2,
      name: "Advanced React",
      content: <TraineeCourseTable2></TraineeCourseTable2>,
    },
    {
      id: 3,
      name: "JavaScript Essentials",
      content: <TraineeCourseTable3></TraineeCourseTable3>,
    },
  ];

  return (
    <div className="p-6 ">
      <ul className="flex border-b ">
        {courses.map((course) => (
          <li
            key={course.id}
            onClick={() => handleTabClick(course.id)}
            className={`mr-1 ${openTab === course.id ? "-mb-px" : ""}`}
          >
            <a
              href="#"
              className={`bg-white inline-block py-2 px-4 font-semibold ${
                openTab === course.id ? activeClasses : inactiveClasses
              }`}
            >
              {course.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="w-full ">
        {courses.map((course) => (
          <div
            className=""
            key={course.id}
            style={{ display: openTab === course.id ? "block" : "none" }}
          >
            {course.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
