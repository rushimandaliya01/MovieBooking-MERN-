import React, { useState } from "react";

const ProfilePage = () => {
  const [userProfile, setUserProfile] = useState({
    isLoggedIn: true,
    username: "Rushi",
    profilePicture: "https://via.placeholder.com/150",
    bio: "Movie enthusiast exploring the world of cinema.",
    // age: 20,
    // location: "Gujrat, India"
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUserProfile((prevProfile) => ({
        ...prevProfile,
        profilePicture: reader.result,
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
      <div className="max-w-lg w-full p-8 rounded-lg shadow-lg bg-gray-800 text-center">
        <h1 className="text-3xl font-bold mb-4">Profile</h1>
        <div className="relative rounded-full overflow-hidden mx-auto w-40 h-40 mb-4">
          <img src={userProfile.profilePicture} alt="Profile" className="w-full h-full object-cover" />
          <label htmlFor="upload" className="absolute bottom-0 left-0 right-0 bg-blue-500 text-white px-4 py-2 cursor-pointer">Upload</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} id="upload" className="hidden" />
        </div>
        <h2 className="text-2xl mb-2">{userProfile.username}</h2>
        <p className="text-lg mb-4">{userProfile.bio}</p>
        <div className="flex justify-center mb-4">
          {/* <p className="text-lg mr-4">Age: {userProfile.age}</p>
          <p className="text-lg">Location: {userProfile.location}</p> */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
