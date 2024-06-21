import React, { useState } from "react";

// Sample data for files
const files = [
  { name: "Document 1", url: "document1.pdf" },
  { name: "Image 1", url: "image1.jpg" },
  { name: "Presentation 1", url: "presentation1.pptx" },
  { name: "Spreadsheet 1", url: "spreadsheet1.xlsx" },
];

const FileList = () => {
  const handleDownload = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = url.split("/").pop(); // Use the file name from the URL
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex bg-gray-100  w-auto h-auto flex-col lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 p-4">
      <p className="mb-5 block text-xl font-semibold text-[#07074D]">
        Files Received
      </p>
      {files.map((file, index) => (
        <div className="p-2 sm:w-1/2 w-full " key={index}>
          <div
            className="bg-gray-100 rounded flex  p-4 h-full  cursor-pointer"
            onClick={() => handleDownload(file.url)}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="font-medium">{file.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FileList;
