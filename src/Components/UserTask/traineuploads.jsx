// import React, { useState } from "react";
// import FileList from "./FilesFromUser";
// import TraineeTable from "./TraineeTable";

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
//     // Handle the file upload logic here
//     console.log("Description:", description);
//     console.log("Selected file:", selectedFile);
//   };

//   return (
//     <div className="grid md:grid-cols-2 grid-cols-1 py-4 gap-4">
//       <div className="mx-auto w-full max-w-md p-6 bg-white  shadow-lg border border-gray-200 h-[500px]  pt-12 rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold text-[#07074D] mb-6 ml-32">
//           Upload files
//         </h1>
//         <form className="space-y-6" onSubmit={handleSubmit}>
//           <div>
//             <label
//               htmlFor="description"
//               className="block text-sm font-medium text-gray-700"
//             >
//               File Description:
//             </label>
//             <input
//               type="text"
//               name="description"
//               id="description"
//               placeholder="Enter file description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Upload File
//             </label>
//             <div
//               className={`relative mt-1 flex items-center justify-center p-6 border-2 ${
//                 isDragging ? "border-indigo-500" : "border-gray-300"
//               } border-dashed rounded-md transition-all duration-200`}
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
//                 className="flex flex-col items-center justify-center cursor-pointer space-y-2"
//               >
//                 <span className="block text-sm font-medium text-gray-500">
//                   {isDragging ? "Drop files here" : "Drag & drop files here"}
//                 </span>
//                 <span className="block text-sm font-medium text-gray-500">
//                   or
//                 </span>
//                 <span className="px-4 py-2 bg-indigo-600 text-white rounded-md">
//                   Browse
//                 </span>
//               </label>
//             </div>

//             {selectedFile && (
//               <div className="mt-4 flex items-center justify-between p-2 bg-gray-100 rounded-md">
//                 <span className="text-sm font-medium text-gray-700">
//                   {selectedFile.name}
//                 </span>
//                 <button
//                   type="button"
//                   className="text-gray-700"
//                   onClick={() => setSelectedFile(null)}
//                 >
//                   <svg
//                     width="16"
//                     height="16"
//                     fill="currentColor"
//                     className="bi bi-x"
//                     viewBox="0 0 16 16"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M4.646 4.646a.5.5 0 011.707-.707L8 6.293l1.646-1.646a.5.5 0 111 .707L9 7.707l1.646 1.646a.5.5 0 01-.707.707L8 8.707l-1.646 1.646a.5.5 0 01-.707-.707L7.293 8l-1.646-1.646a.5.5 0 010-.707z"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             )}
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700"
//             >
//               Send File
//             </button>
//           </div>
//         </form>
//       </div>
//       <div>
//         <FileList />
//       </div>
//       <div className="mt-10">
//         <TraineeTable />
//       </div>
//     </div>
//   );
// }

// export default FileUploadForm;

import React, { useState } from "react";
import FileList from "./FilesFromUser";
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
    // Handle the file upload logic here
    console.log("Description:", description);
    console.log("Selected file:", selectedFile);
  };

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 py-4 gap-4">
      <div className="mx-auto w-full max-w-md p-6 bg-white shadow-lg border border-gray-200 rounded-lg">
        <h1 className="text-2xl font-bold text-[#07074D] mb-6 text-center">
          Upload files
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              File Description:
            </label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Enter file description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload File
            </label>
            <div
              className={`relative mt-1 flex items-center justify-center p-6 border-2 ${
                isDragging ? "border-indigo-500" : "border-gray-300"
              } border-dashed rounded-md transition-all duration-200`}
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
                className="flex flex-col items-center justify-center cursor-pointer space-y-2"
              >
                <span className="block text-sm font-medium text-gray-500">
                  {isDragging ? "Drop files here" : "Drag & drop files here"}
                </span>
                <span className="block text-sm font-medium text-gray-500">
                  or
                </span>
                <span className="px-4 py-2 bg-indigo-600 text-white rounded-md">
                  Browse
                </span>
              </label>
            </div>

            {selectedFile && (
              <div className="mt-4 flex items-center justify-between p-2 bg-gray-100 rounded-md">
                <span className="text-sm font-medium text-gray-700">
                  {selectedFile.name}
                </span>
                <button
                  type="button"
                  className="text-gray-700"
                  onClick={() => setSelectedFile(null)}
                >
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 4.646a.5.5 0 011.707-.707L8 6.293l1.646-1.646a.5.5 0 111 .707L9 7.707l1.646 1.646a.5.5 0 01-.707.707L8 8.707l-1.646 1.646a.5.5 0 01-.707-.707L7.293 8l-1.646-1.646a.5.5 0 010-.707z"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700"
            >
              Send File
            </button>
          </div>
        </form>
      </div>
      <div className="mt-4 md:mt-0">
        <FileList />
      </div>
      <div className="mt-10">
        <TraineeTable />
      </div>
    </div>
  );
}

export default FileUploadForm;
