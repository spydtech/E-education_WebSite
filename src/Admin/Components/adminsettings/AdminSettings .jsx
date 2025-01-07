import React, { useState, useEffect } from "react";

// Simulate an API call to fetch profile data
const fetchProfileData = async () => {
  // Replace with actual API call
  return {
    id: "12345",
    name: "John Doe",
    email: "johndoe@example.com",
    mobile: "123-456-7890",
    profileImage: "https://example.com/default-profile.jpg", // Placeholder image URL
  };
};

// Simulate an API call to update profile data
const updateProfileData = async (profile) => {
  // Replace with actual API call
  console.log("Profile updated:", profile);
  return { success: true };
};

function AdminSettings() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profile, setProfile] = useState({
    id: "",
    name: "",
    email: "",
    mobile: "",
    profileImage: "",
  });
  const [theme, setTheme] = useState("light");
  const [activeTab, setActiveTab] = useState("password");

  const themes = [
    {
      name: "grey-light",
      value: "grey-light",
      colorClass: "bg-gradient-to-b from-[#FFFFFF] to-grey-200 text-black",
    },
    {
      name: "Light",
      value: "light",
      colorClass: "bg-gradient-to-b from-[#4B6CB7] to-[#182848] text-black",
    },
    {
      name: "Liner Blue",
      value: "liner-blue",
      colorClass: "bg-gradient-to-b from-[#C04848]  to-[#480048] text-black",
    },
    {
      name: "Linear",
      value: "linear",
      colorClass: "bg-gradient-to-b from-[#40E0D0] via-[#FF8C00] to-[#FF0080] text-black",
    },
    {
      name: "Green",
      value: "green",
      colorClass: "bg-gradient-to-b from-[#00BF8F]  to-[#001510] text-black",
    },
    {
      name: "Red",
      value: "red",
      colorClass: "bg-gradient-to-b from-[#2980B9] to-[#2C3E50] text-black",
    },
    {
      name: "Linear",
      value: "linear-blue",
      colorClass: "bg-gradient-to-b from-[#2C3E50] to-[#4CA1AF] text-black",
    },
  ];
  
  
  
  // Fetch profile data on component mount
  useEffect(() => {
    const loadProfile = async () => {
      const profileData = await fetchProfileData();
      setProfile(profileData);
    };
    loadProfile();
  }, []);

  const handlePasswordUpdate = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!newPassword.trim()) {
      alert("Password cannot be empty!");
      return;
    }
    console.log("Password updated:", newPassword);
    alert("Password updated successfully!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleProfileUpdate = async () => {
    if (!profile.name.trim() || !profile.email.trim() || !profile.mobile.trim()) {
      alert("Name, Email, and Mobile cannot be empty!");
      return;
    }
    const response = await updateProfileData(profile);
    if (response.success) {
      alert("Profile updated successfully!");
      // Optionally, save the updated profile to localStorage or sessionStorage
      localStorage.setItem("profile", JSON.stringify(profile));
    } else {
      alert("Failed to update profile.");
    }
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme); // Update state
    localStorage.setItem("theme", newTheme); // Persist theme to localStorage
  
    // Find the selected theme
    const selectedTheme = themes.find((t) => t.value === newTheme);
    if (selectedTheme) {
      document.body.className = selectedTheme.colorClass; // Apply the theme dynamically
    }
  };
  

  // Handle image change (file upload for profile picture)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          profileImage: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">Admin Settings</h1>

      {/* Tab Navigation */}
      <div className="flex justify-center space-x-6">
        <button
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
            activeTab === "password"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("password")}
        >
          Update Password
        </button>
        <button
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
            activeTab === "profile"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("profile")}
        >
          Profile Settings
        </button>
        <button
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
            activeTab === "theme"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("theme")}
        >
          Theme Settings
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "password" && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Update Password</h2>
            <div className="space-y-4 mt-4">
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full p-3 border rounded-lg"
                placeholder="Current Password"
              />
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full p-3 border rounded-lg"
                placeholder="New Password"
              />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 border rounded-lg"
                placeholder="Confirm New Password"
              />
              <button
                onClick={handlePasswordUpdate}
                className="w-full bg-blue-500 text-white py-2 rounded-lg"
              >
                Update Password
              </button>
            </div>
          </div>
        )}

        {activeTab === "profile" && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Profile Settings</h2>
            <div className="space-y-4 mt-4">
              {/* Profile Image Upload */}
              <div className="flex items-center space-x-4">
                <img
                  src={profile.profileImage}
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="file:bg-blue-500 file:text-white file:py-2 file:px-4 file:rounded-lg"
                />
              </div>
              {/* Name */}
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="w-full p-3 border rounded-lg"
                placeholder="Name"
              />
              {/* Email */}
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="w-full p-3 border rounded-lg"
                placeholder="Email"
              />
              {/* Mobile */}
              <input
                type="text"
                value={profile.mobile}
                onChange={(e) => setProfile({ ...profile, mobile: e.target.value })}
                className="w-full p-3 border rounded-lg"
                placeholder="Mobile"
              />
              {/* ID */}
              <input
                type="text"
                value={profile.id}
                disabled
                className="w-full p-3 border rounded-lg bg-gray-100"
                placeholder="User ID"
              />
              <button
                onClick={handleProfileUpdate}
                className="w-full bg-green-500 text-white py-2 rounded-lg"
              >
                Update Profile
              </button>
            </div>
          </div>
        )}

        {activeTab === "theme" && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Theme Settings</h2>
            <div className="space-y-4 mt-4">
              <div className="flex flex-wrap gap-4">
                {themes.map((themeOption) => (
                  <button
                    key={themeOption.value}
                    onClick={() => handleThemeChange(themeOption.value)}
                    className={`w-20 h-20 rounded-lg transition-all duration-300 ${
                      theme === themeOption.value
                        ? "border-4 border-blue-500"
                        : "border-2 border-gray-300"
                    } ${themeOption.colorClass}`}
                  >
                    {themeOption.name}
                  </button>
                ))}
              </div>
              <button
                className="w-full bg-gray-500 text-white py-2 rounded-lg"
                onClick={() => alert(`Current theme: ${theme}`)}
              >
                Apply Theme
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminSettings;
