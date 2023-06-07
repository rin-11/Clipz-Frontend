import React, { useState } from 'react';
import defaultProfilePicture from '../../../assets/propic.png';
import Edit from '../../../assets/edit.png';
import Follow from '../../../assets/search.png';
import './UserInfo.css';
import EditUser from '../EditUser/EditUser';

const UserInfo = () => {

  // stores the current display name & is initialized with  'Display Name' value -- still need to connect to MongoDB user info for storage
  const [displayName, setDisplayName] = useState('Display Name');
  // editing mode false to start until button pressed
  const [isEditing, setIsEditing] = useState(false);


  const [profilePicture, setProfilePicture] = useState(defaultProfilePicture); // stores the default profile picture
  const [uploadedProfilePicture, setUploadedProfilePicture] = useState(null); // stores the uploaded profile picture

  // function to set editing to true when edit profile button hit
  const handleEditClick = () => {
    setIsEditing(true); 
  };

  // save updated profile pic and display name 
  const handleSave = (newDisplayName, newProfilePicture) => {
    setDisplayName(newDisplayName || displayName);
    setUploadedProfilePicture(newProfilePicture || uploadedProfilePicture);
    setIsEditing(false);
  };

  // no changes made and editing closed
  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="UserInfo">
      <div className="Propic">
        <img src={isEditing ? uploadedProfilePicture || profilePicture : profilePicture} alt="user profile" />
      </div>
      <div className="ProfileName">
        <h2>{isEditing ? <EditUser onSave={handleSave} onCancel={handleCancel} /> : displayName}</h2>
        <h3>@Username</h3>
        <div className="ProfileRow">
          <div className="editButton">
            {!isEditing && (
              <button className="editButton" onClick={handleEditClick}>
                <h5>Edit Profile</h5>
                <img src={Edit} alt="edit user information" className="editIcon" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
