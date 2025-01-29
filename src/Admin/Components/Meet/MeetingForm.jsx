import React, { useState, useEffect } from "react";
// import girl from "../../../assetss/Home/Admin.png";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from "../../../State/Auth/Action";

const MeetingForm = ({ addMeeting, meetings }) => {
  const [title, setTitle] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showMeetOptions, setShowMeetOptions] = useState(false);
  const [showMeetings, setShowMeetings] = useState(false);
  const { groupName: locationGroupName, users: locationUsers } = location.state || {};
   const [loading, setLoading] = useState(true); 
   const [error, setError] = useState("");

    const jwt = localStorage.getItem("jwt");
     const auth = useSelector((state) => state.auth);
   
     const dispatch = useDispatch();




  useEffect(() => {
      const fetchGroups = async () => {
        try {
          setLoading(true);
          const response = await fetch("http://localhost:8080/chat-groups");
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
          console.log(formattedGroups);
          setError("");
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchGroups();
    }, []);

  const generateMeetingLink = (title) => {
    const baseLink = "https://meet.jit.si/spydtech/";
    const meetingId = encodeURIComponent(title.trim().replace(/\s+/g, "-"));
    return `${baseLink}${meetingId}`;
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const link = generateMeetingLink(title);
  //   const meeting = {
  //     title,
  //     fromDate,
  //     toDate,
  //     fromTime,
  //     toTime,
  //     link,
  //     groupname: selectedGroup,
  //     phone: "(US) +1 406-838-3066", // Example data, replace with real
  //     pin: "235 386 172#", // Example data, replace with real
  //     organizer: "Admin Name", // Example data, replace with real
  //     guests: ["Aketi Noble Krishna Swamy", "Jagadeesh Komuravelli"], // Example guest data
  //   };
  //   addMeeting(meeting);
  //   setTitle("");
  //   setFromDate("");
  //   setToDate("");
  //   setFromTime("");
  //   setToTime("");
  //   setSelectedGroup("");
  //   setShowForm(false);
  //   setShowMeetOptions(false);
  // };



  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if all required fields are filled
    if (!title || !fromDate || !toDate || !fromTime || !toTime || !selectedGroup) {
      setError("Please fill in all the required fields.");
      return;
    }
  
    // Check if the selected group exists in the list of available groups
    const groupExists = groups.some(group => group.groupName === selectedGroup);
  
    if (!groupExists) {
      setError(`The selected group "${selectedGroup}" does not exist.`);
      return;
    }
  
    // Generate the meeting link
    const link = generateMeetingLink(title);
  
    // Create the meeting object
    const meeting = {
      title,
      fromDate,
      toDate,
      fromTime,
      toTime,
      link,
      groupName: selectedGroup,
      phone: "(US) +1 406-838-3066",
      pin: "235 386 172#",
      organizer: Admin,  // Admin's name, fetched from state or user context
      guests: ["Guest1", "Guest2"], // Example guest data
    };
  
    // Get JWT token from localStorage
    const jwt = localStorage.getItem("jwt");
  
    if (!jwt) {
      setError("No authentication token found. Please log in.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:8080/meeting/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${jwt}`, // Add JWT token here
        },
        body: JSON.stringify(meeting), // Send the meeting data in the request body
      });
  
      console.log("Meeting payload being sent:", meeting);
  
      if (!response.ok) {
        const responseData = await response.json();
        console.error("Error response body:", responseData);
        throw new Error(`Error saving meeting: ${responseData.error || response.statusText}`);
      }
  
      const savedMeeting = await response.json();
      console.log("Meeting saved successfully:", savedMeeting);
  
      if (savedMeeting.status === false) {
        setError(savedMeeting.message || "An error occurred while saving the meeting.");
        return;
      }
  
      // Add the new meeting to the list (assuming you have a function for this)
      addMeeting(savedMeeting.payload);  // Assuming the payload contains the meeting details
  
      // Reset form fields after successful submission
      setTitle("");
      setFromDate("");
      setToDate("");
      setFromTime("");
      setToTime("");
      setSelectedGroup("");
      setError("");
      setShowForm(false);
      setShowMeetOptions(false);
    } catch (error) {
      console.error("An error occurred:", error.message);
      setError(error.message || "An unknown error occurred while saving the meeting.");
    }
  };
  
  



  
   useEffect(() => {
      if (jwt) {
          dispatch(getUser(jwt));
      }
  }, [jwt, dispatch]);

  const Admin = auth.user ? `${auth.user.firstName} ${auth.user.lastName}` : "Unknown Admin";


  

  
  const toggleMeetOptions = () => {
    setShowMeetOptions(!showMeetOptions);
    setShowForm(false);
    setShowMeetings(false);
  };

  const openForm = () => {
    setShowForm(true);
    setShowMeetings(false);
  };

  const openMeetings = () => {
    setShowMeetings(true);
    setShowForm(false);
  };
  const themes= localStorage.getItem("theme");
  return (
    <div className="grid gap-4 px-2">
      <div className="w-full  grid gap-4  pr-4">
        <nav className="mb-6">
          <a
            href="#"
            className="block text-xl text-[#001510]"
            onClick={toggleMeetOptions}
          >
            Meet
          </a>
          {showMeetOptions && (
            <div className="mt-2">
              <button
                onClick={openForm}
                className="block w-full md:w-40 h-12 py-2 px-4 text-nowrap bg-[#001510] text-white rounded-md mb-2"
              >
                Schedule Meeting
              </button>
              <a
                href="#"
                onClick={openMeetings}
                className="block lg:text-xl text-lg text-nowrap text-[#001510]"
              >
                My Meetings
              </a>
            </div>
          )}
        </nav>
      </div>

      {showForm && (
        <div className={` ${themes === "dark" ? "bg-black text-black" : "text-[#001510] bg-gradient-to-l from-[#001510] to-[#00BF8F]   "} w-full  md:w-auto gap-4`}>
          <form onSubmit={handleSubmit} className="p-6 border rounded-lg shadow-md">
            <div className="grid  gap-4 lg:grid-cols-4 md:grid-cols-2 ">
              <div className="mb-4">
                <label
                  htmlFor="groupSelect"
                  className="block mb-2 text-sm font-medium text-[#001510]"
                >
                  Select a group
                </label>
                <select
                  id="groupSelect"
                  value={selectedGroup}
                  onChange={(e) => setSelectedGroup(e.target.value)}
                  className="block w-full md:w-44 p-2 border text-black bg-white border-gray-300 rounded-md shadow-sm focus:ring-[#001510] focus:border-[#001510]"
                >
                  <option value="" disabled>
                    Select a group
                  </option>
                  {groups.map((group) => (
                    <option key={group.id} value={group.groupName}>
                      {group.groupName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full mb-4">
                <label className="block text-[#001510]">Meeting Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 p-2 border rounded w-full md:w-44"
                  required
                />
              </div>
            </div>
            <div className=" grid  lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 ">
              <div className="w-full mb-4">
                <label className="block text-[#001510]">From Date</label>
                <input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  className="mt-1 p-2 border rounded w-full"
                  required
                />
              </div>
              <div className="w-full mb-4">
                <label className="block text-[#001510]">To Date</label>
                <input
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  className="mt-1 p-2 border rounded w-full"
                  required
                />
              </div>
     
           
              <div className="w-full mb-4">
                <label className="block text-[#001510]">From Time</label>
                <input
                  type="time"
                  value={fromTime}
                  onChange={(e) => setFromTime(e.target.value)}
                  className="mt-1 p-2 border rounded w-full"
                  required
                />
              </div>
              <div className="w-full mb-4">
                <label className="block text-[#001510]">To Time</label>
                <input
                  type="time"
                  value={toTime}
                  onChange={(e) => setToTime(e.target.value)}
                  className="mt-1 p-2 border rounded w-full"
                  required
                />
              </div>
           
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#00BF8F] to-[#001510] text-white py-2 px-4 rounded"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}

      {showMeetings && (
        <div className="w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-xl font-semibold mb-4">Scheduled Meetings</h2>
          <ul className="list-disc pl-5">
            {meetings.length > 0 ? (
              meetings.map((meeting, index) => (
                <li key={index} className="mb-2">
                  <a href={meeting.link} target="_blank" rel="noopener noreferrer">
                    {meeting.title} ({meeting.fromDate} {meeting.fromTime} -{" "}
                    {meeting.toDate} {meeting.toTime})
                  </a>
                </li>
              ))
            ) : (
              <li>No meetings scheduled</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MeetingForm;





// import React, { useState, useEffect } from "react";
// import girl from "../../../assetss/Home/Admin.png";

// const MeetingForm = ({ addMeeting }) => {
//   const [title, setTitle] = useState("");
//   const [fromDate, setFromDate] = useState("");
//   const [toDate, setToDate] = useState("");
//   const [fromTime, setFromTime] = useState("");
//   const [toTime, setToTime] = useState("");
//   const [groups, setGroups] = useState([]);
//   const [selectedGroup, setSelectedGroup] = useState("");
//   const [showForm, setShowForm] = useState(false);

//   useEffect(() => {
//     const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
//     setGroups(storedGroups);
//   }, []);

//   const generateMeetingLink = (title) => {
//     const baseLink = "https://meet.jit.si/";
//     const meetingId = encodeURIComponent(title.trim().replace(/\s+/g, "-"));
//     return `${baseLink}${meetingId}`;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const link = generateMeetingLink(title);
//     const meeting = {
//       title,
//       fromDate,
//       toDate,
//       fromTime,
//       toTime,
//       link,
//       groupname: selectedGroup,
//       phone: "(US) +1 406-838-3066", // Example data, replace with real
//       pin: "235 386 172#", // Example data, replace with real
//       organizer: "Admin Name", // Example data, replace with real
//       guests: ["Aketi Noble Krishna Swamy", "Jagadeesh Komuravelli"], // Example guest data
//     };
//     addMeeting(meeting);
//     setTitle("");
//     setFromDate("");
//     setToDate("");
//     setFromTime("");
//     setToTime("");
//     setSelectedGroup("");
//     setShowForm(false);
//   };

//   const toggleFormVisibility = () => {
//     setShowForm(!showForm);
//   };

//   return (
//     <div className="grid p-6 gap-4">
//       <div className="w-full md:col-span-1 pr-4">
//         <div className="flex items-center mb-6">
//           <img src={girl} alt="Admin Profile" className="w-12 h-12 rounded-full mr-4" />
//           <span className="text-lg font-semibold bg-gradient-to-r from-[#00BF8F] to-[#001510] bg-clip-text text-transparent">Admin Name</span>
//         </div>
//         <nav className="mb-6">
//           <a href="#" className="blockc text-xl text-[#001510]">Meet</a>
//           <button
//             onClick={toggleFormVisibility}
//             className="block w-40 h-12 py-2 px-4 bg-[#001510] text-white text-lg sm:text-sm rounded-md mb-2"
//           >
//             Schedule Meeting
//           </button>
//           <a href="#" className="block text-xl  text-[#001510]">My Meetings</a>
//         </nav>
//       </div>

//       {showForm && (
//         <div className="w-2/3 md:col-span-3">
//           <form onSubmit={handleSubmit} className="p-6 border rounded-lg shadow-md">
//             <div className="flex gap-4">
//               <div className="mb-4">
//                 <label htmlFor="groupSelect" className="block mb-2 text-sm font-medium text-[#001510]">
//                   Select a group
//                 </label>
//                 <select
//                   id="groupSelect"
//                   value={selectedGroup}
//                   onChange={(e) => setSelectedGroup(e.target.value)}
//                   className="block w-44 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#001510] focus:border-[#001510]"
//                 >
//                   <option value="" disabled>Select a group</option>
//                   {groups.map((group) => (
//                     <option key={group.id} value={group.groupName}>
//                       {group.groupName}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="w-full mb-4">
//                 <label className="block text-[#001510]">Meeting Title</label>
//                 <input
//                   type="text"
//                   value={title}
//                   onChange={(e) => setTitle(e.target.value)}
//                   className="mt-1 p-2 border rounded w-44 h-10"
//                   required
//                 />
//               </div>
//             </div>
//             <div className="flex gap-4">
//               <div className="w-full md:w-1/2 mb-4">
//                 <label className="block text-[#001510]">From Date</label>
//                 <input
//                   type="date"
//                   value={fromDate}
//                   onChange={(e) => setFromDate(e.target.value)}
//                   className="mt-1 p-2 border rounded w-44"
//                   required
//                 />
//               </div>
//               <div className="w-full md:w-1/2 mb-4">
//                 <label className="block text-[#001510]">To Date</label>
//                 <input
//                   type="date"
//                   value={toDate}
//                   onChange={(e) => setToDate(e.target.value)}
//                   className="mt-1 p-2 border rounded w-44"
//                   required
//                 />
//               </div>
//               <div className="w-full md:w-1/2 mb-4">
//                 <label className="block text-[#001510]">From Time</label>
//                 <input
//                   type="time"
//                   value={fromTime}
//                   onChange={(e) => setFromTime(e.target.value)}
//                   className="mt-1 p-2 border rounded w-44"
//                   required
//                 />
//               </div>
//               <div className="w-full md:w-1/2 mb-4">
//                 <label className="block text-[#001510]">To Time</label>
//                 <input
//                   type="time"
//                   value={toTime}
//                   onChange={(e) => setToTime(e.target.value)}
//                   className="mt-1 p-2 border rounded w-44"
//                   required
//                 />
//               </div>
//             </div>
//             <div className="flex justify-end">
//               <button type="submit" className="bg-gradient-to-r from-[#00BF8F] to-[#001510] text-white py-2 px-4 rounded">
//                 Save
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MeetingForm;






// import React, { useState, useEffect } from "react";
// import girl from "../../../assetss/Home/Admin.png"
// const MeetingForm = ({ addMeeting }) => {
//   const [title, setTitle] = useState("");
//   const [fromDate, setFromDate] = useState("");
//   const [toDate, setToDate] = useState("");
//   const [fromTime, setFromTime] = useState("");
//   const [toTime, setToTime] = useState("");
//   const [groups, setGroups] = useState([]);
//   const [showForm, setShowForm] = useState(false); // State to control form visibility

//   useEffect(() => {
//     const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
//     setGroups(storedGroups);
//   }, []);

//   const generateMeetingLink = (title) => {
//     const baseLink = "https://meet.jit.si/";
//     const meetingId = encodeURIComponent(title.trim().replace(/\s+/g, "-"));
//     return `${baseLink}${meetingId}`;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const link = generateMeetingLink(title);
//     addMeeting({ title, fromDate, toDate, fromTime, toTime, link });
//     setTitle("");
//     setFromDate("");
//     setFromTime("");
//     setToDate("");
//     setToTime("");
//     setShowForm(false); // Hide form after submission
//   };

//   const toggleFormVisibility = () => {
//     setShowForm(!showForm); // Toggle form visibility
//   };

//   return (
//     <div className="grid p-6 gap-4">
//       {/* Admin Profile and Navigation Menu */}
//       <div className="w-full md:col-span-1 pr-4">
//         <div className="flex items-center mb-6">
//           <img
//             src={girl}
//             alt="Admin Profile"
//             className="w-12 h-12 rounded-full mr-4"
//           />
//           <span className="text-lg font-semibold text-gray-800">Admin Name</span>
//         </div>
//         <nav className="mb-6">
//           <a href="#" className="block text-gray-700 mb-2">
//             Meet
//           </a>
//           <button
//             onClick={toggleFormVisibility}
//             className="block w-40 h-12 py-2 px-4 bg-blue-600 text-white rounded-md mb-2"
//           >
//             Schedule Meeting
//           </button>
//           <a href="#" className="block text-gray-700">
//             My Meetings
//           </a>
//         </nav>
//       </div>

//       {/* Meeting Form */}
//       {showForm && (
//         <div className="w-2/3 md:col-span-3">
//           <form onSubmit={handleSubmit} className="p-6 border rounded-lg shadow-md">
//             <div className="flex gap-4">
//               <div className="mb-4">
//               <label
//                 htmlFor="groupSelect"
//                 className="block mb-2 text-sm font-medium text-gray-700"
//               >
//                 Select a group
//               </label>
//               <select
//                 id="groupSelect"
//                 className="block w-44 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//               >
//                 <option value="" disabled selected>
//                   Select a group
//                 </option>
//                 {groups.map((group) => (
//                   <option key={group.id} value={group.id}>
//                     {group.groupName}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="w-full mb-4">
//                 <label className="block text-gray-700">Meeting Title</label>
//                 <input
//                   type="text"
//                   value={title}
//                   onChange={(e) => setTitle(e.target.value)}
//                   className="mt-1 p-2 border rounded w-44  h-10"
//                   required
//                 />
//               </div>
//               </div>
//             <div className="flex gap-4">
              
//               <div className="w-full md:w-1/2 mb-4">
//                 <label className="block text-gray-700">From Date</label>
//                 <input
//                   type="date"
//                   value={fromDate}
//                   onChange={(e) => setFromDate(e.target.value)}
//                   className="mt-1 p-2 border rounded w-44"
//                   required
//                 />
//               </div>
//               <div className="w-full md:w-1/2 mb-4">
//                 <label className="block text-gray-700">To Date</label>
//                 <input
//                   type="date"
//                   value={toDate}
//                   onChange={(e) => setToDate(e.target.value)}
//                   className="mt-1 p-2 border rounded w-44"
//                   required
//                 />
//               </div>
//               <div className="w-full md:w-1/2 mb-4">
//                 <label className="block text-gray-700">From Time</label>
//                 <input
//                   type="time"
//                   value={fromTime}
//                   onChange={(e) => setFromTime(e.target.value)}
//                   className="mt-1 p-2 border rounded w-44"
//                   required
//                 />
//               </div>
//               <div className="w-full md:w-1/2 mb-4">
//                 <label className="block text-gray-700">To Time</label>
//                 <input
//                   type="time"
//                   value={toTime}
//                   onChange={(e) => setToTime(e.target.value)}
//                   className="mt-1 p-2 border rounded w-44"
//                   required
//                 />
//               </div>
//             </div>
//             <div className="flex justify-end">
//               <button
//                 type="submit"
//                 className="bg-blue-500  text-white py-2 px-4 rounded"
//               >
//                 Save
//               </button>
//             </div>
//           </form>
//         </div>
//       )}

//     </div>
//   );
// };

// export default MeetingForm;


// import React, { useState, useEffect } from "react";
// import girl from "../../../assetss/Home/Admin.png";
// import { FaTimes } from "react-icons/fa"; // Import the close icon

// const MeetingForm = ({ addMeeting }) => {
//   const [title, setTitle] = useState("");
//   const [fromDate, setFromDate] = useState("");
//   const [toDate, setToDate] = useState("");
//   const [fromTime, setFromTime] = useState("");
//   const [toTime, setToTime] = useState("");
//   const [groups, setGroups] = useState([]);
//   const [showForm, setShowForm] = useState(false); // State to control form visibility

//   useEffect(() => {
//     const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
//     setGroups(storedGroups);
//   }, []);

//   const generateMeetingLink = (title) => {
//     const baseLink = "https://meet.jit.si/";
//     const meetingId = encodeURIComponent(title.trim().replace(/\s+/g, "-"));
//     return `${baseLink}${meetingId}`;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const link = generateMeetingLink(title);
//     addMeeting({ title, fromDate, toDate, fromTime, toTime, link });
//     setTitle("");
//     setFromDate("");
//     setFromTime("");
//     setToDate("");
//     setToTime("");
//     setShowForm(false); // Hide form after submission
//   };

//   const toggleFormVisibility = () => {
//     setShowForm(!showForm); // Toggle form visibility
//   };

//   return (
//     <div className="grid p-6 gap-4 relative">
//       {/* Admin Profile and Navigation Menu */}
//       <div className="w-full md:col-span-1 pr-4">
//         <div className="flex items-center mb-6">
//           <img
//             src={girl}
//             alt="Admin Profile"
//             className="w-12 h-12 rounded-full mr-4"
//           />
//           <span className="text-lg font-semibold text-gray-800">Admin Name</span>
//         </div>
//         <nav className="mb-6">
//           <a href="#" className="block text-gray-700 mb-2">
//             Meet
//           </a>
//           <button
//             onClick={toggleFormVisibility}
//             className="block w-40 h-12 py-2 px-4 bg-blue-600 text-white rounded-md mb-2"
//           >
//             Schedule Meeting
//           </button>
//           <a href="#" className="block text-gray-700">
//             My Meetings
//           </a>
//         </nav>
//       </div>

//       {/* Overlay and Meeting Form */}
//       {showForm && (
//         <>
//           {/* Overlay */}
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40"
//             onClick={toggleFormVisibility}
//           ></div>
//           {/* Meeting Form */}
//           <div className="fixed inset-0 flex items-center justify-center  z-50">
//             <div className="relative bg-white p-6 border rounded-lg shadow-md w-full max-w-3xl">
//               {/* Close Button */}
//               <button
//                 onClick={toggleFormVisibility}
//                 className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
//               >
//                 <FaTimes size={20} />
//               </button>

//               <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="groupSelect"
//                     className="block mb-2 text-sm font-medium text-gray-700"
//                   >
//                     Select a group
//                   </label>
//                   <select
//                     id="groupSelect"
//                     className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                   >
//                     <option value="" disabled selected>
//                       Select a group
//                     </option>
//                     {groups.map((group) => (
//                       <option key={group.id} value={group.id}>
//                         {group.groupName}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="flex gap-4">
//                   <div className="w-full mb-4">
//                     <label className="block text-gray-700">Meeting Title</label>
//                     <input
//                       type="text"
//                       value={title}
//                       onChange={(e) => setTitle(e.target.value)}
//                       className="mt-1 p-2 border rounded w-full"
//                       required
//                     />
//                   </div>
//                   <div className="w-full md:w-1/2 mb-4">
//                     <label className="block text-gray-700">From Date</label>
//                     <input
//                       type="date"
//                       value={fromDate}
//                       onChange={(e) => setFromDate(e.target.value)}
//                       className="mt-1 p-2 border rounded w-full"
//                       required
//                     />
//                   </div>
//                   <div className="w-full md:w-1/2 mb-4">
//                     <label className="block text-gray-700">To Date</label>
//                     <input
//                       type="date"
//                       value={toDate}
//                       onChange={(e) => setToDate(e.target.value)}
//                       className="mt-1 p-2 border rounded w-full"
//                       required
//                     />
//                   </div>
//                   <div className="w-full md:w-1/2 mb-4">
//                     <label className="block text-gray-700">From Time</label>
//                     <input
//                       type="time"
//                       value={fromTime}
//                       onChange={(e) => setFromTime(e.target.value)}
//                       className="mt-1 p-2 border rounded w-full"
//                       required
//                     />
//                   </div>
//                   <div className="w-full md:w-1/2 mb-4">
//                     <label className="block text-gray-700">To Time</label>
//                     <input
//                       type="time"
//                       value={toTime}
//                       onChange={(e) => setToTime(e.target.value)}
//                       className="mt-1 p-2 border rounded w-full"
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="flex justify-end">
//                   <button
//                     type="submit"
//                     className="bg-blue-500 text-white py-2 px-4 rounded"
//                   >
//                     Save
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default MeetingForm;






// import React, { useState, useEffect } from "react";

// const MeetingForm = ({ addMeeting }) => {
//   const [title, setTitle] = useState("");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [groups, setGroups] = useState([]);

//   useEffect(() => {
//     const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
//     setGroups(storedGroups);
//   }, []);

//   const generateMeetingLink = (title) => {
//     const baseLink = "https://meet.jit.si/";
//     const meetingId = encodeURIComponent(title.trim().replace(/\s+/g, "-"));
//     return `${baseLink}${meetingId}`;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const link = generateMeetingLink(title);
//     addMeeting({ title, date, time, link });
//     setTitle("");
//     setDate("");
//     setTime("");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md">
//       <div className="mb-4">
//         <label
//           htmlFor="groupSelect"
//           className="block mb-2 text-sm font-medium text-gray-700"
//         ></label>
//         <div className="relative">
//           <select
//             id="groupSelect"
//             className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//           >
//             <option value="" disabled selected>
//               Select a group
//             </option>
//             {groups.map((group) => (
//               <option key={group.id} value={group.id}>
//                 {group.groupName}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Meeting Title</label>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="mt-1 p-2 border rounded w-full"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Date</label>
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           className="mt-1 p-2 border rounded w-full"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Time</label>
//         <input
//           type="time"
//           value={time}
//           onChange={(e) => setTime(e.target.value)}
//           className="mt-1 p-2 border rounded w-full"
//           required
//         />
//       </div>
//       <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//         Schedule Meeting
//       </button>
//     </form>
//   );
// };

// export default MeetingForm;