import Navbar from "../Navbar";
import Footer from "../Home/footer/Footer";
import React, { useState, useEffect } from 'react';
import { FaCamera } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';


function EditModal({ userData, onSave, onClose }) {
  const [editedData, setEditedData] = useState(userData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData(prevData => ({
      setEditedData(prevData => ({
        ...prevData,
        [name]: value
      }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  onSave(editedData);
};

return (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white p-4 rounded shadow-lg w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%]">
      <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-2">
          <div className="w-1/2 space-y-4">
            <div>
              <label className="block text-sm font-medium">First Name</label>
              <input
                type="text"
                name="firstName"
                value={editedData.firstName}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={editedData.lastName}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Bio</label>
              <textarea
                name="bio"
                value={editedData.bio}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Date Of Birth</label>
              <input
                type="text"
                name="dateOfBirth" // Changed from DateOfBirth
                value={editedData.dateOfBirth} // Changed from DateOfBirth
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="year/month/date"
              />
            </div>
          </div>
          <div className="w-1/2 space-y-4">
            <div>
              <label className="block text-sm font-medium">Gender</label>
              <input
                type="text"
                name="gender"
                value={editedData.gender}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Location</label>
              <input
                type="text"
                name="location"
                value={editedData.location}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="text"
                name="phoneNumber" // Changed from mobileNumber
                value={editedData.phoneNumber} // Changed from mobileNumber
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={editedData.email}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Website</label>
              <input
                type="text"
                name="website" // Changed from Website
                value={editedData.website} // Changed from Website
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
);
}

function Profile() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [formData, setFormData] = useState({});
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (auth.user) {
      const { firstName, lastName, email, phoneNumber, location, bio, gender, dateOfBirth, website, profileImage, coverImage } = auth.user;
      const fullName = `${firstName} ${lastName}`;
      setFormData({
        fullName,
        firstName,
        lastName,
        bio: bio || '',
        gender: gender || '',
        email: email,
        phoneNumber: phoneNumber || '',
        location: location || '',
        dateOfBirth: dateOfBirth || '',
        website: website || '',
        profileImage: profileImage || '',
        coverImage: coverImage || ''
      });
    }
  }, [auth]);

  const handleEdit = () => {
    setShowEditModal(true);
  };

  const handleSave = async (editedData) => {
    try {
      const response = await axios.put(`http://localhost:8080/api/users/${auth.user.id}`, editedData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      if (response.status === 200) {
        setFormData(editedData, formData.coverImage, formData.profileImage);
        dispatch({ type: 'UPDATE_USER', payload: editedData });
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    }
    setShowEditModal(false);
  };


  const handleCloseModal = () => {
    setShowEditModal(false);
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newImage = event.target.result;
        setFormData((prevUserData) => ({
          ...prevUserData,
          profileImage: newImage,
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newImage = event.target.result;
        setFormData((prevUserData) => ({
          ...prevUserData,
          coverImage: newImage,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Navbar />
      <section className="w-full p-2 border-2 shadow-lg overflow-hidden dark:bg-gray-900">
        <div className="flex flex-col">
          <FaCamera className="relative justify-end items-end" />
          <label htmlFor="cover-image-input" className="cursor-pointer">
            <img
              src={formData.coverImage}
              alt="User Cover"
              onClick={() => document.getElementById('cover-image-input').click()}
              className="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem]"

            />
          </label>
          <input type="file" id="cover-image-input" className="hidden" onChange={handleCoverImageChange} accept="image/*" />

          <div className="sm:w-[80%] xs:w-[90%] mx-auto flex ">
            <label htmlFor="profile-image-input" className="cursor-pointer">
              <img
                src={formData.profileImage}
                alt="User Profile"
                className="rounded-md lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]"
                onClick={() => document.getElementById('profile-image-input').click()}
              />

            </label>
            <input type="file" id="profile-image-input" className="hidden" onChange={handleProfileImageChange} accept="image/*" />
            <div className="h-20 w-full bg-gray-300">
              <h1 className="w-full  text-left my-4 sm:mx-4 xs:pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif">
                {formData.fullName}
              </h1>
            </div>
          </div>
          <div className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
            <p className="w-fit text-gray-700 dark:text-gray-400 text-md">{formData.bio}</p>
            <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
              <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                <div className="w-full">
                  <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div className="flex flex-col pb-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">First Name</dt>
                      <dd className="text-lg font-semibold">{formData.firstName}</dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Last Name</dt>
                      <dd className="text-lg font-semibold">{formData.lastName}</dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Date Of Birth</dt>
                      <dd className="text-lg font-semibold">{formData.dateOfBirth}</dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Gender</dt>
                      <dd className="text-lg font-semibold">{formData.gender}</dd>
                    </div>
                  </dl>
                </div>
                <div className="w-full">
                  <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div className="flex flex-col pb-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Location</dt>
                      <dd className="text-lg font-semibold">{formData.location}</dd>
                    </div>
                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Phone Number</dt>
                      <dd className="text-lg font-semibold">{formData.phoneNumber}</dd>
                    </div>
                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email</dt>
                      <dd className="text-lg font-semibold">{formData.email}</dd>
                    </div>
                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Website</dt>
                      <dd className="text-lg font-semibold">{formData.website}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            <button onClick={handleEdit} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
              <FaUserEdit className="inline-block mr-1" />
              Edit Profile
            </button>
            {showEditModal && <EditModal userData={formData} onSave={handleSave} onClose={handleCloseModal} />}
          </div>
        </div>
      </section>
      <Footer />
    </div>

  );
}

export default Profile;