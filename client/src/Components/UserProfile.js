import React from 'react';
import './UserProfile.css';

const UserProfile = () => {
  return (
    <div className="user-profile-container">
      <h1>User Profile</h1>
      <div className="user-info">
        <h3>Name: John Doe</h3>
        <h3>Email: johndoe@example.com</h3>
        <h3>Member Since: January 2024</h3>
        <button>Edit Profile</button>
      </div>
    </div>
  );
};

export default UserProfile;
