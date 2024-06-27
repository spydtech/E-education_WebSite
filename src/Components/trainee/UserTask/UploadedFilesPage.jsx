import React from "react";

const UploadedFilesPage = ({ uploadedFiles }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold py-10 px-10 text-[#1e3a8a] text-center hover:underline">
        Uploaded Files
      </h1>
      <div className="px-10">
        {uploadedFiles &&
          uploadedFiles.map((file, index) => (
            <div key={index} className="my-4">
              <h2 className="text-lg font-semibold">File {index + 1}</h2>
              <p>{file.name}</p>
              <img src={URL.createObjectURL(file)} alt={file.name} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default UploadedFilesPage;
