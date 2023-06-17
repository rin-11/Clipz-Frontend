import React, { useState, useEffect } from 'react';
import defaultProfilePicture from '../../../assets/propic.png';
import Edit from '../../../assets/edit.png';
import Logout from '../../../assets/search.png';
import './UserInfo.css';
import EditUser from '../EditUser/EditUser';
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from '../../../api/UserRequest';
import { logoutUser } from '../../../actions/AuthAction';
import { useNavigate } from 'react-router-dom'; 

const UserInfo = ({profilePicture}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.authReducer.authData);
    const userId = user?._id;

    const [userData, setUserData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
    fetchUserData();
    }, []);

    const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/auth');
    }

    const fetchUserData = async () => {
    try {
    if (userId) {
    const response = await getUser(userId);
    setUserData(response.data);
    } else {
    console.log(user);
    }
    } catch (error) {
    console.log(error);
    }
    };

    const displayName = userData?.displayName || 'Display Name';
    const profilePictureSrc = profilePicture ? `/profile/${profilePicture}` : defaultProfilePicture;
    const username = userData?.username || '@Username';

    const handleEditClick = () => {
    setIsEditing(true);
    };

    const handleSave = async (newDisplayName, newProfilePicture) => {
    try {
    const updatedData = {
    displayName: newDisplayName,
    profilePicture: newProfilePicture || userData.profilePicture,
    };
    const response = await updateUser(userId, updatedData);
    setUserData(response.data);
    setIsEditing(false);
    } catch (error) {
    console.log(error);
    }
    };

    const handleCancel = () => {
    setIsEditing(false);
    };

    if (!userData) {
    return <div>User Not Found</div>;
    }

    return (
      <div className="UserInfo">
        <div className="Propic">
          <img src={profilePictureSrc} alt="Profile Picture" />
        </div>
        <div className="ProfileName">
          <h2>{isEditing ? <EditUser onSave={handleSave} onCancel={handleCancel} /> : displayName}</h2>
          <h3>{!isEditing && username}</h3>
          <div className="ProfileButtons">
            <div className="editButton">
            {!isEditing && (
            <button className="editButton" onClick={handleEditClick}>
            <img src={Edit} alt="edit user information" className="editIcon" />
            <h5>Edit Profile</h5>
            </button>
            )}
            </div>
          {!isEditing && (
            <div className="logoutButton">
              <button className="logoutButton" onClick={handleLogout}>
              <img src={Logout} alt="Logout" className="logoutIcon" />
              <h4>Logout</h4>
              </button>
            </div>
          )}
          </div>
        </div>
      </div>
    );
    };

export default UserInfo;