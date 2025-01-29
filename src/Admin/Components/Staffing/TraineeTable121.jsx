import React, { useEffect, useState } from "react";

const TraineeTable = () => {
  const [trainees, setTrainees] = useState([]);

  useEffect(() => {
    // Fetch data from local storage
    const storedTrainees = JSON.parse(localStorage.getItem("trainees")) || [];
    setTrainees(storedTrainees);
  }, []);

  return (
    <div className="flex justify-center min-h-screen mx-auto ">
      <div className="bg-white rounded-lg shadow-lg w-full">
        <h2 className="text-2xl font-bold text-center bg-[#001510] text-white py-4 ">
          Trainee List
        </h2>
        <div className="overflow-x-auto">
          {trainees.length > 0 ? (
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">First Name</th>
                  <th className="border border-gray-300 px-4 py-2">Last Name</th>
                  <th className="border border-gray-300 px-4 py-2">Mobile Number</th>
                  <th className="border border-gray-300 px-4 py-2">Email</th>
                  <th className="border border-gray-300 px-4 py-2">Username</th>
                  <th className="border border-gray-300 px-4 py-2">Password</th>
                </tr>
              </thead>
              <tbody>
                {trainees.map((trainee, index) => (
                  <tr key={index} className="text-center">
                    <td className="border border-gray-300 px-4 py-2">{trainee.firstName}</td>
                    <td className="border border-gray-300 px-4 py-2">{trainee.lastName}</td>
                    <td className="border border-gray-300 px-4 py-2">{trainee.mobileNumber}</td>
                    <td className="border border-gray-300 px-4 py-2">{trainee.email}</td>
                    <td className="border border-gray-300 px-4 py-2">{trainee.username}</td>
                    <td className="border border-gray-300 px-4 py-2">{trainee.password}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-gray-500">No trainees registered yet.</p>
          )}
        </div>
      </div>
    </div>
  );``
};

export default TraineeTable;