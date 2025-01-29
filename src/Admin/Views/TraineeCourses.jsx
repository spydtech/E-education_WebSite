import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import GroupTable from "./GroupTable";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";

function Tabs() {
  const [openTab, setOpenTab] = useState(1);
  const location = useLocation();
  const { groupName: locationGroupName, users: locationUsers } = location.state || {};
  const [groups, setGroups] = useState([]);
  const [editedGroupName, setEditedGroupName] = useState("");
  const [currentEditedGroupId, setCurrentEditedGroupId] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(""); // Track errors
  const jwt = localStorage.getItem("jwt");
  

  // Fetch groups from the backend
  
  useEffect(() => {
    const fetchGroups = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:8080/api/chat-groups", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`, // Include the JWT token
          },
        });
      
        if (!response.ok) {
          throw new Error(`Failed to fetch groups: ${response.statusText}`);
        }
        const data = await response.json();

        // Ensure the response matches expected data structure
        const formattedGroups = data.map((group) => ({
          id: group.id,
          groupName: group.groupName, // Ensure you're accessing the correct field
          users: group.users || [],
          trainees: group.trainees || [],
          editMode: false,
        }));
        setGroups(formattedGroups);
        setError("");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  const handleTabClick = (tabNumber) => {
    setOpenTab(tabNumber);
  };

  const handleRemoveUser = (groupId, userToRemove) => {
    const updatedGroups = groups.map((group) => {
      if (group.id === groupId) {
        const updatedUsers = group.users.filter(
          (user) => user !== userToRemove
        );
        return { ...group, users: updatedUsers };
      }
      return group;
    });

    setGroups(updatedGroups);
  };

  const handleDeleteGroup = async (groupId) => {
    try {
      const jwt = localStorage.getItem("jwt");

      // Send DELETE request to the backend to delete the chat group
      const response = await fetch(`http://localhost:8080/api/chat-groups/${groupId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${jwt}`, // Add token in Authorization header
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        // If deletion is successful, update local state
        const updatedGroups = groups.filter((group) => group.id !== groupId);
        setGroups(updatedGroups);
  
        // Reset open tab if it was the one being deleted
        if (openTab === groupId) {
          setOpenTab(1); // Assuming you set 1 as the default tab
        }
      } else {
        console.error('Error deleting chat group');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  


  const handleEditGroup = (groupId, groupName) => {
    setEditedGroupName(groupName);
    setCurrentEditedGroupId(groupId);

    const updatedGroups = groups.map((group) =>
      group.id === groupId ? { ...group, editMode: true } : group
    );

    setGroups(updatedGroups);
  };


  const handleSaveEdit = async (groupId) => {
    try {
      // const jwt = localStorage.getItem("jwt");
      // Send the updated group name to the backend to save the changes
      const response = await fetch(`http://localhost:8080/api/chat-groups/${groupId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwt}`,
        },
        body: JSON.stringify({ groupName: editedGroupName }),  // Send the updated group name
      });
  
      if (response.ok) {
        const updatedGroup = await response.json();  // Expecting the updated group from the backend
  
        // Update groups state with the modified group
        setGroups((prevGroups) =>
          prevGroups.map((group) =>
            group.id === groupId
              ? { ...group, groupName: updatedGroup.groupName, editMode: false }
              : group
          )
        );
  
        // Clear the state for edited group
        setEditedGroupName("");
        setCurrentEditedGroupId("");
      } else {
        // If the response is not OK, log the error or show a message
        const errorData = await response.json();
        console.error("Error updating chat group:", errorData);
      }
    } catch (error) {
      console.error("Error saving group:", error);
    }
  };
  
  

  const handleAddUser = (groupId, newUser) => {
    const updatedGroups = groups.map((group) =>
      group.id === groupId ? { ...group, users: [...group.users, newUser] } : group
    );

    setGroups(updatedGroups);
  };

  return (
    <div className="p-6">
      {loading ? (
        <p className="text-center text-[#001510]">Loading groups...</p>
      ) : error ? (
        <p className="text-center text-red-500">Error: {error}</p>
      ) : groups.length > 0 ? (
        <>
          <div className="overflow-x-auto">
            <ul className="flex border-b">
              {groups.map((group) => (
                <li
                  key={group.id}
                  onClick={() => handleTabClick(group.id)}
                  className={`mr-1 ${openTab === group.id ? "-mb-px" : ""}`}
                >
                  <a
                    href="#"
                    className={`bg-white inline-block py-2 px-4 font-semibold ${
                      openTab === group.id
                        ? "border-l border-t border-r rounded-t text-[#001510]"
                        : "text-black hover:text-[#001510]"
                    }`}
                  >
                    {!group.editMode ? (
                      <>
                        {group.groupName}
                        <span
                          className="ml-2 text-[#001510] hover:text-[#001510] cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEditGroup(group.id, group.groupName);
                          }}
                        >
                          <FaPencilAlt />
                        </span>
                      </>
                    ) : (
                      <div className="flex items-center">
                        <input
                          type="text"
                          className="border border-gray-300 text-[#001510] rounded px-2 py-1"
                          value={editedGroupName || ""}  // Fallback to empty string if undefined
                          onChange={(e) => setEditedGroupName(e.target.value)}
                        />
                        <button
                          className="ml-2 bg-gradient-to-r from-[#00BF8F] to-[#001510] hover:bg-green-500 text-white px-2 py-1 rounded"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSaveEdit(group.id);
                          }}
                        >
                          Save
                        </button>
                        <span
                          className="ml-2 mt-1 text-[#001510] hover:text-red-700 cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteGroup(group.id);
                          }}
                        >
                          <FaTrashAlt />
                        </span>
                      </div>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full">
            {groups.map((group) => (
              <div
                key={group.id}
                style={{ display: openTab === group.id ? "block" : "none" }}
              >
                <GroupTable
                  key={group.id}
                  groupName={group.groupName}
                  users={group.users}
                  trainees={group.trainees}
                  onRemoveUser={(users) => handleRemoveUser(group.id, users)}
                  onAddUser={(newUser) => handleAddUser(group.id, newUser)}
                />
              </div>
              
            ))}
          </div>
        </>
      ) : (
        <p className="text-center text-[#001510]">No existing groups</p>
      )}
    </div>
  );
}

export default Tabs;
