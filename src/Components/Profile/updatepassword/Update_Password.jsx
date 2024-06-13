// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { API_BASE_URL } from '../../../Config/api';
// import { useSelector } from 'react-redux';

// const UpdatePassword = () => {
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const {auth}=useSelector(state=>state)
  

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (newPassword !== confirmPassword) {
//       setMessage('New passwords do not match');
//       return;
//     }
//     try {
//       // Replace with your API endpoint
//       const email = auth.user.email // You should get the user's email dynamically
//       const response = await axios.put(`${API_BASE_URL}/api/users/password/${email}`, {
//         oldPassword: currentPassword,
//         newPassword: newPassword,
//       });

//       setMessage(response.data);
//     } catch (error) {
//       setMessage('Error updating password: ' + error.response.data);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
//         <h2 className="text-2xl font-bold text-center">Update Password</h2>
//         {message && <p className="text-center text-red-500">{message}</p>}
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block mb-2 text-sm font-medium text-gray-600">Current Password</label>
//             <input
//               type="password"
//               value={currentPassword}
//               onChange={(e) => setCurrentPassword(e.target.value)}
//               className="w-full px-3 py-2 border rounded"
//               required
//             />
//           </div>
//           <div>
//             <label className="block mb-2 text-sm font-medium text-gray-600">New Password</label>
//             <input
//               type="password"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               className="w-full px-3 py-2 border rounded"
//               required
//             />
//           </div>
//           <div>
//             <label className="block mb-2 text-sm font-medium text-gray-600">Confirm New Password</label>
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="w-full px-3 py-2 border rounded"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
//           >
//             Update Password
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdatePassword;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../../Config/api';
import { useSelector } from 'react-redux';

const UpdatePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const { auth } = useSelector(state => state)
  const jwt = localStorage.getItem("jwt")

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage('New passwords do not match');
      return;
    }

    try {
      // Replace with your API endpoint
      const email = auth.user.email  // You should get the user's email dynamically
      const response = await axios.put(`http://localhost:8080/api/users/password/${email}`,  {
        oldPassword,
        newPassword,
        confirmPassword,
      },{
        headers: {
          Authorization: `Bearer ${jwt}`, // Pass the JWT token in the Authorization header
        },
      },);
      if (response.data === "password updated successfully") {
        alert(response.data);
        setMessage('');
      } else {
        setMessage(response.data);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage('Error updating password: ' + JSON.stringify(error.response.data));
      } else {
        setMessage('Error updating password: ' + error.message);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Update Password</h2>
        {message && <p className="text-center text-red-500">{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">Current Password</label>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">Confirm New Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;

