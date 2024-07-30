// src/pages/history/Profile.js
import React from 'react';

const Profile = () => {
  // Replace with actual user data
  const user = {
    name: 'John Doe',
    avatar: 'https://via.placeholder.com/150' // Replace with actual avatar URL
  };

  return (
    <div className="flex flex-col items-center mb-6">
      <img
        src={user.avatar}
        alt="User Avatar"
        className="w-32 h-32 rounded-full mb-4"
      />
      <h2 className="text-xl font-bold">{user.name}</h2>
    </div>
  );
};

export default Profile;
