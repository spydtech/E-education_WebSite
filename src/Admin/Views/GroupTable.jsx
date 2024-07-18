// import React, { useState } from "react";
// import { userData, traineeData } from "./FilterUsers";

// function GroupTable({ users, onRemoveUser, onAddUser, trainees }) {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showTraineeDetails, setShowTraineeDetails] = useState(false);
//   const [showUserDetails, setShowUserDetails] = useState(false);
//   const [selectedTrainee, setSelectedTrainee] = useState(null);
//   const [traineeSearchQuery, setTraineeSearchQuery] = useState("");
//   const [userSearchQuery, setUserSearchQuery] = useState("");
//   const [userSearchQueryByCourse, setUserSearchQueryByCourse] = useState("");

//   const traineeName = trainees.map((trainee) => (
//     <tr key={trainee.name} className="border-b hover:bg-gray-100">
//       <td className="whitespace-nowrap">
//         <div className="flex items-center">
//           <div className="ml-4 flex">
//             <span className="px-2 py-1 bg-gray-100 rounded-md">
//               {trainee.name}
//             </span>
//           </div>
//         </div>
//       </td>
//     </tr>
//   ));

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleTraineeSearchChange = (event) => {
//     setTraineeSearchQuery(event.target.value);
//   };

//   const handleUserSearchChange = (event) => {
//     setUserSearchQuery(event.target.value);
//   };

//   const handleUserSearchChangeByCourse = (event) => {
//     setUserSearchQueryByCourse(event.target.value);
//   };

//   const handleRemoveUser = (user) => {
//     onRemoveUser(user);
//   };

//   const showTraineeDetailsModal = () => {
//     setShowTraineeDetails(true);
//   };

//   const closeTraineeDetailsModal = () => {
//     setShowTraineeDetails(false);
//   };

//   const showUserDetailsModal = () => {
//     setShowUserDetails(true);
//   };

//   const closeUserDetailsModal = () => {
//     setShowUserDetails(false);
//   };

//   const setTrainee = (trainee) => {
//     setSelectedTrainee(trainee.name);
//     setShowTraineeDetails(false);
//   };

//   const handleAddUser = (user) => {
//     onAddUser(user);
//     closeUserDetailsModal();
//   };

//   const filteredUsers = users.filter((user) =>
//     user.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const filteredTrainees = traineeData.filter((trainee) =>
//     trainee.name.toLowerCase().includes(traineeSearchQuery.toLowerCase())
//   );
//   // .filter(
//   //   (trainee) =>
//   //     !trainees.some((groupTrainee) => groupTrainee.name === trainee.name)
//   // );

//   const filteredAddUsers = userData
//     .filter(
//       (user) =>
//         user.name.toLowerCase().includes(userSearchQuery.toLowerCase()) &&
//         user.course
//           .toLowerCase()
//           .includes(userSearchQueryByCourse.toLowerCase())
//     )
//     .filter((user) => !users.some((groupUser) => groupUser.name === user.name));

//   const traineeRows = filteredTrainees.map((trainee) => (
//     <tr key={trainee.name} className="border-b hover:bg-gray-100 ">
//       <td className="px-6 py-4 whitespace-nowrap">
//         <div className="flex items-center">
//           <img
//             className="h-10 w-10 rounded-full"
//             src={trainee.avatar}
//             alt={`Avatar of ${trainee.name}`}
//           />
//           <div className="ml-4">
//             <div className="text-sm font-medium text-gray-900">
//               {trainee.name}
//             </div>
//             <div className="text-sm text-gray-500">{trainee.email}</div>
//           </div>
//         </div>
//       </td>
//       <td className="px-6 py-4 whitespace-nowrap">
//         <button
//           className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
//           onClick={() => setTrainee(trainee)}
//         >
//           Set as Trainee
//         </button>
//       </td>
//     </tr>
//   ));

//   const userRows = filteredAddUsers.map((user) => (
//     <tr key={user.name} className="border-b hover:bg-gray-100 ">
//       <td className="px-6 py-4 whitespace-nowrap">
//         <div className="flex items-center">
//           <img
//             className="h-10 w-10 rounded-full"
//             src={user.avatar}
//             alt={`Avatar of ${user.name}`}
//           />
//           <div className="ml-4">
//             <div className="text-sm font-medium text-gray-900">{user.name}</div>
//             <div className="text-sm text-gray-500">{user.email}</div>
//           </div>
//         </div>
//       </td>
//       <td className="px-6 py-4 whitespace-nowrap">{user.course}</td>
//       <td className="px-6 py-4 whitespace-nowrap">
//         <button
//           className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
//           onClick={() => handleAddUser(user)}
//         >
//           Add user to group
//         </button>
//       </td>
//     </tr>
//   ));

//   const rows = filteredUsers.map((user) => (
//     <tr key={user.name} className="border-b hover:bg-gray-100 ">
//       <td className="px-6 py-4 whitespace-nowrap">
//         <div className="flex items-center">
//           <img
//             className="h-10 w-10 rounded-full"
//             src={user.avatar}
//             alt={`Avatar of ${user.name}`}
//           />
//           <div className="ml-4">
//             <div className="text-sm font-medium text-gray-900">{user.name}</div>
//             <div className="text-sm text-gray-500">{user.email}</div>
//           </div>
//         </div>
//       </td>
//       <td className="px-6 py-4 whitespace-nowrap">
//         <div className="text-sm text-gray-900">{user.course}</div>
//       </td>
//       <td className="px-6 py-4 whitespace-nowrap">
//         <button
//           className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
//           onClick={() => handleRemoveUser(user)}
//         >
//           Remove User
//         </button>
//       </td>
//     </tr>
//   ));

//   return (
//     <div className="overflow-x-auto">
//       <div className="min-w-full overflow-hidden rounded-lg">
//         <div className="flex flex-col md:flex-row justify-between m-3 space-y-3 md:space-y-0">
//           <input
//             type="text"
//             placeholder="Search by name"
//             value={searchQuery}
//             onChange={handleSearchChange}
//             className="px-4 py-2 border border-gray-300 rounded-md"
//           />

//           <div className="flex items-center space-x-2">
//             <span className="text-gray-500">Trainee:</span>
//             <span className="px-2 py-1 bg-gray-100 rounded-md">
//               {selectedTrainee ? selectedTrainee : traineeName}
//             </span>
//           </div>
//           <button
//             className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
//             onClick={showTraineeDetailsModal}
//           >
//             Update Trainee
//           </button>
//           <button
//             className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
//             onClick={showUserDetailsModal}
//           >
//             Add User
//           </button>
//         </div>

//         {/* Update Trainee Modal */}
//         {showTraineeDetails && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-500 bg-opacity-50">
//             <div className="bg-white rounded-lg p-6 w-full max-w-3xl max-h-screen overflow-y-auto">
//               <h2 className="text-lg font-medium text-gray-800 mb-4">
//                 Select Trainee
//               </h2>
//               <input
//                 type="text"
//                 placeholder="Search Trainee by name"
//                 value={traineeSearchQuery}
//                 onChange={handleTraineeSearchChange}
//                 className="px-4 py-2 border border-gray-300 rounded-md mb-4"
//               />
//               <table className="min-w-full bg-white divide-y divide-gray-200">
//                 <thead>
//                   <tr>
//                     <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Name
//                     </th>
//                     <th className="px-6 py-3 bg-gray-50"></th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {traineeRows}
//                 </tbody>
//               </table>
//               <div className="mt-4 flex justify-end">
//                 <button
//                   className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600"
//                   onClick={closeTraineeDetailsModal}
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Add User Modal */}
//         {showUserDetails && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-500 bg-opacity-50">
//             <div className="bg-white rounded-lg p-6 w-full max-w-3xl max-h-screen overflow-y-auto">
//               <h2 className="text-lg font-medium text-gray-800 mb-4">
//                 Select User to Add
//               </h2>
//               <input
//                 type="text"
//                 placeholder="Search User by name"
//                 value={userSearchQuery}
//                 onChange={handleUserSearchChange}
//                 className="px-4 py-2 border border-gray-300 rounded-md mb-4"
//               />
//               <input
//                 type="text"
//                 placeholder="Search User by Course"
//                 value={userSearchQueryByCourse}
//                 onChange={handleUserSearchChangeByCourse}
//                 className="px-4 float-end py-2 border border-gray-300 rounded-md mb-4"
//               />
//               <table className="min-w-full bg-white divide-y divide-gray-200">
//                 <thead>
//                   <tr>
//                     <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Name
//                     </th>
//                     <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Course
//                     </th>
//                     <th className="px-6 py-3 bg-gray-50"></th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {userRows}
//                 </tbody>
//               </table>
//               <div className="mt-4 flex justify-end">
//                 <button
//                   className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600"
//                   onClick={closeUserDetailsModal}
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         <table className="min-w-full bg-white divide-y divide-gray-200">
//           <thead>
//             <tr>
//               <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Name
//               </th>
//               <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Course
//               </th>
//               <th className="px-6 py-3 bg-gray-50"></th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">{rows}</tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default GroupTable;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
// import { userData, traineeData } from "./FilterUsers";

function GroupTable({ users, onRemoveUser, onAddUser, trainees }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showTraineeDetails, setShowTraineeDetails] = useState(false);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [selectedTrainee, setSelectedTrainee] = useState(null);
  const [traineeSearchQuery, setTraineeSearchQuery] = useState("");
  const [userSearchQuery, setUserSearchQuery] = useState("");
  const [userSearchQueryByCourse, setUserSearchQueryByCourse] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [userData, setUserData] = useState([])

  const traineeName = trainees.map((trainee) => (
    <tr key={trainee.name} className="border-b hover:bg-gray-100">
      <td className="whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-4 flex">
            <span className="px-2 py-1 bg-gray-100 rounded-md">
              {trainee.name}
            </span>
          </div>
        </div>
      </td>
    </tr>
  ));

  useEffect(() => {
    // Fetch user data on component mount
    axios.get("http://localhost:8080/api/payment/user-courses")
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the user data!", error);
      });
  }, []);

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
      (existingTrainee) => existingTrainee.name === trainee.name
    );
    if (traineeExists) {
      setShowWarning(true);
    } else {
      setSelectedTrainee(trainee.name);
      setShowTraineeDetails(false);
      setShowWarning(false);
    }
  };

  const handleAddUser = (user) => {
    onAddUser(user);
    closeUserDetailsModal();
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // const filteredTrainees = userData.filter((trainee) =>
  //   trainee.name.toLowerCase().includes(traineeSearchQuery.toLowerCase())
  // );

  const filteredAddUsers = userData
    .filter(
      (user) =>
        user.name.toLowerCase().includes(userSearchQuery.toLowerCase()) &&
        user.course
          .toLowerCase()
          .includes(userSearchQueryByCourse.toLowerCase())
    )
    .filter((user) => !users.some((groupUser) => groupUser.name === user.name));

  // const traineeRows = filteredTrainees.map((trainee) => (
  //   <tr key={trainee.name} className="border-b hover:bg-gray-100 ">
  //     <td className="px-6 py-4 whitespace-nowrap">
  //       <div className="flex items-center">
  //         <img
  //           className="h-10 w-10 rounded-full"
  //           src={trainee.avatar}
  //           alt={`Avatar of ${trainee.name}`}
  //         />
  //         <div className="ml-4">
  //           <div className="text-sm font-medium text-gray-900">
  //             {trainee.name}
  //           </div>
  //           <div className="text-sm text-gray-500">{trainee.email}</div>
  //         </div>
  //       </div>
  //     </td>
  //     <td className="px-6 py-4 whitespace-nowrap">
  //       <button
  //         className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
  //         onClick={() => setTrainee(trainee)}
  //       >
  //         Set as Trainee
  //       </button>
  //     </td>
  //   </tr>
  // ));

  const userRows = filteredAddUsers.map((user) => (
    <tr key={user.name} className="border-b hover:bg-gray-100 ">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <img
            className="h-10 w-10 rounded-full"
            src={user.avatar}
            alt={`Avatar of ${user.name}`}
          />
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{user.name}</div>
            <div className="text-sm text-gray-500">{user.email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">{user.course}</td>
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
    <tr key={user.name} className="border-b hover:bg-gray-100 ">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <img
            className="h-10 w-10 rounded-full"
            src={user.avatar}
            alt={`Avatar of ${user.name}`}
          />
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{user.name}</div>
            <div className="text-sm text-gray-500">{user.email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{user.course}</div>
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
            <span className="text-gray-500">Trainee:</span>
            <span className="px-2 py-1 bg-gray-100 rounded-md">
              {selectedTrainee ? selectedTrainee : traineeName}
            </span>
          </div>
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            onClick={showTraineeDetailsModal}
          >
            Update Trainee
          </button>
          <button
            className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
            onClick={showUserDetailsModal}
          >
            Add User
          </button>
        </div>

        {/* Update Trainee Modal */}
        {showTraineeDetails && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-3xl max-h-screen overflow-y-auto">
              <h2 className="text-lg font-medium text-gray-800 mb-4">
                Select Trainee
              </h2>
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
              <table className="min-w-full bg-white divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 bg-gray-50"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* {traineeRows} */}
                </tbody>
              </table>
              <div className="mt-4 flex justify-end">
                <button
                  className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600"
                  onClick={closeTraineeDetailsModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Add User Modal */}
        {showUserDetails && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-3xl max-h-screen overflow-y-auto">
              <h2 className="text-lg font-medium text-gray-800 mb-4">
                Select User to Add
              </h2>
              <input
                type="text"
                placeholder="Search User by name"
                value={userSearchQuery}
                onChange={handleUserSearchChange}
                className="px-4 py-2 border border-gray-300 rounded-md mb-4"
              />
              <input
                type="text"
                placeholder="Search User by Course"
                value={userSearchQueryByCourse}
                onChange={handleUserSearchChangeByCourse}
                className="px-4 float-end py-2 border border-gray-300 rounded-md mb-4"
              />
              <table className="min-w-full bg-white divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Course
                    </th>
                    <th className="px-6 py-3 bg-gray-50"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {userRows}
                </tbody>
              </table>
              <div className="mt-4 flex justify-end">
                <button
                  className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600"
                  onClick={closeUserDetailsModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <table className="min-w-full bg-white divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Course
              </th>
              <th className="px-6 py-3 bg-gray-50"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">{rows}</tbody>
        </table>
      </div>
    </div>
  );
}

export default GroupTable;
