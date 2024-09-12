// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export const userData = [
//   {
//     avatar:
//       "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
//     name: "garry fighter",
//     course: "Full Stack Java",
//     email: "garry@gmail.com",
//   },
//   {
//     avatar:
//       "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
//     name: "Halen plantviewer",
//     course: "Full Stack Java",
//     email: "halen@foot.dev",
//   },
//   {
//     avatar:
//       "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
//     name: "Robert Wolfkisser",
//     course: "Full Stack Python",
//     email: "rob_wolf@gmail.com",
//   },
//   {
//     avatar:
//       "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png",
//     name: "Jill Jailbreaker",
//     course: "Full Stack Python",
//     email: "jj@breaker.com",
//   },
//   {
//     avatar:
//       "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png",
//     name: "Henry Silkeater",
//     course: "Full Stack Python",
//     email: "henry@silkeater.io",
//   },
//   {
//     avatar:
//       "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
//     name: "Bill Horsefighter",
//     course: "Full Stack Java",
//     email: "bhorsefighter@gmail.com",
//   },
//   {
//     avatar:
//       "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
//     name: "Rever Dale ",
//     course: "React Js",
//     email: "dale@foot.dev",
//   },
//   {
//     avatar:
//       "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
//     name: "henry highter",
//     course: "React Js",
//     email: "hen@gmail.com",
//   },
//   {
//     avatar:
//       "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
//     name: "Clver plantviewer",
//     course: "React Js",
//     email: "clver@foot.dev",
//   },
//   {
//     avatar:
//       "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
//     name: "Wobert HollyWood",
//     course: "Full Stack Python",
//     email: "hollyf@gmail.com",
//   },
// ];

// export const traineeData = [
//   {
//     avatar:
//       "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",
//     name: "Alice Wonderland",
//     designation: "trainee",
//     email: "alice@wonderland.com",
//   },
//   {
//     avatar:
//       "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png",
//     name: "Garry Builder",
//     designation: "trainee",
//     email: "gar@builder.com",
//   },
//   {
//     avatar:
//       "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",
//     name: "Jonny Dawn",
//     designation: "trainee",
//     email: "johnny@dawn.com",
//   },
// ];

// function UsersRolesTable() {
//   const [search, setSearch] = useState("");
//   const [searchCourse, setSearchCourse] = useState("");
//   const [searchTrainee, setSearchTrainee] = useState("");
//   const [selectedUsers, setSelectedUsers] = useState([]);
//   const [selectedTrainees, setSelectedTrainees] = useState([]);
//   const [groupName, setGroupName] = useState("");
//   const [error, setError] = useState("");
//   const [showGroupForm, setShowGroupForm] = useState(false);
//   const [showTraineeSearch, setShowTraineeSearch] = useState(false);
//   const navigate = useNavigate();

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

//     navigate("/admin/users/existing-group");
//   };

//   const filteredUserData = userData.filter(
//     (item) =>
//       item.name.toLowerCase().includes(search.toLowerCase()) &&
//       item.course.toLowerCase().includes(searchCourse.toLowerCase())
//   );

//   const filteredTraineeData = traineeData.filter((trainee) =>
//     trainee.name.toLowerCase().includes(searchTrainee.toLowerCase())
//   );

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

//   const traineeSearchRows = filteredTraineeData.map((trainee) => (
//     <div
//       key={trainee.name}
//       className="flex justify-between items-center px-4 py-2 bg-gray-100 rounded-md"
//     >
//       <div className="text-sm font-medium text-gray-900">{trainee.name}</div>
//       <button
//         className="ml-4 px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-600"
//         onClick={() => handleAddTraineeToGroup(trainee)}
//       >
//         Add Trainee to this Group
//       </button>
//     </div>
//   ));

//   return (
//     <div className="overflow-x-auto">
//       {/* <h1 className="text-center text-black text-xl font-bold py-2">
//         Create New Group
//       </h1> */}
//       {!showGroupForm && (
//         <div className="text-center pt-10">
//           <button
//             className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
//             onClick={() => setShowGroupForm(true)}
//           >
//             Create Group
//           </button>
//         </div>
//       )}
//       {showGroupForm && (
//         <div className="min-w-full overflow-x-auto rounded-lg">
//           <div className="p-4">
//             <input
//               type="text"
//               placeholder="Search by name"
//               value={search}
//               onChange={handleSearchChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md"
//             />
//             <input
//               type="text"
//               placeholder="Search by course"
//               value={searchCourse}
//               onChange={handleSearchCourseChange}
//               className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md"
//             />
//           </div>
//           <div className="p-4">
//             <input
//               type="text"
//               placeholder="Group Name"
//               value={groupName}
//               onChange={handleGroupNameChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md"
//             />
//           </div>
//           {error && (
//             <div className="text-red-500 text-center pb-2">{error}</div>
//           )}
//           <div className="p-4">
//             <button
//               className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
//               onClick={handleCreateGroup}
//             >
//               Save Group
//             </button>
//             <button
//               className="ml-4 px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
//               onClick={() => setShowGroupForm(false)}
//             >
//               Close
//             </button>
//           </div>
//           <div className="p-4">
//             <button
//               className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
//               onClick={() => setShowTraineeSearch(true)}
//             >
//               Add Trainee to Group
//             </button>
//             {showTraineeSearch && (
//               <div className="mt-4">
//                 <input
//                   type="text"
//                   placeholder="Search Trainee by name"
//                   value={searchTrainee}
//                   onChange={handleTraineeSearchChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md"
//                 />
//                 <div className="mt-2">{traineeSearchRows}</div>
//                 <button
//                   className="ml-4 px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
//                   onClick={() => setShowTraineeSearch(false)}
//                 >
//                   Close
//                 </button>
//               </div>
//             )}
//           </div>
//           {selectedUsers.length > 0 && (
//             <div className="p-4">
//               <h2 className="text-lg font-bold text-gray-900 mb-2">
//                 Selected Users:
//               </h2>
//               <ul className="bg-white shadow-md rounded-lg p-4">
//                 {selectedUsers.map((user) => (
//                   <li
//                     key={user.name}
//                     className="flex justify-between items-center mb-2 p-2 border-b border-gray-200 last:border-0"
//                   >
//                     <div className="flex items-center">
//                       <img
//                         className="h-8 w-8 rounded-full"
//                         src={user.avatar}
//                         alt={`Avatar of ${user.name}`}
//                       />
//                       <span className="ml-4 text-gray-900">{user.name}</span>
//                     </div>
//                     <button
//                       className="ml-4 px-2 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
//                       onClick={() => handleRemoveFromGroupClick(user)}
//                     >
//                       Remove
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {selectedTrainees.length > 0 && (
//             <div className="p-4">
//               <h2 className="text-lg font-bold text-gray-900 mb-2">
//                 Selected Trainees:
//               </h2>
//               <ul className="bg-white shadow-md rounded-lg p-4">
//                 {selectedTrainees.map((trainee) => (
//                   <li
//                     key={trainee.name}
//                     className="flex justify-between items-center mb-2 p-2 border-b border-gray-200 last:border-0"
//                   >
//                     <div className="flex items-center">
//                       <img
//                         className="h-8 w-8 rounded-full"
//                         src={trainee.avatar}
//                         alt={`Avatar of ${trainee.name}`}
//                       />
//                       <span className="ml-4 text-gray-900">{trainee.name}</span>
//                     </div>
//                     <button
//                       className="ml-4 px-2 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
//                       onClick={() => handleRemoveTraineeFromGroupClick(trainee)}
//                     >
//                       Remove
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Name
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Course
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {userRows}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// export default UsersRolesTable;

//{ main code}
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// function UsersRolesTable() {
//   const [search, setSearch] = useState("");
//   const [searchCourse, setSearchCourse] = useState("");
//   const [searchTrainee, setSearchTrainee] = useState("");
//   const [selectedUsers, setSelectedUsers] = useState([]);
//   const [selectedTrainees, setSelectedTrainees] = useState([]);
//   const [groupName, setGroupName] = useState("");
//   const [error, setError] = useState("");
//   const [showTraineeSearch, setShowTraineeSearch] = useState(false);
//   const [showGroupForm, setShowGroupForm] = useState(false);
//   const [userData, setUserData] = useState([]);
//   const navigate = useNavigate();
//   const jwt = localStorage.getItem("jwt");
//   const [traineeData, setTraineeData] = useState([]);
//   // const traineeName = auth.trainee.firstName + auth.trainee.lastName
//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/api/payment/user-courses", {
//         headers: {
//           Authorization: `Bearer ${jwt}`, // Send JWT token to authenticate the request
//         },
//       })
//       .then((response) => {
//         console.log("API response:", response);
//         if (Array.isArray(response.data)) {
//           setUserData(response.data);
//         } else {
//           console.error("API response is not an array:", response.data);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching user data:", error);
//       });
//   }, [jwt]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/trainee/getAllTrainee", {
//         headers: {
//           Authorization: `Bearer ${jwt}`, // Send JWT token to authenticate the request
//         },
//       })
//       .then((response) => {
//         console.log("API response:", response);
//         if (Array.isArray(response.data)) {
//           setTraineeData(response.data);
//         } else {
//           console.error("API response is not an array:", response.data);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching user data:", error);
//       });
//   }, [jwt]);
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
//     if (!selectedUsers.find((u) => u.userName === user.userName)) {
//       setSelectedUsers([...selectedUsers, user]);
//     }
//   };
//   const handleAddTraineeToGroup = (trainee) => {
//     if (!selectedTrainees.find((t) => t.userName === trainee.userName)) {
//       setSelectedTrainees([...selectedTrainees, trainee]);
//     }
//     setShowTraineeSearch(false);
//   };
//   const handleRemoveFromGroupClick = (user) => {
//     setSelectedUsers(selectedUsers.filter((u) => u.userName !== user.userName));
//   };
//   const handleRemoveTraineeFromGroupClick = (trainee) => {
//     setSelectedTrainees(
//       selectedTrainees.filter((t) => t.userName !== trainee.userName)
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
//     navigate("/admin/users/existing-group");
//   };
//   const filteredUserData = userData.filter(
//     (user) =>
//       user.userName?.toLowerCase().includes(search.toLowerCase()) && user.email &&
//       user.courses?.some(course => course.toLowerCase().includes(searchCourse.toLowerCase()))
//   );

//   const filteredTraineeData = traineeData.filter((trainee) =>
//     (trainee.firstName + " " + trainee.lastName).toLowerCase().includes(searchTrainee.toLowerCase())
//   );
//   const userRows = filteredUserData.map((user) => (
//     <tr key={user.userName} className="border-b hover:bg-gray-100">
//       <td className="px-6 py-4 whitespace-nowrap">
//         <div className="flex items-center">
//           <div className="ml-4">
//             <div className="text-sm font-medium text-gray-900">{user.userName}</div>
//             <div className="text-sm font-medium text-gray-900">{user.email}</div>
//           </div>
//         </div>
//       </td>
//       <td className="px-6 py-4 whitespace-nowrap">
//         <div className="text-sm text-gray-900">{user.courses}</div>
//       </td>
//       <td className="px-6 py-4 whitespace-nowrap">
//         <button
//           className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
//           onClick={() => handleAddToGroupClick(user)}
//         >
//           Add to Group
//         </button>
//       </td>
//     </tr>
//   ));

//   const traineeSearchRows = filteredTraineeData.map((trainee) => (
//     <div
//       key={trainee.firstName + " " + trainee.lastName}
//       className="flex justify-between items-center px-4 py-2 bg-gray-100 rounded-md"
//     >
//       <div className="text-sm font-medium text-gray-900">{trainee.firstName + " " + trainee.lastName}</div>
//       <button
//         className="ml-4 px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-600"
//         onClick={() => handleAddTraineeToGroup(trainee)}
//       >
//         Add Trainee to this Group
//       </button>
//     </div>
//   ));


//   return (
//     <div className="overflow-x-auto">
//       {!showGroupForm && (
//         <div className="text-center pt-10">
//           <button
//             className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
//             onClick={() => setShowGroupForm(true)}
//           >
//             Create Group
//           </button>
//         </div>
//       )}
//       {showGroupForm && (
//         <div className="min-w-full overflow-x-auto rounded-lg">
//           <div className="p-4">
//             <input
//               type="text"
//               placeholder="Search by name"
//               value={search}
//               onChange={handleSearchChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md"
//             />
//             <input
//               type="text"
//               placeholder="Search by course"
//               value={searchCourse}
//               onChange={handleSearchCourseChange}
//               className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
//             />
//           </div>
//           <div className="p-4">
//             <input
//               type="text"
//               placeholder="Group Name"
//               value={groupName}
//               onChange={handleGroupNameChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md"
//             />
//           </div>
//           {error && (
//             <div className="text-red-500 text-center pb-2">{error}</div>
//           )}
//           <div className="p-4">
//             <button
//               className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
//               onClick={handleCreateGroup}
//             >
//               Save Group
//             </button>
//             <button
//               className="ml-4 px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
//               onClick={() => setShowGroupForm(false)}
//             >
//               Close
//             </button>
//           </div>

//           <div className="p-4">
//             <button
//               className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
//               onClick={() => setShowTraineeSearch(true)}
//             >
//               Add Trainee to Group
//             </button>
//             {showTraineeSearch && (
//               <div className="mt-4">
//                 <input
//                   type="text"
//                   placeholder="Search Trainee by name"
//                   value={searchTrainee}
//                   onChange={handleTraineeSearchChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md"
//                 />
//                 <div className="mt-2">{traineeSearchRows}</div>
//                 <button
//                   className="ml-4 px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
//                   onClick={() => setShowTraineeSearch(false)}
//                 >
//                   Close
//                 </button>
//               </div>
//             )}
//           </div>

//           {selectedUsers.length > 0 && (
//             <div className="p-4">
//               <h2 className="text-lg font-bold text-gray-900 mb-2">
//                 Selected Users:
//               </h2>
//               <ul className="bg-white shadow-md rounded-lg p-4">
//                 {selectedUsers.map((user) => (
//                   <li
//                     key={user.userNameame}
//                     className="flex justify-between items-center mb-2 p-2 border-b border-gray-200 last:border-0"
//                   >
//                     <div className="flex items-center">
//                       <span className="ml-4 text-gray-900">{user.userName}</span>
//                       <span className="ml-4 text-gray-900">{user.email}</span>
//                     </div>
//                     <button
//                       className="ml-4 px-2 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
//                       onClick={() => handleRemoveFromGroupClick(user)}
//                     >
//                       Remove
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {selectedTrainees.length > 0 && (
//             <div className="p-4">
//               <h2 className="text-lg font-bold text-gray-900 mb-2">
//                 Selected Trainees:
//               </h2>
//               <ul className="bg-white shadow-md rounded-lg p-4">
//                 {selectedTrainees.map((trainee) => (
//                   <li
//                     key={trainee.firstName + " " + trainee.lastName}
//                     className="flex justify-between items-center mb-2 p-2 border-b border-gray-200 last:border-0"
//                   >
//                     <div className="flex items-center">
//                       <span className="ml-4 text-gray-900">{trainee.firstName + " " + trainee.lastName}</span>
//                       <span className="ml-4 text-gray-900">{trainee.email}</span>
//                     </div>
//                     <button
//                       className="ml-4 px-2 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
//                       onClick={() => handleRemoveTraineeFromGroupClick(trainee)}
//                     >
//                       Remove
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Name
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Course
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {userRows}
//             </tbody>
//           </table>
//         </div>
//       )}

//     </div>
//   );
// }
// export default UsersRolesTable;



import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import girl from "../../assetss/Home/Admin.png"
import { IoCloseCircle } from "react-icons/io5";

function UsersRolesTable() {
  const [search, setSearch] = useState("");
  const [searchCourse, setSearchCourse] = useState("");
  const [searchTrainee, setSearchTrainee] = useState("");
  const [searchTraineeCourse, setSearchTraineeCourse] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedTrainees, setSelectedTrainees] = useState([]);
  const [groupName, setGroupName] = useState("");
  const [error, setError] = useState("");
  const [showTraineeSearch, setShowTraineeSearch] = useState(false);
  const [showGroupForm, setShowGroupForm] = useState(false);
  const [userData, setUserData] = useState([]);
  const [traineeData, setTraineeData] = useState([]);
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/payment/user-courses", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then((response) => {
        if (Array.isArray(response.data)) {
          setUserData(response.data);
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
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then((response) => {
        if (Array.isArray(response.data)) {
          setTraineeData(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching trainee data:", error);
      });
  }, [jwt]);

  const handleSearchChange = (event) => setSearch(event.target.value);
  const handleSearchCourseChange = (event) => setSearchCourse(event.target.value);
  const handleTraineeSearchChange = (event) => setSearchTrainee(event.target.value);
  const handleTraineeCourseChange = (event) => setSearchTraineeCourse(event.target.value);

  const handleAddToGroupClick = (user) => {
    if (!selectedUsers.find((u) => u.userName === user.userName)) {
      setSelectedUsers([...selectedUsers, user]);
    }
  };

  const handleAddTraineeToGroup = (trainee) => {
    if (!selectedTrainees.find((t) => t.userName === trainee.userName)) {
      setSelectedTrainees([...selectedTrainees, trainee]);
    }
    setShowTraineeSearch(false);
  };

  const handleRemoveFromGroupClick = (user) => {
    setSelectedUsers(selectedUsers.filter((u) => u.userName !== user.userName));
  };

  const handleRemoveTraineeFromGroupClick = (trainee) => {
    setSelectedTrainees(selectedTrainees.filter((t) => t.userName !== trainee.userName));
  };

  const handleGroupNameChange = (event) => setGroupName(event.target.value);

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
  };

  const filteredUserData = userData.filter(
    (user) =>
      user.userName?.toLowerCase().includes(search.toLowerCase()) &&
      user.email &&
      user.courses?.some((course) =>
        course.toLowerCase().includes(searchCourse.toLowerCase())
      )
  );

  const filteredTraineeData = traineeData.filter(
    (trainee) =>
      (trainee.firstName + " " + trainee.lastName)
        .toLowerCase()
        .includes(searchTrainee.toLowerCase()) &&
      trainee.courses.some((course) =>
        course.toLowerCase().includes(searchTraineeCourse.toLowerCase())
      )
  );

  return (
    <div className="bg-white min-h-screen p-8">
      {/* Header Section */}
      <div className="flex items-center mb-6">
        <img
          src={girl} // Replace with actual image URL
          alt="Admin"
          className="w-12 h-12 rounded-full  mr-3"
        />
        <h2 className=" bg-gradient-to-r from-[#2C3E50] to-[#4CA1AF]   text-transparent bg-clip-text text-lg font-semibold">Admin Name</h2>
      </div>

      {/* Buttons Section */}
      <div className="flex space-x-4 mb-6">
        <button
          className="bg-[#2C3E50] text-white font-semibold py-2 px-4 rounded"
          onClick={() => setShowGroupForm(true)}
        >
          Create Group
        </button>
        <button
          className="bg-[#2C3E50] text-white font-semibold py-2 px-4 rounded"
          onClick={() => setShowTraineeSearch(true)}
        >
          Add Trainee
        </button>
      </div>
 <div className="flex ">
      {/* Group Form and Search Section */}
      {showGroupForm && (
      <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white min-w-[420px] overflow-x-auto border-2 border-[#2C3E50] rounded-lg p-4 relative">
          <div className="flex justify-between ">
            <h1 className="text-[#2C3E50] h-12 font-semibold mb-4  p-5 text-2xl">Create Group</h1>
           <button
              className=""
              onClick={() => setShowGroupForm(false)}
            >
       <IoCloseCircle className=" text-3xl mb-6 text-[#2C3E50] " />
            </button>
            </div>
         
          <div className="p-4">
            <input
              type="text"
              placeholder="Group Name"
              value={groupName}
              onChange={handleGroupNameChange}
              className="w-full h-12 px-4 py-2 border border-[#2C3E50] rounded-md"
            />
          </div>
          {error && (
            <div className="text-#FF9B26 text-center pb-2">{error}</div>
          )}
          <div className="p-4">
            <button
              className="px-4 py-2 w-full h-12 text-white bg-gradient-to-r from-[#2C3E50] to-[#4CA1AF]   rounded-md "
              onClick={handleCreateGroup}
            >
              Save
            </button>
           </div>
          </div>
        </div>
      )}

      {/* Trainee Search Section */}
      {showTraineeSearch && (
       <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
//           <div className="bg-white min-w-[1020px] overflow-x-auto border-2 border-[#0098f1] rounded-lg p-4 relative">
           <div className="flex justify-between ">
           <h1 className=" h-12 font-semibold text-[#2C3E50] p-5 text-2xl">Add Trainee</h1>
           <button
              
              onClick={() => setShowTraineeSearch(false)}
            >
         <IoCloseCircle className=" text-3xl mb-6 text-[#2C3E50] "/>
            </button>
            </div>
          <div className="p-4 grid gap-6">
            <input
              type="text"
              placeholder="Search Trainee by name"
              value={searchTrainee}
              onChange={handleTraineeSearchChange}
              className="w-1/3 px-4 h-12 py-2 border border-[#2C3E50] rounded-md"
            />
            {/* <input
              type="text"
              placeholder="Search Trainee by course"
              value={searchTraineeCourse}
              onChange={handleTraineeCourseChange}
              className="w-full px-4 h-12 py-2 mt-2 border border-[#0098f1]  rounded-md"
            /> */}
          </div>
          <div className="p-4">
            <button
              className="px-4 py-2  text-white bg-gradient-to-r from-[#2C3E50] to-[#4CA1AF] rounded-md "
              onClick={() => setShowTraineeSearch(false)}
            >
              Save
            </button>
           </div>
          </div>
        </div>
      )}
</div>
      {/* Table Section */}
      <div className="overflow-x-auto pt-4">
      <div className="px-4 py-4 flex  gap-4">
            <input
              type="text"
              placeholder="Search by name"
              value={search}
              onChange={handleSearchChange}
              className="w-1/4 h-12 px-4 py-2 border border-[#2C3E50] rounded-md"
            />
            <input
              type="text"
              placeholder="Search by course"
              value={searchCourse}
              onChange={handleSearchCourseChange}
              className="w-1/4 h-12 px-4 py-2  border border-[#2C3E50] rounded-md"
            />
          </div>
        <table className="min-w-full border-collapse border border-gray-300 text-start">
          <thead>
            <tr className="bg-[#2C3E50] text-white">
              <th className="py-3 px-6 border border-gray-300">Name</th>
              <th className="py-3 px-6 border border-gray-300">Course</th>
              <th className="py-3 px-6 border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUserData.map((user) => (
              <tr key={user.userName}>
                <td className="py-3 px-6 border border-gray-300">
                  {user.userName}
                </td>
                <td className="py-3 px-6 border border-gray-300">
                  {user.courses.join(", ")}
                </td>
                <td className="py-3 px-6 border border-gray-300">
                  <button
                    className="text-bg-gradient-to-r from-[#2C3E50] to-[#4CA1AF] text-white font-semibold hover:underline"
                    onClick={() => handleAddToGroupClick(user)}
                  >
                    Add to Group
                  </button>
                </td>
              </tr>
            ))}
            {filteredTraineeData.map((trainee) => (
              <tr key={trainee.userName}>
                <td className="py-3 px-6 border border-[#2C3E50]">
                  {trainee.firstName} {trainee.lastName}
                </td>
                <td className="py-3 px-6 border border-[#2C3E50]">
                  {trainee.courses.join(", ")}
                </td>
                <td className="py-3 px-6 border border-[#2C3E50]">
                  <button
                    className="bg-gradient-to-r from-[#2C3E50] to-[#4CA1AF]  text-white font-semibold hover:underline"
                    onClick={() => handleAddTraineeToGroup(trainee)}
                  >
                    Add to Group
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersRolesTable;



//over lay code
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import girl from "../../assetss/Home/Admin.png";
// import { IoCloseCircle } from "react-icons/io5";

// function UsersRolesTable() {
//   const [search, setSearch] = useState("");
//   const [searchCourse, setSearchCourse] = useState("");
//   const [searchTrainee, setSearchTrainee] = useState("");
//   const [searchTraineeCourse, setSearchTraineeCourse] = useState("");
//   const [selectedUsers, setSelectedUsers] = useState([]);
//   const [selectedTrainees, setSelectedTrainees] = useState([]);
//   const [groupName, setGroupName] = useState("");
//   const [error, setError] = useState("");
//   const [showTraineeSearch, setShowTraineeSearch] = useState(false);
//   const [showGroupForm, setShowGroupForm] = useState(false);
//   const [userData, setUserData] = useState([]);
//   const [traineeData, setTraineeData] = useState([]);
//   const navigate = useNavigate();
//   const jwt = localStorage.getItem("jwt");

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/api/payment/user-courses", {
//         headers: {
//           Authorization: `Bearer ${jwt}`,
//         },
//       })
//       .then((response) => {
//         if (Array.isArray(response.data)) {
//           setUserData(response.data);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching user data:", error);
//       });
//   }, [jwt]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/trainee/getAllTrainee", {
//         headers: {
//           Authorization: `Bearer ${jwt}`,
//         },
//       })
//       .then((response) => {
//         if (Array.isArray(response.data)) {
//           setTraineeData(response.data);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching trainee data:", error);
//       });
//   }, [jwt]);

//   const handleSearchChange = (event) => setSearch(event.target.value);
//   const handleSearchCourseChange = (event) =>
//     setSearchCourse(event.target.value);
//   const handleTraineeSearchChange = (event) =>
//     setSearchTrainee(event.target.value);
//   const handleTraineeCourseChange = (event) =>
//     setSearchTraineeCourse(event.target.value);

//   const handleAddToGroupClick = (user) => {
//     if (!selectedUsers.find((u) => u.userName === user.userName)) {
//       setSelectedUsers([...selectedUsers, user]);
//     }
//   };

//   const handleAddTraineeToGroup = (trainee) => {
//     if (!selectedTrainees.find((t) => t.userName === trainee.userName)) {
//       setSelectedTrainees([...selectedTrainees, trainee]);
//     }
//     setShowTraineeSearch(false);
//   };

//   const handleRemoveFromGroupClick = (user) => {
//     setSelectedUsers(selectedUsers.filter((u) => u.userName !== user.userName));
//   };

//   const handleRemoveTraineeFromGroupClick = (trainee) => {
//     setSelectedTrainees(
//       selectedTrainees.filter((t) => t.userName !== trainee.userName)
//     );
//   };

//   const handleGroupNameChange = (event) => setGroupName(event.target.value);

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
//     navigate("/admin/users/existing-group");
//   };

//   const filteredUserData = userData.filter(
//     (user) =>
//       user.userName?.toLowerCase().includes(search.toLowerCase()) &&
//       user.email &&
//       user.courses?.some((course) =>
//         course.toLowerCase().includes(searchCourse.toLowerCase())
//       )
//   );

//   const filteredTraineeData = traineeData.filter(
//     (trainee) =>
//       (trainee.firstName + " " + trainee.lastName)
//         .toLowerCase()
//         .includes(searchTrainee.toLowerCase()) &&
//       trainee.courses.some((course) =>
//         course.toLowerCase().includes(searchTraineeCourse.toLowerCase())
//       )
//   );

//   return (
//     <div className="bg-white min-h-screen p-8 relative">
//       {/* Header Section */}
//       <div className="flex items-center mb-6">
//         <img
//           src={girl} // Replace with actual image URL
//           alt="Admin"
//           className="w-12 h-12 rounded-full border-4 border-[#0098f1] mr-3"
//         />
//         <h2 className="text-blue-400 text-lg font-semibold">Admin Name</h2>
//       </div>

//       {/* Buttons Section */}
//       <div className="flex space-x-4 mb-6">
//         <button
//           className="bg-[#0098f1] text-white font-semibold py-2 px-4 rounded"
//           onClick={() => setShowGroupForm(true)}
//         >
//           Create Group
//         </button>
//         <button
//           className="bg-[#0098f1] text-white font-semibold py-2 px-4 rounded"
//           onClick={() => setShowTraineeSearch(true)}
//         >
//           Add Trainee
//         </button>
//       </div>

//       {/* Group Form Modal Overlay */}
//       {showGroupForm && (
//         <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
//           <div className="bg-white max-w-[420px] overflow-x-auto border-2 border-[#0098f1] rounded-lg p-4 relative">
//             <div className="flex justify-between items-center mb-4">
//               <h1 className="text-[#0098f1] font-semibold text-2xl">
//                 Create Group
//               </h1>
//               <button onClick={() => setShowGroupForm(false)}>
//                 <IoCloseCircle className="text-3xl text-[#0098f1]" />
//               </button>
//             </div>
//             <input
//               type="text"
//               placeholder="Search by name"
//               value={search}
//               onChange={handleSearchChange}
//               className="w-full h-12 px-4 py-2 border border-[#0098f1] rounded-md mb-2"
//             />
//             <input
//               type="text"
//               placeholder="Search by course"
//               value={searchCourse}
//               onChange={handleSearchCourseChange}
//               className="w-full h-12 px-4 py-2 border border-[#0098f1] rounded-md mb-4"
//             />
//             <input
//               type="text"
//               placeholder="Group Name"
//               value={groupName}
//               onChange={handleGroupNameChange}
//               className="w-full h-12 px-4 py-2 border border-[#0098f1] rounded-md mb-4"
//             />
//             {error && <div className="text-red-500 text-center mb-2">{error}</div>}
//             <button
//               className="w-full h-12 text-white bg-[#0098f1] rounded-md"
//               onClick={handleCreateGroup}
//             >
//               Save Group
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Trainee Search Modal Overlay */}
//       {showTraineeSearch && (
//         <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
//           <div className="bg-white min-w-[420px] overflow-x-auto border-2 border-[#0098f1] rounded-lg p-4 relative">
//             <div className="flex justify-between items-center mb-4">
//               <h1 className="text-[#0098f1] font-semibold text-2xl">
//                 Add Trainee
//               </h1>
//               <button onClick={() => setShowTraineeSearch(false)}>
//                 <IoCloseCircle className="text-3xl text-[#0098f1]" />
//               </button>
//             </div>
//             <input
//               type="text"
//               placeholder="Search Trainee by name"
//               value={searchTrainee}
//               onChange={handleTraineeSearchChange}
//               className="w-full h-12 px-4 py-2 border border-[#0098f1] rounded-md mb-2"
//             />
//             <input
//               type="text"
//               placeholder="Search Trainee by course"
//               value={searchTraineeCourse}
//               onChange={handleTraineeCourseChange}
//               className="w-full h-12 px-4 py-2 border border-[#0098f1] rounded-md mb-4"
//             />
//             <div className="space-y-4">
//               {filteredTraineeData.map((trainee) => (
//                 <div
//                   key={trainee.userName}
//                   className="flex justify-between items-center"
//                 >
//                   <p className="text-gray-700">{trainee.firstName} {trainee.lastName}</p>
//                   <button
//                     className="text-blue-500"
//                     onClick={() => handleAddTraineeToGroup(trainee)}
//                   >
//                     Add
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* User Table Section */}
//       <div className="overflow-x-auto border border-[#0098f1] rounded-lg">
//         <table className="min-w-full bg-white">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border-b text-left">User Name</th>
//               <th className="py-2 px-4 border-b text-left">Email</th>
//               <th className="py-2 px-4 border-b text-left">Courses</th>
//               <th className="py-2 px-4 border-b text-left">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredUserData.map((user) => (
//               <tr key={user.userName}>
//                 <td className="py-2 px-4 border-b">{user.userName}</td>
//                 <td className="py-2 px-4 border-b">{user.email}</td>
//                 <td className="py-2 px-4 border-b">
//                   {user.courses.join(", ")}
//                 </td>
//                 <td className="py-2 px-4 border-b">
//                   <button
//                     className="text-blue-500"
//                     onClick={() => handleAddToGroupClick(user)}
//                   >
//                     Add
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default UsersRolesTable;



















// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function UsersRolesTable() {
//   const [search, setSearch] = useState("");
//   const [searchCourse, setSearchCourse] = useState("");
//   const [searchTrainee, setSearchTrainee] = useState("");
//   const [selectedUsers, setSelectedUsers] = useState([]);
//   const [selectedTrainees, setSelectedTrainees] = useState([]);
//   const [groupName, setGroupName] = useState("");
//   const [error, setError] = useState("");
//   const [showTraineeSearch, setShowTraineeSearch] = useState(false);
//   const [showGroupForm, setShowGroupForm] = useState(false);
//   const [userData, setUserData] = useState([]);
//   const [traineeData, setTraineeData] = useState([]);
//   const navigate = useNavigate();
//   const jwt = localStorage.getItem("jwt");

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/api/payment/user-courses", {
//         headers: {
//           Authorization: `Bearer ${jwt}`,
//         },
//       })
//       .then((response) => {
//         if (Array.isArray(response.data)) {
//           setUserData(response.data);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching user data:", error);
//       });
//   }, [jwt]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/trainee/getAllTrainee", {
//         headers: {
//           Authorization: `Bearer ${jwt}`,
//         },
//       })
//       .then((response) => {
//         if (Array.isArray(response.data)) {
//           setTraineeData(response.data);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching trainee data:", error);
//       });
//   }, [jwt]);

//   const handleSearchChange = (event) => setSearch(event.target.value);
//   const handleSearchCourseChange = (event) => setSearchCourse(event.target.value);
//   const handleTraineeSearchChange = (event) => setSearchTrainee(event.target.value);

//   const handleAddToGroupClick = (user) => {
//     if (!selectedUsers.find((u) => u.userName === user.userName)) {
//       setSelectedUsers([...selectedUsers, user]);
//     }
//   };

//   const handleAddTraineeToGroup = (trainee) => {
//     if (!selectedTrainees.find((t) => t.userName === trainee.userName)) {
//       setSelectedTrainees([...selectedTrainees, trainee]);
//     }
//     setShowTraineeSearch(false);
//   };

//   const handleRemoveFromGroupClick = (user) => {
//     setSelectedUsers(selectedUsers.filter((u) => u.userName !== user.userName));
//   };

//   const handleRemoveTraineeFromGroupClick = (trainee) => {
//     setSelectedTrainees(selectedTrainees.filter((t) => t.userName !== trainee.userName));
//   };

//   const handleGroupNameChange = (event) => setGroupName(event.target.value);

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
//     navigate("/admin/users/existing-group");
//   };

//   const filteredUserData = userData.filter(
//     (user) =>
//       user.userName?.toLowerCase().includes(search.toLowerCase()) &&
//       user.email &&
//       user.courses?.some((course) =>
//         course.toLowerCase().includes(searchCourse.toLowerCase())
//       )
//   );

//   const filteredTraineeData = traineeData.filter((trainee) =>
//     (trainee.firstName + " " + trainee.lastName)
//       .toLowerCase()
//       .includes(searchTrainee.toLowerCase())
//   );

//   return (
//     <div className="bg-white min-h-screen p-8">
//       {/* Header Section */}
//       <div className="flex items-center mb-6">
//         <img
//           src="profile-image-url.jpg" // Replace with actual image URL
//           alt="Admin"
//           className="w-12 h-12 rounded-full mr-3"
//         />
//         <h2 className="text-blue-400 text-lg font-semibold">Admin Name</h2>
//       </div>

//       {/* Buttons Section */}
//       <div className="flex space-x-4 mb-6">
//         <button
//           className="bg-[#0098f1] text-white font-semibold py-2 px-4 rounded"
//           onClick={() => setShowGroupForm(true)}
//         >
//           Create Group
//         </button>
//         <button
//           className="bg-[#0098f1] text-white font-semibold py-2 px-4 rounded"
//           onClick={() => setShowTraineeSearch(true)}
//         >
//           Add Trainee
//         </button>
//       </div>

//       {/* Group Form and Search Section */}
//       {showGroupForm && (
//         <div className="min-w-full overflow-x-auto rounded-lg">
//           <div className="p-4">
//             <input
//               type="text"
//               placeholder="Search by name"
//               value={search}
//               onChange={handleSearchChange}
//               className="w-96 px-4 py-2 border border-gray-300 rounded-md"
//             />
//             <input
//               type="text"
//               placeholder="Search by course"
//               value={searchCourse}
//               onChange={handleSearchCourseChange}
//               className="w-96 px-4 py-2 mt-2 border border-gray-300 rounded-md"
//             />
//           </div>
//           <div className="p-4">
//             <input
//               type="text"
//               placeholder="Group Name"
//               value={groupName}
//               onChange={handleGroupNameChange}
//               className="w-96 px-4 py-2 border border-gray-300 rounded-md"
//             />
//           </div>
//           {error && (
//             <div className="text-red-500 text-center pb-2">{error}</div>
//           )}
//           <div className="p-4">
//             <button
//               className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
//               onClick={handleCreateGroup}
//             >
//               Save Group
//             </button>
//             <button
//               className="ml-4 px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
//               onClick={() => setShowGroupForm(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Table Section */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full border-collapse border border-gray-300 text-center">
//           <thead>
//             <tr className="bg-[#0098f1] text-white">
//               <th className="py-3 px-6 border border-gray-300">Name</th>
//               <th className="py-3 px-6 border border-gray-300">Course</th>
//               <th className="py-3 px-6 border border-gray-300">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredUserData.map((user) => (
//               <tr key={user.userName} className="hover:bg-gray-100 border-b border-gray-300">
//                 <td className="py-3 px-6 border border-gray-300">{user.userName}</td>
//                 <td className="py-3 px-6 border border-gray-300">{user.courses}</td>
//                 <td className="py-3 px-6 border border-gray-300">
//                   <button
//                     className="bg-[#0098f1] text-white font-semibold py-1 px-4 rounded-full"
//                     onClick={() => handleAddToGroupClick(user)}
//                   >
//                     Add To Group
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default UsersRolesTable;




