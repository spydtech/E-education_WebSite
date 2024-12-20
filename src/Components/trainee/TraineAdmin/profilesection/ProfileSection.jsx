import React, { useRef, useState } from "react";
import { RiCheckLine, RiPencilFill } from "react-icons/ri";
// import Accounts from "./accounts";

import { useSelector } from "react-redux";
import { Textarea } from "flowbite-react";
import TraineForgotPassword from "../ForgotPassword/forgotpassword";

const ProfileSection = () => {
  const [avatar, setAvatar] = useState(
    "https://media.istockphoto.com/id/2153160662/photo/young-man-portrait.jpg?s=612x612&w=0&k=20&c=Yfr7DN3ifyfyA7t6tQDMOYpwRj5-OlGqBqLWJH6k6SA="
  );
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const imgRef = useRef(null);
  const auth = useSelector((state) => state.auth);

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
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    address: '',
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Password updated successfully");
  };
 
const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 80 },
    { name: "CSS", level: 75 },
    { name: "Node.js", level: 70 },
  ];
  const themes= localStorage.getItem("theme")
  return (
    <>
    <div className="flex items-center justify-center ">
    
   
<div className={` ${themes === "dark" && "bg-black"} bg-[#204349] w-full max-w-[800px] p-6 rounded-lg shadow-lg mx-auto`}>
  {/* Profile and Details section */}
  <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
    {/* Profile Image */}
    <img
      className="w-32 h-32 rounded-full object-cover border-4 border-white cursor-pointer hover:opacity-80 transition-opacity duration-300"
      src={avatar}
      onClick={onImageClick}
      alt="Avatar"
    />
    {/* Name and ID */}
    <div>
      <h1 className="text-xl sm:text-2xl md:text-xl font-semibold text-white">Vishnu Vardhan</h1>
      <p className="text-white text-sm sm:text-lg">ID 8675643</p>
    </div>
    <input type="file" ref={imgRef} onChange={onImgUpload} hidden />
  </div>

  {/* Additional content section */}
  <div className={`bg-white rounded-xl mt-6 px-6 sm:px-20 py-8 shadow-lg`}>
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        {isEditing ? (
          <>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              placeholder="Full name"
              onChange={handleChange}
              className="w-full px-4 py-2 text-black border-none bg-[#204349] bg-opacity-10 rounded-lg shadow-sm focus:outline-none focus:border-transparent focus:ring-0"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="E - Mail address"
              onChange={handleChange}
              className="w-full px-4 py-2 text-black border-none bg-[#204349] bg-opacity-10 rounded-lg shadow-sm focus:outline-none focus:border-transparent focus:ring-0"
            />
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              placeholder="Mobile number"
              onChange={handleChange}
              className="w-full px-4 py-2 text-black border-none bg-[#204349] bg-opacity-10 rounded-lg shadow-sm focus:outline-none focus:border-transparent focus:ring-0"
            />
            <textarea
              name="address"
              value={formData.address}
              placeholder="Address"
              onChange={handleChange}
              className="w-full px-4 py-2 h-full text-black bg-[#204349] border-none bg-opacity-10 rounded-lg shadow-sm focus:outline-none focus:border-transparent focus:ring-0"
            />
          </>
        ) : (
          <>
            <div className="w-full px-4 py-2 text-black border-none bg-[#204349] bg-opacity-10 rounded-lg shadow-sm">
              {formData.fullName || 'Full name'}
            </div>
            <div className="w-full px-4 py-2 text-black border-none bg-[#204349] bg-opacity-10 rounded-lg shadow-sm">
              {formData.email || 'E - Mail address'}
            </div>
            <div className="w-full px-4 py-2 text-black border-none bg-[#204349] bg-opacity-10 rounded-lg shadow-sm">
              {formData.mobileNumber || 'Mobile number'}
            </div>
            <div className="w-full px-4 py-2 h-full text-black border-none bg-[#204349] bg-opacity-10 rounded-lg shadow-sm">
              {formData.address || 'Address'}
            </div>
          </>
        )}
      </div>
    </form>
    <button
      type="button"
      onClick={handleEditClick}
      className="mb-4 px-4 py-2 bg-[#204349] mt-4 sm:ml-auto text-white rounded-lg block sm:inline-block"
    >
      {isEditing ? 'Save' : 'Edit'}
    </button>
  </div>
</div>


      </div>
     
    <div className={`${themes==="dark"&&"bg-black"}  p-4 rounded-lg shadow-lg  max-w-[800px] md:max-w-[800px] mx-auto mt-8`}>
  <h3 className="text-black font pl-2 text-xl pb-2 font-semibold">Skills</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {skills.map((skill) => (
      <div key={skill.name} className="mb-4">
        <div className="flex justify-between items-center mb-1">
          <h1 className={` ${themes === "dark" ? "bg-black text-white border-white" : ""} text-gray-800 font-semibold`}>{skill.name}</h1>
          <h3 className={` ${themes === "dark" ? "bg-black text-white border-white" : ""} text-gray-600`}>{skill.level}%</h3>
        </div>
        <div className="w-full rounded-full h-2.5 bg-gray-200">
          <div
            className="bg-[#204349] h-2.5 rounded-full"
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      </div>
    ))}
  </div>
</div>

       
   
      
    <div className={` ${themes==="dark"&&"bg-black"} bg-[#204349] w-full max-w-[800px] md:max-w-[800px]  mx-auto p-6 md:p-8 rounded-lg shadow-lg mt-16`}>
    
  <h1 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">Forgot Password</h1>
  
 
  <form className="space-y-4 md:space-y-6">
    {/* Input Fields */}
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full px-4 py-3 text-white border placeholder:text-white border-white bg-transparent rounded-lg shadow-sm focus:outline-none focus:ring-0 focus:border-white"
    />

    <input
      type="password"
      placeholder="New Password"
      className="w-full px-4 py-3 text-white border placeholder:text-white border-white bg-transparent rounded-lg shadow-sm focus:outline-none focus:ring-0 focus:border-white"
    />

    <input
      type="password"
      placeholder="Confirm New Password"
      className="w-full px-4 py-3 text-white border placeholder:text-white border-white bg-transparent rounded-lg shadow-sm focus:outline-none focus:ring-0 focus:border-white"
    />
    
    {/* Update Password Button */}
    <button
      type="submit"
      className="w-full py-3 text-lg font-semibold bg-white text-[#204349] rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
    onClick={handleSubmit}
    >
      Update Password
    </button>
  </form>
</div>

      </>  
     
  );
};

export default ProfileSection;