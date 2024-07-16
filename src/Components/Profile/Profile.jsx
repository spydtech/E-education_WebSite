import React, { useState, useEffect } from "react";
import profilebg from "../../assets/profilebg.jpg";
import dp from "../../assets/women2.png";
import { FaRegEdit } from "react-icons/fa";

const UserProfile = () => {
  const defaultFormData = {
    fullName: "John Doe",
    phoneNumber: "1234567890",
    dateOfBirth: "1990-01-01",
    emailId: "john.doe@example.com",
    gender: "Male",
    password: "********",
    profileImage: dp,
    backgroundImage: profilebg,
  };

  const [formData, setFormData] = useState(defaultFormData);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("userProfile");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    } else {
      setFormData(defaultFormData); // Set default data if no stored data
    }
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        profileImage: reader.result,
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleBackgroundImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        backgroundImage: reader.result,
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    localStorage.setItem("userProfile", JSON.stringify(formData));
    setIsEditing(false);
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${formData.backgroundImage})`,
          position: "relative",
        }}
        className="bg-cover bg-center py-12 h-[320px] flex justify-center items-center relative"
      >
        {isEditing && (
          <label
            htmlFor="backgroundImage"
            className="absolute top-2 right-2 cursor-pointer"
          >
            <FaRegEdit className="text-black text-xl" />
            <input
              type="file"
              id="backgroundImage"
              accept="image/*"
              className="hidden"
              onChange={handleBackgroundImageChange}
            />
          </label>
        )}
        {/* <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-black">User Profile</h1>
        </div> */}
      </div>
      <div className="container mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <div className="flex items-center mb-6 justify-start">
          <label htmlFor="profileImage" className="cursor-pointer rounded-3xl">
            <img
              src={formData.profileImage}
              alt="User profile picture"
              className="w-24 h-24 rounded-3xl mr-4"
            />
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              className="hidden rounded-3xl"
              onChange={handleImageChange}
            />
          </label>
          <h2 className="text-3xl font-bold text-[#0098f1]">
            {formData.fullName || "Name"}
          </h2>
        </div>
        <div className="flex justify-center">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <label
                htmlFor="fullName"
                className="block text-sm text-[#f6ac14] mb-3 font-medium text-muted-foreground"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full  border-gray-400 border-2 rounded-md shadow-sm p-4 focus:ring-primary focus:border-primary lg:w-[445px] lg:h-[47px] md:w-[250px] md:h-[25px]"
                placeholder="Enter here"
                disabled={!isEditing}
              />
              {isEditing && (
                <FaRegEdit className="absolute top-1 right-1 text-yellow-400 cursor-pointer" />
              )}
            </div>
            <div className="relative">
              <label
                htmlFor="phoneNumber"
                className="block text-sm mb-3 text-[#f6ac14] font-medium text-muted-foreground"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 w-80 block border-gray-400 border-2 rounded-md shadow-sm p-4 focus:ring-primary focus:border-primary  lg:w-[445px] lg:h-[47px] md:w-[250px] md:h-[25px]"
                placeholder="Enter here"
                disabled={!isEditing}
              />
              {isEditing && (
                <FaRegEdit className="absolute top-1 right-1 text-yellow-400 cursor-pointer" />
              )}
            </div>
            <div className="relative">
              <label
                htmlFor="dateOfBirth"
                className="block text-sm mb-3 text-[#f6ac14] font-medium text-muted-foreground"
              >
                Date Of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-400 border-2 rounded-md shadow-sm p-4 focus:ring-primary focus:border-primary lg:w-[445px] lg:h-[47px] md:w-[250px] md:h-[25px]"
                placeholder="Enter here"
                disabled={!isEditing}
              />
              {isEditing && (
                <FaRegEdit className="absolute top-1 right-1 text-yellow-400 cursor-pointer" />
              )}
            </div>
            <div className="relative">
              <label
                htmlFor="emailId"
                className="block text-sm mb-3 text-[#f6ac14] font-medium text-muted-foreground"
              >
                E-mail ID
              </label>
              <input
                type="email"
                id="emailId"
                value={formData.emailId}
                onChange={handleChange}
                className="mt-1 block w-80 border-gray-400 border-2 rounded-md shadow-sm p-4 focus:ring-primary focus:border-primary lg:w-[445px] lg:h-[47px] md:w-[250px] md:h-[25px]"
                placeholder="Enter here"
                disabled={!isEditing}
              />
              {isEditing && (
                <FaRegEdit className="absolute top-1 right-1 text-yellow-400 cursor-pointer" />
              )}
            </div>
            <div className="relative">
              <label
                htmlFor="gender"
                className="block text-sm mb-3 text-[#f6ac14] font-medium text-muted-foreground"
              >
                Gender
              </label>
              <input
                type="text"
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-400 border-2 rounded-md shadow-sm p-4 focus:ring-primary focus:border-primary lg:w-[445px] lg:h-[47px] md:w-[250px] md:h-[25px]"
                placeholder="Enter here"
                disabled={!isEditing}
              />
              {isEditing && (
                <FaRegEdit className="absolute top-1 right-1 text-yellow-400 cursor-pointer" />
              )}
            </div>
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm mb-3  text-[#f6ac14] font-medium text-muted-foreground"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-400 border-2 rounded-md shadow-sm p-4 focus:ring-primary focus:border-primary lg:w-[445px] lg:h-[47px] md:w-[250px] md:h-[25px]"
                placeholder="Enter here"
                disabled={!isEditing}
              />
              {isEditing && (
                <FaRegEdit className="absolute top-1 right-1 text-yellow-400 cursor-pointer" />
              )}
            </div>
          </form>
        </div>
        <div className="relative lg:bottom-0 lg:right-32 m-5 justify-end items-end flex">
          <div className="mt-6 w-40 h-12 text-center rounded-lg bg-blue-500 flex justify-center items-center">
            {isEditing ? (
              <button
                onClick={handleSave}
                className="px-4 text-white py-2 rounded-lg flex items-center text-center"
              >
                <img
                  aria-hidden="true"
                  alt="save-icon"
                  src="https://openui.fly.dev/openui/24x24.svg?text=💾"
                  className="mr-2 "
                />{" "}
                Save
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 text-white rounded-lg flex items-center text-center"
              >
                <img
                  aria-hidden="true"
                  alt="edit-icon"
                  src="https://openui.fly.dev/openui/24x24.svg?text=✏️"
                  className="mr-2 "
                />{" "}
                Edit profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
