


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function UsersRolesTable() {
  const [search, setSearch] = useState("");
  const [searchCourse, setSearchCourse] = useState("");
  const [searchTrainee, setSearchTrainee] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedTrainees, setSelectedTrainees] = useState([]);
  const [groupName, setGroupName] = useState("");
  const [error, setError] = useState("");
  const [showTraineeSearch, setShowTraineeSearch] = useState(false);
  const [showGroupForm, setShowGroupForm] = useState(false);
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const [traineeData, setTraineeData] = useState([]);
  // const traineeName = auth.trainee.firstName + auth.trainee.lastName
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/payment/user-courses", {
        headers: {
          Authorization: `Bearer ${jwt}`, // Send JWT token to authenticate the request
        },
      })
      .then((response) => {
        console.log("API response:", response);
        if (Array.isArray(response.data)) {
          setUserData(response.data);
        } else {
          console.error("API response is not an array:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [jwt]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/trainee/getAllTrainee", {
        headers: {
          Authorization: `Bearer ${jwt}`, // Send JWT token to authenticate the request
        },
      })
      .then((response) => {
        console.log("API response:", response);
        if (Array.isArray(response.data)) {
          setTraineeData(response.data);
        } else {
          console.error("API response is not an array:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [jwt]);
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  const handleSearchCourseChange = (event) => {
    setSearchCourse(event.target.value);
  };
  const handleTraineeSearchChange = (event) => {
    setSearchTrainee(event.target.value);
  };
  const handleAddToGroupClick = (user) => {
    if (!selectedUsers.find((u) => u.userName === user.userName)) {
      setSelectedUsers([...selectedUsers, user]);
    }
  };
  const handleAddTraineeToGroup = (trainee) => {
    if (!selectedTrainees.find((t) => t.userName === trainee.userName)) {
      setSelectedTrainees([...selectedTrainees, trainee]);
    }
    setShowTraineeSearch(false); // Close the trainee search after adding
  };
  const handleRemoveFromGroupClick = (user) => {
    setSelectedUsers(selectedUsers.filter((u) => u.userName !== user.userName));
  };
  const handleRemoveTraineeFromGroupClick = (trainee) => {
    setSelectedTrainees(
      selectedTrainees.filter((t) => t.userName !== trainee.userName)
    );
  };
  const handleGroupNameChange = (event) => {
    setGroupName(event.target.value);
  };
  const handleCreateGroup = () => {
    if (!groupName.trim()) {
      setError("Group name cannot be empty.");
      return;
    }
    setError("");
    const groups = JSON.parse(localStorage.getItem("groups")) || [];
    const newGroup = {
      id: groups.length + 1,
      groupName: groupName,
      users: selectedUsers,
      trainees: selectedTrainees,
    };
    groups.push(newGroup);
    localStorage.setItem("groups", JSON.stringify(groups));
    navigate("/admin/users/existing-group");
    // Prepare the data to send to the backend
    const groupData = {
      groupName: groupName,
      users: selectedUsers,
      trainees: selectedTrainees,
    };

    axios
      .post("http://localhost:8080/api/groups", groupData, {
        headers: {
          Authorization: `Bearer ${jwt}`, // Optional, if your backend requires authentication
        }
      })
      .then((response) => {
        console.log("Group created successfully:", response.data);
        navigate("/admin/users/existing-group"); // Redirect after successful creation
      })
      .catch((error) => {
        console.error("Error creating group:", error);
        setError("An error occurred while creating the group.");
      });
  };
  const filteredUserData = userData.filter(
    (user) =>
      user.userName?.toLowerCase().includes(search.toLowerCase()) && user.email &&
      user.courses?.some(course => course.toLowerCase().includes(searchCourse.toLowerCase()))
  );

  const filteredTraineeData = traineeData.filter((trainee) =>
    (trainee.firstName + " " + trainee.lastName).toLowerCase().includes(searchTrainee.toLowerCase())
  );
  const userRows = filteredUserData.map((user) => (
    <tr key={user.userName} className="border-b hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{user.userName}</div>
            <div className="text-sm font-medium text-gray-900">{user.email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{user.courses}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          onClick={() => handleAddToGroupClick(user)}
        >
          Add to Group
        </button>
      </td>
    </tr>
  ));

  const traineeSearchRows = filteredTraineeData.map((trainee) => (
    <div
      key={trainee.firstName + " " + trainee.lastName}
      className="flex justify-between items-center px-4 py-2 bg-gray-100 rounded-md"
    >
      <div className="text-sm font-medium text-gray-900">{trainee.firstName + " " + trainee.lastName}</div>
      <div className="text-sm font-medium text-gray-900">{trainee.email}</div>
      <button
        className="ml-4 px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-600"
        onClick={() => handleAddTraineeToGroup(trainee)}
      >
        Add Trainee to this Group
      </button>
    </div>
  ));


  return (
    <div className="overflow-x-auto">
      {!showGroupForm && (
        <div className="text-center pt-10">
          <button
            className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
            onClick={() => setShowGroupForm(true)}
          >
            Create Group
          </button>
        </div>
      )}
      {showGroupForm && (
        <div className="min-w-full overflow-x-auto rounded-lg">
          <div className="p-4">
            <input
              type="text"
              placeholder="Search by name"
              value={search}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Search by course"
              value={searchCourse}
              onChange={handleSearchCourseChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="p-4">
            <input
              type="text"
              placeholder="Group Name"
              value={groupName}
              onChange={handleGroupNameChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          {error && (
            <div className="text-red-500 text-center pb-2">{error}</div>
          )}
          <div className="p-4">
            <button
              className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
              onClick={handleCreateGroup}
            >
              Save Group
            </button>
            <button
              className="ml-4 px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
              onClick={() => setShowGroupForm(false)}
            >
              Close
            </button>
          </div>

          <div className="p-4">
            <button
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
              onClick={() => setShowTraineeSearch(true)}
            >
              Add Trainee to Group
            </button>
            {showTraineeSearch && (
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Search Trainee by name"
                  value={searchTrainee}
                  onChange={handleTraineeSearchChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                <div className="mt-2">{traineeSearchRows}</div>
                <button
                  className="ml-4 px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
                  onClick={() => setShowTraineeSearch(false)}
                >
                  Close
                </button>
              </div>
            )}
          </div>

          {selectedUsers.length > 0 && (
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                Selected Users:
              </h2>
              <ul className="bg-white shadow-md rounded-lg p-4">
                {selectedUsers.map((user) => (
                  <li
                    key={user.userNameame}
                    className="flex justify-between items-center mb-2 p-2 border-b border-gray-200 last:border-0"
                  >
                    <div className="flex items-center">
                      <span className="ml-4 text-gray-900">{user.userName}</span>
                      <span className="ml-4 text-gray-900">{user.email}</span>
                    </div>
                    <button
                      className="ml-4 px-2 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
                      onClick={() => handleRemoveFromGroupClick(user)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {selectedTrainees.length > 0 && (
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                Selected Trainees:
              </h2>
              <ul className="bg-white shadow-md rounded-lg p-4">
                {selectedTrainees.map((trainee) => (
                  <li
                    key={trainee.firstName + " " + trainee.lastName}
                    className="flex justify-between items-center mb-2 p-2 border-b border-gray-200 last:border-0"
                  >
                    <div className="flex items-center">
                      <span className="ml-4 text-gray-900">{trainee.firstName + " " + trainee.lastName}</span>
                      <span className="ml-4 text-gray-900">{trainee.email}</span>
                    </div>
                    <button
                      className="ml-4 px-2 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
                      onClick={() => handleRemoveTraineeFromGroupClick(trainee)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {userRows}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
}
export default UsersRolesTable;