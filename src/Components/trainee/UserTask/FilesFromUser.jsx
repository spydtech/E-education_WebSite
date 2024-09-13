// // import React, { useState, useEffect } from "react";
// // import { FaArrowCircleDown } from "react-icons/fa";
// // import { Link } from "react-router-dom";
// // const FileFromUser = ({ setSelectedUsers }) => {
// //   const [files, setFiles] = useState([
// //     {
// //       name: "Priya",
// //       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsEH9evsckWldIq8ca1TW74RGPc2FoxWHmg&s",
// //       type: "image",
// //       accepted: false,
// //     },
// //     {
// //       name: "Priya",
// //       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU0mQ6LNpCev-YtUXUff0T7gQn6aW_S7FD3A&s",
// //       type: "image",
// //       accepted: false,
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
// //       accepted: false,
// //     },
// //   ]);

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
// //     const acceptedFile = { ...files[index], accepted: true };
// //     const newFiles = files.filter((_, i) => i !== index);

// //     setFiles(newFiles);

// //     const acceptedFiles =
// //       JSON.parse(localStorage.getItem("acceptedFiles")) || [];
// //     localStorage.setItem(
// //       "acceptedFiles",
// //       JSON.stringify([...acceptedFiles, acceptedFile])
// //     );

// //     // Ensure to clear rejected files since we're moving to accepted
// //     const rejectedFiles =
// //       JSON.parse(localStorage.getItem("rejectedFiles")) || [];
// //     localStorage.setItem(
// //       "rejectedFiles",
// //       JSON.stringify(
// //         rejectedFiles.filter((file) => file.url !== acceptedFile.url)
// //       )
// //     );
// //   };

// //   const handleReject = (index, e) => {
// //     e.stopPropagation();
// //     const rejectedFile = { ...files[index], rejected: true };
// //     const newFiles = files.filter((_, i) => i !== index);

// //     setFiles(newFiles);

// //     const rejectedFiles =
// //       JSON.parse(localStorage.getItem("rejectedFiles")) || [];
// //     localStorage.setItem(
// //       "rejectedFiles",
// //       JSON.stringify([...rejectedFiles, rejectedFile])
// //     );

// //     // Ensure to clear accepted files since we're moving to rejected
// //     const acceptedFiles =
// //       JSON.parse(localStorage.getItem("acceptedFiles")) || [];
// //     localStorage.setItem(
// //       "acceptedFiles",
// //       JSON.stringify(
// //         acceptedFiles.filter((file) => file.url !== rejectedFile.url)
// //       )
// //     );
// //   };

// //   const handleSelectUser = (e) => {
// //     const user = e.target.value;
// //     if (e.target.checked) {
// //       setSelectedUsers((prev) => [...prev, user]);
// //     } else {
// //       setSelectedUsers((prev) => prev.filter((u) => u !== user));
// //     }
// //   };

// //   return (
// //    <>
// //     <h1 className="text-[#FF9B26] p-2 font-semibold text-[20px]">
// //   <span className="border-b-2 border-[#FF9B26]">Tasks From Trainee</span>
// // </h1>

// //      <div className="bg-white  h-[490px] w-[500px] shadow-xl rounded-lg p-4 border-[#FF9B26]  border-2  border-solid">
// //       <div className="flex flex-col gap-4">
// //         {files.map((file, index) => (
// //           <div
// //             className="bg-white rounded-lg  p-4 flex items-center justify-between gap-4 cursor-pointer transition-transform transform "
// //             key={index}
// //             onClick={() => handleDownload(file, index)}
// //           >
// //             <div className="flex items-center gap-4 flex-grow">
// //               <FaArrowCircleDown className="text-[#FF9B26] w-8 h-8" />
// //               <div className="flex flex-col flex-grow">
// //                 <span className="text-lg font-medium text-[#07074D]">
// //                   {file.name}
// //                 </span>
// //                 <span className="text-gray-500 text-sm">
// //                   {file.description}
// //                 </span>
// //               </div>
// //             </div>
// //             <div className="flex gap-2">
// //               <button
// //                 className={`px-4 py-2 rounded-md text-white font-semibold transition-colors duration-300 ${
// //                   file.accepted
// //                     ? "bg-gray-500 cursor-not-allowed"
// //                     : "bg-green-500 hover:bg-green-600"
// //                 }`}
// //                 onClick={(e) => handleAccept(index, e)}
// //                 disabled={file.accepted || file.rejected}
// //               >
// //                 {file.accepted ? "Accepted" : "Accept"}
// //               </button>
// //               <button
// //                 className={`px-4 py-2 rounded-md text-white font-semibold transition-colors duration-300 ${
// //                   file.rejected
// //                     ? "bg-gray-500 cursor-not-allowed"
// //                     : "bg-red-500 hover:bg-red-600"
// //                 }`}
// //                 onClick={(e) => handleReject(index, e)}
// //                 disabled={file.accepted || file.rejected}
// //               >
// //                 {file.rejected ? "Rejected" : "Reject"}
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       <div className="mt-6 flex justify-center">
       
// //         <Link>View All</Link>
// //       </div>
// //       </div>
// //    </>
// //   );
// // };

// // export default FileFromUser;

// import React, { useState } from "react";
// import { FaArrowCircleDown } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const FileFromUser = ({ setSelectedUsers }) => {
//   const [files, setFiles] = useState([
//     {
//       name: "Priya",
//       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsEH9evsckWldIq8ca1TW74RGPc2FoxWHmg&s",
//       type: "image",
//       accepted: false,
//     },
//     {
//       name: "Priya",
//       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU0mQ6LNpCev-YtUXUff0T7gQn6aW_S7FD3A&s",
//       type: "image",
//       accepted: false,
//     },
//     {
//       name: "Priya",
//       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSq5Nz20K1tTq5wvQKkWjnNvHAK05jE-EtQ&s",
//       type: "image",
//       accepted: false,
//     },
//     {
//       name: "Priya",
//       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAOG5A9de3kG4I_OsnRtb9iX6e7UuRy9Wrgg&s",
//       type: "image",
//       accepted: false,
//     },
//   ]);

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
//     const acceptedFile = { ...files[index], accepted: true };
//     const newFiles = files.filter((_, i) => i !== index);

//     setFiles(newFiles);

//     const acceptedFiles =
//       JSON.parse(localStorage.getItem("acceptedFiles")) || [];
//     localStorage.setItem(
//       "acceptedFiles",
//       JSON.stringify([...acceptedFiles, acceptedFile])
//     );

//     const rejectedFiles =
//       JSON.parse(localStorage.getItem("rejectedFiles")) || [];
//     localStorage.setItem(
//       "rejectedFiles",
//       JSON.stringify(
//         rejectedFiles.filter((file) => file.url !== acceptedFile.url)
//       )
//     );
//   };

//   const handleReject = (index, e) => {
//     e.stopPropagation();
//     const rejectedFile = { ...files[index], rejected: true };
//     const newFiles = files.filter((_, i) => i !== index);

//     setFiles(newFiles);

//     const rejectedFiles =
//       JSON.parse(localStorage.getItem("rejectedFiles")) || [];
//     localStorage.setItem(
//       "rejectedFiles",
//       JSON.stringify([...rejectedFiles, rejectedFile])
//     );

//     const acceptedFiles =
//       JSON.parse(localStorage.getItem("acceptedFiles")) || [];
//     localStorage.setItem(
//       "acceptedFiles",
//       JSON.stringify(
//         acceptedFiles.filter((file) => file.url !== rejectedFile.url)
//       )
//     );
//   };

//   const handleSelectUser = (e) => {
//     const user = e.target.value;
//     if (e.target.checked) {
//       setSelectedUsers((prev) => [...prev, user]);
//     } else {
//       setSelectedUsers((prev) => prev.filter((u) => u !== user));
//     }
//   };

//   return (
//     <>
//       <div>
//       <h1 className="text-[#FF9B26] p-2 font-semibold text-[20px]">
//         <span className="border-b-2 border-[#FF9B26]">Tasks From Trainee</span>
//       </h1>
//       </div>

//       <div className="bg-white h-[500px] max-w-full  shadow-xl rounded-lg p-4 ">
//         <div className="flex flex-col gap-4">
//           {files.map((file, index) => (
//             <div
//               className="bg-white rounded-lg p-4 flex items-center justify-between gap-4 cursor-pointer transition-transform transform"
//               key={index}
//               onClick={() => handleDownload(file, index)}
//             >
//               <div className="flex items-center gap-4 flex-grow">
//                 <FaArrowCircleDown className="text-[#FF9B26] w-8 h-8" />
//                 <div className="flex flex-col flex-grow">
//                   <span className="text-lg font-medium text-[#07074D]">
//                     {file.name}
//                   </span>
//                   <span className="text-gray-500 text-sm">
//                     {file.description || "No description"}
//                   </span>
//                 </div>
//               </div>
//               <div className="flex gap-2">
//                 <button
//                   className={`px-4 py-2 rounded-md text-white font-semibold transition-colors duration-300 ${
//                     file.accepted
//                       ? "bg-gray-500 cursor-not-allowed"
//                       : "bg-green-500 hover:bg-green-600"
//                   }`}
//                   onClick={(e) => handleAccept(index, e)}
//                   disabled={file.accepted || file.rejected}
//                 >
//                   {file.accepted ? "Accepted" : "Accept"}
//                 </button>
//                 <button
//                   className={`px-4 py-2 rounded-md text-white font-semibold transition-colors duration-300 ${
//                     file.rejected
//                       ? "bg-gray-500 cursor-not-allowed"
//                       : "bg-red-500 hover:bg-red-600"
//                   }`}
//                   onClick={(e) => handleReject(index, e)}
//                   disabled={file.accepted || file.rejected}
//                 >
//                   {file.rejected ? "Rejected" : "Reject"}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="mt-6 flex justify-center">
//           <Link className="text-[#FF9B26] hover:underline">View All</Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FileFromUser;

import React, { useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const FileFromUser = ({ setSelectedUsers }) => {
  const [files, setFiles] = useState([
    {
      name: "Priya",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsEH9evsckWldIq8ca1TW74RGPc2FoxWHmg&s",
      type: "image",
      accepted: false,
    },
    {
      name: "Ashwini",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU0mQ6LNpCev-YtUXUff0T7gQn6aW_S7FD3A&s",
      type: "image",
      accepted: false,
    },
    {
      name: "Raghavendra",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSq5Nz20K1tTq5wvQKkWjnNvHAK05jE-EtQ&s",
      type: "image",
      accepted: false,
    },
    {
      name: "Prem",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAOG5A9de3kG4I_OsnRtb9iX6e7UuRy9Wrgg&s",
      type: "image",
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
    <>
      <div className="p-4">
        <h1 className="text-[#FF9B26] font-semibold text-2xl">
          <span className="border-b-2 text-[20px] border-[#FF9B26]">Tasks From Trainee</span>
        </h1>
      </div>

      <div className=" max-w-full   bg-white  md:p-1 rounded-lg  md:w-[500px] ">
        <div className="flex flex-col gap-4">
          {files.map((file, index) => (
            <div
              className=" rounded-lg p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 cursor-pointer transition-transform transform"
              key={index}
              onClick={() => handleDownload(file, index)}
            >
              <div className="flex items-center gap-4 flex-grow">
                <FaArrowCircleDown className="text-[#FF9B26] w-8 h-8" />
                <div className="flex flex-col flex-grow">
                  <span className="text-lg font-medium text-[#FF9B26]">
                    {file.name}
                  </span>
                  <span className="text-[#FF9B26] text-sm">
                    {file.description || "No description"}
                  </span>
                </div>
              </div>
              <div className="flex gap-2 mt-2 md:mt-0">
                <button
                  className={`px-4 py-2 rounded-md text-white font-semibold transition-colors duration-300 ${
                    file.accepted
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-green-500 hover:bg-green-600"
                  }`}
                  onClick={(e) => handleAccept(index, e)}
                  disabled={file.accepted || file.rejected}
                >
                  {file.accepted ? "Accepted" : "Accept"}
                </button>
                <button
                  className={`px-4 py-2 rounded-md text-white font-semibold transition-colors duration-300 ${
                    file.rejected
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-red-500 hover:bg-red-600"
                  }`}
                  onClick={(e) => handleReject(index, e)}
                  disabled={file.accepted || file.rejected}
                >
                  {file.rejected ? "Rejected" : "Reject"}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <Link className="text-[#FF9B26] hover:underline">View All</Link>
        </div>
      </div>
    </>
  );
};

export default FileFromUser;
