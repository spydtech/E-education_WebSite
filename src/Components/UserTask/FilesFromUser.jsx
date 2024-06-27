import React, { useState, useEffect } from "react";
import { FaArrowCircleDown } from "react-icons/fa";

const FileList = ({ updateUserTasksCount }) => {
  const files = [
    {
      name: "Priya",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsEH9evsckWldIq8ca1TW74RGPc2FoxWHmg&s",
      type: "image",
      accepted: false,
    },
    {
      name: "Priya",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsEH9evsckWldIq8ca1TW74RGPc2FoxWHmg&s",
      type: "image",
      active: true,
    },
    {
      name: "Priya",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSq5Nz20K1tTq5wvQKkWjnNvHAK05jE-EtQ&s",
      type: "image",
      accepted: false,
    },
    {
      name: "Priya",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAOG5A9de3kG4I_OsnRtb9iX6e7UuRy9Wrgg&s",
      type: "image",
      accepted: true,
    },
  ];

  const [fileStatuses, setFileStatuses] = useState(files.map(() => "pending"));
  const [filesSentCount, setFilesSentCount] = useState(files.length);
  const [Status, setStatus] = useState(0); // State to track the status count

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
    setFileStatuses((prev) => {
      const newStatuses = [...prev];
      newStatuses[index] = "accepted";
      return newStatuses;
    });
    setFilesSentCount((prevCount) => Math.max(prevCount - 1, 0));
    setStatus((prevStatus) => prevStatus + 1); // Increase Status count by 1
    updateFileStatusesInLocalStorage(fileStatuses); // Update local storage with the updated statuses
    localStorage.setItem("Status", Status); // Store Status in local storage
  };

  const handleReject = (index, e) => {
    e.stopPropagation();
    setFileStatuses((prev) => {
      const newStatuses = [...prev];
      newStatuses[index] = "rejected";
      return newStatuses;
    });
    setFilesSentCount((prevCount) => prevCount + 1);
    setStatus((prevStatus) => prevStatus); // Decrease Status count by 1
    updateFileStatusesInLocalStorage(fileStatuses); // Update local storage with the updated statuses
    localStorage.setItem("Status", Status); // Store Status in local storage
  };

  // Utility function to update file statuses in local storage
  const updateFileStatusesInLocalStorage = (newStatuses) => {
    localStorage.setItem("fileStatuses", JSON.stringify(newStatuses));
  };

  useEffect(() => {
    localStorage.setItem("filessent", filesSentCount);
  }, [filesSentCount]);

  useEffect(() => {
    localStorage.setItem("Status", Status); // Update local storage whenever Status changes
  }, [Status]);

  return (
    <div className="flex bg-gray-100 h-[480px] w-auto flex-col lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 p-4">
      <p className="block text-xl font-semibold text-[#07074D]">
        Files Received
      </p>
      {files.map((file, index) => (
        <div className="p-2 sm:w-1/2 w-full" key={index}>
          <div
            className="bg-gray-100 rounded flex p-4 h-full cursor-pointer items-center justify-between"
            onClick={() => handleDownload(file, index)}
          >
            <div className="flex items-center">
              <FaArrowCircleDown className="w-[40px] h-[50px] mr-2" />
              <div className="flex flex-col">
                <span className="font-medium">{file.name}</span>
                <span className="text-gray-500 text-sm">
                  {file.description}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2 ml-20">
              <button
                className={`px-4 py-2 rounded transition duration-300 ${
                  fileStatuses[index] === "accepted"
                    ? "bg-gray-500 text-white cursor-not-allowed"
                    : "bg-green-500 text-white hover:bg-green-600"
                }`}
                onClick={(e) => handleAccept(index, e)}
                disabled={fileStatuses[index] !== "pending"}
              >
                {fileStatuses[index] === "accepted" ? "Accepted" : "Accept"}
              </button>
              <button
                className={`px-4 py-2 rounded transition duration-300 ${
                  fileStatuses[index] === "rejected"
                    ? "bg-gray-500 text-white cursor-not-allowed"
                    : "bg-red-500 text-white hover:bg-red-600"
                }`}
                onClick={(e) => handleReject(index, e)}
                disabled={fileStatuses[index] !== "pending"}
              >
                {fileStatuses[index] === "rejected" ? "Rejected" : "Reject"}
              </button>
            </div>
          </div>
        </div>
      ))}
      <div>
        <p>Status Count: {Status}</p>
      </div>
    </div>
  );
};

export default FileList;
