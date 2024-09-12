import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import GroupTable from "./GroupTable";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";

function Tabs() {
  const [openTab, setOpenTab] = useState(1);
  const location = useLocation();
  const { groupName: locationGroupName, users: locationUsers } =
    location.state || {};
  const [groups, setGroups] = useState([]);
  const [editedGroupName, setEditedGroupName] = useState("");
  const [currentEditedGroupId, setCurrentEditedGroupId] = useState(null);

  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
    setGroups(storedGroups.map((group) => ({ ...group, editMode: false })));
  }, []);

  const handleTabClick = (tabNumber) => {
    setOpenTab(tabNumber);
  };

  const handleRemoveUser = (groupName, userToRemove) => {
    const updatedGroups = groups.map((group) => {
      if (group.groupName === groupName) {
        const updatedUsers = group.users.filter(
          (user) => user.name !== userToRemove.name
        );
        return { ...group, users: updatedUsers };
      }
      return group;
    });

    setGroups(updatedGroups);
    localStorage.setItem("groups", JSON.stringify(updatedGroups));
  };

  const handleDeleteGroup = (groupId) => {
    const updatedGroups = groups.filter((group) => group.id !== groupId);
    setGroups(updatedGroups);
    localStorage.setItem("groups", JSON.stringify(updatedGroups));

    if (openTab === groupId) {
      setOpenTab(1);
    }
  };

  const handleEditGroup = (groupId, groupName) => {
    const updatedGroups = groups.map((group) => {
      if (group.id === groupId) {
        setEditedGroupName(groupName);
        setCurrentEditedGroupId(groupId);
        return { ...group, editMode: !group.editMode };
      }
      return group;
    });

    setGroups(updatedGroups);
  };

  const handleSaveEdit = (groupId) => {
    const updatedGroups = groups.map((group) => {
      if (group.id === groupId) {
        return { ...group, groupName: editedGroupName, editMode: false };
      }
      return group;
    });

    setGroups(updatedGroups);
    localStorage.setItem("groups", JSON.stringify(updatedGroups));
    setEditedGroupName("");
    setCurrentEditedGroupId(null);
  };

  const handleAddUser = (groupName, newUser) => {
    const updatedGroups = groups.map((group) => {
      if (group.groupName === groupName) {
        return { ...group, users: [...group.users, newUser] };
      }
      return group;
    });

    setGroups(updatedGroups);
    localStorage.setItem("groups", JSON.stringify(updatedGroups));
  };

  const courses = groups.map((group) => ({
    id: group.id,
    name: (
      <div className="flex items-center">
        {!group.editMode ? (
          <>
            {group.groupName}
            <span
              className="ml-2  text-gray-500 hover:text-gray-700 cursor-pointer"
              onClick={() => handleEditGroup(group.id, group.groupName)}
            >
              <FaPencilAlt />
            </span>
          </>
        ) : (
          <>
            <input
              type="text"
              className="border border-gray-300 text-[#2C3E50] rounded px-2 py-1"
              value={editedGroupName}
              onChange={(e) => setEditedGroupName(e.target.value)}
            />
            <button
              className="ml-2 bg-gradient-to-r from-[#2C3E50] to-[#4CA1AF] hover:bg-green-500 text-white px-2 py-1 rounded "
              onClick={() => handleSaveEdit(group.id)}
            >
              Save
            </button>
            <span
              className="ml-2 mt-1 text-[#2C3E50] hover:text-red-700 cursor-pointer"
              onClick={() => handleDeleteGroup(group.id)}
            >
              <FaTrashAlt />
            </span>
          </>
        )}
      </div>
    ),
    content: (
      <GroupTable
        key={group.id}
        groupName={group.groupName}
        users={group.users}
        trainees={group.trainees}
        onRemoveUser={(user) => handleRemoveUser(group.groupName, user)}
        onAddUser={(user) => handleAddUser(group.groupName, user)}
      />
    ),
  }));

  return (
    <div className="p-6">
      {groups.length > 0 ? (
        <>
          <div className="overflow-x-auto">
            <ul className="flex border-b">
              {courses.map((course) => (
                <li
                  key={course.id}
                  onClick={() => handleTabClick(course.id)}
                  className={`mr-1 ${openTab === course.id ? "-mb-px" : ""}`}
                >
                  <a
                    href="#"
                    className={`bg-white inline-block py-2 px-4 font-semibold ${
                      openTab === course.id
                        ? "border-l border-t border-r rounded-t text-[#2C3E50]"
                        : "text-black hover:text-[#2C3E50]"
                    }`}
                  >
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full">
            {courses.map((course) => (
              <div
                key={course.id}
                style={{ display: openTab === course.id ? "block" : "none" }}
              >
                {course.content}
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500">No existing groups</p>
      )}
    </div>
  );
}

export default Tabs;
