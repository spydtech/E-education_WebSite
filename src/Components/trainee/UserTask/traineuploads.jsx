

// // import React, { useState } from "react";
// // // import FileList from "./FilesFromUser";
// // import FileFromUser from "./FilesFromUser";
// // import TraineeTable from "./TraineeTable";

// // function FileUploadForm() {
// //   const [description, setDescription] = useState("");
// //   const [selectedFile, setSelectedFile] = useState(null);
// //   const [isDragging, setIsDragging] = useState(false);

// //   const handleFileChange = (e) => {
// //     setSelectedFile(e.target.files[0]);
// //   };

// //   const handleDragOver = (e) => {
// //     e.preventDefault();
// //     e.stopPropagation();
// //     setIsDragging(true);
// //   };

// //   const handleDragLeave = (e) => {
// //     e.preventDefault();
// //     e.stopPropagation();
// //     setIsDragging(false);
// //   };

// //   const handleDrop = (e) => {
// //     e.preventDefault();
// //     e.stopPropagation();
// //     setIsDragging(false);
// //     const files = e.dataTransfer.files;
// //     if (files && files.length > 0) {
// //       setSelectedFile(files[0]);
// //     }
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Handle the file upload logic here
// //     console.log("Description:", description);
// //     console.log("Selected file:", selectedFile);
// //   };

// //   return (
// //     <div className="w-full px-4 sm:px-6 lg:px-8">
// //       {/* Heading */}
// //       <h1 className="text-[#FF9B26] pl-0  font-semibold text-lg sm:text-xl">
// //         <span className="border-b-2 border-[#FF9B26]">Uploaded Tasks</span>
// //       </h1>

// //       {/* Main container with the form and FileFromUser in the same row */}
// //       <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6">
// //         {/* File Upload Form */}
// //         <div className="w-full sm:w-[450px] bg-white rounded-lg border-[#FF9B26] border-2 border-solid shadow-sm">
// //           <form className="py-4 px-4 sm:px-6 lg:px-9" onSubmit={handleSubmit}>
// //             <div className="mb-5">
// //               <label
// //                 htmlFor="description"
// //                 className="mb-3 block text-base font-medium text-[#FF9B26]"
// //               >
// //                 Description of file:
// //               </label>
// //               <input
// //                 type="text"
// //                 name="description"
// //                 id="description"
// //                 placeholder="Enter file description"
// //                 value={description}
// //                 onChange={(e) => setDescription(e.target.value)}
// //                 className="w-full rounded-md border-[#FF9B26] placeholder:text-[#FF9B26] bg-white py-3 px-4 sm:px-6 text-base font-medium outline-none focus:border-[#FF9B26] focus:shadow-md"
// //               />
// //             </div>

// //             <div className="mb-6 pt-4">
// //               <label className="mb-5 block text-xl font-semibold text-[#FF9B26]">
// //                 Upload File
// //               </label>

// //               <div
// //                 className={`relative bg-white flex min-h-[150px] sm:min-h-[200px] items-center justify-center rounded-md border ${
// //                   isDragging
// //                     ? "border-solid border-[#FF9B26]"
// //                     : "border-dashed border-[#FF9B26]"
// //                 } p-6 sm:p-12 text-center`}
// //                 onDragOver={handleDragOver}
// //                 onDragLeave={handleDragLeave}
// //                 onDrop={handleDrop}
// //               >
// //                 <input
// //                   type="file"
// //                   name="file"
// //                   id="file"
// //                   className="sr-only"
// //                   onChange={handleFileChange}
// //                 />
// //                 <label
// //                   htmlFor="file"
// //                   className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
// //                 >
// //                   <div>
// //                     <span className="mb-2 block text-lg sm:text-xl font-semibold text-[#FF9B26]">
// //                       {isDragging ? "Drop files here" : "Drag & drop files here"}
// //                     </span>
// //                     <span className="mb-2 block text-base font-medium text-[#FF9B26]">
// //                       Or
// //                     </span>
// //                     <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-4 sm:px-7 text-base font-medium text-white bg-[#FF9B26]">
// //                       Browse
// //                     </span>
// //                   </div>
// //                 </label>
// //               </div>

// //               {selectedFile && (
// //                 <div className="mt-5 rounded-md bg-[#F5F7FB] py-4 px-4 sm:px-8">
// //                   <div className="flex items-center justify-between">
// //                     <span className="truncate pr-3 text-base font-medium text-[#07074D]">
// //                       {selectedFile.name}
// //                     </span>
// //                     <button
// //                       type="button"
// //                       className="text-[#07074D]"
// //                       onClick={() => setSelectedFile(null)}
// //                     >
// //                       <svg
// //                         width="10"
// //                         height="10"
// //                         viewBox="0 0 10 10"
// //                         fill="none"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                       >
// //                         <path
// //                           fillRule="evenodd"
// //                           clipRule="evenodd"
// //                           d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
// //                           fill="currentColor"
// //                         />
// //                         <path
// //                           fillRule="evenodd"
// //                           clipRule="evenodd"
// //                           d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
// //                           fill="currentColor"
// //                         />
// //                       </svg>
// //                     </button>
// //                   </div>
// //                 </div>
// //               )}
// //             </div>

// //             <div>
// //               <button
// //                 type="submit"
// //                 className="hover:shadow-form w-full rounded-md bg-[#FF9B26] py-3 px-6 text-center text-base font-semibold text-white outline-none"
// //               >
// //                 Send File
// //               </button>
// //             </div>
// //           </form>
// //         </div>

// //         {/* FileFromUser Component */}
// //         <div className="w-full sm:w-[450px]">
// //           <FileFromUser />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default FileUploadForm;

// import React, { useState } from "react";
// import FileFromUser from "./FilesFromUser";

// function FileUploadForm() {
//   const [description, setDescription] = useState("");
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [isDragging, setIsDragging] = useState(false);

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setIsDragging(true);
//   };

//   const handleDragLeave = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setIsDragging(false);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setIsDragging(false);
//     const files = e.dataTransfer.files;
//     if (files && files.length > 0) {
//       setSelectedFile(files[0]);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Description:", description);
//     console.log("Selected file:", selectedFile);
//   };

//   return (
//     <div className="w-full flex flex-col md:flex-row gap-4 p-4">
//       {/* File Upload Form */}
//       <h1 className="text-[#FF9B26] p-2 font-semibold text-[20px]">
//         <span className="border-b-2 border-[#FF9B26]">Tasks From Trainee</span>
//       </h1>
//       <div className="flex-1 max-w-full md:max-w-[450px] bg-white rounded-lg border-[#FF9B26] border-2 border-solid shadow-lg">
//         <form className="py-4 px-6 md:px-8" onSubmit={handleSubmit}>
//           <div className="mb-5">
//             <label
//               htmlFor="description"
//               className="mb-3 block text-base font-medium text-[#FF9B26]"
//             >
//               Description of file:
//             </label>
//             <input
//               type="text"
//               name="description"
//               id="description"
//               placeholder="Enter file description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="w-full rounded-md border-[#FF9B26] placeholder:text-[#FF9B26] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#FF9B26] focus:shadow-md"
//             />
//           </div>

//           <div className="mb-6 pt-4">
//             <label className="mb-5 block text-xl font-semibold text-[#FF9B26]">
//               Upload File
//             </label>

//             <div
//               className={`relative bg-white flex min-h-[200px] items-center justify-center rounded-md border ${
//                 isDragging
//                   ? "border-solid border-[#FF9B26]"
//                   : "border-dashed border-[#FF9B26]"
//               } p-6 md:p-12 text-center`}
//               onDragOver={handleDragOver}
//               onDragLeave={handleDragLeave}
//               onDrop={handleDrop}
//             >
//               <input
//                 type="file"
//                 name="file"
//                 id="file"
//                 className="sr-only"
//                 onChange={handleFileChange}
//               />
//               <label
//                 htmlFor="file"
//                 className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
//               >
//                 <div>
//                   <span className="mb-2 block text-xl font-semibold text-[#FF9B26]">
//                     {isDragging ? "Drop files here" : "Drag & drop files here"}
//                   </span>
//                   <span className="mb-2 block text-base font-medium text-[#FF9B26]">
//                     Or
//                   </span>
//                   <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-white bg-[#FF9B26]">
//                     Browse
//                   </span>
//                 </div>
//               </label>
//             </div>

//             {selectedFile && (
//               <div className="mt-5 rounded-md bg-[#F5F7FB] py-4 px-6 md:px-8">
//                 <div className="flex items-center justify-between">
//                   <span className="truncate pr-3 text-base font-medium text-[#07074D]">
//                     {selectedFile.name}
//                   </span>
//                   <button
//                     type="button"
//                     className="text-[#07074D]"
//                     onClick={() => setSelectedFile(null)}
//                   >
//                     <svg
//                       width="10"
//                       height="10"
//                       viewBox="0 0 10 10"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         clipRule="evenodd"
//                         d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
//                         fill="currentColor"
//                       />
//                       <path
//                         fillRule="evenodd"
//                         clipRule="evenodd"
//                         d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
//                         fill="currentColor"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="hover:shadow-form w-full rounded-md bg-[#FF9B26] py-3 px-8 text-center text-base font-semibold text-white outline-none"
//             >
//               Send File
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* FileFromUser Component */}
//       <div className="flex-1 max-w-full md:max-w-[500px] bg-white rounded-lg border-[#FF9B26] border-2 border-solid shadow-lg">
//         <FileFromUser />
//       </div>
//     </div>
//   );
// }

// export default FileUploadForm;

import React, { useState } from "react";
import FileFromUser from "./FilesFromUser";
import TraineeTable from "./TraineeTable";
function FileUploadForm() {
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

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

  return (
    <>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-1  lg:grid-cols-2 lg:px-8">
      {/* Container for the File Upload Form */}
      <div className="flex-1 bg-white rounded-lg  border-[#FF9B26] border-2 border-solid shadow-lg">
        <div className="p-4">
          <h1 className="text-[#FF9B26] font-semibold text-lg mb-4">
            <span className="border-b-2 border-[#FF9B26]">Upload Tasks</span>
          </h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="description"
                className="block text-base mb-2 font-medium text-[#FF9B26]"
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
                className="w-full rounded-md border-[#FF9B26] focus:outline-none focus:ring-[#FF9B26] focus:border-[#FF9B26]  placeholder:text-[#FF9B26] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#FF9B26] focus:shadow-md"
              />
            </div>
  
            <div>
              <label className="block text-xl font-semibold text-[#FF9B26] mb-4">
                Upload File
              </label>
  
              <div
                className={`relative bg-white flex min-h-[200px] items-center justify-center rounded-md border ${
                  isDragging
                    ? "border-solid border-[#FF9B26]"
                    : "border-dashed border-[#FF9B26]"
                } p-6 text-center`}
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
                    <span className="mb-2 block text-xl font-semibold text-[#FF9B26]">
                      {isDragging ? "Drop files here" : "Drag & drop files here"}
                    </span>
                    <span className="mb-2 block text-base font-medium text-[#FF9B26]">
                      Or
                    </span>
                    <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-white bg-[#FF9B26]">
                      Browse
                    </span>
                  </div>
                </label>
              </div>
  
              {selectedFile && (
                <div className="mt-5 rounded-md bg-[#F5F7FB] py-4 px-6">
                  <div className="flex items-center justify-between">
                    <span className="truncate pr-3 text-base font-medium text-[#07074D]">
                      {selectedFile.name}
                    </span>
                    <button
                      type="button"
                      className="text-[#07074D]"
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
                className="hover:shadow-form w-full rounded-md bg-[#FF9B26] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Send File
              </button>
            </div>
          </form>
        </div>
      </div>
  
      {/* FileFromUser Component */}
      <div className="flex-1 bg-white rounded-lg  border-[#FF9B26] border-2 border-solid">
        <FileFromUser />
      </div> 
     
    </div>
    <div>
        <TraineeTable/>
      </div>
    </>
    
  );
 
  
}

export default FileUploadForm;
