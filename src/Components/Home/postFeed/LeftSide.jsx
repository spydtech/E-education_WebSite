import React, { useEffect, useState } from "react";
import axios from "axios";
import defaultProfilePic from "../../../assetss/profile/man.png"; // Default profile picture

const LeftSide = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    firstName: "",
    lastName: "",
    profileImage: "",
    email: "", // Ensure this field is included
  });

  const jwt = localStorage.getItem("jwt"); // Retrieve JWT from localStorage

  // Fetch user profile data using JWT
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/users/profile", {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        const user = response.data;
        const fullName = `${user.firstName} ${user.lastName}`;
        
        setFormData({
          fullName,
          firstName: user.firstName,
          lastName: user.lastName,
          profileImage: user.profileImage || defaultProfilePic, // Default profile image fallback
          email: user.email, // Assuming user data includes an email
        });
      } catch (error) {
        console.error("Error fetching user profile data:", error);
      }
    };

    if (jwt) {
      fetchUserProfile();
    }
  }, [jwt]); // Run the effect when `jwt` changes

  const profileStats = [
    { label: "Who viewed your profile", value: 90 },
    { label: "Views of your posts", value: 627 },
  ];

  return (
    <div className="w-[250px] xl:w-[300px] pt-10 pb-6 p-4 h-[320px] bg-[#0098F1] rounded-md">
      <div className="flex flex-col items-center justify-center w-full h-full">
        {/* Profile Picture */}
        <img
          src={formData.profileImage} // Dynamically use the profile image or the default one
          alt="Profile"
          className="h-[80px] w-[80px] rounded-full mb-2 border-4 border-white object-cover"
        />

        {/* User Details */}
        <div className="text-white font-semibold text-lg">
          {formData.firstName} {formData.lastName}
        </div>
        <div className="text-white">{formData.email}</div>

        <hr className="border-t-2 border-white my-4 w-1/2 mx-8" />

        {/* Profile Stats */}
        <div className="gap-4">
          {profileStats.map((stat, index) => (
            <div
              key={index}
              className="flex justify-between items-center text-white gap-16 mt-2"
            >
              <div>{stat.label}</div>
              <div>{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
