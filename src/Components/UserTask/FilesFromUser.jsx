import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowCircleDown } from "react-icons/fa";

const FileList = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState([
    {
      name: "Priya",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsEH9evsckWldIq8ca1TW74RGPc2FoxWHmg&s",
      type: "image",
      status: "pending",
    },
    {
      name: "priya",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsEH9evsckWldIq8ca1TW74RGPc2FoxWHmg&s",
      type: "image",
      status: "pending",
    },
    {
      name: "priya",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsEH9evsckWldIq8ca1TW74RGPc2FoxWHmg&s",
      type: "image",
      status: "pending",
    },
    {
      name: "priya",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsEH9evsckWldIq8ca1TW74RGPc2FoxWHmg&s",
      type: "image",
      status: "pending",
    },
  ]);

  const [statusCount, setStatusCount] = useState(0);
  const [acceptedFiles, setAcceptedFiles] = useState(
    JSON.parse(localStorage.getItem("acceptedFiles")) || []
  );
  const [rejectedFiles, setRejectedFiles] = useState(
    JSON.parse(localStorage.getItem("rejectedFiles")) || []
  );

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

  const handleAccept = (index, e) => {
    e.stopPropagation();
    setFiles((prevFiles) => {
      const updatedFiles = [...prevFiles];
      const acceptedFile = { ...updatedFiles[index], status: "accepted" };
      setAcceptedFiles((prev) => {
        const newAcceptedFiles = [...prev, acceptedFile];
        localStorage.setItem("acceptedFiles", JSON.stringify(newAcceptedFiles));
        return newAcceptedFiles;
      });
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });
    setStatusCount((prevStatus) => prevStatus + 1);
  };

  const handleReject = (index, e) => {
    e.stopPropagation();
    setFiles((prevFiles) => {
      const updatedFiles = [...prevFiles];
      const rejectedFile = { ...updatedFiles[index], status: "rejected" };
      setRejectedFiles((prev) => {
        const newRejectedFiles = [...prev, rejectedFile];
        localStorage.setItem("rejectedFiles", JSON.stringify(newRejectedFiles));
        return newRejectedFiles;
      });
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });
  };

  useEffect(() => {
    localStorage.setItem("Status", statusCount);
  }, [statusCount]);

  useEffect(() => {
    if (files.length === 0) {
      navigate("/status");
    }
  }, [files, navigate]);

  return (
    <div className="flex flex-col items-center shadow-lg border w-[500px] h-[500px] border-white-200 bg-white  py-8">
      <h1 className="text-2xl font-bold text-[#07074D] mb-6">Files Received</h1>
      <div className="flex flex-col items-center w-full max-w-4xl space-y-4">
        {files.map((file, index) => (
          <div
            key={index}
            className="bg-white shadow-lg border border-gray-200 rounded-lg overflow-hidden w-full lg:w-3/4"
          >
            <div
              className="p-4 flex items-center justify-between cursor-pointer"
              onClick={() => handleDownload(file)}
            >
              <div className="flex items-center">
                <FaArrowCircleDown className="w-10 h-10 mr-4 text-blue-500" />
                <div>
                  <h2 className="font-semibold text-lg">{file.name}</h2>
                  <p className="text-gray-500">{file.description}</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <button
                  className={`px-4 py-2 rounded-lg transition ${
                    file.status === "accepted"
                      ? "bg-gray-300 text-white cursor-not-allowed"
                      : "bg-green-500 text-white hover:bg-green-600"
                  }`}
                  onClick={(e) => handleAccept(index, e)}
                  disabled={file.status !== "pending"}
                >
                  {file.status === "accepted" ? "Accepted" : "Accept"}
                </button>
                <button
                  className={`px-4 py-2 rounded-lg transition ${
                    file.status === "rejected"
                      ? "bg-gray-300 text-white cursor-not-allowed"
                      : "bg-red-500 text-white hover:bg-red-600"
                  }`}
                  onClick={(e) => handleReject(index, e)}
                  disabled={file.status !== "pending"}
                >
                  {file.status === "rejected" ? "Rejected" : "Reject"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        {/* <p className="text-xl font-semibold">Status Count: {statusCount}</p> */}
      </div>
    </div>
  );
};

export default FileList;
