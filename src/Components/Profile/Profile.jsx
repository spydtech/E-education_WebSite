import Navbar from "../Navbar"
import Footer from "../Home/footer/Footer"
import React, { useState, useEffect } from 'react';
import { FaUserEdit } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../State/Auth/Action";

function EditModal({ userData, onSave, onClose }) {
  const [editedData, setEditedData] = useState(userData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData(prevData => ({
      ...prevData,
      details: {
        ...prevData.details,
        [name]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedData);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Edit Details</h2>
        <form className="" onSubmit={handleSubmit}>
          <div className='flex gap-5'>
            <div>
              <div className="mb-4">
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
                <input type="text" id="bio" name="bio" value={editedData.details.bio} onChange={handleInputChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />

              </div>
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input type="text" id="firstName" name="firstName" value={editedData.details.firstName} onChange={handleInputChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />

              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" id="lastName" name="lastName" value={editedData.details.lastName} onChange={handleInputChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />

              </div>
              <div className="mb-4">
                <label htmlFor="DateOfBirth" className="block text-sm font-medium text-gray-700">Date Of Birth</label>
                <input type="text" id="DateOfBirth" name="DateOfBirth" value={editedData.details.DateOfBirth} onChange={handleInputChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />

              </div>

              <div className="mb-4">
                <label htmlFor="Gender" className="block text-sm font-medium text-gray-700">Gender</label>
                <input type="text" id="Gender" name="Gender" value={editedData.details.Gender} onChange={handleInputChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />

              </div>

            </div>
            <div>
              <div className="mb-4">
                <label htmlFor="Location" className="block text-sm font-medium text-gray-700">Location</label>
                <input type="text" id="Location" name="Location" value={editedData.details.Location} onChange={handleInputChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />

              </div>
              <div className="mb-4">

                <label htmlFor="PhoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="text" id="PhoneNumber" name="PhoneNumber" value={editedData.details.PhoneNumber} onChange={handleInputChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />

              </div>
              <div className="mb-4">
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="text" id="Email" name="Email" value={editedData.details.Email} onChange={handleInputChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />

              </div>
              <div className="mb-4">
                <label htmlFor="Website" className="block text-sm font-medium text-gray-700">Website</label>
                <input type="text" id="Website" name="Website" value={editedData.details.Website} onChange={handleInputChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />

              </div>
            </div>
          </div>


          {/* Repeat for other fields */}
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Save</button>
            <button type="button" onClick={onClose} className="text-gray-500 px-4 py-2 rounded-md">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Profile() {
  const [showEditModal, setShowEditModal] = useState(false);
  const { auth } = useSelector((state) => state)
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjb3ZlcnxlbnwwfDB8fHwxNzEwNzQxNzY0fDA&ixlib=rb-4.0.3&q=80&w=1080',
    profileImage: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxwZW9wbGV8ZW58MHwwfHx8MTcxMTExMTM4N3ww&ixlib=rb-4.0.3&q=80&w=1080',

    details: {
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis labore consectetur voluptatibus mollitia dolorem veniam omnis ut quibusdam minima sapiente repellendus asperiores explicabo, eligendi odit, dolore similique fugiat dolor, doloremque eveniet. Odit, consequatur. Ratione voluptate exercitationem hic eligendi vitae animi nam in, est earum culpa illum aliquam.',

      firstName: 'Samuel',
      lastName: 'Abera',
      DateOfBirth: '21/02/1997',
      Gender: 'Male',
      Location: 'Ethiopia, Addis Ababa',
      PhoneNumber: '+251913****30',
      Email: 'samuelabera87@gmail.com',
      Website: 'https://www.teclick.com'
    }
  });


  const handleEdit = () => {
    setShowEditModal(true);
  };

  const handleSave = (editedData) => {
    setUserData(editedData);
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
        setUserData((prevUserData) => ({
          ...prevUserData,
          profileImage: newImage,
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
          <img src={userData.coverImage}
            alt="User Cover"

            onClick={() => document.getElementById('profile-image-input').click()}
            className="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem]" />

          <div className="sm:w-[80%] xs:w-[90%] mx-auto flex ">
            <label htmlFor="profile-image-input" className="cursor-pointer">
              <img
                src={userData.profileImage}
                alt="User Profile"
                className="rounded-md lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]"
                onClick={() => document.getElementById('profile-image-input').click()}
              />

            </label>
            <input type="file" id="profile-image-input" className="hidden" onChange={handleProfileImageChange} accept="image/*" />
            <div className="h-20 w-full bg-gray-300">
              <h1 className="w-full  text-left my-4 sm:mx-4 xs:pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif">
                {auth.user.firstName} {auth.user.lastName}
              </h1>
            </div>

          </div>
          <div className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
            <p className="w-fit text-gray-700 dark:text-gray-400 text-md">{userData.details.bio}</p>
            <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
              <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                <div className="w-full">
                  <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div className="flex flex-col pb-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">First Name</dt>
                      <dd className="text-lg font-semibold">{auth.user.firstName}</dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Last Name</dt>
                      <dd className="text-lg font-semibold">{auth.user.lastName}</dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Date Of Birth</dt>
                      <dd className="text-lg font-semibold">{userData.details.DateOfBirth}</dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Gender</dt>
                      <dd className="text-lg font-semibold">{userData.details.Gender}</dd>
                    </div>
                  </dl>
                </div>
                <div className="w-full">
                  <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div className="flex flex-col pb-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Location</dt>
                      <dd className="text-lg font-semibold">{userData.details.Location}</dd>
                    </div>
                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Phone Number</dt>
                      <dd className="text-lg font-semibold">{userData.details.PhoneNumber}</dd>
                    </div>
                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email</dt>
                      <dd className="text-lg font-semibold">{auth.user.email}</dd>
                    </div>
                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Website</dt>
                      <dd className="text-lg font-semibold">{userData.details.Website}</dd>

                      {showEditModal && <EditModal userData={userData} onSave={handleSave} onClose={handleCloseModal} />}
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            <button onClick={handleEdit} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
              <FaUserEdit className="inline-block mr-1" />
              Edit Profile
            </button>

          </div>
        </div>
      </section>

      <Footer />
    </div>

  );
}

export default Profile;
