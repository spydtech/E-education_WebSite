
// import React, { useState, useEffect, useRef } from "react";
// import { FaArrowCircleDown, FaCaretDown, FaCaretUp } from "react-icons/fa";

// const StatusPage = () => {
//   const acceptedFiles = JSON.parse(localStorage.getItem("acceptedFiles")) || [];
//   const rejectedFiles = JSON.parse(localStorage.getItem("rejectedFiles")) || [];
  
//   const [selectedOption, setSelectedOption] = useState("accepted");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const handleDownload = (file) => {
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

//   const handleDropdownChange = (option) => {
//     setSelectedOption(option);
//     setIsDropdownOpen(false);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-bold text-[#FF9B26]">File Status</h1>
//         <div className="relative" ref={dropdownRef}>
//           <button
//             onClick={toggleDropdown}
//             className="flex items-center bg-[#FF9B26] text-white p-2 rounded"
//           >
//             {selectedOption === "accepted" ? "Accepted Files" : "Rejected Files"}
//             {isDropdownOpen ? (
//               <FaCaretUp className="ml-2" />
//             ) : (
//               <FaCaretDown className="ml-2" />
//             )}
//           </button>
//           {isDropdownOpen && (
//             <ul className="absolute right-0 mt-2 w-48 border-2 border-[#FF9B26] text-[#FF9B26] rounded shadow-lg bg-white">
//               <li
//                 className="cursor-pointer text-[#FF9B26] p-2 "
//                 onClick={() => handleDropdownChange("accepted")}
//               >
//                 Accepted Files
//               </li>
//               <hr className="border-1 border-[#FF9B26]"/>
//               <li
//                 className="cursor-pointer p-2 "
//                 onClick={() => handleDropdownChange("rejected")}
//               >
//                 Rejected Files
//               </li>
//             </ul>
//           )}
//         </div>
//       </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {selectedOption === "accepted" ? (
//           <div>
//             <h2 className="text-xl font-semibold mb-2 text-[#FF9B26]">Accepted Files</h2>
//             {acceptedFiles.length > 0 ? (
//               acceptedFiles.map((file, index) => (
//                 <div className="p-2" key={index}>
//                   <div
//                     className="bg-white shadow-md rounded flex p-4 h-full cursor-pointer items-center justify-between"
//                     onClick={() => handleDownload(file)}
//                   >
//                     <div className="flex items-center">
//                       <FaArrowCircleDown className="w-[40px] h-[50px] mr-2 text-blue-500" />
//                       <div className="flex flex-col">
//                         <span className="font-medium">{file.name}</span>
//                         <span className="text-gray-500 text-sm">
//                           {file.description}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-[#FF9B26]">No accepted files.</p>
//             )}
//           </div>
//         ) : (
//           <div>
//             <h2 className="text-xl font-semibold mb-2 text-[#FF9B26]">Rejected Files</h2>
//             {rejectedFiles.length > 0 ? (
//               rejectedFiles.map((file, index) => (
//                 <div className="p-2" key={index}>
//                   <div
//                     className="bg-white shadow-md rounded flex p-4 h-full cursor-pointer items-center justify-between"
//                     onClick={() => handleDownload(file)}
//                   >
//                     <div className="flex items-center">
//                       <FaArrowCircleDown className="w-[40px] h-[50px] mr-2 text-blue-500" />
//                       <div className="flex flex-col">
//                         <span className="font-medium">{file.name}</span>
//                         <span className="text-gray-500 text-sm">
//                           {file.description}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-[#FF9B26]">No rejected files.</p>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default StatusPage;


import React, { useState, useEffect, useRef } from "react";
import { FaArrowCircleDown, FaCaretDown, FaCaretUp } from "react-icons/fa";

const StatusPage = () => {
  const acceptedFiles = JSON.parse(localStorage.getItem("acceptedFiles")) || [];
  const rejectedFiles = JSON.parse(localStorage.getItem("rejectedFiles")) || [];
  
  const [selectedOption, setSelectedOption] = useState("accepted");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDownload = (file) => {
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

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row md:justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-[#FF9B26] mb-2 md:mb-0">File Status</h1>
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="flex items-center bg-[#FF9B26] text-white p-2 rounded text-sm md:text-base"
          >
            {selectedOption === "accepted" ? "Accepted Files" : "Rejected Files"}
            {isDropdownOpen ? (
              <FaCaretUp className="ml-2" />
            ) : (
              <FaCaretDown className="ml-2" />
            )}
          </button>
          {isDropdownOpen && (
            <ul className="absolute right-0 mt-2 w-48 border-2 border-[#FF9B26] text-[#FF9B26] rounded shadow-lg bg-white">
              <li
                className="cursor-pointer text-[#FF9B26] p-2 hover:bg-[#FF9B26] hover:text-white transition"
                onClick={() => handleDropdownChange("accepted")}
              >
                Accepted Files
              </li>
              <hr className="border-1 border-[#FF9B26]"/>
              <li
                className="cursor-pointer p-2 hover:bg-[#FF9B26] hover:text-white transition"
                onClick={() => handleDropdownChange("rejected")}
              >
                Rejected Files
              </li>
            </ul>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {selectedOption === "accepted" ? (
          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#FF9B26]">Accepted Files</h2>
            {acceptedFiles.length > 0 ? (
              acceptedFiles.map((file, index) => (
                <div className="p-2" key={index}>
                  <div
                    className="bg-white shadow-md rounded flex p-4 h-full cursor-pointer items-center justify-between hover:bg-gray-100 transition"
                    onClick={() => handleDownload(file)}
                  >
                    <div className="flex items-center">
                      <FaArrowCircleDown className="w-8 h-8 mr-2 text-[#FF9B26] " />
                      <div className="flex flex-col text-[#FF9B26]">
                        <span className="font-medium text-sm md:text-base text-[#FF9B26]">{file.name}</span>
                        <span className="text-gray-500 text-xs md:text-sm">
                          {file.description}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-[#FF9B26]">No accepted files.</p>
            )}
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#FF9B26]">Rejected Files</h2>
            {rejectedFiles.length > 0 ? (
              rejectedFiles.map((file, index) => (
                <div className="p-2" key={index}>
                  <div
                    className="bg-white shadow-md rounded flex p-4 h-full cursor-pointer items-center justify-between hover:bg-gray-100 transition"
                    onClick={() => handleDownload(file)}
                  >
                    <div className="flex items-center">
                      <FaArrowCircleDown className="w-8 h-8 mr-2 text-[#FF9B26]" />
                      <div className="flex flex-col text-[#FF9B26]">
                        <span className="font-medium text-[#FF9B26] text-sm md:text-base">{file.name}</span>
                        <span className="text-[#FF9B26] text-xs md:text-sm">
                          {file.description}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-[#FF9B26]">No rejected files.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatusPage;
