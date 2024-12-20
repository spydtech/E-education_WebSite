import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar";
import FileList from "../../trainee/UserTask/FilesFromUser";
import Certificate121 from "../WorkSpace1/Certificate121";
// import Certificate121 from "../Profile/WorkSpace1/Certificate121";
// import IMG from "../../assets/WorkSpace.png";
// import FooterPart from "../Home/footer/Footer";
// import certificate from "../../../../../../../assetss/certficate.png";
// import certificate from "..";


import IMG from "../../../assets/Wspace.png";
import Footer from "../../Home/footer/Footer";

import { FaArrowCircleDown } from "react-icons/fa";

function WSpace({ acceptedFilesCount, totalFiles }) {
  const files = [
    {
      name: "priya",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsEH9evsckWldIq8ca1TW74RGPc2FoxWHmg&s",
      type: "image",
      status: "accepted", // Add status to each file
    },
    {
      name: "priya",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsEH9evsckWldIq8ca1TW74RGPc2FoxWHmg&s",
      type: "image",
      status: "rejected",
    },
    {
      name: "priya",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsEH9evsckWldIq8ca1TW74RGPc2FoxWHmg&s",
      type: "image",
      status: "accepted",
    },
    {
      name: "priya",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSq5Nz20K1tTq5wvQKkWjnNvHAK05jE-EtQ&s",
      type: "image",
      status: "rejected",
    },
  ];

  const [isBrowseProjectOpen, setIsBrowseProjectOpen] = useState(false);
  const [completedTasks, setCompletedTasks] = useState(7);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileStatuses, setFileStatuses] = useState(
    files.map((file) => file.status)
  );
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [Status, setStatus] = useState(0);
  const [selectedAction, setSelectedAction] = useState("");
  useEffect(() => {
    const storedFiles = JSON.parse(localStorage.getItem("uploadedFiles")) || [];
    setUploadedFiles(storedFiles);
    setCompletedTasks(storedFiles.filter((file) => file !== null).length);
    const storedStatus = parseInt(localStorage.getItem("Status"), 10) || 0;
    setStatus(storedStatus);
  }, []);

  const openBrowseProject = () => {
    setIsBrowseProjectOpen(true);
  };

  const closeBrowseProject = () => {
    setIsBrowseProjectOpen(false);
  };

  const handleFileUpload = (index, file) => {
    if (file) {
      setUploadedFiles((prevFiles) => {
        const updatedFiles = [...prevFiles];
        updatedFiles[index] = file;
        localStorage.setItem(
          "uploadedFiles",
          JSON.stringify(updatedFiles.filter((file) => file !== null))
        );
        return updatedFiles;
      });
      setCompletedTasks((prevCount) => prevCount + 1);
    }
  };

  const awardCertificate = () => {
    if (completedTasks === files.length) {
      alert(
        "Congratulations! You've completed all tasks and earned the certificate!"
      );
    }
  };

  // const handleDownload = (file) => {
  //   fetch(file.url)
  //     .then((res) => res.blob())
  //     .then((blob) => {
  //       const url = window.URL.createObjectURL(blob);
  //       const link = document.createElement("a");
  //       link.href = url;
  //       link.download = file.url.split("/").pop();
  //       document.body.appendChild(link);
  //       link.click();
  //       document.body.removeChild(link);
  //     });
  // };

  // const handleAction = (index, action) => {
  //   if (action === "download") {
  //     handleDownload(files);
  //   } else {
  //     console.log(`Action "${action}" selected for file at index ${index}`);
  //   }
  // };
  
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

  const handleAction = (e) => {
    const action = e.target.value;
    setSelectedAction(action); // Update the state with the selected action

    if (action === "download") {
      handleDownload(file); // Only trigger download when the "download" option is selected
    } else {
      console.log(`Action "${action}" selected for file at index ${index}`);
    }
  };
  const handleAccept = (index, e) => {
    e.stopPropagation();
    setFileStatuses((prev) => {
      const newStatuses = [...prev];
      newStatuses[index] = "accepted";
      return newStatuses;
    });
    setStatus((prevStatus) => prevStatus + 1); // Increase Status count by 1
    localStorage.setItem("Status", Status); // Store Status in local storage
  };

  const handleReject = (index, e) => {
    e.stopPropagation();
    setFileStatuses((prev) => {
      const newStatuses = [...prev];
      newStatuses[index] = "rejected";
      return newStatuses;
    });
    // setStatus((prevStatus) => prevStatus - 1); // Decrease Status count by 1
    localStorage.setItem("Status", Status); // Store Status in local storage
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Description:", description);
    console.log("Selected file:", selectedFile);
  };

  // const progressBarWidth = `${(Status / files.length) * 100}%`; // Calculate width based on Status

  return (
    <div className="">
      <Navbar />
     
      <div className="flex justify-center items-center">
        <div className="flex flex-col-reverse md:flex-row justify-center  md:items-start items-center md:justify-between  p-4">
        <div className="p-4 border bg-white lg:w-[500px] w-[300px]  h-[340px]  mt-10  rounded-lg  shadow-sm-light shadow-[#0098f1]">
            <div className="flex items-center ">
              <div className=" h-[300px] space-y-16">
                <div className="">
                  <button
                    onClick={openBrowseProject}
                    href="#"
                    className="font-bold py-4 text-xl leading-none hover:underline bg-gradient-to-r from-[#0098f1] to-[#F19E22] bg-clip-text text-transparent transition duration-500 ease-in-out"
                  >
                    Browse your Projects
                  </button>

                  {isBrowseProjectOpen && (
                    <div className="fixed rounded-md inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
                      <div className="relative h-96 w-auto max-w-3xl m-4 overflow-y-auto max-h-full">
                        <div className="bg-[#0098f1]  rounded-lg">
                          <div className=" text-white text-xl p-2">
                            Browse Projects
                          </div>
                          <div className="text-white lg:text-lg text-sm p-2">
                            Projects give you real-world challenges to solve
                            with industry tools, and produce work samples that
                            help you demonstrate your capabilities and stand
                            out.
                          </div>
                        </div>
                        <div className="bg-white border-[#0098f1]  relative flex flex-col p-4 lg:p-8">
                       
    <div className="mx-auto w-full border-2 border-[#0098f1] h-auto max-w-[450px] bg-white shadow-sm-light"> 
      <div className="bg-[#0098f1] h-32">
      <h1 className="font-bold text-xl text-white p-4"> Browse Projects</h1>
      </div> 
      <div className="flex p-3 justify-between">
  <h1 className="text-[#F6AC14] text-xl border-b-2 border-[#F6AC14]">upload tasks</h1>
  <h2 className="text-[#F6AC14] text-xl border-b-2 border-[#F6AC14]">Tasks From Trainee</h2>
</div>

  <form className="py-4 px-9" onSubmit={handleSubmit}>
    <div className="mb-5">
      <label
        htmlFor="description"
        className="mb-3 block text-lg font-medium text-[#0098f1]"
      >
        Description of file:
      </label>
      <input
        type="text"
        name="description"
        id="description"
        placeholder="Enter file description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full rounded-md border-2 border-[#0098f1] bg-white py-3 px-6 text-base font-medium placeholder:text-[#0098f1] outline-none focus:border-[#0098f1] focus:shadow-md"
      />
    </div>

    <div className="mb-6 pt-4">
      <label className="mb-5 block text-lg font-semibold text-[#0098f1]">
        Upload File
      </label>

      <div
        className={`relative bg-white flex min-h-[200px] items-center justify-center rounded-md border ${
          isDragging ? "border-solid border-[#6A64F1]" : "border-dashed border-[#6A64F1]"
        } p-12 text-center`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          name="file"
          id="file"
          className="sr-only"
          onChange={handleFileChange}
        />
        <label
          htmlFor="file"
          className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
        >
          <div>
            <span className="mb-2 block text-lg font-semibold text-[#0098f1]">
              {isDragging ? "Drop files here" : "Drag & drop files here"}
            </span>
            <span className="mb-2 block text-base font-medium text-[#0098f1]">
              Or
            </span>
            <span className="inline-flex rounded border border-[#0098f1] py-2 px-7 text-base font-medium text-[#0098f1]">
              Browse
            </span>
          </div>
        </label>
      </div>

      {selectedFile && (
        <div className="rounded-md bg-[#F5F7FB] py-4 px-8">
          <div className="flex items-center justify-between">
            <span className="truncate pr-3 text-base font-medium text-[#0098f1]">
              {selectedFile.name}
            </span>
            <button
              type="button"
              className="text-[#0098f1]"
              onClick={() => setSelectedFile(null)}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>

    <div>
      <button
        type="submit"
        className="hover:shadow-form w-full rounded-md bg-[#0098f1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
      >
        Send File
      </button>
    </div>
  </form>
</div>

                      
  <div className="flex mt-5 bg-white rounded-lg shadow-sm-light h-auto w-auto flex-col lg:w-4/6 sm:mx-auto sm:mb-2 -mx-2  border-2 border-[#0098f1]">
  <div className="bg-[#0098f1] h-32">
      <h1 className="font-bold text-xl text-white p-4"> Browse Projects</h1>
    </div>
      
  {/* <p className="block text-xl pl-4  font-semibold text-[#0098f1]">
    Tasks From Trainee
  </p> */}
    <div className="flex p-3 justify-between">
  <h1 className="text-[#F6AC14] text-xl border-b-2 border-[#F6AC14]">upload tasks</h1>
  <h2 className="text-[#F6AC14] text-xl border-b-2 border-[#F6AC14]">Tasks From Trainee</h2>
</div>
  {files.map((file, index) => (
    <div className="p-2 sm:w-1/2 w-full" key={index}>
      <div
        className=" rounded flex p-4 h-full cursor-pointer items-center justify-between"
        onClick={() => handleDownload(file, index)}
      >
        <div className="flex items-center">
          <FaArrowCircleDown className="text-[#0098f1] mr-2 " />
          <div className="flex flex-col">
            <span className="font-medium">{file.name}</span>
            <span className="text-gray-500 text-sm">{file.description}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 ml-6 lg:ml-20">
      
        {/* <select
      className="p-2 rounded-md border focus:border-[#0098f1] border-[#0098f1] focus:ring-[rgb(0,152,241)] text-[#0098f1]"
      onChange={(e) => handleDownload(index, e.target.value)}
      defaultValue=""
    >
      <option value="" disabled>
        Select Action
      </option>
      <option value="Accepted">Completed</option>
      <option value="Rejected">Pending</option>
      <option value="download" onClick={handleAction}>Download</option>
    </select> */}
    <select
      className="p-2 rounded-md border focus:border-[#0098f1] border-[#0098f1] focus:ring-[rgb(0,152,241)] text-[#0098f1]"
      onChange={handleAction}
      value={selectedAction}
    >
      <option value="" disabled>
        Select Action
      </option>
      <option value="Accepted">Completed</option>
      <option value="Rejected">Pending</option>
      <option value="download">Download</option>
    </select>
        </div>
      </div>
    </div>
  ))}
</div>

                          <div className="mt-4 text-white">
                            <button
                              className="bg-[#0098f1] p-2 w-[100px] text-white rounded-lg"
                              onClick={() => {
                                closeBrowseProject();
                                awardCertificate();
                              }}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <p className="lg:text-lg text-sm text-[#0098f1]">
                    Showcase your skills to recruiters with job-relevant
                    projects Add projects here to demonstrate your technical
                    expertise and ability to solve real-world problems.
                  </p>
                </div>
                <div className="py-4">
                  <span className="text-lg bg-gradient-to-r from-[#0098f1]  to-[#F19E22] bg-clip-text text-transparent font-semibold">
                    Work Progress
                  </span>
                  <div className="w-auto h-4 bg-[#0098f1] bg-opacity-30 rounded-lg mt-4 relative">
                    <div
                      id="progressBarWidth"
                      className="h-full bg-[#0098f1] rounded-lg"
                      style={{
                        // width: progressBarWidth,
                        transition: "width 0.5s",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <img
              src={IMG}
              className="md:w-[500px] md:h-[500px] w-auto h-auto"
              alt="Workspace"
            />
          </div>
        </div>
      </div>

      {uploadedFiles.length > 0 && (
        <div className="grid md:lg:xl:grid-cols-2 grid-cols-1  gap-y-20 py-4 px-4">
          <div>
            <FileList files={uploadedFiles} />
          </div>
        </div>
      )}

      <Certificate121 />
      <Footer />
    </div>
  );
}

export default WSpace;
