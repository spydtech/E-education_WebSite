import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoCloseCircle } from "react-icons/io5";

function GroupTable({ users, onRemoveUser, onAddUser, trainees }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showTraineeDetails, setShowTraineeDetails] = useState(false);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [selectedTrainee, setSelectedTrainee] = useState(null);
  const [traineeSearchQuery, setTraineeSearchQuery] = useState("");
  const [userSearchQuery, setUserSearchQuery] = useState("");
  const [userSearchQueryByCourse, setUserSearchQueryByCourse] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const jwt = localStorage.getItem("jwt");
  const [userData, setUserData] = useState([]);
  const [traineeData, setTraineeData] = useState([]);

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

  const traineeName = trainees.map((trainee) => (
    <tr
      key={trainee.firstName + " " + trainee.lastName}
      className="border-b hover:bg-gray-100"
    >
      <td className="whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-4 flex">
            <span className="px-2 py-1 bg-gray-100 rounded-md">
              {trainee.firstName + " " + trainee.lastName}
            </span>
          </div>
        </div>
      </td>
    </tr>
  ));

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleTraineeSearchChange = (event) => {
    setTraineeSearchQuery(event.target.value);
  };

  const handleUserSearchChange = (event) => {
    setUserSearchQuery(event.target.value);
  };

  const handleUserSearchChangeByCourse = (event) => {
    setUserSearchQueryByCourse(event.target.value);
  };

  const handleRemoveUser = (user) => {
    onRemoveUser(user);
  };

  const showTraineeDetailsModal = () => {
    setShowTraineeDetails(true);
  };

  const closeTraineeDetailsModal = () => {
    setShowTraineeDetails(false);
    setShowWarning(false);
  };

  const showUserDetailsModal = () => {
    setShowUserDetails(true);
  };

  const closeUserDetailsModal = () => {
    setShowUserDetails(false);
  };

  const setTrainee = (trainee) => {
    const traineeExists = trainees.some(
      (existingTrainee) =>
        existingTrainee.firstName + existingTrainee.lastName ===
        trainee.firstName + trainee.lastName
    );
    if (traineeExists) {
      setShowWarning(true);
    } else {
      setSelectedTrainee(trainee.firstName + " " + trainee.lastName);
      setShowTraineeDetails(false);
      setShowWarning(false);
    }
  };
  save;

  const handleAddUser = (user) => {
    onAddUser(user);
    closeUserDetailsModal();
  };

  const filteredUsers = users.filter((user) =>
    user.userName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTrainees = traineeData.filter((trainee) =>
    (trainee.firstName + " " + trainee.lastName)
      .toLowerCase()
      .includes(traineeSearchQuery.toLowerCase())
  );

  const filteredAddUsers = userData.filter(
    (user) =>
      user.userName.toLowerCase().includes(userSearchQuery.toLowerCase()) &&
      user.courses.some((course) =>
        course.toLowerCase().includes(userSearchQueryByCourse.toLowerCase())
      )
  );

  const traineeRows = filteredTrainees.map((trainee) => (
    <tr
      key={trainee.firstName + " " + trainee.lastName}
      className="border-b hover:bg-gray-100 "
    >
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {trainee.firstName + " " + trainee.lastName}
            </div>
            <div className="text-sm text-gray-500">{trainee.email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <button
          className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
          onClick={() => setTrainee(trainee)}
        >
          Set as Trainee
        </button>
      </td>
    </tr>
  ));

  const userRows = filteredAddUsers.map((user) => (
    <tr key={user.userName} className="border-b hover:bg-gray-100 ">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm font-medium text-[#153243]">
              {user.userName}
            </div>
            <div className="text-sm text-[#153243]">{user.email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">{user.courses}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <button
          className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
          onClick={() => handleAddUser(user)}
        >
          Add user to group
        </button>
      </td>
    </tr>
  ));

  const rows = filteredUsers.map((user) => (
    <tr key={user.userName} className="border-b hover:bg-gray-100 ">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm font-medium text-[#153243]">
              {user.userName}
            </div>
            <div className="text-sm text-[#153243]">{user.email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-[#153243]">{user.courses}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <button
          className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
          onClick={() => handleRemoveUser(user)}
        >
          Remove User
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="overflow-x-auto">
      <div className="min-w-full overflow-hidden rounded-lg">
        <div className="flex flex-col md:flex-row justify-between m-3 space-y-3 md:space-y-0">
          <input
            type="text"
            placeholder="Search by name"
            value={searchQuery}
            onChange={handleSearchChange}
            className="px-4 py-2 border border-gray-300 rounded-md"
          />

          <div className="flex items-center space-x-2">
            <span className="text-[#2C3E50]">Trainee:</span>
            <span className="px-2 py-1 bg-gray-100 rounded-md">
              {selectedTrainee ? selectedTrainee : traineeName}
            </span>
          </div>
          <button
            className="px-4 py-2 text-white bg-[#153243] rounded-md hover:bg-[#153243]"
            onClick={showTraineeDetailsModal}
          >
            Update Trainee
          </button>
          <button
            className="px-4 py-2 text-white bg-[#4CA1AF] rounded-md hover:bg-[#4CA1AF]"
            onClick={showUserDetailsModal}
          >
            Add User
          </button>
        </div>

        {/* Update Trainee Modal */}
        {showTraineeDetails && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg p-2 px-4 w-full pb-8 max-w-3xl max-h-screen overflow-y-auto">
              <div className=" flex  justify-between">
                <h2 className="text-lg pt-6 font-medium  text-[#153243] mb-4">
                  Select Trainee
                </h2>
                <button
                  className=" text-white  mb-4 rounded-md hover:bg-[#153243]"
                  onClick={closeTraineeDetailsModal}
                >
                  <IoCloseCircle className=" text-3xl mb-4  text-[#153243] " />
                </button>
              </div>
              <input
                type="text"
                placeholder="Search Trainee by name"
                value={traineeSearchQuery}
                onChange={handleTraineeSearchChange}
                className="px-4 py-2 border border-gray-300 rounded-md mb-4"
              />
              {showWarning && (
                <div className="mb-4 text-red-500">
                  Warning: This trainee is already present.
                </div>
              )}
              <table className="min-w-full bg-white  divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-[#4CA1AF] bg-opacity-30 text-left  text-xs font-medium text-[#153243] uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 bg-[#4CA1AF] bg-opacity-30"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {traineeRows}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Add User Modal */}
        {showUserDetails && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg px-4 p-2 w-full pb-8 max-w-3xl max-h-screen overflow-y-auto">
              <div className=" flex  justify-between ">
                <h2 className="text-lg pt-6 font-medium text-[#153243] mb-4">
                  Select User to Add
                </h2>
                <button
                  className="mb-4 text-white rounded-md "
                  onClick={closeUserDetailsModal}
                >
                  <IoCloseCircle className=" text-3xl mb-4 text-[#153243] " />
                </button>
              </div>
              <input
                type="text"
                placeholder="Search User by name"
                value={userSearchQuery}
                onChange={handleUserSearchChange}
                className="px-4 py-2 border border-[#153243] rounded-md mb-4"
              />
              <input
                type="text"
                placeholder="Search User by Course"
                value={userSearchQueryByCourse}
                onChange={handleUserSearchChangeByCourse}
                className="px-4 float-end py-2 border border-[#153243] rounded-md mb-4"
              />
              <table className="min-w-full bg-white divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-[#4CA1AF] bg-opacity-30 text-left text-xs font-medium text-[#153243] uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 bg-[#4CA1AF] bg-opacity-30 text-left text-xs font-medium text-[#153243] uppercase tracking-wider">
                      Course
                    </th>
                    <th className="px-6 py-3 bg-[#4CA1AF] bg-opacity-30"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {userRows}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <table className="min-w-full h-14 bg-white divide-y divide-gray-300">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-[#153243] text-left text-xs font-medium text-white uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 bg-[#153243] text-left text-xs font-medium text-white uppercase tracking-wider">
                Course
              </th>
              <th className="px-6 py-3 bg-[#153243]"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">{rows}</tbody>
        </table>
      </div>
    </div>
  );
}

export default GroupTable;
