




import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import girl from "../../assetss/Home/Admin.png"
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

      {/* Buttons Section */}
      <div className=" grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 sm:space-x-4 p-4 space-x-0">
        <button
          className="bg-[#001510] max-w-64 h-12 text-white font-semibold py-2 px-4 rounded"
          onClick={() => setShowGroupForm(true)}
        >
          Create Group
        </button>
        <button
          className="bg-[#001510] max-w-64 h-12  text-white font-semibold py-2 px-4 rounded"
          onClick={() => setShowTraineeSearch(true)}
        >
          Add Trainee
        </button>
      </div>
 <div className="flex ">
      {/* Group Form and Search Section */}
      {showGroupForm && (
      <div className="fixed inset-0 bg-black/50 flex  justify-center items-center z-50">
          <div className="bg-white lg:min-w-[640px]  overflow-x-auto border-2 border-[#001510]  rounded-lg p-4 relative">
          <div className="flex justify-between ">
            <h1 className="text-[#001510] [#2C3E50] h-12 font-semibold mb-4  p-5 text-2xl">Create Group</h1>
           <button
              className=""
              onClick={() => setShowGroupForm(false)}
            >
       <IoCloseCircle className=" text-3xl mb-6 text-[#001510]  " />
            </button>
            </div>
          <div className="p-4">
            <input
              type="text"
              placeholder="Group Name"
              value={groupName}
              onChange={handleGroupNameChange}
              className="w-1/3 h-12 px-4 py-2 border border-[#001510]  rounded-md"
            />
          </div>
          {error && (
            <div className="text-#FF9B26 text-center pb-2">{error}</div>
          )}
          <div className="p-4">
            <button
              className="px-4 py-2  h-12 text-white bg-gradient-to-r from-[#00BF8F] to-[#001510]    rounded-md "
              onClick={handleCreateGroup}>
              Save
            </button>
           </div>
          </div>
        </div>
      )}
      {/* Trainee Search Section */}
      {showTraineeSearch && (
       <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white lg:min-w-[640px] overflow-x-auto border-2 border-[#0098f1] rounded-lg p-4 relative">
           <div className="flex justify-between ">
           <h1 className=" h-12 font-semibold text-[#001510] p-5 text-2xl">Add Trainee</h1>
           <button
              
              onClick={() => setShowTraineeSearch(false)}
            >
         <IoCloseCircle className=" text-3xl mb-6 text-[#001510] "/>
            </button>
            </div>
          <div className="p-4 grid gap-6">
            <input
              type="text"
              placeholder="Search Trainee by name"
              value={searchTrainee}
              onChange={handleTraineeSearchChange}
              className="w-1/3 px-4 h-12 py-2 border border-[#001510] rounded-md"
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
              className="px-4 py-2  text-white bg-gradient-to-r from-[#00BF8F] to-[#001510] rounded-md "
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
      <div className="overflow-x-auto ">
      <div className="sm:grid-cols-2 lg:grid-cols-4 grid grid-cols-1 p-4  gap-4 sm:space-x-4 space-x-0">
            <input
              type="text"
              placeholder="Search by name"
              value={search}
              onChange={handleSearchChange}
              className=" w-auto h-12 px-4 py-2 border border-[#001510] rounded-md"
            />
            <input
              type="text"
              placeholder="Search by course"
              value={searchCourse}
              onChange={handleSearchCourseChange}
              className=" w-auto h-12 px-4 py-2  border border-[#001510] rounded-md"
            />
          </div>
        <table className="min-w-full border-collapse border border-gray-300 text-start">
          <thead>
            <tr className="bg-[#001510] text-white">
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
                    className="text-bg-gradient-to-r from-[#00BF8F] to-[#001510] text-white font-semibold hover:underline"
                    onClick={() => handleAddToGroupClick(user)}
                  >
                    Add to Group
                  </button>
                </td>
              </tr>
            ))}
            {filteredTraineeData.map((trainee) => (
              <tr key={trainee.userName}>
                <td className="py-3 px-6 border border-[#001510]">
                  {trainee.firstName} {trainee.lastName}
                </td>
                <td className="py-3 px-6 border border-[#001510]">
                  {trainee.courses.join(", ")}
                </td>
                <td className="py-3 px-6 border border-[#001510]">
                  <button
                    className="bg-gradient-to-r from-[#00BF8F] to-[#001510]  text-white font-semibold hover:underline"
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




