// // import React, { useState, useEffect } from "react";
// // import { FaArrowCircleDown } from "react-icons/fa";

// // const FileList = ({ updateUserTasksCount }) => {
// //   const files = [
// //     {
// //       name: "Priya",
// //       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsEH9evsckWldIq8ca1TW74RGPc2FoxWHmg&s",
// //       type: "image",
// //       accepted: false,
// //     },
// //     {
// //       name: "Priya",
// //       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsEH9evsckWldIq8ca1TW74RGPc2FoxWHmg&s",
// //       type: "image",
// //       active: true,
// //     },
// //     {
// //       name: "Priya",
// //       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSq5Nz20K1tTq5wvQKkWjnNvHAK05jE-EtQ&s",
// //       type: "image",
// //       accepted: false,
// //     },
// //     {
// //       name: "Priya",
// //       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAOG5A9de3kG4I_OsnRtb9iX6e7UuRy9Wrgg&s",
// //       type: "image",
// //       accepted: true,
// //     },
// //   ];

// //   const [fileStatuses, setFileStatuses] = useState(files.map(() => "pending"));
// //   const [filesSentCount, setFilesSentCount] = useState(files.length);
// //   const [Status, setStatus] = useState(0); // State to track the status count

// //   const handleDownload = (file, index) => {
// //     fetch(file.url)
// //       .then((res) => res.blob())
// //       .then((blob) => {
// //         const url = window.URL.createObjectURL(blob);
// //         const link = document.createElement("a");
// //         link.href = url;
// //         link.download = file.url.split("/").pop();
// //         document.body.appendChild(link);
// //         link.click();
// //         document.body.removeChild(link);
// //       });
// //   };

// //   const handleAccept = (index, e) => {
// //     e.stopPropagation();
// //     setFileStatuses((prev) => {
// //       const newStatuses = [...prev];
// //       newStatuses[index] = "accepted";
// //       return newStatuses;
// //     });
// //     setFilesSentCount((prevCount) => Math.max(prevCount - 1, 0));
// //     setStatus((prevStatus) => prevStatus + 1); // Increase Status count by 1
// //     updateFileStatusesInLocalStorage(fileStatuses); // Update local storage with the updated statuses
// //     localStorage.setItem("Status", Status); // Store Status in local storage
// //   };

// //   const handleReject = (index, e) => {
// //     e.stopPropagation();
// //     setFileStatuses((prev) => {
// //       const newStatuses = [...prev];
// //       newStatuses[index] = "rejected";
// //       return newStatuses;
// //     });
// //     setFilesSentCount((prevCount) => prevCount + 1);
// //     setStatus((prevStatus) => prevStatus); // Decrease Status count by 1
// //     updateFileStatusesInLocalStorage(fileStatuses); // Update local storage with the updated statuses
// //     localStorage.setItem("Status", Status); // Store Status in local storage
// //   };

// //   // Utility function to update file statuses in local storage
// //   const updateFileStatusesInLocalStorage = (newStatuses) => {
// //     localStorage.setItem("fileStatuses", JSON.stringify(newStatuses));
// //   };

// //   useEffect(() => {
// //     localStorage.setItem("filessent", filesSentCount);
// //   }, [filesSentCount]);

// //   useEffect(() => {
// //     localStorage.setItem("Status", Status); // Update local storage whenever Status changes
// //   }, [Status]);

// //   return (
// //     <div className="flex bg-gray-100 h-[480px] w-auto flex-col lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 p-4">
// //       <p className="block text-xl font-semibold text-[#07074D]">
// //         Files Received
// //       </p>
// //       {files.map((file, index) => (
// //         <div className="p-2 sm:w-1/2 w-full" key={index}>
// //           <div
// //             className="bg-gray-100 rounded flex p-4 h-full cursor-pointer items-center justify-between"
// //             onClick={() => handleDownload(file, index)}
// //           >
// //             <div className="flex items-center">
// //               <FaArrowCircleDown className="w-[40px] h-[50px] mr-2" />
// //               <div className="flex flex-col">
// //                 <span className="font-medium">{file.name}</span>
// //                 <span className="text-gray-500 text-sm">
// //                   {file.description}
// //                 </span>
// //               </div>
// //             </div>
// //             <div className="flex items-center space-x-2 ml-20">
// //               <button
// //                 className={`px-4 py-2 rounded transition duration-300 ${
// //                   fileStatuses[index] === "accepted"
// //                     ? "bg-gray-500 text-white cursor-not-allowed"
// //                     : "bg-green-500 text-white hover:bg-green-600"
// //                 }`}
// //                 onClick={(e) => handleAccept(index, e)}
// //                 disabled={fileStatuses[index] !== "pending"}
// //               >
// //                 {fileStatuses[index] === "accepted" ? "Accepted" : "Accept"}
// //               </button>
// //               <button
// //                 className={`px-4 py-2 rounded transition duration-300 ${
// //                   fileStatuses[index] === "rejected"
// //                     ? "bg-gray-500 text-white cursor-not-allowed"
// //                     : "bg-red-500 text-white hover:bg-red-600"
// //                 }`}
// //                 onClick={(e) => handleReject(index, e)}
// //                 disabled={fileStatuses[index] !== "pending"}
// //               >
// //                 {fileStatuses[index] === "rejected" ? "Rejected" : "Reject"}
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       ))}
// //       <div>
// //         <p>Status Count: {Status}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FileList;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FaArrowCircleDown } from "react-icons/fa";

// const FileList = ({ updateUserTasksCount }) => {
//   const files = [
//     {
//       name: "Robert Hem",
//       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsEH9evsckWldIq8ca1TW74RGPc2FoxWHmg&s",
//       type: "image",
//       accepted: false,
//     },
//     {
//       name: "John Dale",
//       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsEH9evsckWldIq8ca1TW74RGPc2FoxWHmg&s",
//       type: "image",
//       active: true,
//     },
//     {
//       name: "Steve S",
//       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSq5Nz20K1tTq5wvQKkWjnNvHAK05jE-EtQ&s",
//       type: "image",
//       accepted: false,
//     },
//     {
//       name: "Alex Gram ",
//       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAOG5A9de3kG4I_OsnRtb9iX6e7UuRy9Wrgg&s",
//       type: "image",
//       accepted: true,
//     },
//   ];

//   const [fileStatuses, setFileStatuses] = useState(files.map(() => "pending"));
//   const [filesSentCount, setFilesSentCount] = useState(files.length);
//   const [Status, setStatus] = useState(0); // State to track the status count

//   const handleDownload = (file, index) => {
//     fetch(file.url)
//       .then((res) => res.blob())
//       .then((blob) => {
//         const url = window.URL.createObjectURL(blob);
//         const link = document.createElement("a");
//         link.href = url;
//         link.download = file.url.split("/").pop();
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//       });
//   };

//   const handleAccept = (index, e) => {
//     e.stopPropagation();
//     setFileStatuses((prev) => {
//       const newStatuses = [...prev];
//       newStatuses[index] = "accepted";
//       return newStatuses;
//     });
//     setFilesSentCount((prevCount) => Math.max(prevCount - 1, 0));
//     setStatus((prevStatus) => prevStatus + 1); // Increase Status count by 1
//     updateFileStatusesInLocalStorage(fileStatuses); // Update local storage with the updated statuses
//     localStorage.setItem("Status", Status); // Store Status in local storage
//   };

//   const handleReject = (index, e) => {
//     e.stopPropagation();
//     setFileStatuses((prev) => {
//       const newStatuses = [...prev];
//       newStatuses[index] = "rejected";
//       return newStatuses;
//     });
//     setFilesSentCount((prevCount) => prevCount + 1);
//     setStatus((prevStatus) => prevStatus); // Decrease Status count by 1
//     updateFileStatusesInLocalStorage(fileStatuses); // Update local storage with the updated statuses
//     localStorage.setItem("Status", Status); // Store Status in local storage
//   };

//   // Utility function to update file statuses in local storage
//   const updateFileStatusesInLocalStorage = (newStatuses) => {
//     localStorage.setItem("fileStatuses", JSON.stringify(newStatuses));
//   };

//   useEffect(() => {
//     localStorage.setItem("filessent", filesSentCount);
//   }, [filesSentCount]);

//   useEffect(() => {
//     localStorage.setItem("Status", Status); // Update local storage whenever Status changes
//   }, [Status]);

//   return (
//     <div className="flex bg-gray-200 p-3 rounded-lg h-[480px] w-auto flex-col lg:w-4/5 sm:mx-auto sm:mb-2 ">
//       <p className="block text-xl font-semibold text-black mb-2">
//         Files Received
//       </p>
//       {files.map((file, index) => (
//         <div className="p-2  w-full" key={index}>
//           <div
//             className="bg-gray-100 rounded flex p-4  h-full cursor-pointer items-center justify-between"
//             onClick={() => handleDownload(file, index)}
//           >
//             <div className="flex items-center">
//               <FaArrowCircleDown className="w-[40px] h-[50px] mr-2 text-blue-700" />
//               <div className="flex flex-col">
//                 <span className="font-medium">{file.name}</span>
//                 <span className="text-gray-500 text-sm">
//                   {file.description}
//                 </span>
//               </div>
//             </div>
//             <div className="flex items-center space-x-2 ml-18">
//               <button
//                 className={`px-4 py-2 rounded transition duration-300 ${
//                   fileStatuses[index] === "accepted"
//                     ? "bg-gray-500 text-white cursor-not-allowed"
//                     : "bg-green-500 text-white hover:bg-green-600"
//                 }`}
//                 onClick={(e) => handleAccept(index, e)}
//                 disabled={fileStatuses[index] !== "pending"}
//               >
//                 {fileStatuses[index] === "accepted" ? "Accepted" : "Accept"}
//               </button>
//               <button
//                 className={`px-4 py-2 rounded transition duration-300 ${
//                   fileStatuses[index] === "rejected"
//                     ? "bg-gray-500 text-white cursor-not-allowed"
//                     : "bg-red-500 text-white hover:bg-red-600"
//                 }`}
//                 onClick={(e) => handleReject(index, e)}
//                 disabled={fileStatuses[index] !== "pending"}
//               >
//                 {fileStatuses[index] === "rejected" ? "Rejected" : "Reject"}
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//       {/* <div>
//         <p>Status Count: {Status}</p>
//       </div> */}
//       <div className=" flex justify-end items-end relative  ">
//         <Link to="/status-page">
//           <p className="text-blue-500 text:bg-blue-600    w-20 mr-2 p-2 rounded-md">
//             View All{" "}
//           </p>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default FileList;

import React, { useState, useEffect } from "react";
import { FaArrowCircleDown } from "react-icons/fa";

const FileList = ({ setSelectedUsers }) => {
  const [files, setFiles] = useState([
    {
      name: "Priya",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsEH9evsckWldIq8ca1TW74RGPc2FoxWHmg&s",
      type: "image",
      description: "Image 1",
      accepted: false,
    },
    {
      name: "Priya",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU0mQ6LNpCev-YtUXUff0T7gQn6aW_S7FD3A&s",
      type: "image",
      description: "Image 2",
      accepted: false,
    },
    {
      name: "Priya",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSq5Nz20K1tTq5wvQKkWjnNvHAK05jE-EtQ&s",
      type: "image",
      description: "Image 3",
      accepted: false,
    },
    {
      name: "Priya",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAOG5A9de3kG4I_OsnRtb9iX6e7UuRy9Wrgg&s",
      type: "image",
      description: "Image 4",
      accepted: false,
    },
  ]);

  const handleDownload = (file, index) => {
    fetch(file.url)
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = file.url.split("/").pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  };

  const handleAccept = (index, e) => {
    e.stopPropagation();
    const acceptedFile = { ...files[index], accepted: true };
    const newFiles = files.filter((_, i) => i !== index);

    setFiles(newFiles);

    const acceptedFiles =
      JSON.parse(localStorage.getItem("acceptedFiles")) || [];
    localStorage.setItem(
      "acceptedFiles",
      JSON.stringify([...acceptedFiles, acceptedFile])
    );

    // Ensure to clear rejected files since we're moving to accepted
    const rejectedFiles =
      JSON.parse(localStorage.getItem("rejectedFiles")) || [];
    localStorage.setItem(
      "rejectedFiles",
      JSON.stringify(
        rejectedFiles.filter((file) => file.url !== acceptedFile.url)
      )
    );
  };

  const handleReject = (index, e) => {
    e.stopPropagation();
    const rejectedFile = { ...files[index], rejected: true };
    const newFiles = files.filter((_, i) => i !== index);

    setFiles(newFiles);

    const rejectedFiles =
      JSON.parse(localStorage.getItem("rejectedFiles")) || [];
    localStorage.setItem(
      "rejectedFiles",
      JSON.stringify([...rejectedFiles, rejectedFile])
    );

    // Ensure to clear accepted files since we're moving to rejected
    const acceptedFiles =
      JSON.parse(localStorage.getItem("acceptedFiles")) || [];
    localStorage.setItem(
      "acceptedFiles",
      JSON.stringify(
        acceptedFiles.filter((file) => file.url !== rejectedFile.url)
      )
    );
  };

  const handleSelectUser = (e) => {
    const user = e.target.value;
    if (e.target.checked) {
      setSelectedUsers((prev) => [...prev, user]);
    } else {
      setSelectedUsers((prev) => prev.filter((u) => u !== user));
    }
  };

  return (
    <div className="flex bg-gray-100 h-auto w-full flex-col p-4 lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <p className="block text-xl font-semibold text-[#07074D]">
        Files Received
      </p>
      <div className="flex flex-wrap -m-2">
        {files.map((file, index) => (
          <div className="p-2 w-full sm:w-1/2 lg:w-1/3" key={index}>
            <div
              className="bg-white rounded-lg shadow-md p-4 h-full cursor-pointer flex flex-col justify-between"
              onClick={() => handleDownload(file, index)}
            >
              <div className="flex items-center">
                <FaArrowCircleDown className="w-8 h-8 mr-2" />
                <div className="flex flex-col">
                  <span className="font-medium">{file.name}</span>
                  <span className="text-gray-500 text-sm">
                    {file.description}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2 mt-4">
                <input
                  type="checkbox"
                  name="user"
                  value={file.name}
                  onChange={handleSelectUser}
                  className="form-checkbox"
                />
                <label className="ml-2">{file.name}</label>
                <button
                  className={`px-4 py-2 rounded transition duration-300 ${
                    file.accepted
                      ? "bg-gray-500 text-white cursor-not-allowed"
                      : "bg-green-500 text-white hover:bg-green-600"
                  }`}
                  onClick={(e) => handleAccept(index, e)}
                  disabled={file.accepted || file.rejected}
                >
                  {file.accepted ? "Accepted" : "Accept"}
                </button>
                <button
                  className={`px-4 py-2 rounded transition duration-300 ${
                    file.rejected
                      ? "bg-gray-500 text-white cursor-not-allowed"
                      : "bg-red-500 text-white hover:bg-red-600"
                  }`}
                  onClick={(e) => handleReject(index, e)}
                  disabled={file.accepted || file.rejected}
                >
                  {file.rejected ? "Rejected" : "Reject"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button
          onClick={() => (window.location.href = "/status-page")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
        >
          Scheduled reports
        </button>
      </div>
    </div>
  );
};

export default FileList;
