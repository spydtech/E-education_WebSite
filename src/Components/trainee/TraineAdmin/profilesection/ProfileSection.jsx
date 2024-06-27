import React, { useRef, useState } from "react";
import { RiCheckLine, RiPencilFill } from "react-icons/ri";
import Accounts from "./accounts";
import Skills from "./skills";
import DetailsPage from "./detailespage";

const ProfileSection = () => {
  const [avatar, setAvatar] = useState(
    "https://media.istockphoto.com/id/2153160662/photo/young-man-portrait.jpg?s=612x612&w=0&k=20&c=Yfr7DN3ifyfyA7t6tQDMOYpwRj5-OlGqBqLWJH6k6SA="
  );
  const [name, setName] = useState("Ratnapriya");
  const [about, setAbout] = useState("DK002");
  const [showInput, setShowInput] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const imgRef = useRef(null);

  const onImageClick = () => {
    imgRef.current.click();
  };

  const onImgUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleName = () => {
    setShowInput(!showInput);
  };

  const handleAbout = () => {
    setShowAbout(!showAbout);
  };

  return (
    <div className="bg-[#4257f5] min-h-screen flex flex-col items-center justify-start py-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl space-y-8">
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
          {/* Profile and Details section */}
          <div className="bg-white shadow-lg w-full sm:w-[300px] md:w-[350px] lg:w-[400px] mx-auto rounded-lg p-6 flex flex-col items-center">
            <div className="relative mb-6 justify-center items-center">
              <img
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md cursor-pointer hover:opacity-80 transition-opacity duration-300"
                src={avatar}
                onClick={onImageClick}
                alt="Avatar"
              />
              <input type="file" ref={imgRef} onChange={onImgUpload} hidden />
            </div>
            <div className="w-full">
              <div className="mb-4">
                <p className="text-gray-600 font-semibold mb-1">Your Name</p>
                <div className="flex items-center">
                  {showInput ? (
                    <input
                      className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  ) : (
                    <span className="w-full px-3 py-2 border border-transparent bg-gray-100 rounded-xl">
                      {name}
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={handleName}
                    className="ml-3 focus:outline-none text-gray-600 hover:text-green-500 transition"
                  >
                    {showInput ? (
                      <RiCheckLine className="text-xl" />
                    ) : (
                      <RiPencilFill className="text-xl" />
                    )}
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-gray-600 font-semibold mb-1">ID</p>
                <div className="flex items-center">
                  {showAbout ? (
                    <input
                      className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                      type="text"
                      value={about}
                      onChange={(e) => setAbout(e.target.value)}
                    />
                  ) : (
                    <span className="w-full px-3 py-2 border border-transparent bg-gray-100 rounded-xl">
                      {about}
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={handleAbout}
                    className="ml-3 focus:outline-none text-gray-600 hover:text-green-500 transition"
                  >
                    {showAbout ? (
                      <RiCheckLine className="text-xl" />
                    ) : (
                      <RiPencilFill className="text-xl" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white mr-32 shadow-lg w-full sm:w-[300px] md:w-[350px] lg:w-[400px] mx-auto rounded-lg py-6 px-2 flex flex-col items-center">
            <DetailsPage />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
          {/* Accounts and Skills section */}
          {/* <Accounts /> */}
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;