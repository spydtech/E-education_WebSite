// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios'

// function UsersRolesTable() {
//   const [search, setSearch] = useState("");
//   const [searchCourse, setSearchCourse] = useState("");
//   const [searchTrainee, setSearchTrainee] = useState("");
//   const [selectedUsers, setSelectedUsers] = useState([]);
//   const [selectedTrainees, setSelectedTrainees] = useState([]);
//   const [groupName, setGroupName] = useState("");
//   const [error, setError] = useState("");
//   const [showTraineeSearch, setShowTraineeSearch] = useState(false);
//   const [userData, setUserData] = useState([])
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch user data on component mount
//     axios.get("http://localhost:8080/api/payment/user-courses")
//       .then(response => {
//         setUserData(response.data);
//       })
//       .catch(error => {
//         console.error("There was an error fetching the user data!", error);
//       });
//   }, []);


//   const handleSearchChange = (event) => {
//     setSearch(event.target.value);
//   };

//   const handleSearchCourseChange = (event) => {
//     setSearchCourse(event.target.value);
//   };

//   const handleTraineeSearchChange = (event) => {
//     setSearchTrainee(event.target.value);
//   };

//   const handleAddToGroupClick = (user) => {
//     if (!selectedUsers.find((u) => u.name === user.name)) {
//       setSelectedUsers([...selectedUsers, user]);
//     }
//   };

//   const handleAddTraineeToGroup = (trainee) => {
//     if (!selectedTrainees.find((t) => t.name === trainee.name)) {
//       setSelectedTrainees([...selectedTrainees, trainee]);
//     }
//     setShowTraineeSearch(false); // Close the trainee search after adding
//   };

//   const handleRemoveFromGroupClick = (user) => {
//     setSelectedUsers(selectedUsers.filter((u) => u.name !== user.name));
//   };

//   const handleRemoveTraineeFromGroupClick = (trainee) => {
//     setSelectedTrainees(
//       selectedTrainees.filter((t) => t.name !== trainee.name)
//     );
//   };

//   const handleGroupNameChange = (event) => {
//     setGroupName(event.target.value);
//   };

//   const handleCreateGroup = () => {
//     if (!groupName.trim()) {
//       setError("Group name cannot be empty.");
//       return;
//     }
//     setError("");

//     const groups = JSON.parse(localStorage.getItem("groups")) || [];
//     const newGroup = {
//       id: groups.length + 1,
//       groupName: groupName,
//       users: selectedUsers,
//       trainees: selectedTrainees,
//     };
//     groups.push(newGroup);
//     localStorage.setItem("groups", JSON.stringify(groups));

//     navigate("/trainee-courses");
//   };

//   const filteredUserData = userData.filter(
//     (item) =>
//       item.name.toLowerCase().includes(search.toLowerCase()) &&
//       item.course.toLowerCase().includes(searchCourse.toLowerCase())
//   );

//   // const filteredTraineeData = userData.filter((trainee) =>
//   //   trainee.name.toLowerCase().includes(searchTrainee.toLowerCase())
//   // );

//   const userRows = filteredUserData.map((item) => (
//     <tr key={item.name} className="border-b hover:bg-gray-100">
//       <td className="px-6 py-4 whitespace-nowrap">
//         <div className="flex items-center">
//           <img
//             className="h-10 w-10 rounded-full"
//             src={item.avatar}
//             alt={`Avatar of ${item.name}`}
//           />
//           <div className="ml-4">
//             <div className="text-sm font-medium text-gray-900">{item.name}</div>
//             <div className="text-sm text-gray-500">{item.email}</div>
//           </div>
//         </div>
//       </td>
//       <td className="px-6 py-4 whitespace-nowrap">
//         <div className="text-sm text-gray-900">{item.course}</div>
//       </td>
//       <td className="px-6 py-4 whitespace-nowrap">
//         <button
//           className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
//           onClick={() => handleAddToGroupClick(item)}
//         >
//           Add to Group
//         </button>
//       </td>
//     </tr>
//   ));

//   // const traineeSearchRows = filteredTraineeData.map((trainee) => (
//   //   <div
//   //     key={trainee.name}
//   //     className="flex justify-between items-center px-4 py-2 bg-gray-100 rounded-md"
//   //   >
//   //     <div className="text-sm font-medium text-gray-900">{trainee.name}</div>
//   //     <button
//   //       className="ml-4 px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-600"
//   //       onClick={() => handleAddTraineeToGroup(trainee)}
//   //     >
//   //       Add Trainee to this Group
//   //     </button>
//   //   </div>
//   // ));

//   return (
//     <div className="overflow-x-auto">
//       <div className="min-w-full overflow-x-auto rounded-lg">
//         <div className="p-4">
//           <input
//             type="text"
//             placeholder="Search by name"
//             value={search}
//             onChange={handleSearchChange}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md"
//           />
//           <input
//             type="text"
//             placeholder="Search by course"
//             value={searchCourse}
//             onChange={handleSearchCourseChange}
//             className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
//           />
//           {(selectedUsers.length > 0 || selectedTrainees.length > 0) && (
//             <div className="mt-4 p-4 border border-gray-300 rounded-md">
//               <p className="text-sm font-medium text-gray-900">
//                 Add users and trainees to a group:
//               </p>
//               <div className="flex items-center mt-2">
//                 <input
//                   type="text"
//                   placeholder="Enter group name"
//                   required
//                   value={groupName}
//                   onChange={handleGroupNameChange}
//                   className="w-auto px-4 py-2 border border-gray-300 rounded-md"
//                 />
//                 <button
//                   className="ml-4 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
//                   onClick={handleCreateGroup}
//                 >
//                   Create Group
//                 </button>
//                 <button
//                   className="ml-4 px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-600"
//                   onClick={() => setShowTraineeSearch(!showTraineeSearch)}
//                 >
//                   {showTraineeSearch ? "Close Trainee Search" : "Add Trainee"}
//                 </button>
//               </div>
//               {error && <p className="mt-2 text-red-500">{error}</p>}
//               <ul className="mt-4 w-80">
//                 {selectedUsers.map((user) => (
//                   <li
//                     key={user.name}
//                     className="mt-2 px-4 py-2 bg-gray-100 rounded-md flex justify-between items-center"
//                   >
//                     {user.name}
//                     <button
//                       className="ml-4 px-2 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
//                       onClick={() => handleRemoveFromGroupClick(user)}
//                     >
//                       Remove
//                     </button>
//                   </li>
//                 ))}
//                 {selectedTrainees.map((trainee) => (
//                   <li
//                     key={trainee.name}
//                     className="mt-2 px-4 py-2 bg-violet-600 rounded-md flex justify-between items-center"
//                   >
//                     {trainee.name}
//                     <button
//                       className="ml-4 px-2 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
//                       onClick={() => handleRemoveTraineeFromGroupClick(trainee)}
//                     >
//                       Remove
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//               {showTraineeSearch && (
//                 <div className="mt-4">
//                   <input
//                     type="text"
//                     placeholder="Search trainees"
//                     value={searchTrainee}
//                     onChange={handleTraineeSearchChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md"
//                   />
//                   {/* {traineeSearchRows} */}
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//         <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 User
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Course
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {userRows}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default UsersRolesTable;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UsersRolesTable() {
  const [search, setSearch] = useState("");
  const [searchCourse, setSearchCourse] = useState("");
  const [searchTrainee, setSearchTrainee] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedTrainees, setSelectedTrainees] = useState([]);
  const [groupName, setGroupName] = useState("");
  const [error, setError] = useState("");
  const [showTraineeSearch, setShowTraineeSearch] = useState(false);
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");

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

    navigate("/trainee-courses");
  };

  const filteredUserData = userData.filter(
    (item) =>
      item.userName?.toLowerCase().includes(search.toLowerCase()) && item.email?.toLowerCase().includes(search.toLowerCase()) &&
      item.courses?.some(course => course.toLowerCase().includes(searchCourse.toLowerCase()))
  );

  const userRows = filteredUserData.map((item) => (
    <tr key={item.userName} className="border-b hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{item.userName}</div>
            <div className="text-sm font-medium text-gray-900">{item.email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{item.courses.join(", ")}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          onClick={() => handleAddToGroupClick(item)}
        >
          Add to Group
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="overflow-x-auto">
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
          {(selectedUsers.length > 0 || selectedTrainees.length > 0) && (
            <div className="mt-4 p-4 border border-gray-300 rounded-md">
              <p className="text-sm font-medium text-gray-900">
                Add users and trainees to a group:
              </p>
              <div className="flex items-center mt-2">
                <input
                  type="text"
                  placeholder="Enter group name"
                  required
                  value={groupName}
                  onChange={handleGroupNameChange}
                  className="w-auto px-4 py-2 border border-gray-300 rounded-md"
                />
                <button
                  className="ml-4 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
                  onClick={handleCreateGroup}
                >
                  Create Group
                </button>
                <button
                  className="ml-4 px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-600"
                  onClick={() => setShowTraineeSearch(!showTraineeSearch)}
                >
                  {showTraineeSearch ? "Close Trainee Search" : "Add Trainee"}
                </button>
              </div>
              {error && <p className="mt-2 text-red-500">{error}</p>}
              <ul className="mt-4 w-80">
                {selectedUsers.map((user) => (
                  <li
                    key={user.userName}
                    className="mt-2 px-4 py-2 bg-gray-100 rounded-md flex justify-between items-center"
                  >
                    {user.userName}
                    <button
                      className="ml-4 px-2 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
                      onClick={() => handleRemoveFromGroupClick(user)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
                {selectedTrainees.map((trainee) => (
                  <li
                    key={trainee.userName}
                    className="mt-2 px-4 py-2 bg-violet-600 rounded-md flex justify-between items-center"
                  >
                    {trainee.userName}
                    <button
                      className="ml-4 px-2 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
                      onClick={() => handleRemoveTraineeFromGroupClick(trainee)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              {showTraineeSearch && (
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Search trainees"
                    value={searchTrainee}
                    onChange={handleTraineeSearchChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              )}
            </div>
          )}
        </div>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">
                Courses
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300" />
            </tr>
          </thead>
          <tbody className="bg-white">{userRows}</tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersRolesTable;





