import React from "react";
import { FaArrowCircleDown } from "react-icons/fa";

const StatusPage = () => {
  const acceptedFiles = JSON.parse(localStorage.getItem("acceptedFiles")) || [];
  const rejectedFiles = JSON.parse(localStorage.getItem("rejectedFiles")) || [];

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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">File Status</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Accepted Files</h2>
          {acceptedFiles.length > 0 ? (
            acceptedFiles.map((file, index) => (
              <div className="p-2" key={index}>
                <div
                  className="bg-white shadow-md rounded flex p-4 h-full cursor-pointer items-center justify-between"
                  onClick={() => handleDownload(file)}
                >
                  <div className="flex items-center">
                    <FaArrowCircleDown className="w-[40px] h-[50px] mr-2 text-blue-500" />
                    <div className="flex flex-col">
                      <span className="font-medium">{file.name}</span>
                      <span className="text-gray-500 text-sm">
                        {file.description}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No accepted files.</p>
          )}
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Rejected Files</h2>
          {rejectedFiles.length > 0 ? (
            rejectedFiles.map((file, index) => (
              <div className="p-2" key={index}>
                <div
                  className="bg-white shadow-md rounded flex p-4 h-full cursor-pointer items-center justify-between"
                  onClick={() => handleDownload(file)}
                >
                  <div className="flex items-center">
                    <FaArrowCircleDown className="w-[40px] h-[50px] mr-2 text-blue-500" />
                    <div className="flex flex-col">
                      <span className="font-medium">{file.name}</span>
                      <span className="text-gray-500 text-sm">
                        {file.description}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No rejected files.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatusPage;