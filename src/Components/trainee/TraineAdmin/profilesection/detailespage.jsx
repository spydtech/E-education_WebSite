
import React, { useState } from "react";
import { RiPencilFill, RiCheckLine } from "react-icons/ri";

const DetailsPage = () => {
  const [details, setDetails] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 8901",
    ad̥dress: "1234 Street Name, City, Country",
  });

  const [editMode, setEditMode] = useState(false);
  const [editedDetails, setEditedDetails] = useState({ ...details });

  const handleEdit = () => {
    setEditMode(true);
    setEditedDetails({ ...details });
  };

  const handleSave = () => {
    setDetails({ ...editedDetails });
    setEditMode(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center items-center h-[370px] md:xl:lg:sm:w-96 w-80 bg-white ">
      <div className="w-full max-w-lg p-8  rounded-lg ">
        <div className="space-y-4">
          {Object.keys(details).map((key) => (
            <div
              key={key}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md"
            >
              <div className="px-4 py-3 flex items-center justify-between">
                <span className="text-gray-600">{key}</span>
                {editMode ? (
                  <input
                    type="text"
                    name={key}
                    value={editedDetails[key]}
                    onChange={handleChange}
                    className="text-gray-800  font-medium border-b border-gray-300 outline-none focus:border-blue-500 ml-4 px-2 py-1 rounded"
                  />
                ) : (
                  <span className="text-gray-800 w-72 text-right font-medium">
                    {details[key]}
                  </span>
                )}
              </div>
            </div>
          ))}
          <div className="flex justify-end mt-4">
            {editMode ? (
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 flex items-center"
              >
                <RiCheckLine className="text-xl mr-2" />
                Save
              </button>
            ) : (
              <button
                onClick={handleEdit}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 flex items-center"
              >
                <RiPencilFill className="text-xl mr-2" />
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
