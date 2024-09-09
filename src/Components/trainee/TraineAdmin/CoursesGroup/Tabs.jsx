import React, { useState, useEffect } from "react";
import TraineeCourseTable1 from "./TraineeCourseTable1";
import TraineeCourseTable2 from "./TraineeCourseTable2";
import TraineeCourseTable3 from "./TraineeCourseTable3";

const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);

  const courses = [
    { id: 1, name: "React js" },
    { id: 2, name: "Java" },
    { id: 3, name: "Python" },
  ];

  const numberOfCourses = courses.length;

  useEffect(() => {
    localStorage.setItem("numberOfCourses", numberOfCourses);
  }, [numberOfCourses]);

  const activeClasses = "bg-[#FF9B26] text-white border-l border-t border-r rounded-t"; // Updated
  const inactiveClasses = "text-[#FF9B26] hover:text-[#FF9B26]";

  const handleTabClick = (tabNumber) => {
    setOpenTab(tabNumber);
  };

  return (
    <div className="p-6 overflow-x-auto bg-white">
      <h1 className="text-[#FF9B26] font-bold  text-[26px] p-4">Trainee name - sumithra</h1>
      <p className="text-[#FF9B26] text-[20px] pl-4 pb-4">Course taken - React js , css , html</p>
      <p className="float-end text-[#FF9B26]">Number of Courses: {numberOfCourses}</p> 
      <ul className="flex flex-wrap border-b">
        {courses.map((course) => (
          <li
            key={course.id}
            onClick={() => handleTabClick(course.id)}
            className={`mr-1 ${openTab === course.id ? "-mb-px" : ""}`}
          >
            <a
              href="#"
              className={`inline-block py-2 px-4 font-semibold ${
                openTab === course.id ? activeClasses : inactiveClasses
              }`}
            >
              {course.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="w-full">
        {openTab === 1 && <TraineeCourseTable1 />}
        {openTab === 2 && <TraineeCourseTable2 />}
        {openTab === 3 && <TraineeCourseTable3 />}
        {/* Add more conditions for additional tabs */}
      </div>
    </div>
  );
};

export default Tabs;
