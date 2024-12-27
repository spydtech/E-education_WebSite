import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FiEdit, FiCheck } from "react-icons/fi";
import { CiEdit } from "react-icons/ci";
function Account() {
  const [formData, setFormData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const { auth } = useSelector((state) => state);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (auth.user) {
      const { firstName, lastName, email, phoneNumber, location } = auth.user;
      const fullName = `${firstName} ${lastName}`;
      setFormData({
        fullName,
        emailAddress: email,
        phoneNumber: phoneNumber || "",
        location: location || "",
      });
    }
  }, [auth]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    setEditMode(false);
  };

  return (
    <div className="flex justify-center lg:px-8">
      <div className="bg-white w-full max-w-4xl">
        <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold">Account</h3>
          <button
            className="text-white bg-green-500 p-3 rounded-full  focus:outline-none focus:ring-4 focus:ring-blue-300"
            onClick={editMode ? handleSubmit : toggleEditMode}
          >
            {editMode ? (
              <FiCheck size={20} className="text-black" />
            ) : (
              <CiEdit size={20} className="text-black" />
            )}
          </button>
        </div>
        <div className="lg:p-6 p-2 lg:space-y-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder=""
                  required
                  disabled={!editMode}
                />
              </div>
              <div>
                <label
                  htmlFor="emailAddress"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="emailAddress"
                  id="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleInputChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder=""
                  required
                  disabled={!editMode}
                />
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Mobile Number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder=""
                  required
                  disabled={!editMode}
                />
              </div>
              <div>
                <label
                  htmlFor="location"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder=""
                  required
                  disabled={!editMode}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Account;
